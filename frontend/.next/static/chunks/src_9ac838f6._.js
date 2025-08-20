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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-client] (ecmascript)");
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
;
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.baseURL;
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
        districtId: null,
        panchayathId: null,
        categoryId: null,
        ward: '',
        area: '',
        date: today,
        diagnosis: '',
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
                        const response = await fetch(`${API_BASE}/api/PatientCategories`);
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
            const response = await fetch(`${API_BASE}/api/PatientCategories`, {
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
                            categoryId: newCategory.id
                        })); // Use categoryId here
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
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/Districts'),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/Panchayaths')
                        ]);
                        setDistricts(dRes.data);
                        setPanchayaths(pRes.data);
                    } catch (error) {
                        console.error('Failed to fetch districts/panchayaths', error);
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
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/api/Hpforms/get-patient-id'); // Plain string expected
                            const regNumber = response.data;
                            setFormData({
                                "HospitalRegistrationForm.useEffect.fetchRegNumber": (prev)=>({
                                        ...prev,
                                        patientId: regNumber
                                    })
                            }["HospitalRegistrationForm.useEffect.fetchRegNumber"]);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HospitalRegistrationForm.useEffect": ()=>{
            const isPersonalCare = Number(formData.categoryId) === 3; // Assuming category ID 3 is "Personal Care"
            setShowAdditionalDetailsCheckbox(isPersonalCare);
        }
    }["HospitalRegistrationForm.useEffect"], [
        formData.categoryId
    ]);
    // Fetch existing patient data for edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HospitalRegistrationForm.useEffect": ()=>{
            if (isEditMode && PatientId && districts.length > 0 && panchayaths.length > 0 && categories.length > 0) {
                const fetchPatientData = {
                    "HospitalRegistrationForm.useEffect.fetchPatientData": async ()=>{
                        setIsLoading(true);
                        try {
                            const response = await fetch(`${API_BASE}/api/Hpforms/patient/${PatientId}`);
                            if (response.ok) {
                                const patientData = await response.json();
                                const formattedDate = patientData.date ? formatDateForInput(patientData.date) : "";
                                // Find matching IDs
                                // Use IDs directly from patientData
                                const districtId = patientData.districtId ?? null;
                                const panchayathId = patientData.panchayathId ?? null;
                                const categoryId = patientData.categoryId ?? null;
                                // Map backend gender (M, F, O) to display gender (male, female, other)
                                let displayGender = '';
                                if (patientData.gender === 'M') {
                                    displayGender = 'male';
                                } else if (patientData.gender === 'F') {
                                    displayGender = 'female';
                                } else if (patientData.gender === 'O') {
                                    displayGender = 'other';
                                }
                                // Build formData
                                setFormData({
                                    patientId: patientData.patientId?.toString() || '',
                                    districtId,
                                    panchayathId,
                                    categoryId,
                                    ward: patientData.ward || '',
                                    area: patientData.area || '',
                                    date: formattedDate,
                                    diagnosis: patientData.diagnosis || '',
                                    status: patientData.status || '',
                                    name: patientData.name || '',
                                    age: patientData.age?.toString() || '',
                                    gender: displayGender,
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
                                // This uses categoryName directly from the patientData. You might need to adjust based on API response.
                                const patientCategory = categories.find({
                                    "HospitalRegistrationForm.useEffect.fetchPatientData.patientCategory": (cat)=>cat.id === patientData.categoryId
                                }["HospitalRegistrationForm.useEffect.fetchPatientData.patientCategory"]);
                                if (patientCategory?.categoryName.toLowerCase().trim() === "personal care") {
                                    setShowAdditionalDetailsCheckbox(true);
                                    setCollectAdditionalDetails(true); // Assuming if it's personal care, we collect details
                                }
                                // Set existing photo URL if available
                                if (patientData.photo) {
                                    setPhotoFileName(patientData.photo); // Save just filename
                                    setExistingPhotoUrl(`${API_BASE}/uploads/${patientData.photo}`); // Assuming this is the path for photos
                                }
                                if (patientData.aadharFile) {
                                    setAadharFileName(patientData.aadharFile); // Save just filename
                                    setExistingAadharDocUrl(`${API_BASE}/uploads/${patientData.aadharFile}`); // Assuming this is the path for Aadhar docs
                                }
                                // Set selected district for panchayath filtering
                                const selectedDistrict = districts.find({
                                    "HospitalRegistrationForm.useEffect.fetchPatientData.selectedDistrict": (d)=>d.name === patientData.district
                                }["HospitalRegistrationForm.useEffect.fetchPatientData.selectedDistrict"]);
                                if (selectedDistrict) {
                                    setSelectedDistrictId(selectedDistrict.id);
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
        categories,
        panchayaths
    ]); // Added panchayaths to dependencies
    // Update selected district when district data changes in edit mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HospitalRegistrationForm.useEffect": ()=>{
            if (isEditMode && formData.districtId && districts.length > 0) {
                const selectedDistrict = districts.find({
                    "HospitalRegistrationForm.useEffect.selectedDistrict": (d)=>d.id === formData.districtId
                }["HospitalRegistrationForm.useEffect.selectedDistrict"]);
                if (selectedDistrict) {
                    setSelectedDistrictId(selectedDistrict.id);
                }
            }
        }
    }["HospitalRegistrationForm.useEffect"], [
        formData.districtId,
        districts,
        isEditMode
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target; // Removed 'files' from destructuring
        if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
            const inputFiles = e.target.files; // Access files here
            if (inputFiles && inputFiles[0]) {
                // Handle photo upload
                if (name === "photograph") {
                    setFormData((prev)=>({
                            ...prev,
                            photograph: inputFiles[0],
                            previewPhotoUrl: URL.createObjectURL(inputFiles[0])
                        }));
                    setPhotoFileName(inputFiles[0].name);
                    setExistingPhotoUrl(''); // Clear existing URL when new file is selected
                }
                // Handle aadhar upload
                if (name === "aadharDoc") {
                    setFormData((prev)=>({
                            ...prev,
                            aadharDoc: inputFiles[0],
                            previewAadharName: inputFiles[0].name
                        }));
                    setAadharFileName(inputFiles[0].name);
                    setExistingAadharDocUrl(''); // Clear existing URL when new file is selected
                }
            }
        } else {
            let fieldValue = value;
            // Handle Gender selection to send M, F, O
            if (name === 'gender') {
                if (value === 'male') {
                    fieldValue = 'M';
                } else if (value === 'female') {
                    fieldValue = 'F';
                } else if (value === 'other') {
                    fieldValue = 'O';
                }
            } else if (name.endsWith("Id")) {
                fieldValue = parseInt(value, 10) || null;
            }
            setFormData((prev)=>({
                    ...prev,
                    [name]: fieldValue
                }));
            if (name === "categoryId") {
                const selected = categories.find((c)=>c.id === parseInt(value));
                setShowAdditionalDetailsCheckbox(selected?.categoryName.toLowerCase() === "personal care");
                setCollectAdditionalDetails(false); // Reset when category changes
            }
            if (name === "districtId") {
                const selectedId = parseInt(value, 10);
                setSelectedDistrictId(selectedId);
                setFormData((prev)=>({
                        ...prev,
                        panchayathId: null
                    }));
                setSelectedPanchayathId(null);
            }
            if (name === "panchayathId") {
                setSelectedPanchayathId(parseInt(value, 10));
            }
        }
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
        form.append('Ward', formData.ward);
        form.append('Area', formData.area);
        form.append('Date', formData.date);
        form.append('Diagnosis', formData.diagnosis);
        form.append('Name', formData.name);
        form.append('Age', formData.age);
        form.append('Gender', formData.gender); // formData.gender will now be 'M', 'F', or 'O'
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
        try {
            const url = isEditMode ? `${API_BASE}/api/Hpforms/patient/${PatientId}` : `${API_BASE}/api/Hpforms`;
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
                const categoryId = Number(formData.categoryId);
                const pid = formData.patientId?.trim();
                if (categoryId === 3 && collectAdditionalDetails && pid) {
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
                    lineNumber: 612,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                lineNumber: 611,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
            lineNumber: 610,
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
                                children: isEditMode ? 'Edit Patient Information' : 'Patient Registration'
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                lineNumber: 623,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-6 h-6 text-blue-200"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                lineNumber: 626,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                        lineNumber: 622,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-lg text-blue-200",
                        children: isEditMode ? 'Update patient details' : 'Comprehensive patient care registration system'
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                        lineNumber: 629,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                lineNumber: 621,
                columnNumber: 13
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
                                                    className: "text-6l font-semibold text-blue-900",
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
                                                                    lineNumber: 684,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "districtId",
                                                            value: formData.districtId ?? '',
                                                            onChange: (e)=>{
                                                                const selectedId = parseInt(e.target.value);
                                                                setSelectedDistrictId(selectedId); // ✅ Set selectedDistrictId here
                                                                setFormData((prev)=>({
                                                                        ...prev,
                                                                        districtId: isNaN(selectedId) ? null : selectedId
                                                                    }));
                                                            },
                                                            className: `${inputClasses("district")} flex-1`,
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select District"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 700,
                                                                    columnNumber: 41
                                                                }, this),
                                                                districts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: district.id,
                                                                        children: district.name
                                                                    }, district.id, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 702,
                                                                        columnNumber: 45
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 682,
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
                                                            name: "panchayathId",
                                                            value: formData.panchayathId ?? '',
                                                            onChange: (e)=>{
                                                                const selectedId = parseInt(e.target.value, 10);
                                                                setSelectedPanchayathId(selectedId);
                                                                setFormData((prev)=>({
                                                                        ...prev,
                                                                        panchayathId: selectedId
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
                                                                    lineNumber: 729,
                                                                    columnNumber: 41
                                                                }, this),
                                                                panchayaths.filter((p)=>p.dstId === selectedDistrictId).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: p.panchayathId,
                                                                        children: p.panchayathName
                                                                    }, p.panchayathId, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 735,
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
                                                                    lineNumber: 744,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 743,
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
                                                            lineNumber: 746,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 742,
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
                                                                    lineNumber: 758,
                                                                    columnNumber: 54
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 757,
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
                                                            lineNumber: 760,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 756,
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
                                                                    lineNumber: 772,
                                                                    columnNumber: 51
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 771,
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
                                                            lineNumber: 774,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 770,
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
                                                                    lineNumber: 788,
                                                                    columnNumber: 50
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 787,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    name: "categoryId",
                                                                    value: formData.categoryId ?? '',
                                                                    onChange: (e)=>{
                                                                        const selectedId = parseInt(e.target.value);
                                                                        setFormData((prev)=>({
                                                                                ...prev,
                                                                                categoryId: isNaN(selectedId) ? null : selectedId
                                                                            }));
                                                                    },
                                                                    className: `${inputClasses("category")} flex-1`,
                                                                    required: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Select Category"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 805,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        categories.filter((category)=>category && category.categoryName).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: category.id,
                                                                                children: category.categoryName
                                                                            }, category.id, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 809,
                                                                                columnNumber: 53
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 792,
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
                                                                        lineNumber: 821,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 815,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 791,
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
                                                                        lineNumber: 834,
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
                                                                        lineNumber: 836,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    categoryError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-red-500 text-sm mb-4",
                                                                        children: categoryError
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 850,
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
                                                                                lineNumber: 854,
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
                                                                                lineNumber: 863,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 853,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                lineNumber: 833,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 827,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 786,
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
                                                                    lineNumber: 878,
                                                                    columnNumber: 48
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 877,
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
                                                                    lineNumber: 887,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Active",
                                                                    children: "Active"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 888,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Expired",
                                                                    children: "Expired"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 880,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 876,
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
                                                    lineNumber: 900,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-6l font-semibold text-blue-900",
                                                    children: "Personal Information"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 901,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 899,
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
                                                                    lineNumber: 907,
                                                                    columnNumber: 51
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 906,
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
                                                            lineNumber: 909,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 905,
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
                                                                    lineNumber: 922,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 921,
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
                                                            lineNumber: 924,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 920,
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
                                                                    lineNumber: 938,
                                                                    columnNumber: 48
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 937,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "gender",
                                                            value: // Map M, F, O from formData back to "male", "female", "other" for display
                                                            formData.gender === 'M' ? 'male' : formData.gender === 'F' ? 'female' : formData.gender === 'O' ? 'other' : '',
                                                            onChange: handleChange,
                                                            className: inputClasses('gender'),
                                                            required: true,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select Gender"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 952,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "male",
                                                                    children: "Male"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 953,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "female",
                                                                    children: "Female"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 954,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "other",
                                                                    children: "Other"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 955,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 940,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 936,
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
                                                                    lineNumber: 960,
                                                                    columnNumber: 58
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 959,
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
                                                                    lineNumber: 969,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Wealthy",
                                                                    children: "Wealthy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 970,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Upper Middle Class",
                                                                    children: "Upper Middle Class"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 971,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Lower Middle Class",
                                                                    children: "Lower Middle Class"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Poor",
                                                                    children: "Poor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 973,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "Very Poor",
                                                                    children: "Very Poor"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 974,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 962,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Aadhar Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 980,
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
                                                            lineNumber: 983,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 979,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Spouse Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 995,
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
                                                            lineNumber: 998,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 994,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Father Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1009,
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
                                                            lineNumber: 1012,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Mother Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1023,
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
                                                            lineNumber: 1026,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1022,
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
                                                                    lineNumber: 1038,
                                                                    columnNumber: 56
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1037,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1041,
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
                                                                    lineNumber: 1042,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1040,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Phone Number 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1060,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1064,
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
                                                                    lineNumber: 1065,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1063,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1059,
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
                                                            lineNumber: 1082,
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
                                                            lineNumber: 1085,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1081,
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
                                                            lineNumber: 1096,
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
                                                            lineNumber: 1099,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1095,
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
                                                            lineNumber: 1110,
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
                                                            lineNumber: 1113,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1109,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 904,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 898,
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
                                                    lineNumber: 1129,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-6l font-semibold text-blue-900",
                                                    children: "Contact Person"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1130,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1128,
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
                                                            lineNumber: 1135,
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
                                                            lineNumber: 1138,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Relation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1149,
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
                                                            lineNumber: 1152,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1148,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Phone Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1163,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1167,
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
                                                                    lineNumber: 1168,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1166,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1162,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1133,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1127,
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
                                                    lineNumber: 1189,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-6l font-semibold text-blue-900",
                                                    children: "Emergency Contacts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1190,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1188,
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
                                                                    lineNumber: 1197,
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
                                                                    lineNumber: 1200,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1196,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1210,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1214,
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
                                                                            lineNumber: 1215,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1213,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1209,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1195,
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
                                                                    lineNumber: 1235,
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
                                                                    lineNumber: 1238,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1248,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1252,
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
                                                                            lineNumber: 1253,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1251,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1247,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1233,
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
                                                                    lineNumber: 1273,
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
                                                                    lineNumber: 1276,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1272,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1286,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1290,
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
                                                                            lineNumber: 1291,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1289,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1285,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1271,
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
                                                                    lineNumber: 1311,
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
                                                                    lineNumber: 1314,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1310,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1324,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1328,
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
                                                                            lineNumber: 1329,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1327,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1323,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1309,
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
                                                                    lineNumber: 1349,
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
                                                                    lineNumber: 1352,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1348,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                                    children: "Phone Number"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1362,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                            lineNumber: 1366,
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
                                                                            lineNumber: 1367,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1365,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1361,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1347,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1193,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1187,
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
                                                    lineNumber: 1389,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-6l font-semibold text-blue-900",
                                                    children: "Documents"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1390,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1388,
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
                                                            lineNumber: 1396,
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
                                                                        const input = e.target; // Cast to HTMLInputElement
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
                                                                    lineNumber: 1400,
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
                                                                                lineNumber: 1421,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-blue-600 font-medium",
                                                                                children: "Click to upload photo"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1422,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-blue-400",
                                                                                children: "JPG, PNG files only"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1423,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 1420,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1419,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1399,
                                                            columnNumber: 37
                                                        }, this),
                                                        (formData.previewPhotoUrl || existingPhotoUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            id: "photoPreview",
                                                            alt: "Photo Preview",
                                                            src: formData.previewPhotoUrl || existingPhotoUrl,
                                                            className: "mt-4 w-24 h-24 object-cover rounded-lg border-2 border-blue-200 block"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1429,
                                                            columnNumber: 41
                                                        }, this),
                                                        !(formData.previewPhotoUrl || existingPhotoUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            id: "photoPreview",
                                                            alt: "Photo Preview",
                                                            className: "mt-4 w-24 h-24 object-cover rounded-lg border-2 border-blue-200 hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1437,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1395,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide",
                                                            children: "Aadhar Document (PDF)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1447,
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
                                                                        const input = e.target; // Cast to HTMLInputElement
                                                                        const file = input.files?.[0];
                                                                        const label = document.getElementById("pdfFileNameDisplay"); // Updated ID
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
                                                                    lineNumber: 1451,
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
                                                                                lineNumber: 1470,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-blue-600 font-medium",
                                                                                children: "Click to upload PDF"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1471,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-blue-400",
                                                                                children: "PDF files only"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                                lineNumber: 1472,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 1469,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                    lineNumber: 1468,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1450,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            id: "pdfFileNameDisplay",
                                                            className: "mt-2 text-sm text-gray-600 truncate",
                                                            children: formData.previewAadharName || aadharFileName || "No file chosen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                            lineNumber: 1476,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1446,
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
                                                                lineNumber: 1483,
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
                                                                        lineNumber: 1491,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    " Please tick this box if you're registering as a ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold",
                                                                        children: "Personal Care"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                        lineNumber: 1491,
                                                                        columnNumber: 180
                                                                    }, this),
                                                                    " patient. This will redirect you to collect further required information."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                                lineNumber: 1490,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                        lineNumber: 1482,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1481,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1393,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1387,
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
                                                            lineNumber: 1515,
                                                            columnNumber: 45
                                                        }, this),
                                                        isEditMode ? 'Updating...' : 'Submitting...'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1514,
                                                    columnNumber: 41
                                                }, this) : isEditMode ? 'Update Patient' : 'Register Patient'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                lineNumber: 1505,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center",
                                                onClick: ()=>{
                                                    // Use a custom modal or message box instead of confirm()
                                                    // For simplicity, I'm just showing a console log and proceeding for now.
                                                    // In a real app, you'd show a UI prompt.
                                                    console.log('Reset form confirmation needed');
                                                    // Proceed with reset for demonstration, but ideal is a custom modal
                                                    setFormData({
                                                        patientId: '',
                                                        date: today,
                                                        districtId: null,
                                                        panchayathId: null,
                                                        categoryId: null,
                                                        ward: '',
                                                        area: '',
                                                        diagnosis: '',
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
                                                    setPhotoFileName('');
                                                    setAadharFileName('');
                                                    setExistingPhotoUrl('');
                                                    setExistingAadharDocUrl('');
                                                    // Hide and clear image preview
                                                    const photoPreview = document.getElementById("photoPreview");
                                                    if (photoPreview) {
                                                        photoPreview.style.display = 'none';
                                                        photoPreview.src = '';
                                                    }
                                                    // Clear PDF preview text
                                                    const pdfFileNameDisplay = document.getElementById("pdfFileNameDisplay");
                                                    if (pdfFileNameDisplay) {
                                                        pdfFileNameDisplay.textContent = 'No file chosen';
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        className: "w-6 h-6 mr-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                        lineNumber: 1561,
                                                        columnNumber: 37
                                                    }, this),
                                                    "Reset Form"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                lineNumber: 1524,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                        lineNumber: 1503,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1502,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: submitMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mb-6 p-4 rounded-xl text-center font-semibold ${submitStatus === 'success' ? 'bg-green-100 text-green-800 p-0 rounded mb-4 shadow text-sm font-medium text-center' : 'bg-red-100 text-red-800 border border-red-300'}`,
                                        children: submitMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                        lineNumber: 1570,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1568,
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
                                            lineNumber: 1585,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-semibold text-blue-900",
                                            children: "Secure Registration System"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1586,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1584,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Your information is securely processed and stored in compliance with healthcare data protection standards."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1588,
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
                                                    lineNumber: 1593,
                                                    columnNumber: 33
                                                }, this),
                                                "Encrypted"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1592,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1597,
                                                    columnNumber: 33
                                                }, this),
                                                "HIPAA Complied"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1596,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "w-4 h-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                                    lineNumber: 1601,
                                                    columnNumber: 33
                                                }, this),
                                                "Verified"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                            lineNumber: 1600,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                                    lineNumber: 1591,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                            lineNumber: 1583,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(dashboard)/viewpatients/patient_reg/page.tsx",
                        lineNumber: 1582,
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
        lineNumber: 619,
        columnNumber: 9
    }, this);
}
_s(HospitalRegistrationForm, "rUyiKdN9pBAx2bhKrqsd5QerPJQ=", false, function() {
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

//# sourceMappingURL=src_9ac838f6._.js.map