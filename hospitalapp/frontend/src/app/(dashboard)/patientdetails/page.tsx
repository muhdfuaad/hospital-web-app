'use client';

import React, { useState, useEffect } from 'react';
import { User, Eye, MapPin, Building, Pill, Heart, Activity, Phone, Calendar, FileText, DollarSign, HandHeart, Camera, Upload, Users, AlertCircle, ClipboardList, CheckCircle, Shield, RotateCcw, Lock, Plus, X, Check, Home } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import API from '@/lib/axios';
import { useRouter } from 'next/navigation';

// Type definitions matching backend
interface Clinic {
    id?: number;
    clinicName: string;
    registerNo: string;
    remarks: string;
}

interface ClinicMaster {
    id: number;
    clinicName: string;
}

interface Difficulty {
    difficultyName: string;
    impact: string;
    remarks: string;
}

interface FamilyMember {
    id?: number;
    name: string;
    age: string;
    relation: string;
    education: string;
    income: string;
    maritalStatus: string;
    longTermPatient: boolean;
    longTermDetails: string;
}

interface PatientDetailDto {
    patientId: string;
    painIntensity?: string;
    economicSituation?: string;
    treatments?: string[];
    treatmentDetails?: string;
    assistances?: string[];
    spiritualFaith?: string;
    mentalSupport?: string;
    expectations?: string;
    basicNeeds?: string;
    facilitiesStatus?: string;
    relationshipStatus?: string;
    patientKnowledge?: string;
    patientConcerns?: string;
    familyKnowledge?: string;
    prioritizedIssues?: string;
    summary?: string;
    plan?: string;
    clinics?: Clinic[];
    difficulties?: Difficulty[];
    familyMembers?: FamilyMember[];
}

