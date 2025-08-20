(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/medicines/addMedicine/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MedicineFormPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MedicineFormPage() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('BASIC DETAILS');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        itemCode: '',
        medicineName: '',
        genericName: '',
        gst: '',
        billCode: '',
        itemShort: '',
        rack: '',
        shelf: '',
        companyId: 0,
        company: '',
        typeId: 0,
        type: '',
        ingredients: '',
        cess: '',
        discount: '',
        rol: '',
        packItem: '',
        hsnCode: '',
        purchaseRate: '',
        salesRate: '',
        lastBill: '',
        lastPurchase: '',
        quantity: ''
    });
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [types, setTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCompanyModal, setShowCompanyModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTypeModal, setShowTypeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCompany, setNewCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newType, setNewType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const editId = searchParams.get('edit');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedicineFormPage.useEffect": ()=>{
            async function fetchDropdownsAndMedicine() {
                try {
                    // Fetch dropdowns first
                    const [companiesRes, typesRes] = await Promise.all([
                        fetch('https://localhost:7112/api/MedicineCompanies'),
                        fetch('https://localhost:7112/api/MedicineTypes')
                    ]);
                    if (!companiesRes.ok || !typesRes.ok) {
                        throw new Error('Failed to fetch dropdowns');
                    }
                    const companiesData = await companiesRes.json();
                    const typesData = await typesRes.json();
                    setCompanies(companiesData.map({
                        "MedicineFormPage.useEffect.fetchDropdownsAndMedicine": (c)=>({
                                id: c.companyId,
                                name: c.companyName
                            })
                    }["MedicineFormPage.useEffect.fetchDropdownsAndMedicine"]));
                    setTypes(typesData.map({
                        "MedicineFormPage.useEffect.fetchDropdownsAndMedicine": (t)=>({
                                id: t.typeId,
                                name: t.typeName
                            })
                    }["MedicineFormPage.useEffect.fetchDropdownsAndMedicine"]));
                    // If editing, fetch medicine
                    if (editId) {
                        setIsEditMode(true);
                        const res = await fetch(`https://localhost:7112/api/Medicines/${editId}`);
                        if (!res.ok) {
                            console.error('Failed to fetch medicine data for edit');
                            return;
                        }
                        const data = await res.json();
                        setFormData({
                            itemCode: data.itemCode ?? '',
                            medicineName: data.medicineName ?? '',
                            companyId: Number(data.companyId ?? 0),
                            typeId: Number(data.typeId ?? 0),
                            company: data.company ?? '',
                            genericName: data.genericName ?? '',
                            gst: data.gst ?? '',
                            billCode: data.billCode ?? '',
                            itemShort: data.itemShort ?? '',
                            rack: data.rack ?? '',
                            shelf: data.shelf ?? '',
                            type: data.type ?? '',
                            ingredients: data.ingredients ?? '',
                            cess: data.cess ?? '',
                            discount: data.discount ?? '',
                            rol: data.rol ?? '',
                            packItem: data.packItem ?? '',
                            hsnCode: data.hsnCode ?? '',
                            purchaseRate: data.purchaseRate ?? '',
                            salesRate: data.salesRate ?? '',
                            lastBill: data.lastBill ? data.lastBill.split('T')[0] : '',
                            lastPurchase: data.lastPurchase ? data.lastPurchase.split('T')[0] : '',
                            quantity: data.quantity ?? ''
                        });
                    }
                } catch (error) {
                    console.error('Dropdown/Medicine fetch error:', error);
                }
            }
            fetchDropdownsAndMedicine();
        }
    }["MedicineFormPage.useEffect"], [
        editId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedicineFormPage.useEffect": ()=>{
            async function fetchDropdowns() {
                try {
                    const [companiesRes, typesRes] = await Promise.all([
                        fetch('https://localhost:7112/api/MedicineCompanies'),
                        fetch('https://localhost:7112/api/MedicineTypes')
                    ]);
                    if (!companiesRes.ok || !typesRes.ok) {
                        throw new Error('Failed to fetch companies or types');
                    }
                    const companiesRaw = await companiesRes.json();
                    const typesRaw = await typesRes.json();
                    const mappedCompanies = companiesRaw.map({
                        "MedicineFormPage.useEffect.fetchDropdowns.mappedCompanies": (c)=>({
                                id: c.companyId,
                                name: c.companyName
                            })
                    }["MedicineFormPage.useEffect.fetchDropdowns.mappedCompanies"]);
                    const mappedTypes = typesRaw.map({
                        "MedicineFormPage.useEffect.fetchDropdowns.mappedTypes": (t)=>({
                                id: t.typeId,
                                name: t.typeName
                            })
                    }["MedicineFormPage.useEffect.fetchDropdowns.mappedTypes"]);
                    setCompanies(mappedCompanies);
                    setTypes(mappedTypes);
                } catch (error) {
                    console.error('Dropdown fetch error:', error);
                }
            }
            fetchDropdowns();
        }
    }["MedicineFormPage.useEffect"], []);
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSave = async ()=>{
        try {
            const safeDateToISOString = (dateStr)=>{
                if (!dateStr) return null;
                const parsed = Date.parse(dateStr);
                return !isNaN(parsed) ? new Date(parsed).toISOString() : null;
            };
            const payload = {
                itemCode: formData.itemCode,
                medicineName: formData.medicineName,
                companyId: Number(formData.companyId),
                genericName: formData.genericName,
                gst: formData.gst,
                billCode: formData.billCode,
                itemShort: formData.itemShort,
                rack: formData.rack,
                shelf: formData.shelf,
                typeId: Number(formData.typeId),
                ingredients: formData.ingredients,
                cess: formData.cess,
                discount: formData.discount,
                rol: formData.rol,
                packItem: formData.packItem,
                hsnCode: formData.hsnCode,
                purchaseRate: formData.purchaseRate ? parseFloat(formData.purchaseRate) : null,
                salesRate: formData.salesRate ? parseFloat(formData.salesRate) : null,
                lastBill: safeDateToISOString(formData.lastBill),
                lastPurchase: safeDateToISOString(formData.lastPurchase),
                quantity: formData.quantity ? parseInt(formData.quantity) : 0
            };
            const url = editId ? `https://localhost:7112/api/Medicines/${editId}` : 'https://localhost:7112/api/Medicines';
            const method = editId ? 'PUT' : 'POST';
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                // ❌ Log but do NOT display error to user
                const errorText = await response.text();
                console.error('❌ API Save Error:', errorText);
                return;
            }
            // ✅ Success: show only success message
            setSuccessMessage(editId ? '✅ Medicine updated successfully!' : '✅ Medicine added successfully!');
            setTimeout(()=>setSuccessMessage(''), 5000);
            handleReset();
            setTimeout(()=>router.push('/medicines'), 1000);
        } catch (error) {
            // ❌ Log unexpected error (e.g. network/server) silently
            console.error('❌ handleSave exception:', error);
        }
    };
    const handleReset = ()=>{
        setFormData({
            itemCode: '',
            medicineName: '',
            genericName: '',
            gst: '',
            billCode: '',
            itemShort: '',
            rack: '',
            shelf: '',
            companyId: 0,
            company: '',
            typeId: 0,
            type: '',
            ingredients: '',
            cess: '',
            discount: '',
            rol: '',
            packItem: '',
            hsnCode: '',
            purchaseRate: '',
            salesRate: '',
            lastBill: '',
            lastPurchase: '',
            quantity: ''
        });
    };
    const handleDelete = ()=>{
        if (confirm('Are you sure you want to delete this medicine?')) {
            handleReset();
            setSuccessMessage('Medicine deleted successfully!');
            setTimeout(()=>{
                router.push('/medicines');
            }, 1000);
        }
    };
    // Add these functions to handle API calls
    const fetchCompanies = async ()=>{
        try {
            const response = await fetch('https://localhost:7112/api/MedicineCompanies');
            const data = await response.json();
            setCompanies(data.map((c)=>({
                    id: c.companyId,
                    name: c.companyName
                })));
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    };
    const fetchTypes = async ()=>{
        try {
            const response = await fetch('https://localhost:7112/api/MedicineTypes');
            const data = await response.json();
            setTypes(data.map((t)=>({
                    id: t.typeId,
                    name: t.typeName
                })));
        } catch (error) {
            console.error('Error fetching types:', error);
        }
    };
    const handleAddCompany = async ()=>{
        if (newCompany.trim()) {
            try {
                const response = await fetch('https://localhost:7112/api/MedicineCompanies', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        companyName: newCompany.trim()
                    })
                });
                if (response.ok) {
                    const newCompanyData = await response.json();
                    const newEntry = {
                        id: newCompanyData.companyId,
                        name: newCompanyData.companyName
                    };
                    await fetchCompanies(); // ✅ Refresh company list
                    setFormData((prev)=>({
                            ...prev,
                            companyId: newEntry.id,
                            company: newEntry.name
                        }));
                    setNewCompany('');
                    setShowCompanyModal(false);
                } else {
                    const errText = await response.text();
                    console.error('Failed to add company:', errText);
                }
            } catch (error) {
                console.error('Error adding company:', error);
            }
        }
    };
    const handleAddType = async ()=>{
        if (newType.trim()) {
            try {
                const response = await fetch('https://localhost:7112/api/MedicineTypes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        typeName: newType.trim()
                    })
                });
                if (response.ok) {
                    const newTypeData = await response.json();
                    const newEntry = {
                        id: newTypeData.typeId,
                        name: newTypeData.typeName
                    };
                    await fetchTypes(); // ✅ Refresh type list
                    setFormData((prev)=>({
                            ...prev,
                            typeId: newEntry.id,
                            type: newEntry.name
                        }));
                    setNewType('');
                    setShowTypeModal(false);
                } else {
                    const errText = await response.text();
                    console.error('Failed to add type:', errText);
                }
            } catch (error) {
                console.error('Error adding type:', error);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-sm mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-600 text-white px-6 py-4 rounded-t-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-medium",
                                children: "Medicine Details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                lineNumber: 409,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex border-b border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('BASIC DETAILS'),
                                    className: `px-6 py-3 text-sm font-medium ${activeTab === 'BASIC DETAILS' ? 'bg-gray-200 text-gray-700 border-b-2 border-gray-400' : 'text-gray-500 hover:text-gray-700'}`,
                                    children: "BASIC DETAILS"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 414,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('BATCH'),
                                    className: `px-6 py-3 text-sm font-medium ${activeTab === 'BATCH' ? 'bg-gray-200 text-gray-700 border-b-2 border-gray-400' : 'text-gray-500 hover:text-gray-700'}`,
                                    children: "BATCH"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this),
                        errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 text-sm text-red-600 font-semibold bg-red-100 border border-red-300 p-2 rounded",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this),
                        successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-100 text-green-800 p-2 rounded mb-4 shadow text-sm font-medium",
                            children: successMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this),
                        activeTab === 'BASIC DETAILS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.itemCode,
                                                        onChange: (e)=>handleInputChange('itemCode', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "Bill Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.billCode,
                                                        onChange: (e)=>handleInputChange('billCode', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "Item Short"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.itemShort,
                                                        onChange: (e)=>handleInputChange('itemShort', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 486,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        required: true,
                                                        type: "text",
                                                        value: formData.medicineName,
                                                        onChange: (e)=>handleInputChange('medicineName', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 485,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "Company"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        required: true,
                                                        value: formData.companyId,
                                                        onChange: (e)=>{
                                                            const selectedId = parseInt(e.target.value);
                                                            const selectedCompany = companies.find((c)=>c.id === selectedId);
                                                            setFormData((prev)=>({
                                                                    ...prev,
                                                                    companyId: selectedId,
                                                                    company: selectedCompany ? selectedCompany.name : ''
                                                                }));
                                                        },
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: 0,
                                                                children: "Select Company"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 23
                                                            }, this),
                                                            companies.filter((company)=>company?.id != null && company?.name).map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: company.id,
                                                                    children: company.name
                                                                }, company.id, false, {
                                                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 27
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowCompanyModal(true),
                                                        className: "bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 522,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "Generic Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.genericName,
                                                        onChange: (e)=>handleInputChange('genericName', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 532,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "R.O.L"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.rol,
                                                        onChange: (e)=>handleInputChange('rol', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "Pack Item"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.packItem,
                                                        onChange: (e)=>handleInputChange('packItem', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "HSN Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.hsnCode,
                                                        onChange: (e)=>handleInputChange('hsnCode', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 565,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                        children: "Purchase Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.purchaseRate,
                                                        onChange: (e)=>handleInputChange('purchaseRate', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 w-20 text-left",
                                                        children: "Sales Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: formData.salesRate,
                                                        onChange: (e)=>handleInputChange('salesRate', e.target.value),
                                                        className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 576,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Storage Location"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-16 text-left",
                                                                children: "Rack"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 602,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.rack,
                                                                onChange: (e)=>handleInputChange('rack', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 603,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-16 text-left",
                                                                children: "Shelf"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 609,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.shelf,
                                                                onChange: (e)=>handleInputChange('shelf', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 599,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Medicine Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-16 text-left",
                                                                children: "Type"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 623,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: formData.typeId,
                                                                onChange: (e)=>{
                                                                    const selectedId = parseInt(e.target.value);
                                                                    const selectedType = types.find((t)=>t.id === selectedId);
                                                                    setFormData((prev)=>({
                                                                            ...prev,
                                                                            typeId: selectedId,
                                                                            type: selectedType ? selectedType.name : ''
                                                                        }));
                                                                },
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 0,
                                                                        children: "Select Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                        lineNumber: 637,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    types.filter((type)=>type?.id != null && type?.name).map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: type.id,
                                                                            children: type.name
                                                                        }, type.id, false, {
                                                                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                            lineNumber: 641,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 624,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowTypeModal(true),
                                                                className: "bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium transition-colors",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 646,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 620,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Key Ingredients"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-16 text-left",
                                                                children: "Ingredients"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 660,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.ingredients,
                                                                onChange: (e)=>handleInputChange('ingredients', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 657,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Tax Information"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 672,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-16 text-left",
                                                                children: "GST %"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.gst,
                                                                onChange: (e)=>handleInputChange('gst', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 675,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-16 text-left",
                                                                children: "Cess"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.cess,
                                                                onChange: (e)=>handleInputChange('cess', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 682,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 673,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 671,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-1",
                                                        children: "Discount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 693,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-16 text-left",
                                                                children: "Disc %"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 695,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.discount,
                                                                onChange: (e)=>handleInputChange('discount', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 696,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 692,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-100 p-4 rounded-md mt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-gray-500 mb-3",
                                                        children: "Stock Info"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                                children: "Last Bill"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.lastBill,
                                                                onChange: (e)=>handleInputChange('lastBill', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                                children: "Last Purchase"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 717,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.lastPurchase,
                                                                onChange: (e)=>handleInputChange('lastPurchase', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 718,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700 w-24 text-left",
                                                                children: "Quantity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 728,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.quantity,
                                                                onChange: (e)=>handleInputChange('quantity', e.target.value),
                                                                className: "flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                                lineNumber: 729,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                                lineNumber: 706,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                        lineNumber: 597,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                lineNumber: 448,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 447,
                            columnNumber: 13
                        }, this),
                        activeTab === 'BATCH' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500 text-center py-8",
                                children: "Batch details will be implemented here"
                            }, void 0, false, {
                                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                lineNumber: 745,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 744,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 px-6 py-4 flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    className: "bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors",
                                    children: isEditMode ? 'Update' : 'Save'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 753,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleReset,
                                    className: "bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 759,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDelete,
                                    className: "bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 765,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 752,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this),
            showCompanyModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-medium",
                                    children: "Add New Company"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 781,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCompanyModal(false),
                                    className: "text-white hover:text-gray-300 text-xl font-bold",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 782,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 780,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Company Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 790,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newCompany,
                                    onChange: (e)=>setNewCompany(e.target.value),
                                    placeholder: "Enter company name",
                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    onKeyPress: (e)=>e.key === 'Enter' && handleAddCompany()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 791,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 789,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 px-6 py-4 flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCompanyModal(false),
                                    className: "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 801,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddCompany,
                                    className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors",
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 807,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 800,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                    lineNumber: 779,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                lineNumber: 778,
                columnNumber: 9
            }, this),
            showTypeModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-medium",
                                    children: "Add New Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 823,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowTypeModal(false),
                                    className: "text-white hover:text-gray-300 text-xl font-bold",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 824,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 822,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Type Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 832,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: newType,
                                    onChange: (e)=>setNewType(e.target.value),
                                    placeholder: "Enter type name",
                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    onKeyPress: (e)=>e.key === 'Enter' && handleAddType()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 833,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 831,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 px-6 py-4 flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowTypeModal(false),
                                    className: "bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 843,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleAddType,
                                    className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors",
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                                    lineNumber: 849,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                            lineNumber: 842,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                    lineNumber: 821,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
                lineNumber: 820,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/medicines/addMedicine/page.tsx",
        lineNumber: 404,
        columnNumber: 5
    }, this);
}
_s(MedicineFormPage, "HLDCeBPOBsyyFB1gTxlAlX+Vy3M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MedicineFormPage;
var _c;
__turbopack_context__.k.register(_c, "MedicineFormPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_medicines_addMedicine_page_tsx_c7cd5e09._.js.map