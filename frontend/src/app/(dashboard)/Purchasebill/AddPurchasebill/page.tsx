'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Trash2, Plus, Save, ChevronDown } from 'lucide-react';
import { SearchableSelect } from '@/components/SearchableSelect';
import API from '@/lib/axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE = API.defaults.baseURL;

// Types

// Fetched from backend or used in dropdown
interface Medicine {
    id: number;
    itemCode: string;
    medicineName: string;
    type: string;
    packItem: number;
    purchaseRate: number;
    salesRate: number;
    gst: number;
    hsnCode: string;
    companyId: number;
    company?: string; // for display
}

// Saved in purchase modal
interface ModalData {
    id: number | null;
    medicineId: number;
    itemCode: string;
    medicineName: string;
    type: string;
    packItem: number;
    batchNo: string;
    expiryDate: string;
    qty: number;
    freeQty: number;
    purchaseRate: number;
    salesRate: number;
    gst: number;
    hsnCode: string;
    mrp: number;
    rate: number;
    itemMrp?: number; // ➕ Add this
    pRate?: number;   // ➕ Add this
    companyId: number;
    company: string;
    discountPercent: number;
    stripMrp?: number;
    stripRate?: number;

    totalQty?: number;
    totalFreeQty?: number;
    currentStock?: number;
}

interface CalculatedValues {
    pRate: number;
    sRate: number;
    itemMrp: number;
    totalQty: number;
    totalFreeQty: number;
    amount: number;
    grossAmount: number;
    taxAmount: number;
    netAmount: number;
}

interface Supplier {
    id: number;
    name: string;
    address: string;
    location: string;
    gstNo: string;
}

interface PurchaseItem {
    id: number | null;
    itemCode: string;
    type: string;
    packItem: number;
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
    tempId?: number;

    baseAmount?: number;
    gstAmount?: number;
    cgstAmount?: number;
    sgstAmount?: number;
    igstAmount?: number;
    mrp?: number;
    discountPercent?: number;
    discountAmount?: number;
    stripMrp?: number;
    stripRate?: number;
    totalQty?: number;        // qty * packItem
    totalFreeQty?: number;    // freeQty * packItem
    currentStock?: number;    // totalQty + totalFreeQty

    companyId?: number;   // ✅ For storing in DB/API
    company?: string;     // ✅ For showing in UI only
}
interface PurchaseBillResponse {
    purchaseId: number;
}


interface PurchaseBill {
    purchaseId?: number | null;
    date: string;
    supplierId: number;
    supplierName: string;
    supplierAddress: string;
    supplierLocation: string;
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
        purchaseId: undefined, // ← important
        date: new Date().toISOString().split('T')[0],
        supplierId: 0,
        supplierName: '',
        supplierAddress: '',
        supplierLocation: '',
        gst: '',
        invoiceNo: '',
        invoiceDate: new Date().toISOString().split('T')[0],
        paymentType: 'Credit',
        items: [], // starts with no rows
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

    const [showModal, setShowModal] = useState<boolean>(false);
    const skipInitialCalc = useRef<boolean>(false);
    const [editingItemData, setEditingItemData] = useState<PurchaseItem | null>(null);
    const [modalData, setModalData] = useState<ModalData>({
        id: null,
        medicineId: 0,
        itemCode: '',
        medicineName: '',
        type: '',
        packItem: 0,
        batchNo: '',
        expiryDate: '',
        qty: 1,
        freeQty: 0,
        purchaseRate: 0,
        salesRate: 0,
        gst: 0,
        hsnCode: '',
        mrp: 0,
        rate: 0,
        companyId: 0,        // ✅ ADD THIS
        company: '',         // ✅ for display only
        discountPercent: 0,
        totalQty: 0,
        totalFreeQty: 0,
        currentStock: 0,
        stripMrp: 0,
        stripRate: 0
    });
    const [calculatedValues, setCalculatedValues] = useState<CalculatedValues>({
        pRate: 0,
        sRate: 0,
        itemMrp: 0,
        totalQty: 0,
        totalFreeQty: 0,
        amount: 0,
        grossAmount: 0,
        taxAmount: 0,
        netAmount: 0
    });

    const closeModal = (): void => {
        setShowModal(false);
        setEditingItemData(null);
        setModalData({
            id: null,
            medicineId: 0,
            itemCode: '',
            medicineName: '',
            type: '',
            packItem: 0,
            batchNo: '',
            expiryDate: '',
            qty: 1,
            freeQty: 0,
            purchaseRate: 0,
            salesRate: 0,
            gst: 0,
            hsnCode: '',
            mrp: 0,
            rate: 0,
            companyId: 0,         // ✅ added this
            company: '',          // ✅ display only
            discountPercent: 0,
            stripMrp: 0,
            stripRate: 0
        });


        setCalculatedValues({
            pRate: 0,
            sRate: 0,
            itemMrp: 0,
            totalQty: 0,
            totalFreeQty: 0,
            amount: 0,
            grossAmount: 0,
            taxAmount: 0,
            netAmount: 0
        });
        setMedicineSearches((prev: Record<string | number, string>) => {
            const copy = { ...prev };
            delete copy['modal'];
            delete copy['modal-expiry'];
            return copy;
        });
    };

