'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import { User, Calendar, Heart, Plus, Trash2, Check, VenetianMask } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
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
    investigations: { id: number; investigation: string; findings: string }[];
    medications: { id: number; medicine: string; prescription: string; remarks: string }[];
}

const DoctorsReviewForm = () => {

    const [formData, setFormData] = useState<DoctorsReviewFormData>({
        patientId: '',
        reviewId: '',
        date: new Date().toISOString().split('T')[0],
        investigations: [{ id: 1, investigation: '', findings: '' }],
        medications: [{ id: 1, medicine: '', prescription: '', remarks: '' }]
    });

    const [assignmentId, setAssignmentId] = useState('');
    const [reviewId, setReviewId] = useState('');
    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

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
        }
    };

    const updateMedication = (id: number, field: keyof Medication, value: string) => {
        setMedications(medications.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const searchParams = useSearchParams();
        const router = useRouter();
    
        // ✅ Fetch assignmentId + patientId + basic info
        useEffect(() => {
            const assignment = searchParams.get('assignmentId'); // must match URL param
    
            if (!assignment) {
                console.error("❌ No assignmentId provided in query parameters.");
                return;
            }
    
            setAssignmentId(assignment);
            console.log("🔄 Fetching PatientAssignment for assignmentId:", assignment);
    
            fetch(`https://localhost:7112/api/PatientAssignments/byAssignmentId/${assignment}`)
    
                .then(async (res) => {
                    if (!res.ok) {
                        const errText = await res.text();
                        throw new Error(`❌ Failed to fetch assignment: ${res.status} - ${errText}`);
                    }
                    return res.json();
                })
                .then((assignmentData) => {
                    if (!assignmentData?.patientId) {
                        throw new Error("❌ Patient ID not found in assignment.");
                    }
    
                    console.log("✅ Assignment fetched:", assignmentData);
    
                    setPatientId(assignmentData.patientId);
                    setFormData(prev => ({
                        ...prev,
                        reviewId: assignment, // linking assignmentId as reviewId
                        patientId: assignmentData.patientId
                    }));
    
                    // Fetching full patient info from Hpforms
                    return fetch(`https://localhost:7112/api/Hpforms/patient/${assignmentData.patientId}`);
    
                })
                .then(async (res) => {
                    if (!res.ok) {
                        const errText = await res.text();
                        throw new Error(`❌ Failed to fetch patient info: ${res.status} - ${errText}`);
                    }
                    return res.json();
                })
                .then((patientData) => {
                    console.log("✅ Patient info fetched:", patientData);
    
                    const updatedInfo = {
                        name: patientData.name || '',
                        age: patientData.age || '',
                        gender: patientData.gender || ''
                    };
    
                    setPatientInfo(updatedInfo);
    
                    // 🔍 Debug: confirm updated state values
                    console.log("🧠 Final formData:", {
                        reviewId: assignment,
                        patientId: patientData.patientId // this might not exist, so just confirming
                    });
                    console.log("👤 Final patientInfo:", updatedInfo);
                })
    
                .catch(err => {
                    console.error("❌ Error loading data:", err.message);
                });
        }, [searchParams]);

    // Fix for handleSubmit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', {
            patientId,
            reviewId,
            date,
            investigations,
            medications
        });
        alert('Form submitted successfully!');
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
                {/* <div className="bg-gray-50 p-4 sm:p-5 lg:p-6 rounded-xl border-l-4 border-blue-600 shadow-md mb-6"> */}
                {/* <div className="flex items-center mb-4">
                        <User className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-base sm:text-lg font-semibold text-blue-900">
                            Patient Information
                        </h3>
                    </div> */}

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
                {/* </div> */}

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
                                            <td className="border border-gray-300 px-3 py-2">
                                                <input
                                                    type="text"
                                                    value={item.medicine}
                                                    onChange={(e) => updateMedication(item.id, 'medicine', e.target.value)}
                                                    className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
                                                    placeholder="Enter medicine"
                                                />
                                            </td>
                                            <td className="border border-gray-300 px-3 py-2">
                                                <input
                                                    type="text"
                                                    value={item.prescription}
                                                    onChange={(e) => updateMedication(item.id, 'prescription', e.target.value)}
                                                    className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
                                                    placeholder="Enter prescription"
                                                />
                                            </td>
                                            <td className="border border-gray-300 px-3 py-2">
                                                <div className="flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={item.remarks}
                                                        onChange={(e) => updateMedication(item.id, 'remarks', e.target.value)}
                                                        className="w-full px-2 py-1 border-none focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
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