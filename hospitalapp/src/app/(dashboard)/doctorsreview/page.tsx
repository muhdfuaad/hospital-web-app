'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'

import { Combobox } from '@headlessui/react';

import { User, Calendar, Heart, Plus, Trash2, Check, VenetianMask, ChevronDown } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface Medicine {
    id: number;
    medicineName: string;
}

interface Investigation {
    id: number;
    [key: string]: any;
}
interface MedicationEntry {
    medicine: string;
    prescription: string;
    remarks: string;
}

interface InvestigationEntry {
    investigationName: string;
    findings: string;
}


// Medication Types
interface Medication {
    id: number;
    medicine: string;
    prescription: string;
    remarks: string;
}

interface DoctorsReviewFormData {
    patientId: string;
    reviewId: string;
    date: string;
    investigations?: { id: number; investigation: string; findings: string }[];
    medications?: { id: number; medicine: string; prescription: string; remarks: string }[];
}

const DoctorsReviewForm = () => {

    const [formData, setFormData] = useState<DoctorsReviewFormData>({
        patientId: '',
        reviewId: '',
        date: new Date().toISOString().split('T')[0],
        investigations: [{ id: 1, investigation: '', findings: '' }],
        medications: [{ id: 1, medicine: '', prescription: '', remarks: '' }]
    });

    const [assignmentId, setAssignmentId] = useState<string | null>(null);

    const [reviewId, setReviewId] = useState('');
    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

    // Medicine dropdown states
    const [medicines, setMedicines] = useState<Medicine[]>([]);
    const [medicineDropdownOpen, setMedicineDropdownOpen] = useState<{ [key: number]: boolean }>({});
    const [medicineSearchTerm, setMedicineSearchTerm] = useState<{ [key: number]: string }>({});

    const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number; width: number } | null>(null);
    const inputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});


    // Prescription dropdown options
    const prescriptionOptions = [
        '1-0-0', '0-1-0', '0-0-1', '1-1-0', '1-0-1', '0-1-1', '1-1-1', '1-1-0-0', '1-0-1-0', '1-0-0-1', '0-1-0-1', '1-1-1-0', '1-1-0-1', '1-0-1-1',
        'As needed', 'Before meals', 'After meals', 'At bedtime', 'Every 4 hours', 'Every 6 hours', 'Every 8 hours', 'Every 12 hours', 'Once daily', 'Twice daily', 'Three times daily', 'Four times daily'
    ];

    // Get today's date in YYYY-MM-DD format
    const getTodaysDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const [date, setDate] = useState<string>(getTodaysDate());
    const [investigations, setInvestigations] = useState([
        { id: 1, investigation: '', findings: '' }
    ]);

    const [medications, setMedications] = useState([
        { id: 1, medicine: '', prescription: '', remarks: '' }
    ]);

    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    // ✅ Fetch medicines from API
    // Fetch medicines from API
    useEffect(() => {
        const fetchMedicines = async () => {
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
        };

        fetchMedicines();
    }, []);

    // Filter medicines based on search term
    const getFilteredMedicines = (medicationId: number) => {
        const searchTerm = medicineSearchTerm[medicationId] || '';
        return medicines.filter((medicine) => {
            if (!medicine || !medicine.medicineName) return false;
            return medicine.medicineName.toLowerCase().startsWith(searchTerm.toLowerCase());
        });
    };

    const addInvestigation = () => {
        const newId = investigations.length + 1;
        setInvestigations([...investigations, { id: newId, investigation: '', findings: '' }]);
    };

    // Fix for investigation functions
    const removeInvestigation = (id: number) => {
        if (investigations.length > 1) {
            setInvestigations(investigations.filter(item => item.id !== id));
        }
    };

    const updateInvestigation = (id: number, field: keyof Investigation, value: any) => {
        setInvestigations(investigations.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    // Fix for medication functions
    const addMedication = () => {
        const newId = medications.length + 1;
        setMedications([...medications, { id: newId, medicine: '', prescription: '', remarks: '' }]);
    };

    const removeMedication = (id: number) => {
        if (medications.length > 1) {
            setMedications(medications.filter(item => item.id !== id));
            // Clean up dropdown states for removed medication
            setMedicineDropdownOpen(prev => {
                const newState = { ...prev };
                delete newState[id];
                return newState;
            });
            setMedicineSearchTerm(prev => {
                const newState = { ...prev };
                delete newState[id];
                return newState;
            });
        }
    };

    const updateMedication = (id: number, field: keyof Medication, value: string) => {
        setMedications(medications.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const searchParams = useSearchParams();
    const router = useRouter();
    const isEditMode = !!formData.reviewId;


    // ✅ Fetch assignmentId + patientId + basic info
    useEffect(() => {
        const assignment = searchParams.get('assignmentId');
        if (!assignment) return; // skip if not yet available

        // Prevent re-triggering fetch if already fetched
        if (assignmentId === assignment) return;

        setAssignmentId(assignment);

        fetch(`https://localhost:7112/api/PatientAssignments/byAssignmentId/${assignment}`)
            .then(res => res.json())
            .then(assignmentData => {
                if (!assignmentData?.patientId) return;

                setPatientId(assignmentData.patientId);
                setFormData(prev => ({
                    ...prev,
                    reviewId: assignment,
                    patientId: assignmentData.patientId
                }));

                return fetch(`https://localhost:7112/api/Hpforms/patient/${assignmentData.patientId}`);
            })
            .then(res => res?.json())
            .then(patientData => {
                if (!patientData) return;

                setPatientInfo({
                    name: patientData.name || '',
                    age: patientData.age || '',
                    gender: patientData.gender || ''
                });
            })
            .catch(() => { });
    }, [searchParams, assignmentId]);
    useEffect(() => {
        const reviewIdFromUrl = searchParams.get("assignmentId");
        if (!reviewIdFromUrl) return;

        // Set form reviewId and fetch from backend
        setFormData((prev) => ({
            ...prev,
            reviewId: reviewIdFromUrl,
        }));

        fetch(`https://localhost:7112/api/DoctorsReviews/review/${reviewIdFromUrl}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch review data");
                return res.json();
            })
            .then((data) => {
                // Set basic form data
                setFormData((prev) => ({
                    ...prev,
                    reviewId: data.reviewId || "",
                    patientId: data.patientId || "",
                    date: data.date?.split("T")[0] || "",
                }));

                // ✅ Set investigations with 'id'
                setInvestigations(
                    (data.investigations || []).map((inv: any) => ({
                        id: inv.id || 0,
                        investigation: inv.investigationName || "",
                        findings: inv.findings || "",
                    }))
                );

                // ✅ Set medications with 'id'
                setMedications(
                    (data.medications || []).map((med: any) => ({
                        id: med.id || 0,
                        medicine: med.medicine || "",
                        prescription: med.prescription || "",
                        remarks: med.remarks || "",
                    }))
                );
            })
            .catch((err) => {
                console.error("Error loading review data:", err);
            });
    }, [searchParams]);




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const reviewId = formData.reviewId;

        const dataToSend = {
            reviewId,
            patientId: formData.patientId,
            date: formData.date,
            investigations: investigations.map(inv => ({
                investigationName: inv.investigation,
                findings: inv.findings
            })),
            medications: medications.map(med => ({
                medicine: med.medicine,
                prescription: med.prescription,
                remarks: med.remarks
            }))
        };

        try {
            const url = isEditMode
                ? `https://localhost:7112/api/DoctorsReviews/byReviewId/${reviewId}`
                : `https://localhost:7112/api/DoctorsReviews`;

            const method = isEditMode ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('❌ Submission failed:', errorText);
                throw new Error('Submission failed');
            }

            setSubmitMessage(`Doctor's Review ${isEditMode ? 'updated' : 'created'} successfully!`);
            setSubmitStatus('success');

            setTimeout(() => {
                router.push(`/viewAssignments`);
            }, 1000);

        } catch (error) {
            console.error("Submit error:", error);
            setSubmitMessage('An error occurred while submitting the form.');
            setSubmitStatus('error');
        }

        setTimeout(() => {
            setSubmitMessage('');
            setSubmitStatus('');
        }, 3000);
    };


    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 px-2 sm:px-4 lg:px-8 py-4">
            <div className="max-w-full">
                {/* Full-width Header */}
                <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 rounded-none mb-4">
                    <div className="flex justify-between items-start px-4 sm:px-6">
                        <div className="flex-1 text-center">
                            <div className="flex justify-center mb-3">
                                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-blue-200" />
                            </div>
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-1">
                                Doctor's Review
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-blue-200">
                                Patient Diagnosis Investigations & Medical Assessments
                            </p>
                        </div>
                    </div>
                </div>

                {/* Patient and Review IDs and Date */}
                <div className="text-sm sm:text-base font-medium text-blue-900 mb-4 px-2 sm:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Patient ID */}
                        <div className="flex justify-start">
                            <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs">
                                <span className="font-semibold">Patient ID:</span>
                                <span className="text-sm">{formData.patientId || '-'}</span>
                            </div>
                        </div>

                        {/* Review ID */}
                        <div className="flex justify-start">
                            <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs">
                                <span className="font-semibold">Review ID:</span>
                                <span className="text-sm">{formData.reviewId || '-'}</span>
                            </div>
                        </div>
                        {/* Date Picker (right side) */}
                        <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs">
                            <span className="font-semibold">Date :</span>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="bg-transparent text-blue-900 text-sm focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* 👤 Patient Information Display */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Name */}
                        <div>
                            <label className="block text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wide">
                                Name
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 px-2">
                                <User className="w-4 h-4 text-blue-700 mr-2" />
                                <input
                                    type="text"
                                    value={patientInfo.name || '-'}
                                    readOnly
                                    className="w-full py-2 bg-transparent text-sm text-blue-800 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Age */}
                        <div>
                            <label className="block text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wide">
                                Age
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 px-2">
                                <Calendar className="w-4 h-4 text-blue-700 mr-2" />
                                <input
                                    type="text"
                                    value={patientInfo.age || '-'}
                                    readOnly
                                    className="w-full py-2 bg-transparent text-sm text-blue-800 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-xs font-semibold text-blue-900 mb-1 uppercase tracking-wide">
                                Gender
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 px-2">
                                <VenetianMask className="w-4 h-4 text-blue-700 mr-2" />
                                <input
                                    type="text"
                                    value={patientInfo.gender || '-'}
                                    readOnly
                                    className="w-full py-2 bg-transparent text-sm text-blue-800 focus:outline-none"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Investigations Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide text-center">
                            INVESTIGATIONS
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[10%]">
                                            SI.No
                                        </th>
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[40%]">
                                            Investigation
                                        </th>
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[50%]">
                                            Findings
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {investigations.map((item, index) => (
                                        <tr key={item.id} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 px-3 py-2 text-center">
                                                {index + 1}
                                            </td>
                                            <td className="border border-gray-300 px-3 py-2">
                                                <input
                                                    type="text"
                                                    value={item.investigation}
                                                    onChange={(e) => updateInvestigation(item.id, 'investigation', e.target.value)}
                                                    className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
                                                    placeholder="Enter investigation"
                                                />
                                            </td>
                                            <td className="border border-gray-300 px-3 py-2">
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={item.findings}
                                                        onChange={(e) => updateInvestigation(item.id, 'findings', e.target.value)}
                                                        className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
                                                        placeholder="Enter findings"
                                                    />
                                                    {investigations.length > 1 && (
                                                        <button
                                                            type="button"
                                                            onClick={() => removeInvestigation(item.id)}
                                                            className="text-red-600 hover:text-red-800 p-1"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <button
                            type="button"
                            onClick={addInvestigation}
                            className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Investigation
                        </button>
                    </div>

                    {/* Medications Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide text-center">
                            MEDICATIONS
                        </h2>

                        <div className="relative overflow-visible">
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-blue-50">
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[10%]">
                                                SI.No
                                            </th>
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[30%]">
                                                Medicines
                                            </th>
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[20%]">
                                                Prescription
                                            </th>
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[40%]">
                                                Remarks
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {medications.map((item, index) => (
                                            <tr key={item.id} className="hover:bg-gray-50">
                                                <td className="border border-gray-300 px-3 py-2 text-center">
                                                    {index + 1}
                                                </td>

                                                {/* Medicine Selection using Combobox */}
                                                <td className="relative border border-gray-300 px-3 py-2">
                                                    <Combobox
                                                        value={item.medicine ?? ''}
                                                        onChange={(value: string) => updateMedication(item.id, 'medicine', value)}
                                                    >
                                                        <div className="relative">
                                                            <Combobox.Input
                                                                className="w-full px-2 py-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                                displayValue={(selected: string) => selected}
                                                                onChange={(e) =>
                                                                    setMedicineSearchTerm((prev) => ({ ...prev, [item.id]: e.target.value }))
                                                                }
                                                                placeholder="Select or search medicine..."
                                                            />
                                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronDown className="w-4 h-4 text-gray-400" />
                                                            </Combobox.Button>

                                                            <Combobox.Options
                                                                className="absolute bottom-full mb-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                            >
                                                                {getFilteredMedicines(item.id).length === 0 ? (
                                                                    <div className="cursor-default select-none px-4 py-2 text-gray-500">
                                                                        No medicines found.
                                                                    </div>
                                                                ) : (
                                                                    getFilteredMedicines(item.id).map((medicine) => (
                                                                        <Combobox.Option
                                                                            key={medicine.id}
                                                                            value={medicine.medicineName}
                                                                            className={({ active }) =>
                                                                                `cursor-pointer select-none px-4 py-2 ${active ? 'bg-blue-600 text-white' : 'text-gray-900'
                                                                                }`
                                                                            }
                                                                        >
                                                                            {medicine.medicineName}
                                                                        </Combobox.Option>
                                                                    ))
                                                                )}
                                                            </Combobox.Options>
                                                        </div>
                                                    </Combobox>
                                                </td>

                                                {/* Prescription Dropdown */}
                                                <td className="border border-gray-300 px-3 py-2">
                                                    <select
                                                        value={item.prescription}
                                                        onChange={(e) =>
                                                            updateMedication(item.id, 'prescription', e.target.value)
                                                        }
                                                        className="w-full px-2 py-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                    >
                                                        <option value="">Select prescription...</option>
                                                        {prescriptionOptions.map((option) => (
                                                            <option key={option} value={option}>
                                                                {option}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>

                                                {/* Remarks Input + Remove */}
                                                <td className="border border-gray-300 px-3 py-2">
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            value={item.remarks}
                                                            onChange={(e) =>
                                                                updateMedication(item.id, 'remarks', e.target.value)
                                                            }
                                                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                            placeholder="Enter remarks"
                                                        />
                                                        {medications.length > 1 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => removeMedication(item.id)}
                                                                className="text-red-600 hover:text-red-800 p-1"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Add Medication Button */}
                        <button
                            type="button"
                            onClick={addMedication}
                            className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Medication
                        </button>
                    </div>

                    {/* Action Buttons */}
                    {/* Submit Status Message */}
                    {submitMessage && (
                        <div
                            className={`mb-4 p-3 rounded-lg text-center text-sm font-semibold ${submitStatus === 'success'
                                ? 'bg-green-100 text-green-800 border border-green-300'
                                : 'bg-red-100 text-red-800 border border-red-300'
                                }`}
                        >
                            {submitMessage}
                        </div>
                    )}

                    {/* Submit Button Section */}
                    <div className="flex justify-center pt-6 print:hidden">
                        <button
                            type="submit"
                            disabled={!formData.reviewId || !formData.patientId}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
                        >
                            <Check className="w-6 h-6" />
                            Submit review
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default DoctorsReviewForm;