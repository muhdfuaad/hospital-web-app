(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'https://localhost:7071';
const SalesBillPOS = ()=>{
    _s();
    const [salesBill, setSalesBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        billNo: '',
        billDate: new Date().toISOString().split('T')[0],
        customerId: 0,
        customerName: 'CHANDAN, RMP S',
        customerAddress: '',
        customerLocation: '',
        customerPhone: '',
        customerGst: '',
        paymentType: 'Cash',
        dueDate: new Date().toISOString().split('T')[0],
        items: [],
        totalBilledQty: 0,
        subTotal: 0,
        tradeDiscount: 0,
        gstCessTotal: 0,
        cashDiscount: 0,
        tcsCharges: 0,
        addlCharges: 0,
        returnValue: 0,
        netTotal: 0,
        taxType: 'intra'
    });
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicines, setMedicines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredMedicines, setFilteredMedicines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editingItemIndex, setEditingItemIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showMedicineDropdown, setShowMedicineDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMedicineIndex, setSelectedMedicineIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const editId = searchParams.get('edit');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const medicineDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Generate Bill Number
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesBillPOS.useEffect": ()=>{
            const fetchBillNo = {
                "SalesBillPOS.useEffect.fetchBillNo": async ()=>{
                    try {
                        const res = await fetch(`${API_BASE}/api/SalesBills/bill-no`);
                        if (!res.ok) throw new Error('Failed to fetch Bill No');
                        const newBillNo = await res.json();
                        setSalesBill({
                            "SalesBillPOS.useEffect.fetchBillNo": (prev)=>({
                                    ...prev,
                                    billNo: newBillNo
                                })
                        }["SalesBillPOS.useEffect.fetchBillNo"]);
                    } catch (error) {
                        console.error('Error fetching Bill No:', error);
                    }
                }
            }["SalesBillPOS.useEffect.fetchBillNo"];
            if (!editId) {
                fetchBillNo();
            }
        }
    }["SalesBillPOS.useEffect"], [
        editId
    ]);
    // Fetch customers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesBillPOS.useEffect": ()=>{
            const fetchCustomers = {
                "SalesBillPOS.useEffect.fetchCustomers": async ()=>{
                    try {
                        const res = await fetch(`${API_BASE}/api/Customers`);
                        const data = await res.json();
                        setCustomers(data);
                    } catch (error) {
                        console.error('Error fetching customers:', error);
                    }
                }
            }["SalesBillPOS.useEffect.fetchCustomers"];
            fetchCustomers();
        }
    }["SalesBillPOS.useEffect"], []);
    // Fetch medicines
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesBillPOS.useEffect": ()=>{
            const fetchMedicines = {
                "SalesBillPOS.useEffect.fetchMedicines": async ()=>{
                    try {
                        const res = await fetch(`${API_BASE}/api/Medicines/with-stock`);
                        if (!res.ok) throw new Error('Failed to fetch medicines');
                        const medicineData = await res.json();
                        setMedicines(medicineData);
                        setFilteredMedicines(medicineData);
                    } catch (error) {
                        console.error('Error fetching medicines:', error);
                    }
                }
            }["SalesBillPOS.useEffect.fetchMedicines"];
            fetchMedicines();
        }
    }["SalesBillPOS.useEffect"], []);
    // Handle customer selection
    const handleCustomerSelect = (customerId)=>{
        const customer = customers.find((c)=>c.id === customerId);
        if (customer) {
            setSalesBill((prev)=>({
                    ...prev,
                    customerId: customer.id,
                    customerName: customer.name,
                    customerAddress: customer.address,
                    customerLocation: customer.location,
                    customerPhone: customer.phone,
                    customerGst: customer.gstNo || '',
                    taxType: isKeralaGST(customer.gstNo || '') ? 'intra' : 'inter'
                }));
        }
    };
    const isKeralaGST = (gstNo)=>gstNo?.slice(0, 2) === '32';
    // Handle medicine search
    const handleMedicineSearch = (value)=>{
        setSearchTerm(value);
        if (value.trim() === '') {
            setFilteredMedicines(medicines);
            setShowMedicineDropdown(false);
        } else {
            const filtered = medicines.filter((medicine)=>medicine.medicineName.toLowerCase().includes(value.toLowerCase()) || medicine.itemCode.toLowerCase().includes(value.toLowerCase()) || medicine.company?.toLowerCase().includes(value.toLowerCase()));
            setFilteredMedicines(filtered);
            setShowMedicineDropdown(true);
            setSelectedMedicineIndex(-1);
        }
    };
    // Handle keyboard navigation
    const handleKeyDown = (e)=>{
        if (!showMedicineDropdown) return;
        switch(e.key){
            case 'ArrowDown':
                e.preventDefault();
                setSelectedMedicineIndex((prev)=>prev < filteredMedicines.length - 1 ? prev + 1 : prev);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedMedicineIndex((prev)=>prev > 0 ? prev - 1 : prev);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedMedicineIndex >= 0) {
                    addMedicineToItems(filteredMedicines[selectedMedicineIndex]);
                }
                break;
            case 'Escape':
                setShowMedicineDropdown(false);
                setSelectedMedicineIndex(-1);
                break;
        }
    };
    // Add medicine to items
    const addMedicineToItems = (medicine)=>{
        const newItem = {
            id: null,
            itemCode: medicine.itemCode,
            productCode: medicine.itemCode,
            productInfo: medicine.medicineName,
            batchNo: medicine.batchNo || '',
            unitsMRP: medicine.mrp || medicine.salesRate,
            qty: 1,
            free: 0,
            price: medicine.salesRate,
            mrp: medicine.mrp || medicine.salesRate,
            discount: 0,
            exp: medicine.expiryDate || '',
            gst: medicine.gst,
            medicineId: medicine.id,
            medicineName: medicine.medicineName,
            type: medicine.type,
            packItem: medicine.packItem,
            hsnCode: medicine.hsnCode,
            baseAmount: medicine.salesRate,
            gstAmount: medicine.salesRate * medicine.gst / 100,
            cgstAmount: salesBill.taxType === 'intra' ? medicine.salesRate * medicine.gst / 200 : 0,
            sgstAmount: salesBill.taxType === 'intra' ? medicine.salesRate * medicine.gst / 200 : 0,
            igstAmount: salesBill.taxType === 'inter' ? medicine.salesRate * medicine.gst / 100 : 0,
            totalAmount: medicine.salesRate + medicine.salesRate * medicine.gst / 100,
            currentStock: medicine.currentStock || 0,
            company: medicine.company || '',
            discountAmount: 0,
            netRate: medicine.salesRate,
            value: medicine.salesRate + medicine.salesRate * medicine.gst / 100
        };
        setSalesBill((prev)=>({
                ...prev,
                items: [
                    ...prev.items,
                    newItem
                ]
            }));
        setSearchTerm('');
        setShowMedicineDropdown(false);
        setSelectedMedicineIndex(-1);
    };
    // Calculate item totals when item values change
    const calculateItemTotals = (item)=>{
        const baseAmount = item.price * item.qty;
        const discountAmount = baseAmount * item.discount / 100;
        const netAmount = baseAmount - discountAmount;
        const gstAmount = netAmount * item.gst / 100;
        const totalAmount = netAmount + gstAmount;
        return {
            ...item,
            baseAmount: +baseAmount.toFixed(2),
            discountAmount: +discountAmount.toFixed(2),
            gstAmount: +gstAmount.toFixed(2),
            cgstAmount: salesBill.taxType === 'intra' ? +(gstAmount / 2).toFixed(2) : 0,
            sgstAmount: salesBill.taxType === 'intra' ? +(gstAmount / 2).toFixed(2) : 0,
            igstAmount: salesBill.taxType === 'inter' ? +gstAmount.toFixed(2) : 0,
            totalAmount: +totalAmount.toFixed(2),
            netRate: +(netAmount / item.qty).toFixed(2),
            value: +totalAmount.toFixed(2)
        };
    };
    // Handle item field changes
    const handleItemChange = (index, field, value)=>{
        setSalesBill((prev)=>{
            const updatedItems = [
                ...prev.items
            ];
            const updatedItem = {
                ...updatedItems[index],
                [field]: value
            };
            updatedItems[index] = calculateItemTotals(updatedItem);
            return {
                ...prev,
                items: updatedItems
            };
        });
    };
    // Remove item
    const removeItem = (index)=>{
        setSalesBill((prev)=>({
                ...prev,
                items: prev.items.filter((_, i)=>i !== index)
            }));
    };
    // Calculate totals
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesBillPOS.useEffect": ()=>{
            const totalQty = salesBill.items.reduce({
                "SalesBillPOS.useEffect.totalQty": (sum, item)=>sum + item.qty
            }["SalesBillPOS.useEffect.totalQty"], 0);
            const subTotal = salesBill.items.reduce({
                "SalesBillPOS.useEffect.subTotal": (sum, item)=>sum + item.baseAmount
            }["SalesBillPOS.useEffect.subTotal"], 0);
            const gstTotal = salesBill.items.reduce({
                "SalesBillPOS.useEffect.gstTotal": (sum, item)=>sum + item.gstAmount
            }["SalesBillPOS.useEffect.gstTotal"], 0);
            const totalDiscountAmount = salesBill.items.reduce({
                "SalesBillPOS.useEffect.totalDiscountAmount": (sum, item)=>sum + item.discountAmount
            }["SalesBillPOS.useEffect.totalDiscountAmount"], 0);
            const netTotal = subTotal + gstTotal - salesBill.tradeDiscount - salesBill.cashDiscount + salesBill.tcsCharges + salesBill.addlCharges - salesBill.returnValue;
            setSalesBill({
                "SalesBillPOS.useEffect": (prev)=>({
                        ...prev,
                        totalBilledQty: totalQty,
                        subTotal: +subTotal.toFixed(2),
                        gstCessTotal: +gstTotal.toFixed(2),
                        netTotal: +netTotal.toFixed(2)
                    })
            }["SalesBillPOS.useEffect"]);
        }
    }["SalesBillPOS.useEffect"], [
        salesBill.items,
        salesBill.tradeDiscount,
        salesBill.cashDiscount,
        salesBill.tcsCharges,
        salesBill.addlCharges,
        salesBill.returnValue
    ]);
    // Save sales bill
    const saveSalesBill = async ()=>{
        try {
            if (salesBill.items.length === 0) {
                alert('Please add at least one item');
                return;
            }
            const { salesId, customerName, customerAddress, customerLocation, customerPhone, customerGst, ...billData } = salesBill;
            const paymentTypeMap = {
                Cash: 0,
                Credit: 1,
                Online: 2
            };
            const taxTypeMap = {
                intra: 0,
                inter: 1
            };
            const payload = {
                salesId,
                ...billData,
                paymentType: paymentTypeMap[billData.paymentType ?? 'Cash'] ?? 0,
                taxType: taxTypeMap[billData.taxType ?? 'intra'] ?? 0,
                items: billData.items.map((item)=>({
                        id: item.id,
                        medicineId: item.medicineId,
                        batchNo: item.batchNo,
                        qty: item.qty,
                        free: item.free,
                        price: item.price,
                        mrp: item.mrp,
                        discount: item.discount,
                        gst: item.gst,
                        hsnCode: item.hsnCode,
                        baseAmount: item.baseAmount,
                        gstAmount: item.gstAmount,
                        cgstAmount: item.cgstAmount,
                        sgstAmount: item.sgstAmount,
                        igstAmount: item.igstAmount,
                        discountAmount: item.discountAmount,
                        totalAmount: item.totalAmount
                    }))
            };
            let response;
            if (salesId) {
                response = await fetch(`${API_BASE}/api/SalesBills/${salesId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                alert("Sales bill updated successfully!");
                setSuccessMessage("✅ Sales bill updated!");
            } else {
                response = await fetch(`${API_BASE}/api/SalesBills`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                alert("Sales bill saved successfully!");
                setSuccessMessage("✅ Sales bill saved!");
            }
            if (!response.ok) throw new Error('Failed to save');
            const result = await response.json();
            setSalesBill((prev)=>({
                    ...prev,
                    salesId: result.salesId
                }));
            setTimeout(()=>setSuccessMessage(""), 5000);
            setTimeout(()=>router.push("/salesbill"), 600);
        } catch (error) {
            console.error("❌ Failed to save sales bill:", error);
            alert(`Failed to save: ${error.message}`);
        }
    };
    // Handle Enter key navigation between rows
    const handleCellKeyDown = (e, rowIndex, cellIndex)=>{
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextRowIndex = rowIndex + 1;
            if (nextRowIndex < salesBill.items.length) {
                const nextInput = itemRefs.current[nextRowIndex * 10 + cellIndex];
                nextInput?.focus();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-red-600 p-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-2xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-orange-500 to-red-600 text-white p-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold",
                                children: "SALES / POINT OF SALES [POS]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                lineNumber: 459,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Last Bill # GST G : Last # : Ret Bill #:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                lineNumber: 460,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                        lineNumber: 458,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                    lineNumber: 457,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-gray-50 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-12 gap-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Bill No #"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 470,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: salesBill.billNo,
                                            onChange: (e)=>setSalesBill((prev)=>({
                                                        ...prev,
                                                        billNo: e.target.value
                                                    })),
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 469,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Customer Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 481,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: salesBill.customerId,
                                            onChange: (e)=>handleCustomerSelect(Number(e.target.value)),
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 0,
                                                    children: "Select Customer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 33
                                                }, this),
                                                customers.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: customer.id,
                                                        children: customer.name
                                                    }, customer.id, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 37
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 482,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 480,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Due Bill # GST"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 498,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: salesBill.customerGst,
                                            onChange: (e)=>setSalesBill((prev)=>({
                                                        ...prev,
                                                        customerGst: e.target.value
                                                    })),
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Bill Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: salesBill.billDate,
                                            onChange: (e)=>setSalesBill((prev)=>({
                                                        ...prev,
                                                        billDate: e.target.value
                                                    })),
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 510,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Name to Print"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: salesBill.customerName,
                                            onChange: (e)=>setSalesBill((prev)=>({
                                                        ...prev,
                                                        customerName: e.target.value
                                                    })),
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 521,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Due Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 531,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: salesBill.dueDate,
                                            onChange: (e)=>setSalesBill((prev)=>({
                                                        ...prev,
                                                        dueDate: e.target.value
                                                    })),
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 532,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 530,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                            lineNumber: 468,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-12 gap-3 text-sm mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Medicine/Items"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: searchTerm,
                                                    onChange: (e)=>handleMedicineSearch(e.target.value),
                                                    onKeyDown: handleKeyDown,
                                                    placeholder: "Type medicine name...",
                                                    className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                                    style: {
                                                        fontSize: '11px',
                                                        height: '22px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute right-2 top-1 h-3 w-3 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 555,
                                                    columnNumber: 33
                                                }, this),
                                                showMedicineDropdown && filteredMedicines.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: medicineDropdownRef,
                                                    className: "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto",
                                                    children: filteredMedicines.map((medicine, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `px-3 py-2 cursor-pointer text-xs hover:bg-orange-50 ${index === selectedMedicineIndex ? 'bg-orange-100' : ''}`,
                                                            onClick: ()=>addMedicineToItems(medicine),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: medicine.medicineName
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                    lineNumber: 570,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-600",
                                                                    children: [
                                                                        medicine.itemCode,
                                                                        " | Stock: ",
                                                                        medicine.currentStock || 0,
                                                                        " | MRP: ₹",
                                                                        medicine.mrp || medicine.salesRate
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, medicine.id, true, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                            lineNumber: 563,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 558,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 543,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Retailer Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            },
                                            disabled: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 581,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Doctor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Select Doctor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                lineNumber: 595,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 593,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium mb-1",
                                            children: "Payment Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: salesBill.paymentType,
                                            onChange: (e)=>setSalesBill((prev)=>({
                                                        ...prev,
                                                        paymentType: e.target.value
                                                    })),
                                            className: "w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-400",
                                            style: {
                                                fontSize: '11px',
                                                height: '22px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cash",
                                                    children: "Cash"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Credit",
                                                    children: "Credit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Online",
                                                    children: "Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 601,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>addMedicineToItems(filteredMedicines[0]),
                                        disabled: filteredMedicines.length === 0,
                                        className: "bg-orange-500 text-white px-3 py-1 rounded text-xs hover:bg-orange-600 disabled:bg-gray-300 mt-4",
                                        style: {
                                            fontSize: '11px',
                                            height: '22px'
                                        },
                                        children: "Add Medicine"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                        lineNumber: 614,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 613,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                            lineNumber: 542,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                    lineNumber: 467,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-orange-500 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '40px'
                                            },
                                            children: "Sno"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '80px'
                                            },
                                            children: "Barcode"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 632,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '120px'
                                            },
                                            children: "Product Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 633,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '200px'
                                            },
                                            children: "Product Info"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 634,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '80px'
                                            },
                                            children: "Batch No"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '60px'
                                            },
                                            children: "Units/MRP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 636,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Qty"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 637,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Free"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 638,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '60px'
                                            },
                                            children: "Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 639,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '60px'
                                            },
                                            children: "MRP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 640,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Disc%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 641,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Disc#"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Exp"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "MRP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '60px'
                                            },
                                            children: "Net Rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 645,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "HSN"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Size"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 647,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Units"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 648,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Qty"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 649,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Free Price"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 650,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Batch No"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "Tax"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 652,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '60px'
                                            },
                                            children: "Tax Value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 653,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center border-r border-orange-400",
                                            style: {
                                                fontSize: '10px',
                                                width: '50px'
                                            },
                                            children: "EXP"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 654,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-1 py-2 text-center",
                                            style: {
                                                fontSize: '10px',
                                                width: '60px'
                                            },
                                            children: "Value"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 655,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 630,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                lineNumber: 629,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    salesBill.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-gray-200 hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 text-center border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            itemRefs.current[index * 10 + 0] = el;
                                                        },
                                                        type: "text",
                                                        className: "w-full border-0 outline-none bg-transparent text-center",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        onKeyDown: (e)=>handleCellKeyDown(e, index, 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 665,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            itemRefs.current[index * 10 + 1] = el;
                                                        },
                                                        type: "text",
                                                        value: item.productCode,
                                                        onChange: (e)=>handleItemChange(index, 'productCode', e.target.value),
                                                        className: "w-full border-0 outline-none bg-transparent",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        onKeyDown: (e)=>handleCellKeyDown(e, index, 1)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "truncate",
                                                        title: item.productInfo,
                                                        children: item.productInfo
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            itemRefs.current[index * 10 + 2] = el;
                                                        },
                                                        type: "text",
                                                        value: item.batchNo,
                                                        onChange: (e)=>handleItemChange(index, 'batchNo', e.target.value),
                                                        className: "w-full border-0 outline-none bg-transparent text-center",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        onKeyDown: (e)=>handleCellKeyDown(e, index, 2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 690,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            itemRefs.current[index * 10 + 3] = el;
                                                        },
                                                        type: "number",
                                                        value: item.unitsMRP,
                                                        onChange: (e)=>handleItemChange(index, 'unitsMRP', Number(e.target.value)),
                                                        className: "w-full border-0 outline-none bg-transparent text-right",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        step: "0.01",
                                                        onKeyDown: (e)=>handleCellKeyDown(e, index, 3)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            itemRefs.current[index * 10 + 4] = el;
                                                        },
                                                        type: "number",
                                                        value: item.qty,
                                                        onChange: (e)=>handleItemChange(index, 'qty', Number(e.target.value)),
                                                        className: "w-full border-0 outline-none bg-transparent text-center",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        onKeyDown: (e)=>handleCellKeyDown(e, index, 4)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            itemRefs.current[index * 10 + 5] = el;
                                                        },
                                                        type: "number",
                                                        value: item.free,
                                                        onChange: (e)=>handleItemChange(index, 'free', Number(e.target.value)),
                                                        className: "w-full border-0 outline-none bg-transparent text-center",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        onKeyDown: (e)=>handleCellKeyDown(e, index, 5)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            itemRefs.current[index * 10 + 6] = el;
                                                        },
                                                        type: "number",
                                                        value: item.price,
                                                        onChange: (e)=>handleItemChange(index, 'price', Number(e.target.value)),
                                                        className: "w-full border-0 outline-none bg-transparent text-right",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        step: "0.01",
                                                        onKeyDown: (e)=>handleCellKeyDown(e, index, 6)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 735,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            itemRefs.current[index * 10 + 7] = el;
                                                        },
                                                        type: "number",
                                                        value: item.mrp,
                                                        onChange: (e)=>handleItemChange(index, 'mrp', Number(e.target.value)),
                                                        className: "w-full border-0 outline-none bg-transparent text-right",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        step: "0.01",
                                                        onKeyDown: (e)=>handleCellKeyDown(e, index, 7)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 747,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 746,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: item.discount,
                                                        onChange: (e)=>handleItemChange(index, 'discount', Number(e.target.value)),
                                                        className: "w-full border-0 outline-none bg-transparent text-center",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        step: "0.01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.discountAmount.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.exp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.mrp.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-right",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.netRate.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 777,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.hsnCode
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.packItem
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 786,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.qty
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.free > 0 ? item.price.toFixed(2) : '0.00'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.batchNo
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 795,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: [
                                                        item.gst,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-right",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.gstAmount.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 border-r border-gray-200 text-center",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.exp
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 text-right",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: item.value.toFixed(2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeItem(index),
                                                        className: "text-red-500 hover:text-red-700",
                                                        title: "Delete Item",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                            lineNumber: 816,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 811,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 660,
                                            columnNumber: 33
                                        }, this)),
                                    Array.from({
                                        length: Math.max(0, 5 - salesBill.items.length)
                                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-gray-200",
                                            style: {
                                                height: '28px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-1 text-center border-r border-gray-200",
                                                    style: {
                                                        fontSize: '10px'
                                                    },
                                                    children: salesBill.items.length + index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 37
                                                }, this),
                                                Array.from({
                                                    length: 24
                                                }).map((_, cellIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-1 py-1 border-r border-gray-200",
                                                        style: {
                                                            fontSize: '10px'
                                                        },
                                                        children: cellIndex === 23 ? '' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "w-full border-0 outline-none bg-transparent",
                                                            style: {
                                                                fontSize: '10px'
                                                            },
                                                            disabled: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                            lineNumber: 830,
                                                            columnNumber: 70
                                                        }, this)
                                                    }, cellIndex, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 41
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, `empty-${index}`, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 824,
                                            columnNumber: 33
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                lineNumber: 658,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                        lineNumber: 628,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                    lineNumber: 627,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-50 p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-medium",
                                        children: [
                                            "Total Billed Qty: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-lg",
                                                children: salesBill.totalBilledQty
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                lineNumber: 849,
                                                columnNumber: 74
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                        lineNumber: 849,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 848,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-8 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-4 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Sub Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 856,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: salesBill.subTotal.toFixed(2)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-4 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Trade Discount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: salesBill.tradeDiscount,
                                                                onChange: (e)=>setSalesBill((prev)=>({
                                                                            ...prev,
                                                                            tradeDiscount: Number(e.target.value) || 0
                                                                        })),
                                                                className: "w-16 px-1 text-right border rounded text-xs",
                                                                step: "0.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 868,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-4 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "G.S.T & Cess Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 871,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium",
                                                                children: salesBill.gstCessTotal.toFixed(2)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 872,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 870,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                lineNumber: 854,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-4 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Cash Discount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 878,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: salesBill.cashDiscount,
                                                                onChange: (e)=>setSalesBill((prev)=>({
                                                                            ...prev,
                                                                            cashDiscount: Number(e.target.value) || 0
                                                                        })),
                                                                className: "w-16 px-1 text-right border rounded text-xs",
                                                                step: "0.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 879,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "%"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 886,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 877,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-4 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Charges:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 889,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: salesBill.tcsCharges,
                                                                onChange: (e)=>setSalesBill((prev)=>({
                                                                            ...prev,
                                                                            tcsCharges: Number(e.target.value) || 0
                                                                        })),
                                                                className: "w-16 px-1 text-right border rounded text-xs",
                                                                step: "0.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "TCS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 897,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between gap-4 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Return Value:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 900,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: salesBill.returnValue,
                                                                onChange: (e)=>setSalesBill((prev)=>({
                                                                            ...prev,
                                                                            returnValue: Number(e.target.value) || 0
                                                                        })),
                                                                className: "w-16 px-1 text-right border rounded text-xs",
                                                                step: "0.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 901,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Addl Chrgs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                                lineNumber: 908,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                        lineNumber: 899,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                lineNumber: 876,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg font-bold text-red-600 border-2 border-red-600 px-3 py-2 rounded",
                                                    children: [
                                                        "Net Total: ₹ ",
                                                        salesBill.netTotal.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 913,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                lineNumber: 912,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                        lineNumber: 853,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 852,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                            lineNumber: 847,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "In Words: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: [
                                                    numberToWords(salesBill.netTotal),
                                                    " Rupees Only"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                lineNumber: 923,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                        lineNumber: 923,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 922,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push('/salesbill'),
                                            className: "px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 flex items-center gap-2 text-sm",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 927,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: saveSalesBill,
                                            className: "px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 flex items-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 33
                                                }, this),
                                                "Save Bill"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 933,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>window.print(),
                                            className: "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center gap-2 text-sm",
                                            children: "Print"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                            lineNumber: 940,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                                    lineNumber: 926,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                            lineNumber: 921,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                    lineNumber: 846,
                    columnNumber: 17
                }, this),
                successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-4",
                    children: successMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                    lineNumber: 951,
                    columnNumber: 21
                }, this),
                errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4",
                    children: errorMessage
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
                    lineNumber: 957,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
            lineNumber: 455,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/SalesBill/AddSalesbill/page.tsx",
        lineNumber: 454,
        columnNumber: 9
    }, this);
};
_s(SalesBillPOS, "6mKyaOX1jR7wKv1HXRysxLIpMd0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SalesBillPOS;
// Helper function to convert numbers to words
const numberToWords = (num)=>{
    if (num === 0) return 'Zero';
    const ones = [
        '',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine'
    ];
    const teens = [
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen'
    ];
    const tens = [
        '',
        '',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety'
    ];
    const thousands = [
        '',
        'Thousand',
        'Lakh',
        'Crore'
    ];
    const convertHundreds = (n)=>{
        let result = '';
        if (n >= 100) {
            result += ones[Math.floor(n / 100)] + ' Hundred ';
            n %= 100;
        }
        if (n >= 20) {
            result += tens[Math.floor(n / 10)] + ' ';
            n %= 10;
        } else if (n >= 10) {
            result += teens[n - 10] + ' ';
            return result;
        }
        if (n > 0) {
            result += ones[n] + ' ';
        }
        return result;
    };
    const integerPart = Math.floor(num);
    const decimalPart = Math.round((num - integerPart) * 100);
    let result = '';
    let place = 0;
    let n = integerPart;
    if (n === 0) return 'Zero';
    while(n > 0){
        let chunk;
        if (place === 0) {
            chunk = n % 1000;
            n = Math.floor(n / 1000);
        } else {
            chunk = n % 100;
            n = Math.floor(n / 100);
        }
        if (chunk !== 0) {
            const chunkWords = convertHundreds(chunk);
            result = chunkWords + thousands[place] + ' ' + result;
        }
        place++;
    }
    if (decimalPart > 0) {
        result += 'and ' + convertHundreds(decimalPart) + 'Paise ';
    }
    return result.trim();
};
const __TURBOPACK__default__export__ = SalesBillPOS;
var _c;
__turbopack_context__.k.register(_c, "SalesBillPOS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_%28dashboard%29_SalesBill_AddSalesbill_page_tsx_128525c4._.js.map