    const addItem = (): void => {
        // Reset modal data for new item
        setModalData({
            id: null,
            medicineId: 0,
            itemCode: '',
            medicineName: '',
            type: '',
            packItem: 0,
            batchNo: '',
            expiryDate: '',
            qty: 1,
            freeQty: 0,
            purchaseRate: 0,
            salesRate: 0,
            gst: 0,
            hsnCode: '',
            mrp: 0,
            rate: 0,
            companyId: 0,         // ✅ Added this
            company: '',          // ✅ Display only
            discountPercent: 0,
        });

        setEditingItemData(null);
        setShowModal(true);
    };

    const removeItem = async (item: { id: number }) => {
        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if (!confirmed) return;

        try {
            if (item.id > 0) {
                // Soft-delete on backend
                await API.delete(`/api/PurchaseItems/${item.id}`);
            }

            // Remove item locally by ID
            setPurchaseBill(prev => ({
                ...prev,
                items: prev.items.filter(i => i.id !== item.id)
            }));
        } catch (error) {
            console.error("Delete failed", error);
            alert("Failed to delete item.");
        }
    };


    const editItem = (item: PurchaseItem): void => {
        skipInitialCalc.current = true; // 🛑 Prevent auto-calc once
        setEditingItemData(item);

        // Use actual stored values for MRP and Rate instead of calculated ones
        const storedMrp = item.stripMrp !== undefined && item.stripMrp !== 0 ? item.stripMrp : (item.mrp || 0);
        const storedRate = item.stripRate !== undefined && item.stripRate !== 0 ? item.stripRate : item.purchaseRate;

        setModalData({
            id: item.id,
            medicineId: item.medicineId,
            itemCode: item.itemCode,
            medicineName: item.medicineName,
            type: item.type,
            packItem: item.packItem,
            batchNo: item.batchNo,
            expiryDate: item.expiryDate,
            qty: item.qty,
            freeQty: item.freeQty,
            purchaseRate: item.purchaseRate,
            salesRate: item.salesRate,
            gst: item.gst,
            hsnCode: item.hsnCode,
            rate: storedRate,
            mrp: storedMrp,
            companyId: item.companyId || 0,
            company: item.company || '',
            discountPercent: item.discountPercent || 0
        });

        // ✅ Also prefill calculated values explicitly
        setCalculatedValues({
            pRate: item.purchaseRate || 0,
            sRate: item.salesRate || 0,
            itemMrp: item.mrp || 0,
            totalQty: Number(item.qty) * Number(item.packItem),
            totalFreeQty: Number(item.freeQty) * Number(item.packItem),
            amount: item.totalAmount || 0,
            grossAmount: item.baseAmount || 0,
            taxAmount: item.gstAmount || 0,
            netAmount: item.totalAmount || 0
        });

        setShowModal(true);
    };

    const calculateRates = (data: ModalData): void => {
        const qty = Number(data.qty) || 0;
        const freeQty = Number(data.freeQty) || 0;
        const ratePerStrip = Number(data.rate) || 0;
        const mrpPerStrip = Number(data.mrp) || 0;
        const gst = Number(data.gst) || 0;
        const packItem = Number(data.packItem) || 1;

        const totalStrips = qty;
        const totalFreeStrips = freeQty;

        const totalQty = totalStrips * packItem;
        const totalFreeQty = totalFreeStrips * packItem;

        const totalMrp = totalStrips * mrpPerStrip;
        const totalRate = totalStrips * ratePerStrip;

        const grossAmount = totalRate;
        const taxAmount = (grossAmount * gst) / 100;
        const netAmount = grossAmount + taxAmount;

        // MRP includes GST → Taxable = MRP * 100 / (100 + GST)
        const taxablePrice = (totalMrp * 100) / (100 + gst);

        const pRate = totalQty > 0 ? ratePerStrip / packItem : 0;        // Purchase rate per tablet
        const sRate = totalQty > 0 ? taxablePrice / totalQty : 0;        // Selling rate per tablet
        const itemMrp = totalQty > 0 ? mrpPerStrip / packItem : 0;       // MRP per tablet

        setCalculatedValues({
            pRate: +pRate.toFixed(2),
            sRate: +sRate.toFixed(2),
            itemMrp: +itemMrp.toFixed(2),
            totalQty,
            totalFreeQty,
            amount: +netAmount.toFixed(2),
            grossAmount: +grossAmount.toFixed(2),
            taxAmount: +taxAmount.toFixed(2),
            netAmount: +netAmount.toFixed(2),
        });
    };

    const safeToFixed = (value: any, decimals: number = 2): string => {
        const num = Number(value);
        return !isNaN(num) ? num.toFixed(decimals) : (0).toFixed(decimals);
    };

    const handleModalExpiryChange = (input: string): void => {
        const cleaned = input.replace(/[^\d]/g, '');

        let month = cleaned.slice(0, 2);
        let year = cleaned.slice(2, 6);

        if (month.length === 1 && parseInt(month) > 1) {
            month = '0' + month;
        }

        const formattedInput = [month, year].filter(Boolean).join('-');

        // Show formatted string in search box
        setMedicineSearches((prev) => ({
            ...prev,
            'modal-expiry': formattedInput
        }));

        if (month.length === 2 && year.length === 4) {
            const expiryDate = new Date(`${year}-${month}-01`);
            const now = new Date();

            // Set date to first of current month for comparison
            const today = new Date(now.getFullYear(), now.getMonth(), 1);

            if (expiryDate <= today) {
                alert("Expiry date must be in the future (MM-YYYY).");
                return;
            }

            // Valid date — update modalData and clear search box
            setModalData((prev) => ({
                ...prev,
                expiryDate: `${year}-${month}-01`
            }));
            setMedicineSearches((prev) => {
                const copy = { ...prev };
                delete copy['modal-expiry'];
                return copy;
            });
        }
    };

    // const handleBatchBlur = async () => {
    //     const batchNo = modalData.batchNo?.trim();
    //     const medicineId = modalData.medicineId;

    //     if (!batchNo || !medicineId) return;

    //     try {
    //         const res = await API.get<ModalData>(`/api/MedicineBatches/by-batch?medicineId=${medicineId}&batchNo=${batchNo}`);
    //         const batch = res.data;

    //         if (batch) {
    //             setModalData(prev => ({
    //                 ...prev,
    //                 expiryDate: batch.expiryDate,
    //                 mrp: batch.mrp,
    //                 purchaseRate: batch.purchaseRate
    //             }));

    //             // Optional: Update input display for Expiry
    //             const [year, month] = batch.expiryDate.split('-');
    //             setMedicineSearches(prev => ({
    //                 ...prev,
    //                 'modal-expiry': `${month}-${year}`
    //             }));
    //         }
    //     } catch (err) {
    //         console.error("Batch not found or error fetching:", err);
    //         // Optional: Clear old values if batch not found
    //     }
    // };

    useEffect(() => {
        if (skipInitialCalc.current) {
            skipInitialCalc.current = false; // 🧼 Skip *once* per edit
            return;
        }

        if (modalData.medicineId) {
            calculateRates(modalData);
        }
    }, [modalData.qty, modalData.freeQty, modalData.rate, modalData.mrp, modalData.gst]);

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [medicines, setMedicines] = useState<Medicine[]>([]);
    const [medicineSearches, setMedicineSearches] = useState<Record<string | number, string>>({});
    const [editingItem, setEditingItem] = useState<number | null>(null);

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const searchParams = useSearchParams();
    const editId = searchParams.get('edit');
    const router = useRouter();

