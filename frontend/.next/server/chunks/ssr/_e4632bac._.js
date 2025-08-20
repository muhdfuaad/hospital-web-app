module.exports = {

"[project]/src/app/(dashboard)/purchasebill/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
'use client';
;
;
;
const PurchaseBillPage = ()=>{
    const [purchaseBill, setPurchaseBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicines, setMedicines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicineSearches, setMedicineSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showMedicineDropdown, setShowMedicineDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch suppliers from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchSuppliers = async ()=>{
            try {
                const res = await fetch('https://localhost:7112/api/Suppliers');
                const data = await res.json();
                setSuppliers(data);
            } catch (error) {
                console.error('Error fetching suppliers:', error);
                // Fallback mock data
                setSuppliers([
                    {
                        id: 13,
                        name: 'PHARMACEUTICAL DISTRIBUTORS',
                        address: '19/1132, P.V.SAMI ROAD',
                        gstIn: '123456789012345'
                    },
                    {
                        id: 14,
                        name: 'MEDICAL SUPPLIES LTD',
                        address: '45/678, MAIN STREET',
                        gstIn: '567890123456789'
                    }
                ]);
            }
        };
        fetchSuppliers();
    }, []);
    // Fetch medicines from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchMedicines = async ()=>{
            try {
                const res = await fetch('https://localhost:7112/api/Medicines');
                const data = await res.json();
                setMedicines(data);
            } catch (error) {
                console.error('Error fetching medicines:', error);
                // Fallback mock data
                setMedicines([
                    {
                        id: 1,
                        name: 'Paracetamol 500mg',
                        purchaseRate: 2.50,
                        sellingRate: 3.00,
                        gstPercent: 12,
                        hsnCode: '30049099'
                    },
                    {
                        id: 2,
                        name: 'Amoxicillin 250mg',
                        purchaseRate: 5.00,
                        sellingRate: 6.50,
                        gstPercent: 12,
                        hsnCode: '30041000'
                    },
                    {
                        id: 3,
                        name: 'Ibuprofen 400mg',
                        purchaseRate: 3.25,
                        sellingRate: 4.00,
                        gstPercent: 12,
                        hsnCode: '30049099'
                    }
                ]);
            }
        };
        fetchMedicines();
    }, []);
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
            qty: 0,
            freeQty: 0,
            purchaseRate: 0,
            sellingRate: 0,
            gstPercent: 0,
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
                            const baseAmount = updatedItem.qty * updatedItem.purchaseRate;
                            const gstAmount = baseAmount * updatedItem.gstPercent / 100;
                            updatedItem.amount = baseAmount + gstAmount;
                        }
                        return updatedItem;
                    }
                    return item;
                })
            }));
    };
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
    const getFilteredMedicines = (itemId)=>{
        const searchTerm = medicineSearches[itemId] || '';
        return medicines.filter((medicine)=>medicine && typeof medicine.name === 'string' && medicine.name.toLowerCase().includes(searchTerm.toLowerCase()));
    };
    // Select medicine
    const selectMedicine = (itemId, medicine)=>{
        updateItem(itemId, 'medicineId', medicine.id);
        updateItem(itemId, 'medicineName', medicine.name);
        updateItem(itemId, 'purchaseRate', medicine.purchaseRate);
        updateItem(itemId, 'sellingRate', medicine.sellingRate);
        updateItem(itemId, 'gstPercent', medicine.gstPercent);
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
    // Calculate totals
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const grossTotal = purchaseBill.items.reduce((sum, item)=>sum + item.qty * item.purchaseRate, 0);
        const gstTotal = purchaseBill.items.reduce((sum, item)=>sum + item.qty * item.purchaseRate * item.gstPercent / 100, 0);
        const cgst = gstTotal / 2;
        const sgst = gstTotal / 2;
        const roundOff = Math.round((grossTotal + gstTotal - purchaseBill.discount) * 100) / 100 - (grossTotal + gstTotal - purchaseBill.discount);
        const finalTotal = grossTotal + gstTotal - purchaseBill.discount + roundOff + purchaseBill.cessAmount;
        setPurchaseBill((prev)=>({
                ...prev,
                grossTotal,
                gstTotal,
                cgst,
                sgst,
                roundOff,
                finalTotal
            }));
    }, [
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
            console.log('Saving purchase bill:', JSON.stringify(purchaseData, null, 2));
            alert('Purchase bill saved successfully!');
        } catch (err) {
            console.error('Failed to save purchase bill:', err);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-green-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-5xl h-[90vh] flex flex-col border-2 border-gray-400 bg-white shadow-lg rounded",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "bg-teal-600 text-white p-2 flex justify-between items-center shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-lg font-semibold",
                            children: "Purchase Bill"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                            lineNumber: 310,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: savePurchaseBill,
                                    className: "bg-green-600 hover:bg-green-700 px-3 py-1 rounded",
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: deletePurchaseBill,
                                    className: "bg-red-600 hover:bg-red-700 px-3 py-1 rounded",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                    lineNumber: 313,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                            lineNumber: 311,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                    lineNumber: 309,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 overflow-auto px-4 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-gray-300 p-4 rounded mb-4 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-6 gap-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "Pur ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: purchaseBill.purchaseId,
                                                readOnly: true,
                                                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: purchaseBill.date,
                                                onChange: (e)=>setPurchaseBill((prev)=>({
                                                            ...prev,
                                                            date: e.target.value
                                                        })),
                                                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-teal-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "Supplier ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: purchaseBill.supplierId,
                                                        onChange: (e)=>setPurchaseBill((prev)=>({
                                                                    ...prev,
                                                                    supplierId: Number(e.target.value)
                                                                })),
                                                        className: "flex-1 px-2 py-1 text-sm border border-gray-300 rounded-l focus:ring-1 focus:ring-teal-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 0,
                                                                children: "Select"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 41
                                                            }, this),
                                                            suppliers.map((supplier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: supplier.id,
                                                                    children: supplier.id
                                                                }, supplier.id, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                                    lineNumber: 351,
                                                                    columnNumber: 45
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: fetchSupplierDetails,
                                                        disabled: !purchaseBill.supplierId || loading,
                                                        className: "bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white px-2 py-1 text-sm rounded-r",
                                                        children: "GET"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 343,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "Inv No"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 366,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: purchaseBill.invoiceNo,
                                                onChange: (e)=>setPurchaseBill((prev)=>({
                                                            ...prev,
                                                            invoiceNo: e.target.value
                                                        })),
                                                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-teal-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "Inv Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 375,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: purchaseBill.invoiceDate,
                                                onChange: (e)=>setPurchaseBill((prev)=>({
                                                            ...prev,
                                                            invoiceDate: e.target.value
                                                        })),
                                                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-teal-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 374,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: purchaseBill.paymentType,
                                                onChange: (e)=>setPurchaseBill((prev)=>({
                                                            ...prev,
                                                            paymentType: e.target.value
                                                        })),
                                                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-teal-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Credit",
                                                        children: "Credit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cash",
                                                        children: "Cash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 383,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: purchaseBill.supplierName,
                                                readOnly: true,
                                                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 397,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: purchaseBill.supplierAddress,
                                                readOnly: true,
                                                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 408,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 406,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-medium text-gray-700 mb-1",
                                                children: "GST IN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: purchaseBill.gstIn,
                                                readOnly: true,
                                                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 321,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                            lineNumber: 320,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addItem,
                                className: "bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 text-sm rounded flex items-center space-x-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Item"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 429,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                            lineNumber: 428,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white border border-gray-300 rounded shadow-sm overflow-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-teal-600 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-left",
                                                    children: "Item Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-left",
                                                    children: "Medicine Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-left",
                                                    children: "Batch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-left",
                                                    children: "Expiry"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-center",
                                                    children: "Qty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-center",
                                                    children: "Free"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-center",
                                                    children: "P.Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-center",
                                                    children: "S.Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-center",
                                                    children: "GST"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-center",
                                                    children: "Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-center",
                                                    children: "HSN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-2 py-1 text-center",
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                            lineNumber: 442,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: purchaseBill.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.itemCode,
                                                            onChange: (e)=>updateItem(item.id, 'itemCode', e.target.value),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1 relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: medicineSearches[item.id] || item.medicineName,
                                                                onChange: (e)=>handleMedicineSearch(item.id, e.target.value),
                                                                onFocus: ()=>setShowMedicineDropdown((prev)=>({
                                                                            ...prev,
                                                                            [item.id]: true
                                                                        })),
                                                                className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded",
                                                                placeholder: "Search medicine..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                                lineNumber: 469,
                                                                columnNumber: 45
                                                            }, this),
                                                            showMedicineDropdown[item.id] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute z-10 w-full bg-white border border-gray-300 rounded shadow-lg max-h-32 overflow-y-auto",
                                                                children: getFilteredMedicines(item.id).map((medicine)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        onClick: ()=>selectMedicine(item.id, medicine),
                                                                        className: "px-2 py-1 text-xs hover:bg-teal-50 cursor-pointer",
                                                                        children: medicine.name
                                                                    }, medicine.id, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 57
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.batchNo,
                                                            onChange: (e)=>updateItem(item.id, 'batchNo', e.target.value),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: item.expiryDate,
                                                            onChange: (e)=>updateItem(item.id, 'expiryDate', e.target.value),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: item.qty,
                                                            onChange: (e)=>updateItem(item.id, 'qty', Number(e.target.value)),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: item.freeQty,
                                                            onChange: (e)=>updateItem(item.id, 'freeQty', Number(e.target.value)),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            value: item.purchaseRate,
                                                            onChange: (e)=>updateItem(item.id, 'purchaseRate', Number(e.target.value)),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            value: item.sellingRate,
                                                            onChange: (e)=>updateItem(item.id, 'sellingRate', Number(e.target.value)),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            value: item.gstPercent,
                                                            onChange: (e)=>updateItem(item.id, 'gstPercent', Number(e.target.value)),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1 text-center font-medium",
                                                        children: item.amount.toFixed(2)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.hsnCode,
                                                            onChange: (e)=>updateItem(item.id, 'hsnCode', e.target.value),
                                                            className: "w-full px-1 py-1 text-xs border-none focus:ring-1 focus:ring-teal-500 rounded text-center"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-1 py-1 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeItem(item.id),
                                                            className: "text-red-600 hover:text-red-800",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 457,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 440,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                            lineNumber: 439,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                    lineNumber: 319,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "sticky bottom-0 bg-white border-t border-gray-300 p-4 shadow-inner z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-8 gap-2 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                        children: "Gross Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 581,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-2 py-1 bg-gray-100 border border-gray-300 rounded text-right",
                                        children: purchaseBill.grossTotal.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 582,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 580,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                        children: "GST"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 587,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-2 py-1 bg-gray-100 border border-gray-300 rounded text-right",
                                        children: purchaseBill.gstTotal.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 588,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 586,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                        children: "Round Off"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 593,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-2 py-1 bg-gray-100 border border-gray-300 rounded text-right",
                                        children: purchaseBill.roundOff.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 592,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                        children: "Discount"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 599,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        step: "0.01",
                                        value: purchaseBill.discount,
                                        onChange: (e)=>setPurchaseBill((prev)=>({
                                                    ...prev,
                                                    discount: Number(e.target.value)
                                                })),
                                        className: "w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-teal-500 text-right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 600,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 598,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                        children: "CGST"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 609,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-2 py-1 bg-gray-100 border border-gray-300 rounded text-right",
                                        children: purchaseBill.cgst.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 608,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                        children: "SGST"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 615,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-2 py-1 bg-gray-100 border border-gray-300 rounded text-right",
                                        children: purchaseBill.sgst.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 616,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 614,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                        children: "Cess Amt"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 621,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        step: "0.01",
                                        value: purchaseBill.cessAmount,
                                        onChange: (e)=>setPurchaseBill((prev)=>({
                                                    ...prev,
                                                    cessAmount: Number(e.target.value)
                                                })),
                                        className: "w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-teal-500 text-right"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 620,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 631,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-2 py-1 bg-red-100 border border-red-300 rounded text-right font-bold text-red-600",
                                        children: purchaseBill.finalTotal.toFixed(2)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                                lineNumber: 630,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                        lineNumber: 579,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
                    lineNumber: 578,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
            lineNumber: 308,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/purchasebill/page.tsx",
        lineNumber: 307,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = PurchaseBillPage;
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Trash2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Trash2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Plus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
];
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("plus", __iconNode);
;
 //# sourceMappingURL=plus.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Plus": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_e4632bac._.js.map