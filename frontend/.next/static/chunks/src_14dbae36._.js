(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/SearchableSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SearchableSelect": (()=>SearchableSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
;
var _s = __turbopack_context__.k.signature();
;
;
function SearchableSelect(props) {
    _s();
    const { label, value, searchValue, setSearchValue, showDropdown, setShowDropdown, items, onSelect, renderItem, editUrl, error } = props;
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchableSelect.useMemo[selectedItem]": ()=>{
            return items.find({
                "SearchableSelect.useMemo[selectedItem]": (i)=>i.id === value
            }["SearchableSelect.useMemo[selectedItem]"]) || null;
        }
    }["SearchableSelect.useMemo[selectedItem]"], [
        items,
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchableSelect.useEffect": ()=>{
            const handleClickOutside = {
                "SearchableSelect.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        // Close dropdown and clear text
                        setShowDropdown(false);
                        setSearchValue('');
                    }
                }
            }["SearchableSelect.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "SearchableSelect.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["SearchableSelect.useEffect"];
        }
    }["SearchableSelect.useEffect"], [
        dropdownRef,
        setShowDropdown,
        setSearchValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        className: "relative searchable-select w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-semibold text-blue-900 mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/SearchableSelect.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchableSelect.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: searchValue !== '' ? searchValue : selectedItem?.name || '',
                        onChange: (e)=>setSearchValue(e.target.value),
                        onFocus: ()=>setShowDropdown(true),
                        onKeyDown: (e)=>{
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                if (items.length > 0) {
                                    const selected = items[0];
                                    onSelect(selected.id);
                                    setSearchValue(''); // ✅ Clear search input
                                    setShowDropdown(false);
                                }
                            }
                        },
                        className: `w-full pl-8 pr-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900 font-medium focus:outline-none
            ${error ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200' : 'border-blue-300 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200'}
            text-blue-900 font-medium focus:outline-none transition-all`,
                        placeholder: `Search ${label.toLowerCase()}...`
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchableSelect.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    value && editUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: editUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchableSelect.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchableSelect.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchableSelect.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-[9999] w-full bottom-full mb-1 bg-white border border-blue-300 rounded-lg shadow-lg overflow-y-auto",
                style: {
                    maxHeight: '7.5rem'
                },
                children: items.length > 0 ? items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            onSelect(item.id);
                            setSearchValue(''); // ✅ Clear search input
                            setShowDropdown(false);
                        },
                        className: "px-4 py-2 text-sm text-blue-900 hover:bg-blue-100 cursor-pointer border-b border-blue-100 last:border-b-0 transition-all",
                        children: renderItem(item)
                    }, item.id, false, {
                        fileName: "[project]/src/components/SearchableSelect.tsx",
                        lineNumber: 111,
                        columnNumber: 15
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 text-sm text-gray-500 text-center",
                    children: searchValue ? 'No results found' : 'No data available'
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchableSelect.tsx",
                    lineNumber: 125,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SearchableSelect.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm mt-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/SearchableSelect.tsx",
                lineNumber: 132,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchableSelect.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(SearchableSelect, "Ioz7p/GYq8tYKAWnGSQPdDXUNzs=");
_c = SearchableSelect;
var _c;
__turbopack_context__.k.register(_c, "SearchableSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/axios.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "https://localhost:7112"
});
const __TURBOPACK__default__export__ = API;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchableSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL;
const PurchaseBillPage = ()=>{
    _s();
    const [purchaseBill, setPurchaseBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        purchaseId: undefined,
        date: new Date().toISOString().split('T')[0],
        supplierId: 0,
        supplierName: '',
        supplierAddress: '',
        supplierLocation: '',
        gst: '',
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
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const skipInitialCalc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [editingItemData, setEditingItemData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalData, setModalData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
        companyId: 0,
        company: '',
        discountPercent: 0,
        totalQty: 0,
        totalFreeQty: 0,
        currentStock: 0,
        stripMrp: 0,
        stripRate: 0
    });
    const [calculatedValues, setCalculatedValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const closeModal = ()=>{
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
            companyId: 0,
            company: '',
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
        setMedicineSearches((prev)=>{
            const copy = {
                ...prev
            };
            delete copy['modal'];
            delete copy['modal-expiry'];
            return copy;
        });
    };
    const addItem = ()=>{
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
            companyId: 0,
            company: '',
            discountPercent: 0
        });
        setEditingItemData(null);
        setShowModal(true);
    };
    const removeItem = async (item)=>{
        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if (!confirmed) return;
        try {
            if (item.id > 0) {
                // Soft-delete on backend
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/PurchaseItems/${item.id}`);
            }
            // Remove item locally by ID
            setPurchaseBill((prev)=>({
                    ...prev,
                    items: prev.items.filter((i)=>i.id !== item.id)
                }));
        } catch (error) {
            console.error("Delete failed", error);
            alert("Failed to delete item.");
        }
    };
    const editItem = (item)=>{
        skipInitialCalc.current = true; // 🛑 Prevent auto-calc once
        setEditingItemData(item);
        // Use actual stored values for MRP and Rate instead of calculated ones
        const storedMrp = item.stripMrp !== undefined && item.stripMrp !== 0 ? item.stripMrp : item.mrp || 0;
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
    const calculateRates = (data)=>{
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
        const taxAmount = grossAmount * gst / 100;
        const netAmount = grossAmount + taxAmount;
        // MRP includes GST → Taxable = MRP * 100 / (100 + GST)
        const taxablePrice = totalMrp * 100 / (100 + gst);
        const pRate = totalQty > 0 ? ratePerStrip / packItem : 0; // Purchase rate per tablet
        const sRate = totalQty > 0 ? taxablePrice / totalQty : 0; // Selling rate per tablet
        const itemMrp = totalQty > 0 ? mrpPerStrip / packItem : 0; // MRP per tablet
        setCalculatedValues({
            pRate: +pRate.toFixed(2),
            sRate: +sRate.toFixed(2),
            itemMrp: +itemMrp.toFixed(2),
            totalQty,
            totalFreeQty,
            amount: +netAmount.toFixed(2),
            grossAmount: +grossAmount.toFixed(2),
            taxAmount: +taxAmount.toFixed(2),
            netAmount: +netAmount.toFixed(2)
        });
    };
    const safeToFixed = (value, decimals = 2)=>{
        const num = Number(value);
        return !isNaN(num) ? num.toFixed(decimals) : 0..toFixed(decimals);
    };
    const handleModalExpiryChange = (input)=>{
        const cleaned = input.replace(/[^\d]/g, '');
        let month = cleaned.slice(0, 2);
        let year = cleaned.slice(2, 6);
        if (month.length === 1 && parseInt(month) > 1) {
            month = '0' + month;
        }
        const formattedInput = [
            month,
            year
        ].filter(Boolean).join('-');
        // Show formatted string in search box
        setMedicineSearches((prev)=>({
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
            setModalData((prev)=>({
                    ...prev,
                    expiryDate: `${year}-${month}-01`
                }));
            setMedicineSearches((prev)=>{
                const copy = {
                    ...prev
                };
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            if (skipInitialCalc.current) {
                skipInitialCalc.current = false; // 🧼 Skip *once* per edit
                return;
            }
            if (modalData.medicineId) {
                calculateRates(modalData);
            }
        }
    }["PurchaseBillPage.useEffect"], [
        modalData.qty,
        modalData.freeQty,
        modalData.rate,
        modalData.mrp,
        modalData.gst
    ]);
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicines, setMedicines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicineSearches, setMedicineSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const editId = searchParams.get('edit');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isCancelled = purchaseBill.isCancelled === true;
    const isFinalized = purchaseBill.finalTotal > 0; // Or use a separate status field like purchaseBill.status === 'finalized'
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const fetchPurchaseId = {
                "PurchaseBillPage.useEffect.fetchPurchaseId": async ()=>{
                    try {
                        const res = await fetch(`${API_BASE}/api/PurchaseBills/purchase-id`);
                        if (!res.ok) throw new Error('Failed to fetch Purchase ID');
                        const newId = await res.json();
                        setPurchaseBill({
                            "PurchaseBillPage.useEffect.fetchPurchaseId": (prev)=>({
                                    ...prev,
                                    purchaseId: newId
                                })
                        }["PurchaseBillPage.useEffect.fetchPurchaseId"]);
                    } catch (error) {
                        console.error('Error fetching Purchase ID:', error);
                    }
                }
            }["PurchaseBillPage.useEffect.fetchPurchaseId"];
            if (!editId) {
                fetchPurchaseId();
            }
        }
    }["PurchaseBillPage.useEffect"], [
        editId
    ]);
    // Fetch suppliers from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const fetchSuppliers = {
                "PurchaseBillPage.useEffect.fetchSuppliers": async ()=>{
                    try {
                        const res = await fetch(`${API_BASE}/api/Suppliers`);
                        const data = await res.json();
                        setSuppliers(data);
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
                        const res = await fetch(`${API_BASE}/api/Medicines/dropdown`);
                        if (!res.ok) {
                            throw new Error('Failed to fetch medicines');
                        }
                        const medicineData = await res.json();
                        setMedicines(medicineData);
                    } catch (error) {
                        console.error('Error fetching medicines:', error);
                    }
                }
            }["PurchaseBillPage.useEffect.fetchMedicines"];
            fetchMedicines();
        }
    }["PurchaseBillPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const qty = Number(modalData.qty) || 0;
            const freeQty = Number(modalData.freeQty) || 0;
            const packItem = Number(modalData.packItem) || 0;
            const totalQty = qty * packItem;
            const totalFreeQty = freeQty * packItem;
            const currentStock = (qty + freeQty) * packItem;
            setModalData({
                "PurchaseBillPage.useEffect": (prev)=>({
                        ...prev,
                        totalQty,
                        totalFreeQty,
                        currentStock
                    })
            }["PurchaseBillPage.useEffect"]);
        }
    }["PurchaseBillPage.useEffect"], [
        modalData.qty,
        modalData.freeQty,
        modalData.packItem
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            if (editingItemData && editingItemData.medicineName) {
                setMedicineSearches({
                    "PurchaseBillPage.useEffect": (prev)=>({
                            ...prev,
                            modal: editingItemData.medicineName
                        })
                }["PurchaseBillPage.useEffect"]);
            }
        }
    }["PurchaseBillPage.useEffect"], [
        editingItemData
    ]);
    //For fetching existing data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            async function fetchAndPrefillBill() {
                try {
                    // Fetch dropdown data
                    const suppliersRes = await fetch(`${API_BASE}/api/Suppliers`);
                    const suppliersData = await suppliersRes.json();
                    setSuppliers(suppliersData.map({
                        "PurchaseBillPage.useEffect.fetchAndPrefillBill": (s)=>({
                                id: s.id,
                                name: s.name,
                                address: s.address,
                                location: s.location,
                                gstNo: s.gstNo
                            })
                    }["PurchaseBillPage.useEffect.fetchAndPrefillBill"]));
                    const medicinesRes = await fetch(`${API_BASE}/api/Medicines`);
                    const medicinesData = await medicinesRes.json();
                    setMedicines(medicinesData.map({
                        "PurchaseBillPage.useEffect.fetchAndPrefillBill": (m)=>({
                                id: m.id,
                                itemCode: m.itemCode,
                                medicineName: m.medicineName,
                                type: m.type,
                                packItem: m.packItem,
                                purchaseRate: m.purchaseRate,
                                salesRate: m.salesRate,
                                gst: m.gst,
                                hsnCode: m.hsnCode,
                                company: m.company || ''
                            })
                    }["PurchaseBillPage.useEffect.fetchAndPrefillBill"]));
                    if (editId) {
                        setIsEditMode(true);
                        const billRes = await fetch(`${API_BASE}/api/PurchaseBills/${editId}`);
                        const data = await billRes.json();
                        // ✅ Find supplier details
                        const selectedSupplier = suppliersData.find({
                            "PurchaseBillPage.useEffect.fetchAndPrefillBill.selectedSupplier": (s)=>s.id === data.supplierId
                        }["PurchaseBillPage.useEffect.fetchAndPrefillBill.selectedSupplier"]);
                        // ✅ Enrich each item with medicine details
                        const enrichedItems = data.items.map({
                            "PurchaseBillPage.useEffect.fetchAndPrefillBill.enrichedItems": (item)=>{
                                const matchedMedicine = medicinesData.find({
                                    "PurchaseBillPage.useEffect.fetchAndPrefillBill.enrichedItems.matchedMedicine": (m)=>m.id === item.medicineId
                                }["PurchaseBillPage.useEffect.fetchAndPrefillBill.enrichedItems.matchedMedicine"]);
                                return {
                                    ...item,
                                    itemCode: matchedMedicine?.itemCode ?? '',
                                    type: matchedMedicine?.type ?? '',
                                    packItem: matchedMedicine?.packItem ?? '',
                                    medicineName: matchedMedicine?.medicineName ?? '',
                                    company: matchedMedicine?.company ?? '',
                                    stripMrp: item.stripMrp ?? 0,
                                    stripRate: item.stripRate ?? 0
                                };
                            }
                        }["PurchaseBillPage.useEffect.fetchAndPrefillBill.enrichedItems"]);
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
                            isCancelled: data.isCancelled ?? false
                        });
                    }
                } catch (err) {
                    console.error("Error while pre-filling:", err);
                }
            }
            fetchAndPrefillBill();
        }
    }["PurchaseBillPage.useEffect"], [
        editId
    ]);
    const isKeralaGST = (gstNo)=>gstNo?.slice(0, 2) === '32';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const grossTotal = purchaseBill.items.reduce({
                "PurchaseBillPage.useEffect.grossTotal": (sum, item)=>sum + (item.baseAmount || 0)
            }["PurchaseBillPage.useEffect.grossTotal"], 0);
            const gstTotal = purchaseBill.items.reduce({
                "PurchaseBillPage.useEffect.gstTotal": (sum, item)=>sum + (item.gstAmount || 0)
            }["PurchaseBillPage.useEffect.gstTotal"], 0);
            const cgst = purchaseBill.items.reduce({
                "PurchaseBillPage.useEffect.cgst": (sum, item)=>sum + (item.cgstAmount || 0)
            }["PurchaseBillPage.useEffect.cgst"], 0);
            const sgst = purchaseBill.items.reduce({
                "PurchaseBillPage.useEffect.sgst": (sum, item)=>sum + (item.sgstAmount || 0)
            }["PurchaseBillPage.useEffect.sgst"], 0);
            const igst = purchaseBill.items.reduce({
                "PurchaseBillPage.useEffect.igst": (sum, item)=>sum + (item.igstAmount || 0)
            }["PurchaseBillPage.useEffect.igst"], 0);
            const discount = purchaseBill.discount || 0;
            const cessAmount = purchaseBill.cessAmount || 0;
            const unroundedTotal = grossTotal + gstTotal - discount + cessAmount;
            const roundedTotal = Math.round(unroundedTotal);
            const roundOff = +(roundedTotal - unroundedTotal).toFixed(2);
            const finalTotal = +(unroundedTotal + roundOff).toFixed(2);
            setPurchaseBill({
                "PurchaseBillPage.useEffect": (prev)=>({
                        ...prev,
                        grossTotal: +grossTotal.toFixed(2),
                        gstTotal: +gstTotal.toFixed(2),
                        cgst: +cgst.toFixed(2),
                        sgst: +sgst.toFixed(2),
                        igst: +igst.toFixed(2),
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
    const [nextTempId, setNextTempId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const handleModalSave = ()=>{
        if (!modalData.medicineId || !modalData.batchNo || !modalData.expiryDate) {
            alert('Please fill all required fields');
            return;
        }
        const isEditing = editingItemData !== null;
        const itemData = {
            id: isEditing ? editingItemData.id : null,
            tempId: isEditing ? editingItemData.tempId : nextTempId,
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
            currentStock: (modalData.qty + modalData.freeQty) * modalData.packItem
        };
        setPurchaseBill((prev)=>{
            const updatedItems = isEditing ? prev.items.map((item)=>item.tempId === editingItemData.tempId ? itemData : item) : [
                ...prev.items,
                itemData
            ];
            return {
                ...prev,
                items: updatedItems
            };
        });
        if (!isEditing) setNextTempId((prev)=>prev + 1);
        closeModal();
    };
    const savePurchaseBill = async ()=>{
        try {
            // ---------------- CALCULATE TOTALS ----------------
            const grossTotal = purchaseBill.items.reduce((sum, item)=>sum + (item.baseAmount || 0), 0);
            const gstTotal = purchaseBill.items.reduce((sum, item)=>sum + (item.gstAmount || 0), 0);
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
            const paymentTypeMap = {
                Cash: 0,
                Credit: 1,
                Online: 2
            };
            const taxTypeMap = {
                Intra: 0,
                Inter: 1
            };
            // ---------------- BUILD PAYLOAD ----------------
            const payload = {
                ...updatedBill,
                // ✅ Only include purchaseId if this is an existing bill (PUT)
                purchaseId: updatedBill.purchaseId && updatedBill.purchaseId > 0 ? updatedBill.purchaseId : undefined,
                // ✅ Map enums correctly
                paymentType: paymentTypeMap[updatedBill.paymentType ?? 'Credit'] ?? 0,
                taxType: taxTypeMap[updatedBill.taxType?.toLowerCase() ?? 'intra'] ?? 0,
                // ✅ Map items
                items: updatedBill.items.map((item)=>({
                        // ❌ id should be undefined for new items so EF Core treats them as new
                        id: item.id && item.id > 0 ? item.id : undefined,
                        medicineId: item.medicineId,
                        batchNo: item.batchNo,
                        expiryDate: item.expiryDate,
                        qty: item.qty,
                        freeQty: item.freeQty,
                        packItem: item.packItem ?? 0,
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
            let response;
            if (editId) {
                // Existing bill → PUT
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/api/PurchaseBills/${editId}`, payload);
            } else {
                // New bill → POST
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/PurchaseBills", payload);
                // Update state with backend-generated PurchaseId
                setPurchaseBill((prev)=>({
                        ...prev,
                        purchaseId: response.data.purchaseId
                    }));
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Purchase bill saved successfully!");
            setTimeout(()=>setSuccessMessage(""), 5000);
            setTimeout(()=>router.push("/Purchasebill"), 600);
        } catch (error) {
            const detail = error?.response?.data ?? error.message;
            console.error("❌ Failed to save purchase bill:", detail);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Failed to save: ${detail}`);
        }
    };
    const cancelPurchaseBill = async ()=>{
        const confirmed = window.confirm('Are you sure you want to cancel this bill?');
        if (!confirmed) return;
        try {
            const res = await fetch(`${API_BASE}/api/PurchaseBills/${purchaseBill.purchaseId}/cancel`, {
                method: 'PUT'
            });
            if (!res.ok) throw new Error('Failed to cancel bill');
            setPurchaseBill((prev)=>({
                    ...prev,
                    isCancelled: true,
                    items: prev.items.map((item)=>({
                            ...item,
                            medicineName: `[CANCELLED] ${item.medicineName}`
                        }))
                }));
            alert('Purchase bill marked as CANCELLED!');
            setTimeout(()=>router.push('/Purchasebill'), 600);
        } catch (error) {
            console.error('Error cancelling bill:', error);
            alert('Failed to cancel purchase bill.');
        }
    };
    const formatExpiry = (value)=>{
        if (!value) return '';
        const [year, month] = value.split('-');
        return `${month}-${year}`;
    };
    const medicineDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const handleClickOutside = {
                "PurchaseBillPage.useEffect.handleClickOutside": (event)=>{
                    if (medicineDropdownRef.current && !medicineDropdownRef.current.contains(event.target)) {
                        setEditingItem(null);
                    }
                }
            }["PurchaseBillPage.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "PurchaseBillPage.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["PurchaseBillPage.useEffect"];
        }
    }["PurchaseBillPage.useEffect"], []);
    const filteredMedicines = medicines.filter((m)=>{
        const query = medicineSearches.modal?.toLowerCase() || '';
        return(// m.itemCode.toLowerCase().startsWith(query) ||
        m.medicineName.toLowerCase().startsWith(query));
    });
    const selectMedicine = (selected)=>{
        setModalData((prev)=>({
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
        setMedicineSearches((prev)=>({
                ...prev,
                modal: `${selected.itemCode} - ${selected.medicineName}`
            }));
        setEditingItem(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 to-blue-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-light mb-3 text-center",
                    children: "Purchase Bill"
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                    lineNumber: 927,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                lineNumber: 926,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 sm:p-3 lg:p-4 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-12 gap-2 items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Pur ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "purchaseId",
                                                    value: purchaseBill.purchaseId ?? "",
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900 font-medium focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 939,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 937,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 950,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: purchaseBill.date,
                                                    onChange: (e)=>setPurchaseBill((prev)=>({
                                                                ...prev,
                                                                date: e.target.value
                                                            })),
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 949,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-12 sm:col-span-7",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Supplier"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 963,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                        label: "",
                                                        value: purchaseBill.supplierId.toString(),
                                                        searchValue: medicineSearches['supplier'] || '',
                                                        setSearchValue: (val)=>setMedicineSearches((prev)=>({
                                                                    ...prev,
                                                                    supplier: val
                                                                })),
                                                        showDropdown: editingItem === -1,
                                                        setShowDropdown: (open)=>setEditingItem(open ? -1 : null),
                                                        items: suppliers.filter((s)=>{
                                                            const query = medicineSearches['supplier']?.toLowerCase() || '';
                                                            const firstName = s.name.split(' ')[0].toLowerCase();
                                                            return s.id.toString().includes(query) || firstName.startsWith(query);
                                                        }).map((s)=>({
                                                                id: s.id.toString(),
                                                                name: `${s.id} - ${s.name}`
                                                            })),
                                                        onSelect: (id)=>{
                                                            const selectedSupplier = suppliers.find((s)=>s.id.toString() === id);
                                                            if (selectedSupplier) {
                                                                const isKerala = isKeralaGST(selectedSupplier.gstNo);
                                                                const updatedItems = purchaseBill.items.map((item)=>{
                                                                    const baseBeforeDiscount = item.qty * item.purchaseRate;
                                                                    const discountAmount = baseBeforeDiscount * (item.discountPercent || 0) / 100;
                                                                    const baseAmount = baseBeforeDiscount - discountAmount;
                                                                    const gstAmount = baseAmount * item.gst / 100;
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
                                                                        amount: baseAmount + gstAmount
                                                                    };
                                                                });
                                                                const gstTotal = updatedItems.reduce((sum, i)=>sum + (i.gstAmount || 0), 0);
                                                                const cgst = updatedItems.reduce((sum, i)=>sum + (i.cgstAmount || 0), 0);
                                                                const sgst = updatedItems.reduce((sum, i)=>sum + (i.sgstAmount || 0), 0);
                                                                const igst = updatedItems.reduce((sum, i)=>sum + (i.igstAmount || 0), 0);
                                                                setPurchaseBill((prev)=>({
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
                                                                        igst
                                                                    }));
                                                                setMedicineSearches((prev)=>({
                                                                        ...prev,
                                                                        supplier: ''
                                                                    }));
                                                            }
                                                        },
                                                        renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs font-medium text-gray-700",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1037,
                                                                columnNumber: 45
                                                            }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 964,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 962,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 935,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1049,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: purchaseBill.supplierAddress,
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1050,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1048,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: purchaseBill.supplierLocation || "",
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1061,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1059,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 1045,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 934,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-3/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Inv No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1077,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: purchaseBill.invoiceNo,
                                                    onChange: (e)=>setPurchaseBill((prev)=>({
                                                                ...prev,
                                                                invoiceNo: e.target.value
                                                            })),
                                                    required: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1078,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1076,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-2/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Inv Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1089,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: purchaseBill.invoiceDate,
                                                    onChange: (e)=>setPurchaseBill((prev)=>({
                                                                ...prev,
                                                                invoiceDate: e.target.value
                                                            })),
                                                    required: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1090,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1088,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 1074,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-3/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "GST IN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1102,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: purchaseBill.gst,
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1103,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1101,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-2/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: purchaseBill.paymentType,
                                                    onChange: (e)=>setPurchaseBill((prev)=>({
                                                                ...prev,
                                                                paymentType: e.target.value
                                                            })),
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Credit",
                                                            children: "Credit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Cash",
                                                            children: "Cash"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1120,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Other",
                                                            children: "Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1121,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1114,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1112,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1072,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                    lineNumber: 932,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                lineNumber: 931,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-0",
                                children: "Items"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                lineNumber: 1132,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addItem,
                                className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 flex items-center gap-2 font-medium shadow-lg transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1137,
                                        columnNumber: 25
                                    }, this),
                                    " Add Item"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                lineNumber: 1133,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                        lineNumber: 1131,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-lg relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-[800px] w-full border border-blue-300 text-xs sm:text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Item Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1147,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-90 px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Medicine"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Batch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1149,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Expiry"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1150,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Qty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1151,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Free"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "P.Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1153,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "S.Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "GST%"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1155,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1156,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "HSN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1157,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium",
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1158,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1146,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1145,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            purchaseBill.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: `${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors duration-200`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm font-medium",
                                                            children: item.itemCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1167,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                            children: item.medicineName
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1170,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                            children: item.batchNo
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1173,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                            children: formatExpiry(item.expiryDate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1176,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center",
                                                            children: item.qty
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1179,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center",
                                                            children: item.freeQty
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1182,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center",
                                                            children: [
                                                                "₹",
                                                                safeToFixed(item.purchaseRate)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1185,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center",
                                                            children: [
                                                                "₹",
                                                                Number(item.salesRate || 0).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1188,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center",
                                                            children: [
                                                                item.gst,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1191,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center font-bold text-green-700",
                                                            children: [
                                                                "₹",
                                                                Number(item.totalAmount || 0).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1194,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm text-center",
                                                            children: item.hsnCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1197,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-2 py-2 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1 justify-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>editItem(item),
                                                                        className: "text-blue-600 hover:text-blue-800 transition",
                                                                        title: "Edit item",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-4 h-4",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                                lineNumber: 1209,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1208,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                        lineNumber: 1202,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    item.id !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>removeItem({
                                                                                id: item.id
                                                                            }),
                                                                        className: "text-red-600 hover:text-red-800 transition",
                                                                        title: "Delete item",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1219,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                        lineNumber: 1213,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1201,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1200,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    value: (item.qty * item.purchaseRate).toFixed(2),
                                                                    onChange: ()=>{},
                                                                    name: `item-${item.id}-baseAmount`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1226,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    value: (item.qty * item.purchaseRate * item.gst / 100).toFixed(2),
                                                                    onChange: ()=>{},
                                                                    name: `item-${item.id}-gstAmount`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1232,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    value: (item.qty * item.purchaseRate * item.gst / 2 / 100).toFixed(2),
                                                                    onChange: ()=>{},
                                                                    name: `item-${item.id}-cgstAmount`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1238,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    value: (item.qty * item.purchaseRate * item.gst / 2 / 100).toFixed(2),
                                                                    onChange: ()=>{},
                                                                    name: `item-${item.id}-sgstAmount`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1244,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    value: 0..toFixed(2),
                                                                    onChange: ()=>{},
                                                                    name: `item-${item.id}-igstAmount`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1250,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    value: item.totalQty || 0,
                                                                    name: `item-${item.id}-totalQty`,
                                                                    onChange: ()=>{}
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1256,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    value: item.totalFreeQty || 0,
                                                                    name: `item-${item.id}-totalFreeQty`,
                                                                    onChange: ()=>{}
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1262,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "hidden",
                                                                    value: item.currentStock || 0,
                                                                    name: `item-${item.id}-currentStock`,
                                                                    onChange: ()=>{}
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1268,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1225,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, item.tempId ?? item.id, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1163,
                                                    columnNumber: 37
                                                }, this)),
                                            purchaseBill.items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: 16,
                                                    className: "text-center py-6 text-gray-500 italic",
                                                    children: 'No items added yet. Click "Add Item" to begin.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1280,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                lineNumber: 1279,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1161,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                lineNumber: 1144,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1143,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                        lineNumber: 1142,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                lineNumber: 1130,
                columnNumber: 13
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-t-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold",
                                        children: editingItemData ? 'Edit Item' : 'Add New Item'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1298,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeModal,
                                        className: "text-white hover:text-gray-200 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                lineNumber: 1306,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1305,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1301,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                lineNumber: 1297,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1296,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 w-full max-w-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-medium text-gray-700",
                                                            children: "Item Code"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1321,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            ref: medicineDropdownRef,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "Search medicine",
                                                                    value: medicineSearches.modal || '',
                                                                    onChange: (e)=>setMedicineSearches((prev)=>({
                                                                                ...prev,
                                                                                modal: e.target.value
                                                                            })),
                                                                    onFocus: ()=>setEditingItem(-999),
                                                                    onKeyDown: (e)=>{
                                                                        const top = filteredMedicines[0];
                                                                        if (e.key === 'Enter' && top) {
                                                                            selectMedicine(top);
                                                                            e.preventDefault();
                                                                        }
                                                                    },
                                                                    className: "w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1323,
                                                                    columnNumber: 49
                                                                }, this),
                                                                editingItem === -999 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow max-h-48 overflow-y-auto",
                                                                    children: filteredMedicines.length > 0 ? filteredMedicines.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "px-3 py-2 hover:bg-blue-100 text-sm cursor-pointer",
                                                                            onMouseDown: ()=>selectMedicine(m),
                                                                            children: [
                                                                                m.itemCode,
                                                                                " - ",
                                                                                m.medicineName
                                                                            ]
                                                                        }, m.id, true, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1345,
                                                                            columnNumber: 65
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "px-3 py-2 text-sm text-gray-500",
                                                                        children: "No results found"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                        lineNumber: 1354,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1342,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1322,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1320,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Company"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1364,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: modalData.company || '',
                                                                    readOnly: true,
                                                                    className: "w-full px-2 py-1.5 text-xs border border-gray-300 rounded bg-gray-50 text-gray-700"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1365,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1363,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "HSN Code"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1373,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: modalData.hsnCode,
                                                                    readOnly: true,
                                                                    className: "w-full px-2 py-1.5 text-xs border border-gray-300 rounded bg-gray-50 text-gray-700"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1374,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1372,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1362,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Batch"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1386,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: modalData.batchNo,
                                                                    onChange: (e)=>setModalData((prev)=>({
                                                                                ...prev,
                                                                                batchNo: e.target.value
                                                                            })),
                                                                    // onBlur={handleBatchBlur}
                                                                    className: "w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
                                                                    placeholder: "Batch No"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1387,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1385,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Exp Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1402,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "MM-YYYY",
                                                                    value: medicineSearches[`modal-expiry`] || formatExpiry(modalData.expiryDate),
                                                                    onChange: (e)=>handleModalExpiryChange(e.target.value),
                                                                    className: "w-full px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-center",
                                                                    maxLength: 7,
                                                                    inputMode: "numeric"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1403,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1401,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1384,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Pur Qty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1418,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: modalData.qty || '',
                                                                    onChange: (e)=>{
                                                                        const qty = parseFloat(e.target.value) || 0;
                                                                        setModalData((prev)=>({
                                                                                ...prev,
                                                                                qty
                                                                            }));
                                                                        calculateRates({
                                                                            ...modalData,
                                                                            qty
                                                                        });
                                                                    },
                                                                    className: "w-20 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-center",
                                                                    placeholder: "0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1419,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1417,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Free"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1432,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    value: modalData.freeQty || '',
                                                                    onChange: (e)=>{
                                                                        const freeQty = parseFloat(e.target.value) || 0;
                                                                        setModalData((prev)=>({
                                                                                ...prev,
                                                                                freeQty
                                                                            }));
                                                                        calculateRates({
                                                                            ...modalData,
                                                                            freeQty
                                                                        });
                                                                    },
                                                                    className: "w-20 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-center",
                                                                    placeholder: "0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1433,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1431,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Pack Item"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1446,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: modalData.packItem,
                                                                    readOnly: true,
                                                                    className: "w-20 px-2 py-1.5 text-xs border border-gray-300 rounded bg-gray-50 text-gray-700 text-center"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1447,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1445,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1416,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "MRP"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1459,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    step: "0.01",
                                                                    value: modalData.mrp || '',
                                                                    onChange: (e)=>{
                                                                        const mrp = parseFloat(e.target.value) || 0;
                                                                        setModalData((prev)=>({
                                                                                ...prev,
                                                                                mrp
                                                                            }));
                                                                        calculateRates({
                                                                            ...modalData,
                                                                            mrp
                                                                        });
                                                                    },
                                                                    className: "w-25 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
                                                                    placeholder: "0.00"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1460,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1458,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Rate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1474,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    step: "0.01",
                                                                    value: modalData.rate || '',
                                                                    onChange: (e)=>{
                                                                        const rate = parseFloat(e.target.value) || 0;
                                                                        setModalData((prev)=>({
                                                                                ...prev,
                                                                                rate
                                                                            }));
                                                                        calculateRates({
                                                                            ...modalData,
                                                                            rate
                                                                        });
                                                                    },
                                                                    className: "w-25 px-2 py-1.5 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
                                                                    placeholder: "0.00"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1475,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1473,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1457,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1317,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1316,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3 w-full max-w-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "P. Rate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1499,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-blue-50 text-blue-900 font-medium",
                                                                    children: Number(calculatedValues.pRate || 0).toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1500,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1498,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "S. Rate"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1505,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-blue-50 text-blue-900 font-medium",
                                                                    children: Number(calculatedValues.sRate || 0).toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1506,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1504,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1497,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Item MRP"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1515,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-blue-50 text-blue-900 font-medium",
                                                                    children: (calculatedValues.itemMrp || 0).toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1516,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1514,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "GST"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1521,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-blue-50 text-blue-900 font-medium",
                                                                    children: [
                                                                        modalData.gst,
                                                                        "%"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1522,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1520,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1513,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Qty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1531,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-green-50 text-green-900 font-medium",
                                                                    children: calculatedValues.totalQty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1532,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1530,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs font-medium text-gray-700 mb-1",
                                                                    children: "Free Qty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1537,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-green-50 text-green-900 font-medium",
                                                                    children: calculatedValues.totalFreeQty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1538,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1536,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1529,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-medium text-gray-700 mb-1",
                                                            children: "Amount"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1546,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-33 px-2 py-1.5 text-xs border border-gray-300 rounded bg-yellow-50 text-yellow-900 font-medium",
                                                            children: [
                                                                "₹",
                                                                (calculatedValues.amount || 0).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1547,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1545,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 p-3 bg-gray-50 rounded-lg border",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                            className: "text-xs font-semibold text-gray-700 mb-2",
                                                            children: "Summary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1554,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1 text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Gross Amount:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1557,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "₹",
                                                                                (calculatedValues.grossAmount || 0).toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1558,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1556,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Tax Amount:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1561,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium",
                                                                            children: [
                                                                                "₹",
                                                                                (calculatedValues.taxAmount || 0).toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1562,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1560,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between border-t pt-1 font-semibold",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Net Amount:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1566,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "₹",
                                                                                (calculatedValues.netAmount || 0).toFixed(2)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                            lineNumber: 1567,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                    lineNumber: 1565,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                            lineNumber: 1555,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                    lineNumber: 1553,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                            lineNumber: 1494,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1493,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                lineNumber: 1314,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1313,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 px-4 py-3 rounded-b-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeModal,
                                        className: "px-4 py-2 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1579,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleModalSave,
                                        className: "px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded hover:from-blue-700 hover:to-blue-900 transition-colors",
                                        children: editingItemData ? 'Update' : 'Add'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1585,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                lineNumber: 1578,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1577,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                    lineNumber: 1294,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                lineNumber: 1293,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4 lg:p-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg sm:text-xl font-bold text-blue-900 mb-4",
                            children: "Summary"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1600,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-blue-300 rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-600 text-white p-2 text-center font-semibold text-sm",
                                                children: "Tax Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                lineNumber: 1606,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-blue-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "GST Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1609,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(purchaseBill.gstTotal || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1610,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 1608,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "CGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1613,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(purchaseBill.cgst || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1614,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 1612,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "SGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1617,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(purchaseBill.sgst || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1618,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 1616,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "IGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1621,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(purchaseBill.igst || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1622,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 1620,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Cess Amount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1625,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                step: "0.01",
                                                                value: purchaseBill.cessAmount,
                                                                onChange: (e)=>setPurchaseBill((prev)=>({
                                                                            ...prev,
                                                                            cessAmount: Number(e.target.value)
                                                                        })),
                                                                className: "w-20 px-2 py-1 text-sm border border-blue-300 rounded text-right font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1626,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 1624,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                lineNumber: 1607,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1605,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 1604,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-blue-300 rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-600 text-white p-2 text-center font-semibold text-sm",
                                                children: "Amount Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                lineNumber: 1641,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "divide-y divide-blue-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-green-50 font-bold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-green-900",
                                                                children: "Gross Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1644,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-green-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(purchaseBill.items.reduce((acc, item)=>acc + (item.totalAmount || 0), 0) + (purchaseBill.cessAmount || 0)).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1645,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 1643,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Round Off:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1653,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    Number(purchaseBill.roundOff || 0).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1654,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 1652,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Discount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1657,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                step: "0.01",
                                                                value: purchaseBill.discount,
                                                                onChange: (e)=>setPurchaseBill((prev)=>({
                                                                            ...prev,
                                                                            discount: Number(e.target.value)
                                                                        })),
                                                                className: "w-20 px-2 py-1 text-sm border border-blue-300 rounded text-right font-bold"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                                lineNumber: 1658,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                        lineNumber: 1656,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                lineNumber: 1642,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1640,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 1639,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:flex lg:items-center lg:justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg text-center shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium mb-1",
                                                children: "Total Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                lineNumber: 1673,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold",
                                                children: [
                                                    "₹",
                                                    Number(purchaseBill.items.reduce((acc, item)=>acc + (item.totalAmount || 0), 0) + (purchaseBill.cessAmount || 0)).toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                                lineNumber: 1674,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                        lineNumber: 1672,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 1671,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1602,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                    lineNumber: 1599,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                lineNumber: 1598,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md",
                    children: [
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 text-sm text-red-600 font-semibold bg-red-100 border border-red-300 p-2 rounded text-center",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1687,
                            columnNumber: 25
                        }, this),
                        successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-100 text-green-800 p-2 rounded mb-4 shadow text-sm font-medium text-center",
                            children: successMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1692,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                    lineNumber: 1685,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                lineNumber: 1684,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: savePurchaseBill,
                            className: "bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 1705,
                                    columnNumber: 25
                                }, this),
                                " Save Bill"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1701,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: cancelPurchaseBill,
                            className: "bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                                    lineNumber: 1712,
                                    columnNumber: 25
                                }, this),
                                " Cancel Bill"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                            lineNumber: 1708,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                    lineNumber: 1700,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
                lineNumber: 1699,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/Purchasebill/AddPurchasebill/page.tsx",
        lineNumber: 924,
        columnNumber: 9
    }, this);
};
_s(PurchaseBillPage, "TY3GZ5Nm7C54NXqE4tjsJk3rMvA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PurchaseBillPage;
const __TURBOPACK__default__export__ = PurchaseBillPage;
var _c;
__turbopack_context__.k.register(_c, "PurchaseBillPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_14dbae36._.js.map