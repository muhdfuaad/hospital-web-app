'use client';
import { useParams } from 'next/navigation';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import API from '@/lib/axios';
import { User, Phone, Calendar, FileText, Heart, Camera, Users, AlertCircle, ClipboardList, CheckCircle, Shield, RotateCcw, Lock, Plus, } from 'lucide-react';


const API_BASE = API.defaults.baseURL;

interface District {
    id: number
    name: string;
}

interface Panchayath {
    panchayathId: number;
    panchayathName: string;
    dstId: number;
    dstName: string;
}
type Params = {
    params: {
        id: string;
    };
};
interface PatientCategory {
    id: number;
    categoryName: string;
}


// Explicit form data typing
interface FormDataType {
    id?: number;
    patientId: string;
    districtId: number | null;
    panchayathId: number | null;
    categoryId: number | null;
    ward: string;
    area: string;
    date: string;
    diagnosis: string;
    status: string;
    name: string;
    dob: string;
    age: string;
    gender: string;
    profession: string;
    religion: string;
    financialStatus: string;
    spouseName: string;
    fatherName: string;
    motherName: string;
    adhaarAddress: string;
    currentAddress: string;
    phoneNumber1: string;
    phoneNumber2: string;
    email: string;
    adhaarNumber: string;
    contactPerson: string;
    relation: string;
    contactPhone: string;
    neighbourResidence: string;
    neighbourPhone: string;
    communityVolunteer: string;
    communityVolunteerPhone: string;
    wardMember: string;
    wardMemberPhone: string;
    aashaVolunteer: string;
    aashaVolunteerPhone: string;
    otherPerson: string;
    otherPersonPhone: string;
    houseRoute: string;
    photograph: File | null;
    aadharDoc: File | null;
    previewPhotoUrl?: string;
    previewAadharName?: string;
}

