(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/app/(dashboard)/nursesreview/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const NursesReviewForm = ()=>{
    _s();
    const handleAddCustomProcedure = async ()=>{
        if (newProcedureName.trim()) {
            const trimmedName = newProcedureName.trim();
            // ✅ Update local state
            setFormData((prev)=>({
                    ...prev,
                    customProcedures: [
                        ...prev.customProcedures,
                        trimmedName
                    ],
                    cells: {
                        ...prev.cells,
                        [trimmedName]: false
                    },
                    descriptions: {
                        ...prev.descriptions,
                        [trimmedName]: ''
                    }
                }));
            setAllProcedures((prev)=>[
                    ...prev,
                    trimmedName
                ]);
            setNewProcedureName('');
            setShowAddInput(false);
            // ✅ Send to backend using Axios
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/api/NursesReviews/procedures', {
                    name: trimmedName
                });
            } catch (err) {
                if (err?.response?.status !== 409) {
                    console.error('❌ Failed to add procedure to backend:', err?.response?.data || err.message);
                } else {
                    console.warn('⚠️ Procedure already exists.');
                }
            }
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            handleAddCustomProcedure();
        }
    };
    const [allProcedures, setAllProcedures] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleEditProcedure = async (column)=>{
        const newName = prompt("Edit procedure name:", column);
        if (!newName || newName.trim() === '' || newName === column) return;
        const trimmedName = newName.trim();
        // ✅ Update local state
        setFormData((prev)=>{
            const updatedCells = {
                ...prev.cells
            };
            const updatedDescriptions = {
                ...prev.descriptions
            };
            const updatedProcedures = prev.customProcedures.map((p)=>p === column ? trimmedName : p);
            updatedCells[trimmedName] = updatedCells[column];
            updatedDescriptions[trimmedName] = updatedDescriptions[column];
            delete updatedCells[column];
            delete updatedDescriptions[column];
            return {
                ...prev,
                cells: updatedCells,
                descriptions: updatedDescriptions,
                customProcedures: updatedProcedures
            };
        });
        setAllProcedures((prev)=>prev.map((proc)=>proc === column ? trimmedName : proc));
        // ✅ Correct Axios PUT request with raw string payload
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/api/NursesReviews/procedures/${encodeURIComponent(column)}`, JSON.stringify(trimmedName), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (err) {
            console.error('❌ Failed to rename procedure:', err?.response?.data || err.message);
        }
    };
    const handleDeleteProcedure = async (column)=>{
        if (!confirm(`Are you sure you want to delete "${column}"?`)) return;
        // ✅ Update local state
        setFormData((prev)=>{
            const updatedCells = {
                ...prev.cells
            };
            const updatedDescriptions = {
                ...prev.descriptions
            };
            delete updatedCells[column];
            delete updatedDescriptions[column];
            return {
                ...prev,
                customProcedures: prev.customProcedures.filter((p)=>p !== column),
                cells: updatedCells,
                descriptions: updatedDescriptions
            };
        });
        setAllProcedures((prev)=>prev.filter((proc)=>proc !== column));
        // ✅ Axios DELETE call
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/api/NursesReviews/procedures/${encodeURIComponent(column)}`);
        } catch (err) {
            if (err?.response?.status !== 404) {
                console.error('❌ Failed to delete procedure from backend:', err?.response?.data || err.message);
            }
        }
    };
    // 🔁 Fetch all available procedures from backend
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NursesReviewForm.useEffect": ()=>{
            const fetchProcedures = {
                "NursesReviewForm.useEffect.fetchProcedures": async ()=>{
                    try {
                        const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/NursesReviews/procedures");
                        const names = data.map({
                            "NursesReviewForm.useEffect.fetchProcedures.names": (proc)=>proc.name
                        }["NursesReviewForm.useEffect.fetchProcedures.names"]);
                        setAllProcedures(names);
                    } catch (err) {
                        console.error("Failed to fetch procedures", err);
                    }
                }
            }["NursesReviewForm.useEffect.fetchProcedures"];
            fetchProcedures();
        }
    }["NursesReviewForm.useEffect"], []);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        patientId: '',
        reviewId: '',
        date: new Date().toISOString().split('T')[0],
        cells: allProcedures.reduce({
            "NursesReviewForm.useState": (acc, col)=>({
                    ...acc,
                    [col]: false
                })
        }["NursesReviewForm.useState"], {}),
        descriptions: allProcedures.reduce({
            "NursesReviewForm.useState": (acc, col)=>({
                    ...acc,
                    [col]: ''
                })
        }["NursesReviewForm.useState"], {}),
        customProcedures: []
    });
    const [assignmentId, setAssignmentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [patientId, setPatientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [patientInfo, setPatientInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        age: '',
        gender: ''
    });
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isEditMode = !!formData.reviewId;
    // Get today's date in YYYY-MM-DD format
    const getTodaysDate = ()=>{
        const today = new Date();
        return today.toISOString().split('T')[0];
    };
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getTodaysDate());
    const [team, setTeam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newProcedureName, setNewProcedureName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showAddInput, setShowAddInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCellToggle = (column)=>{
        setFormData((prev)=>({
                ...prev,
                cells: {
                    ...prev.cells,
                    [column]: !prev.cells[column]
                }
            }));
    };
    const handleDescriptionChange = (column, value)=>{
        setFormData((prev)=>({
                ...prev,
                descriptions: {
                    ...prev.descriptions,
                    [column]: value
                }
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NursesReviewForm.useEffect": ()=>{
            setFormData({
                "NursesReviewForm.useEffect": (prev)=>{
                    const updatedCells = {
                        ...prev.cells
                    };
                    const updatedDescriptions = {
                        ...prev.descriptions
                    };
                    allProcedures.forEach({
                        "NursesReviewForm.useEffect": (proc)=>{
                            if (!(proc in updatedCells)) updatedCells[proc] = false;
                            if (!(proc in updatedDescriptions)) updatedDescriptions[proc] = '';
                        }
                    }["NursesReviewForm.useEffect"]);
                    return {
                        ...prev,
                        cells: updatedCells,
                        descriptions: updatedDescriptions
                    };
                }
            }["NursesReviewForm.useEffect"]);
        }
    }["NursesReviewForm.useEffect"], [
        allProcedures
    ]);
    // ✅ Fetch assignmentId + patientId + basic info
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NursesReviewForm.useEffect": ()=>{
            const assignment = searchParams.get('assignmentId');
            if (!assignment) return;
            if (assignmentId === assignment) return;
            setAssignmentId(assignment);
            const fetchAssignmentAndPatient = {
                "NursesReviewForm.useEffect.fetchAssignmentAndPatient": async ()=>{
                    try {
                        // ✅ Fetch assignment info
                        const assignmentRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/PatientAssignments/byAssignmentId/${assignment}`);
                        const assignmentData = assignmentRes.data;
                        if (!assignmentData?.patientId) return;
                        setPatientId(assignmentData.patientId);
                        setFormData({
                            "NursesReviewForm.useEffect.fetchAssignmentAndPatient": (prev)=>({
                                    ...prev,
                                    reviewId: assignment,
                                    patientId: assignmentData.patientId
                                })
                        }["NursesReviewForm.useEffect.fetchAssignmentAndPatient"]);
                        // ✅ Fetch patient info using patientId
                        const patientRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/Hpforms/patient/${assignmentData.patientId}`);
                        const patientData = patientRes.data;
                        if (!patientData) return;
                        setPatientInfo({
                            name: patientData.name || '',
                            age: patientData.age || '',
                            gender: patientData.gender || ''
                        });
                    } catch (err) {
                        console.error('Failed to fetch assignment or patient data:', err);
                    }
                }
            }["NursesReviewForm.useEffect.fetchAssignmentAndPatient"];
            fetchAssignmentAndPatient();
        }
    }["NursesReviewForm.useEffect"], [
        searchParams,
        assignmentId
    ]);
    // to prefill data in form when Edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NursesReviewForm.useEffect": ()=>{
            const assignmentId = searchParams.get('assignmentId');
            if (!assignmentId) return;
            const fetchData = {
                "NursesReviewForm.useEffect.fetchData": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/NursesReviews/review/${assignmentId}`);
                        const data = res?.data || {};
                        const formattedDate = data?.date?.split?.('T')?.[0] || new Date().toISOString().split('T')[0];
                        setFormData({
                            "NursesReviewForm.useEffect.fetchData": (prev)=>({
                                    ...prev,
                                    id: data?.id ?? null,
                                    patientId: data?.patientId ?? null,
                                    reviewId: data?.reviewId ?? null,
                                    date: formattedDate,
                                    cells: data?.cells || {},
                                    descriptions: data?.descriptions || {},
                                    customProcedures: data?.customProcedures || []
                                })
                        }["NursesReviewForm.useEffect.fetchData"]);
                    } catch (err) {
                        if (err?.response?.status === 404) {
                            console.log('No review found. Prefill skipped.');
                        } else {
                            console.error('Error fetching review:', err?.message || err);
                        }
                    }
                }
            }["NursesReviewForm.useEffect.fetchData"];
            fetchData();
        }
    }["NursesReviewForm.useEffect"], [
        searchParams
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const payload = {
            id: formData.id,
            patientId: formData.patientId,
            reviewId: formData.reviewId,
            date: formData.date,
            cellsJson: JSON.stringify(formData.cells),
            descriptionsJson: JSON.stringify(formData.descriptions),
            customProceduresJson: JSON.stringify(formData.customProcedures)
        };
        try {
            if (formData.id) {
                // PUT for edit mode
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/api/NursesReviews/${formData.id}`, payload);
            } else {
                // POST for create mode
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/NursesReviews", payload);
            }
            setSubmitStatus("success");
            setSubmitMessage("Nurse’s review submitted successfully.");
            setTimeout(()=>{
                router.push(`/nurse-consultations/details?patientId=${patientId}&assignmentId=${assignmentId}&refresh=1`);
            }, 1000);
        } catch (error) {
            console.error("❌ Submission error:", error?.response?.data || error.message);
            setSubmitStatus("error");
            setSubmitMessage("Failed to submit the Nurse’s review. Please try again.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 text-center sm:p-6 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-3xl font-light",
                                children: "Nurse's Review"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                lineNumber: 354,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-6 h-6 text-blue-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                lineNumber: 357,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                        lineNumber: 353,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-lg text-blue-200",
                        children: "Daily Homecare Procedure Report"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                        lineNumber: 360,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                lineNumber: 352,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm sm:text-base font-medium text-blue-900 mb-4 px-2 sm:px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Patient ID:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: formData.patientId || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                    lineNumber: 370,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: "Review ID:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: formData.reviewId || '-'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Date :"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                            lineNumber: 387,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: formData.date,
                                            onChange: (e)=>setFormData((prev)=>({
                                                        ...prev,
                                                        date: e.target.value
                                                    })),
                                            className: "..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                            lineNumber: 368,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                        lineNumber: 367,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-4 rounded-lg shadow-sm border border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-s font-semibold mb-1 uppercase tracking-wide",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-900",
                                            children: "Name :"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 33
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-blue-600",
                                            children: patientInfo.name + " / " + patientInfo.age + " / " + patientInfo.gender
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                lineNumber: 403,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                            lineNumber: 400,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                        lineNumber: 399,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow-lg overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border border-gray-300 border-collapse table-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gradient-to-r from-blue-900 to-blue-700 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider",
                                                    style: {
                                                        width: '30%'
                                                    },
                                                    children: "Care Procedure"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider",
                                                    style: {
                                                        width: '20%'
                                                    },
                                                    children: "Performed?"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider",
                                                    style: {
                                                        width: '50%'
                                                    },
                                                    children: "Description"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                            lineNumber: 419,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                        lineNumber: 418,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            allProcedures.map((column, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "hover:bg-blue-50 transition-colors duration-200 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-gray-300 px-4 py-3 text-blue-900 font-medium flex items-center justify-between",
                                                            children: column
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-gray-300 px-4 py-3 text-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-8 h-8 mx-auto border-2 border-gray-300 rounded cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center",
                                                                onClick: ()=>handleCellToggle(column),
                                                                children: formData.cells[column] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-5 h-5 text-green-600 font-bold",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 3,
                                                                        d: "M5 13l4 4L19 7"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                                        lineNumber: 468,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                            lineNumber: 455,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "border border-gray-300 px-4 py-3",
                                                            children: formData.cells[column] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: formData.descriptions[column],
                                                                onChange: (e)=>handleDescriptionChange(column, e.target.value),
                                                                className: "w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                                                                placeholder: "Add description..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, colIndex, true, {
                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 37
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-4 py-3",
                                                        children: !showAddInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowAddInput(true),
                                                            className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 49
                                                                }, this),
                                                                "Add Other Procedure"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 45
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: newProcedureName,
                                                                    onChange: (e)=>setNewProcedureName(e.target.value),
                                                                    onKeyPress: handleKeyPress,
                                                                    className: "flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                                                                    placeholder: "Enter procedure name...",
                                                                    autoFocus: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: handleAddCustomProcedure,
                                                                    className: "px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 text-sm",
                                                                    children: "Add"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        setShowAddInput(false);
                                                                        setNewProcedureName('');
                                                                    },
                                                                    className: "px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors duration-200 text-sm",
                                                                    children: "Cancel"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                                    lineNumber: 518,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-4 py-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "border border-gray-300 px-4 py-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                lineNumber: 417,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                            lineNumber: 416,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                        lineNumber: 415,
                        columnNumber: 17
                    }, this),
                    submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mb-4 p-3 rounded-lg text-center text-sm font-semibold ${submitStatus === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`,
                        children: submitMessage
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                        lineNumber: 541,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center pt-6 print:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            onClick: handleSubmit,
                            className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl flex items-center gap-2 sm:gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "w-5 h-5 sm:w-6 sm:h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                                    lineNumber: 558,
                                    columnNumber: 25
                                }, this),
                                isEditMode ? "Update Nurse's Review" : "Submit Nurse's Review"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                            lineNumber: 553,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                        lineNumber: 552,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
                lineNumber: 365,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/nursesreview/page.tsx",
        lineNumber: 350,
        columnNumber: 9
    }, this);
};
_s(NursesReviewForm, "vxI9mUjSheakZtZ50OWvh88dnzM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NursesReviewForm;
const __TURBOPACK__default__export__ = NursesReviewForm;
var _c;
__turbopack_context__.k.register(_c, "NursesReviewForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_8305a9c7._.js.map