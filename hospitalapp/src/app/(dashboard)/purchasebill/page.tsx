
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Combobox } from '@headlessui/react';
import { Trash2, Plus, X, User, Users, Edit, Save, ChevronDown } from 'lucide-react';
import { SearchableSelect } from '@/components/SearchableSelect';

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
    purchaseRate: number;
    salesRate: number;
    gst: number;
    hsnCode: string;
}

interface PurchaseItem {
    id: number;
    itemCode: string;
    medicineId: number;
    medicineName: string;

    batchNo: string;
    expiryDate: string;
    qty: number;
    freeQty: number;
    purchaseRate: number;
    salesRate: number;
    gst: number;
    amount: number;
    hsnCode: string;
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
                medicineName: '',
                batchNo: '',
                expiryDate: '',
                qty: 1,
                freeQty: 0,
                purchaseRate: 0,
                salesRate: 0,
                gst: 0,
                amount: 0,
                hsnCode: ''
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

    const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number; width: number } | null>(null);
    const inputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

    const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const next = inputRefs.current[index + 1];
            if (next) {
                next.focus();
            }
        }
    };
    // Fetch suppliers from API
    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const res = await fetch('https://localhost:7112/api/Suppliers');
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
                const res = await fetch('https://localhost:7112/api/Medicines/dropdown');
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

    // Fetch supplier details
    const fetchSupplierDetails = async () => {
        if (!purchaseBill.supplierId) return;

        setLoading(true);
        try {
            const selectedSupplier = suppliers.find(s => s.id === purchaseBill.supplierId);
            if (selectedSupplier) {
                setPurchaseBill(prev => ({
                    ...prev,
                    supplierName: selectedSupplier.name,
                    supplierAddress: selectedSupplier.address,
                    gst: selectedSupplier.gstNo
                }));
            }
        } catch (error) {
            console.error('Error fetching supplier details:', error);
        } finally {
            setLoading(false);
        }
    };

    // Add new item row
    const addItem = () => {
        const newItem: PurchaseItem = {
            id: Date.now(),
            itemCode: '',
            medicineId: 0,
            medicineName: '',
            batchNo: '',
            expiryDate: '',
            qty: 1,
            freeQty: 0,
            purchaseRate: 0,
            salesRate: 0,
            gst: 0,
            amount: 0,
            hsnCode: ''
        };

        setPurchaseBill(prev => ({
            ...prev,
            items: [...prev.items, newItem]
        }));
    };

    // Remove item
    const removeItem = (itemId: number) => {
        setPurchaseBill(prev => ({
            ...prev,
            items: prev.items.filter(item => item.id !== itemId)
        }));
    };

    // Update item
    const updateItem = (itemId: number, field: keyof PurchaseItem, value: any) => {
        setPurchaseBill(prev => ({
            ...prev,
            items: prev.items.map(item => {
                if (item.id === itemId) {
                    const updatedItem = { ...item };

                    if (field === 'qty' || field === 'freeQty' || field === 'purchaseRate' || field === 'salesRate' || field === 'gst') {
                        (updatedItem as any)[field] = parseFloat(value) || 0;
                    } else {
                        (updatedItem as any)[field] = value;
                    }

                    // Recalculate amount
                    const baseAmount = updatedItem.qty * updatedItem.purchaseRate;
                    const gstAmount = (baseAmount * updatedItem.gst) / 100;
                    updatedItem.amount = baseAmount + gstAmount;

                    return updatedItem;
                }
                return item;
            })
        }));
    };

    // Filter medicines based on search term
    const getFilteredMedicines = (itemId: number) => {
        const searchTerm = medicineSearches[itemId] || '';
        return medicines.filter((medicine) =>
            medicine.medicineName?.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
    };


    // Calculate totals
    useEffect(() => {
        const grossTotal = purchaseBill.items.reduce((sum, item) => sum + (item.qty * item.purchaseRate), 0);
        const gstTotal = purchaseBill.items.reduce((sum, item) => sum + ((item.qty * item.purchaseRate * item.gst) / 100), 0);
        const cgst = gstTotal / 2;
        const sgst = gstTotal / 2;
        const roundOff = Math.round((grossTotal + gstTotal - purchaseBill.discount) * 100) / 100 - (grossTotal + gstTotal - purchaseBill.discount);
        const finalTotal = grossTotal + gstTotal - purchaseBill.discount + roundOff + purchaseBill.cessAmount;

        setPurchaseBill(prev => ({
            ...prev,
            grossTotal,
            gstTotal,
            cgst,
            sgst,
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

    // Cancel purchase bill
    const cancelPurchaseBill = () => {
        const confirmed = window.confirm('Are you sure you want to cancel this bill?');

        if (confirmed) {
            setPurchaseBill((prev) => ({
                ...prev,
                cancelled: true, // add a cancelled flag to the bill object
                items: prev.items.map((item) => ({
                    ...item,
                    medicineName: `[CANCELLED] ${item.medicineName}`,
                    isCancelled: true, // optional for UI styling
                })),
            }));

            alert('Purchase bill marked as CANCELLED!');
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
                                        setPurchaseBill(prev => ({
                                            ...prev,
                                            supplierId: selectedSupplier.id,
                                            supplierName: selectedSupplier.name,
                                            supplierAddress: selectedSupplier.address,
                                            gst: selectedSupplier.gstNo
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
                    <div className="overflow-x-visible">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <tr>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Item Code</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Medicine</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Batch</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Expiry</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">Qty</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">Free</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">P.Rate</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500">S.Rate</th>
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
                                                className="w-18 px-1 py-1 text-xs border border-blue-300 rounded"
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

                                                        const baseAmount = item.qty * (selected.purchaseRate ?? 0);
                                                        const gstAmount = (baseAmount * (selected.gst ?? 0)) / 100;

                                                        updateItem(item.id, 'medicineId', selected.id);
                                                        updateItem(item.id, 'itemCode', selected.itemCode ?? '');
                                                        updateItem(item.id, 'medicineName', selected.medicineName);
                                                        updateItem(item.id, 'purchaseRate', selected.purchaseRate ?? 0);
                                                        updateItem(item.id, 'salesRate', selected.salesRate ?? 0);
                                                        updateItem(item.id, 'gst', selected.gst ?? 0);
                                                        updateItem(item.id, 'hsnCode', selected.hsnCode ?? '');
                                                        updateItem(item.id, 'amount', baseAmount + gstAmount);

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
                                                value={item.batchNo}
                                                onChange={(e) => updateItem(item.id, 'batchNo', e.target.value)}
                                                className="w-22 px-2 py-1 border border-blue-300 rounded text-xs"
                                            />
                                        </td>
                                        <td className="px-1 py-1 border-r border-blue-200 text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                placeholder="MM-YYYY"
                                                value={medicineSearches[`expiry-${item.id}`] || formatExpiry(item.expiryDate)}
                                                onChange={(e) => handleExpiryChange(e.target.value, item.id)}
                                                className="w-[7.5rem] px-2 py-1 border border-blue-300 rounded text-xs text-center tracking-wider"
                                                maxLength={7}
                                                inputMode="numeric"
                                                pattern="\d{2}-\d{4}"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                value={item.qty}
                                                onChange={(e) => updateItem(item.id, 'qty', parseInt(e.target.value))}
                                                className="w-15 px-1 py-1 text-xs border border-blue-300 rounded text-center"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                value={item.freeQty}
                                                onChange={(e) => updateItem(item.id, 'freeQty', e.target.value)}
                                                className="w-15 px-2 py-1 border border-blue-300 rounded text-xs text-center"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={Number(item.purchaseRate) || ''}
                                                onChange={(e) => updateItem(item.id, 'purchaseRate', e.target.value)}
                                                className="w-20 px-2 py-1 border border-blue-300 rounded text-xs text-center"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="number"
                                                step="0.01"
                                                value={purchaseBill.items.find(i => i.id === item.id)?.salesRate ?? ''}
                                                onChange={(e) => updateItem(item.id, 'salesRate', e.target.value)}
                                                className="w-20 px-2 py-1 border border-blue-300 rounded text-xs text-center"
                                            />

                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                value={purchaseBill.items.find(i => i.id === item.id)?.gst ?? ''}
                                                onChange={(e) => updateItem(item.id, 'gst', e.target.value)}
                                                className="w-12 px-2 py-1 border border-blue-300 rounded text-xs"
                                            />
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm font-bold text-green-700">
                                            ₹{item.amount.toFixed(2)}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                            <input
                                                type="text"
                                                value={purchaseBill.items.find(i => i.id === item.id)?.hsnCode ?? ''}
                                                onChange={(e) => updateItem(item.id, 'hsnCode', e.target.value)}
                                                className="w-22 px-2 py-1 border border-blue-300 rounded text-xs"
                                            />
                                        </td>
                                        <td className="px-2 py-2 text-center">
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-600 hover:text-red-800 hover:bg-red-100 p-1 rounded transition-all duration-200"
                                            >
                                                <Trash2 size={14} />
                                            </button>
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
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">Gross Total:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{purchaseBill.grossTotal.toFixed(2)}</span>
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