export default function HospitalRegistrationForm() {
    const today = new Date().toISOString().split('T')[0];
    const router = useRouter();

    const searchParams = useSearchParams();
    const isEditMode = searchParams.get('edit') === 'true';
    const PatientId = searchParams.get('id'); // Get from query params, not route params
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [showAdditionalDetailsCheckbox, setShowAdditionalDetailsCheckbox] = useState(false);
    const [collectAdditionalDetails, setCollectAdditionalDetails] = useState(false);


    const [formData, setFormData] = useState<FormDataType>({
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
        dob: "",
        age: '',
        gender: '',
        profession: '',
        religion: '',
        financialStatus: '',
        spouseName: '',
        fatherName: '',
        motherName: '',
        adhaarAddress: '',
        currentAddress: '',
        phoneNumber1: '',
        phoneNumber2: '',
        email: '',
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
        aadharDoc: null,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [districts, setDistricts] = useState<District[]>([]);
    const [panchayaths, setPanchayaths] = useState<Panchayath[]>([]);
    const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);
    const [selectedPanchayathId, setSelectedPanchayathId] = useState<number | null>(null);

    // Category management states
    const [categories, setCategories] = useState<PatientCategory[]>([]);
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");
    const [isCategoryLoading, setIsCategoryLoading] = useState(false);
    const [categoryError, setCategoryError] = useState("");

    // Fetch patient categories on load
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${API_BASE}/api/PatientCategories`);
                if (response.ok) {
                    const data: PatientCategory[] = await response.json();
                    setCategories(Array.isArray(data) ? data : []);
                } else {
                    console.error("Failed to fetch categories — falling back to defaults");
                    fallbackCategories();
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
                fallbackCategories();
            }
        };

        const fallbackCategories = () => {
            setCategories([
                { id: 1, categoryName: "General" },
                { id: 2, categoryName: "Emergency" }
            ]);
        };

        fetchCategories();
    }, []);

    const handleAddCategory = async () => {
        const trimmed = newCategoryName.trim();
        if (!trimmed) {
            setCategoryError("Category name is required");
            return;
        }

        if (categories.some((cat) => cat?.categoryName?.toLowerCase() === trimmed.toLowerCase())) {
            setCategoryError("Category already exists");
            return;
        }

        setIsCategoryLoading(true);
        setCategoryError("");

        try {
            const response = await fetch(`${API_BASE}/api/PatientCategories`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ categoryName: newCategoryName }),   // ✅ MATCH your API's expected property
            });

            if (response.ok) {
                const newCategory = await response.json();

                if (newCategory && (newCategory.name || newCategory.categoryName)) {
                    const categoryDisplayName = newCategory.name || newCategory.categoryName;

                    setCategories((prev) => [...prev, { ...newCategory, name: categoryDisplayName }]);
                    setFormData((prev) => ({ ...prev, categoryId: newCategory.id })); // Use categoryId here
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
        } finally {
            setIsCategoryLoading(false);
        }
    };

    const handleCategoryKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddCategory();
        }
        if (e.key === "Escape") {
            handleCloseCategoryModal();
        }
    };

    const handleCloseCategoryModal = () => {
        setShowCategoryModal(false);
        setNewCategoryName("");
        setCategoryError("");
    };

    const [buttonText, setButtonText] = useState("Submit");
    const [existingPhotoUrl, setExistingPhotoUrl] = useState('');
    const [existingAadharDocUrl, setExistingAadharDocUrl] = useState('');
    const [photoFileName, setPhotoFileName] = useState('');
    const [aadharFileName, setAadharFileName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const [doctors, setDoctors] = useState([]);

    // Fetch districts and panchayaths from API first
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const [dRes, pRes] = await Promise.all([
                    API.get<District[]>('/api/Districts'),
                    API.get<Panchayath[]>('/api/Panchayaths'),
                ]);

                setDistricts(dRes.data);
                setPanchayaths(pRes.data);
            } catch (error) {
                console.error('Failed to fetch districts/panchayaths', error);
            }
        };

        fetchLocations();
    }, []);

    useEffect(() => {
        fetch(`${API_BASE}/api/doctors`) // your .NET Core backend endpoint
            .then((res) => res.json())
            .then((data) => setDoctors(data))
            .catch((err) => console.error("Error fetching doctors:", err));
    }, []);

    // Fetch Registration Number from API (only for new registrations)
    useEffect(() => {
        if (!isEditMode) {
            const fetchRegNumber = async () => {
                try {
                    const response = await API.get<string>('/api/Hpforms/get-patient-id'); // Plain string expected
                    const regNumber = response.data;

                    setFormData(prev => ({
                        ...prev,
                        patientId: regNumber,
                    }));
                } catch (err) {
                    console.error('Failed to fetch Registration Number', err);
                }
            };

            fetchRegNumber();
        }
    }, [isEditMode]);

    const formatDateForInput = (dateString: string): string => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const isPersonalCare = Number(formData.categoryId) === 1; // Assuming category ID 3 is "Home Care"
        setShowAdditionalDetailsCheckbox(isPersonalCare);
    }, [formData.categoryId]);



    // Fetch existing patient data for edit mode
    useEffect(() => {
        if (isEditMode && PatientId && districts.length > 0 && panchayaths.length > 0 && categories.length > 0) {
            const fetchPatientData = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(`${API_BASE}/api/Hpforms/patient/${PatientId}`);

                    if (response.ok) {
                        const patientData = await response.json();
                        const formattedDate = patientData.date
                            ? formatDateForInput(patientData.date)
                            : "";

                        // Find matching IDs
                        // Use IDs directly from patientData
                        const districtId = patientData.districtId ?? null;
                        const panchayathId = patientData.panchayathId ?? null;
                        const categoryId = patientData.categoryId ?? null;

                        // Format the date for the input field
                        const formattedDob = patientData.dob ? new Date(patientData.dob).toISOString().split('T')[0] : '';

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
                            dob: formattedDob,
                            age: patientData.age?.toString() || '',

                            // ✅ IMPORTANT: codes only
                            gender: patientData.gender ?? '',                                  // 'M' | 'F' | 'O'
                            financialStatus: patientData.financialStatus != null
                                ? String(patientData.financialStatus)                            // '1'..'5'
                                : '',
                            profession: patientData.profession || '',
                            religion: patientData.religion || '',
                            spouseName: patientData.spouseName || '',
                            fatherName: patientData.fatherName || '',
                            motherName: patientData.motherName || '',
                            adhaarAddress: patientData.adhaarAddress || '',
                            currentAddress: patientData.currentAddress || '',
                            phoneNumber1: patientData.phoneNumber1 || '',
                            phoneNumber2: patientData.phoneNumber2 || '',
                            email: patientData.email || '',
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
                            aadharDoc: null,
                        });

                        // Show checkbox if category is already Personal Care
                        // This uses categoryName directly from the patientData. You might need to adjust based on API response.
                        const patientCategory = categories.find(cat => cat.id === patientData.categoryId);
                        if (patientCategory?.categoryName.toLowerCase().trim() === "Home Care") {
                            setShowAdditionalDetailsCheckbox(true);
                            setCollectAdditionalDetails(true); // Assuming if it's personal care, we collect details
                        }


                        // Set existing photo URL if available
                        if (patientData.photo) {
                            setPhotoFileName(patientData.photo);  // Save just filename
                            setExistingPhotoUrl(`${API_BASE}/uploads/${patientData.photo}`); // Assuming this is the path for photos
                        }
                        if (patientData.aadharFile) {
                            setAadharFileName(patientData.aadharFile);  // Save just filename
                            setExistingAadharDocUrl(`${API_BASE}/uploads/${patientData.aadharFile}`); // Assuming this is the path for Aadhar docs
                        }

                        // Set selected district for panchayath filtering
                        const selectedDistrict = districts.find(d => d.name === patientData.district);
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
                } finally {
                    setIsLoading(false);
                }
            };

            fetchPatientData();
        }
    }, [isEditMode, PatientId, districts, categories, panchayaths]); // Added panchayaths to dependencies


    // Update selected district when district data changes in edit mode
    useEffect(() => {
        if (isEditMode && formData.districtId && districts.length > 0) {
            const selectedDistrict = districts.find(d => d.id === formData.districtId);
            if (selectedDistrict) {
                setSelectedDistrictId(selectedDistrict.id);
            }
        }
    }, [formData.districtId, districts, isEditMode]);

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value, files } = e.target;

        if (files) {
            // Handle photo upload
            if (name === "photograph" && files[0]) {
                setFormData(prev => ({
                    ...prev,
                    photograph: files[0],
                    previewPhotoUrl: URL.createObjectURL(files[0]),
                }));
                setPhotoFileName(files[0].name);
                setExistingPhotoUrl('');
            }

            // Handle aadhar upload
            if (name === "aadharDoc" && files[0]) {
                setFormData(prev => ({
                    ...prev,
                    aadharDoc: files[0],
                    previewAadharName: files[0].name,
                }));
                setAadharFileName(files[0].name);
                setExistingAadharDocUrl('');
            }
        } else {
            const fieldValue = name.endsWith("Id") ? parseInt(value, 10) || null : value;

            setFormData(prev => {
                let updated = { ...prev, [name]: fieldValue };

                // 🔹 DOB → auto calculate Age
                if (name === "dob" && value) {
                    const dobDate = new Date(value);
                    const today = new Date();
                    let age = today.getFullYear() - dobDate.getFullYear();
                    const monthDiff = today.getMonth() - dobDate.getMonth();
                    if (
                        monthDiff < 0 ||
                        (monthDiff === 0 && today.getDate() < dobDate.getDate())
                    ) {
                        age--;
                    }
                    updated.age = age.toString();
                }

                // 🔹 Age → auto calculate DOB
                if (name === "age" && value) {
                    const ageNum = parseInt(value, 10);
                    if (!isNaN(ageNum)) {
                        const today = new Date();
                        const dobDate = new Date(
                            today.getFullYear() - ageNum,
                            today.getMonth(),
                            today.getDate()
                        );
                        updated.dob = dobDate.toISOString().split("T")[0]; // yyyy-mm-dd
                    }
                }

                return updated;
            });

            if (name === "categoryId") {
                const selected = categories.find((c) => c.id === parseInt(value));
                setShowAdditionalDetailsCheckbox(
                    selected?.categoryName.toLowerCase() === "home care"
                );
                setCollectAdditionalDetails(false);
            }

            if (name === "districtId") {
                const selectedId = parseInt(value, 10);
                setSelectedDistrictId(selectedId);
                setFormData((prev) => ({
                    ...prev,
                    panchayathId: null,
                }));
                setSelectedPanchayathId(null);
            }

            if (name === "panchayathId") {
                setSelectedPanchayathId(parseInt(value, 10));
            }
        }

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formElement = e.target as HTMLFormElement;
        const form = new FormData(formElement);

        // Append all form data fields
        form.append('Ward', formData.ward);
        form.append('Area', formData.area);
        form.append('Date', formData.date);
        form.append('Diagnosis', formData.diagnosis);
        form.append('Name', formData.name);
        // Convert date string to proper format if needed
        const dobDate = new Date(formData.dob);
        form.append('dob', dobDate.toISOString());
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

        console.log("Fetched patientData:", formData);

        // Append files if present
        if (formData.photograph) {
            form.append('Photograph', formData.photograph);
        }
        if (formData.aadharDoc) {
            form.append('AadharDoc', formData.aadharDoc);
        }

        try {
            const url = isEditMode
                ? `${API_BASE}/api/Hpforms/patient/${PatientId}`
                : `${API_BASE}/api/Hpforms`;

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
            setTimeout(() => {
                const categoryId = Number(formData.categoryId);
                const pid = formData.patientId ? Number(formData.patientId) : null;

                if (categoryId === 1 && collectAdditionalDetails && pid) {
                    router.push(`/patientdetails?patientId=${encodeURIComponent(pid.toString())}`);
                } else {
                    router.push("/viewpatients");
                }
            }, 1500);


        } catch (err) {
            console.error("Submission failed", err);
            setSubmitStatus('error');
            setSubmitMessage("Submission failed. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    const inputClasses = (fieldName: string, errors: Record<string, any> = {}) => `
        w-full px-4 py-3 rounded-xl border-2 transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500
        ${errors[fieldName]
            ? 'border-red-500 bg-red-50'
            : 'border-gray-300 bg-white hover:border-blue-400'
        }
        placeholder-gray-500 text-gray-900 font-medium
    `;

    // Show loading state
    if (isLoading) {
        return (
            <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 px-10 py-8">
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl text-blue-600">Loading patient data...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 text-center sm:p-6 shadow-lg">
                <div className="flex justify-center items-center gap-3 mb-3">
                    <h1 className="text-2xl sm:text-3xl font-light">
                        {isEditMode ? 'Edit Patient Information' : 'Patient Registration'}
                    </h1>
                    <Heart className="w-6 h-6 text-blue-200" />
                </div>

                <p className="text-sm sm:text-lg text-blue-200">
                    {isEditMode ? 'Update patient details' : 'Comprehensive patient care registration system'}
                </p>
            </div>

            <div className="p-5">
                {/* Form */}
                <form id="hospital-form" onSubmit={handleSubmit} className="bg-white rounded-b-2xl shadow-2xl">
                    <div className="space-y-8">

                        {/* Registration Details Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <ClipboardList className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-6l font-semibold text-blue-900">Registration Details</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Patient ID<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="PatientId"
                                        value={formData.patientId}
                                        onChange={handleChange}
                                        className={inputClasses('PatientId')}
                                        placeholder="Auto-generated ID"
                                        readOnly
                                        style={{ backgroundColor: '#f0f4f8', cursor: 'not-allowed' }}
                                    />
                                    {errors.PatientId && <p className="text-red-500 text-sm mt-1">{errors.PatientId}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Date <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className={`${inputClasses('date')} pl-12`}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* District Select */}
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        District <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="districtId"
                                        value={formData.districtId ?? ''}
                                        onChange={(e) => {
                                            const selectedId = parseInt(e.target.value);
                                            setSelectedDistrictId(selectedId); // ✅ Set selectedDistrictId here
                                            setFormData((prev) => ({
                                                ...prev,
                                                districtId: isNaN(selectedId) ? null : selectedId,
                                            }));
                                        }}
                                        className={`${inputClasses("district")} flex-1`}
                                        required
                                    >
                                        <option value="">Select District</option>
                                        {districts.map((district) => (
                                            <option key={district.id} value={district.id}>
                                                {district.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Panchayath Select */}
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Panchayath <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="panchayathId"
                                        value={formData.panchayathId ?? ''}
                                        onChange={(e) => {
                                            const selectedId = parseInt(e.target.value, 10);
                                            setSelectedPanchayathId(selectedId);
                                            setFormData(prev => ({
                                                ...prev,
                                                panchayathId: selectedId,
                                            }));
                                        }}
                                        className={inputClasses('panchayath')}
                                        disabled={!selectedDistrictId}
                                        required
                                    >
                                        <option value="">
                                            {selectedDistrictId ? "Select Panchayath" : "Select District First"}
                                        </option>
                                        {panchayaths
                                            .filter(p => p.dstId === selectedDistrictId)
                                            .map(p => (
                                                <option key={p.panchayathId} value={p.panchayathId}>
                                                    {p.panchayathName}
                                                </option>
                                            ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Ward Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="ward"
                                        value={formData.ward}
                                        onChange={handleChange}
                                        className={inputClasses('ward')}
                                        placeholder="Enter Ward No."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Area / Route <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="area"
                                        value={formData.area}
                                        onChange={handleChange}
                                        className={inputClasses('area')}
                                        placeholder="Enter area or route"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Diagnosis <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="diagnosis"
                                        value={formData.diagnosis}
                                        onChange={handleChange}
                                        rows={4}
                                        maxLength={1000}
                                        className={inputClasses('diagnosis')}
                                        placeholder="Enter diagnosis details (max 1000 characters)"

                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Category <span className="text-red-500">*</span>
                                    </label>

                                    <div className="flex gap-2 items-center">
                                        <select
                                            name="categoryId"
                                            value={formData.categoryId ?? ''}
                                            onChange={(e) => {
                                                const selectedId = parseInt(e.target.value);
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    categoryId: isNaN(selectedId) ? null : selectedId,
                                                }));
                                            }}
                                            className={`${inputClasses("category")} flex-1`}
                                            required
                                        >
                                            <option value="">Select Category</option>
                                            {categories
                                                .filter((category) => category && category.categoryName)
                                                .map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.categoryName}
                                                    </option>
                                                ))}
                                        </select>

                                        <button
                                            type="button"
                                            onClick={() => setShowCategoryModal(true)}
                                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition flex items-center justify-center"
                                            title="Add new category"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    {/* Category Modal */}
                                    {showCategoryModal && (
                                        <div
                                            className="fixed inset-0 bg-black/30 flex justify-center items-center z-50"
                                            onKeyDown={(e) => {
                                                if (e.key === "Escape") handleCloseCategoryModal();
                                            }}
                                        >
                                            <div className="bg-white rounded-lg w-full max-w-sm shadow-lg p-6 animate-fade-in">
                                                <h3 className="text-lg font-semibold mb-4">➕ Add Patient Category</h3>

                                                <input
                                                    type="text"
                                                    value={newCategoryName}
                                                    onChange={(e) => {
                                                        setNewCategoryName(e.target.value);
                                                        setCategoryError("");
                                                    }}
                                                    onKeyDown={handleCategoryKeyPress}
                                                    placeholder="Enter category name"
                                                    className="w-full border border-gray-300 px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    autoFocus
                                                />

                                                {categoryError && (
                                                    <p className="text-red-500 text-sm mb-4">{categoryError}</p>
                                                )}

                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={handleCloseCategoryModal}
                                                        className="border px-4 py-2 rounded hover:bg-gray-100"
                                                        disabled={isCategoryLoading}
                                                    >
                                                        Cancel
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={handleAddCategory}
                                                        disabled={isCategoryLoading || !newCategoryName.trim()}
                                                        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-blue-300"
                                                    >
                                                        {isCategoryLoading ? "Adding..." : "Save"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Status <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="status"
                                        value={formData.status || 'Active'}
                                        onChange={handleChange}
                                        className={inputClasses('status')}
                                        required
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Expired">Expired</option>
                                    </select>
                                </div>


                            </div>
                        </div>

                        {/* Personal Information Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <User className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-6l font-semibold text-blue-900">Personal Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses('name')}
                                        placeholder="Enter full name"
                                        required
                                    />
                                </div>
                                <div className="flex gap-6">
                                    {/* DOB */}
                                    <div className="flex-1">
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Date of Birth <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleChange}
                                            className={inputClasses("dob")}
                                            required
                                        />
                                    </div>

                                    {/* Age */}
                                    <div className="flex-1">
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Age <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleChange}
                                            min="1"
                                            className={inputClasses("age")}
                                            placeholder="Enter age"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Gender <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className={inputClasses('gender')}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </select>
                                </div>
                                {/* Profession */}
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Profession
                                    </label>
                                    <input
                                        type="text"
                                        name="profession"
                                        value={formData.profession}
                                        onChange={handleChange}
                                        className={inputClasses("profession")}
                                    />
                                </div>

                                {/* Religion */}
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Religion
                                    </label>
                                    <select
                                        name="religion"
                                        value={formData.religion || ""}
                                        onChange={handleChange}
                                        className={inputClasses("religion")}
                                    >
                                        <option value="">-- Select Religion --</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Hinduism">Hinduism</option>
                                        <option value="Christianity">Christianity</option>
                                        <option value="Buddhism">Buddhism</option>
                                        <option value="Jainism">Jainism</option>
                                        <option value="Sikhism">Sikhism</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Financial Status <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="financialStatus"
                                        value={formData.financialStatus}
                                        onChange={handleChange}
                                        className={inputClasses('financialStatus')}
                                        required
                                    >
                                        <option value="">Select Financial Status</option>
                                        <option value="1">Wealthy</option>
                                        <option value="2">Upper Middle Class</option>
                                        <option value="3">Lower Middle Class</option>
                                        <option value="4">Poor</option>
                                        <option value="5">Very Poor</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Aadhar Number
                                    </label>
                                    <input
                                        type="text"
                                        name="adhaarNumber"
                                        value={formData.adhaarNumber}
                                        onChange={handleChange}
                                        maxLength={14}
                                        className={inputClasses('adhaarNumber')}
                                        placeholder="0000 - 0000 - 0000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Spouse Name
                                    </label>
                                    <input
                                        type="text"
                                        name="spouseName"
                                        value={formData.spouseName}
                                        onChange={handleChange}
                                        className={inputClasses('spouseName')}
                                        placeholder="Enter spouse name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Father Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fatherName"
                                        value={formData.fatherName}
                                        onChange={handleChange}
                                        className={inputClasses('fatherName')}
                                        placeholder="Enter father name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Mother Name
                                    </label>
                                    <input
                                        type="text"
                                        name="motherName"
                                        value={formData.motherName}
                                        onChange={handleChange}
                                        className={inputClasses('motherName')}
                                        placeholder="Enter mother name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Phone Number 1 <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phoneNumber1"
                                            value={formData.phoneNumber1}
                                            onChange={handleChange}
                                            className={`${inputClasses('phoneNumber1')} pl-12`}
                                            placeholder="10-digit number"
                                            maxLength={10}
                                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                const input = e.currentTarget;
                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                            }}
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Phone Number 2
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phoneNumber2"
                                            value={formData.phoneNumber2}
                                            onChange={handleChange}
                                            className={`${inputClasses('phoneNumber2')} pl-12`}
                                            placeholder="10-digit number"
                                            maxLength={10}
                                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                const input = e.currentTarget;
                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                            }}
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={inputClasses("email")}
                                        required
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Adhaar Address
                                    </label>
                                    <textarea
                                        name="adhaarAddress"
                                        value={formData.adhaarAddress}
                                        onChange={handleChange}
                                        rows={3}
                                        className={inputClasses('adhaarAddress')}
                                        placeholder="Enter Adhaar address"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Current Address
                                    </label>
                                    <textarea
                                        name="currentAddress"
                                        value={formData.currentAddress}
                                        onChange={handleChange}
                                        rows={3}
                                        className={inputClasses('currentAddress')}
                                        placeholder="Enter current address"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        House Route (In Detail)
                                    </label>
                                    <textarea
                                        name="houseRoute"
                                        value={formData.houseRoute}
                                        onChange={handleChange}
                                        rows={4}
                                        maxLength={1000}
                                        className={inputClasses('houseRoute')}
                                        placeholder="Describe your house route in detail (up to 1000 characters)"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Person Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <Users className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-6l font-semibold text-blue-900">Contact Person</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Contact Person Name
                                    </label>
                                    <input
                                        type="text"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        className={inputClasses('contactPerson')}
                                        placeholder="Enter name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Relation
                                    </label>
                                    <input
                                        type="text"
                                        name="relation"
                                        value={formData.relation}
                                        onChange={handleChange}
                                        className={inputClasses('relation')}
                                        placeholder="e.g. Brother, Sister"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="contactPhone"
                                            value={formData.contactPhone}
                                            onChange={handleChange}
                                            className={`${inputClasses('contactPhone')} pl-12`}
                                            placeholder="10-digit number"
                                            maxLength={10}
                                            onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                const input = e.currentTarget;
                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Contacts Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-6l font-semibold text-blue-900">Emergency Contacts</h3>
                            </div>

                            <div className="space-y-6">
                                {/* Neighbour Residence */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Neighbour Residence
                                        </label>
                                        <input
                                            type="text"
                                            name="neighbourResidence"
                                            value={formData.neighbourResidence}
                                            onChange={handleChange}
                                            className={inputClasses('neighbourResidence')}
                                            placeholder="Enter neighbour name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="neighbourPhone"
                                                value={formData.neighbourPhone}
                                                onChange={handleChange}
                                                className={`${inputClasses('neighbourPhone')} pl-12`}
                                                placeholder="10-digit number"
                                                maxLength={10}
                                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                    const input = e.currentTarget;
                                                    input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Community Volunteer */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Community Volunteer
                                        </label>
                                        <input
                                            type="text"
                                            name="communityVolunteer"
                                            value={formData.communityVolunteer}
                                            onChange={handleChange}
                                            className={inputClasses('communityVolunteer')}
                                            placeholder="Enter volunteer name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="communityVolunteerPhone"
                                                value={formData.communityVolunteerPhone}
                                                onChange={handleChange}
                                                className={`${inputClasses('communityVolunteerPhone')} pl-12`}
                                                placeholder="10-digit number"
                                                maxLength={10}
                                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                    const input = e.currentTarget;
                                                    input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Ward Member */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Ward Member
                                        </label>
                                        <input
                                            type="text"
                                            name="wardMember"
                                            value={formData.wardMember}
                                            onChange={handleChange}
                                            className={inputClasses('wardMember')}
                                            placeholder="Enter ward member name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="wardMemberPhone"
                                                value={formData.wardMemberPhone}
                                                onChange={handleChange}
                                                className={`${inputClasses('wardMemberPhone')} pl-12`}
                                                placeholder="10-digit number"
                                                maxLength={10}
                                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                    const input = e.currentTarget;
                                                    input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Aasha Volunteer */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Aasha Volunteer
                                        </label>
                                        <input
                                            type="text"
                                            name="aashaVolunteer"
                                            value={formData.aashaVolunteer}
                                            onChange={handleChange}
                                            className={inputClasses('aashaVolunteer')}
                                            placeholder="Enter aasha volunteer name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="aashaVolunteerPhone"
                                                value={formData.aashaVolunteerPhone}
                                                onChange={handleChange}
                                                className={`${inputClasses('aashaVolunteerPhone')} pl-12`}
                                                placeholder="10-digit number"
                                                maxLength={10}
                                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                    const input = e.currentTarget;
                                                    input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Other Person */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Other Person
                                        </label>
                                        <input
                                            type="text"
                                            name="otherPerson"
                                            value={formData.otherPerson}
                                            onChange={handleChange}
                                            className={inputClasses('otherPerson')}
                                            placeholder="Enter other person name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="tel"
                                                name="otherPersonPhone"
                                                value={formData.otherPersonPhone}
                                                onChange={handleChange}
                                                className={`${inputClasses('otherPersonPhone')} pl-12`}
                                                placeholder="10-digit number"
                                                maxLength={10}
                                                onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                    const input = e.currentTarget;
                                                    input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* File Upload Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <Camera className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-6l font-semibold text-blue-900">Documents</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Photograph Upload */}
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Patient Photograph
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            name="photograph"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const input = e.target as HTMLInputElement; // Cast to HTMLInputElement
                                                const file = input.files?.[0];
                                                if (file) {

                                                    const imgElement = document.getElementById("photoPreview") as HTMLImageElement;
                                                    if (imgElement) {
                                                        imgElement.src = URL.createObjectURL(file);
                                                        imgElement.style.display = 'block';
                                                    }
                                                    setFormData(prev => ({ ...prev, photograph: file }));
                                                }
                                            }}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                                            <div className="text-center">
                                                <Camera className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                                <p className="text-sm text-blue-600 font-medium">Click to upload photo</p>
                                                <p className="text-xs text-blue-400">JPG, PNG files only</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Display existing photo or preview new one */}
                                    {(formData.previewPhotoUrl || existingPhotoUrl) && (
                                        <img
                                            id="photoPreview"
                                            alt="Photo Preview"
                                            src={formData.previewPhotoUrl || existingPhotoUrl}
                                            className="mt-4 w-24 h-24 object-cover rounded-lg border-2 border-blue-200 block"
                                        />
                                    )}
                                    {!(formData.previewPhotoUrl || existingPhotoUrl) && (
                                        <img
                                            id="photoPreview"
                                            alt="Photo Preview"
                                            className="mt-4 w-24 h-24 object-cover rounded-lg border-2 border-blue-200 hidden"
                                        />
                                    )}
                                </div>

                                {/* Aadhar Document Upload */}
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Aadhar Document (PDF)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            name="aadharDoc"
                                            accept="application/pdf"
                                            onChange={(e) => {
                                                const input = e.target as HTMLInputElement; // Cast to HTMLInputElement
                                                const file = input.files?.[0];
                                                const label = document.getElementById("pdfFileNameDisplay"); // Updated ID
                                                if (label) {
                                                    label.textContent = file ? file.name : "No file chosen";
                                                }
                                                if (file) {
                                                    setFormData(prev => ({ ...prev, aadharDoc: file }));
                                                }
                                            }}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        />
                                        <div className="flex items-center justify-center w-full h-32 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                                            <div className="text-center">
                                                <FileText className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                                <p className="text-sm text-blue-600 font-medium">Click to upload PDF</p>
                                                <p className="text-xs text-blue-400">PDF files only</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p id="pdfFileNameDisplay" className="mt-2 text-sm text-gray-600 truncate">
                                        {formData.previewAadharName || aadharFileName || "No file chosen"}
                                    </p>
                                </div>
                                {showAdditionalDetailsCheckbox && (
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 px-4 py-3 rounded-md mt-6 shadow-sm">
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                id="additionalDetails"
                                                checked={collectAdditionalDetails}
                                                onChange={(e) => setCollectAdditionalDetails(e.target.checked)}
                                                className="mt-1 w-5 h-5 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="additionalDetails" className="text-sm sm:text-base font-medium leading-6">
                                                <span className="font-semibold text-yellow-900">Additional Patient Details:</span> Please tick this box if you're registering as a <span className="font-bold"> Home Care</span> patient. This will redirect you to collect further required information.
                                            </label>
                                        </div>
                                    </div>
                                )}


                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-8 pb-10">
                            <div className="w-full flex justify-center items-center gap-4 mt-8 flex-wrap">
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`px-12 py-4 rounded-xl font-bold text-lg text-white shadow-lg transform transition-all duration-300 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                            {isEditMode ? 'Updating...' : 'Submitting...'}
                                        </div>
                                    ) : (
                                        isEditMode ? 'Update Patient' : 'Register Patient'
                                    )}
                                </button>

                                {/* Reset Button */}
                                <button
                                    type="button"
                                    className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                                    onClick={() => {
                                        // Use a custom modal or message box instead of confirm()
                                        // For simplicity, I'm just showing a console log and proceeding for now.
                                        // In a real app, you'd show a UI prompt.
                                        console.log('Reset form confirmation needed');
                                        // Proceed with reset for demonstration, but ideal is a custom modal
                                        setFormData({
                                            patientId: '', date: today, districtId: null, panchayathId: null, categoryId: null, ward: '', area: '', diagnosis: '', status: '',
                                            name: '', dob: '', age: '', gender: '', profession: '', religion: '', financialStatus: '', adhaarNumber: '', spouseName: '', fatherName: '', motherName: '',
                                            phoneNumber1: '', phoneNumber2: '', adhaarAddress: '', currentAddress: '', houseRoute: '', contactPerson: '',
                                            relation: '', contactPhone: '', neighbourResidence: '', neighbourPhone: '', communityVolunteer: '', email: '',
                                            communityVolunteerPhone: '', wardMember: '', wardMemberPhone: '', aashaVolunteer: '', aashaVolunteerPhone: '',
                                            otherPerson: '', otherPersonPhone: '', photograph: null, aadharDoc: null
                                        });
                                        setSelectedDistrictId(null);
                                        setSelectedPanchayathId(null);
                                        setPhotoFileName('');
                                        setAadharFileName('');
                                        setExistingPhotoUrl('');
                                        setExistingAadharDocUrl('');
                                        // Hide and clear image preview
                                        const photoPreview = document.getElementById("photoPreview") as HTMLImageElement;
                                        if (photoPreview) {
                                            photoPreview.style.display = 'none';
                                            photoPreview.src = '';
                                        }
                                        // Clear PDF preview text
                                        const pdfFileNameDisplay = document.getElementById("pdfFileNameDisplay");
                                        if (pdfFileNameDisplay) {
                                            pdfFileNameDisplay.textContent = 'No file chosen';
                                        }
                                    }}

                                >
                                    <RotateCcw className="w-6 h-6 mr-3" />
                                    Reset Form
                                </button>
                            </div>
                        </div>

                        {/* Submit Status Message */}
                        <div className="flex justify-center">
                            {submitMessage && (
                                <div className={`mb-6 p-4 rounded-xl text-center font-semibold ${submitStatus === 'success'
                                    ? 'bg-green-100 text-green-800 p-0 rounded mb-4 shadow text-sm font-medium text-center'
                                    : 'bg-red-100 text-red-800 border border-red-300'
                                    }`}>
                                    {submitMessage}
                                </div>
                            )}
                        </div>
                    </div>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center justify-center mb-4">
                            <Shield className="w-8 h-8 text-blue-600 mr-3" />
                            <span className="text-lg font-semibold text-blue-900">Secure Registration System</span>
                        </div>
                        <p className="text-gray-600">
                            Your information is securely processed and stored in compliance with healthcare data protection standards.
                        </p>
                        <div className="flex justify-center items-center mt-4 space-x-6 text-sm text-gray-500">
                            <div className="flex items-center">
                                <Lock className="w-4 h-4 mr-1" />
                                Encrypted
                            </div>
                            <div className="flex items-center">
                                <Shield className="w-4 h-4 mr-1" />
                                HIPAA Complied
                            </div>
                            <div className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Verified
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
