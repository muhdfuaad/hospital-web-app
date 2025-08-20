module.exports = {

"[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
'use client';
;
;
;
const API_BASE = 'https://localhost:7112';
const SearchableSelect = ({ label, value, searchValue, setSearchValue, showDropdown, setShowDropdown, items, onSelect, renderItem, placeholder, isDisabled, inputRef })=>{
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        setShowDropdown
    ]);
    const displayValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const selectedItem = items.find((item)=>item.id === value);
        return selectedItem ? selectedItem.name : searchValue;
    }, [
        items,
        value,
        searchValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: dropdownRef,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-semibold text-blue-900 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 66,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border border-blue-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        value: displayValue,
                        onChange: (e)=>{
                            setSearchValue(e.target.value);
                            if (!showDropdown) setShowDropdown(true);
                        },
                        onFocus: ()=>setShowDropdown(true),
                        placeholder: placeholder,
                        className: "flex-grow px-2 py-1.5 text-sm rounded-l-md focus:outline-none bg-transparent",
                        disabled: isDisabled
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setShowDropdown(!showDropdown),
                        className: "px-2 py-1.5 bg-blue-100 rounded-r-md text-blue-700 hover:bg-blue-200 focus:outline-none",
                        disabled: isDisabled,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-50 w-full bg-white border border-blue-300 rounded-md shadow-lg max-h-60 overflow-y-auto mt-1",
                children: [
                    " ",
                    items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 text-sm text-gray-500",
                        children: "No results found."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                        lineNumber: 92,
                        columnNumber: 44
                    }, this),
                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 cursor-pointer hover:bg-blue-100",
                            onClick: ()=>{
                                onSelect(item.id, item.name); // Pass both id and name for flexibility
                                setShowDropdown(false);
                                setSearchValue(''); // Clear search after selection
                            },
                            children: renderItem(item)
                        }, item.id, false, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 91,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
};
const CustomModal = ({ message, onClose, onConfirm, type })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg shadow-xl max-w-sm w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-800 text-lg mb-4 text-center",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                    lineNumber: 126,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center space-x-4",
                    children: [
                        type === 'confirm' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                            children: "Confirm"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50",
                            children: type === 'alert' ? 'OK' : 'Cancel'
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                    lineNumber: 127,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
            lineNumber: 125,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
};
const SalesBillPage = ()=>{
    // State for the Sales Bill
    const [salesBill, setSalesBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
                id: Date.now(),
                itemCode: '',
                productInfo: '',
                medicineId: 0,
                packItem: 0,
                batchNo: '',
                expiryDate: '',
                qty: 0,
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
                type: ''
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
        taxType: 'intra'
    });
    // Master data states
    const [medicines, setMedicines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [salesMen, setSalesMen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicineBatches, setMedicineBatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // UI states for SearchableSelect and general messages
    const [searchTerms, setSearchTerms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // To control which dropdown is open
    const [modalMessage, setModalMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [modalType, setModalType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('alert');
    const [modalCallback, setModalCallback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const closeModal = ()=>{
        setModalMessage('');
        setModalCallback(null);
    };
    const showAlert = (message)=>{
        setModalMessage(message);
        setModalType('alert');
    };
    const showConfirm = (message, callback)=>{
        setModalMessage(message);
        setModalType('confirm');
        setModalCallback(()=>callback);
    };
    const editId = new URLSearchParams(window.location.search).get('edit');
    const isCancelled = salesBill.isCancelled === true;
    const isFinalized = salesBill.finalTotal > 0 && !salesBill.isCancelled;
    // Refs for input focus management
    const inputRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // Fetch Bill No. on initial load if not in edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchBillNo = async ()=>{
            try {
                const res = await fetch(`${API_BASE}/api/SalesBills/bill-no`);
                if (!res.ok) throw new Error('Failed to fetch Bill No');
                const newId = await res.json();
                setSalesBill((prev)=>({
                        ...prev,
                        billNo: newId
                    }));
            } catch (error) {
                console.error('Error fetching Bill No:', error);
                showAlert('Error fetching Bill No.');
            }
        };
        if (!editId) {
            fetchBillNo();
        }
    }, [
        editId
    ]);
    // Fetch master data (Medicines, Doctors, SalesMen)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchMasterData = async ()=>{
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
                const salesMenRes = await fetch(`${API_BASE}/api/SalesMen`);
                if (!salesMenRes.ok) throw new Error('Failed to fetch sales men');
                setSalesMen(await salesMenRes.json());
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
    const getFilteredItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data, searchTerm, keyField, nameField)=>{
        if (!searchTerm) return data;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return data.filter((item)=>item[keyField]?.toString().toLowerCase().includes(lowerCaseSearchTerm) || item[nameField]?.toLowerCase().includes(lowerCaseSearchTerm));
    }, []);
    // Add new item row to the sales bill
    const addItem = ()=>{
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
        const newItem = {
            id: Date.now(),
            itemCode: '',
            productInfo: '',
            medicineId: 0,
            packItem: 0,
            batchNo: '',
            expiryDate: '',
            qty: 0,
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
            type: ''
        };
        setSalesBill((prev)=>({
                ...prev,
                items: [
                    ...prev.items,
                    newItem
                ] // Add the new empty item at the end
            }));
        // Focus on the new item's itemCode input
        setTimeout(()=>{
            const newItemId = newItem.id;
            const refKey = `itemCode-${newItemId}`;
            inputRefs.current[refKey]?.focus();
        }, 100);
    };
    // Remove item from the sales bill
    const removeItem = (itemId)=>{
        if (isCancelled || isFinalized) {
            showAlert("This bill is finalized or cancelled. Items cannot be deleted.");
            return;
        }
        setSalesBill((prev)=>{
            const updatedItems = prev.items.filter((item)=>item.id !== itemId);
            // Ensure there's always at least one empty item row for input
            if (updatedItems.length === 0) {
                updatedItems.push({
                    id: Date.now(),
                    itemCode: '',
                    productInfo: '',
                    medicineId: 0,
                    packItem: 0,
                    batchNo: '',
                    expiryDate: '',
                    qty: 0,
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
                    type: ''
                });
            }
            return {
                ...prev,
                items: updatedItems
            };
        });
    };
    // Recalculate item totals
    const calculateItemTotals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item, currentTaxType)=>{
        const updatedItem = {
            ...item
        };
        const baseBeforeDiscount = updatedItem.qty * updatedItem.price;
        const discountAmount = baseBeforeDiscount * (updatedItem.discPercent || 0) / 100;
        updatedItem.discAmt = parseFloat(discountAmount.toFixed(2));
        const priceAfterDiscount = baseBeforeDiscount - updatedItem.discAmt;
        updatedItem.baseAmount = parseFloat(priceAfterDiscount.toFixed(2)); // Base amount after discount
        const gstAmount = updatedItem.baseAmount * updatedItem.gst / 100;
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
    const updateItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((itemId, field, value)=>{
        setSalesBill((prev)=>{
            const updatedItems = prev.items.map((item)=>{
                if (item.id === itemId) {
                    let updatedItem = {
                        ...item,
                        [field]: value
                    };
                    // Handle specific field updates and then recalculate
                    if (field === 'itemCode') {
                        const selectedMedicine = medicines.find((m)=>m.itemCode === value);
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
                        const selectedBatch = medicineBatches.find((b)=>b.batchNo === value && b.medicineId === updatedItem.medicineId);
                        if (selectedBatch) {
                            updatedItem.expiryDate = selectedBatch.expiryDate;
                            updatedItem.mrp = selectedBatch.mrp;
                            updatedItem.currentStockAtSelection = selectedBatch.currentStock;
                        } else {
                            updatedItem.expiryDate = '';
                            updatedItem.mrp = 0;
                            updatedItem.currentStockAtSelection = 0;
                        }
                    } else if ([
                        'qty',
                        'free',
                        'price',
                        'discPercent',
                        'mrp'
                    ].includes(field)) {
                        updatedItem[field] = parseFloat(value) || 0;
                    }
                    // Recalculate item specific totals
                    return calculateItemTotals(updatedItem, prev.taxType || 'intra');
                }
                return item;
            });
            // Recalculate overall bill totals based on ALL items (excluding the last input item if it's empty)
            const itemsForTotalCalculation = updatedItems.filter((item, index)=>!(index === updatedItems.length - 1 && item.medicineId === 0 && item.itemCode === ''));
            const grossTotal = itemsForTotalCalculation.reduce((sum, item)=>sum + item.qty * item.price, 0);
            const totalDiscountAmount = itemsForTotalCalculation.reduce((sum, item)=>sum + (item.discAmt || 0), 0);
            const gstTotal = itemsForTotalCalculation.reduce((sum, item)=>sum + (item.gstAmount || 0), 0);
            const cgst = itemsForTotalCalculation.reduce((sum, item)=>sum + (item.cgstAmount || 0), 0);
            const sgst = itemsForTotalCalculation.reduce((sum, item)=>sum + (item.sgstAmount || 0), 0);
            const igst = itemsForTotalCalculation.reduce((sum, item)=>sum + (item.igstAmount || 0), 0);
            const actualTotalExcludingRoundOff = grossTotal - totalDiscountAmount + gstTotal + prev.cessAmount;
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
                finalTotal: parseFloat(finalTotal.toFixed(2))
            };
        });
    }, [
        medicines,
        medicineBatches,
        calculateItemTotals
    ]);
    // Fetch and prefill bill data for edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchAndPrefillSalesBill() {
            if (!editId) return; // Only run in edit mode
            try {
                // Fetch sales bill details
                const billRes = await fetch(`${API_BASE}/api/SalesBills/${editId}`);
                if (!billRes.ok) throw new Error('Failed to fetch Sales Bill for editing');
                const data = await billRes.json();
                // Prefill main bill details
                setSalesBill((prev)=>({
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
                        items: data.items.map((item)=>{
                            const matchedMedicine = medicines.find((m)=>m.id === item.medicineId);
                            const matchedBatch = medicineBatches.find((b)=>b.medicineId === item.medicineId && b.batchNo === item.batchNo);
                            return {
                                id: item.id || Date.now(),
                                itemCode: matchedMedicine?.itemCode ?? '',
                                productInfo: matchedMedicine?.medicineName ?? '',
                                medicineId: item.medicineId,
                                packItem: matchedMedicine?.packItem ?? 0,
                                batchNo: item.batchNo,
                                expiryDate: item.expiryDate,
                                qty: item.qty,
                                free: item.free,
                                price: item.price,
                                discPercent: item.discPercent,
                                discAmt: item.discAmt,
                                mrp: item.mrp,
                                amount: item.totalAmount,
                                gst: matchedMedicine?.gst ?? 0,
                                gstAmount: item.gstAmount,
                                cgstAmount: item.cgstAmount,
                                sgstAmount: item.sgstAmount,
                                igstAmount: item.igstAmount,
                                hsnCode: matchedMedicine?.hsnCode ?? '',
                                currentStockAtSelection: matchedBatch?.currentStock ?? 0,
                                purchaseRate: matchedMedicine?.purchaseRate ?? 0,
                                type: matchedMedicine?.type ?? ''
                            };
                        }).concat([
                            {
                                id: Date.now(),
                                itemCode: '',
                                productInfo: '',
                                medicineId: 0,
                                packItem: 0,
                                batchNo: '',
                                expiryDate: '',
                                qty: 0,
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
                                type: ''
                            }
                        ])
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
    }, [
        editId,
        medicines,
        medicineBatches
    ]); // Depend on master data to ensure it's loaded before prefilling
    // Save Sales Bill
    const saveSalesBill = async ()=>{
        if (isCancelled || isFinalized) {
            showAlert("This bill is finalized or cancelled and cannot be modified.");
            return;
        }
        // Filter out the last empty item row (if it's truly empty) before sending
        const itemsToSave = salesBill.items.filter((item)=>item.medicineId !== 0 || item.itemCode !== '');
        // Basic validation after filtering empty row
        if (itemsToSave.length === 0 || itemsToSave.some((item)=>!item.medicineId || !item.batchNo || item.qty <= 0)) {
            showAlert('Please fill in all required fields and add at least one valid item.');
            return;
        }
        if (itemsToSave.some((item)=>item.qty > (item.currentStockAtSelection || 0))) {
            showAlert('Quantity cannot exceed available stock for some items.');
            return;
        }
        try {
            // Prepare payload for API
            const payload = {
                ...salesBill,
                items: itemsToSave.map((item)=>({
                        medicineId: item.medicineId,
                        batchNo: item.batchNo,
                        expiryDate: item.expiryDate,
                        qty: item.qty,
                        free: item.free,
                        price: item.price,
                        discPercent: item.discPercent,
                        discAmt: item.discAmt,
                        mrp: item.mrp,
                        gst: item.gst,
                        gstAmount: item.gstAmount,
                        cgstAmount: item.cgstAmount,
                        sgstAmount: item.sgstAmount,
                        igstAmount: item.igstAmount,
                        totalAmount: item.amount,
                        hsnCode: item.hsnCode
                    })),
                doctorId: salesBill.doctorId === 0 && salesBill.doctorName ? null : salesBill.doctorId,
                salesManId: salesBill.salesManId === 0 && salesBill.salesManName ? null : salesBill.salesManId
            };
            const res = await fetch(`${API_BASE}/api/SalesBills`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const errMessage = await res.text();
                throw new Error(`Failed to save sales bill: ${errMessage}`);
            }
            const savedBill = await res.json();
            setSalesBill((prev)=>({
                    ...prev,
                    billNo: savedBill.billNo
                }));
            showAlert('Sales bill saved successfully!');
            setTimeout(()=>{
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
                            id: Date.now(),
                            itemCode: '',
                            productInfo: '',
                            medicineId: 0,
                            packItem: 0,
                            batchNo: '',
                            expiryDate: '',
                            qty: 0,
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
                            type: ''
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
                    taxType: 'intra'
                });
                // Fetch new bill number for the next entry
                const fetchNewBillNo = async ()=>{
                    try {
                        const res = await fetch(`${API_BASE}/api/SalesBills/bill-no`);
                        if (!res.ok) throw new Error('Failed to fetch Bill No');
                        const newId = await res.json();
                        setSalesBill((prev)=>({
                                ...prev,
                                billNo: newId
                            }));
                    } catch (error) {
                        console.error('Error fetching new Bill No:', error);
                        showAlert('Error fetching new Bill No.');
                    }
                };
                fetchNewBillNo();
            }, 600);
        } catch (err) {
            console.error('Failed to save sales bill:', err);
            showAlert(`Failed to save sales bill: ${err.message}`);
        }
    };
    // Cancel Sales Bill
    const cancelSalesBill = async ()=>{
        showConfirm('Are you sure you want to cancel this bill? This action cannot be undone.', async ()=>{
            try {
                const res = await fetch(`${API_BASE}/api/SalesBills/${salesBill.billNo}/cancel`, {
                    method: 'PUT'
                });
                if (!res.ok) throw new Error('Failed to cancel bill');
                setSalesBill((prev)=>({
                        ...prev,
                        isCancelled: true,
                        items: prev.items.map((item)=>({
                                ...item,
                                productInfo: `[CANCELLED] ${item.productInfo}`
                            }))
                    }));
                showAlert('Sales bill marked as CANCELLED!');
                setTimeout(()=>closeModal(), 600);
            } catch (error) {
                console.error('Error cancelling bill:', error);
                showAlert(`Failed to cancel sales bill: ${error.message}`);
            } finally{
                closeModal();
            }
        });
    };
    // Expiry date formatting (MM-YYYY)
    const formatExpiry = (value)=>{
        if (!value) return '';
        const [year, month] = value.split('-');
        return `${month}-${year}`;
    };
    // Handle expiry date input (MMYY format)
    const handleExpiryChange = (input, itemId)=>{
        const cleaned = input.replace(/[^\d]/g, ''); // Only digits
        let month = cleaned.slice(0, 2);
        let year = cleaned.slice(2, 6);
        // Ensure month is two digits, adding leading zero if necessary and value > 1
        if (month.length === 1 && parseInt(month) > 1) {
            month = '0' + month;
        }
        const formattedInput = [
            month,
            year
        ].filter(Boolean).join('-');
        setSearchTerms((prev)=>({
                ...prev,
                [`expiry-${itemId}`]: formattedInput
            }));
        // If full valid date (MM-YYYY), update the item
        if (month.length === 2 && year.length === 4) {
            const monthNum = parseInt(month, 10);
            const yearNum = parseInt(year, 10);
            const currentYear = new Date().getFullYear();
            if (monthNum >= 1 && monthNum <= 12 && yearNum >= currentYear) {
                const dateValue = `${year}-${month}-01`; // Store as YYYY-MM-DD
                updateItem(itemId, 'expiryDate', dateValue);
                setSearchTerms((prev)=>{
                    const copy = {
                        ...prev
                    };
                    delete copy[`expiry-${itemId}`];
                    return copy;
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-sans",
        children: [
            modalMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomModal, {
                message: modalMessage,
                onClose: closeModal,
                onConfirm: modalCallback || undefined,
                type: modalType
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 866,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-light mb-3 text-center",
                    children: "Sales Bill"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                    lineNumber: 876,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 875,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 sm:p-3 lg:p-4 bg-white shadow-md rounded-lg mx-auto my-4 max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Bill No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 888,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "billNo",
                                                    value: salesBill.billNo,
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900 font-medium focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                            lineNumber: 887,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Bill Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 900,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: salesBill.date,
                                                    onChange: (e)=>setSalesBill((prev)=>({
                                                                ...prev,
                                                                date: e.target.value
                                                            })),
                                                    className: "w-full px-2 py-1 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                    disabled: isCancelled || isFinalized
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 901,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                            lineNumber: 899,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 885,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-40",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-blue-900 mb-1",
                                            children: "Payment Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                            lineNumber: 913,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: salesBill.paymentType,
                                            onChange: (e)=>setSalesBill((prev)=>({
                                                        ...prev,
                                                        paymentType: e.target.value
                                                    })),
                                            className: "w-full px-2 py-1 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                            disabled: isCancelled || isFinalized,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Cash",
                                                    children: "Cash"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 920,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Card",
                                                    children: "Card"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 921,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Online",
                                                    children: "Online"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Credit",
                                                    children: "Credit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 923,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                            lineNumber: 914,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 912,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 883,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Customer Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 935,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: salesBill.customerName,
                                                    onChange: (e)=>setSalesBill((prev)=>({
                                                                ...prev,
                                                                customerName: e.target.value
                                                            })),
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                    placeholder: "Enter Customer Name",
                                                    disabled: isCancelled || isFinalized
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 936,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                            lineNumber: 934,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Mobile No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: salesBill.mobileNo,
                                                    onChange: (e)=>setSalesBill((prev)=>({
                                                                ...prev,
                                                                mobileNo: e.target.value
                                                            })),
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                    placeholder: "Enter Mobile No",
                                                    disabled: isCancelled || isFinalized
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                            lineNumber: 947,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 932,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 relative z-20",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Doctor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 964,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchableSelect, {
                                                    label: "",
                                                    value: salesBill.doctorId.toString(),
                                                    searchValue: searchTerms['doctor'] || salesBill.doctorName,
                                                    setSearchValue: (val)=>{
                                                        setSearchTerms((prev)=>({
                                                                ...prev,
                                                                doctor: val
                                                            }));
                                                        setSalesBill((prev)=>({
                                                                ...prev,
                                                                doctorName: val,
                                                                doctorId: 0
                                                            }));
                                                    },
                                                    showDropdown: activeDropdown === 'doctor',
                                                    setShowDropdown: (open)=>setActiveDropdown(open ? 'doctor' : null),
                                                    items: getFilteredItems(doctors, searchTerms['doctor'] || '', 'id', 'name').map((d)=>({
                                                            id: d.id.toString(),
                                                            name: d.name
                                                        })),
                                                    onSelect: (id, name)=>{
                                                        setSalesBill((prev)=>({
                                                                ...prev,
                                                                doctorId: parseInt(id),
                                                                doctorName: name
                                                            }));
                                                        setSearchTerms((prev)=>({
                                                                ...prev,
                                                                doctor: ''
                                                            }));
                                                    },
                                                    renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-medium text-gray-700",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 984,
                                                            columnNumber: 41
                                                        }, void 0),
                                                    placeholder: "Select or Type Doctor Name",
                                                    isDisabled: isCancelled || isFinalized
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 965,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                            lineNumber: 963,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Sales Person"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchableSelect, {
                                                    label: "",
                                                    value: salesBill.salesManId.toString(),
                                                    searchValue: searchTerms['salesMan'] || salesBill.salesManName,
                                                    setSearchValue: (val)=>{
                                                        setSearchTerms((prev)=>({
                                                                ...prev,
                                                                salesMan: val
                                                            }));
                                                        setSalesBill((prev)=>({
                                                                ...prev,
                                                                salesManName: val,
                                                                salesManId: 0
                                                            }));
                                                    },
                                                    showDropdown: activeDropdown === 'salesMan',
                                                    setShowDropdown: (open)=>setActiveDropdown(open ? 'salesMan' : null),
                                                    items: getFilteredItems(salesMen, searchTerms['salesMan'] || '', 'id', 'name').map((sm)=>({
                                                            id: sm.id.toString(),
                                                            name: `${sm.code} - ${sm.name}`
                                                        })),
                                                    onSelect: (id, name)=>{
                                                        const selectedSalesMan = salesMen.find((sm)=>sm.id.toString() === id);
                                                        setSalesBill((prev)=>({
                                                                ...prev,
                                                                salesManId: parseInt(id),
                                                                salesManName: selectedSalesMan?.name || name
                                                            }));
                                                        setSearchTerms((prev)=>({
                                                                ...prev,
                                                                salesMan: ''
                                                            }));
                                                    },
                                                    renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs font-medium text-gray-700",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1014,
                                                            columnNumber: 41
                                                        }, void 0),
                                                    placeholder: "Select Sales Person",
                                                    isDisabled: isCancelled || isFinalized
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 994,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                            lineNumber: 992,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 961,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 930,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                    lineNumber: 881,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 880,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-0",
                            children: "Items"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 1028,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                        lineNumber: 1027,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-lg relative z-10",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "min-w-[1200px] w-full border border-blue-300 text-xs sm:text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500 w-[8%]",
                                                            children: "Item Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1038,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500 w-[15%]",
                                                            children: "Medicine Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1039,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]",
                                                            children: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1040,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]",
                                                            children: "Pack Item"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1041,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500 w-[10%]",
                                                            children: "Batch No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1042,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500 w-[8%]",
                                                            children: "Expiry"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1043,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]",
                                                            children: "Qty"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1044,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]",
                                                            children: "Free"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1045,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]",
                                                            children: "Disc %"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1046,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[7%]",
                                                            children: "P.Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1047,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[7%]",
                                                            children: "S.Rate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1048,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[7%]",
                                                            children: "MRP"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1049,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]",
                                                            children: "GST%"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[7%]",
                                                            children: "Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1051,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500 w-[5%]",
                                                            children: "HSN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1052,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-2 py-3 text-center text-xs sm:text-sm font-medium w-[5%]",
                                                            children: "Action"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1053,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                    lineNumber: 1037,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                lineNumber: 1036,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: [
                                                    salesBill.items.map((item, index)=>{
                                                        const isLastItem = index === salesBill.items.length - 1;
                                                        const medicineInfo = medicines.find((m)=>m.id === item.medicineId);
                                                        return(// Added relative and z-index to table cell for dropdown to escape overflow
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: `${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors duration-200`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm relative z-20",
                                                                    children: [
                                                                        " ",
                                                                        isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchableSelect, {
                                                                            label: "",
                                                                            value: item.itemCode || '',
                                                                            searchValue: searchTerms[`itemCode-${item.id}`] || '',
                                                                            setSearchValue: (val)=>setSearchTerms((prev)=>({
                                                                                        ...prev,
                                                                                        [`itemCode-${item.id}`]: val
                                                                                    })),
                                                                            showDropdown: activeDropdown === `itemCode-${item.id}`,
                                                                            setShowDropdown: (open)=>setActiveDropdown(open ? `itemCode-${item.id}` : null),
                                                                            items: getFilteredItems(medicines, searchTerms[`itemCode-${item.id}`] || '', 'itemCode', 'medicineName').map((m)=>({
                                                                                    id: m.itemCode,
                                                                                    name: `${m.itemCode} - ${m.medicineName}`
                                                                                })),
                                                                            onSelect: (code, name)=>{
                                                                                updateItem(item.id, 'itemCode', code);
                                                                                setSearchTerms((prev)=>({
                                                                                        ...prev,
                                                                                        [`itemCode-${item.id}`]: ''
                                                                                    }));
                                                                            },
                                                                            renderItem: (med)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs font-medium text-gray-700",
                                                                                    children: med.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                                    lineNumber: 1083,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                            placeholder: "Code",
                                                                            inputRef: (el)=>{
                                                                                inputRefs.current[`itemCode-${item.id}`] = el;
                                                                            },
                                                                            isDisabled: isCancelled || isFinalized
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                            lineNumber: 1067,
                                                                            columnNumber: 53
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: item.itemCode
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                            lineNumber: 1090,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1065,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.productInfo
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1095,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1094,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.type || medicineInfo?.type || ''
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1099,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1098,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.packItem || medicineInfo?.packItem || ''
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1103,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1102,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm relative z-20",
                                                                    children: [
                                                                        " ",
                                                                        isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchableSelect, {
                                                                            label: "",
                                                                            value: item.batchNo || '',
                                                                            searchValue: searchTerms[`batchNo-${item.id}`] || '',
                                                                            setSearchValue: (val)=>setSearchTerms((prev)=>({
                                                                                        ...prev,
                                                                                        [`batchNo-${item.id}`]: val
                                                                                    })),
                                                                            showDropdown: activeDropdown === `batchNo-${item.id}`,
                                                                            setShowDropdown: (open)=>setActiveDropdown(open ? `batchNo-${item.id}` : null),
                                                                            items: medicineBatches.filter((batch)=>batch.medicineId === item.medicineId && batch.batchNo.toLowerCase().includes(searchTerms[`batchNo-${item.id}`]?.toLowerCase() || '') && new Date(batch.expiryDate) >= new Date() // Filter out expired items
                                                                            ).sort((a, b)=>new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime()) // Sort by expiry
                                                                            .map((b)=>({
                                                                                    id: b.batchNo,
                                                                                    name: `${b.batchNo} (Stock: ${b.currentStock})`,
                                                                                    isLowStock: b.currentStock === 0
                                                                                })),
                                                                            onSelect: (batchNo, name)=>{
                                                                                updateItem(item.id, 'batchNo', batchNo);
                                                                                setSearchTerms((prev)=>({
                                                                                        ...prev,
                                                                                        [`batchNo-${item.id}`]: ''
                                                                                    }));
                                                                            },
                                                                            renderItem: (b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `text-xs font-medium ${b.isLowStock ? 'text-red-600 font-bold' : 'text-gray-700'}`,
                                                                                    children: b.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                                    lineNumber: 1134,
                                                                                    columnNumber: 61
                                                                                }, void 0),
                                                                            placeholder: "Batch",
                                                                            isDisabled: isCancelled || isFinalized || !item.medicineId
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                            lineNumber: 1108,
                                                                            columnNumber: 53
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: item.batchNo
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                            lineNumber: 1142,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1106,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                                    children: isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: item.expiryDate ? formatExpiry(item.expiryDate) : searchTerms[`expiry-${item.id}`] || '',
                                                                        onChange: (e)=>handleExpiryChange(e.target.value, item.id),
                                                                        placeholder: "MM-YYYY",
                                                                        maxLength: 7,
                                                                        className: "w-full px-2 py-1 border border-blue-300 rounded text-xs text-center tracking-wider",
                                                                        disabled: isCancelled || isFinalized || !item.batchNo
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1148,
                                                                        columnNumber: 53
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.expiryDate ? formatExpiry(item.expiryDate) : ''
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1158,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1146,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        inputMode: "numeric",
                                                                        value: item.qty === 0 ? '' : item.qty,
                                                                        onFocus: (e)=>{
                                                                            if (e.target.value === '0') e.target.value = '';
                                                                        },
                                                                        onBlur: (e)=>{
                                                                            const val = parseFloat(e.target.value);
                                                                            updateItem(item.id, 'qty', isNaN(val) ? 0 : val);
                                                                        },
                                                                        onChange: (e)=>{
                                                                            const val = e.target.value;
                                                                            updateItem(item.id, 'qty', val === '' ? '' : parseFloat(val));
                                                                        },
                                                                        className: "w-full px-1 py-1 border border-blue-300 rounded text-xs",
                                                                        disabled: isCancelled || isFinalized || !item.batchNo
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1164,
                                                                        columnNumber: 53
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.qty
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1181,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1162,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: item.free,
                                                                        onChange: (e)=>updateItem(item.id, 'free', e.target.value),
                                                                        min: "0",
                                                                        className: "w-full px-1 py-1 border border-blue-300 rounded text-xs text-center",
                                                                        disabled: isCancelled || isFinalized
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1187,
                                                                        columnNumber: 53
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.free
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1196,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1185,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        max: "100",
                                                                        value: item.discPercent,
                                                                        onChange: (e)=>updateItem(item.id, 'discPercent', e.target.value),
                                                                        className: "w-full px-1 py-1 border border-blue-300 rounded text-xs",
                                                                        disabled: isCancelled || isFinalized
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1202,
                                                                        columnNumber: 53
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.discPercent.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1212,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1200,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.purchaseRate?.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1217,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1216,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        step: "0.01",
                                                                        value: item.price.toFixed(2),
                                                                        onChange: (e)=>updateItem(item.id, 'price', e.target.value),
                                                                        className: "w-full px-1 py-1 border border-blue-300 rounded text-xs text-center",
                                                                        disabled: isCancelled || isFinalized
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1222,
                                                                        columnNumber: 53
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.price.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1231,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1220,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                                    children: isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: item.mrp,
                                                                        onChange: (e)=>updateItem(item.id, 'mrp', e.target.value),
                                                                        className: "w-full px-1 py-1 border border-blue-300 rounded text-xs",
                                                                        disabled: isCancelled || isFinalized
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1237,
                                                                        columnNumber: 53
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.mrp.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1245,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1235,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.gst.toFixed(2)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1250,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1249,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm font-bold text-green-700",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "₹",
                                                                            item.amount.toFixed(2)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1254,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1253,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: item.hsnCode
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1258,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1257,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 text-center text-xs sm:text-sm",
                                                                    children: isLastItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: addItem,
                                                                        className: "p-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out",
                                                                        disabled: isCancelled || isFinalized,
                                                                        title: "Add item",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                            lineNumber: 1269,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1263,
                                                                        columnNumber: 53
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeItem(item.id),
                                                                        disabled: isCancelled || isFinalized,
                                                                        className: `text-red-600 hover:text-red-800 transition ${isCancelled || isFinalized ? 'opacity-40 cursor-not-allowed' : ''}`,
                                                                        title: isCancelled ? 'Bill is cancelled' : isFinalized ? 'Finalized bill cannot be modified' : 'Delete item',
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                            lineNumber: 1279,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                        lineNumber: 1272,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                    lineNumber: 1261,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1063,
                                                            columnNumber: 41
                                                        }, this));
                                                    }),
                                                    salesBill.items.length === 1 && salesBill.items[0].medicineId === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 16,
                                                            className: "py-4 text-center text-gray-500 text-base",
                                                            children: "Start by adding an item above."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                            lineNumber: 1289,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1288,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                lineNumber: 1056,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                        lineNumber: 1035,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                lineNumber: 1034,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                        lineNumber: 1033,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 1026,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4 lg:p-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg sm:text-xl font-bold text-blue-900 mb-4",
                            children: "Summary"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 1303,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-blue-300 rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-600 text-white p-2 text-center font-semibold text-sm",
                                                children: "Tax Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                lineNumber: 1309,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-blue-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "GST Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1312,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(salesBill.gstTotal || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1313,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "CGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1316,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(salesBill.cgst || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1317,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1315,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "SGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1320,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(salesBill.sgst || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1321,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1319,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "IGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1324,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(salesBill.igst || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1325,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1323,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Cess Amount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1328,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                step: "0.01",
                                                                value: salesBill.cessAmount.toFixed(2),
                                                                onChange: (e)=>setSalesBill((prev)=>({
                                                                            ...prev,
                                                                            cessAmount: Number(e.target.value)
                                                                        })),
                                                                className: "w-24 px-2 py-1 text-sm border border-blue-300 rounded text-right font-bold",
                                                                disabled: isCancelled || isFinalized
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1329,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1327,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                lineNumber: 1310,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                        lineNumber: 1308,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 1307,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-blue-300 rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-600 text-white p-2 text-center font-semibold text-sm",
                                                children: "Amount Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                lineNumber: 1345,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-blue-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-green-50 font-bold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-green-900",
                                                                children: "Gross Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1348,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-green-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(salesBill.grossTotal || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1349,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1347,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Round Off:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1354,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(salesBill.roundOff || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1355,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1353,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Total Discount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1358,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(salesBill.discount || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                                lineNumber: 1359,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                        lineNumber: 1357,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                lineNumber: 1346,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                        lineNumber: 1344,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 1343,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:flex lg:items-center lg:justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg text-center shadow-lg w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium mb-1",
                                                children: "Final Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                lineNumber: 1368,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold",
                                                children: [
                                                    "₹",
                                                    Number(salesBill.finalTotal || 0).toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                                lineNumber: 1369,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                        lineNumber: 1367,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 1366,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 1305,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                    lineNumber: 1302,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 1301,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: saveSalesBill,
                            className: "bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300",
                            disabled: isCancelled || isFinalized,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 1384,
                                    columnNumber: 25
                                }, this),
                                " Save Bill"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 1379,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: cancelSalesBill,
                            className: "bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300",
                            disabled: isCancelled || isFinalized,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                                    lineNumber: 1392,
                                    columnNumber: 25
                                }, this),
                                " Cancel Bill"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                            lineNumber: 1387,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                    lineNumber: 1378,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
                lineNumber: 1377,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/SalesBill/addSalesbill/page.tsx",
        lineNumber: 864,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = SalesBillPage;
}}),

};

//# sourceMappingURL=src_app_%28dashboard%29_SalesBill_addSalesbill_page_tsx_abb1163f._.js.map