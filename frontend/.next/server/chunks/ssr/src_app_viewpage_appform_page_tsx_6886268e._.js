module.exports = {

"[project]/src/app/viewpage/appform/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HospitalRegistrationForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function HospitalRegistrationForm() {
    const today = new Date().toISOString().split('T')[0];
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        registrationNumber: '',
        district: '',
        panchayath: '',
        ward: '',
        area: '',
        date: today,
        diagnosis: '',
        category: '',
        name: '',
        age: '',
        gender: '',
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
    const [districts, setDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [panchayaths, setPanchayaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDistrictId, setSelectedDistrictId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedPanchayathId, setSelectedPanchayathId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [buttonText, setButtonText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Submit");
    const categories = [
        'A',
        'B',
        'C'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchLocations = async ()=>{
            try {
                const [dRes, pRes] = await Promise.all([
                    fetch('https://localhost:7112/api/Districts'),
                    fetch('https://localhost:7112/api/Panchayaths')
                ]);
                const dData = await dRes.json();
                const pData = await pRes.json();
                setDistricts(dData);
                setPanchayaths(pData);
            } catch (err) {
                console.error('Failed to fetch districts/panchayaths', err);
            }
        };
        const raw = localStorage.getItem("editFormData");
        const isEdit = localStorage.getItem("isEditMode") === "true";
        setIsEditMode(isEdit);
        const isEditMode = localStorage.getItem("isEditMode") === "true";
        if (isEditMode && raw) {
            const p = JSON.parse(raw);
            const dig = (...keys)=>keys.reduce((out, k)=>out !== "" ? out : p?.[k] ?? "", "");
            setFormData({
                registrationNumber: dig("registrationNumber", "regNo", "Regno"),
                district: dig("district"),
                panchayath: dig("panchayath"),
                ward: dig("ward"),
                area: dig("area"),
                date: String(dig("date")).substring(0, 10),
                diagnosis: dig("diagnosis"),
                category: dig("category"),
                name: dig("name"),
                age: dig("age"),
                gender: dig("gender") === 0 || dig("gender") === "0" ? "Male" : dig("gender") === 1 || dig("gender") === "1" ? "Female" : "",
                spouseName: dig("spouseName"),
                fatherName: dig("fatherName"),
                motherName: dig("motherName"),
                adhaarAddress: dig("adhaarAddress"),
                currentAddress: dig("currentAddress"),
                phoneNumber1: dig("phoneNumber1"),
                phoneNumber2: dig("phoneNumber2"),
                adhaarNumber: dig("adhaarNumber"),
                contactPerson: dig("contactPerson"),
                relation: dig("relation"),
                contactPhone: dig("contactPhone"),
                neighbourResidence: dig("neighbourResidence"),
                neighbourPhone: dig("neighbourPhone"),
                communityVolunteer: dig("communityVolunteer"),
                communityVolunteerPhone: dig("communityVolunteerPhone"),
                wardMember: dig("wardMember"),
                wardMemberPhone: dig("wardMemberPhone"),
                aashaVolunteer: dig("aashaVolunteer"),
                aashaVolunteerPhone: dig("aashaVolunteerPhone"),
                otherPerson: dig("otherPerson"),
                otherPersonPhone: dig("otherPersonPhone"),
                houseRoute: dig("houseRoute"),
                photograph: null,
                aadharDoc: null
            });
            localStorage.removeItem("editFormData");
            localStorage.removeItem("isEditMode");
        }
        fetchLocations();
    }, []);
    const handleChange = (e)=>{
        const { name, value, files } = e.target;
        if (files) {
            if (name === "photograph" && files[0]) {
                setFormData((prev)=>({
                        ...prev,
                        photograph: files[0],
                        previewPhotoUrl: URL.createObjectURL(files[0])
                    }));
            }
            if (name === "aadharDoc" && files[0]) {
                setFormData((prev)=>({
                        ...prev,
                        aadharDoc: files[0],
                        previewAadharName: files[0].name
                    }));
            }
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formElement = e.target;
        const form = new FormData(formElement);
        localStorage.removeItem("editFormData");
        localStorage.removeItem("isEditMode");
        // Basic Info
        form.append("registrationNumber", formData.registrationNumber);
        form.append("district", formData.district);
        form.append("panchayath", formData.panchayath);
        form.append("ward", formData.ward);
        form.append("area", formData.area);
        form.append("date", formData.date);
        form.append("diagnosis", formData.diagnosis);
        form.append("category", formData.category);
        // Personal Info
        form.append("name", formData.name);
        form.append("age", formData.age.toString()); // age is number, convert to string
        form.append("gender", formData.gender);
        form.append("spouseName", formData.spouseName);
        form.append("fatherName", formData.fatherName);
        form.append("motherName", formData.motherName);
        form.append("adhaarAddress", formData.adhaarAddress);
        form.append("currentAddress", formData.currentAddress);
        form.append("phoneNumber1", formData.phoneNumber1);
        form.append("phoneNumber2", formData.phoneNumber2);
        form.append("adhaarNumber", formData.adhaarNumber);
        form.append("contactPerson", formData.contactPerson);
        form.append("relation", formData.relation);
        form.append("contactPhone", formData.contactPhone);
        // Reference Info
        form.append("neighbourResidence", formData.neighbourResidence);
        form.append("neighbourPhone", formData.neighbourPhone);
        form.append("communityVolunteer", formData.communityVolunteer);
        form.append("communityVolunteerPhone", formData.communityVolunteerPhone);
        form.append("wardMember", formData.wardMember);
        form.append("wardMemberPhone", formData.wardMemberPhone);
        form.append("aashaVolunteer", formData.aashaVolunteer);
        form.append("aashaVolunteerPhone", formData.aashaVolunteerPhone);
        form.append("otherPerson", formData.otherPerson);
        form.append("otherPersonPhone", formData.otherPersonPhone);
        // Extra
        form.append("houseRoute", formData.houseRoute);
        if (formData.photograph) form.append("photograph", formData.photograph);
        if (formData.aadharDoc) form.append("aadharDoc", formData.aadharDoc);
        if (isEditMode && formData.id) {
            form.append("Id", String(formData.id));
        }
        Object.entries(formData).forEach(([k, v])=>{
            if (typeof v === 'string') form.append(k, v);
        });
        if (formData.photograph) form.append("photograph", formData.photograph);
        if (formData.aadharDoc) form.append("aadharDoc", formData.aadharDoc);
        const url = isEditMode ? `https://localhost:7112/api/Hpforms/${formData.id}` : "https://localhost:7112/api/Hpforms";
        const method = isEditMode ? "PUT" : "POST";
        const res = await fetch(url, {
            method,
            body: form
        });
        if (!res.ok) {
            console.error("Submission failed", await res.text());
            alert("Submission failed. Check console.");
            return;
        }
        console.log("FORMDATA BEING SENT", formData);
        try {
            const res = await fetch("https://localhost:7112/api/Hpforms", {
                method: "POST",
                body: form
            });
            if (!res.ok) throw new Error(await res.text());
            alert("Submitted successfully!");
        } catch (err) {
            console.error("Submission failed", err);
            alert("Submission failed. Check console for error details.");
        }
        alert(isEditMode ? "Updated successfully!" : "Submitted successfully!");
        window.location.href = "/admform/viewpage"; // redirect to listing
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 px-10 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            id: "hospital-form",
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    id: "main-heading",
                    children: "HOSPITAL Application Form"
                }, void 0, false, {
                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                    lineNumber: 314,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4 text-center md:text-left",
                                children: "Registration Details"
                            }, void 0, false, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 319,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 320,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "registrationNumber",
                                        className: "block font-medium mb-1",
                                        children: "Registration Number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "registrationNumber",
                                        name: "registrationNumber",
                                        type: "text",
                                        value: formData.registrationNumber,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                        placeholder: "Enter registration number"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 323,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "district",
                                        className: "block font-medium mb-1",
                                        children: "District"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 341,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "district",
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
                                        required: true,
                                        className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select District"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 33
                                            }, this),
                                            districts.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: d.name,
                                                    children: d.name
                                                }, d.id, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 344,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 340,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "panchayath",
                                        className: "block font-medium mb-1",
                                        children: "Panchayath"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 373,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "panchayath",
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
                                        required: true,
                                        className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select Panchayath"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 33
                                            }, this),
                                            panchayaths.filter((p)=>p.dstId === selectedDistrictId).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: p.panchayathName,
                                                    children: p.panchayathName
                                                }, p.panchayathId, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 41
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 372,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "ward",
                                        className: "block font-medium mb-1",
                                        children: "Ward No."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "ward",
                                        name: "ward",
                                        type: "tel",
                                        inputMode: "numeric",
                                        value: formData.ward,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                        placeholder: "Enter Ward No."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 406,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "area",
                                        className: "block font-medium mb-1",
                                        children: "Area / Route"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 424,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "area",
                                        name: "area",
                                        type: "text",
                                        value: formData.area,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                        placeholder: "Enter area or route"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 427,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 423,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "date",
                                        className: "block font-medium mb-1",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "date",
                                        name: "date",
                                        type: "date",
                                        value: formData.date,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 439,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "diagnosis",
                                        className: "block font-medium mb-1",
                                        children: "Diagnosis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "diagnosis",
                                        name: "diagnosis",
                                        maxLength: 1000,
                                        rows: 4,
                                        value: formData.diagnosis,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                        placeholder: "Enter diagnosis details (max 1000 characters)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 454,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "category",
                                        className: "block font-medium mb-1",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "category",
                                        name: "category",
                                        value: formData.category,
                                        onChange: handleChange,
                                        required: true,
                                        className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                lineNumber: 483,
                                                columnNumber: 33
                                            }, this),
                                            categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c,
                                                    children: c
                                                }, c, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 485,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                lineNumber: 471,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/viewpage/appform/page.tsx",
                        lineNumber: 317,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                    lineNumber: 316,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Personal Information"
                        }, void 0, false, {
                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                            lineNumber: 496,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "name",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            onChange: handleChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 498,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "age",
                                            children: "Age"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 506,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            inputMode: "numeric",
                                            id: "age",
                                            name: "age",
                                            min: "1",
                                            required: true,
                                            onChange: handleChange
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "gender",
                                            children: "Gender"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 515,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "gender",
                                            name: "gender",
                                            defaultValue: "",
                                            onChange: handleChange,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    children: "-- Select Gender --"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "male",
                                                    children: "Male"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 518,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "female",
                                                    children: "Female"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 514,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "spouseName",
                                            children: "Spouse Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 525,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "spouseName",
                                            name: "spouseName",
                                            onChange: handleChange
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 526,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 524,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "fatherName",
                                            children: "Father Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "fatherName",
                                            name: "fatherName",
                                            onChange: handleChange
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 531,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "motherName",
                                            children: "Mother Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 535,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "motherName",
                                            name: "motherName",
                                            onChange: handleChange
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 534,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "adhaarNumber",
                                            children: "Aadhar Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "adhaarNumber",
                                            name: "adhaarNumber",
                                            onChange: handleChange,
                                            maxLength: 14,
                                            placeholder: "0000 - 0000 - 0000",
                                            inputMode: "numeric",
                                            pattern: "\\d{4} ?-? ?\\d{4} ?-? ?\\d{4}",
                                            title: "Enter a valid 12-digit Aadhar number in the format 0000 - 0000 - 0000"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 539,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 col-span-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "adhaarAddress",
                                                    className: "block mb-1 font-medium",
                                                    children: "Adhaar Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "adhaarAddress",
                                                    onChange: handleChange,
                                                    name: "adhaarAddress",
                                                    className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                                    placeholder: "Enter Adhaar address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 555,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "currentAddress",
                                                    className: "block mb-1 font-medium",
                                                    children: "Current Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "currentAddress",
                                                    onChange: handleChange,
                                                    name: "currentAddress",
                                                    className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                                    placeholder: "Enter current address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 554,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        gridColumn: '1 / -1'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "houseRoute",
                                            children: "House Route (In Detail)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "houseRoute",
                                            name: "houseRoute",
                                            maxLength: 1000,
                                            onChange: handleChange,
                                            rows: 5,
                                            placeholder: "Describe your house route in detail (up to 1000 characters)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 581,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "phoneNumber1",
                                            children: "Phone Number 1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 594,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            id: "phoneNumber1",
                                            name: "phoneNumber1",
                                            pattern: "[0-9]{10}",
                                            onChange: handleChange,
                                            onInput: (e)=>{
                                                const input = e.target;
                                                input.value = input.value.replace(/\D/g, '').slice(0, 10); // only digits, max 10
                                            },
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 595,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 593,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "phoneNumber2",
                                            children: "Phone Number 2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 608,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            pattern: "[0-9]{10}",
                                            onChange: handleChange,
                                            onInput: (e)=>{
                                                const input = e.target;
                                                input.value = input.value.replace(/\D/g, '').slice(0, 10); // only digits, max 10
                                            },
                                            inputMode: "numeric",
                                            maxLength: 10,
                                            id: "phoneNumber2",
                                            name: "phoneNumber2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 609,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 607,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 col-span-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "photograph",
                                                    className: "block font-semibold mb-2 text-blue-700",
                                                    children: "Upload Photograph"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            id: "photograph",
                                                            name: "photograph",
                                                            accept: "image/*",
                                                            className: "file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-blue-600 hover:file:bg-blue-700 transition cursor-pointer",
                                                            onChange: (e)=>{
                                                                const input = e.target;
                                                                const file = input.files?.[0];
                                                                if (file) {
                                                                    const imgElement = document.getElementById("photoPreview");
                                                                    imgElement.src = URL.createObjectURL(file);
                                                                    setFormData((prev)=>({
                                                                            ...prev,
                                                                            photograph: file
                                                                        }));
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 625,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            id: "photoPreview",
                                                            alt: "Preview",
                                                            className: "w-16 h-16 object-cover rounded-md border"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 643,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "aadharDoc",
                                                    className: "block font-semibold mb-2 text-blue-700",
                                                    children: "Upload Aadhar Document (PDF)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "file",
                                                            id: "aadharDoc",
                                                            name: "aadharDoc",
                                                            accept: "application/pdf",
                                                            className: "file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-white file:bg-blue-600 hover:file:bg-blue-700 transition cursor-pointer",
                                                            onChange: (e)=>{
                                                                const input = e.target;
                                                                const file = input.files?.[0];
                                                                const label = document.getElementById("pdfPreview");
                                                                label.textContent = file ? file.name : "No file chosen";
                                                                if (file) {
                                                                    setFormData((prev)=>({
                                                                            ...prev,
                                                                            aadharDoc: file
                                                                        }));
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 651,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            id: "pdfPreview",
                                                            className: "text-sm text-gray-600 truncate max-w-[160px]",
                                                            children: "No file chosen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 668,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 648,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-full mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-lg font-semibold mb-2 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 675,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "contactPerson",
                                                            className: "block mb-1 font-medium",
                                                            children: "Contact Person"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 678,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            id: "contactPerson",
                                                            name: "contactPerson",
                                                            className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                                            placeholder: "Name",
                                                            onChange: handleChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "relation",
                                                            className: "block mb-1 font-medium",
                                                            children: "Relation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            id: "relation",
                                                            name: "relation",
                                                            onChange: handleChange,
                                                            className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600",
                                                            placeholder: "e.g. Brother"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "contactPhone",
                                                            className: "block mb-1 font-medium",
                                                            children: "Phone No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "tel",
                                                            id: "contactPhone",
                                                            name: "contactPhone",
                                                            inputMode: "numeric",
                                                            onChange: handleChange,
                                                            pattern: "[0-9]{10}",
                                                            maxLength: 10,
                                                            placeholder: "10-digit number",
                                                            onInput: (e)=>{
                                                                const input = e.target;
                                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                            },
                                                            className: "w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                            lineNumber: 703,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 676,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 674,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                            lineNumber: 497,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                    lineNumber: 495,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Emergency Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                            lineNumber: 728,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "neighbourResidence",
                                                    className: "block",
                                                    children: "Neighbour Residence"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 733,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "neighbourResidence",
                                                    name: "neighbourResidence",
                                                    className: "w-full p-2 border rounded",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 732,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "neighbourPhone",
                                                    className: "block",
                                                    children: "Phone No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 737,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    onChange: handleChange,
                                                    pattern: "[0-9]{10}",
                                                    onInput: (e)=>{
                                                        const input = e.target;
                                                        input.value = input.value.replace(/\D/g, '').slice(0, 10); // only digits, max 10
                                                    },
                                                    inputMode: "numeric",
                                                    maxLength: 10,
                                                    id: "neighbourPhone",
                                                    name: "neighbourPhone",
                                                    className: "w-full p-2 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 736,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 731,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "communityVolunteer",
                                                    className: "block",
                                                    children: "Community Volunteer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "communityVolunteer",
                                                    name: "communityVolunteer",
                                                    className: "w-full p-2 border rounded",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 753,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "communityVolunteerPhone",
                                                    className: "block",
                                                    children: "Phone No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    pattern: "[0-9]{10}",
                                                    onChange: handleChange,
                                                    onInput: (e)=>{
                                                        const input = e.target;
                                                        input.value = input.value.replace(/\D/g, '').slice(0, 10); // only digits, max 10
                                                    },
                                                    inputMode: "numeric",
                                                    maxLength: 10,
                                                    id: "communityVolunteerPhone",
                                                    name: "communityVolunteerPhone",
                                                    className: "w-full p-2 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 752,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "wardMember",
                                                    className: "block",
                                                    children: "Ward Member"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "wardMember",
                                                    name: "wardMember",
                                                    className: "w-full p-2 border rounded",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 775,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 773,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "wardMemberPhone",
                                                    className: "block",
                                                    children: "Phone No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    pattern: "[0-9]{10}",
                                                    onChange: handleChange,
                                                    onInput: (e)=>{
                                                        const input = e.target;
                                                        input.value = input.value.replace(/\D/g, '').slice(0, 10); // only digits, max 10
                                                    },
                                                    inputMode: "numeric",
                                                    maxLength: 10,
                                                    id: "wardMemberPhone",
                                                    name: "wardMemberPhone",
                                                    className: "w-full p-2 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 777,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 772,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "aashaVolunteer",
                                                    className: "block",
                                                    children: "Aasha Volunteer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 794,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "aashaVolunteer",
                                                    name: "aashaVolunteer",
                                                    className: "w-full p-2 border rounded",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 795,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 793,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "aashaVolunteerPhone",
                                                    className: "block",
                                                    children: "Phone No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    pattern: "[0-9]{10}",
                                                    onChange: handleChange,
                                                    onInput: (e)=>{
                                                        const input = e.target;
                                                        input.value = input.value.replace(/\D/g, '').slice(0, 10); // only digits, max 10
                                                    },
                                                    inputMode: "numeric",
                                                    maxLength: 10,
                                                    id: "aashaVolunteerPhone",
                                                    name: "aashaVolunteerPhone",
                                                    className: "w-full p-2 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 797,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 792,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "otherPerson",
                                                    className: "block",
                                                    children: "Other Person"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    id: "otherPerson",
                                                    name: "otherPerson",
                                                    className: "w-full p-2 border rounded ",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "otherPersonPhone",
                                                    className: "block",
                                                    children: "Phone No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    pattern: "[0-9]{10}",
                                                    onChange: handleChange,
                                                    onInput: (e)=>{
                                                        const input = e.target;
                                                        input.value = input.value.replace(/\D/g, '').slice(0, 10); // only digits, max 10
                                                    },
                                                    inputMode: "numeric",
                                                    maxLength: 10,
                                                    id: "otherPersonPhone",
                                                    name: "otherPersonPhone",
                                                    className: "w-full p-2 border rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                            lineNumber: 817,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                                    lineNumber: 812,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/viewpage/appform/page.tsx",
                            lineNumber: 729,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                    lineNumber: 727,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition",
                    children: isEditMode ? "Update Form" : "Submit Form"
                }, void 0, false, {
                    fileName: "[project]/src/app/viewpage/appform/page.tsx",
                    lineNumber: 835,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/viewpage/appform/page.tsx",
            lineNumber: 312,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/viewpage/appform/page.tsx",
        lineNumber: 310,
        columnNumber: 9
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_viewpage_appform_page_tsx_6886268e._.js.map