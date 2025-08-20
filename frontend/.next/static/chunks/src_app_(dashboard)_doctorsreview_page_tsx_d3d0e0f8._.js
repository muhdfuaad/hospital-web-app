(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/(dashboard)/doctorsreview/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/combobox/combobox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$venetian$2d$mask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VenetianMask$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/venetian-mask.js [app-client] (ecmascript) <export default as VenetianMask>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const DoctorsReviewForm = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        patientId: '',
        reviewId: '',
        date: new Date().toISOString().split('T')[0],
        investigations: [
            {
                id: 1,
                investigation: '',
                findings: ''
            }
        ],
        medications: [
            {
                id: 1,
                medicine: '',
                prescription: '',
                remarks: ''
            }
        ]
    });
    const [assignmentId, setAssignmentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [patientId, setPatientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [patientInfo, setPatientInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        age: '',
        gender: ''
    });
    // Medicine dropdown states
    const [medicines, setMedicines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [medicineDropdownOpen, setMedicineDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [medicineSearchTerm, setMedicineSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Prescription dropdown options
    const prescriptionOptions = [
        '1-0-0',
        '0-1-0',
        '0-0-1',
        '1-1-0',
        '1-0-1',
        '0-1-1',
        '1-1-1',
        '1-1-0-0',
        '1-0-1-0',
        '1-0-0-1',
        '0-1-0-1',
        '1-1-1-0',
        '1-1-0-1',
        '1-0-1-1',
        'As needed',
        'Before meals',
        'After meals',
        'At bedtime',
        'Every 4 hours',
        'Every 6 hours',
        'Every 8 hours',
        'Every 12 hours',
        'Once daily',
        'Twice daily',
        'Three times daily',
        'Four times daily'
    ];
    // Get today's date in YYYY-MM-DD format
    const getTodaysDate = ()=>{
        const today = new Date();
        return today.toISOString().split('T')[0];
    };
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getTodaysDate());
    const [investigations, setInvestigations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            investigation: '',
            findings: ''
        }
    ]);
    const [medications, setMedications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            medicine: '',
            prescription: '',
            remarks: ''
        }
    ]);
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // ✅ Fetch medicines from API
    // Fetch medicines from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorsReviewForm.useEffect": ()=>{
            const fetchMedicines = {
                "DoctorsReviewForm.useEffect.fetchMedicines": async ()=>{
                    try {
                        const res = await fetch('https://localhost:7112/api/Medicines/dropdown');
                        if (!res.ok) {
                            throw new Error('Failed to fetch medicines');
                        }
                        const medicineData = await res.json();
                        setMedicines(medicineData);
                    } catch (error) {
                        console.error('Error fetching medicines:', error);
                    }
                }
            }["DoctorsReviewForm.useEffect.fetchMedicines"];
            fetchMedicines();
        }
    }["DoctorsReviewForm.useEffect"], []);
    // Filter medicines based on search term
    const getFilteredMedicines = (medicationId)=>{
        const searchTerm = medicineSearchTerm[medicationId] || '';
        return medicines.filter((medicine)=>{
            if (!medicine || !medicine.medicineName) return false;
            return medicine.medicineName.toLowerCase().startsWith(searchTerm.toLowerCase());
        });
    };
    const addInvestigation = ()=>{
        const newId = investigations.length + 1;
        setInvestigations([
            ...investigations,
            {
                id: newId,
                investigation: '',
                findings: ''
            }
        ]);
    };
    // Fix for investigation functions
    const removeInvestigation = (id)=>{
        if (investigations.length > 1) {
            setInvestigations(investigations.filter((item)=>item.id !== id));
        }
    };
    const updateInvestigation = (id, field, value)=>{
        setInvestigations(investigations.map((item)=>item.id === id ? {
                ...item,
                [field]: value
            } : item));
    };
    // Fix for medication functions
    const addMedication = ()=>{
        const newId = medications.length + 1;
        setMedications([
            ...medications,
            {
                id: newId,
                medicine: '',
                prescription: '',
                remarks: ''
            }
        ]);
    };
    const removeMedication = (id)=>{
        if (medications.length > 1) {
            setMedications(medications.filter((item)=>item.id !== id));
            // Clean up dropdown states for removed medication
            setMedicineDropdownOpen((prev)=>{
                const newState = {
                    ...prev
                };
                delete newState[id];
                return newState;
            });
            setMedicineSearchTerm((prev)=>{
                const newState = {
                    ...prev
                };
                delete newState[id];
                return newState;
            });
        }
    };
    const updateMedication = (id, field, value)=>{
        setMedications(medications.map((item)=>item.id === id ? {
                ...item,
                [field]: value
            } : item));
    };
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isEditMode = !!formData.reviewId;
    // ✅ Fetch assignmentId + patientId + basic info
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorsReviewForm.useEffect": ()=>{
            const assignment = searchParams.get('assignmentId');
            if (!assignment) return; // skip if not yet available
            // Prevent re-triggering fetch if already fetched
            if (assignmentId === assignment) return;
            setAssignmentId(assignment);
            fetch(`https://localhost:7112/api/PatientAssignments/byAssignmentId/${assignment}`).then({
                "DoctorsReviewForm.useEffect": (res)=>res.json()
            }["DoctorsReviewForm.useEffect"]).then({
                "DoctorsReviewForm.useEffect": (assignmentData)=>{
                    if (!assignmentData?.patientId) return;
                    setPatientId(assignmentData.patientId);
                    setFormData({
                        "DoctorsReviewForm.useEffect": (prev)=>({
                                ...prev,
                                reviewId: assignment,
                                patientId: assignmentData.patientId
                            })
                    }["DoctorsReviewForm.useEffect"]);
                    return fetch(`https://localhost:7112/api/Hpforms/patient/${assignmentData.patientId}`);
                }
            }["DoctorsReviewForm.useEffect"]).then({
                "DoctorsReviewForm.useEffect": (res)=>res?.json()
            }["DoctorsReviewForm.useEffect"]).then({
                "DoctorsReviewForm.useEffect": (patientData)=>{
                    if (!patientData) return;
                    setPatientInfo({
                        name: patientData.name || '',
                        age: patientData.age || '',
                        gender: patientData.gender || ''
                    });
                }
            }["DoctorsReviewForm.useEffect"]).catch({
                "DoctorsReviewForm.useEffect": ()=>{}
            }["DoctorsReviewForm.useEffect"]);
        }
    }["DoctorsReviewForm.useEffect"], [
        searchParams,
        assignmentId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DoctorsReviewForm.useEffect": ()=>{
            const reviewIdFromUrl = searchParams.get("assignmentId");
            if (!reviewIdFromUrl) return;
            // Set form reviewId and fetch from backend
            setFormData({
                "DoctorsReviewForm.useEffect": (prev)=>({
                        ...prev,
                        reviewId: reviewIdFromUrl
                    })
            }["DoctorsReviewForm.useEffect"]);
            fetch(`https://localhost:7112/api/DoctorsReviews/review/${reviewIdFromUrl}`).then({
                "DoctorsReviewForm.useEffect": (res)=>{
                    if (!res.ok) throw new Error("Failed to fetch review data");
                    return res.json();
                }
            }["DoctorsReviewForm.useEffect"]).then({
                "DoctorsReviewForm.useEffect": (data)=>{
                    // Set basic form data
                    setFormData({
                        "DoctorsReviewForm.useEffect": (prev)=>({
                                ...prev,
                                reviewId: data.reviewId || "",
                                patientId: data.patientId || "",
                                date: data.date?.split("T")[0] || ""
                            })
                    }["DoctorsReviewForm.useEffect"]);
                    // ✅ Set investigations with 'id'
                    setInvestigations((data.investigations || []).map({
                        "DoctorsReviewForm.useEffect": (inv)=>({
                                id: inv.id || 0,
                                investigation: inv.investigationName || "",
                                findings: inv.findings || ""
                            })
                    }["DoctorsReviewForm.useEffect"]));
                    // ✅ Set medications with 'id'
                    setMedications((data.medications || []).map({
                        "DoctorsReviewForm.useEffect": (med)=>({
                                id: med.id || 0,
                                medicine: med.medicine || "",
                                prescription: med.prescription || "",
                                remarks: med.remarks || ""
                            })
                    }["DoctorsReviewForm.useEffect"]));
                }
            }["DoctorsReviewForm.useEffect"]).catch({
                "DoctorsReviewForm.useEffect": (err)=>{
                    console.error("Error loading review data:", err);
                }
            }["DoctorsReviewForm.useEffect"]);
        }
    }["DoctorsReviewForm.useEffect"], [
        searchParams
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const reviewId = formData.reviewId;
        const dataToSend = {
            reviewId,
            patientId: formData.patientId,
            date: formData.date,
            investigations: investigations.map((inv)=>({
                    investigationName: inv.investigation,
                    findings: inv.findings
                })),
            medications: medications.map((med)=>({
                    medicine: med.medicine,
                    prescription: med.prescription,
                    remarks: med.remarks
                }))
        };
        try {
            const url = isEditMode ? `https://localhost:7112/api/DoctorsReviews/byReviewId/${reviewId}` : `https://localhost:7112/api/DoctorsReviews`;
            const method = isEditMode ? 'PUT' : 'POST';
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });
            if (!response.ok) {
                const errorText = await response.text();
                console.error('❌ Submission failed:', errorText);
                throw new Error('Submission failed');
            }
            setSubmitMessage(`Doctor's Review ${isEditMode ? 'updated' : 'created'} successfully!`);
            setSubmitStatus('success');
            setTimeout(()=>{
                router.push(`/viewAssignments`);
            }, 1000);
        } catch (error) {
            console.error("Submit error:", error);
            setSubmitMessage('An error occurred while submitting the form.');
            setSubmitStatus('error');
        }
        setTimeout(()=>{
            setSubmitMessage('');
            setSubmitStatus('');
        }, 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-4 lg:px-8 py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 rounded-none mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mb-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-10 h-10 sm:w-12 sm:h-12 text-blue-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 325,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl sm:text-3xl lg:text-4xl font-light mb-1",
                                    children: "Doctor's Review"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 328,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base lg:text-lg text-blue-200",
                                    children: "Patient Diagnosis Investigations & Medical Assessments"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 331,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                            lineNumber: 324,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                        lineNumber: 323,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                    lineNumber: 322,
                    columnNumber: 17
                }, this),
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
                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: formData.patientId || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                            lineNumber: 345,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                lineNumber: 342,
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
                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                            lineNumber: 352,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: formData.reviewId || '-'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                lineNumber: 350,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Date :"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: date,
                                        onChange: (e)=>setDate(e.target.value),
                                        className: "bg-transparent text-blue-900 text-sm focus:outline-none",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                lineNumber: 357,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                        lineNumber: 340,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                    lineNumber: 339,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-lg shadow-sm border border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wide",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border border-gray-300 rounded-md bg-gray-100 px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                className: "w-4 h-4 text-blue-700 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: patientInfo.name || '-',
                                                readOnly: true,
                                                className: "w-full py-2 bg-transparent text-sm text-blue-800 focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                lineNumber: 375,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wide",
                                        children: "Age"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border border-gray-300 rounded-md bg-gray-100 px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-4 h-4 text-blue-700 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: patientInfo.age || '-',
                                                readOnly: true,
                                                className: "w-full py-2 bg-transparent text-sm text-blue-800 focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                lineNumber: 391,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wide",
                                        children: "Gender"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border border-gray-300 rounded-md bg-gray-100 px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$venetian$2d$mask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VenetianMask$3e$__["VenetianMask"], {
                                                className: "w-4 h-4 text-blue-700 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: patientInfo.gender || '-',
                                                readOnly: true,
                                                className: "w-full py-2 bg-transparent text-sm text-blue-800 focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 411,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                lineNumber: 407,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                        lineNumber: 372,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                    lineNumber: 371,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide text-center",
                                    children: "INVESTIGATIONS"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 428,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full border-collapse border border-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "bg-blue-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[10%]",
                                                            children: "SI.No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                            lineNumber: 436,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[40%]",
                                                            children: "Investigation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[50%]",
                                                            children: "Findings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: investigations.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "hover:bg-gray-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border border-gray-300 px-3 py-2 text-center",
                                                                children: index + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                lineNumber: 450,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border border-gray-300 px-3 py-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: item.investigation,
                                                                    onChange: (e)=>updateInvestigation(item.id, 'investigation', e.target.value),
                                                                    className: "w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-blue-200 rounded",
                                                                    placeholder: "Enter investigation"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                    lineNumber: 454,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "border border-gray-300 px-3 py-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "text",
                                                                            value: item.findings,
                                                                            onChange: (e)=>updateInvestigation(item.id, 'findings', e.target.value),
                                                                            className: "w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-blue-200 rounded",
                                                                            placeholder: "Enter findings"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                            lineNumber: 464,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        investigations.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>removeInvestigation(item.id),
                                                                            className: "text-red-600 hover:text-red-800 p-1",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                lineNumber: 477,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                            lineNumber: 472,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                lineNumber: 447,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: addInvestigation,
                                    className: "mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 29
                                        }, this),
                                        "Add Investigation"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                            lineNumber: 427,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide text-center",
                                    children: "MEDICATIONS"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-visible",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full border-collapse border border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-blue-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[10%]",
                                                                children: "SI.No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[30%]",
                                                                children: "Medicines"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                lineNumber: 512,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[20%]",
                                                                children: "Prescription"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[40%]",
                                                                children: "Remarks"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: medications.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-gray-300 px-3 py-2 text-center",
                                                                    children: index + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "relative border border-gray-300 px-3 py-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Combobox"], {
                                                                        value: item.medicine ?? '',
                                                                        onChange: (value)=>updateMedication(item.id, 'medicine', value),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Combobox"].Input, {
                                                                                    className: "w-full px-2 py-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-200",
                                                                                    displayValue: (selected)=>selected,
                                                                                    onChange: (e)=>setMedicineSearchTerm((prev)=>({
                                                                                                ...prev,
                                                                                                [item.id]: e.target.value
                                                                                            })),
                                                                                    placeholder: "Select or search medicine..."
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                    lineNumber: 537,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Combobox"].Button, {
                                                                                    className: "absolute inset-y-0 right-0 flex items-center pr-2",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                        className: "w-4 h-4 text-gray-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                        lineNumber: 546,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                    lineNumber: 545,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Combobox"].Options, {
                                                                                    className: "absolute bottom-full mb-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                                                                    children: getFilteredMedicines(item.id).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "cursor-default select-none px-4 py-2 text-gray-500",
                                                                                        children: "No medicines found."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                        lineNumber: 553,
                                                                                        columnNumber: 69
                                                                                    }, this) : getFilteredMedicines(item.id).map((medicine)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$combobox$2f$combobox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Combobox"].Option, {
                                                                                            value: medicine.medicineName,
                                                                                            className: ({ active })=>`cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-600 text-white' : 'text-gray-900'}`,
                                                                                            children: medicine.medicineName
                                                                                        }, medicine.id, false, {
                                                                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                            lineNumber: 558,
                                                                                            columnNumber: 73
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                    lineNumber: 549,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                            lineNumber: 536,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                        lineNumber: 532,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                    lineNumber: 531,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-gray-300 px-3 py-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: item.prescription,
                                                                        onChange: (e)=>updateMedication(item.id, 'prescription', e.target.value),
                                                                        className: "w-full px-2 py-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-200",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "",
                                                                                children: "Select prescription..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                lineNumber: 584,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            prescriptionOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: option,
                                                                                    children: option
                                                                                }, option, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                    lineNumber: 586,
                                                                                    columnNumber: 61
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                        lineNumber: 577,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                    lineNumber: 576,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "border border-gray-300 px-3 py-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                value: item.remarks,
                                                                                onChange: (e)=>updateMedication(item.id, 'remarks', e.target.value),
                                                                                className: "w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200",
                                                                                placeholder: "Enter remarks"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                lineNumber: 596,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            medications.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeMedication(item.id),
                                                                                className: "text-red-600 hover:text-red-800 p-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                    lineNumber: 611,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                                lineNumber: 606,
                                                                                columnNumber: 61
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                                    lineNumber: 594,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                            lineNumber: 506,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 505,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: addMedication,
                                    className: "mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 29
                                        }, this),
                                        "Add Medication"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                    lineNumber: 624,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                            lineNumber: 499,
                            columnNumber: 21
                        }, this),
                        submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-4 p-3 rounded-lg text-center text-sm font-semibold ${submitStatus === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`,
                            children: submitMessage
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                            lineNumber: 637,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center pt-6 print:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !formData.reviewId || !formData.patientId,
                                className: "bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                        lineNumber: 654,
                                        columnNumber: 29
                                    }, this),
                                    "Submit review"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                                lineNumber: 649,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                            lineNumber: 648,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
                    lineNumber: 425,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
            lineNumber: 320,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(dashboard)/doctorsreview/page.tsx",
        lineNumber: 319,
        columnNumber: 9
    }, this);
};
_s(DoctorsReviewForm, "3jRvDTyExfQ0YjfomqEiOyNfwYM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DoctorsReviewForm;
const __TURBOPACK__default__export__ = DoctorsReviewForm;
var _c;
__turbopack_context__.k.register(_c, "DoctorsReviewForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_%28dashboard%29_doctorsreview_page_tsx_d3d0e0f8._.js.map