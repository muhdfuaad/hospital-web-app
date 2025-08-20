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
                                    setSearchValue(`${selected.name}`);
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
                            setSearchValue(`${item.name}`);
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
"[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL;
const PurchaseBillPage = ()=>{
    _s();
    const [purchaseBill, setPurchaseBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        purchaseId: 0,
        date: new Date().toISOString().split('T')[0],
        supplierId: 0,
        supplierName: '',
        supplierAddress: '',
        supplierLocation: '',
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
                discountPercent: 0,
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
    // Filter medicines based on search term
    const getFilteredMedicines = (itemId)=>{
        const searchTerm = medicineSearches[itemId] || '';
        return medicines.filter((medicine)=>medicine.medicineName?.toLowerCase().startsWith(searchTerm.toLowerCase()));
    };
    // Add new item row
    const addItem = ()=>{
        const newItem = {
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
            discountPercent: 0,
            totalAmount: 0,
            baseAmount: 0,
            gstAmount: 0,
            cgstAmount: 0,
            sgstAmount: 0,
            igstAmount: 0
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
        if (purchaseBill.isCancelled || purchaseBill.finalTotal > 0) {
            alert("This bill is finalized or cancelled. Items cannot be deleted.");
            return;
        }
        setPurchaseBill((prev)=>({
                ...prev,
                items: prev.items.filter((item)=>item.id !== itemId)
            }));
    };
    // Update item
    const updateItem = (itemId, field, value)=>{
        setPurchaseBill((prev)=>{
            const updatedItems = prev.items.map((item)=>{
                if (item.id === itemId) {
                    const updatedItem = {
                        ...item
                    };
                    // Parse and set value
                    if (field === 'qty' || field === 'freeQty' || field === 'purchaseRate' || field === 'salesRate' || field === 'gst' || field === 'mrp' || field === 'discountPercent') {
                        updatedItem[field] = parseFloat(value) || 0;
                    } else {
                        updatedItem[field] = value;
                    }
                    // Recalculate
                    const baseBeforeDiscount = updatedItem.qty * updatedItem.purchaseRate;
                    const discountAmount = baseBeforeDiscount * (updatedItem.discountPercent || 0) / 100;
                    const baseAmount = baseBeforeDiscount - discountAmount;
                    const gstAmount = baseAmount * updatedItem.gst / 100;
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
            const gstTotal = updatedItems.reduce((sum, item)=>sum + (item.gstAmount || 0), 0);
            const cgst = updatedItems.reduce((sum, item)=>sum + (item.cgstAmount || 0), 0);
            const sgst = updatedItems.reduce((sum, item)=>sum + (item.sgstAmount || 0), 0);
            const igst = updatedItems.reduce((sum, item)=>sum + (item.igstAmount || 0), 0);
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
    const isKeralaGST = (gstNo)=>gstNo?.slice(0, 2) === '32';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PurchaseBillPage.useEffect": ()=>{
            const grossTotal = purchaseBill.items.reduce({
                "PurchaseBillPage.useEffect.grossTotal": (sum, item)=>sum + item.qty * item.purchaseRate
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
            const roundOff = Math.round((grossTotal + gstTotal - purchaseBill.discount) * 100) / 100 - (grossTotal + gstTotal - purchaseBill.discount);
            const finalTotal = grossTotal + gstTotal - purchaseBill.discount + roundOff + purchaseBill.cessAmount;
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
                                hsnCode: m.hsnCode
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
                                    medicineName: matchedMedicine?.medicineName ?? ''
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
    // Save purchase bill
    const savePurchaseBill = async ()=>{
        try {
            // ✅ Recalculate before sending
            const grossTotal = purchaseBill.items.reduce((sum, item)=>sum + item.qty * item.purchaseRate, 0);
            const gstTotal = purchaseBill.items.reduce((sum, item)=>sum + (item.gstAmount || 0), 0);
            const discount = purchaseBill.discount || 0;
            const cessAmount = purchaseBill.cessAmount || 0;
            const actualTotal = grossTotal + gstTotal - discount + cessAmount;
            const roundedTotal = Math.round(actualTotal);
            const roundOff = +(roundedTotal - actualTotal).toFixed(2); // Ensure only 2 decimals
            const finalTotal = roundedTotal;
            const updatedBill = {
                ...purchaseBill,
                grossTotal,
                gstTotal,
                roundOff,
                finalTotal
            };
            setPurchaseBill(updatedBill); // Optional, only if you want to sync state
            const { purchaseId, ...restBill } = updatedBill;
            const payload = {
                ...restBill,
                items: updatedBill.items.map((item)=>({
                        medicineId: item.medicineId,
                        batchNo: item.batchNo,
                        expiryDate: item.expiryDate,
                        qty: item.qty,
                        freeQty: item.freeQty,
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
                    })),
                isCancelled: updatedBill.isCancelled || false
            };
            const res = await fetch(`${API_BASE}/api/PurchaseBills`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                const errMessage = await res.text(); // or .json() if your API sends structured error
                throw new Error(`Failed to save bill: ${errMessage}`);
            }
            const savedBill = await res.json(); // this contains the generated PurchaseId
            setPurchaseBill((prev)=>({
                    ...prev,
                    purchaseId: savedBill.purchaseId
                }));
            alert('Purchase bill saved successfully!');
            // ✅ Success: show only success message
            setSuccessMessage(editId ? '✅ Medicine updated successfully!' : '✅ Medicine added successfully!');
            setTimeout(()=>setSuccessMessage(''), 5000);
            setTimeout(()=>router.push('/Purchasebill'), 600);
        } catch (err) {
            console.error('Failed to save purchase bill:', err);
            alert('Failed to save purchase bill!');
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
    const handleExpiryChange = (input, itemId)=>{
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
        setMedicineSearches((prev)=>({
                ...prev,
                [`expiry-${itemId}`]: formattedInput
            }));
        // If full valid date, save to item and clear temp state
        if (month.length === 2 && year.length === 4) {
            const dateValue = `${year}-${month}-01`;
            updateItem(itemId, 'expiryDate', dateValue);
            setMedicineSearches((prev)=>{
                const copy = {
                    ...prev
                };
                delete copy[`expiry-${itemId}`];
                return copy;
            });
        }
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
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                    lineNumber: 577,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                lineNumber: 576,
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
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "purchaseId",
                                                    value: purchaseBill.purchaseId,
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900 font-medium focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 587,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "sm:col-span-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 600,
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
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-12 sm:col-span-7",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Supplier"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 613,
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
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 45
                                                            }, void 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 612,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 585,
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
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: purchaseBill.supplierAddress,
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 700,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: purchaseBill.supplierLocation || "",
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 709,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 695,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 584,
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
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 727,
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
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 726,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-2/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Inv Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 739,
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
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 738,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 724,
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
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: purchaseBill.gst,
                                                    readOnly: true,
                                                    className: "w-full px-2 py-1.5 text-sm border border-blue-300 rounded-md bg-blue-50 text-blue-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 753,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 751,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-2/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold text-blue-900 mb-1",
                                                    children: "Payment"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 763,
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
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 769,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Cash",
                                                            children: "Cash"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 770,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Other",
                                                            children: "Other"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 764,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 762,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 749,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 722,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                    lineNumber: 582,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                lineNumber: 581,
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
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                lineNumber: 782,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addItem,
                                disabled: isCancelled || isFinalized,
                                className: `bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 flex items-center gap-2 font-medium shadow-lg transition-all duration-300 ${isCancelled || isFinalized ? 'opacity-50 cursor-not-allowed' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                        lineNumber: 790,
                                        columnNumber: 25
                                    }, this),
                                    " Add Item"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                lineNumber: 783,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                        lineNumber: 781,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-lg relative overflow-visible z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full overflow-visible",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-[800px] w-full border border-blue-300 text-xs sm:text-sm overflow-visible",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Item Code"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 800,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Medicine"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Pack Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 803,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Batch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-left text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Expiry"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 805,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Qty"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 806,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Free"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Disc %"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "P.Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 809,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "S.Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "MRP"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "GST%"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 813,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium border-r border-blue-500",
                                                    children: "HSN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-3 text-center text-xs sm:text-sm font-medium",
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                            lineNumber: 799,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                        lineNumber: 798,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: purchaseBill.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: `${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'} hover:bg-blue-100 transition-colors duration-200 ${isCancelled ? 'opacity-60' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.itemCode,
                                                            onChange: (e)=>updateItem(item.id, 'itemCode', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-16 px-1 py-1 text-xs border border-blue-300 rounded ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 824,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "relative border-r border-blue-200 px-2 py-2 z-10 overflow-visible",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchableSelect"], {
                                                                label: "",
                                                                value: item.medicineId?.toString() || '',
                                                                searchValue: medicineSearches[item.id] || '',
                                                                setSearchValue: (val)=>setMedicineSearches((prev)=>({
                                                                            ...prev,
                                                                            [item.id]: val
                                                                        })),
                                                                showDropdown: editingItem === item.id && !isCancelled && !isFinalized,
                                                                setShowDropdown: (open)=>setEditingItem(open ? item.id : null),
                                                                items: getFilteredMedicines(item.id).map((m)=>({
                                                                        id: m.id.toString(),
                                                                        name: m.medicineName
                                                                    })),
                                                                onSelect: (medicineId)=>{
                                                                    const selected = medicines.find((m)=>m.id.toString() === medicineId);
                                                                    if (!selected) return;
                                                                    setPurchaseBill((prev)=>({
                                                                            ...prev,
                                                                            items: prev.items.map((pItem)=>{
                                                                                if (pItem.id !== item.id) return pItem;
                                                                                const baseBeforeDiscount = pItem.qty * selected.purchaseRate;
                                                                                const discountAmount = baseBeforeDiscount * (pItem.discountPercent || 0) / 100;
                                                                                const baseAmount = baseBeforeDiscount - discountAmount;
                                                                                const gstAmount = baseAmount * selected.gst / 100;
                                                                                let cgstAmount = 0, sgstAmount = 0, igstAmount = 0;
                                                                                if (prev.taxType === 'intra') {
                                                                                    cgstAmount = gstAmount / 2;
                                                                                    sgstAmount = gstAmount / 2;
                                                                                } else {
                                                                                    igstAmount = gstAmount;
                                                                                }
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
                                                                                    baseAmount,
                                                                                    gstAmount,
                                                                                    cgstAmount,
                                                                                    sgstAmount,
                                                                                    igstAmount,
                                                                                    totalAmount: baseAmount + gstAmount
                                                                                };
                                                                            })
                                                                        }));
                                                                    setMedicineSearches((prev)=>({
                                                                            ...prev,
                                                                            [item.id]: ''
                                                                        }));
                                                                },
                                                                renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-semibold",
                                                                                children: item.id
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                                lineNumber: 896,
                                                                                columnNumber: 61
                                                                            }, void 0),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-gray-600",
                                                                                children: item.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                                lineNumber: 897,
                                                                                columnNumber: 61
                                                                            }, void 0)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                        lineNumber: 895,
                                                                        columnNumber: 57
                                                                    }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 835,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 834,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.type || '',
                                                            readOnly: true,
                                                            className: "w-16 px-1 py-1 border border-blue-300 rounded text-xs bg-gray-100 cursor-not-allowed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.packItem || '',
                                                            readOnly: true,
                                                            className: "w-8 px-1 py-1 text-xs border border-blue-300 rounded bg-gray-100 cursor-not-allowed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 912,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 911,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: item.batchNo,
                                                            onChange: (e)=>updateItem(item.id, 'batchNo', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-20 px-2 py-1 border border-blue-300 rounded text-xs ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 920,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 919,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-1 py-1 border-r border-blue-200 text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "MM-YYYY",
                                                            value: medicineSearches[`expiry-${item.id}`] || formatExpiry(item.expiryDate),
                                                            onChange: (e)=>handleExpiryChange(e.target.value, item.id),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-[4.5rem] px-2 py-1 border border-blue-300 rounded text-xs text-center tracking-wider ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`,
                                                            maxLength: 7,
                                                            inputMode: "numeric",
                                                            pattern: "\\d{2}-\\d{4}"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 931,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-12 px-1 py-1 border border-blue-300 rounded text-xs ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 946,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: item.freeQty,
                                                            onChange: (e)=>updateItem(item.id, 'freeQty', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-12 px-2 py-1 border border-blue-300 rounded text-xs text-center ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: 0,
                                                            max: 100,
                                                            value: item.discountPercent,
                                                            onChange: (e)=>updateItem(item.id, 'discountPercent', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-12 px-1 py-1 border border-blue-300 rounded text-xs ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 979,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 978,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            value: Number(item.purchaseRate) || '',
                                                            onChange: (e)=>updateItem(item.id, 'purchaseRate', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-16 px-2 py-1 border border-blue-300 rounded text-xs text-center ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 992,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 991,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            step: "0.01",
                                                            value: item.salesRate ?? '',
                                                            onChange: (e)=>updateItem(item.id, 'salesRate', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-16 px-2 py-1 border border-blue-300 rounded text-xs text-center ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 1004,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            value: item.mrp || '',
                                                            onChange: (e)=>updateItem(item.id, 'mrp', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-16 px-1 py-1 text-xs border border-blue-300 rounded ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 1016,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1015,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: purchaseBill.items.find((i)=>i.id === item.id)?.gst ?? '',
                                                            onChange: (e)=>updateItem(item.id, 'gst', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-8 px-2 py-1 border border-blue-300 rounded text-xs ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 1027,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm font-bold text-green-700",
                                                        children: [
                                                            "₹",
                                                            item.totalAmount.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1037,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 border-r border-blue-200 text-center text-xs sm:text-sm",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: purchaseBill.items.find((i)=>i.id === item.id)?.hsnCode ?? '',
                                                            onChange: (e)=>updateItem(item.id, 'hsnCode', e.target.value),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `w-18 px-2 py-1 border border-blue-300 rounded text-xs ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 1041,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1040,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeItem(item.id),
                                                            disabled: isCancelled || isFinalized,
                                                            className: `text-red-600 hover:text-red-800 transition ${isCancelled || isFinalized ? 'opacity-40 cursor-not-allowed' : ''}`,
                                                            title: isCancelled ? 'Bill is cancelled' : isFinalized ? 'Finalized bill cannot be modified' : 'Delete item',
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1067,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                            lineNumber: 1052,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1051,
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
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1073,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "hidden",
                                                                value: (item.qty * item.purchaseRate * item.gst / 100).toFixed(2),
                                                                onChange: ()=>{},
                                                                name: `item-${item.id}-gstAmount`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1079,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "hidden",
                                                                value: (item.qty * item.purchaseRate * item.gst / 2 / 100).toFixed(2),
                                                                onChange: ()=>{},
                                                                name: `item-${item.id}-cgstAmount`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1085,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "hidden",
                                                                value: (item.qty * item.purchaseRate * item.gst / 2 / 100).toFixed(2),
                                                                onChange: ()=>{},
                                                                name: `item-${item.id}-sgstAmount`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1091,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "hidden",
                                                                value: 0..toFixed(2),
                                                                onChange: ()=>{},
                                                                name: `item-${item.id}-igstAmount`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1097,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1072,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                lineNumber: 820,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                        lineNumber: 818,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                lineNumber: 797,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 796,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                        lineNumber: 795,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                lineNumber: 780,
                columnNumber: 13
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
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 1115,
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
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                lineNumber: 1121,
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
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    purchaseBill.gstTotal.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1125,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1123,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "CGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1128,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    purchaseBill.cgst.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1129,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1127,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "SGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1132,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    purchaseBill.sgst.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1133,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1131,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "IGST:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1136,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    purchaseBill.igst.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1137,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1135,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Cess Amount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1140,
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
                                                                disabled: isCancelled || isFinalized,
                                                                className: `w-20 px-2 py-1 text-sm border border-blue-300 rounded text-right font-bold ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1141,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1139,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                lineNumber: 1122,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                        lineNumber: 1120,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 1119,
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
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                lineNumber: 1159,
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
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1162,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-green-900",
                                                                children: [
                                                                    "₹",
                                                                    (purchaseBill.items.reduce((acc, item)=>acc + (item.totalAmount || 0), 0) + (purchaseBill.cessAmount || 0)).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1163,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1161,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Round Off:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1168,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-blue-900",
                                                                children: [
                                                                    "₹",
                                                                    purchaseBill.roundOff.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1169,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1167,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center p-2 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-blue-900",
                                                                children: "Discount:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1172,
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
                                                                disabled: isCancelled || isFinalized,
                                                                className: `w-20 px-2 py-1 text-sm border border-blue-300 rounded text-right font-bold ${isCancelled || isFinalized ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                                lineNumber: 1173,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                        lineNumber: 1171,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                lineNumber: 1160,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                        lineNumber: 1158,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 1157,
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
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                lineNumber: 1191,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold",
                                                children: [
                                                    "₹",
                                                    purchaseBill.finalTotal.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                                lineNumber: 1192,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                        lineNumber: 1190,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 1189,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 1117,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                    lineNumber: 1114,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                lineNumber: 1113,
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
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 1203,
                            columnNumber: 25
                        }, this),
                        successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-100 text-green-800 p-2 rounded mb-4 shadow text-sm font-medium text-center",
                            children: successMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 1208,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                    lineNumber: 1201,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                lineNumber: 1200,
                columnNumber: 13
            }, this),
            (isCancelled || isFinalized) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4 lg:p-6 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        isCancelled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-100 text-red-800 p-3 rounded-lg font-bold text-lg border border-red-300",
                            children: "⚠️ This Purchase Bill has been CANCELLED"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 1220,
                            columnNumber: 29
                        }, this),
                        isFinalized && !isCancelled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-100 text-green-800 p-3 rounded-lg font-bold text-lg border border-green-300",
                            children: "✅ This Purchase Bill has been FINALIZED"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 1225,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                    lineNumber: 1218,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                lineNumber: 1217,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-blue-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: savePurchaseBill,
                            disabled: isCancelled,
                            className: `bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300 ${isCancelled ? 'opacity-50 cursor-not-allowed' : ''}`,
                            title: isCancelled ? 'Cannot save cancelled bill' : 'Save Purchase Bill',
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 1244,
                                    columnNumber: 25
                                }, this),
                                " ",
                                isEditMode ? 'Update Bill' : 'Save Bill'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 1236,
                            columnNumber: 21
                        }, this),
                        !isCancelled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: cancelPurchaseBill,
                            className: "bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg hover:from-red-700 hover:to-red-900 flex items-center gap-2 font-bold text-lg shadow-lg transition-all duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                                    lineNumber: 1252,
                                    columnNumber: 29
                                }, this),
                                " Cancel Bill"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                            lineNumber: 1248,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                    lineNumber: 1235,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
                lineNumber: 1234,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/Purchasebill/addPurchasebill/page.tsx",
        lineNumber: 574,
        columnNumber: 9
    }, this);
};
_s(PurchaseBillPage, "FuIJX+9400H9tp0KcAMATl2RVns=", false, function() {
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

//# sourceMappingURL=src_451ccf32._.js.map