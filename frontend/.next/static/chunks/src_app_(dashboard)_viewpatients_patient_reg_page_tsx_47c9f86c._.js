(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HospitalRegistrationForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HospitalRegistrationForm() {
    _s();
    const today = new Date().toISOString().split('T')[0];
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const isEditMode = searchParams.get('edit') === 'true';
    const PatientId = searchParams.get('id'); // Get from query params, not route params
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAdditionalDetailsCheckbox, setShowAdditionalDetailsCheckbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [collectAdditionalDetails, setCollectAdditionalDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        patientId: '',
        district: '',
        panchayath: '',
        ward: '',
        area: '',
        date: today,
        diagnosis: '',
        category: '',
        status: '',
        name: '',
        age: '',
        gender: '',
        financialStatus: '',
        spouseName: '',
        fatherName: '',
        motherName: '',
        adhaarAddress: '',
        currentAddress: '',
        phoneNumber1: '',
        phoneNumber2: '',
        adhaarNumber: '',
        contactPerson: '',
        relation: '',
        contactPhone: '',
        neighbourResidence: '',
        neighbourPhone: '',
        communityVolunteer: '',
        communityVolunteerPhone: '',
        wardMember: '',
        wardMemberPhone: '',
        aashaVolunteer: '',
        aashaVolunteerPhone: '',
        otherPerson: '',
        otherPersonPhone: '',
        houseRoute: '',
        photograph: null,
        aadharDoc: null
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [panchayaths, setPanchayaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDistrictId, setSelectedDistrictId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPanchayathId, setSelectedPanchayathId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Category management states
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCategoryModal, setShowCategoryModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCategoryName, setNewCategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCategoryLoading, setIsCategoryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [categoryError, setCategoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Fetch patient categories on load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HospitalRegistrationForm.useEffect": ()=>{
            const fetchCategories = {
                "HospitalRegistrationForm.useEffect.fetchCategories": async ()=>{
                    try {
                        const response = await fetch("https://localhost:7112/api/PatientCategories");
                        if (response.ok) {
                            const data = await response.json();
                            setCategories(Array.isArray(data) ? data : []);
                        } else {
                            console.error("Failed to fetch categories — falling back to defaults");
                            fallbackCategories();
                        }
                    } catch (error) {
                        console.error("Error fetching categories:", error);
                        fallbackCategories();
                    }
                }
            }["HospitalRegistrationForm.useEffect.fetchCategories"];
            const fallbackCategories = {
                "HospitalRegistrationForm.useEffect.fallbackCategories": ()=>{
                    setCategories([
                        {
                            id: 1,
                            categoryName: "General"
                        },
                        {
                            id: 2,
                            categoryName: "Emergency"
                        }
                    ]);
                }
            }["HospitalRegistrationForm.useEffect.fallbackCategories"];
            fetchCategories();
        }
    }["HospitalRegistrationForm.useEffect"], []);
    const handleAddCategory = async ()=>{
        const trimmed = newCategoryName.trim();
        if (!trimmed) {
            setCategoryError("Category name is required");
            return;
        }
        if (categories.some((cat)=>cat?.categoryName?.toLowerCase() === trimmed.toLowerCase())) {
            setCategoryError("Category already exists");
            return;
        }
        setIsCategoryLoading(true);
        setCategoryError("");
        try {
            const response = await fetch("https://localhost:7112/api/PatientCategories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    categoryName: newCategoryName
                })
            });
            if (response.ok) {
                const newCategory = await response.json();
                if (newCategory && (newCategory.name || newCategory.categoryName)) {
                    const categoryDisplayName = newCategory.name || newCategory.categoryName;
                    setCategories((prev)=>[
                            ...prev,
                            {
                                ...newCategory,
                                name: categoryDisplayName
                            }
                        ]);
                    setFormData((prev)=>({
                            ...prev,
                            category: categoryDisplayName
                        }));
                    setNewCategoryName("");
                    setShowCategoryModal(false);
                } else {
                    setCategoryError("Invalid response format");
                }
            } else {
                setCategoryError("Failed to add category");
            }
        } catch (error) {
            console.error("Error adding category:", error);
            setCategoryError("Network error occurred");
        } finally{
            setIsCategoryLoading(false);
        }
    };
    const handleCategoryKeyPress = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddCategory();
        }
        if (e.key === "Escape") {
            handleCloseCategoryModal();
        }
    };
    const handleCloseCategoryModal = ()=>{
        setShowCategoryModal(false);
        setNewCategoryName("");
        setCategoryError("");
    };
    const [buttonText, setButtonText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Submit");
    const [existingPhotoUrl, setExistingPhotoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [existingAadharDocUrl, setExistingAadharDocUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [photoFileName, setPhotoFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [aadharFileName, setAadharFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitMessage, setSubmitMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Fetch districts and panchayaths from API first
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HospitalRegistrationForm.useEffect": ()=>{
            const fetchLocations = {
                "HospitalRegistrationForm.useEffect.fetchLocations": async ()=>{
                    try {
                        const [dRes, pRes] = await Promise.all([
                            fetch('https://localhost:7112/api/Districts'),
                            fetch('https://localhost:7112/api/Panchayaths')
                        ]);
                        if (dRes.ok && pRes.ok) {
                            const dData = await dRes.json();
                            const pData = await pRes.json();
                            setDistricts(dData);
                            setPanchayaths(pData);
                        } else {
                            console.error('Failed to fetch districts/panchayaths - API response not OK');
                        }
                    } catch (err) {
                        console.error('Failed to fetch districts/panchayaths', err);
                    }
                }
            }["HospitalRegistrationForm.useEffect.fetchLocations"];
            fetchLocations();
        }
    }["HospitalRegistrationForm.useEffect"], []);
    // Fetch Registration Number from API (only for new registrations)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HospitalRegistrationForm.useEffect": ()=>{
            if (!isEditMode) {
                const fetchRegNumber = {
                    "HospitalRegistrationForm.useEffect.fetchRegNumber": async ()=>{
                        try {
                            const response = await fetch('https://localhost:7112/api/Hpforms/get-patient-id');
                            if (response.ok) {
                                const regNumber = await response.text();
                                setFormData({
                                    "HospitalRegistrationForm.useEffect.fetchRegNumber": (prev)=>({
                                            ...prev,
                                            patientId: regNumber
                                        })
                                }["HospitalRegistrationForm.useEffect.fetchRegNumber"]);
                            } else {
                                console.error('Failed to fetch Registration Number - API response not OK');
                            }
                        } catch (err) {
                            console.error('Failed to fetch Registration Number', err);
                        }
                    }
                }["HospitalRegistrationForm.useEffect.fetchRegNumber"];
                fetchRegNumber();
            }
        }
    }["HospitalRegistrationForm.useEffect"], [
        isEditMode
    ]);
    const formatDateForInput = (dateString)=>{
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };
    // Fetch existing patient data for edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HospitalRegistrationForm.useEffect": ()=>{
            if (isEditMode && PatientId && districts.length > 0) {
                const fetchPatientData = {
                    "HospitalRegistrationForm.useEffect.fetchPatientData": async ()=>{
                        setIsLoading(true);
                        try {
                            console.log('Fetching data for PatientId:', PatientId);
                            const response = await fetch(`https://localhost:7112/api/Hpforms/patient/${PatientId}`);
                            if (response.ok) {
                                const patientData = await response.json();
                                console.log('Fetched patient data:', patientData);
                                // ✅ Correctly call the formatDateForInput helper here
                                const formattedDate = patientData.date ? formatDateForInput(patientData.date) : "";
                                // Map API response to form data structure
                                setFormData({
                                    patientId: patientData.patientId?.toString() || '',
                                    district: patientData.district || '',
                                    panchayath: patientData.panchayath || '',
                                    ward: patientData.ward || '',
                                    area: patientData.area || '',
                                    date: formattedDate,
                                    diagnosis: patientData.diagnosis || '',
                                    category: patientData.category || '',
                                    status: patientData.status || '',
                                    name: patientData.name || '',
                                    age: patientData.age?.toString() || '',
                                    gender: patientData.gender || '',
                                    financialStatus: patientData.financialStatus || '',
                                    spouseName: patientData.spouseName || '',
                                    fatherName: patientData.fatherName || '',
                                    motherName: patientData.motherName || '',
                                    adhaarAddress: patientData.adhaarAddress || '',
                                    currentAddress: patientData.currentAddress || '',
                                    phoneNumber1: patientData.phoneNumber1 || '',
                                    phoneNumber2: patientData.phoneNumber2 || '',
                                    adhaarNumber: patientData.adhaarNumber || '',
                                    contactPerson: patientData.contactPerson || '',
                                    relation: patientData.relation || '',
                                    contactPhone: patientData.contactPhone || '',
                                    neighbourResidence: patientData.neighbourResidence || '',
                                    neighbourPhone: patientData.neighbourPhone || '',
                                    communityVolunteer: patientData.communityVolunteer || '',
                                    communityVolunteerPhone: patientData.communityVolunteerPhone || '',
                                    wardMember: patientData.wardMember || '',
                                    wardMemberPhone: patientData.wardMemberPhone || '',
                                    aashaVolunteer: patientData.aashaVolunteer || '',
                                    aashaVolunteerPhone: patientData.aashaVolunteerPhone || '',
                                    otherPerson: patientData.otherPerson || '',
                                    otherPersonPhone: patientData.otherPersonPhone || '',
                                    houseRoute: patientData.houseRoute || '',
                                    photograph: null,
                                    aadharDoc: null
                                });
                                // Show checkbox if category is already Personal Care
                                if (patientData.category?.toLowerCase().trim() === "personal care") {
                                    setShowAdditionalDetailsCheckbox(true);
                                }
                                // Set existing photo URL if available
                                if (patientData.photo) {
                                    setPhotoFileName(patientData.photo); // Save just filename
                                }
                                if (patientData.aadharFile) {
                                    setAadharFileName(patientData.aadharFile); // Save just filename
                                }
                                // Set selected district for panchayath filtering
                                const selectedDistrict = districts.find({
                                    "HospitalRegistrationForm.useEffect.fetchPatientData.selectedDistrict": (d)=>d.name === patientData.district
                                }["HospitalRegistrationForm.useEffect.fetchPatientData.selectedDistrict"]);
                                if (selectedDistrict) {
                                    setSelectedDistrictId(selectedDistrict.id);
                                }
                                // Add category to list if it doesn't exist
                                if (patientData.category && !categories.includes(patientData.category)) {
                                    setCategories({
                                        "HospitalRegistrationForm.useEffect.fetchPatientData": (prev)=>[
                                                ...prev,
                                                patientData.category
                                            ]
                                    }["HospitalRegistrationForm.useEffect.fetchPatientData"]);
                                }
                                setButtonText("Update");
                            } else {
                                console.error('Failed to fetch patient data:', response.status, response.statusText);
                                setSubmitStatus('error');
                                setSubmitMessage('Failed to load patient data for editing');
                            }
                        } catch (err) {
                            console.error('Error fetching patient data:', err);
                            setSubmitStatus('error');
                            setSubmitMessage('Error loading patient data');
                        } finally{
                            setIsLoading(false);
                        }
                    }
                }["HospitalRegistrationForm.useEffect.fetchPatientData"];
                fetchPatientData();
            }
        }
    }["HospitalRegistrationForm.useEffect"], [
        isEditMode,
        PatientId,
        districts,
        categories
    ]);
    // Update selected district when district data changes in edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HospitalRegistrationForm.useEffect": ()=>{
            if (isEditMode && formData.district && districts.length > 0) {
                const selectedDistrict = districts.find({
                    "HospitalRegistrationForm.useEffect.selectedDistrict": (d)=>d.name === formData.district
                }["HospitalRegistrationForm.useEffect.selectedDistrict"]);
                if (selectedDistrict) {
                    setSelectedDistrictId(selectedDistrict.id);
                }
            }
        }
    }["HospitalRegistrationForm.useEffect"], [
        formData.district,
        districts,
        isEditMode
    ]);
    const handleChange = (e)=>{
        const { name, value, files } = e.target;
        if (files) {
            if (name === "photograph" && files[0]) {
                setFormData((prev)=>({
                        ...prev,
                        photograph: files[0],
                        previewPhotoUrl: URL.createObjectURL(files[0])
                    }));
                setPhotoFileName(files[0].name);
                setExistingPhotoUrl('');
            }
            if (name === "aadharDoc" && files[0]) {
                setFormData((prev)=>({
                        ...prev,
                        aadharDoc: files[0],
                        previewAadharName: files[0].name
                    }));
                setAadharFileName(files[0].name);
                setExistingAadharDocUrl('');
            }
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
            // ✅ Show checkbox only if category is "personal care"
            if (name === "category") {
                const selected = value.toLowerCase().trim();
                setShowAdditionalDetailsCheckbox(selected === "personal care");
                setCollectAdditionalDetails(false); // reset if category changes
            }
            // ✅ Handle district selection for panchayath filtering
            if (name === 'district') {
                const selectedDistrict = districts.find((d)=>d.name === value);
                setSelectedDistrictId(selectedDistrict ? selectedDistrict.id : null);
                setFormData((prev)=>({
                        ...prev,
                        panchayath: ''
                    }));
                setSelectedPanchayathId(null);
            }
            // ✅ Handle panchayath selection
            if (name === 'panchayath') {
                const selectedPanchayath = panchayaths.find((p)=>p.panchayathName === value && p.dstId === selectedDistrictId);
                setSelectedPanchayathId(selectedPanchayath ? selectedPanchayath.dstId : null);
            }
        }
        // ✅ Clear field-level error on input change
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        const formElement = e.target;
        const form = new FormData(formElement);
        // Append all form data fields
        form.append('District', formData.district);
        form.append('Panchayath', formData.panchayath);
        form.append('Ward', formData.ward);
        form.append('Area', formData.area);
        form.append('Date', formData.date);
        form.append('Diagnosis', formData.diagnosis);
        form.append('Category', formData.category);
        form.append('Name', formData.name);
        form.append('Age', formData.age);
        form.append('Gender', formData.gender);
        form.append('SpouseName', formData.spouseName);
        form.append('FatherName', formData.fatherName);
        form.append('MotherName', formData.motherName);
        form.append('AdhaarAddress', formData.adhaarAddress);
        form.append('CurrentAddress', formData.currentAddress);
        form.append('PhoneNumber1', formData.phoneNumber1);
        form.append('PhoneNumber2', formData.phoneNumber2);
        form.append('AdhaarNumber', formData.adhaarNumber);
        form.append('ContactPerson', formData.contactPerson);
        form.append('Relation', formData.relation);
        form.append('ContactPhone', formData.contactPhone);
        form.append('NeighbourResidence', formData.neighbourResidence);
        form.append('NeighbourPhone', formData.neighbourPhone);
        form.append('CommunityVolunteer', formData.communityVolunteer);
        form.append('CommunityVolunteerPhone', formData.communityVolunteerPhone);
        form.append('WardMember', formData.wardMember);
        form.append('WardMemberPhone', formData.wardMemberPhone);
        form.append('AashaVolunteer', formData.aashaVolunteer);
        form.append('AashaVolunteerPhone', formData.aashaVolunteerPhone);
        form.append('OtherPerson', formData.otherPerson);
        form.append('OtherPersonPhone', formData.otherPersonPhone);
        form.append('HouseRoute', formData.houseRoute);
        // Append files if present
        if (formData.photograph) {
            form.append('Photograph', formData.photograph);
        }
        if (formData.aadharDoc) {
            form.append('AadharDoc', formData.aadharDoc);
        }
        console.log("FORMDATA BEING SENT", formData);
        console.log("Edit Mode:", isEditMode, "PatientId:", PatientId);
        try {
            const url = isEditMode ? `https://localhost:7112/api/Hpforms/patient/${PatientId}` : "https://localhost:7112/api/Hpforms";
            const method = isEditMode ? "PUT" : "POST";
            console.log("Making request to:", url, "with method:", method);
            const res = await fetch(url, {
                method,
                body: form
            });
            if (!res.ok) {
                const errorText = await res.text();
                console.error("Submission failed", res.status, errorText);
                setSubmitStatus('error');
                setSubmitMessage(`Submission failed: ${res.status} ${res.statusText}`);
                return;
            }
            setSubmitStatus('success');
            setSubmitMessage(isEditMode ? "Patient data updated successfully!" : "Patient registered successfully!");
            // ✅ Conditional redirect logic
            setTimeout(()=>{
                const category = formData.category?.toLowerCase().trim();
                const pid = formData.patientId?.trim();
                if (category === "personal care" && collectAdditionalDetails && pid) {
                    router.push(`/patientdetails?patientId=${encodeURIComponent(pid)}`);
                } else {
                    router.push("/viewpatients");
                }
            }, 1500);
        } catch (err) {
            console.error("Submission failed", err);
            setSubmitStatus('error');
            setSubmitMessage("Submission failed. Please check your connection and try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    const inputClasses = (fieldName, errors = {})=>`
        w-full px-4 py-3 rounded-xl border-2 transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500
        ${errors[fieldName] ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white hover:border-blue-400'}
        placeholder-gray-500 text-gray-900 font-medium
    `;
    // Show loading state
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 px-10 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xl text-blue-600",
                    children: "Loading patient data..."
                }, void 0, false, {
                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                    lineNumber: 603,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                lineNumber: 602,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
            lineNumber: 601,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 text-center rounded-t-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-16 h-16 text-blue-200"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                            lineNumber: 615,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                        lineNumber: 614,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-light mb-3",
                        children: isEditMode ? 'Edit Patient Information' : 'Patient Registration'
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                        lineNumber: 617,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-blue-200",
                        children: isEditMode ? 'Update patient details' : 'Comprehensive patient care registration system'
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                        lineNumber: 620,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                lineNumber: 613,
                columnNumber: 13
            }, this),
            submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mb-6 p-4 rounded-xl text-center font-semibold ${submitStatus === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`,
                children: submitMessage
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                lineNumber: 627,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        id: "hospital-form",
                        onSubmit: handleSubmit,
                        className: "bg-white rounded-b-2xl shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                                                    className: "w-6 h-6 text-blue-600 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-blue-900",
                                                    children: "Registration Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 643,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 641,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Patient ID",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 51
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 648,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "PatientId",
                                                            value: formData.patientId,
                                                            onChange: handleChange,
                                                            className: inputClasses('PatientId'),
                                                            placeholder: "Auto-generated ID",
                                                            readOnly: true,
                                                            style: {
                                                                backgroundColor: '#f0f4f8',
                                                                cursor: 'not-allowed'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 37
                                                        }, this),
                                                        errors.PatientId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-red-500 text-sm mt-1",
                                                            children: errors.PatientId
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 58
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Date ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 46
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    name: "date",
                                                                    value: formData.date,
                                                                    onChange: handleChange,
                                                                    className: `${inputClasses('date')} pl-12`,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 668,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "District ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 683,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "district",
                                                            value: formData.district,
                                                            onChange: (e)=>{
                                                                const selectedName = e.target.value;
                                                                const selectedDistrict = districts.find((d)=>d.name === selectedName);
                                                                setSelectedDistrictId(selectedDistrict?.id || null);
                                                                setFormData((prev)=>({
                                                                        ...prev,
                                                                        district: selectedName,
                                                                        panchayath: ''
                                                                    }));
                                                            },
                                                            className: inputClasses('district'),
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select District"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 701,
                                                                    columnNumber: 41
                                                                }, this),
                                                                districts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: d.name,
                                                                        children: d.name
                                                                    }, d.id, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 703,
                                                                        columnNumber: 45
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Panchayath ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 712,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 711,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "panchayath",
                                                            value: formData.panchayath,
                                                            onChange: (e)=>{
                                                                const selectedName = e.target.value;
                                                                const selectedP = panchayaths.find((p)=>p.panchayathName === selectedName);
                                                                setSelectedPanchayathId(selectedP?.panchayathId || null);
                                                                setFormData((prev)=>({
                                                                        ...prev,
                                                                        panchayath: selectedName
                                                                    }));
                                                            },
                                                            className: inputClasses('panchayath'),
                                                            disabled: !selectedDistrictId,
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: selectedDistrictId ? "Select Panchayath" : "Select District First"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 730,
                                                                    columnNumber: 41
                                                                }, this),
                                                                panchayaths.filter((p)=>p.dstId === selectedDistrictId).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: p.panchayathName,
                                                                        children: p.panchayathName
                                                                    }, p.panchayathId, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 736,
                                                                        columnNumber: 49
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 714,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Ward Number ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 744,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            name: "ward",
                                                            value: formData.ward,
                                                            onChange: handleChange,
                                                            className: inputClasses('ward'),
                                                            placeholder: "Enter Ward No."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 747,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Area / Route ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 54
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 758,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "area",
                                                            value: formData.area,
                                                            onChange: handleChange,
                                                            className: inputClasses('area'),
                                                            placeholder: "Enter area or route"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 757,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Diagnosis ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 773,
                                                                    columnNumber: 51
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "diagnosis",
                                                            value: formData.diagnosis,
                                                            onChange: handleChange,
                                                            rows: 4,
                                                            maxLength: 1000,
                                                            className: inputClasses('diagnosis'),
                                                            placeholder: "Enter diagnosis details (max 1000 characters)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 775,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Category ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 788,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    name: "category",
                                                                    value: formData.category,
                                                                    onChange: handleChange,
                                                                    className: `${inputClasses("category")} flex-1`,
                                                                    required: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Select Category"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 800,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        categories.filter((category)=>category && category.categoryName).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: category.categoryName,
                                                                                children: category.categoryName
                                                                            }, category.id, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 804,
                                                                                columnNumber: 53
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 793,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setShowCategoryModal(true),
                                                                    className: "bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition flex items-center justify-center",
                                                                    title: "Add new category",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 816,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 810,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 37
                                                        }, this),
                                                        showCategoryModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "fixed inset-0 bg-black/30 flex justify-center items-center z-50",
                                                            onKeyDown: (e)=>{
                                                                if (e.key === "Escape") handleCloseCategoryModal();
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-white rounded-lg w-full max-w-sm shadow-lg p-6 animate-fade-in",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold mb-4",
                                                                        children: "➕ Add Patient Category"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 829,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: newCategoryName,
                                                                        onChange: (e)=>{
                                                                            setNewCategoryName(e.target.value);
                                                                            setCategoryError("");
                                                                        },
                                                                        onKeyDown: handleCategoryKeyPress,
                                                                        placeholder: "Enter category name",
                                                                        className: "w-full border border-gray-300 px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                                        autoFocus: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 831,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    categoryError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-red-500 text-sm mb-4",
                                                                        children: categoryError
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 845,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-end gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: handleCloseCategoryModal,
                                                                                className: "border px-4 py-2 rounded hover:bg-gray-100",
                                                                                disabled: isCategoryLoading,
                                                                                children: "Cancel"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 849,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: handleAddCategory,
                                                                                disabled: isCategoryLoading || !newCategoryName.trim(),
                                                                                className: "bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300",
                                                                                children: isCategoryLoading ? "Adding..." : "Save"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 858,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 848,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                lineNumber: 828,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 822,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 787,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Status ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 873,
                                                                    columnNumber: 48
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 872,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "status",
                                                            value: formData.status || 'Active',
                                                            onChange: handleChange,
                                                            className: inputClasses('status'),
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 882,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Active",
                                                                    children: "Active"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 883,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Expired",
                                                                    children: "Expired"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 884,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 875,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 871,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 640,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "w-6 h-6 text-blue-600 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-blue-900",
                                                    children: "Personal Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 894,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Full Name ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 902,
                                                                    columnNumber: 51
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 901,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "name",
                                                            value: formData.name,
                                                            onChange: handleChange,
                                                            className: inputClasses('name'),
                                                            placeholder: "Enter full name",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 900,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Age ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 917,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 916,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            name: "age",
                                                            value: formData.age,
                                                            onChange: handleChange,
                                                            min: "1",
                                                            className: inputClasses('age'),
                                                            placeholder: "Enter age",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 919,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 915,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Gender ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 933,
                                                                    columnNumber: 48
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 932,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "gender",
                                                            value: formData.gender,
                                                            onChange: handleChange,
                                                            className: inputClasses('gender'),
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select Gender"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 942,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "male",
                                                                    children: "Male"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 943,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "female",
                                                                    children: "Female"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 944,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "other",
                                                                    children: "Other"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 945,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 935,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 931,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Financial Status ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 950,
                                                                    columnNumber: 58
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 949,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "financialStatus",
                                                            value: formData.financialStatus,
                                                            onChange: handleChange,
                                                            className: inputClasses('financialStatus'),
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select Financial Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 959,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Wealthy",
                                                                    children: "Wealthy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 960,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Upper Middle Class",
                                                                    children: "Upper Middle Class"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 961,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Lower Middle Class",
                                                                    children: "Lower Middle Class"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Poor",
                                                                    children: "Poor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 963,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Very Poor",
                                                                    children: "Very Poor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 964,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 952,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Aadhar Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 970,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "adhaarNumber",
                                                            value: formData.adhaarNumber,
                                                            onChange: handleChange,
                                                            maxLength: 14,
                                                            className: inputClasses('adhaarNumber'),
                                                            placeholder: "0000 - 0000 - 0000"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 973,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 969,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Spouse Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 985,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "spouseName",
                                                            value: formData.spouseName,
                                                            onChange: handleChange,
                                                            className: inputClasses('spouseName'),
                                                            placeholder: "Enter spouse name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 988,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 984,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Father Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 999,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "fatherName",
                                                            value: formData.fatherName,
                                                            onChange: handleChange,
                                                            className: inputClasses('fatherName'),
                                                            placeholder: "Enter father name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 998,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Mother Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1013,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "motherName",
                                                            value: formData.motherName,
                                                            onChange: handleChange,
                                                            className: inputClasses('motherName'),
                                                            placeholder: "Enter mother name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1016,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1012,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: [
                                                                "Phone Number 1 ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1028,
                                                                    columnNumber: 56
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1027,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1031,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    name: "phoneNumber1",
                                                                    value: formData.phoneNumber1,
                                                                    onChange: handleChange,
                                                                    className: `${inputClasses('phoneNumber1')} pl-12`,
                                                                    placeholder: "10-digit number",
                                                                    maxLength: 10,
                                                                    onInput: (e)=>{
                                                                        const input = e.currentTarget;
                                                                        input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                                    },
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1032,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1030,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Phone Number 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1054,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    name: "phoneNumber2",
                                                                    value: formData.phoneNumber2,
                                                                    onChange: handleChange,
                                                                    className: `${inputClasses('phoneNumber2')} pl-12`,
                                                                    placeholder: "10-digit number",
                                                                    maxLength: 10,
                                                                    onInput: (e)=>{
                                                                        const input = e.currentTarget;
                                                                        input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1055,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1053,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1049,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Adhaar Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1072,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "adhaarAddress",
                                                            value: formData.adhaarAddress,
                                                            onChange: handleChange,
                                                            rows: 3,
                                                            className: inputClasses('adhaarAddress'),
                                                            placeholder: "Enter Adhaar address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1075,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1071,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Current Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1086,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "currentAddress",
                                                            value: formData.currentAddress,
                                                            onChange: handleChange,
                                                            rows: 3,
                                                            className: inputClasses('currentAddress'),
                                                            placeholder: "Enter current address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1089,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1085,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:col-span-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "House Route (In Detail)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1100,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            name: "houseRoute",
                                                            value: formData.houseRoute,
                                                            onChange: handleChange,
                                                            rows: 4,
                                                            maxLength: 1000,
                                                            className: inputClasses('houseRoute'),
                                                            placeholder: "Describe your house route in detail (up to 1000 characters)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1103,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1099,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 899,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 893,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-6 h-6 text-blue-600 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1119,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-blue-900",
                                                    children: "Contact Person"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1120,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Contact Person Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1125,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "contactPerson",
                                                            value: formData.contactPerson,
                                                            onChange: handleChange,
                                                            className: inputClasses('contactPerson'),
                                                            placeholder: "Enter name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1128,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1124,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Relation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1139,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            name: "relation",
                                                            value: formData.relation,
                                                            onChange: handleChange,
                                                            className: inputClasses('relation'),
                                                            placeholder: "e.g. Brother, Sister"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1142,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1138,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Phone Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1153,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1157,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    name: "contactPhone",
                                                                    value: formData.contactPhone,
                                                                    onChange: handleChange,
                                                                    className: `${inputClasses('contactPhone')} pl-12`,
                                                                    placeholder: "10-digit number",
                                                                    maxLength: 10,
                                                                    onInput: (e)=>{
                                                                        const input = e.currentTarget;
                                                                        input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1158,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1156,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1152,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1123,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1117,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                    className: "w-6 h-6 text-blue-600 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1179,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-blue-900",
                                                    children: "Emergency Contacts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1180,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Neighbour Residence"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1187,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "neighbourResidence",
                                                                    value: formData.neighbourResidence,
                                                                    onChange: handleChange,
                                                                    className: inputClasses('neighbourResidence'),
                                                                    placeholder: "Enter neighbour name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1190,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1186,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1200,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1204,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            name: "neighbourPhone",
                                                                            value: formData.neighbourPhone,
                                                                            onChange: handleChange,
                                                                            className: `${inputClasses('neighbourPhone')} pl-12`,
                                                                            placeholder: "10-digit number",
                                                                            maxLength: 10,
                                                                            onInput: (e)=>{
                                                                                const input = e.currentTarget;
                                                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1205,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1203,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1199,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Community Volunteer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1225,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "communityVolunteer",
                                                                    value: formData.communityVolunteer,
                                                                    onChange: handleChange,
                                                                    className: inputClasses('communityVolunteer'),
                                                                    placeholder: "Enter volunteer name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1228,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1224,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1238,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1242,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            name: "communityVolunteerPhone",
                                                                            value: formData.communityVolunteerPhone,
                                                                            onChange: handleChange,
                                                                            className: `${inputClasses('communityVolunteerPhone')} pl-12`,
                                                                            placeholder: "10-digit number",
                                                                            maxLength: 10,
                                                                            onInput: (e)=>{
                                                                                const input = e.currentTarget;
                                                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1243,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1241,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1237,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1223,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Ward Member"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1263,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "wardMember",
                                                                    value: formData.wardMember,
                                                                    onChange: handleChange,
                                                                    className: inputClasses('wardMember'),
                                                                    placeholder: "Enter ward member name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1266,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1262,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1276,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1280,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            name: "wardMemberPhone",
                                                                            value: formData.wardMemberPhone,
                                                                            onChange: handleChange,
                                                                            className: `${inputClasses('wardMemberPhone')} pl-12`,
                                                                            placeholder: "10-digit number",
                                                                            maxLength: 10,
                                                                            onInput: (e)=>{
                                                                                const input = e.currentTarget;
                                                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1281,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1279,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1275,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Aasha Volunteer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1301,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "aashaVolunteer",
                                                                    value: formData.aashaVolunteer,
                                                                    onChange: handleChange,
                                                                    className: inputClasses('aashaVolunteer'),
                                                                    placeholder: "Enter aasha volunteer name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1304,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1300,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1314,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1318,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            name: "aashaVolunteerPhone",
                                                                            value: formData.aashaVolunteerPhone,
                                                                            onChange: handleChange,
                                                                            className: `${inputClasses('aashaVolunteerPhone')} pl-12`,
                                                                            placeholder: "10-digit number",
                                                                            maxLength: 10,
                                                                            onInput: (e)=>{
                                                                                const input = e.currentTarget;
                                                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1319,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1317,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1313,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Other Person"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1339,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "otherPerson",
                                                                    value: formData.otherPerson,
                                                                    onChange: handleChange,
                                                                    className: inputClasses('otherPerson'),
                                                                    placeholder: "Enter other person name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1342,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1338,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1352,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1356,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "tel",
                                                                            name: "otherPersonPhone",
                                                                            value: formData.otherPersonPhone,
                                                                            onChange: handleChange,
                                                                            className: `${inputClasses('otherPersonPhone')} pl-12`,
                                                                            placeholder: "10-digit number",
                                                                            maxLength: 10,
                                                                            onInput: (e)=>{
                                                                                const input = e.currentTarget;
                                                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1357,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1355,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1351,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1337,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1183,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1177,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                    className: "w-6 h-6 text-blue-600 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1379,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold text-blue-900",
                                                    children: "Documents"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1380,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1378,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Patient Photograph"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1386,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    name: "photograph",
                                                                    accept: "image/*",
                                                                    onChange: (e)=>{
                                                                        const input = e.target;
                                                                        const file = input.files?.[0];
                                                                        if (file) {
                                                                            const imgElement = document.getElementById("photoPreview");
                                                                            if (imgElement) {
                                                                                imgElement.src = URL.createObjectURL(file);
                                                                                imgElement.style.display = 'block';
                                                                            }
                                                                            setFormData((prev)=>({
                                                                                    ...prev,
                                                                                    photograph: file
                                                                                }));
                                                                        }
                                                                    },
                                                                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1390,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                                className: "w-8 h-8 text-blue-400 mx-auto mb-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1411,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-blue-600 font-medium",
                                                                                children: "Click to upload photo"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1412,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-blue-400",
                                                                                children: "JPG, PNG files only"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1413,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 1410,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1409,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1389,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            id: "photoPreview",
                                                            alt: "Photo Preview",
                                                            className: "mt-4 w-24 h-24 object-cover rounded-lg border-2 border-blue-200 hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1417,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1385,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Aadhar Document (PDF)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1426,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    name: "aadharDoc",
                                                                    accept: "application/pdf",
                                                                    onChange: (e)=>{
                                                                        const input = e.target;
                                                                        const file = input.files?.[0];
                                                                        const label = document.getElementById("pdfPreview");
                                                                        if (label) {
                                                                            label.textContent = file ? file.name : "No file chosen";
                                                                        }
                                                                        if (file) {
                                                                            setFormData((prev)=>({
                                                                                    ...prev,
                                                                                    aadharDoc: file
                                                                                }));
                                                                        }
                                                                    },
                                                                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1430,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                className: "w-8 h-8 text-blue-400 mx-auto mb-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1449,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-blue-600 font-medium",
                                                                                children: "Click to upload PDF"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1450,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-blue-400",
                                                                                children: "PDF files only"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1451,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 1448,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1447,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1429,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            id: "pdfPreview",
                                                            className: "mt-2 text-sm text-gray-600 truncate",
                                                            children: "No file chosen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1455,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1425,
                                                    columnNumber: 33
                                                }, this),
                                                showAdditionalDetailsCheckbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 px-4 py-3 rounded-md mt-6 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                id: "additionalDetails",
                                                                checked: collectAdditionalDetails,
                                                                onChange: (e)=>setCollectAdditionalDetails(e.target.checked),
                                                                className: "mt-1 w-5 h-5 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                lineNumber: 1460,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "additionalDetails",
                                                                className: "text-sm sm:text-base font-medium leading-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-yellow-900",
                                                                        children: "Additional Patient Details:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 1468,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    " Please tick this box if you're registering as a ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold",
                                                                        children: "Personal Care"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 1468,
                                                                        columnNumber: 180
                                                                    }, this),
                                                                    " patient. This will redirect you to collect further required information."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                lineNumber: 1467,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                        lineNumber: 1459,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1458,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1383,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1377,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4 pt-8 pb-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex justify-center items-center gap-4 mt-8 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                className: `px-12 py-4 rounded-xl font-bold text-lg text-white shadow-lg transform transition-all duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0'}`,
                                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1492,
                                                            columnNumber: 45
                                                        }, this),
                                                        isEditMode ? 'Updating...' : 'Submitting...'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1491,
                                                    columnNumber: 41
                                                }, this) : isEditMode ? 'Update Patient' : 'Register Patient'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                lineNumber: 1482,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center",
                                                onClick: ()=>{
                                                    if (confirm('Are you sure you want to reset the form? All data will be lost.')) {
                                                        // Reset logic
                                                        setFormData({
                                                            patientId: '',
                                                            date: '',
                                                            district: '',
                                                            panchayath: '',
                                                            ward: '',
                                                            area: '',
                                                            diagnosis: '',
                                                            category: '',
                                                            status: '',
                                                            name: '',
                                                            age: '',
                                                            gender: '',
                                                            financialStatus: '',
                                                            adhaarNumber: '',
                                                            spouseName: '',
                                                            fatherName: '',
                                                            motherName: '',
                                                            phoneNumber1: '',
                                                            phoneNumber2: '',
                                                            adhaarAddress: '',
                                                            currentAddress: '',
                                                            houseRoute: '',
                                                            contactPerson: '',
                                                            relation: '',
                                                            contactPhone: '',
                                                            neighbourResidence: '',
                                                            neighbourPhone: '',
                                                            communityVolunteer: '',
                                                            communityVolunteerPhone: '',
                                                            wardMember: '',
                                                            wardMemberPhone: '',
                                                            aashaVolunteer: '',
                                                            aashaVolunteerPhone: '',
                                                            otherPerson: '',
                                                            otherPersonPhone: '',
                                                            photograph: null,
                                                            aadharDoc: null
                                                        });
                                                        setSelectedDistrictId(null);
                                                        setSelectedPanchayathId(null);
                                                        const photoPreview = document.getElementById("pdfPreview");
                                                        const pdfPreview = document.getElementById("pdfPreview");
                                                        if (photoPreview) {
                                                            photoPreview.style.display = 'none';
                                                            photoPreview.src = '';
                                                        }
                                                        if (pdfPreview) {
                                                            pdfPreview.textContent = 'No file chosen';
                                                        }
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        className: "w-6 h-6 mr-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                        lineNumber: 1530,
                                                        columnNumber: 37
                                                    }, this),
                                                    "Reset Form"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                lineNumber: 1501,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                        lineNumber: 1480,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1479,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                            lineNumber: 637,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                        lineNumber: 636,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-lg p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "w-8 h-8 text-blue-600 mr-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1543,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-semibold text-blue-900",
                                            children: "Secure Registration System"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1544,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1542,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Your information is securely processed and stored in compliance with healthcare data protection standards."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1546,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center mt-4 space-x-6 text-sm text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1551,
                                                    columnNumber: 33
                                                }, this),
                                                "Encrypted"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1550,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1555,
                                                    columnNumber: 33
                                                }, this),
                                                "HIPAA Compliant"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1554,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1559,
                                                    columnNumber: 33
                                                }, this),
                                                "Verified"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1558,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1549,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                            lineNumber: 1541,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                        lineNumber: 1540,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                lineNumber: 634,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
        lineNumber: 610,
        columnNumber: 9
    }, this);
}
_s(HospitalRegistrationForm, "z2MI0N4R5gSFJLBSwV3VzD/PKK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = HospitalRegistrationForm;
var _c;
__turbopack_context__.k.register(_c, "HospitalRegistrationForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_%28dashboard%29_viewpatients_patient_reg_page_tsx_47c9f86c._.js.map