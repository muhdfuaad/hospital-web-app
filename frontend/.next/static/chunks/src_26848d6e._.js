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
"[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-client] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript) <export default as FilePen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const PatientVisitHistoryPage = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('notes');
    const [patientId, setPatientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [patientInfo, setPatientInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        age: '',
        gender: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [todayAssignmentId, setTodayAssignmentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [todayAssignment, setTodayAssignment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [assignmentId, setAssignmentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [assignmentsWithData, setAssignmentsWithData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const formatDateLocal = (dateStr)=>{
        const d = new Date(dateStr);
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientVisitHistoryPage.useEffect": ()=>{
            const patient = searchParams.get('patientId');
            const assignment = searchParams.get('assignmentId');
            if (!patient) {
                setError('Patient ID is missing from the URL');
                setLoading(false);
                return;
            }
            setPatientId(patient);
            setAssignmentId(assignment);
        }
    }["PatientVisitHistoryPage.useEffect"], [
        searchParams
    ]);
    // New effect to watch for ?refresh=1 and trigger reload
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientVisitHistoryPage.useEffect": ()=>{
            const refresh = searchParams.get('refresh');
            if (refresh === '1') {
                setRefreshKey({
                    "PatientVisitHistoryPage.useEffect": (prev)=>prev + 1
                }["PatientVisitHistoryPage.useEffect"]);
                const newParams = new URLSearchParams(searchParams);
                newParams.delete('refresh');
                router.replace(`${window.location.pathname}${newParams.toString() ? '?' + newParams.toString() : ''}`);
            }
        }
    }["PatientVisitHistoryPage.useEffect"], [
        searchParams,
        router
    ]);
    // Fetch patient data and all related consultation data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientVisitHistoryPage.useEffect": ()=>{
            if (!patientId) return;
            const fetchData = {
                "PatientVisitHistoryPage.useEffect.fetchData": async ()=>{
                    try {
                        setLoading(true);
                        setError('');
                        // 1) Fetch patient info
                        const patientRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/Hpforms/patient/${patientId}`);
                        const patientData = patientRes.data || {};
                        setPatientInfo({
                            name: patientData.name || '',
                            age: patientData.age || '',
                            gender: patientData.gender || ''
                        });
                        // 2) Fetch all assignments
                        const assignmentsRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/PatientAssignments/byPatientId/${patientId}`);
                        let patientAssignments = [];
                        if (Array.isArray(assignmentsRes.data)) {
                            patientAssignments = assignmentsRes.data.map({
                                "PatientVisitHistoryPage.useEffect.fetchData": (a)=>({
                                        ...a,
                                        doctorId: (a.DoctorId ?? a.doctorId ?? '').toString(),
                                        assignmentId: a.AssignmentId ?? a.assignmentId
                                    })
                            }["PatientVisitHistoryPage.useEffect.fetchData"]).sort({
                                "PatientVisitHistoryPage.useEffect.fetchData": (a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime()
                            }["PatientVisitHistoryPage.useEffect.fetchData"]);
                        }
                        // 3) Build assignmentsWithData (always fetch notes/reviews)
                        const assignmentsWithDataPromises = patientAssignments.map({
                            "PatientVisitHistoryPage.useEffect.fetchData.assignmentsWithDataPromises": async (assignment)=>{
                                let doctorName = '-';
                                if (assignment.doctorId) {
                                    try {
                                        const docRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/Doctors/by-doc-id/${assignment.doctorId}`);
                                        doctorName = docRes?.data?.docName ?? '-';
                                    } catch  {
                                        doctorName = '-';
                                    }
                                }
                                // Always fetch notes
                                let notes = [];
                                try {
                                    const notesRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/DoctorsNotes/by-assignment/${assignment.assignmentId}`);
                                    notes = Array.isArray(notesRes.data) ? notesRes.data : [];
                                } catch (err) {
                                    if (err?.response?.status !== 404) console.error(`[DEBUG] error fetching notes for ${assignment.assignmentId}`, err);
                                }
                                // Always fetch reviews
                                let reviews = [];
                                try {
                                    const reviewsRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/api/DoctorsReviews/by-assignment/${assignment.assignmentId}`);
                                    reviews = Array.isArray(reviewsRes.data) ? reviewsRes.data : [];
                                } catch (err) {
                                    if (err?.response?.status !== 404) console.error(`[DEBUG] error fetching reviews for ${assignment.assignmentId}`, err);
                                }
                                return {
                                    assignment: {
                                        ...assignment,
                                        doctorName,
                                        hasNote: notes.length > 0,
                                        hasReview: reviews.length > 0
                                    },
                                    notes,
                                    reviews
                                };
                            }
                        }["PatientVisitHistoryPage.useEffect.fetchData.assignmentsWithDataPromises"]);
                        const assignmentsWithDataResult = await Promise.all(assignmentsWithDataPromises);
                        setAssignmentsWithData(assignmentsWithDataResult);
                        // 4) Detect separately when finding today's assignment:
                        const today = formatDateLocal(new Date().toISOString());
                        const todayAssignmentData = assignmentsWithDataResult.find({
                            "PatientVisitHistoryPage.useEffect.fetchData.todayAssignmentData": (item)=>formatDateLocal(item.assignment.date) === today
                        }["PatientVisitHistoryPage.useEffect.fetchData.todayAssignmentData"]);
                        setTodayAssignmentId(todayAssignmentData?.assignment.assignmentId || null);
                        setTodayAssignment(todayAssignmentData?.assignment || null);
                    } catch (err) {
                        console.error('Error fetching data:', err);
                        setError('Failed to load patient data and consultation history');
                    } finally{
                        setLoading(false);
                    }
                }
            }["PatientVisitHistoryPage.useEffect.fetchData"];
            fetchData();
        }
    }["PatientVisitHistoryPage.useEffect"], [
        patientId,
        refreshKey
    ]);
    // Helper functions to check if new buttons should be enabled
    const canAddNewNote = ()=>{
        const today = formatDateLocal(new Date().toISOString());
        const todayData = assignmentsWithData.find((item)=>formatDateLocal(item.assignment.date) === today);
        return !!todayData && todayData.notes.length === 0;
    };
    const canAddNewReview = ()=>{
        const today = formatDateLocal(new Date().toISOString());
        const todayData = assignmentsWithData.find((item)=>formatDateLocal(item.assignment.date) === today);
        return !!todayData && todayData.reviews.length === 0;
    };
    // Filter assignments to only show those with completed forms
    const assignmentsWithNotes = assignmentsWithData.filter((item)=>item.assignment.hasNote);
    const assignmentsWithReviews = assignmentsWithData.filter((item)=>item.assignment.hasReview);
    const handleNewNote = ()=>{
        if (canAddNewNote()) {
            router.push(`/doctorsnote?patientId=${patientId}&assignmentId=${todayAssignmentId}`);
        } else if (!todayAssignmentId) {
            setError('No assignment found for today. Please assign this patient first.');
        } else if (todayAssignment?.hasNote) {
            setError('Note has already been submitted for today\'s assignment.');
        }
    };
    const handleNewReview = ()=>{
        if (canAddNewReview()) {
            router.push(`/doctorsreview?patientId=${patientId}&assignmentId=${todayAssignmentId}`);
        } else if (!todayAssignmentId) {
            setError('No assignment found for today. Please assign this patient first.');
        } else if (todayAssignment?.hasReview) {
            setError('Review has already been submitted for today\'s assignment.');
        }
    };
    const handleEditNote = (assignmentId)=>{
        router.push(`/doctorsnote?patientId=${patientId}&assignmentId=${assignmentId}`);
    };
    const handleEditReview = (assignmentId)=>{
        router.push(`/doctorsreview?patientId=${patientId}&assignmentId=${assignmentId}`);
    };
    const handlePrintNote = (assignmentId)=>{
        router.push(`/doctorsnote/view?patientId=${patientId}&assignmentId=${assignmentId}`);
    };
    const handlePrintReview = (assignmentId)=>{
        router.push(`/doctorsreview/view?patientId=${patientId}&assignmentId=${assignmentId}`);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-blue-600 text-lg",
                children: "Loading consultation data..."
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                lineNumber: 277,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
            lineNumber: 276,
            columnNumber: 13
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-lg shadow-lg border border-red-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 text-red-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                            lineNumber: 287,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-medium",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                            lineNumber: 288,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                    lineNumber: 286,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                lineNumber: 285,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
            lineNumber: 284,
            columnNumber: 13
        }, this);
    }
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
                                children: "Doctor Consultations"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-6 h-6 text-blue-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                lineNumber: 301,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-lg text-blue-200",
                        children: "Patient Consultation History & Medical Records"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                        lineNumber: 303,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                lineNumber: 298,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 sm:p-4 lg:p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 sm:space-y-6",
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
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: patientId
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Total Visits:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: assignmentsWithData.filter((a)=>a.notes.length > 0 || a.reviews.length > 0).length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold",
                                                    children: "Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: new Date().toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                lineNumber: 313,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                            lineNumber: 312,
                            columnNumber: 21
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
                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 37
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-blue-600",
                                                children: patientInfo.name + " / " + patientInfo.age + " / " + patientInfo.gender
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                lineNumber: 343,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                            lineNumber: 342,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex border-b border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('reviews'),
                                            className: `flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${activeTab === 'reviews' ? 'bg-blue-600 text-white border-b-2 border-blue-600' : 'bg-gray-50 text-blue-600 hover:bg-blue-50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 33
                                                }, this),
                                                "Reviews"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab('notes'),
                                            className: `flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${activeTab === 'notes' ? 'bg-blue-600 text-white border-b-2 border-blue-600' : 'bg-gray-50 text-blue-600 hover:bg-blue-50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 33
                                                }, this),
                                                "Notes"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                    lineNumber: 359,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        activeTab === 'reviews' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-bold text-blue-900 uppercase tracking-wide",
                                                            children: "Investigations & Medications by Visit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleNewReview,
                                                            disabled: !canAddNewReview(),
                                                            className: "flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                            title: !todayAssignmentId ? "No assignment for today. Please assign this patient first." : todayAssignment?.hasReview ? "Review has already been submitted for today's assignment" : "Add new medical review",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                    lineNumber: 403,
                                                                    columnNumber: 45
                                                                }, this),
                                                                "New Review"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 37
                                                }, this),
                                                assignmentsWithReviews.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full border-collapse border border-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "bg-blue-50",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[12%]",
                                                                            children: "Assignment ID"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 413,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[12%]",
                                                                            children: "Visit Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 416,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[20%]",
                                                                            children: "Diagnosis"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-center font-semibold text-blue-900 w-[18%]",
                                                                            children: "Actions"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 422,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                lineNumber: 411,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: assignmentsWithReviews.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-gray-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-sm",
                                                                                children: item.assignment.assignmentId
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 430,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-sm",
                                                                                children: new Date(item.assignment.date).toLocaleDateString()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 433,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-sm",
                                                                                children: item.notes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-1",
                                                                                    children: item.notes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-xs",
                                                                                            children: note.historyOfIllness
                                                                                        }, index, false, {
                                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                            lineNumber: 440,
                                                                                            columnNumber: 77
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                    lineNumber: 438,
                                                                                    columnNumber: 69
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-400",
                                                                                    children: "No diagnosis"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                    lineNumber: 446,
                                                                                    columnNumber: 69
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 436,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleEditReview(item.assignment.assignmentId),
                                                                                        className: "text-blue-600 hover:text-blue-800 p-1.5 rounded hover:bg-blue-100 transition-all",
                                                                                        title: "Edit Review",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePen$3e$__["FilePen"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                            lineNumber: 456,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                        lineNumber: 451,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handlePrintReview(item.assignment.assignmentId),
                                                                                        className: "text-green-600 hover:text-green-800 p-1.5 rounded hover:bg-green-100 transition-all ml-2",
                                                                                        title: "View / Print",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                            lineNumber: 465,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                        lineNumber: 460,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 449,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, item.assignment.assignmentId, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 57
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-8 text-gray-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
                                                            className: "w-12 h-12 mx-auto mb-3 text-gray-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg",
                                                            children: "No reviews found for this patient."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: "Complete a review form to see entries here."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                            lineNumber: 386,
                                            columnNumber: 33
                                        }, this),
                                        activeTab === 'notes' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-bold text-blue-900 uppercase tracking-wide",
                                                            children: "Medical Notes by Visit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 486,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleNewNote,
                                                            disabled: !canAddNewNote(),
                                                            className: "flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                                            title: !todayAssignmentId ? "No assignment for today. Please assign this patient first." : todayAssignment?.hasNote ? "Note has already been submitted for today's assignment" : "Add new consultation note",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 45
                                                                }, this),
                                                                "New Note"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 37
                                                }, this),
                                                assignmentsWithNotes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-x-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                        className: "w-full border-collapse border border-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    className: "bg-blue-50",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[12%]",
                                                                            children: "Assignment ID"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 511,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[12%]",
                                                                            children: "Visit Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 514,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[20%]",
                                                                            children: "Diagnosis"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 517,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[15%]",
                                                                            children: "Doctor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 520,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                            className: "border border-gray-300 px-3 py-2 text-center font-semibold text-blue-900 w-[18%]",
                                                                            children: "Actions"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                            lineNumber: 523,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                children: assignmentsWithNotes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        className: "hover:bg-gray-50",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-sm",
                                                                                children: item.assignment.assignmentId
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 531,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-sm",
                                                                                children: new Date(item.assignment.date).toLocaleDateString()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 534,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-sm",
                                                                                children: item.notes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-1",
                                                                                    children: item.notes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-xs",
                                                                                            children: note.historyOfIllness
                                                                                        }, index, false, {
                                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                            lineNumber: 541,
                                                                                            columnNumber: 77
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                    lineNumber: 539,
                                                                                    columnNumber: 69
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-400",
                                                                                    children: "No diagnosis"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                    lineNumber: 547,
                                                                                    columnNumber: 69
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 537,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-sm",
                                                                                children: item.assignment.doctorName || '-'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 550,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                className: "border border-gray-300 px-3 py-2 text-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handleEditNote(item.assignment.assignmentId),
                                                                                        className: "text-blue-600 hover:text-blue-800 p-1.5 rounded hover:bg-blue-100 transition-all",
                                                                                        title: "Edit Note",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePen$3e$__["FilePen"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                            lineNumber: 559,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                        lineNumber: 554,
                                                                                        columnNumber: 65
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        onClick: ()=>handlePrintNote(item.assignment.assignmentId),
                                                                                        className: "text-green-600 hover:text-green-800 p-1.5 rounded hover:bg-green-100 transition-all ml-2",
                                                                                        title: "View / Print",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                                            className: "w-4 h-4"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                            lineNumber: 567,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                        lineNumber: 562,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                                lineNumber: 553,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, item.assignment.assignmentId, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                        lineNumber: 530,
                                                                        columnNumber: 57
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                                lineNumber: 528,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-8 text-gray-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "w-12 h-12 mx-auto mb-3 text-gray-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg",
                                                            children: "No notes found for this patient."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: "Complete a note form to see entries here."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                                    lineNumber: 577,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                            lineNumber: 358,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                    lineNumber: 310,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
                lineNumber: 309,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/doctor-consultations/details/page.tsx",
        lineNumber: 296,
        columnNumber: 9
    }, this);
};
_s(PatientVisitHistoryPage, "RFcGKaXXGDbVE/tIvCj8qmVBXCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = PatientVisitHistoryPage;
const __TURBOPACK__default__export__ = PatientVisitHistoryPage;
var _c;
__turbopack_context__.k.register(_c, "PatientVisitHistoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_26848d6e._.js.map