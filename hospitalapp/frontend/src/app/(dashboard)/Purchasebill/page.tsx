'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Trash2, Plus, X, User, Users, Edit, Save, ChevronDown } from 'lucide-react';
import { SearchableSelect } from '@/components/SearchableSelect';
import API from '@/lib/axios';

const API_BASE = API.defaults.baseURL;

// Types
interface Supplier {
    id: number;
    name: string;
    address: string;
    gstNo: string;
}

interface Medicine {
    id: number;
    itemCode: string;
    medicineName: string;
    type: string;
    packItem: string;
    purchaseRate: number;
    salesRate: number;
    gst: number;
    hsnCode: string;
}

interface PurchaseItem {
    id: number;
    itemCode: string;
    type: string;
    packItem: string;
    medicineId: number;
    medicineName: string;
    batchNo: string;
    expiryDate: string;
    qty: number;
    freeQty: number;
    purchaseRate: number;
    salesRate: number;
    gst: number;
    totalAmount: number;
    hsnCode: string;

    baseAmount?: number;
    gstAmount?: number;
    cgstAmount?: number;
    sgstAmount?: number;
    igstAmount?: number;
    mrp?: number;
    discountPercent?: number;
    discountAmount?: number;
}

interface PurchaseBill {
    purchaseId: number;
    date: string;
    supplierId: number;
    supplierName: string;
    supplierAddress: string;
    gst: string;
    invoiceNo: string;
    invoiceDate: string;
    paymentType: string;
    items: PurchaseItem[];
    grossTotal: number;
    gstTotal: number;
    roundOff: number;
    discount: number;
    cgst: number;
    sgst: number;
    igst: number;
    cessAmount: number;
    finalTotal: number;
    taxType?: 'intra' | 'inter';
    isCancelled?: boolean;
}

