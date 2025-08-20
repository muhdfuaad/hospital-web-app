'use client';
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import API from '@/lib/axios';

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
    const inputRefs = useRef<Record<number, HTMLInputElement | null>>({});

    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

    // Medicine dropdown states
    const [medicines, setMedicines] = useState<Medicine[]>([]);
    const [editingItemId, setEditingItemId] = useState<number | null>(null);
    const [medicineDropdownOpen, setMedicineDropdownOpen] = useState<{ [key: number]: boolean }>({});

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

    const [medicineSearchTerm, setMedicineSearchTerm] = useState<Record<number, string>>({});
    const [editingItem, setEditingItem] = useState<number | null>(null);

    const dropdownRefs = useRef<Record<number, HTMLDivElement | null>>({});
    const [noteExists, setNoteExists] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                editingItem !== null &&
                dropdownRefs.current[editingItem] &&
                !dropdownRefs.current[editingItem]?.contains(event.target as Node)
            ) {
                setEditingItem(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [editingItem]);

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
    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await API.get('/api/Medicines/dropdown');
                const data = response.data as any[];

                if (Array.isArray(data)) {
                    setMedicines(data);
                } else {
                    console.warn('Invalid medicine data format', data);
                }
            } catch (error) {
                console.error('Error fetching medicines:', error);
            }
        };

        fetchMedicines();
    }, []);

    const MedicineDropdown = ({
        itemId,
        medicines,
        onSelect,
        onClose,
        inputElement,
    }: {
        itemId: number;
        medicines: { id: number; medicineName: string }[];
        onSelect: (medicineName: string) => void;
        onClose: () => void;
        inputElement: HTMLInputElement | null;
    }) => {
        const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

        useEffect(() => {
            if (!inputElement) return;
            const rect = inputElement.getBoundingClientRect();
            setPosition({
                top: rect.bottom,
                left: rect.left,
                width: rect.width,
            });
        }, [inputElement, medicines]);

        useEffect(() => {
            function handleClickOutside(event: MouseEvent) {
                const target = event.target as HTMLElement;
                if (
                    !inputElement?.contains(target) &&
                    !target.closest(`#medicine-dropdown-${itemId}`)
                ) {
                    onClose();
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [inputElement, itemId, onClose]);

        return createPortal(
            <div
                id={`medicine-dropdown-${itemId}`}
                className="bg-white border border-gray-300 rounded shadow max-h-48 overflow-y-auto text-sm z-50"
                style={{ top: position.top, left: position.left, width: position.width, position: 'absolute' }}
            >
                {medicines.length > 0 ? (
                    medicines.map((med) => (
                        <div
                            key={med.id}
                            className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                            onMouseDown={(e) => e.preventDefault()} // keep input focus
                            onClick={() => onSelect(med.medicineName)}
                        >
                            {med.medicineName}
                        </div>
                    ))
                ) : (
                    <div className="px-3 py-2 text-gray-500">No results found</div>
                )}
            </div>,
            document.body
        );
    };

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
        if (!assignment) return;

        if (assignmentId === assignment) return;

        setAssignmentId(assignment);

        const fetchAssignmentAndPatient = async () => {
            try {
                // ✅ Fetch assignment info
                const assignmentRes = await API.get(`/api/PatientAssignments/byAssignmentId/${assignment}`);
                const assignmentData = assignmentRes.data as any;

                if (!assignmentData?.patientId) return;

                setPatientId(assignmentData.patientId);
                setFormData(prev => ({
                    ...prev,
                    reviewId: assignment,
                    patientId: assignmentData.patientId
                }));

                // ✅ Fetch patient info using patientId
                const patientRes = await API.get(`/api/Hpforms/patient/${assignmentData.patientId}`);
                const patientData = patientRes.data as any;

                if (!patientData) return;

                setPatientInfo({
                    name: patientData.name || '',
                    age: patientData.age || '',
                    gender: patientData.gender || ''
                });
            } catch (err) {
                console.error('Failed to fetch assignment or patient data:', err);
            }
        };

        fetchAssignmentAndPatient();
    }, [searchParams, assignmentId]);

    useEffect(() => {
        const initialTerms: Record<number, string> = {};
        medications.forEach((item) => {
            if (item.medicine) {
                initialTerms[item.id] = item.medicine;
            }
        });
        setMedicineSearchTerm(initialTerms);
    }, [medications]);

    useEffect(() => {
        const assignmentId = searchParams.get("assignmentId");

        if (!assignmentId) return;

        const fetchReview = async () => {
            try {
                const res = await API.get(`/api/DoctorsReviews/review/${assignmentId}`);

                if (
                    res.status === 204 ||
                    !res.data ||
                    (Array.isArray(res.data) && res.data.length === 0)
                ) {
                    console.log("🆕 No DoctorReview found — this is a new entry.");
                    setNoteExists(false);
                    return;
                }

                const review = Array.isArray(res.data) ? res.data[0] : res.data;
                setNoteExists(true);

                setFormData((prev) => ({
                    ...prev,
                    reviewId: review.reviewId || "",
                    patientId: review.patientId || "",
                    date: review.date?.split("T")[0] || "",
                }));

                // Set investigations
                if (Array.isArray(review.investigations)) {
                    setInvestigations(
                        review.investigations.map((inv: any) => ({
                            id: inv?.id ?? 0,
                            investigation: inv?.investigationName ?? "",
                            findings: inv?.findings ?? "",
                        }))
                    );
                }

                // Set medications
                if (Array.isArray(review.medications)) {
                    setMedications(
                        review.medications.map((med: any) => ({
                            id: med?.id ?? 0,
                            medicine: med?.medicine ?? "",
                            prescription: med?.prescription ?? "",
                            remarks: med?.remarks ?? "",
                        }))
                    );
                }

            } catch (err: any) {
                if (err.response?.status === 404) {
                    console.log("🆕 No DoctorReview found — starting new entry.");
                    setNoteExists(false);
                } else {
                    console.error("Error loading review data:", err);
                }
            }
        };

        fetchReview();
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const reviewId = formData.reviewId;

        const dataToSend = {
            reviewId,
            patientId: formData.patientId,
            date: formData.date,
            investigations: investigations.map(inv => ({
                id: inv.id, // ✅ PRESERVE ID
                investigationName: inv.investigation,
                findings: inv.findings
            })),
            medications: medications.map(med => ({
                id: med.id, // ✅ PRESERVE ID
                medicine: med.medicine,
                prescription: med.prescription,
                remarks: med.remarks
            }))
        };

        try {
            const isEditMode = noteExists;

            const url = isEditMode
                ? `/api/DoctorsReviews/byReviewId/${formData.reviewId}`
                : `/api/DoctorsReviews`;

            if (isEditMode) {
                await API.put(url, dataToSend);
            } else {
                await API.post(url, dataToSend);
            }

            setSubmitMessage(`Doctor's Review ${isEditMode ? 'updated' : 'created'} successfully!`);
            setSubmitStatus('success');

            setTimeout(() => {
                router.push(`/doctor-consultations/details?patientId=${patientId}&assignmentId=${assignmentId}&refresh=1`);
            }, 1000);

        } catch (error: any) {
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
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 text-center sm:p-6 shadow-lg">
                <div className="flex justify-center items-center gap-3 mb-3">
                    <h1 className="text-2xl sm:text-3xl font-light">Doctor's Review</h1>
                    <Heart className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-sm sm:text-lg text-blue-200">
                    Patient Diagnosis Investigations & Medical Assessments
                </p>
            </div>

            <div className="p-5">
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
                                    value={formData.date}
                                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                                    className="..."
                                />
                            </div>
                    </div>
                </div>

                {/* 👤 Patient Information Display */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Name */}
                        <div>
                            <label className="block text-s font-semibold mb-1 uppercase tracking-wide">
                                <span className="text-blue-900">Name :</span>{" "}
                                <span className="text-blue-600">
                                    {patientInfo.name + " / " + patientInfo.age + " / " + patientInfo.gender}
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                <form className="space-y-8">
                    {/* Investigations Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide text-center">
                            INVESTIGATIONS
                        </h2>

                        {/* Outer wrapper: horizontal scroll only, no vertical clipping */}
                        <div className="overflow-x-auto overflow-y-visible relative max-h-[400px]">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[5%]">
                                            SI.No
                                        </th>
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[40%]">
                                            Investigation
                                        </th>
                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[55%]">
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
                        </button>
                    </div>

                    {/* Medications Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide text-center">
                            MEDICATIONS
                        </h2>

                        <div className="relative overflow-visible">
                            <div className="overflow-x-auto overflow-y-visible relative max-h-[400px]">
                                <table className="w-full border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-blue-50">
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[5%]">
                                                SI.No
                                            </th>
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[30%]">
                                                Medicines
                                            </th>
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[20%]">
                                                Prescription
                                            </th>
                                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[45%]">
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

                                                <td className="border border-gray-300 px-3 py-2 relative">
                                                    <input
                                                        ref={el => {
                                                            inputRefs.current[item.id] = el;
                                                        }}
                                                        type="text"
                                                        placeholder="Search medicine"
                                                        value={medicineSearchTerm[item.id] || ''}
                                                        onChange={(e) => {
                                                            setMedicineSearchTerm((prev) => ({
                                                                ...prev,
                                                                [item.id]: e.target.value,
                                                            }));
                                                            setEditingItemId(item.id);
                                                        }}
                                                        onFocus={() => setEditingItemId(item.id)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') {
                                                                const filtered = getFilteredMedicines(item.id);
                                                                if (filtered.length > 0) {
                                                                    updateMedication(item.id, 'medicine', filtered[0].medicineName);
                                                                    setMedicineSearchTerm((prev) => ({
                                                                        ...prev,
                                                                        [item.id]: filtered[0].medicineName,
                                                                    }));
                                                                    setEditingItemId(null);
                                                                    e.preventDefault();
                                                                }
                                                            }
                                                        }}
                                                        className="w-full px-2 py-1 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                    />

                                                    {/* Render portal dropdown */}
                                                    {editingItemId === item.id && inputRefs.current[item.id] && (
                                                        <MedicineDropdown
                                                            itemId={item.id}
                                                            medicines={getFilteredMedicines(item.id)}
                                                            onSelect={(medicineName) => {
                                                                updateMedication(item.id, 'medicine', medicineName);
                                                                setMedicineSearchTerm(prev => ({ ...prev, [item.id]: medicineName }));
                                                                setEditingItemId(null);
                                                            }}
                                                            onClose={() => setEditingItemId(null)}
                                                            inputElement={inputRefs.current[item.id]}  // Pass the input element here!
                                                        />
                                                    )}
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
                            onClick={handleSubmit}
                            disabled={!formData.reviewId || !formData.patientId}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl flex items-center gap-2 sm:gap-3"
                        >
                            <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                            {isEditMode ? "Update" : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorsReviewForm;