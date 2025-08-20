'use client';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Trash2, Plus, Save, ChevronDown } from 'lucide-react';
import API from '@/lib/axios';

const API_BASE = API.defaults.baseURL; // IMPORTANT: Replace with your actual API base URL

// --- Embedded SearchableSelect Component ---
interface SearchableSelectItem {
    id: string; // Changed to string to match value prop and common HTML input patterns
    name: string;
    isLowStock?: boolean; // Added for medicine batch low stock indication
}

interface SearchableSelectProps {
    label: string;
    value: string; // Represents the selected item's ID
    searchValue: string; // Represents the current text input for searching
    setSearchValue: (value: string) => void;
    showDropdown: boolean;
    setShowDropdown: (open: boolean) => void;
    items: SearchableSelectItem[];
    onSelect: (id: string, name: string) => void; // onSelect now expects string id
    renderItem: (item: SearchableSelectItem) => React.ReactNode;
    placeholder?: string;
    isDisabled?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    editUrl?: string;
    error?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
    label,
    value,
    searchValue,
    setSearchValue,
    showDropdown,
    setShowDropdown,
    items,
    onSelect,
    renderItem,
    placeholder,
    isDisabled,
    inputRef
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setShowDropdown]);

    const displayValue = useMemo(() => {
        const selectedItem = items.find(item => item.id === value);
        return selectedItem ? selectedItem.name : searchValue;
    }, [items, value, searchValue]);

    return (
        <div className="relative" ref={dropdownRef}>
            {label && <label className="block text-xs font-semibold text-blue-900 mb-1">{label}</label>}
            <div className="flex border border-blue-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 bg-white">
                <input
                    ref={inputRef}
                    type="text"
                    value={displayValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        if (!showDropdown) setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder={placeholder}
                    className="flex-grow px-2 py-1.5 text-sm rounded-l-md focus:outline-none bg-transparent"
                    disabled={isDisabled}
                />
                <button
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="px-2 py-1.5 bg-blue-100 rounded-r-md text-blue-700 hover:bg-blue-200 focus:outline-none"
                    disabled={isDisabled}
                >
                    <ChevronDown size={16} />
                </button>
            </div>
            {showDropdown && (
                <div className="absolute z-50 w-full bg-white border border-blue-300 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1"> {/* Increased z-index */}
                    {items.length === 0 && <div className="p-2 text-sm text-gray-500">No results found.</div>}
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="p-2 cursor-pointer hover:bg-blue-100"
                            onClick={() => {
                                onSelect(item.id, item.name); // Pass both id and name for flexibility
                                setShowDropdown(false);
                                setSearchValue(''); // Clear search after selection
                            }}
                        >
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
// --- End Embedded SearchableSelect Component ---


// Custom Modal for alerts/confirms instead of window.alert/confirm
interface ModalProps {
    message: string;
    onClose: () => void;
    onConfirm?: () => void;
    type: 'alert' | 'confirm';
}

const CustomModal: React.FC<ModalProps> = ({ message, onClose, onConfirm, type }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                <p className="text-gray-800 text-lg mb-4 text-center">{message}</p>
                <div className="flex justify-center space-x-4">
                    {type === 'confirm' && (
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Confirm
                        </button>
                    )}
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
                    >
                        {type === 'alert' ? 'OK' : 'Cancel'}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Types for Sales Bill
interface Customer {
    id: number;
    name: string;
    mobileNo: string;
}

interface Doctor {
    id: number;
    name: string;
    phone: string; // Added phone based on your renderItem in the original prompt
}

interface SalesMan {
    id: number;
    code: string;
    name: string;
}

interface Medicine {
    id: number;
    itemCode: string;
    medicineName: string;
    type: string;
    packItem: number; // Changed to number as Qty calculations will use it
    purchaseRate: number; // Added for display in table as per user request
    salesRate: number; // Sales rate from Medicine
    gst: number;
    hsnCode: string;
}

interface MedicineBatch {
    id: number;
    batchNo: string;
    expiryDate: string; // YYYY-MM-DD format
    mrp: number;
    currentStock: number; // Smallest unit quantity
    medicineId: number;
    salesRate: number;
}

interface SaleItem {
    id: number; // Client-side unique ID
    itemCode: string;
    productInfo: string; // medicineName
    medicineId: number;
    packItem: number; // From Medicine
    batchNo: string;
    expiryDate: string;
    qty: number; // Smallest level of Qty
    free: number; // Smallest level of Qty
    price: number; // S.rate from Medicine
    discPercent: number;
    discAmt: number;
    mrp: number; // From MedicineBatch
    amount: number; // Calculated total for this item line
    gst: number; // From Medicine
    gstAmount: number; // Calculated GST for this item
    cgstAmount?: number;
    sgstAmount?: number;
    igstAmount?: number;
    hsnCode: string; // From Medicine
    // Additional for internal calculations/tracking
    baseAmount?: number; // Price * Qty before discount
    currentStockAtSelection?: number; // Stock from batch when selected, for display
    purchaseRate?: number; // For display, fetched from Medicine
    type?: string; // For display, fetched from Medicine
}

interface SalesBill {
    billNo: number;
    date: string;
    customerName: string;
    mobileNo: string;
    doctorId: number;
    doctorName: string;
    salesManId: number;
    salesManName: string;
    paymentType: 'Cash' | 'Card' | 'Online' | 'Credit'; // Default Cash
    items: SaleItem[];
    grossTotal: number;
    gstTotal: number;
    roundOff: number;
    discount: number; // Total discount across all items
    cgst: number;
    sgst: number;
    igst: number;
    cessAmount: number; // Assuming similar to purchase for now
    finalTotal: number;
    taxType?: 'intra' | 'inter'; // Based on GST logic (e.g., Kerala)
    isCancelled?: boolean;
}

const SalesBillPage: React.FC = () => {
    // State for the Sales Bill
    const [salesBill, setSalesBill] = useState<SalesBill>({
        billNo: 0,
        date: new Date().toISOString().split('T')[0],
        customerName: '',
        mobileNo: '',
        doctorId: 0,
        doctorName: '',
        salesManId: 0,
        salesManName: '',
        paymentType: 'Cash',
        items: [
            {
                id: Date.now(), // Unique ID for client-side rendering
                itemCode: '',
                productInfo: '',
                medicineId: 0,
                packItem: 0,
                batchNo: '',
                expiryDate: '',
                qty: 0, // Default to 0 for new input row
                free: 0,
                price: 0,
                discPercent: 0,
                discAmt: 0,
                mrp: 0,
                amount: 0,
                gst: 0,
                gstAmount: 0,
                hsnCode: '',
                currentStockAtSelection: 0,
                purchaseRate: 0, // Initial value
                type: '', // Initial value
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
        finalTotal: 0,
        taxType: 'intra', // Default to intra-state
    });

    // Master data states
    const [medicines, setMedicines] = useState<Medicine[]>([]);
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [salesMen, setSalesMen] = useState<SalesMan[]>([]);
    const [medicineBatches, setMedicineBatches] = useState<MedicineBatch[]>([]);

    // UI states for SearchableSelect and general messages
    const [searchTerms, setSearchTerms] = useState<Record<string | number, string>>({});
    const [activeDropdown, setActiveDropdown] = useState<string | number | null>(null); // To control which SearchableSelect dropdown is open

    // State for the custom medicine dropdown in the table
    const [showMedicineDropdown, setShowMedicineDropdown] = useState<number | null>(null); // itemId for which medicine dropdown is active
    const [medicineSearchInput, setMedicineSearchInput] = useState<string>('');
    const medicineDropdownRef = useRef<HTMLTableCellElement | null>(null);


    const [modalMessage, setModalMessage] = useState('');
    const [modalType, setModalType] = useState<'alert' | 'confirm'>('alert');
    const [modalCallback, setModalCallback] = useState<(() => void) | null>(null);

    const closeModal = () => {
        setModalMessage('');
        setModalCallback(null);
    };

    const showAlert = (message: string) => {
        setModalMessage(message);
        setModalType('alert');
    };

    const showConfirm = (message: string, callback: () => void) => {
        setModalMessage(message);
        setModalType('confirm');
        setModalCallback(() => callback);
    };

    const editId = new URLSearchParams(window.location.search).get('edit');

    const isCancelled = salesBill.isCancelled === true;
    const isFinalized = salesBill.finalTotal > 0 && !salesBill.isCancelled;

    // Refs for input focus management
    const inputRefs = useRef<{ [key: string]: HTMLInputElement | HTMLSelectElement | null }>({});

    // Fetch Bill No. on initial load if not in edit mode
    useEffect(() => {
        const fetchBillNo = async () => {
            try {
                const res = await fetch(`${API_BASE}/api/SalesBills/next-bill-no`);
                if (!res.ok) throw new Error('Failed to fetch Bill No');
                const newId = await res.json();
                setSalesBill(prev => ({ ...prev, billNo: newId }));
            } catch (error) {
                console.error('Error fetching Bill No:', error);
                showAlert('Error fetching Bill No.');
            }
        };
        if (!editId) {
            fetchBillNo();
        }
    }, [editId]);

    // Fetch master data (Medicines, Doctors, SalesMen)
    useEffect(() => {
        const fetchMasterData = async () => {
            try {
                // Medicines
                const medicinesRes = await fetch(`${API_BASE}/api/Medicines/dropdown`);
                if (!medicinesRes.ok) throw new Error('Failed to fetch medicines');
                setMedicines(await medicinesRes.json());

                // Doctors - Corrected API endpoint using fetch
                const doctorsRes = await fetch(`${API_BASE}/api/Doctors/all-doctors`);
                if (!doctorsRes.ok) throw new Error('Failed to fetch doctors');
                setDoctors(await doctorsRes.json());

                // SalesMen
                // const salesMenRes = await fetch(`${API_BASE}/api/SalesMen`);
                // if (!salesMenRes.ok) throw new Error('Failed to fetch sales men');
                // setSalesMen(await salesMenRes.json());

                // Medicine Batches - For Sales: sorted by expiry, non-expired, with current stock
                const batchesRes = await fetch(`${API_BASE}/api/MedicineBatches/sales-batches`);
                if (!batchesRes.ok) throw new Error('Failed to fetch medicine batches');
                setMedicineBatches(await batchesRes.json());

            } catch (error) {
                console.error('Error fetching master data:', error);
                showAlert('Error fetching master data.');
            }
        };
        fetchMasterData();
    }, []);

    // Function to get filtered items for SearchableSelect
    const getFilteredItems = useCallback((data: any[], searchTerm: string, keyField: string, nameField: string) => {
        if (!searchTerm) return data;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return data.filter(item =>
            item[keyField]?.toString().toLowerCase().includes(lowerCaseSearchTerm) ||
            item[nameField]?.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, []);

    // Filtered medicines for the custom dropdown
    const filteredMedicines = useMemo(() => {
        if (!medicineSearchInput) return medicines;
        const lowerCaseSearchTerm = medicineSearchInput.toLowerCase();
        return medicines.filter(m =>
            m.itemCode.toLowerCase().includes(lowerCaseSearchTerm) ||
            m.medicineName.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [medicines, medicineSearchInput]);

    // Add new item row to the sales bill
    const addItem = () => {
        if (isCancelled || isFinalized) {
            showAlert("This bill is finalized or cancelled. Items cannot be added.");
            return;
        }

        const currentInputItem = salesBill.items[salesBill.items.length - 1];

        // Basic validation for the item being added
        if (!currentInputItem.medicineId || !currentInputItem.batchNo || currentInputItem.qty <= 0) {
            showAlert("Please ensure Item Code, Batch No, and Quantity are filled for the current item before adding a new one.");
            return;
        }
        if (currentInputItem.qty > (currentInputItem.currentStockAtSelection || 0)) {
            showAlert(`Quantity for ${currentInputItem.productInfo} (${currentInputItem.batchNo}) exceeds available stock (${currentInputItem.currentStockAtSelection}).`);
            return;
        }


        // Move current input item into the confirmed list (if it's not empty)
        // No explicit 'push' needed here, as the state update logic below creates a new item
        // and current item is effectively "moved" by being replaced in the UI with a new empty one.

        // Create a new empty item for the next input
        const newItem: SaleItem = {
            id: Date.now(), // Unique ID for client-side rendering
            itemCode: '',
            productInfo: '',
            medicineId: 0,
            packItem: 0,
            batchNo: '',
            expiryDate: '',
            qty: 0, // Default to 0 for new entry
            free: 0,
            price: 0,
            discPercent: 0,
            discAmt: 0,
            mrp: 0,
            amount: 0,
            gst: 0,
            gstAmount: 0,
            hsnCode: '',
            currentStockAtSelection: 0,
            purchaseRate: 0,
            type: '',
        };

        setSalesBill(prev => ({
            ...prev,
            items: [...prev.items, newItem] // Add the new empty item at the end
        }));

        // Focus on the new item's itemCode input
        setTimeout(() => {
            const newItemId = newItem.id;
            const refKey = `itemCode-${newItemId}`;
            inputRefs.current[refKey]?.focus();
        }, 100);
    };

    // Remove item from the sales bill
    const removeItem = (itemId: number) => {
        if (isCancelled || isFinalized) {
            showAlert("This bill is finalized or cancelled. Items cannot be deleted.");
            return;
        }
        setSalesBill(prev => {
            const updatedItems = prev.items.filter(item => item.id !== itemId);
            // Ensure there's always at least one empty item row for input
            if (updatedItems.length === 0) {
                updatedItems.push({
                    id: Date.now(),
                    itemCode: '', productInfo: '', medicineId: 0, packItem: 0, batchNo: '', expiryDate: '',
                    qty: 0, free: 0, price: 0, discPercent: 0, discAmt: 0, mrp: 0, amount: 0, gst: 0, gstAmount: 0,
                    hsnCode: '', currentStockAtSelection: 0, purchaseRate: 0, type: '',
                });
            }
            return {
                ...prev,
                items: updatedItems
            };
        });
    };

    // Recalculate item totals
    const calculateItemTotals = useCallback((item: SaleItem, currentTaxType: 'intra' | 'inter'): SaleItem => {
        const updatedItem = { ...item };

        const baseBeforeDiscount = updatedItem.qty * updatedItem.price;
        const discountAmount = (baseBeforeDiscount * (updatedItem.discPercent || 0)) / 100;
        updatedItem.discAmt = parseFloat(discountAmount.toFixed(2));

        const priceAfterDiscount = baseBeforeDiscount - updatedItem.discAmt;
        updatedItem.baseAmount = parseFloat(priceAfterDiscount.toFixed(2)); // Base amount after discount

        const gstAmount = (updatedItem.baseAmount * updatedItem.gst) / 100;
        updatedItem.gstAmount = parseFloat(gstAmount.toFixed(2));

        if (currentTaxType === 'intra') {
            updatedItem.cgstAmount = parseFloat((gstAmount / 2).toFixed(2));
            updatedItem.sgstAmount = parseFloat((gstAmount / 2).toFixed(2));
            updatedItem.igstAmount = 0;
        } else {
            updatedItem.cgstAmount = 0;
            updatedItem.sgstAmount = 0;
            updatedItem.igstAmount = parseFloat(gstAmount.toFixed(2));
        }

        updatedItem.amount = parseFloat((updatedItem.baseAmount + updatedItem.gstAmount).toFixed(2));

        return updatedItem;
    }, []);

    // Update individual item field
    const updateItem = useCallback((itemId: number, field: keyof SaleItem, value: any) => {
        setSalesBill(prev => {
            const updatedItems = prev.items.map(item => {
                if (item.id === itemId) {
                    let updatedItem = { ...item, [field]: value };

                    // Handle specific field updates and then recalculate
                    if (field === 'itemCode') {
                        const selectedMedicine = medicines.find(m => m.itemCode === value);
                        if (selectedMedicine) {
                            updatedItem.medicineId = selectedMedicine.id;
                            updatedItem.productInfo = selectedMedicine.medicineName;
                            updatedItem.packItem = selectedMedicine.packItem;
                            updatedItem.price = selectedMedicine.salesRate; // Sales Rate
                            updatedItem.gst = selectedMedicine.gst;
                            updatedItem.hsnCode = selectedMedicine.hsnCode;
                            updatedItem.purchaseRate = selectedMedicine.purchaseRate; // Purchase Rate
                            updatedItem.type = selectedMedicine.type; // Type

                            // Reset batch info as medicine changed
                            updatedItem.batchNo = '';
                            updatedItem.expiryDate = '';
                            updatedItem.mrp = 0;
                            updatedItem.currentStockAtSelection = 0;
                            updatedItem.qty = 0; // Reset quantity when medicine changes
                            updatedItem.free = 0; // Reset free qty
                            updatedItem.discPercent = 0; // Reset discount
                        } else {
                            // Clear related fields if itemCode is cleared or invalid
                            updatedItem.medicineId = 0;
                            updatedItem.productInfo = '';
                            updatedItem.packItem = 0;
                            updatedItem.price = 0;
                            updatedItem.gst = 0;
                            updatedItem.hsnCode = '';
                            updatedItem.batchNo = '';
                            updatedItem.expiryDate = '';
                            updatedItem.mrp = 0;
                            updatedItem.currentStockAtSelection = 0;
                            updatedItem.qty = 0;
                            updatedItem.free = 0;
                            updatedItem.discPercent = 0;
                            updatedItem.discAmt = 0;
                            updatedItem.amount = 0;
                            updatedItem.gstAmount = 0;
                            updatedItem.cgstAmount = 0;
                            updatedItem.sgstAmount = 0;
                            updatedItem.igstAmount = 0;
                            updatedItem.purchaseRate = 0;
                            updatedItem.type = '';
                        }
                    } else if (field === 'batchNo') {
                        const selectedBatch = medicineBatches.find(b => b.batchNo === value && b.medicineId === updatedItem.medicineId);
                        if (selectedBatch) {
                            updatedItem.expiryDate = selectedBatch.expiryDate;
                            updatedItem.mrp = selectedBatch.mrp;
                            updatedItem.currentStockAtSelection = selectedBatch.currentStock;
                        } else {
                            updatedItem.expiryDate = '';
                            updatedItem.mrp = 0;
                            updatedItem.currentStockAtSelection = 0;
                        }
                    } else if (['qty', 'free', 'price', 'discPercent', 'mrp'].includes(field as string)) {
                        (updatedItem as any)[field] = parseFloat(value) || 0;
                    }

                    // Recalculate item specific totals
                    return calculateItemTotals(updatedItem, prev.taxType || 'intra');
                }
                return item;
            });

            // Recalculate overall bill totals based on ALL items (excluding the last input item if it's empty)
            const itemsForTotalCalculation = updatedItems.filter((item, index) =>
                !(index === updatedItems.length - 1 && item.medicineId === 0 && item.itemCode === '')
            );

            const grossTotal = itemsForTotalCalculation.reduce((sum, item) => sum + (item.qty * item.price), 0);
            const totalDiscountAmount = itemsForTotalCalculation.reduce((sum, item) => sum + (item.discAmt || 0), 0);
            const gstTotal = itemsForTotalCalculation.reduce((sum, item) => sum + (item.gstAmount || 0), 0);
            const cgst = itemsForTotalCalculation.reduce((sum, item) => sum + (item.cgstAmount || 0), 0);
            const sgst = itemsForTotalCalculation.reduce((sum, item) => sum + (item.sgstAmount || 0), 0);
            const igst = itemsForTotalCalculation.reduce((sum, item) => sum + (item.igstAmount || 0), 0);

            const actualTotalExcludingRoundOff = (grossTotal - totalDiscountAmount + gstTotal + prev.cessAmount);
            const roundedTotal = Math.round(actualTotalExcludingRoundOff * 100) / 100; // Round to 2 decimals
            const roundOff = parseFloat((roundedTotal - actualTotalExcludingRoundOff).toFixed(2));
            const finalTotal = roundedTotal;

            return {
                ...prev,
                items: updatedItems,
                grossTotal: parseFloat(grossTotal.toFixed(2)),
                discount: parseFloat(totalDiscountAmount.toFixed(2)),
                gstTotal: parseFloat(gstTotal.toFixed(2)),
                cgst: parseFloat(cgst.toFixed(2)),
                sgst: parseFloat(sgst.toFixed(2)),
                igst: parseFloat(igst.toFixed(2)),
                roundOff: roundOff,
                finalTotal: parseFloat(finalTotal.toFixed(2)),
            };
        });
    }, [medicines, medicineBatches, calculateItemTotals]);


    // Function to select medicine from the custom dropdown
    const selectMedicine = useCallback((selectedMed: Medicine, itemId: number) => {
        updateItem(itemId, 'itemCode', selectedMed.itemCode);
        setMedicineSearchInput(''); // Clear search input
        setShowMedicineDropdown(null); // Close dropdown
    }, [updateItem]);

    // Close custom medicine dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (medicineDropdownRef.current && !medicineDropdownRef.current.contains(event.target as Node)) {
                setShowMedicineDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Fetch and prefill bill data for edit mode
    useEffect(() => {
        async function fetchAndPrefillSalesBill() {
            if (!editId) return; // Only run in edit mode

            try {
                // Fetch sales bill details
                const billRes = await fetch(`${API_BASE}/api/SalesBills/${editId}`);
                if (!billRes.ok) throw new Error('Failed to fetch Sales Bill for editing');
                const data = await billRes.json();

                // Prefill main bill details
                setSalesBill(prev => ({
                    ...prev,
                    billNo: data.billNo ?? 0,
                    date: data.date?.split("T")[0] ?? new Date().toISOString().split('T')[0],
                    customerName: data.customerName ?? '',
                    mobileNo: data.mobileNo ?? '',
                    doctorId: data.doctorId ?? 0,
                    doctorName: data.doctorName ?? '',
                    salesManId: data.salesManId ?? 0,
                    salesManName: data.salesManName ?? '',
                    paymentType: data.paymentType ?? 'Cash',
                    grossTotal: data.grossTotal ?? 0,
                    gstTotal: data.gstTotal ?? 0,
                    roundOff: data.roundOff ?? 0,
                    discount: data.discount ?? 0,
                    cgst: data.cgst ?? 0,
                    sgst: data.sgst ?? 0,
                    igst: data.igst ?? 0,
                    cessAmount: data.cessAmount ?? 0,
                    finalTotal: data.finalTotal ?? 0,
                    taxType: data.taxType ?? 'intra',
                    isCancelled: data.isCancelled ?? false,
                    // Enrich items for the table display
                    items: data.items.map((item: any) => {
                        const matchedMedicine = medicines.find(m => m.id === item.medicineId);
                        const matchedBatch = medicineBatches.find(b => b.medicineId === item.medicineId && b.batchNo === item.batchNo);
                        return {
                            id: item.id || Date.now(), // Use existing ID or generate
                            itemCode: matchedMedicine?.itemCode ?? '',
                            productInfo: matchedMedicine?.medicineName ?? '',
                            medicineId: item.medicineId,
                            packItem: matchedMedicine?.packItem ?? 0,
                            batchNo: item.batchNo,
                            expiryDate: item.expiryDate,
                            qty: item.qty,
                            free: item.free,
                            price: item.price, // Sales rate from saved bill
                            discPercent: item.discPercent,
                            discAmt: item.discAmt,
                            mrp: item.mrp,
                            amount: item.totalAmount, // Already calculated total for this item
                            gst: matchedMedicine?.gst ?? 0,
                            gstAmount: item.gstAmount,
                            cgstAmount: item.cgstAmount,
                            sgstAmount: item.sgstAmount,
                            igstAmount: item.igstAmount,
                            hsnCode: matchedMedicine?.hsnCode ?? '',
                            currentStockAtSelection: matchedBatch?.currentStock ?? 0,
                            purchaseRate: matchedMedicine?.purchaseRate ?? 0, // from medicine
                            type: matchedMedicine?.type ?? '', // from medicine
                        };
                    }).concat([{ // Add one empty row for new input at the end
                        id: Date.now(),
                        itemCode: '', productInfo: '', medicineId: 0, packItem: 0, batchNo: '', expiryDate: '',
                        qty: 0, free: 0, price: 0, discPercent: 0, discAmt: 0, mrp: 0, amount: 0, gst: 0, gstAmount: 0,
                        hsnCode: '', currentStockAtSelection: 0, purchaseRate: 0, type: '',
                    }]),
                }));
            } catch (err) {
                console.error("Error while pre-filling sales bill:", err);
                showAlert("Error loading sales bill for editing.");
            }
        }

        // Only fetch if master data is loaded, otherwise prefill logic might fail to enrich items correctly
        if (editId && medicines.length > 0 && medicineBatches.length > 0) {
            fetchAndPrefillSalesBill();
        }
    }, [editId, medicines, medicineBatches]); // Depend on master data to ensure it's loaded before prefilling

    // Save Sales Bill
    const saveSalesBill = async () => {
        if (isCancelled || isFinalized) {
            showAlert("This bill is finalized or cancelled and cannot be modified.");
            return;
        }

        // Filter out the last empty item row (if it's truly empty) before sending
        const itemsToSave = salesBill.items.filter(item =>
            item.medicineId !== 0 || item.itemCode !== ''
        );

        // Basic validation after filtering empty row
        if (itemsToSave.length === 0 || itemsToSave.some(item => !item.medicineId || !item.batchNo || item.qty <= 0)) {
            showAlert('Please fill in all required fields and add at least one valid item.');
            return;
        }
        if (itemsToSave.some(item => item.qty > (item.currentStockAtSelection || 0))) {
            showAlert('Quantity cannot exceed available stock for some items.');
            return;
        }

        try {
            // Prepare payload for API
            const payload = {
                ...salesBill,
                items: itemsToSave.map(item => ({
                    medicineId: item.medicineId,
                    batchNo: item.batchNo,
                    expiryDate: item.expiryDate,
                    qty: item.qty,
                    free: item.free,
                    price: item.price, // This is the S.rate
                    discPercent: item.discPercent,
                    discAmt: item.discAmt,
                    mrp: item.mrp,
                    gst: item.gst,
                    gstAmount: item.gstAmount,
                    cgstAmount: item.cgstAmount,
                    sgstAmount: item.sgstAmount,
                    igstAmount: item.igstAmount,
                    totalAmount: item.amount,
                    hsnCode: item.hsnCode,
                })),
                doctorId: salesBill.doctorId === 0 && salesBill.doctorName ? null : salesBill.doctorId,
                salesManId: salesBill.salesManId === 0 && salesBill.salesManName ? null : salesBill.salesManId,
            };

            const res = await fetch(`${API_BASE}/api/SalesBills`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errMessage = await res.text();
                throw new Error(`Failed to save sales bill: ${errMessage}`);
            }

            const savedBill = await res.json();
            setSalesBill(prev => ({ ...prev, billNo: savedBill.billNo }));

            showAlert('Sales bill saved successfully!');
            setTimeout(() => {
                showAlert('Sales bill saved successfully!');
                // Reset the form to a fresh state after successful save
                setSalesBill({
                    billNo: 0,
                    date: new Date().toISOString().split('T')[0],
                    customerName: '',
                    mobileNo: '',
                    doctorId: 0,
                    doctorName: '',
                    salesManId: 0,
                    salesManName: '',
                    paymentType: 'Cash',
                    items: [
                        {
                            id: Date.now(), itemCode: '', productInfo: '', medicineId: 0, packItem: 0, batchNo: '', expiryDate: '',
                            qty: 0, free: 0, price: 0, discPercent: 0, discAmt: 0, mrp: 0, amount: 0, gst: 0, gstAmount: 0,
                            hsnCode: '', currentStockAtSelection: 0, purchaseRate: 0, type: '',
                        }
                    ],
                    grossTotal: 0, gstTotal: 0, roundOff: 0, discount: 0, cgst: 0, sgst: 0, igst: 0, cessAmount: 0, finalTotal: 0,
                    taxType: 'intra',
                });
                // Fetch new bill number for the next entry
                const fetchNewBillNo = async () => {
                    try {
                        const res = await fetch(`${API_BASE}/api/SalesBills/bill-no`);
                        if (!res.ok) throw new Error('Failed to fetch Bill No');
                        const newId = await res.json();
                        setSalesBill(prev => ({ ...prev, billNo: newId }));
                    } catch (error) {
                        console.error('Error fetching new Bill No:', error);
                        showAlert('Error fetching new Bill No.');
                    }
                };
                fetchNewBillNo();
            }, 600);
        } catch (err) {
            console.error('Failed to save sales bill:', err);
            showAlert(`Failed to save sales bill: ${(err as Error).message}`);
        }
    };

    // Cancel Sales Bill
    const cancelSalesBill = async () => {
        showConfirm('Are you sure you want to cancel this bill? This action cannot be undone.', async () => {
            try {
                const res = await fetch(`${API_BASE}/api/SalesBills/${salesBill.billNo}/cancel`, {
                    method: 'PUT'
                });

                if (!res.ok) throw new Error('Failed to cancel bill');

                setSalesBill(prev => ({
                    ...prev,
                    isCancelled: true,
                    items: prev.items.map(item => ({
                        ...item,
                        productInfo: `[CANCELLED] ${item.productInfo}`
                    }))
                }));

                showAlert('Sales bill marked as CANCELLED!');
                setTimeout(() => closeModal(), 600);
            } catch (error) {
                console.error('Error cancelling bill:', error);
                showAlert(`Failed to cancel sales bill: ${(error as Error).message}`);
            } finally {
                closeModal();
            }
        });
    };

    // Expiry date formatting (MM-YYYY)
    const formatExpiry = (value: string) => {
        if (!value) return '';
        const [year, month] = value.split('-');
        return `${month}-${year}`;
    };

    // Handle expiry date input (MMYY format)
    const handleExpiryChange = (input: string, itemId: number) => {
        const cleaned = input.replace(/[^\d]/g, ''); // Only digits

        let month = cleaned.slice(0, 2);
        let year = cleaned.slice(2, 6);

        // Ensure month is two digits, adding leading zero if necessary and value > 1
        if (month.length === 1 && parseInt(month) > 1) {
            month = '0' + month;
        }

        const formattedInput = [month, year].filter(Boolean).join('-');
        setSearchTerms(prev => ({ ...prev, [`expiry-${itemId}`]: formattedInput }));

        // If full valid date (MM-YYYY), update the item
        if (month.length === 2 && year.length === 4) {
            const monthNum = parseInt(month, 10);
            const yearNum = parseInt(year, 10);
            const currentYear = new Date().getFullYear();
            if (monthNum >= 1 && monthNum <= 12 && yearNum >= currentYear) {
                const dateValue = `${year}-${month}-01`; // Store as YYYY-MM-DD
                updateItem(itemId, 'expiryDate', dateValue);
                setSearchTerms(prev => {
                    const copy = { ...prev };
                    delete copy[`expiry-${itemId}`];
                    return copy;
                });
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-sans">
            {modalMessage && (
                <CustomModal
                    message={modalMessage}
                    onClose={closeModal}
                    onConfirm={modalCallback || undefined}
                    type={modalType}
                />
            )}

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 shadow-lg">
                <h1 className="text-4xl font-light mb-3 text-center">Sales Bill</h1>
            </div>

            {/* Form Section */}
            <div className="p-2 sm:p-3 lg:p-4 bg-white shadow-md rounded-lg mx-auto my-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Vertical Line */}
                    <div className="space-y-3">
                        {/* Bill No & Bill Date */}
                        <div className="flex gap-x-4">
                            {/* Bill No */}
                            <div className="w-40">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Bill No</label>
                                <input
                                    type="text"
                                    name="billNo"
                                    value={salesBill.billNo}
                                    readOnly
                                    className="w-full px-2 py-1 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900 font-medium focus:outline-none"
                                />
                            </div>

                            {/* Bill Date */}
                            <div className="w-40">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Bill Date</label>
                                <input
                                    type="date"
                                    value={salesBill.date}
                                    onChange={(e) => setSalesBill((prev) => ({ ...prev, date: e.target.value }))}
                                    className="w-full px-2 py-1 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    disabled={isCancelled || isFinalized}
                                />
                            </div>
                        </div>

                        {/* Payment Type */}
                        <div className="w-40">
                            <label className="block text-xs font-semibold text-blue-900 mb-1">Payment Type</label>
                            <select
                                value={salesBill.paymentType}
                                onChange={(e) => setSalesBill(prev => ({ ...prev, paymentType: e.target.value as SalesBill['paymentType'] }))}
                                className="w-full px-2 py-1 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                                disabled={isCancelled || isFinalized}
                            >
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                                <option value="Online">Online</option>
                                <option value="Credit">Credit</option>
                            </select>
                        </div>
                    </div>


                    {/* Second Vertical Line */}
                    <div className="space-y-3">
                        {/* Customer Name & Mobile No in one row */}
                        <div className="flex gap-x-4">
                            {/* Customer Name */}
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Customer Name</label>
                                <input
                                    type="text"
                                    value={salesBill.customerName}
                                    onChange={(e) => setSalesBill(prev => ({ ...prev, customerName: e.target.value }))}
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Customer Name"
                                    disabled={isCancelled || isFinalized}
                                />
                            </div>

                            {/* Mobile No */}
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Mobile No</label>
                                <input
                                    type="text"
                                    value={salesBill.mobileNo}
                                    onChange={(e) => setSalesBill(prev => ({ ...prev, mobileNo: e.target.value }))}
                                    className="w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter Mobile No"
                                    disabled={isCancelled || isFinalized}
                                />
                            </div>
                        </div>

                        {/* Doctor & Sales Person in one row */}
                        <div className="flex gap-x-4">
                            {/* Doctor */}
                            <div className="flex-1 relative z-20"> {/* Added relative z-20 here for Doctor dropdown */}
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Doctor</label>
                                <SearchableSelect
                                    label=""
                                    value={salesBill.doctorId.toString()}
                                    searchValue={searchTerms['doctor'] || salesBill.doctorName}
                                    setSearchValue={(val) => {
                                        setSearchTerms(prev => ({ ...prev, doctor: val }));
                                        // ONLY update doctorName during typing, doctorId remains as is until selected
                                        setSalesBill(prev => ({ ...prev, doctorName: val }));
                                    }}
                                    showDropdown={activeDropdown === 'doctor'}
                                    setShowDropdown={(open) => setActiveDropdown(open ? 'doctor' : null)}
                                    items={getFilteredItems(doctors, searchTerms['doctor'] || '', 'id', 'name').map(d => ({
                                        id: d.id.toString(),
                                        name: d.name
                                    }))}
                                    onSelect={(id, name) => {
                                        setSalesBill(prev => ({ ...prev, doctorId: parseInt(id), doctorName: name }));
                                        setSearchTerms(prev => ({ ...prev, doctor: '' }));
                                    }}
                                    renderItem={(item) => (
                                        <div className="text-xs font-medium text-gray-700">{item.name}</div>
                                    )}
                                    placeholder="Select or Type Doctor Name"
                                    isDisabled={isCancelled || isFinalized}
                                />
                            </div>

                            {/* Sales Person */}
                            <div className="flex-1">
                                <label className="block text-xs font-semibold text-blue-900 mb-1">Sales Person</label>
                                <SearchableSelect
                                    label=""
                                    value={salesBill.salesManId.toString()}
                                    searchValue={searchTerms['salesMan'] || salesBill.salesManName}
                                    setSearchValue={(val) => {
                                        setSearchTerms(prev => ({ ...prev, salesMan: val }));
                                        // ONLY update salesManName during typing, salesManId remains as is until selected
                                        setSalesBill(prev => ({ ...prev, salesManName: val }));
                                    }}
                                    showDropdown={activeDropdown === 'salesMan'}
                                    setShowDropdown={(open) => setActiveDropdown(open ? 'salesMan' : null)}
                                    items={getFilteredItems(salesMen, searchTerms['salesMan'] || '', 'id', 'name').map(sm => ({
                                        id: sm.id.toString(),
                                        name: `${sm.code} - ${sm.name}`
                                    }))}
                                    onSelect={(id, name) => {
                                        const selectedSalesMan = salesMen.find(sm => sm.id.toString() === id);
                                        setSalesBill(prev => ({ ...prev, salesManId: parseInt(id), salesManName: selectedSalesMan?.name || name }));
                                        setSearchTerms(prev => ({ ...prev, salesMan: '' }));
                                    }}
                                    renderItem={(item) => (
                                        <div className="text-xs font-medium text-gray-700">{item.name}</div>
                                    )}
                                    placeholder="Select Sales Person"
                                    isDisabled={isCancelled || isFinalized}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Items Section */}
            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-0">Items</h2>
                    {/* Add Item button is now below the table, this is for overall clarity if needed */}
                </div>

                {/* Items Table - Adjusted structure for dropdown visibility */}
                <div className="bg-white rounded-lg shadow-lg relative z-10"> {/* Keep this as relative and z-10 */}
                    <div className="overflow-x-auto"> {/* This div will scroll the table horizontally */}
                        <table className="min-w-[1200px] w-full border border-blue-300 text-xs sm:text-sm">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                                <tr>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500 w-[8%]">Item Code</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500 w-[15%]">Medicine Name</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]">Type</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]">Pack Item</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500 w-[10%]">Batch No</th>
                                    <th className="px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500 w-[8%]">Expiry</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]">Qty</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]">Free</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]">Disc %</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[7%]">P.Rate</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[7%]">S.Rate</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[7%]">MRP</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]">GST%</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[7%]">Amount</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]">HSN</th>
                                    <th className="px-2 py-3 text-center text-xs sm:text-sm font-medium w-[5%]">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salesBill.items.map((item, index) => {
                                    const isLastItem = index === salesBill.items.length - 1;
                                    const medicineInfo = medicines.find(m => m.id === item.medicineId);

                                    return (
                                        <tr key={item.id} className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors duration-200`}>
                                            {/* Item Code (Custom Dropdown for last row, text for others) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm relative z-20" ref={medicineDropdownRef}>
                                                {isLastItem ? (
                                                    <>
                                                        <input
                                                            type="text"
                                                            placeholder="Search medicine"
                                                            value={item.itemCode || medicineSearchInput}
                                                            onChange={(e) => {
                                                                setMedicineSearchInput(e.target.value);
                                                                // Clear itemCode if user starts typing a new search
                                                                updateItem(item.id, 'itemCode', '');
                                                                setShowMedicineDropdown(item.id);
                                                            }}
                                                            onFocus={() => setShowMedicineDropdown(item.id)}
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter' && filteredMedicines.length > 0) {
                                                                    selectMedicine(filteredMedicines[0], item.id);
                                                                    e.preventDefault(); // Prevent form submission
                                                                }
                                                            }}
                                                            className="w-40 border border-blue-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            disabled={isCancelled || isFinalized}
                                                            ref={el => { inputRefs.current[`itemCode-${item.id}`] = el }}
                                                        />

                                                        {showMedicineDropdown === item.id && (
                                                            <div className="absolute z-50 mt-1 w-full bg-white border border-blue-300 rounded shadow max-h-48 overflow-y-auto">
                                                                {filteredMedicines.length > 0 ? (
                                                                    filteredMedicines.map((m) => (
                                                                        <div
                                                                            key={m.id}
                                                                            className="px-3 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                                                                            onMouseDown={() => selectMedicine(m, item.id)} // Use onMouseDown to prevent blur
                                                                        >
                                                                            {m.itemCode} - {m.medicineName}
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <div className="px-3 py-2 text-sm text-gray-500">No results found</div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    <span>{item.itemCode}</span>
                                                )}
                                            </td>
                                            {/* Product Info (Read-only) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                                <span>{item.productInfo}</span>
                                            </td>
                                            {/* Type (Read-only) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                <span>{item.type || medicineInfo?.type || ''}</span>
                                            </td>
                                            {/* Pack Item (Read-only) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                <span>{item.packItem || medicineInfo?.packItem || ''}</span>
                                            </td>
                                            {/* Batch No (SearchableSelect for last row, text for others) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm relative z-20"> {/* Added relative z-20 here */}
                                                {isLastItem ? (
                                                    <SearchableSelect
                                                        label=""
                                                        value={item.batchNo || ''}
                                                        searchValue={searchTerms[`batchNo-${item.id}`] || ''}
                                                        setSearchValue={(val) => setSearchTerms(prev => ({ ...prev, [`batchNo-${item.id}`]: val }))}
                                                        showDropdown={activeDropdown === `batchNo-${item.id}`}
                                                        setShowDropdown={(open) => setActiveDropdown(open ? `batchNo-${item.id}` : null)}
                                                        items={
                                                            medicineBatches
                                                                .filter(batch =>
                                                                    batch.medicineId === item.medicineId &&
                                                                    batch.batchNo.toLowerCase().includes(searchTerms[`batchNo-${item.id}`]?.toLowerCase() || '') &&
                                                                    new Date(batch.expiryDate) >= new Date() // Filter out expired items
                                                                )
                                                                .sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()) // Sort by expiry
                                                                .map(b => ({
                                                                    id: b.batchNo,
                                                                    name: `${b.batchNo} (Stock: ${b.currentStock})`,
                                                                    isLowStock: b.currentStock === 0
                                                                }))
                                                        }
                                                        onSelect={(batchNo, name) => {
                                                            const selectedBatch = medicineBatches.find(
                                                                b => b.medicineId === item.medicineId && b.batchNo === batchNo
                                                            );

                                                            if (selectedBatch) {
                                                                updateItem(item.id, 'batchNo', selectedBatch.batchNo);
                                                                updateItem(item.id, 'expiryDate', selectedBatch.expiryDate);
                                                                updateItem(item.id, 'price', selectedBatch.salesRate); // Sales rate
                                                                updateItem(item.id, 'mrp', selectedBatch.mrp); // MRP from batch
                                                                updateItem(item.id, 'currentStockAtSelection', selectedBatch.currentStock); // Stock at selection
                                                            }

                                                            setSearchTerms(prev => ({ ...prev, [`batchNo-${item.id}`]: '' }));
                                                        }}
                                                        renderItem={(b) => (
                                                            <div className={`text-xs font-medium ${b.isLowStock ? 'text-red-600 font-bold' : 'text-gray-700'}`}>
                                                                {b.name}
                                                            </div>
                                                        )}
                                                        placeholder="Batch"
                                                        isDisabled={isCancelled || isFinalized || !item.medicineId}
                                                    />
                                                ) : (
                                                    <span>{item.batchNo}</span>
                                                )}
                                            </td>
                                            {/* Expiry Date (Input for last row, text for others) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                                {isLastItem ? (
                                                    <input
                                                        type="text"
                                                        value={item.expiryDate ? formatExpiry(item.expiryDate) : (searchTerms[`expiry-${item.id}`] || '')}
                                                        onChange={(e) => handleExpiryChange(e.target.value, item.id)}
                                                        placeholder="MM-YYYY"
                                                        maxLength={7}
                                                        className="w-full px-2 py-1 border border-blue-300 rounded text-xs text-center tracking-wider"
                                                        disabled={isCancelled || isFinalized || !item.batchNo}
                                                    />
                                                ) : (
                                                    <span>{item.expiryDate ? formatExpiry(item.expiryDate) : ''}</span>
                                                )}
                                            </td>
                                            {/* Qty (Input for last row, text for others) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                {isLastItem ? (
                                                    <input
                                                        type="number"
                                                        inputMode="numeric"
                                                        value={item.qty === 0 ? '' : item.qty}
                                                        onFocus={(e) => { if (e.target.value === '0') e.target.value = ''; }}
                                                        onBlur={(e) => {
                                                            const val = parseFloat(e.target.value);
                                                            updateItem(item.id, 'qty', isNaN(val) ? 0 : val);
                                                        }}
                                                        onChange={(e) => {
                                                            const val = e.target.value;
                                                            updateItem(item.id, 'qty', val === '' ? '' : parseFloat(val));
                                                        }}
                                                        className="w-full px-1 py-1 border border-blue-300 rounded text-xs"
                                                        disabled={isCancelled || isFinalized || !item.batchNo}
                                                    />
                                                ) : (
                                                    <span>{item.qty}</span>
                                                )}
                                            </td>
                                            {/* Free (Input for last row, text for others) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                {isLastItem ? (
                                                    <input
                                                        type="number"
                                                        value={item.free}
                                                        onChange={(e) => updateItem(item.id, 'free', e.target.value)}
                                                        min="0"
                                                        className="w-full px-1 py-1 border border-blue-300 rounded text-xs text-center"
                                                        disabled={isCancelled || isFinalized}
                                                    />
                                                ) : (
                                                    <span>{item.free}</span>
                                                )}
                                            </td>
                                            {/* Disc % (Input for last row, text for others) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                {isLastItem ? (
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        value={item.discPercent}
                                                        onChange={(e) => updateItem(item.id, 'discPercent', e.target.value)}
                                                        className="w-full px-1 py-1 border border-blue-300 rounded text-xs"
                                                        disabled={isCancelled || isFinalized}
                                                    />
                                                ) : (
                                                    <span>{item.discPercent.toFixed(2)}</span>
                                                )}
                                            </td>
                                            {/* P.Rate (Read-only for all rows) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                <span>{item.purchaseRate?.toFixed(2)}</span>
                                            </td>
                                            {/* S.Rate (Input for last row, text for others) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                {isLastItem ? (
                                                    <input
                                                        type="number"
                                                        step="0.01"
                                                        value={item.price.toFixed(2)}
                                                        onChange={(e) => updateItem(item.id, 'price', e.target.value)}
                                                        className="w-full px-1 py-1 border border-blue-300 rounded text-xs text-center"
                                                        disabled={isCancelled || isFinalized}
                                                    />
                                                ) : (
                                                    <span>{item.price.toFixed(2)}</span>
                                                )}
                                            </td>
                                            {/* MRP (Input for last row, text for others) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-xs sm:text-sm">
                                                {isLastItem ? (
                                                    <input
                                                        type="number"
                                                        value={item.mrp}
                                                        onChange={(e) => updateItem(item.id, 'mrp', e.target.value)}
                                                        className="w-full px-1 py-1 border border-blue-300 rounded text-xs"
                                                        disabled={isCancelled || isFinalized}
                                                    />
                                                ) : (
                                                    <span>{item.mrp.toFixed(2)}</span>
                                                )}
                                            </td>
                                            {/* GST% (Read-only) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                <span>{item.gst.toFixed(2)}</span>
                                            </td>
                                            {/* Amount (Read-only) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm font-bold text-green-700">
                                                <span>₹{item.amount.toFixed(2)}</span>
                                            </td>
                                            {/* HSN (Read-only) */}
                                            <td className="px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm">
                                                <span>{item.hsnCode}</span>
                                            </td>
                                            {/* Action (Add for last row, Delete for others) */}
                                            <td className="px-2 py-2 text-center text-xs sm:text-sm">
                                                {isLastItem ? (
                                                    <button
                                                        onClick={addItem}
                                                        className="p-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                                                        disabled={isCancelled || isFinalized}
                                                        title="Add item"
                                                    >
                                                        <Plus size={18} />
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeItem(item.id)}
                                                        disabled={isCancelled || isFinalized}
                                                        className={`text-red-600 hover:text-red-800 transition ${isCancelled || isFinalized ? 'opacity-40 cursor-not-allowed' : ''}`}
                                                        title={isCancelled ? 'Bill is cancelled' : isFinalized ? 'Finalized bill cannot be modified' : 'Delete item'}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                                {/* Display a message if no active items (only the blank input row exists) */}
                                {salesBill.items.length === 1 && salesBill.items[0].medicineId === 0 && (
                                    <tr>
                                        <td colSpan={16} className="py-4 text-center text-gray-500 text-base">
                                            Start by adding an item above.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Summary Calculations */}
            <div className="p-3 sm:p-4 lg:p-6 bg-white">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg shadow-md">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">Summary</h3>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Column 1: Tax Details */}
                        <div className="space-y-3">
                            <div className="border border-blue-300 rounded-lg overflow-hidden">
                                <div className="bg-blue-600 text-white p-2 text-center font-semibold text-sm">Tax Details</div>
                                <div className="divide-y divide-blue-200">
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">GST Total:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(salesBill.gstTotal || 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-blue-50">
                                        <span className="text-sm font-medium text-blue-900">CGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(salesBill.cgst || 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">SGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(salesBill.sgst || 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">IGST:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(salesBill.igst || 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-blue-50">
                                        <span className="text-sm font-medium text-blue-900">Cess Amount:</span>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={salesBill.cessAmount.toFixed(2)}
                                            onChange={(e) => setSalesBill(prev => ({ ...prev, cessAmount: Number(e.target.value) }))}
                                            className="w-24 px-2 py-1 text-sm border border-blue-300 rounded text-right font-bold"
                                            disabled={isCancelled || isFinalized}
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
                                            ₹{Number(salesBill.grossTotal || 0).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-blue-50">
                                        <span className="text-sm font-medium text-blue-900">Round Off:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(salesBill.roundOff || 0).toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white">
                                        <span className="text-sm font-medium text-blue-900">Total Discount:</span>
                                        <span className="text-sm font-bold text-blue-900">₹{Number(salesBill.discount || 0).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Final Total */}
                        <div className="lg:flex lg:items-center lg:justify-center">
                            <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg text-center shadow-lg w-full">
                                <div className="text-sm font-medium mb-1">Final Total</div>
                                <div className="text-2xl font-bold">₹{Number(salesBill.finalTotal || 0).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save + Cancel Buttons */}
            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex justify-center gap-4">
                    <button
                        onClick={saveSalesBill}
                        className="bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300"
                        disabled={isCancelled || isFinalized}
                    >
                        <Save size={20} /> Save Bill
                    </button>

                    <button
                        onClick={cancelSalesBill}
                        className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300"
                        disabled={isCancelled || isFinalized}
                    >
                        <Trash2 size={20} /> Cancel Bill
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SalesBillPage;