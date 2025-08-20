(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/purchasebill/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const PurchaseBillPage = ()=>{
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [purchaseBill, setPurchaseBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        purchaseId: 5314,
        date: new Date().toISOString().split('T')[0],
        supplierId: 0,
        supplierName: '',
        supplierAddress: '',
        gstIn: '',
        invoiceNo: '',
        invoiceDate: new Date().toISOString().split('T')[0],
        paymentType: 'Credit',
        items: [],
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
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicines, setMedicines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicineSearches, setMedicineSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showMedicineDropdown, setShowMedicineDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch suppliers from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const fetchSuppliers = {
                "PurchaseBillPage.useEffect.fetchSuppliers": async ()=>{
                    try {
                        const res = await fetch('https://localhost:7112/api/Suppliers');
                        if (res.ok) {
                            const data = await res.json();
                            setSuppliers(data);
                        }
                    } catch (error) {
                        console.error('Error fetching suppliers:', error);
                    }
                }
            }["PurchaseBillPage.useEffect.fetchSuppliers"];
            fetchSuppliers();
        }
    }["PurchaseBillPage.useEffect"], []);
    // Fetch medicines from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const fetchMedicines = {
                "PurchaseBillPage.useEffect.fetchMedicines": async ()=>{
                    try {
                        const res = await fetch('https://localhost:7112/api/Medicines');
                        if (res.ok) {
                            const data = await res.json();
                            setMedicines(data);
                        }
                    } catch (error) {
                        console.error('Error fetching medicines:', error);
                    }
                }
            }["PurchaseBillPage.useEffect.fetchMedicines"];
            fetchMedicines();
        }
    }["PurchaseBillPage.useEffect"], []);
    // Fetch supplier details
    const fetchSupplierDetails = async ()=>{
        if (!purchaseBill.supplierId) return;
        setLoading(true);
        try {
            const selectedSupplier = suppliers.find((s)=>s.id === purchaseBill.supplierId);
            if (selectedSupplier) {
                setPurchaseBill((prev)=>({
                        ...prev,
                        supplierName: selectedSupplier.name,
                        supplierAddress: selectedSupplier.address,
                        gstIn: selectedSupplier.gstIn
                    }));
            }
        } catch (error) {
            console.error('Error fetching supplier details:', error);
        } finally{
            setLoading(false);
        }
    };
    // Add new item
    const addItem = ()=>{
        const newItem = {
            id: Date.now(),
            itemCode: '',
            medicineId: 0,
            medicineName: '',
            batchNo: '',
            expiryDate: '',
            qty: '',
            freeQty: '',
            purchaseRate: '',
            sellingRate: '',
            gstPercent: '',
            amount: 0,
            hsnCode: ''
        };
        setPurchaseBill((prev)=>({
                ...prev,
                items: [
                    ...prev.items,
                    newItem
                ]
            }));
    };
    // Remove item
    const removeItem = (itemId)=>{
        setPurchaseBill((prev)=>({
                ...prev,
                items: prev.items.filter((item)=>item.id !== itemId)
            }));
        // Clean up search states
        setMedicineSearches((prev)=>{
            const newState = {
                ...prev
            };
            delete newState[itemId];
            return newState;
        });
        setShowMedicineDropdown((prev)=>{
            const newState = {
                ...prev
            };
            delete newState[itemId];
            return newState;
        });
    };
    // Update item
    const updateItem = (itemId, field, value)=>{
        setPurchaseBill((prev)=>({
                ...prev,
                items: prev.items.map((item)=>{
                    if (item.id === itemId) {
                        const updatedItem = {
                            ...item,
                            [field]: value
                        };
                        // Calculate amount when qty, purchaseRate, or gstPercent changes
                        if (field === 'qty' || field === 'purchaseRate' || field === 'gstPercent') {
                            const qty = parseFloat(updatedItem.qty) || 0;
                            const purchaseRate = parseFloat(updatedItem.purchaseRate) || 0;
                            const gstPercent = parseFloat(updatedItem.gstPercent) || 0;
                            const baseAmount = qty * purchaseRate;
                            const gstAmount = baseAmount * gstPercent / 100;
                            updatedItem.amount = baseAmount + gstAmount;
                        }
                        return updatedItem;
                    }
                    return item;
                })
            }));
    };
    // Handle medicine search
    const handleMedicineSearch = (itemId, searchTerm)=>{
        setMedicineSearches((prev)=>({
                ...prev,
                [itemId]: searchTerm
            }));
        setShowMedicineDropdown((prev)=>({
                ...prev,
                [itemId]: true
            }));
    };
    // Select medicine
    const selectMedicine = (itemId, medicine)=>{
        updateItem(itemId, 'medicineId', medicine.id);
        updateItem(itemId, 'medicineName', medicine.name);
        updateItem(itemId, 'purchaseRate', medicine.purchaseRate.toString());
        updateItem(itemId, 'sellingRate', medicine.sellingRate.toString());
        updateItem(itemId, 'gstPercent', medicine.gstPercent.toString());
        updateItem(itemId, 'hsnCode', medicine.hsnCode);
        setMedicineSearches((prev)=>({
                ...prev,
                [itemId]: medicine.name
            }));
        setShowMedicineDropdown((prev)=>({
                ...prev,
                [itemId]: false
            }));
    };
    // Filter medicines based on search
    const getFilteredMedicines = (itemId)=>{
        const searchTerm = medicineSearches[itemId] || '';
        return medicines.filter((medicine)=>medicine.name.toLowerCase().includes(searchTerm.toLowerCase()));
    };
    // Calculate totals
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const grossTotal = purchaseBill.items.reduce({
                "PurchaseBillPage.useEffect.grossTotal": (sum, item)=>{
                    const qty = parseFloat(item.qty) || 0;
                    const rate = parseFloat(item.purchaseRate) || 0;
                    return sum + qty * rate;
                }
            }["PurchaseBillPage.useEffect.grossTotal"], 0);
            const gstTotal = purchaseBill.items.reduce({
                "PurchaseBillPage.useEffect.gstTotal": (sum, item)=>{
                    const qty = parseFloat(item.qty) || 0;
                    const rate = parseFloat(item.purchaseRate) || 0;
                    const gstPercent = parseFloat(item.gstPercent) || 0;
                    return sum + qty * rate * gstPercent / 100;
                }
            }["PurchaseBillPage.useEffect.gstTotal"], 0);
            const cgst = gstTotal / 2;
            const sgst = gstTotal / 2;
            const igst = 0; // For inter-state transactions
            const subtotal = grossTotal + gstTotal - purchaseBill.discount + purchaseBill.cessAmount;
            const roundOff = Math.round(subtotal) - subtotal;
            const finalTotal = subtotal + roundOff;
            setPurchaseBill({
                "PurchaseBillPage.useEffect": (prev)=>({
                        ...prev,
                        grossTotal,
                        gstTotal,
                        cgst,
                        sgst,
                        igst,
                        roundOff,
                        finalTotal
                    })
            }["PurchaseBillPage.useEffect"]);
        }
    }["PurchaseBillPage.useEffect"], [
        purchaseBill.items,
        purchaseBill.discount,
        purchaseBill.cessAmount
    ]);
    // Save purchase bill
    const savePurchaseBill = async ()=>{
        try {
            const purchaseData = {
                ...purchaseBill,
                items: purchaseBill.items
            };
            const response = await fetch('https://localhost:7112/api/PurchaseBills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(purchaseData)
            });
            if (response.ok) {
                alert('Purchase bill saved successfully!');
            } else {
                alert('Error saving purchase bill');
            }
        } catch (err) {
            console.error('Failed to save purchase bill:', err);
            alert('Error saving purchase bill');
        }
    };
    // Delete purchase bill
    const deletePurchaseBill = ()=>{
        if (window.confirm('Are you sure you want to delete this purchase bill?')) {
            setPurchaseBill({
                purchaseId: purchaseBill.purchaseId + 1,
                date: new Date().toISOString().split('T')[0],
                supplierId: 0,
                supplierName: '',
                supplierAddress: '',
                gstIn: '',
                invoiceNo: '',
                invoiceDate: new Date().toISOString().split('T')[0],
                paymentType: 'Credit',
                items: [],
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
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-lg mb-6 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-600 text-white px-4 py-3 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-xl font-bold",
                                                children: "Purchase Invoice"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: savePurchaseBill,
                                                className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm",
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                lineNumber: 346,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: deletePurchaseBill,
                                                className: "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                lineNumber: 352,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                lineNumber: 340,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-gray-50 border-b",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                                    children: "Pur ID"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 368,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: purchaseBill.purchaseId,
                                                                    readOnly: true,
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 369,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                                    children: "Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: purchaseBill.date,
                                                                    onChange: (e)=>setPurchaseBill((prev)=>({
                                                                                ...prev,
                                                                                date: e.target.value
                                                                            })),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Supplier ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: purchaseBill.supplierId,
                                                                    onChange: (e)=>setPurchaseBill((prev)=>({
                                                                                ...prev,
                                                                                supplierId: Number(e.target.value)
                                                                            })),
                                                                    className: "flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 0,
                                                                            children: "Select Supplier"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                            lineNumber: 395,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        suppliers.map((supplier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: supplier.id,
                                                                                children: [
                                                                                    supplier.id,
                                                                                    " - ",
                                                                                    supplier.name
                                                                                ]
                                                                            }, supplier.id, true, {
                                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                                lineNumber: 397,
                                                                                columnNumber: 53
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 390,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: fetchSupplierDetails,
                                                                    disabled: !purchaseBill.supplierId || loading,
                                                                    className: "bg-slate-600 hover:bg-slate-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-r-md text-sm",
                                                                    children: "GET"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: purchaseBill.supplierName,
                                                            readOnly: true,
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            value: purchaseBill.supplierAddress,
                                                            readOnly: true,
                                                            rows: 3,
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 resize-none text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                                    children: "Inv No"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: purchaseBill.invoiceNo,
                                                                    onChange: (e)=>setPurchaseBill((prev)=>({
                                                                                ...prev,
                                                                                invoiceNo: e.target.value
                                                                            })),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 438,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                                    children: "Inv Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    value: purchaseBill.invoiceDate,
                                                                    onChange: (e)=>setPurchaseBill((prev)=>({
                                                                                ...prev,
                                                                                invoiceDate: e.target.value
                                                                            })),
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 447,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "GST IN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 457,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: purchaseBill.gstIn,
                                                            readOnly: true,
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                                            children: "Payment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: purchaseBill.paymentType,
                                                            onChange: (e)=>setPurchaseBill((prev)=>({
                                                                        ...prev,
                                                                        paymentType: e.target.value
                                                                    })),
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Credit",
                                                                    children: "Credit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 473,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Cash",
                                                                    children: "Cash"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 474,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Other",
                                                                    children: "Other"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 475,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addItem,
                                                        className: "bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Add Item"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                lineNumber: 362,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-cyan-500 text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-left text-xs font-medium border-r border-cyan-600",
                                                        children: "Item Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 497,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-left text-xs font-medium border-r border-cyan-600",
                                                        children: "Medicine Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-left text-xs font-medium border-r border-cyan-600",
                                                        children: "Batch"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-left text-xs font-medium border-r border-cyan-600",
                                                        children: "Expiry"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-center text-xs font-medium border-r border-cyan-600",
                                                        children: "Qty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-center text-xs font-medium border-r border-cyan-600",
                                                        children: "Free"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-center text-xs font-medium border-r border-cyan-600",
                                                        children: "P.Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-center text-xs font-medium border-r border-cyan-600",
                                                        children: "S.Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-center text-xs font-medium border-r border-cyan-600",
                                                        children: "GST"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-center text-xs font-medium border-r border-cyan-600",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-center text-xs font-medium border-r border-cyan-600",
                                                        children: "HSN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-2 py-3 text-center text-xs font-medium",
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "bg-white",
                                            children: purchaseBill.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-gray-50 border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.itemCode,
                                                                onChange: (e)=>updateItem(item.id, 'itemCode', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200 relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: medicineSearches[item.id] || item.medicineName,
                                                                    onChange: (e)=>handleMedicineSearch(item.id, e.target.value),
                                                                    onFocus: ()=>setShowMedicineDropdown((prev)=>({
                                                                                ...prev,
                                                                                [item.id]: true
                                                                            })),
                                                                    className: "w-full px-2 py-1 text-xs border border-gray-300 rounded",
                                                                    placeholder: "Search medicine..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 523,
                                                                    columnNumber: 49
                                                                }, this),
                                                                showMedicineDropdown[item.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg max-h-32 overflow-y-auto",
                                                                    children: getFilteredMedicines(item.id).map((medicine)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            onClick: ()=>selectMedicine(item.id, medicine),
                                                                            className: "px-2 py-1 text-xs hover:bg-gray-100 cursor-pointer",
                                                                            children: medicine.name
                                                                        }, medicine.id, false, {
                                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                            lineNumber: 534,
                                                                            columnNumber: 61
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.batchNo,
                                                                onChange: (e)=>updateItem(item.id, 'batchNo', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: item.expiryDate,
                                                                onChange: (e)=>updateItem(item.id, 'expiryDate', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.qty,
                                                                onChange: (e)=>updateItem(item.id, 'qty', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded text-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 562,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.freeQty,
                                                                onChange: (e)=>updateItem(item.id, 'freeQty', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded text-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 570,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.purchaseRate,
                                                                onChange: (e)=>updateItem(item.id, 'purchaseRate', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded text-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.sellingRate,
                                                                onChange: (e)=>updateItem(item.id, 'sellingRate', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded text-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 586,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.gstPercent,
                                                                onChange: (e)=>updateItem(item.id, 'gstPercent', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded text-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 594,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 593,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200 text-center text-xs font-medium",
                                                            children: item.amount.toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: item.hsnCode,
                                                                onChange: (e)=>updateItem(item.id, 'hsnCode', e.target.value),
                                                                className: "w-full px-2 py-1 text-xs border border-gray-300 rounded text-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 605,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 604,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>removeItem(item.id),
                                                                className: "text-red-600 hover:text-red-800 hover:bg-red-50 p-1 rounded",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 617,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                lineNumber: 613,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                lineNumber: 493,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-600 text-white p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium mb-1",
                                                                    children: "Gross Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 633,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 bg-white text-black rounded text-right text-sm",
                                                                    children: purchaseBill.grossTotal.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 634,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium mb-1",
                                                                    children: "CGST"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 639,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 bg-white text-black rounded text-right text-sm",
                                                                    children: purchaseBill.cgst.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 640,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium mb-1",
                                                                    children: "SGST"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 646,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 bg-white text-black rounded text-right text-sm",
                                                                    children: purchaseBill.sgst.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 647,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium mb-1",
                                                                    children: "IGST"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 652,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 bg-white text-black rounded text-right text-sm",
                                                                    children: purchaseBill.igst.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 653,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium mb-1",
                                                                    children: "GST Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 660,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 bg-white text-black rounded text-right text-sm",
                                                                    children: purchaseBill.gstTotal.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium mb-1",
                                                                    children: "Round Off"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 bg-white text-black rounded text-right text-sm",
                                                                    children: purchaseBill.roundOff.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                                    lineNumber: 667,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                            lineNumber: 630,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-medium mb-1",
                                                            children: "Discount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 677,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: purchaseBill.discount,
                                                            onChange: (e)=>setPurchaseBill((prev)=>({
                                                                        ...prev,
                                                                        discount: parseFloat(e.target.value) || 0
                                                                    })),
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-right text-sm",
                                                            step: "0.01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 678,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-medium mb-1",
                                                            children: "Cess Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: purchaseBill.cessAmount,
                                                            onChange: (e)=>setPurchaseBill((prev)=>({
                                                                        ...prev,
                                                                        cessAmount: parseFloat(e.target.value) || 0
                                                                    })),
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded text-right text-sm",
                                                            step: "0.01"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                            lineNumber: 675,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-lg font-bold mb-2",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-bold text-red-400",
                                                        children: [
                                                            "₹",
                                                            purchaseBill.finalTotal.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/purchasebill/page.tsx",
                                                        lineNumber: 702,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                                lineNumber: 700,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/purchasebill/page.tsx",
                                            lineNumber: 699,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/purchasebill/page.tsx",
                                    lineNumber: 628,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/purchasebill/page.tsx",
                                lineNumber: 627,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/purchasebill/page.tsx",
                        lineNumber: 338,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/purchasebill/page.tsx",
                    lineNumber: 337,
                    columnNumber: 16
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/purchasebill/page.tsx",
                lineNumber: 335,
                columnNumber: 14
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/purchasebill/page.tsx",
                lineNumber: 715,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/purchasebill/page.tsx",
        lineNumber: 331,
        columnNumber: 10
    }, this);
};
_s(PurchaseBillPage, "5E0kq+vd6aGnY5K2ScXX3kMptnA=");
_c = PurchaseBillPage;
const __TURBOPACK__default__export__ = PurchaseBillPage;
var _c;
__turbopack_context__.k.register(_c, "PurchaseBillPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_purchasebill_page_tsx_49760872._.js.map