const PatientRegistrationForm = () => {
    // Configuration
    // const API_BASE_URL = 'https://localhost:7112/api';
    const API_BASE_URL = API.defaults.baseURL;
    const router = useRouter();
    const searchParams = useSearchParams();
    const incomingPatientId = searchParams.get('patientId');

    // Form data state
    const [formData, setFormData] = useState({
        patientId: '',
        painIntensity: '',
        economicSituation: '',
        treatments: [] as string[],
        treatmentDetails: '',
        assistances: [] as string[],
        spiritualFaith: '',
        mentalSupport: '',
        expectations: '',
        basicNeeds: '',
        facilitiesStatus: '',
        relationshipStatus: '',
        patientKnowledge: '',
        patientConcerns: '',
        familyKnowledge: '',
        prioritizedIssues: '',
        summary: '',
        plan: ''
    });

    const [isEditMode, setIsEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string>('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    const [clinics, setClinics] = useState<Clinic[]>([
        { clinicName: '', registerNo: '', remarks: '' }
    ]);

    const [difficulties, setDifficulties] = useState<Difficulty[]>([
        { difficultyName: '', impact: '', remarks: '' }
    ]);

    const [showClinicModal, setShowClinicModal] = useState(false);
    const [showFamilyModal, setShowFamilyModal] = useState(false);
    const [newClinicName, setNewClinicName] = useState('');
    const [clinicError, setClinicError] = useState('');
    const [isClinicLoading, setIsClinicLoading] = useState(false);

    const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
    const [newFamilyMember, setNewFamilyMember] = useState<Omit<FamilyMember, 'id'>>({
        name: '',
        age: '',
        relation: '',
        education: '',
        income: '',
        maritalStatus: '',
        longTermPatient: false,
        longTermDetails: ''
    });

    const [clinicMasters, setClinicMasters] = useState<ClinicMaster[]>([
        { id: 1, clinicName: 'General Hospital' },
        { id: 2, clinicName: 'City Medical Center' },
        { id: 3, clinicName: 'Community Health Clinic' }
    ]);

    const treatmentOptions = [
        { key: 'ayurveda', label: 'Ayurveda' },
        { key: 'homeo', label: 'Homeopathy' },
        { key: 'naturopathy', label: 'Naturopathy' },
        { key: 'greenMedicines', label: 'Green Medicines' },
        { key: 'sidhaMedicines', label: 'Sidha Medicines' },
        { key: 'others', label: 'Others' }
    ];

    const assistanceOptions = [
        { key: 'medicineSupport', label: 'Medicine Support' },
        { key: 'educationalAssistance', label: 'Educational Assistance' },
        { key: 'foodSupport', label: 'Food Support' },
        { key: 'rsby', label: 'RSBY' },
        { key: 'kaarunya', label: 'Kaarunya' },
        { key: 'others', label: 'Others' }
    ];

    const difficultyNameOptions = [
        'Pain', 'Nausea', 'Vomiting', 'Loss of appetite', 'Chest/Abdominal pain',
        'Difficulty swallowing', 'Constipation', 'Cough', 'Shortness of Breath',
        'Lack of Sleep', 'Drowsiness', 'Fatigue', 'Swelling', 'Swelling in the feet',
        'Urinary problems', 'Mouth Ulcers', 'Bad smell', 'Drug Allergies', 'Other'
    ];

    // Set incoming patientId into formData
    useEffect(() => {
        if (!incomingPatientId) return;

        // Always set patientId into formData
        setFormData(prev => ({
            ...prev,
            patientId: incomingPatientId
        }));

        // Try to fetch patient data — if exists, enter edit mode
        const checkIfEditMode = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`${API_BASE_URL}/PatientDetails/patient/${incomingPatientId}`);
                if (!res.ok) throw new Error("Patient not found");

                const data: PatientDetailDto = await res.json();
                setIsEditMode(true);
                populateFormFromApi(data);
            } catch (error) {
                // ✅ Not an error, just a new patient with no existing details
                console.log("No existing patient details — assuming new detail entry.");
            } finally {
                setIsLoading(false);
            }
        };

        checkIfEditMode();
    }, [incomingPatientId]);



    // Show alert on first visit
    useEffect(() => {
        if (typeof window !== "undefined" && formData.patientId && !sessionStorage.getItem("alertShown")) {
            alert("✅ Please check and fill this form!!");
            sessionStorage.setItem("alertShown", "true");
        }
    }, [formData.patientId]);

    // Prefill if in edit mode
    useEffect(() => {
        if (isEditMode && incomingPatientId) {
            const fetchPatientData = async () => {
                setIsLoading(true);
                try {
                    const res = await fetch(`${API_BASE_URL}/PatientDetails/patient/${incomingPatientId}`);
                    if (!res.ok) throw new Error("Patient fetch failed");

                    const data: PatientDetailDto = await res.json();
                    populateFormFromApi(data);
                    setFormData({
                        patientId: data.patientId ?? '',
                        painIntensity: data.painIntensity ?? '',
                        economicSituation: data.economicSituation ?? '',
                        treatments: data.treatments ?? [],
                        treatmentDetails: data.treatmentDetails ?? '',
                        assistances: data.assistances ?? [],
                        spiritualFaith: data.spiritualFaith ?? '',
                        mentalSupport: data.mentalSupport ?? '',
                        expectations: data.expectations ?? '',
                        basicNeeds: data.basicNeeds ?? '',
                        facilitiesStatus: data.facilitiesStatus ?? '',
                        relationshipStatus: data.relationshipStatus ?? '',
                        patientKnowledge: data.patientKnowledge ?? '',
                        patientConcerns: data.patientConcerns ?? '',
                        familyKnowledge: data.familyKnowledge ?? '',
                        prioritizedIssues: data.prioritizedIssues ?? '',
                        summary: data.summary ?? '',
                        plan: data.plan ?? ''
                    });

                    // Prefill related data
                    setClinics(data.clinics ?? []);
                    setDifficulties(
                        data.difficulties?.map(d => ({
                            difficultyName: d.difficultyName ?? '',
                            impact: d.impact ?? '',
                            remarks: d.remarks ?? ''
                        })) ?? []
                    );
                    setFamilyMembers(
                        data.familyMembers?.map(f => ({
                            name: f.name ?? '',
                            age: f.age ?? '',
                            relation: f.relation ?? '',
                            education: f.education ?? '',
                            income: f.income ?? '',
                            maritalStatus: f.maritalStatus ?? '',
                            longTermPatient: f.longTermPatient ?? false,
                            longTermDetails: f.longTermDetails ?? ''
                        })) ?? []
                    );

                } catch (error) {
                    console.error("❌ Error loading patient data:", error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchPatientData();
        }
    }, [isEditMode, incomingPatientId]);


    const populateFormFromApi = (data: PatientDetailDto) => {
        setFormData({
            patientId: data.patientId || '',
            painIntensity: data.painIntensity ?? '',
            economicSituation: data.economicSituation ?? '',
            treatments: data.treatments ?? [],
            treatmentDetails: data.treatmentDetails ?? '',
            assistances: data.assistances ?? [],
            spiritualFaith: data.spiritualFaith ?? '',
            mentalSupport: data.mentalSupport ?? '',
            expectations: data.expectations ?? '',
            basicNeeds: data.basicNeeds ?? '',
            facilitiesStatus: data.facilitiesStatus ?? '',
            relationshipStatus: data.relationshipStatus ?? '',
            patientKnowledge: data.patientKnowledge ?? '',
            patientConcerns: data.patientConcerns ?? '',
            familyKnowledge: data.familyKnowledge ?? '',
            prioritizedIssues: data.prioritizedIssues ?? '',
            summary: data.summary ?? '',
            plan: data.plan ?? ''
        });

        if (data.clinics && data.clinics.length > 0) {
            setClinics(data.clinics);
        }

        if (data.difficulties && data.difficulties.length > 0) {
            setDifficulties(data.difficulties.map(d => ({
                difficultyName: d.difficultyName || '',
                impact: d.impact || '',
                remarks: d.remarks || ''
            })));
        }

        if (data.familyMembers && data.familyMembers.length > 0) {
            setFamilyMembers(data.familyMembers);
        }
    };


    const createFormData = (): FormData => {
        const formDataObj = new FormData();

        formDataObj.append('patientId', formData.patientId);
        Object.entries(formData).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    formDataObj.append(`${key}[${index}]`, item);
                });
            } else {
                formDataObj.append(key, value);
            }
        });

        clinics.forEach((clinic, index) => {
            formDataObj.append(`clinics[${index}].clinicName`, clinic.clinicName);
            formDataObj.append(`clinics[${index}].registerNo`, clinic.registerNo);
            formDataObj.append(`clinics[${index}].remarks`, clinic.remarks);
        });

        difficulties.forEach((difficultyName, index) => {
            formDataObj.append(`difficulties[${index}].difficultyNameName`, difficultyName.difficultyName);
            formDataObj.append(`difficulties[${index}].impact`, difficultyName.impact);
            formDataObj.append(`difficulties[${index}].remarks`, difficultyName.remarks);
        });

        familyMembers.forEach((member, index) => {
            Object.entries(member).forEach(([key, value]) => {
                if (key !== 'id') {
                    formDataObj.append(`familyMembers[${index}].${key}`, value.toString());
                }
            });
        });

        return formDataObj;
    };

    const handleTreatmentChange = (treatmentKey: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            treatments: checked
                ? [...prev.treatments, treatmentKey]
                : prev.treatments.filter(t => t !== treatmentKey)
        }));
    };

    const handleAssistanceChange = (assistanceKey: string, checked: boolean) => {
        setFormData(prev => ({
            ...prev,
            assistances: checked
                ? [...prev.assistances, assistanceKey]
                : prev.assistances.filter(a => a !== assistanceKey)
        }));
    };


    // Clinic Modal Handlers
    const handleCloseClinicModal = () => {
        setShowClinicModal(false);
        setNewClinicName('');
        setClinicError('');
    };

    const handleClinicKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddClinic();
        }
    };

    // === Clinic Handlers ===
    const addClinic = () => setClinics(prev => [...prev, { clinicName: '', registerNo: '', remarks: '' }]);
    const removeClinic = (index: number) => setClinics(prev => prev.filter((_, i) => i !== index));
    const updateClinic = (index: number, field: keyof Clinic, value: string) => {
        const updated = clinics.map((c, i) => i === index ? { ...c, [field]: value } : c);
        setClinics(updated);
    };

    // Fetch clinic master data
    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const { data } = await API.get<ClinicMaster[]>('/api/ClinicMasters');
                setClinicMasters(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('❌ Error fetching clinics:', error);
            }
        };

        fetchClinics();
    }, []);

    const handleAddClinic = async () => {
        const trimmed = newClinicName.trim();
        if (!trimmed) {
            setClinicError('Clinic name is required');
            return;
        }

        const exists = clinicMasters.some(
            (c) => c.clinicName.toLowerCase() === trimmed.toLowerCase()
        );
        if (exists) {
            setClinicError('Clinic already exists');
            return;
        }

        setIsClinicLoading(true);
        try {
            const { data: saved } = await API.post<ClinicMaster>('/api/ClinicMasters', {
                clinicName: trimmed,
            });

            setClinicMasters((prev) => [...prev, saved]);
            setClinics((prev) => [
                ...prev,
                { clinicName: saved.clinicName, registerNo: '', remarks: '' },
            ]);
            setShowClinicModal(false);
            setNewClinicName('');
        } catch (err) {
            console.error('❌ Clinic Save Error:', err);
            setClinicError('Failed to add clinic. Try again.');
        } finally {
            setIsClinicLoading(false);
        }
    };

    // Difficulty handlers
    const addDifficulty = () => {
        setDifficulties([...difficulties, { difficultyName: '', impact: '', remarks: '' }]);
    };

    const removeDifficulty = (index: number) => {
        if (difficulties.length > 1) {
            setDifficulties(difficulties.filter((_, i) => i !== index));
        }
    };

    const updateDifficulty = (index: number, field: keyof Difficulty, value: string) => {
        const updated = difficulties.map((diff, i) =>
            i === index ? { ...diff, [field]: value } : diff
        );
        setDifficulties(updated);
    };

    // Family member handlers
    const addFamilyMember = () => {
        setFamilyMembers([...familyMembers, { ...newFamilyMember, id: Date.now() }]);
        setNewFamilyMember({
            name: '',
            age: '',
            relation: '',
            education: '',
            income: '',
            maritalStatus: '',
            longTermPatient: false,
            longTermDetails: ''
        });
        setShowFamilyModal(false);
    };

    const removeFamilyMember = (id: number) => {
        setFamilyMembers(familyMembers.filter(member => member.id !== id));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.patientId.trim()) {
            setSubmitMessage('Patient ID is required');
            setSubmitStatus('error');
            return;
        }

        // Prepare submission payload
        const submissionData = {
            ...formData,
            treatments: [...formData.treatments],   // ✅ Explicitly include only selected treatments
            assistances: [...formData.assistances], // ✅ Explicitly include only selected assistances
            clinics: clinics.filter(c => c.clinicName.trim()).map(c => ({
                clinicName: c.clinicName,
                registerNo: c.registerNo,
                remarks: c.remarks,
            })),
            difficulties: difficulties.filter(d => d.difficultyName.trim()).map(d => ({
                difficultyName: d.difficultyName,
                impact: d.impact,
                remarks: d.remarks,
            })),
            familyMembers: familyMembers.map(f => ({
                name: f.name,
                age: f.age,
                relation: f.relation,
                education: f.education,
                income: f.income,
                maritalStatus: f.maritalStatus,
                longTermPatient: f.longTermPatient,
                longTermDetails: f.longTermDetails,
            })),
        };

        try {
            setIsSubmitting(true);

            const url = isEditMode
                ? `${API_BASE_URL}/PatientDetails/patient/${formData.patientId}` // PUT
                : `${API_BASE_URL}/PatientDetails`;                     // POST

            const response = await fetch(url, {
                method: isEditMode ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                setSubmitMessage('✅ Patient details saved successfully!');
                setSubmitStatus('success');
                router.push('/Viewpatients');
            } else {
                const errorText = await response.text(); // Fetch full error from backend
                console.error('❌ Error from backend:', errorText);
                setSubmitMessage('❌ Failed to save patient details. Please try again.');
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitMessage('❌ An unexpected error occurred while submitting the form.');
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };



    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-4 lg:px-8 py-4">
            <div className="max-w-full">
                {/* Full-width Header */}
                <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 text-center rounded-none mb-4">

                    <div className="flex justify-center mb-3">
                        <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-blue-200" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-1">
                        Patient Registration Form
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-blue-200">
                        Comprehensive Assessment and Care Planning
                    </p>
                </div>


                {/* Form */}
                <div className="p-2 sm:p-4 lg:p-6">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        {formData.patientId && (
                            <div className="text-left text-sm sm:text-base font-medium text-blue-900 mb-4 px-2 sm:px-4">
                                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm border border-blue-300">
                                    Patient ID: <span className="font-semibold">{formData.patientId}</span>
                                </div>
                            </div>
                        )}
                        {/* Section 1: Registered Palliative Clinics */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Building className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">1. Registered Palliative Clinics by the Patient</h3>
                            </div>

                            {/* Clinic Master Selection */}
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                    Select Clinic <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-2 items-center">
                                    <select
                                        name="clinicMaster"
                                        className="flex-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        onChange={(e) => {
                                            const selectedClinic = clinicMasters.find(c => c.clinicName === e.target.value);
                                            if (selectedClinic) {
                                                const exists = clinics.some(c => c.clinicName === selectedClinic.clinicName);
                                                if (!exists) {
                                                    setClinics([
                                                        ...clinics.filter(c => c.clinicName !== ''),
                                                        { clinicName: selectedClinic.clinicName, registerNo: '', remarks: '' }
                                                    ]);
                                                }
                                            }
                                        }}
                                    >
                                        <option value="">Select a clinic</option>
                                        {clinicMasters
                                            .filter((clinic) => clinic && clinic.clinicName)
                                            .map((clinic) => (
                                                <option key={clinic.id} value={clinic.clinicName}>
                                                    {clinic.clinicName}
                                                </option>
                                            ))}
                                    </select>

                                    <button
                                        type="button"
                                        onClick={() => setShowClinicModal(true)}
                                        className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center shadow-md"
                                        title="Add new clinic"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                            <th className="border border-gray-300 p-2 text-left font-medium">Clinic Name</th>
                                            <th className="border border-gray-300 p-2 text-left font-medium">Register No.</th>
                                            <th className="border border-gray-300 p-2 text-left font-medium">Remarks</th>
                                            <th className="border border-gray-300 p-2 text-center font-medium">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clinics.map((clinic, index) => (
                                            <tr
                                                key={`${clinic.clinicName}-${index}`} // ✅ UNIQUE KEY FIX
                                                className="hover:bg-blue-50 transition-colors duration-200"
                                            >
                                                <td className="border border-gray-300 p-1 sm:p-2">
                                                    <input
                                                        type="text"
                                                        value={clinic.clinicName}
                                                        onChange={(e) => updateClinic(index, 'clinicName', e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
                                                        placeholder="Enter clinic name"
                                                    />
                                                </td>
                                                <td className="border border-gray-300 p-1 sm:p-2">
                                                    <input
                                                        type="text"
                                                        value={clinic.registerNo}
                                                        onChange={(e) => updateClinic(index, 'registerNo', e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
                                                        placeholder="Enter register number"
                                                    />
                                                </td>
                                                <td className="border border-gray-300 p-1 sm:p-2">
                                                    <input
                                                        type="text"
                                                        value={clinic.remarks}
                                                        onChange={(e) => updateClinic(index, 'remarks', e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
                                                        placeholder="Enter remarks"
                                                    />
                                                </td>
                                                <td className="border border-gray-300 p-1 sm:p-2 text-center">
                                                    {clinics.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => removeClinic(index)}
                                                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-full transition-all duration-300"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <button
                                type="button"
                                onClick={addClinic}
                                className="mt-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center gap-2 text-sm font-medium shadow-md transition-all duration-300"
                            >
                                <Plus size={14} /> Add Clinic Row
                            </button>

                        </div>

                        {/* Clinic Modal */}
                        {showClinicModal && (
                            <div
                                className="fixed inset-0 bg-black/30 flex justify-center items-center z-50"
                                onKeyDown={(e) => {
                                    if (e.key === "Escape") handleCloseClinicModal();
                                }}
                            >
                                <div className="bg-white rounded-lg w-full max-w-md shadow-xl p-6 animate-fade-in">
                                    <h3 className="text-lg font-semibold mb-4 text-blue-900">🏥 Add New Clinic</h3>

                                    <input
                                        type="text"
                                        value={newClinicName}
                                        onChange={(e) => {
                                            setNewClinicName(e.target.value);
                                            setClinicError("");
                                        }}
                                        onKeyDown={handleClinicKeyPress}
                                        placeholder="Enter clinic name"
                                        className="w-full border border-gray-300 px-3 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        autoFocus
                                    />

                                    {clinicError && (
                                        <p className="text-red-500 text-sm mb-4">{clinicError}</p>
                                    )}

                                    <div className="flex justify-end gap-2">
                                        <button
                                            type="button"
                                            onClick={handleCloseClinicModal}
                                            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                                            disabled={isClinicLoading}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleAddClinic}
                                            disabled={isClinicLoading || !newClinicName.trim()}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-blue-300 hover:bg-blue-700 transition-colors"
                                        >
                                            {isClinicLoading ? "Adding..." : "Add Clinic"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Section 2: Current Physical Difficulties */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Activity className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    2. Current Physical Difficulties of the Patient
                                </h3>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden text-xs sm:text-sm">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                            <th className="border border-gray-300 p-2 text-left font-medium">The Difficulty</th>
                                            <th className="border border-gray-300 p-2 text-left font-medium">Daily Life Impact</th>
                                            <th className="border border-gray-300 p-2 text-left font-medium">Remarks</th>
                                            <th className="border border-gray-300 p-2 text-center font-medium">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {difficulties.map((diff, index) => (
                                            <tr key={`${diff.difficultyName}-${index}`} className="hover:bg-blue-50 transition-colors duration-200">
                                                <td className="border border-gray-300 p-1 sm:p-2">
                                                    <select
                                                        value={diff.difficultyName}
                                                        onChange={(e) => updateDifficulty(index, 'difficultyName', e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
                                                    >
                                                        <option value="">Select difficulty</option>
                                                        {difficultyNameOptions.map(option => (
                                                            <option key={option} value={option}>{option}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td className="border border-gray-300 p-1 sm:p-2">
                                                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                                                        {[
                                                            { value: 'On a small scale', label: 'Small', color: 'bg-green-100 text-green-800' },
                                                            { value: 'Fairly good', label: 'Fair', color: 'bg-yellow-100 text-yellow-800' },
                                                            { value: 'Hard', label: 'Hard', color: 'bg-red-100 text-red-800' }
                                                        ].map(option => (
                                                            <label
                                                                key={option.value}
                                                                className={`flex items-center p-1 sm:p-2 rounded-lg cursor-pointer transition-all duration-300 border ${diff.impact === option.value
                                                                    ? 'border-blue-500 bg-blue-50'
                                                                    : 'border-gray-300 bg-white hover:bg-gray-50'
                                                                    }`}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name={`difficultyName-${index}`}
                                                                    value={option.value}
                                                                    checked={diff.impact === option.value}
                                                                    onChange={(e) => updateDifficulty(index, 'impact', e.target.value)}
                                                                    className="mr-1 sm:mr-2 w-3 h-3 text-blue-600"
                                                                />
                                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${option.color}`}>
                                                                    {option.label}
                                                                </span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="border border-gray-300 p-1 sm:p-2">
                                                    <input
                                                        type="text"
                                                        value={diff.remarks || ''}
                                                        onChange={(e) => updateDifficulty(index, 'remarks', e.target.value)}
                                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm"
                                                        placeholder="Enter remarks"
                                                    />
                                                </td>
                                                <td className="border border-gray-300 p-1 sm:p-2 text-center">
                                                    {difficulties.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => removeDifficulty(index)}
                                                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-full transition-all duration-300"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <button
                                type="button"
                                onClick={addDifficulty}
                                className="mt-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center gap-2 text-sm font-medium shadow-md transition-all duration-300"
                            >
                                <Plus size={14} /> Add Difficulty
                            </button>
                        </div>


                        {/* Section 3: Body Pain Intensity */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">3. Body Pain Intensity Marking</h3>
                            </div>
                            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
                                    <span className="text-xs sm:text-sm font-medium text-blue-900 uppercase tracking-wide">Pain Level:</span>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <label key={num} className="flex flex-col items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="painIntensity"
                                                value={num}
                                                checked={formData.painIntensity === num.toString()}
                                                onChange={(e) => setFormData({ ...formData, painIntensity: e.target.value })}
                                                className="mb-1 w-3 h-3 sm:w-4 sm:h-4 text-red-600"
                                            />
                                            <span className={`text-sm sm:text-base font-bold px-2 py-1 rounded-full ${formData.painIntensity === num.toString()
                                                ? 'bg-red-500 text-white'
                                                : 'bg-gray-200 text-gray-700'
                                                } transition-all duration-300`}>
                                                {num}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs sm:text-sm text-gray-600 font-medium">
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">No Pain</span>
                                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">Worst Pain</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Family Information */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Users className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">4. Family Information</h3>
                            </div>
                            <p className="text-xs sm:text-sm text-blue-700 mb-3 sm:mb-4 bg-blue-100 p-2 sm:p-3 rounded-lg">
                                Details of Residents in the household where the Patient permanently resides
                            </p>

                            {familyMembers.length > 0 && (
                                <div className="overflow-x-auto mb-3 sm:mb-4">
                                    <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-sm text-xs">
                                        <thead>
                                            <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                                                <th className="border border-gray-300 p-2 text-left font-medium">SI.No</th>
                                                <th className="border border-gray-300 p-2 text-left font-medium">Name</th>
                                                <th className="border border-gray-300 p-2 text-left font-medium">Age</th>
                                                <th className="border border-gray-300 p-2 text-left font-medium">Relation</th>
                                                <th className="border border-gray-300 p-2 text-left font-medium">Education</th>
                                                <th className="border border-gray-300 p-2 text-left font-medium">Income</th>
                                                <th className="border border-gray-300 p-2 text-left font-medium">Marital Status</th>
                                                <th className="border border-gray-300 p-2 text-left font-medium">Long-term Patient</th>
                                                <th className="border border-gray-300 p-2 text-center font-medium">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {familyMembers.map((member, index) => (
                                                <tr key={member.id ?? `family-${index}`} className="hover:bg-blue-50 transition-colors duration-200">
                                                    <td className="border border-gray-300 p-2 font-medium text-blue-900">{index + 1}</td>
                                                    <td className="border border-gray-300 p-2">{member.name}</td>
                                                    <td className="border border-gray-300 p-2">{member.age}</td>
                                                    <td className="border border-gray-300 p-2">{member.relation}</td>
                                                    <td className="border border-gray-300 p-2">{member.education}</td>
                                                    <td className="border border-gray-300 p-2">{member.income}</td>
                                                    <td className="border border-gray-300 p-2">{member.maritalStatus}</td>
                                                    <td className="border border-gray-300 p-2">
                                                        {member.longTermPatient ? (
                                                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                                                                Yes: {member.longTermDetails}
                                                            </span>
                                                        ) : (
                                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                                                No
                                                            </span>
                                                        )}
                                                    </td>
                                                    <td className="border border-gray-300 p-2 text-center">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                if (typeof member.id === 'number') {
                                                                    removeFamilyMember(member.id);
                                                                }
                                                            }}
                                                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-full transition-all duration-300"
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            <button
                                type="button"
                                onClick={() => setShowFamilyModal(true)}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center gap-2 text-sm font-medium shadow-md transition-all duration-300"
                            >
                                <Plus size={14} /> Add Family Member
                            </button>
                        </div>


                        {/* Family Member Modal */}
                        {showFamilyModal && (
                            <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                                <div className="bg-white p-4 sm:p-6 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                                    <div className="flex items-center mb-4">
                                        <User className="w-5 h-5 text-blue-600 mr-2" />
                                        <h3 className="text-lg font-semibold text-blue-900">Add Family Member</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            value={newFamilyMember.name}
                                            onChange={(e) => setNewFamilyMember({ ...newFamilyMember, name: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Age"
                                            value={newFamilyMember.age}
                                            onChange={(e) => setNewFamilyMember({ ...newFamilyMember, age: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Relation"
                                            value={newFamilyMember.relation}
                                            onChange={(e) => setNewFamilyMember({ ...newFamilyMember, relation: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Education"
                                            value={newFamilyMember.education}
                                            onChange={(e) => setNewFamilyMember({ ...newFamilyMember, education: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Income"
                                            value={newFamilyMember.income}
                                            onChange={(e) => setNewFamilyMember({ ...newFamilyMember, income: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        />
                                        <select
                                            value={newFamilyMember.maritalStatus}
                                            onChange={(e) => setNewFamilyMember({ ...newFamilyMember, maritalStatus: e.target.value })}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        >
                                            <option value="">Select Marital Status</option>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                        </select>
                                        <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                                            <input
                                                type="checkbox"
                                                checked={newFamilyMember.longTermPatient}
                                                onChange={(e) => setNewFamilyMember({ ...newFamilyMember, longTermPatient: e.target.checked })}
                                                className="mr-2 w-4 h-4 text-blue-600"
                                            />
                                            <label className="text-sm font-medium text-blue-900">Long-term Patient</label>
                                        </div>
                                        {newFamilyMember.longTermPatient && (
                                            <textarea
                                                placeholder="Long-term patient details"
                                                value={newFamilyMember.longTermDetails}
                                                onChange={(e) => setNewFamilyMember({ ...newFamilyMember, longTermDetails: e.target.value })}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 text-sm"
                                                rows={3}
                                            />
                                        )}
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <button
                                            type="button"
                                            onClick={addFamilyMember}
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 text-sm font-medium shadow-md transition-all duration-300"
                                        >
                                            Add
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowFamilyModal(false)}
                                            className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-lg hover:from-gray-600 hover:to-gray-700 text-sm font-medium shadow-md transition-all duration-300"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Section 5: Economic Situation */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <DollarSign className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">5. Economic Situation</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                                {[
                                    { value: 'W', label: 'Wealthy (W)', color: 'bg-green-100 text-green-800' },
                                    { value: 'UMC', label: 'Upper Middle Class (UMC)', color: 'bg-blue-100 text-blue-800' },
                                    { value: 'LMC', label: 'Lower Middle Class (LMC)', color: 'bg-yellow-100 text-yellow-800' },
                                    { value: 'P', label: 'Poor (P)', color: 'bg-orange-100 text-orange-800' },
                                    { value: 'VP', label: 'Very Poor (VP)', color: 'bg-red-100 text-red-800' }
                                ].map(option => (
                                    <label key={option.value} className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 border ${formData.economicSituation === option.value
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300 bg-white hover:bg-gray-50'
                                        }`}>
                                        <input
                                            type="radio"
                                            name="economicSituation"
                                            value={option.value}
                                            checked={formData.economicSituation === option.value}
                                            onChange={(e) => setFormData({ ...formData, economicSituation: e.target.value })}
                                            className="mr-2 w-4 h-4 text-blue-600"
                                        />
                                        <span className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${option.color}`}>
                                            {option.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Section 6: Other Treatments */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Pill className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900">
                                    6. Any other treatments currently undergoing by the patient
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                {treatmentOptions.map(option => (
                                    <label
                                        key={option.key}
                                        className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${formData.treatments.includes(option.key)
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-300 bg-white hover:bg-gray-50'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.treatments.includes(option.key)}
                                            onChange={(e) => handleTreatmentChange(option.key, e.target.checked)}
                                            className="mr-3 w-5 h-5 text-blue-600"
                                        />
                                        <span className="px-3 py-1 rounded-full text-sm font-semibold">
                                            {option.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                    Detailed information about treatments
                                </label>
                                <textarea
                                    placeholder="Please provide detailed information about the treatments..."
                                    value={formData.treatmentDetails}
                                    onChange={(e) => setFormData({ ...formData, treatmentDetails: e.target.value })}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    rows={2}
                                />
                            </div>
                        </div>


                        {/* Section 7: Other Assistances */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <HandHeart className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900">
                                    7. Other Assistances the Patient is receiving
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {assistanceOptions.map(option => (
                                    <label
                                        key={option.key}
                                        className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${formData.assistances.includes(option.key)
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-300 bg-white hover:bg-gray-50'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.assistances.includes(option.key)}
                                            onChange={(e) => handleAssistanceChange(option.key, e.target.checked)}
                                            className="mr-3 w-5 h-5 text-blue-600"
                                        />
                                        <span className="px-3 py-1 rounded-full text-sm font-semibold">
                                            {option.label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>


                        {/* Section 8: Spiritual Problems */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Heart className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">8. Spiritual Problems</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Faith (Religion/Politics/Others/Currently comforting/non-comforting):
                                    </label>
                                    <textarea
                                        value={formData.spiritualFaith}
                                        onChange={(e) => setFormData({ ...formData, spiritualFaith: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe your spiritual faith and beliefs..."
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Mental/Spiritual support from whom/what?:
                                    </label>
                                    <textarea
                                        value={formData.mentalSupport}
                                        onChange={(e) => setFormData({ ...formData, mentalSupport: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe sources of mental and spiritual support..."
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Expectations:
                                    </label>
                                    <textarea
                                        value={formData.expectations}
                                        onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe your expectations..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 9: Social Problems */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Users className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">9. Social Problems</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Basic needs (food/clothing/shelter):
                                    </label>
                                    <textarea
                                        value={formData.basicNeeds}
                                        onChange={(e) => setFormData({ ...formData, basicNeeds: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe the status of basic needs..."
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Status of other facilities (drinking water / electricity/etc.):
                                    </label>
                                    <textarea
                                        value={formData.facilitiesStatus}
                                        onChange={(e) => setFormData({ ...formData, facilitiesStatus: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe the status of facilities..."
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Current Status of relationships (Family members/ relatives/others):
                                    </label>
                                    <textarea
                                        value={formData.relationshipStatus}
                                        onChange={(e) => setFormData({ ...formData, relationshipStatus: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe the current relationship status..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 10: Insights */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">10. Insights</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Patient's knowledge of the disease:
                                    </label>
                                    <textarea
                                        value={formData.patientKnowledge}
                                        onChange={(e) => setFormData({ ...formData, patientKnowledge: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe the patient's understanding of their condition..."
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Patient concerns:
                                    </label>
                                    <textarea
                                        value={formData.patientConcerns}
                                        onChange={(e) => setFormData({ ...formData, patientConcerns: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe the patient's main concerns..."
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Family Knowledge and concerns:
                                    </label>
                                    <textarea
                                        value={formData.familyKnowledge}
                                        onChange={(e) => setFormData({ ...formData, familyKnowledge: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please describe the family's understanding and concerns..."
                                    />
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Patient issues are prioritized:
                                    </label>
                                    <textarea
                                        value={formData.prioritizedIssues}
                                        onChange={(e) => setFormData({ ...formData, prioritizedIssues: e.target.value })}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        rows={2}
                                        placeholder="Please list the prioritized issues in order of importance..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 11: Summary */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">11. Summary</h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                    Assessment Summary:
                                </label>
                                <textarea
                                    value={formData.summary}
                                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    rows={3}
                                    placeholder="Please provide a comprehensive summary of the patient's assessment..."
                                />
                            </div>
                        </div>

                        {/* Section 12: Plans */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">12. Plans</h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                    Care Plan:
                                </label>
                                <textarea
                                    value={formData.plan}
                                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    rows={3}
                                    placeholder="Please outline the comprehensive care plan for the patient..."
                                />
                            </div>
                        </div>


                        {/* Submit Button */}
                        <div className="flex justify-center mt-10">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 md:px-10 md:py-3 rounded-xl text-base md:text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl flex items-center gap-2"
                            >
                                <Check className="w-5 h-5" />
                                Submit Patient Registration Form
                            </button>
                        </div>

                        {/* Submit Status Message */}
                        {submitMessage && (
                            <div className={`mb-4 p-3 rounded-lg text-center text-sm font-semibold ${submitStatus === 'success'
                                ? 'bg-green-100 text-green-800 border border-green-300'
                                : 'bg-red-100 text-red-800 border border-red-300'
                                }`}>
                                {submitMessage}
                            </div>
                        )}

                    </form>
                </div>


            </div>
        </div>
    );
}

export default PatientRegistrationForm;