    const isCancelled = purchaseBill.isCancelled === true;
    const isFinalized = purchaseBill.finalTotal > 0; // Or use a separate status field like purchaseBill.status === 'finalized'
    useEffect(() => {
        const fetchPurchaseId = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/PurchaseBills/purchase-id`);
                if (!res.ok) throw new Error('Failed to fetch Purchase ID');

                const newId = await res.json();
                setPurchaseBill(prev => ({
                    ...prev,
                    purchaseId: newId
                }));
            } catch (error) {
                console.error('Error fetching Purchase ID:', error);
            }
        };

        if (!editId) {
            fetchPurchaseId();
        }
    }, [editId]);

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

    useEffect(() => {
        const qty = Number(modalData.qty) || 0;
        const freeQty = Number(modalData.freeQty) || 0;
        const packItem = Number(modalData.packItem) || 0;

        const totalQty = qty * packItem;
        const totalFreeQty = freeQty * packItem;
        const currentStock = (qty + freeQty) * packItem;

        setModalData(prev => ({
            ...prev,
            totalQty,
            totalFreeQty,
            currentStock
        }));
    }, [modalData.qty, modalData.freeQty, modalData.packItem]);

    useEffect(() => {
        if (editingItemData && editingItemData.medicineName) {
            setMedicineSearches((prev) => ({
                ...prev,
                modal: editingItemData.medicineName
            }));
        }
    }, [editingItemData]);

    //For fetching existing data
    useEffect(() => {
        async function fetchAndPrefillBill() {
            try {
                // Fetch dropdown data
                const suppliersRes = await fetch(`${API_BASE}/api/Suppliers`);
                const suppliersData = await suppliersRes.json();
                setSuppliers(
                    suppliersData.map((s: any) => ({
                        id: s.id,
                        name: s.name,
                        address: s.address,
                        location: s.location,
                        gstNo: s.gstNo,
                    }))
                );

                const medicinesRes = await fetch(`${API_BASE}/api/Medicines`);
                const medicinesData = await medicinesRes.json();
                setMedicines(
                    medicinesData.map((m: any) => ({
                        id: m.id,
                        itemCode: m.itemCode,
                        medicineName: m.medicineName,
                        type: m.type,
                        packItem: m.packItem,
                        purchaseRate: m.purchaseRate,
                        salesRate: m.salesRate,
                        gst: m.gst,
                        hsnCode: m.hsnCode,
                        company: m.company || '',
                    }))
                );

                if (editId) {
                    setIsEditMode(true);
                    const billRes = await fetch(`${API_BASE}/api/PurchaseBills/${editId}`);
                    const data = await billRes.json();

                    // ✅ Find supplier details
                    const selectedSupplier = suppliersData.find(
                        (s: any) => s.id === data.supplierId
                    );

                    // ✅ Enrich each item with medicine details
                    const enrichedItems = data.items.map((item: any) => {
                        const matchedMedicine = medicinesData.find(
                            (m: any) => m.id === item.medicineId
                        );
                        return {
                            ...item,
                            itemCode: matchedMedicine?.itemCode ?? '',
                            type: matchedMedicine?.type ?? '',
                            packItem: matchedMedicine?.packItem ?? '',
                            medicineName: matchedMedicine?.medicineName ?? '',
                            company: matchedMedicine?.company ?? '', // Revert to companyName as before
                            stripMrp: item.stripMrp ?? 0,
                            stripRate: item.stripRate ?? 0,
                        };
                    });

                    // ✅ Set complete bill with enriched data
                    setPurchaseBill({
                        purchaseId: data.purchaseId ?? 0,
                        date: data.date?.split("T")[0] ?? "",
                        supplierId: data.supplierId ?? 0,
                        supplierName: selectedSupplier?.name ?? "",
                        supplierAddress: selectedSupplier?.address ?? "",
                        supplierLocation: selectedSupplier?.location ?? "",
                        gst: selectedSupplier?.gstNo ?? "",
                        invoiceNo: data.invoiceNo ?? "",
                        invoiceDate: data.invoiceDate?.split("T")[0] ?? "",
                        paymentType: data.paymentType ?? "",
                        items: enrichedItems,
                        grossTotal: data.grossTotal ?? 0,
                        gstTotal: data.gstTotal ?? 0,
                        roundOff: data.roundOff ?? 0,
                        discount: data.discount ?? 0,
                        cgst: data.cgst ?? 0,
                        sgst: data.sgst ?? 0,
                        igst: data.igst ?? 0,
                        cessAmount: data.cessAmount ?? 0,
                        finalTotal: data.finalTotal ?? 0,
                        taxType: data.taxType ?? "intra",
                        isCancelled: data.isCancelled ?? false,
                    });
                }
            } catch (err) {
                console.error("Error while pre-filling:", err);
            }
        }
        fetchAndPrefillBill();
    }, [editId]);

    const isKeralaGST = (gstNo: string): boolean => gstNo?.slice(0, 2) === '32';

    useEffect(() => {
        const grossTotal = purchaseBill.items.reduce((sum, item) => sum + (item.baseAmount || 0), 0);
        const gstTotal = purchaseBill.items.reduce((sum, item) => sum + (item.gstAmount || 0), 0);
        const cgst = purchaseBill.items.reduce((sum, item) => sum + (item.cgstAmount || 0), 0);
        const sgst = purchaseBill.items.reduce((sum, item) => sum + (item.sgstAmount || 0), 0);
        const igst = purchaseBill.items.reduce((sum, item) => sum + (item.igstAmount || 0), 0);

        const discount = purchaseBill.discount || 0;
        const cessAmount = purchaseBill.cessAmount || 0;

        const unroundedTotal = grossTotal + gstTotal - discount + cessAmount;
        const roundedTotal = Math.round(unroundedTotal);
        const roundOff = +(roundedTotal - unroundedTotal).toFixed(2);
        const finalTotal = +(unroundedTotal + roundOff).toFixed(2);

        setPurchaseBill(prev => ({
            ...prev,
            grossTotal: +grossTotal.toFixed(2),
            gstTotal: +gstTotal.toFixed(2),
            cgst: +cgst.toFixed(2),
            sgst: +sgst.toFixed(2),
            igst: +igst.toFixed(2),
            roundOff,
            finalTotal
        }));
    }, [purchaseBill.items, purchaseBill.discount, purchaseBill.cessAmount]);


    const [nextTempId, setNextTempId] = useState(1);

    const handleModalSave = (): void => {
        if (!modalData.medicineId || !modalData.batchNo || !modalData.expiryDate) {
            alert('Please fill all required fields');
            return;
        }

        const isEditing = editingItemData !== null;

        const itemData: PurchaseItem = {
            id: isEditing ? editingItemData!.id : null, // null for new items
            tempId: isEditing ? editingItemData!.tempId : nextTempId,
            medicineId: modalData.medicineId,
            itemCode: modalData.itemCode,
            medicineName: modalData.medicineName,
            type: modalData.type,
            packItem: modalData.packItem,
            batchNo: modalData.batchNo,
            expiryDate: modalData.expiryDate,
            qty: modalData.qty,
            freeQty: modalData.freeQty,
            purchaseRate: calculatedValues.pRate,
            salesRate: calculatedValues.sRate,
            gst: modalData.gst,
            hsnCode: modalData.hsnCode,
            mrp: calculatedValues.itemMrp,
            stripMrp: modalData.mrp,
            stripRate: modalData.rate,
            discountPercent: modalData.discountPercent || 0,
            baseAmount: calculatedValues.grossAmount,
            gstAmount: calculatedValues.taxAmount,
            cgstAmount: purchaseBill.taxType === 'intra' ? calculatedValues.taxAmount / 2 : 0,
            sgstAmount: purchaseBill.taxType === 'intra' ? calculatedValues.taxAmount / 2 : 0,
            igstAmount: purchaseBill.taxType === 'inter' ? calculatedValues.taxAmount : 0,
            totalAmount: calculatedValues.netAmount,
            company: modalData.company,
            totalQty: modalData.qty * modalData.packItem,
            totalFreeQty: modalData.freeQty * modalData.packItem,
            currentStock: (modalData.qty + modalData.freeQty) * modalData.packItem,
        };

        setPurchaseBill(prev => {
            const updatedItems = isEditing
                ? prev.items.map(item => item.tempId === editingItemData!.tempId ? itemData : item)
                : [...prev.items, itemData];

            return { ...prev, items: updatedItems };
        });

        if (!isEditing) setNextTempId(prev => prev + 1);

        closeModal();
    };

    const savePurchaseBill = async () => {
        try {
            // ---------------- CALCULATE TOTALS ----------------
            const grossTotal = purchaseBill.items.reduce((sum, item) => sum + (item.baseAmount || 0), 0);
            const gstTotal = purchaseBill.items.reduce((sum, item) => sum + (item.gstAmount || 0), 0);
            const discount = purchaseBill.discount || 0;
            const cessAmount = purchaseBill.cessAmount || 0;

            const actualTotal = grossTotal + gstTotal - discount + cessAmount;
            const roundedTotal = Math.round(actualTotal);
            const roundOff = +(roundedTotal - actualTotal).toFixed(2);
            const finalTotal = +(actualTotal + roundOff).toFixed(2);

            // ---------------- BUILD UPDATED BILL ----------------
            const updatedBill = {
                ...purchaseBill,
                grossTotal: +grossTotal.toFixed(2),
                gstTotal: +gstTotal.toFixed(2),
                discount,
                cessAmount,
                roundOff,
                finalTotal
            };

            // ---------------- MAP STRINGS TO NUMBERS ----------------
            const paymentTypeMap: Record<string, number> = { Cash: 0, Credit: 1, Online: 2 };
            const taxTypeMap: Record<string, number> = { Intra: 0, Inter: 1 };
            
            // ---------------- BUILD PAYLOAD ----------------
            const payload = {
                ...updatedBill,

                // ✅ Only include purchaseId if this is an existing bill (PUT)
                purchaseId: updatedBill.purchaseId && updatedBill.purchaseId > 0 ? updatedBill.purchaseId : undefined,

                // ✅ Map enums correctly
                paymentType: paymentTypeMap[updatedBill.paymentType ?? 'Credit'] ?? 0,
                taxType: taxTypeMap[updatedBill.taxType?.toLowerCase() ?? 'intra'] ?? 0, // ensure lower-case matches map keys

                // ✅ Map items
                items: updatedBill.items.map(item => ({
                    // ❌ id should be undefined for new items so EF Core treats them as new
                    id: item.id && item.id > 0 ? item.id : undefined,
                    medicineId: item.medicineId,
                    batchNo: item.batchNo,
                    expiryDate: item.expiryDate,
                    qty: item.qty,
                    freeQty: item.freeQty,
                    packItem: item.packItem ?? 0,        // Include missing fields
                    stripMrp: item.stripMrp ?? 0,
                    stripRate: item.stripRate ?? 0,
                    purchaseRate: item.purchaseRate,
                    salesRate: item.salesRate,
                    gst: item.gst,
                    hsnCode: item.hsnCode,
                    baseAmount: item.baseAmount || 0,
                    gstAmount: item.gstAmount || 0,
                    cgstAmount: item.cgstAmount || 0,
                    sgstAmount: item.sgstAmount || 0,
                    igstAmount: item.igstAmount || 0,
                    mrp: item.mrp || 0,
                    discountPercent: item.discountPercent || 0,
                    discountAmount: item.discountAmount || 0,
                    totalAmount: item.totalAmount || 0
                }))
            };

            console.log("Payload for saving:", payload);

            // ---------------- SEND REQUEST ----------------
            let response: { data: { purchaseId: number } };

            if (editId) {
                // Existing bill → PUT
                response = await API.put(`/api/PurchaseBills/${editId}`, payload);
            } else {
                // New bill → POST
                response = await API.post("/api/PurchaseBills", payload);
                // Update state with backend-generated PurchaseId
                setPurchaseBill(prev => ({
                    ...prev,
                    purchaseId: response.data.purchaseId
                }));
            }

            toast.success("Purchase bill saved successfully!");
            setTimeout(() => setSuccessMessage(""), 5000);
            setTimeout(() => router.push("/Purchasebill"), 600);

        } catch (error: any) {
            const detail = error?.response?.data ?? error.message;
            console.error("❌ Failed to save purchase bill:", detail);
            toast.error(`Failed to save: ${detail}`);
        }
    };

    const cancelPurchaseBill = async () => {
        const confirmed = window.confirm('Are you sure you want to cancel this bill?');
        if (!confirmed) return;

        try {
            const res = await fetch(`${API_BASE}/api/PurchaseBills/${purchaseBill.purchaseId}/cancel`, {
                method: 'PUT'
            });

            if (!res.ok) throw new Error('Failed to cancel bill');

            setPurchaseBill(prev => ({
                ...prev,
                isCancelled: true,
                items: prev.items.map(item => ({
                    ...item,
                    medicineName: `[CANCELLED] ${item.medicineName}`
                }))
            }));

            alert('Purchase bill marked as CANCELLED!');
            setTimeout(() => router.push('/Purchasebill'), 600);
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

    const medicineDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (medicineDropdownRef.current && !medicineDropdownRef.current.contains(event.target as Node)) {
                setEditingItem(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredMedicines = medicines.filter((m) => {
        const query = medicineSearches.modal?.toLowerCase() || '';
        return (
            // m.itemCode.toLowerCase().startsWith(query) ||
            m.medicineName.toLowerCase().startsWith(query)
        );
    });
    const selectMedicine = (selected: Medicine) => {
        setModalData((prev) => ({
            ...prev,
            medicineId: selected.id,
            itemCode: selected.itemCode,
            medicineName: selected.medicineName,
            type: selected.type,
            packItem: selected.packItem,
            gst: selected.gst,
            hsnCode: selected.hsnCode,
            company: selected.company || '',
            discountPercent: 0
        }));
        setMedicineSearches((prev) => ({ ...prev, modal: `${selected.itemCode} - ${selected.medicineName}` }));
        setEditingItem(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 shadow-lg">
                <h1 className="text-4xl font-light mb-3 text-center">Purchase Bill</h1>
            </div>

            {/* Form Section */}
            <div className="p-2 sm:p-3 lg:p-4 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Left Side */}
                    <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-end">
                            {/* Purchase ID */}
                            <div className="sm:col-span-2">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Pur ID</label>
                                <input
                                    type="text"
                                    name="purchaseId"
                                    value={purchaseBill.purchaseId ?? ""}
                                    readOnly
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900 font-medium focus:outline-none"
                                />
                            </div>

                            {/* Date */}
                            <div className="sm:col-span-3">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Date</label>
                                <input
                                    type="date"
                                    value={purchaseBill.date}
                                    onChange={(e) =>
                                        setPurchaseBill((prev) => ({ ...prev, date: e.target.value }))
                                    }
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Supplier - Takes the rest */}
                            <div className="col-span-12 sm:col-span-7">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Supplier</label>
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
                                                const firstName = s.name.split(' ')[0].toLowerCase();
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

                                                const gstTotal = updatedItems.reduce((sum, i) => sum + (i.gstAmount || 0), 0);
                                                const cgst = updatedItems.reduce((sum, i) => sum + (i.cgstAmount || 0), 0);
                                                const sgst = updatedItems.reduce((sum, i) => sum + (i.sgstAmount || 0), 0);
                                                const igst = updatedItems.reduce((sum, i) => sum + (i.igstAmount || 0), 0);

                                                setPurchaseBill(prev => ({
                                                    ...prev,
                                                    supplierId: selectedSupplier.id,
                                                    supplierName: selectedSupplier.name,
                                                    supplierAddress: selectedSupplier.address,
                                                    supplierLocation: selectedSupplier.location,
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
                                            <div className="text-xs font-medium text-gray-700">
                                                {item.name}
                                            </div>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">

                            {/* Supplier Address */}
                            <div className="w-full sm:w-1/2">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Address</label>
                                <input
                                    type="text"
                                    value={purchaseBill.supplierAddress}
                                    readOnly
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                />
                            </div>

                            {/* Supplier Location */}
                            <div className="w-full sm:w-1/2">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Location</label>
                                <input
                                    type="text"
                                    value={purchaseBill.supplierLocation || ""}
                                    readOnly
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-3">

                        <div className="flex flex-col sm:flex-row gap-2">
                            {/* Invoice No - 60% */}
                            <div className="w-full sm:w-3/5">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Inv No</label>
                                <input
                                    type="text"
                                    value={purchaseBill.invoiceNo}
                                    onChange={(e) => setPurchaseBill(prev => ({ ...prev, invoiceNo: e.target.value }))}
                                    required
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Invoice Date - 40% */}
                            <div className="w-full sm:w-2/5">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Inv Date</label>
                                <input
                                    type="date"
                                    value={purchaseBill.invoiceDate}
                                    onChange={(e) => setPurchaseBill(prev => ({ ...prev, invoiceDate: e.target.value }))}
                                    required
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            {/* GST IN - 60% */}
                            <div className="w-full sm:w-3/5">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">GST IN</label>
                                <input
                                    type="text"
                                    value={purchaseBill.gst}
                                    readOnly
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                />
                            </div>

                            {/* Payment Type - 40% */}
                            <div className="w-full sm:w-2/5">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Payment</label>
                                <select
                                    value={purchaseBill.paymentType}
                                    onChange={(e) => setPurchaseBill(prev => ({ ...prev, paymentType: e.target.value }))}
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="Credit">Credit</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
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
                <div className="bg-white rounded-lg shadow-lg relative z-10">
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-[800px] w-full border border-blue-300 text-xs sm:text-sm">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <tr>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Item Code</th>
                                    <th className="w-90 px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500">Medicine</th>
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
                                    <tr
                                        key={item.tempId ?? item.id}   // ✅ this fixes NaN key error
                                        className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors duration-200`}
                                    >
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm font-medium">
                                            {item.itemCode}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            {item.medicineName}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            {item.batchNo}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                            {formatExpiry(item.expiryDate)}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center">
                                            {item.qty}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center">
                                            {item.freeQty}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center">
                                            ₹{safeToFixed(item.purchaseRate)}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center">
                                            ₹{Number(item.salesRate || 0).toFixed(2)}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center">
                                            {item.gst}%
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center font-bold text-green-700">
                                            ₹{Number(item.totalAmount || 0).toFixed(2)}
                                        </td>
                                        <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center">
                                            {item.hsnCode}
                                        </td>
                                        <td className="px-2 py-2 text-center">
                                            <div className="flex gap-1 justify-center">
                                                <button
                                                    type="button"
                                                    onClick={() => editItem(item)}
                                                    className="text-blue-600 hover:text-blue-800 transition"
                                                    title="Edit item"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                {item.id !== null && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeItem({ id: item.id! })} // Safe here
                                                        className="text-red-600 hover:text-red-800 transition"
                                                        title="Delete item"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
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
                                            <input
                                                type="hidden"
                                                value={item.totalQty || 0}
                                                name={`item-${item.id}-totalQty`}
                                                onChange={() => { }}
                                            />
                                            <input
                                                type="hidden"
                                                value={item.totalFreeQty || 0}
                                                name={`item-${item.id}-totalFreeQty`}
                                                onChange={() => { }}
                                            />
                                            <input
                                                type="hidden"
                                                value={item.currentStock || 0}
                                                name={`item-${item.id}-currentStock`}
                                                onChange={() => { }}
                                            />
                                        </td>

                                    </tr>
                                ))}
                                {purchaseBill.items.length === 0 && (
                                    <tr>
                                        <td colSpan={16} className="text-center py-6 text-gray-500 italic">
                                            No items added yet. Click "Add Item" to begin.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-t-lg">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">
                                    {editingItemData ? 'Edit Item' : 'Add New Item'}
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-5">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Left Side - Input Fields */}
                                <div className="flex justify-start">
                                    <div className="space-y-3 w-full max-w-xs">

                                        {/* Medicine Dropdown */}
                                        <div className="space-y-2">
                                            <label className="block text-xs font-medium text-gray-700">Item Code</label>
                                            <div className="relative" ref={medicineDropdownRef}>
                                                <input
                                                    type="text"
                                                    placeholder="Search medicine"
                                                    value={medicineSearches.modal || ''}
                                                    onChange={(e) =>
                                                        setMedicineSearches((prev) => ({ ...prev, modal: e.target.value }))
                                                    }
                                                    onFocus={() => setEditingItem(-999)}
                                                    onKeyDown={(e) => {
                                                        const top = filteredMedicines[0];
                                                        if (e.key === 'Enter' && top) {
                                                            selectMedicine(top);
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />

                                                {editingItem === -999 && (
                                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow max-h-48 overflow-y-auto">
                                                        {filteredMedicines.length > 0 ? (
                                                            filteredMedicines.map((m) => (
                                                                <div
                                                                    key={m.id}
                                                                    className="px-3 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                                                                    onMouseDown={() => selectMedicine(m)} // ✅ mouse down happens before blur
                                                                >
                                                                    {m.itemCode} - {m.medicineName}
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <div className="px-3 py-2 text-sm text-gray-500">No results found</div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Company & HSN Code */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Company</label>
                                                <input
                                                    type="text"
                                                    value={modalData.company || ''}
                                                    readOnly
                                                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded bg-gray-50 text-gray-700"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">HSN Code</label>
                                                <input
                                                    type="text"
                                                    value={modalData.hsnCode}
                                                    readOnly
                                                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded bg-gray-50 text-gray-700"
                                                />
                                            </div>
                                        </div>

                                        {/* Batch & Exp Date */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Batch</label>
                                                <input
                                                    type="text"
                                                    value={modalData.batchNo}
                                                    onChange={(e) => setModalData(prev => ({ ...prev, batchNo: e.target.value }))}
                                                    // onBlur={handleBatchBlur}
                                                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="Batch No"
                                                // onKeyDown={(e) => {
                                                //     if (e.key === 'Enter') {
                                                //         handleBatchBlur();
                                                //     }
                                                // }}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Exp Date</label>
                                                <input
                                                    type="text"
                                                    placeholder="MM-YYYY"
                                                    value={medicineSearches[`modal-expiry`] || formatExpiry(modalData.expiryDate)}
                                                    onChange={(e) => handleModalExpiryChange(e.target.value)}
                                                    className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-center"
                                                    maxLength={7}
                                                    inputMode="numeric"
                                                />
                                            </div>
                                        </div>

                                        {/* Pur Qty, Free, Pack Item */}
                                        <div className="grid grid-cols-3 gap-2">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Pur Qty</label>
                                                <input
                                                    type="number"
                                                    value={modalData.qty || ''}
                                                    onChange={(e) => {
                                                        const qty = parseFloat(e.target.value) || 0;
                                                        setModalData(prev => ({ ...prev, qty }));
                                                        calculateRates({ ...modalData, qty });
                                                    }}
                                                    className="w-20 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-center"
                                                    placeholder="0"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Free</label>
                                                <input
                                                    type="number"
                                                    value={modalData.freeQty || ''}
                                                    onChange={(e) => {
                                                        const freeQty = parseFloat(e.target.value) || 0;
                                                        setModalData(prev => ({ ...prev, freeQty }));
                                                        calculateRates({ ...modalData, freeQty });
                                                    }}
                                                    className="w-20 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-center"
                                                    placeholder="0"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Pack Item</label>
                                                <input
                                                    type="text"
                                                    value={modalData.packItem}
                                                    readOnly
                                                    className="w-20 px-2 py-1.5 text-xs border border-gray-300 rounded bg-gray-50 text-gray-700 text-center"
                                                />
                                            </div>
                                        </div>

                                        {/* MRP & Rate */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">MRP</label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={modalData.mrp || ''}
                                                    onChange={(e) => {
                                                        const mrp = parseFloat(e.target.value) || 0;
                                                        setModalData(prev => ({ ...prev, mrp }));
                                                        calculateRates({ ...modalData, mrp });
                                                    }}
                                                    className="w-25 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="0.00"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Rate</label>
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={modalData.rate || ''}
                                                    onChange={(e) => {
                                                        const rate = parseFloat(e.target.value) || 0;
                                                        setModalData(prev => ({ ...prev, rate }));
                                                        calculateRates({ ...modalData, rate });
                                                    }}
                                                    className="w-25 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                                    placeholder="0.00"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Calculated Values */}
                                <div className="flex justify-end">
                                    <div className="space-y-3 w-full max-w-xs">

                                        {/* P.Rate & S.Rate */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">P. Rate</label>
                                                <div className="w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-blue-50 text-blue-900 font-medium">
                                                    {Number(calculatedValues.pRate || 0).toFixed(2)}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">S. Rate</label>
                                                <div className="w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-blue-50 text-blue-900 font-medium">
                                                    {Number(calculatedValues.sRate || 0).toFixed(2)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Item MRP & GST */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Item MRP</label>
                                                <div className="w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-blue-50 text-blue-900 font-medium">
                                                    {(calculatedValues.itemMrp || 0).toFixed(2)}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">GST</label>
                                                <div className="w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-blue-50 text-blue-900 font-medium">
                                                    {modalData.gst}%
                                                </div>
                                            </div>
                                        </div>

                                        {/* Qty & Free Qty */}
                                        <div className="grid grid-cols-2 gap-2">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Qty</label>
                                                <div className="w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-green-50 text-green-900 font-medium">
                                                    {calculatedValues.totalQty}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Free Qty</label>
                                                <div className="w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-green-50 text-green-900 font-medium">
                                                    {calculatedValues.totalFreeQty}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Amount */}
                                        <div>
                                            <label className="block text-xs font-medium text-gray-700 mb-1">Amount</label>
                                            <div className="w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-yellow-50 text-yellow-900 font-medium">
                                                ₹{(calculatedValues.amount || 0).toFixed(2)}
                                            </div>
                                        </div>

                                        {/* Summary */}
                                        <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
                                            <h5 className="text-xs font-semibold text-gray-700 mb-2">Summary</h5>
                                            <div className="space-y-1 text-xs">
                                                <div className="flex justify-between">
                                                    <span>Gross Amount:</span>
                                                    <span className="font-medium">₹{(calculatedValues.grossAmount || 0).toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Tax Amount:</span>
                                                    <span className="font-medium">₹{(calculatedValues.taxAmount || 0).toFixed(2)}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between border-t pt-1 font-semibold">
                                                    <span>Net Amount:</span>
                                                    <span>₹{(calculatedValues.netAmount || 0).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="bg-gray-50 px-4 py-3 rounded-b-lg">
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleModalSave}
                                    className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded hover:from-blue-700 hover:to-blue-900 transition-colors"
                                >
                                    {editingItemData ? 'Update' : 'Add'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                                        <span className="text-sm font-bold text-blue-900">₹{Number(purchaseBill.gstTotal || 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-blue-50">
                                        <span className="text-sm font-medium text-blue-900">CGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(purchaseBill.cgst || 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">SGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(purchaseBill.sgst || 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">IGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(purchaseBill.igst || 0).toFixed(2)}</span>
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
                                            ₹{Number(
                                                purchaseBill.items.reduce((acc, item) => acc + (item.totalAmount || 0), 0) +
                                                (purchaseBill.cessAmount || 0)
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-blue-50">
                                        <span className="text-sm font-medium text-blue-900">Round Off:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(purchaseBill.roundOff || 0).toFixed(2)}</span>
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
                                <div className="text-2xl font-bold">₹{Number(
                                    purchaseBill.items.reduce((acc, item) => acc + (item.totalAmount || 0), 0) +
                                    (purchaseBill.cessAmount || 0)
                                ).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    {errorMessage && (
                        <div className="mb-4 text-sm text-red-600 font-semibold bg-red-100 border border-red-300 p-2 rounded text-center">
                            {errorMessage}
                        </div>
                    )}
                    {successMessage && (
                        <div className="bg-green-100 text-green-800 p-2 rounded mb-4 shadow text-sm font-medium text-center">
                            {successMessage}
                        </div>
                    )}
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