const PurchaseBillPage: React.FC = () => {
    const [purchaseBill, setPurchaseBill] = useState<PurchaseBill>({
        purchaseId: 1,
        date: new Date().toISOString().split('T')[0],
        supplierId: 0,
        supplierName: '',
        supplierAddress: '',
        gst: '',
        invoiceNo: '',
        invoiceDate: new Date().toISOString().split('T')[0],
        paymentType: 'Credit',
        items: [
            {
                id: Date.now(),
                itemCode: '',
                medicineId: 0,
                type: '',
                packItem: '',
                medicineName: '',
                batchNo: '',
                expiryDate: '',
                qty: 1,
                freeQty: 0,
                purchaseRate: 0,
                salesRate: 0,
                gst: 0,
                totalAmount: 0,
                hsnCode: '',
                discountPercent: 0, // ✅ set this default
                baseAmount: 0,
                gstAmount: 0,
                cgstAmount: 0,
                sgstAmount: 0,
                igstAmount: 0
            }
        ],
        grossTotal: 0,
        gstTotal: 0,
        roundOff: 0,
        discount: 0,
        cgst: 0,
        sgst: 0,
        igst: 0,
        cessAmount: 0,
        finalTotal: 0
    });

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [medicines, setMedicines] = useState<Medicine[]>([]);
    const [medicineSearches, setMedicineSearches] = useState<Record<string | number, string>>({});
    const [loading, setLoading] = useState(false);
    const [editingItem, setEditingItem] = useState<number | null>(null);

    const isCancelled = purchaseBill.isCancelled === true;
    const isFinalized = purchaseBill.finalTotal > 0; // Or use a separate status field like purchaseBill.status === 'finalized'


    const inputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});
    const fieldRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});


    // Fetch suppliers from API
    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/Suppliers`);
                const data = await res.json();
                setSuppliers(data);
            } catch (error) {
                console.error('Error fetching suppliers:', error);
            }
        };
        fetchSuppliers();
    }, []);

    // Fetch medicines from API
    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/Medicines/dropdown`);
                if (!res.ok) {
                    throw new Error('Failed to fetch medicines');
                }
                const medicineData = await res.json();
                setMedicines(medicineData);
            } catch (error) {
                console.error('Error fetching medicines:', error);
            }
        };
        fetchMedicines();
    }, []);


    // Filter medicines based on search term
    const getFilteredMedicines = (itemId: number) => {
        const searchTerm = medicineSearches[itemId] || '';
        return medicines.filter((medicine) =>
            medicine.medicineName?.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
    };

    // Add new item row
    const addItem = () => {
        const newItem: PurchaseItem = {
            id: Date.now(),
            medicineId: 0,
            medicineName: '',
            itemCode: '',
            type: '',
            packItem: '',
            batchNo: '',
            expiryDate: '',
            qty: 1,
            freeQty: 0,
            purchaseRate: 0,
            salesRate: 0,
            gst: 0,
            hsnCode: '',
            discountPercent: 0, // ✅ set this default
            totalAmount: 0,
            baseAmount: 0,
            gstAmount: 0,
            cgstAmount: 0,
            sgstAmount: 0,
            igstAmount: 0,
        };

        setPurchaseBill(prev => ({
            ...prev,
            items: [...prev.items, newItem]
        }));
    };

    // Remove item
    const removeItem = (itemId: number) => {
        if (purchaseBill.isCancelled || purchaseBill.finalTotal > 0) {
            alert("This bill is finalized or cancelled. Items cannot be deleted.");
            return;
        }

        setPurchaseBill(prev => ({
            ...prev,
            items: prev.items.filter(item => item.id !== itemId)
        }));
    };


    // Update item
    const updateItem = (itemId: number, field: keyof PurchaseItem, value: any) => {
        setPurchaseBill(prev => {
            const updatedItems = prev.items.map(item => {
                if (item.id === itemId) {
                    const updatedItem = { ...item };

                    // Parse and set value
                    if (
                        field === 'qty' ||
                        field === 'freeQty' ||
                        field === 'purchaseRate' ||
                        field === 'salesRate' ||
                        field === 'gst' ||
                        field === 'mrp' ||
                        field === 'discountPercent'
                    ) {
                        (updatedItem as any)[field] = parseFloat(value) || 0;
                    } else {
                        (updatedItem as any)[field] = value;
                    }

                    // Recalculate
                    const baseBeforeDiscount = updatedItem.qty * updatedItem.purchaseRate;
                    const discountAmount = (baseBeforeDiscount * (updatedItem.discountPercent || 0)) / 100;
                    const baseAmount = baseBeforeDiscount - discountAmount;
                    const gstAmount = (baseAmount * updatedItem.gst) / 100;

                    if (prev.taxType === 'intra') {
                        updatedItem.cgstAmount = gstAmount / 2;
                        updatedItem.sgstAmount = gstAmount / 2;
                        updatedItem.igstAmount = 0;
                    } else {
                        updatedItem.cgstAmount = 0;
                        updatedItem.sgstAmount = 0;
                        updatedItem.igstAmount = gstAmount;
                    }

                    updatedItem.baseAmount = baseAmount;
                    updatedItem.gstAmount = gstAmount;
                    updatedItem.totalAmount = baseAmount + gstAmount;

                    return updatedItem;
                }
                return item;
            });

            // ✅ Recalculate totals based on updated items
            const gstTotal = updatedItems.reduce((sum, item) => sum + (item.gstAmount || 0), 0);
            const cgst = updatedItems.reduce((sum, item) => sum + (item.cgstAmount || 0), 0);
            const sgst = updatedItems.reduce((sum, item) => sum + (item.sgstAmount || 0), 0);
            const igst = updatedItems.reduce((sum, item) => sum + (item.igstAmount || 0), 0);

            return {
                ...prev,
                items: updatedItems,
                gstTotal,
                cgst,
                sgst,
                igst
            };
        });
    };


    const isKeralaGST = (gstNo: string): boolean => gstNo?.slice(0, 2) === '32';

    useEffect(() => {
        const grossTotal = purchaseBill.items.reduce((sum, item) => sum + (item.qty * item.purchaseRate), 0);
        const gstTotal = purchaseBill.items.reduce((sum, item) => sum + (item.gstAmount || 0), 0);
        const cgst = purchaseBill.items.reduce((sum, item) => sum + (item.cgstAmount || 0), 0);
        const sgst = purchaseBill.items.reduce((sum, item) => sum + (item.sgstAmount || 0), 0);
        const igst = purchaseBill.items.reduce((sum, item) => sum + (item.igstAmount || 0), 0);

        const roundOff = Math.round((grossTotal + gstTotal - purchaseBill.discount) * 100) / 100 - (grossTotal + gstTotal - purchaseBill.discount);
        const finalTotal = grossTotal + gstTotal - purchaseBill.discount + roundOff + purchaseBill.cessAmount;

        setPurchaseBill(prev => ({
            ...prev,
            grossTotal,
            gstTotal,
            cgst,
            sgst,
            igst,
            roundOff,
            finalTotal
        }));
    }, [purchaseBill.items, purchaseBill.discount, purchaseBill.cessAmount]);


    // Save purchase bill
    const savePurchaseBill = async () => {
        try {
            console.log('Saving purchase bill:', JSON.stringify(purchaseBill, null, 2));
            alert('Purchase bill saved successfully!');
        } catch (err) {
            console.error('Failed to save purchase bill:', err);
        }
    };

    const cancelPurchaseBill = async () => {
        const confirmed = window.confirm('Are you sure you want to cancel this bill?');
        if (!confirmed) return;

        try {
            // Call backend to mark cancelled (PUT /api/PurchaseBills/{id}/cancel)
            await API.put(`/api/PurchaseBills/${purchaseBill.purchaseId}/cancel`);

            // Update local UI state
            setPurchaseBill((prev) => ({
                ...prev,
                isCancelled: true,
                items: prev.items.map((item) => ({
                    ...item,
                    medicineName: `[CANCELLED] ${item.medicineName}`,
                })),
            }));

            alert('Purchase bill marked as CANCELLED!');
        } catch (error) {
            console.error('Error cancelling bill:', error);
            alert('Failed to cancel purchase bill.');
        }
    };

    const formatExpiry = (value: string) => {
        if (!value) return '';
        const [year, month] = value.split('-');
        return `${month}-${year}`;
    };

    const handleExpiryChange = (input: string, itemId: number) => {
        const cleaned = input.replace(/[^\d]/g, '');

        let month = cleaned.slice(0, 2);
        let year = cleaned.slice(2, 6);

        if (month.length === 1 && parseInt(month) > 1) {
            month = '0' + month;
        }

        const formattedInput = [month, year].filter(Boolean).join('-');
        setMedicineSearches(prev => ({ ...prev, [`expiry-${itemId}`]: formattedInput }));

        // If full valid date, save to item and clear temp state
        if (month.length === 2 && year.length === 4) {
            const dateValue = `${year}-${month}-01`;
            updateItem(itemId, 'expiryDate', dateValue);
            setMedicineSearches(prev => {
                const copy = { ...prev };
                delete copy[`expiry-${itemId}`];
                return copy;
            });
        }
    };

    const fieldOrder: (keyof PurchaseItem)[] = [
        'itemCode',
        'batchNo',
        'expiryDate',
        'qty',
        'freeQty',
        'purchaseRate',
        'salesRate',
        'gst',
        'hsnCode',
    ];


    const handleFieldKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        currentKey: string
    ) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const keys = Object.keys(fieldRefs.current);
            const currentIndex = keys.indexOf(currentKey);
            const nextKey = keys[currentIndex + 1];
            if (nextKey && fieldRefs.current[nextKey]) {
                fieldRefs.current[nextKey]?.focus();
            }
        }
    };
    const handleEnterKey = (
        e: React.KeyboardEvent<HTMLInputElement>,
        currentKey: string,
        nextKey: string
    ) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextField = fieldRefs.current[nextKey];
            if (nextField) {
                nextField.focus();
            }
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 shadow-lg">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">Purchase Bill</h1>
            </div>

            {/* Form Section */}
            <div className="p-3 sm:p-4 lg:p-6 bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
                    {/* Purchase ID */}
                    <div className="lg:col-span-1">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">Purchase ID</label>
                        <input
                            type="text"
                            value={purchaseBill.purchaseId}
                            readOnly
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg bg-blue-50 text-blue-900 font-medium focus:outline-none"
                        />
                    </div>

                    {/* Date */}
                    <div className="lg:col-span-1">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">Date</label>
                        <input
                            type="date"
                            value={purchaseBill.date}
                            onChange={(e) => setPurchaseBill(prev => ({ ...prev, date: e.target.value }))}
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Supplier ID */}
                    <div className="lg:col-span-1">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">Supplier ID</label>
                        <div className="flex items-center">
                            <SearchableSelect
                                label=""
                                value={purchaseBill.supplierId.toString()}
                                searchValue={medicineSearches['supplier'] || ''}
                                setSearchValue={(val) => setMedicineSearches(prev => ({ ...prev, supplier: val }))}
                                showDropdown={editingItem === -1}
                                setShowDropdown={(open) => setEditingItem(open ? -1 : null)}
                                items={suppliers
                                    .filter((s) => {
                                        const query = medicineSearches['supplier']?.toLowerCase() || '';
                                        const firstName = s.name.split(' ')[0].toLowerCase(); // extract first word
                                        return (
                                            s.id.toString().includes(query) ||
                                            firstName.startsWith(query)
                                        );
                                    })
                                    .map((s) => ({
                                        id: s.id.toString(),
                                        name: `${s.id} - ${s.name}`
                                    }))}
                                onSelect={(id) => {
                                    const selectedSupplier = suppliers.find(s => s.id.toString() === id);
                                    if (selectedSupplier) {
                                        const isKerala = isKeralaGST(selectedSupplier.gstNo);

                                        const updatedItems = purchaseBill.items.map(item => {
                                            const baseBeforeDiscount = item.qty * item.purchaseRate;
                                            const discountAmount = (baseBeforeDiscount * (item.discountPercent || 0)) / 100;
                                            const baseAmount = baseBeforeDiscount - discountAmount;
                                            const gstAmount = (baseAmount * item.gst) / 100;

                                            let cgstAmount = 0, sgstAmount = 0, igstAmount = 0;
                                            if (isKerala) {
                                                cgstAmount = gstAmount / 2;
                                                sgstAmount = gstAmount / 2;
                                            } else {
                                                igstAmount = gstAmount;
                                            }

                                            return {
                                                ...item,
                                                baseAmount,
                                                gstAmount,
                                                cgstAmount,
                                                sgstAmount,
                                                igstAmount,
                                                amount: baseAmount + gstAmount,
                                            };
                                        });

                                        // Recalculate correct totals
                                        const gstTotal = updatedItems.reduce((sum, i) => sum + (i.gstAmount || 0), 0);
                                        const cgst = updatedItems.reduce((sum, i) => sum + (i.cgstAmount || 0), 0);
                                        const sgst = updatedItems.reduce((sum, i) => sum + (i.sgstAmount || 0), 0);
                                        const igst = updatedItems.reduce((sum, i) => sum + (i.igstAmount || 0), 0);

                                        setPurchaseBill(prev => ({
                                            ...prev,
                                            supplierId: selectedSupplier.id,
                                            supplierName: selectedSupplier.name,
                                            supplierAddress: selectedSupplier.address,
                                            gst: selectedSupplier.gstNo,
                                            taxType: isKerala ? 'intra' : 'inter',
                                            items: updatedItems,
                                            gstTotal,
                                            cgst,
                                            sgst,
                                            igst,
                                        }));

                                        setMedicineSearches(prev => ({ ...prev, supplier: '' }));
                                    }
                                }}

                                renderItem={(item) => (
                                    <div className="text-sm font-medium text-gray-700">
                                        {item.name}
                                    </div>
                                )}
                            />
                        </div>
                    </div>

                    {/* Invoice No */}
                    <div className="lg:col-span-1">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">Invoice No</label>
                        <input
                            type="text"
                            value={purchaseBill.invoiceNo}
                            onChange={(e) => setPurchaseBill(prev => ({ ...prev, invoiceNo: e.target.value }))}
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Invoice Date */}
                    <div className="lg:col-span-1">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">Invoice Date</label>
                        <input
                            type="date"
                            value={purchaseBill.invoiceDate}
                            onChange={(e) => setPurchaseBill(prev => ({ ...prev, invoiceDate: e.target.value }))}
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Payment Type */}
                    <div className="lg:col-span-1">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">Payment Type</label>
                        <select
                            value={purchaseBill.paymentType}
                            onChange={(e) => setPurchaseBill(prev => ({ ...prev, paymentType: e.target.value }))}
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="Credit">Credit</option>
                            <option value="Cash">Cash</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Supplier Name */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">Supplier Name</label>
                        <input
                            type="text"
                            value={purchaseBill.supplierName}
                            readOnly
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg bg-blue-50 text-blue-900"
                        />
                    </div>

                    {/* Supplier Address */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">Supplier Address</label>
                        <input
                            type="text"
                            value={purchaseBill.supplierAddress}
                            readOnly
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg bg-blue-50 text-blue-900"
                        />
                    </div>

                    {/* GST No */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-blue-900 mb-1">GST No</label>
                        <input
                            type="text"
                            value={purchaseBill.gst}
                            readOnly
                            className="w-full px-3 py-2 border border-blue-300 rounded-lg bg-blue-50 text-blue-900"
                        />
                    </div>
                </div>
            </div>

            {/* Items Section */}
            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-0">Items</h2>
                    <button
                        onClick={addItem}
                        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 flex items-center gap-2 font-medium shadow-lg transition-all duration-300"
                    >
                        <Plus size={16} /> Add Item
                    </button>
                </div>

                {/* Items Table */}
                <div className="bg-white rounded-lg shadow-lg relative overflow-visible z-10">
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-[800px] w-full border border-blue-300 text-xs sm:text-sm">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <tr>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Item Code</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Medicine</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">Type</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">Pack Item</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Batch</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Expiry</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">Qty</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">Free</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">Disc %</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">P.Rate</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">S.Rate</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">MRP</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">GST%</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">Amount</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">HSN</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purchaseBill.items.map((item, index) => (
                                    <tr key={item.id} className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors duration-200`}>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                value={item.itemCode}
                                                onChange={(e) => updateItem(item.id, 'itemCode', e.target.value)}
                                                className="w-16 px-1 py-1 text-xs border border-blue-300 rounded"
                                            />
                                        </td>
                                        <td className="relative border-r border-blue-200 px-2 py-2 z-10 overflow-visible">
                                            <div className="relative z-10">
                                                <SearchableSelect
                                                    label=""
                                                    value={item.medicineId?.toString() || ''}
                                                    searchValue={medicineSearches[item.id] || ''}
                                                    setSearchValue={(val) =>
                                                        setMedicineSearches(prev => ({ ...prev, [item.id]: val }))
                                                    }
                                                    showDropdown={editingItem === item.id}
                                                    setShowDropdown={(open) => setEditingItem(open ? item.id : null)}
                                                    items={getFilteredMedicines(item.id).map((m) => ({
                                                        id: m.id.toString(),
                                                        name: m.medicineName
                                                    }))}
                                                    onSelect={(medicineId) => {
                                                        const selected = medicines.find(m => m.id.toString() === medicineId);
                                                        if (!selected) return;

                                                        setPurchaseBill(prev => ({
                                                            ...prev,
                                                            items: prev.items.map(pItem => {
                                                                if (pItem.id !== item.id) return pItem;

                                                                const baseAmount = pItem.qty * selected.purchaseRate;
                                                                const gstAmount = (baseAmount * selected.gst) / 100;

                                                                return {
                                                                    ...pItem,
                                                                    medicineId: selected.id,
                                                                    itemCode: selected.itemCode,
                                                                    medicineName: selected.medicineName,
                                                                    type: selected.type,
                                                                    packItem: selected.packItem,
                                                                    purchaseRate: selected.purchaseRate,
                                                                    salesRate: selected.salesRate,
                                                                    gst: selected.gst,
                                                                    hsnCode: selected.hsnCode,
                                                                    amount: baseAmount + gstAmount,
                                                                    baseAmount,
                                                                    gstAmount,
                                                                    cgstAmount: gstAmount / 2,
                                                                    sgstAmount: gstAmount / 2,
                                                                    igstAmount: 0,
                                                                };
                                                            })
                                                        }));

                                                        setMedicineSearches(prev => ({ ...prev, [item.id]: '' }));
                                                    }}
                                                    renderItem={(item) => (
                                                        <div className="text-sm">
                                                            <div className="font-semibold">{item.id}</div>
                                                            <div className="text-gray-600">{item.name}</div>
                                                        </div>
                                                    )}
                                                />

                                            </div>
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                value={item.type || ''}
                                                readOnly
                                                className="w-16 px-1 py-1 border border-blue-300 rounded text-xs bg-gray-100 cursor-not-allowed"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                value={item.packItem || ''}
                                                readOnly
                                                className="w-8 px-1 py-1 text-xs border border-blue-300 rounded bg-gray-100 cursor-not-allowed"
                                            />
                                        </td>

                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                value={item.batchNo}
                                                onChange={(e) => updateItem(item.id, 'batchNo', e.target.value)}
                                                className="w-20 px-2 py-1 border border-blue-300 rounded text-xs"
                                            />
                                        </td>
                                        <td className="px-1 py-1 border-r border-blue-200 text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                placeholder="MM-YYYY"
                                                value={medicineSearches[`expiry-${item.id}`] || formatExpiry(item.expiryDate)}
                                                onChange={(e) => handleExpiryChange(e.target.value, item.id)}
                                                className="w-[4.5rem] px-2 py-1 border border-blue-300 rounded text-xs text-center tracking-wider"
                                                maxLength={7}
                                                inputMode="numeric"
                                                pattern="\d{2}-\d{4}"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                inputMode="numeric"
                                                value={item.qty === 0 ? '' : item.qty}
                                                onFocus={(e) => {
                                                    if (e.target.value === '0') e.target.value = '';
                                                }}
                                                onBlur={(e) => {
                                                    const val = parseFloat(e.target.value);
                                                    updateItem(item.id, 'qty', isNaN(val) ? 0 : val);
                                                }}
                                                onChange={(e) => {
                                                    const val = e.target.value;
                                                    // Temporarily allow empty string while typing
                                                    updateItem(item.id, 'qty', val === '' ? '' : parseFloat(val));
                                                }}
                                                className="w-12 px-1 py-1 border border-blue-300 rounded text-xs"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                value={item.freeQty}
                                                onChange={(e) => updateItem(item.id, 'freeQty', e.target.value)}
                                                className="w-12 px-2 py-1 border border-blue-300 rounded text-xs text-center"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                min={0}
                                                max={100}
                                                value={item.discountPercent}
                                                onChange={(e) => updateItem(item.id, 'discountPercent', e.target.value)}
                                                className="w-12 px-1 py-1 border border-blue-300 rounded text-xs"
                                            />
                                        </td>

                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={Number(item.purchaseRate) || ''}
                                                onChange={(e) => updateItem(item.id, 'purchaseRate', e.target.value)}
                                                className="w-16 px-2 py-1 border border-blue-300 rounded text-xs text-center"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={purchaseBill.items.find(i => i.id === item.id)?.salesRate ?? ''}
                                                onChange={(e) => updateItem(item.id, 'salesRate', e.target.value)}
                                                className="w-16 px-2 py-1 border border-blue-300 rounded text-xs text-center"
                                            />

                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                value={item.mrp || ''}
                                                onChange={(e) => updateItem(item.id, 'mrp', e.target.value)}
                                                className="w-16 px-1 py-1 text-xs border border-blue-300 rounded"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                value={purchaseBill.items.find(i => i.id === item.id)?.gst ?? ''}
                                                onChange={(e) => updateItem(item.id, 'gst', e.target.value)}
                                                className="w-8 px-2 py-1 border border-blue-300 rounded text-xs"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm font-bold text-green-700">
                                            ₹{item.totalAmount.toFixed(2)}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                value={purchaseBill.items.find(i => i.id === item.id)?.hsnCode ?? ''}
                                                onChange={(e) => updateItem(item.id, 'hsnCode', e.target.value)}
                                                className="w-18 px-2 py-1 border border-blue-300 rounded text-xs"
                                            />
                                        </td>
                                        <td className="px-2 py-2 text-center">
                                            <button
                                                type="button"
                                                onClick={() => removeItem(item.id)}
                                                disabled={isCancelled || isFinalized}
                                                className={`text-red-600 hover:text-red-800 transition ${isCancelled || isFinalized ? 'opacity-40 cursor-not-allowed' : ''
                                                    }`}
                                                title={
                                                    isCancelled
                                                        ? 'Bill is cancelled'
                                                        : isFinalized
                                                            ? 'Finalized bill cannot be modified'
                                                            : 'Delete item'
                                                }
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>

                                        {/* Hidden fields for backend calculations */}
                                        <td className="hidden">
                                            <input
                                                type="hidden"
                                                value={(item.qty * item.purchaseRate).toFixed(2)} // base amount
                                                onChange={() => { }} // no-op
                                                name={`item-${item.id}-baseAmount`}
                                            />
                                            <input
                                                type="hidden"
                                                value={((item.qty * item.purchaseRate * item.gst) / 100).toFixed(2)} // gst amount
                                                onChange={() => { }}
                                                name={`item-${item.id}-gstAmount`}
                                            />
                                            <input
                                                type="hidden"
                                                value={(((item.qty * item.purchaseRate * item.gst) / 2) / 100).toFixed(2)} // cgst
                                                onChange={() => { }}
                                                name={`item-${item.id}-cgstAmount`}
                                            />
                                            <input
                                                type="hidden"
                                                value={(((item.qty * item.purchaseRate * item.gst) / 2) / 100).toFixed(2)} // sgst
                                                onChange={() => { }}
                                                name={`item-${item.id}-sgstAmount`}
                                            />
                                            <input
                                                type="hidden"
                                                value={(0).toFixed(2)} // igst — modify logic if inter-state
                                                onChange={() => { }}
                                                name={`item-${item.id}-igstAmount`}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Summary Section */}
            <div className="p-3 sm:p-4 lg:p-6 bg-white">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">Summary</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Column 1: Tax Details */}
                        <div className="space-y-3">
                            <div className="border border-blue-300 rounded-lg overflow-hidden">
                                <div className="bg-blue-600 text-white p-2 text-center font-semibold text-sm">Tax Details</div>
                                <div className="divide-y divide-blue-200">
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">GST Total:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{purchaseBill.gstTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-blue-50">
                                        <span className="text-sm font-medium text-blue-900">CGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{purchaseBill.cgst.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">SGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{purchaseBill.sgst.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">IGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{purchaseBill.igst.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-blue-50">
                                        <span className="text-sm font-medium text-blue-900">Cess Amount:</span>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={purchaseBill.cessAmount}
                                            onChange={(e) => setPurchaseBill(prev => ({ ...prev, cessAmount: Number(e.target.value) }))}
                                            className="w-20 px-2 py-1 text-sm border border-blue-300 rounded text-right font-bold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Amount Details */}
                        <div className="space-y-3">
                            <div className="border border-blue-300 rounded-lg overflow-hidden">
                                <div className="bg-blue-600 text-white p-2 text-center font-semibold text-sm">Amount Details</div>
                                <div className="divide-y divide-blue-200">
                                    <div className="flex justify-between items-center p-2 bg-green-50 font-bold">
                                        <span className="text-sm text-green-900">Gross Total:</span>
                                        <span className="text-sm text-green-900">
                                            ₹{(purchaseBill.items.reduce((acc, item) => acc + (item.totalAmount || 0), 0) + (purchaseBill.cessAmount || 0)).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-blue-50">
                                        <span className="text-sm font-medium text-blue-900">Round Off:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{purchaseBill.roundOff.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">Discount:</span>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={purchaseBill.discount}
                                            onChange={(e) => setPurchaseBill(prev => ({ ...prev, discount: Number(e.target.value) }))}
                                            className="w-20 px-2 py-1 text-sm border border-blue-300 rounded text-right font-bold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Final Total */}
                        <div className="lg:flex lg:items-center lg:justify-center">
                            <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg text-center shadow-lg">
                                <div className="text-sm font-medium mb-1">Total Amount</div>
                                <div className="text-2xl font-bold">₹{purchaseBill.finalTotal.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save + Cancel Buttons */}
            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex justify-center gap-4">
                    <button
                        onClick={savePurchaseBill}
                        className="bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300"
                    >
                        <Save size={20} /> Save Bill
                    </button>

                    <button
                        onClick={cancelPurchaseBill} // 🔁 Replace this with your cancel function
                        className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300"
                    >
                        <Trash2 size={20} /> Cancel Bill
                    </button>
                </div>
            </div>

        </div>
    );
};

export default PurchaseBillPage;