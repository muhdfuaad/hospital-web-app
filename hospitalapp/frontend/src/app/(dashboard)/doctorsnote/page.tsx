'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { User, Heart, Calendar, VenetianMask, FileText, Activity, Stethoscope, Eye, Plus, X, Check, Trash2 } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface Symptom {
    name: string;
    pqrstDescription: string;
}

interface DoctorNoteFormData {
    patientId: string;
    reviewId: string;
    date: string;
    historyOfIllness: string;
    presentMedications: string;
    associatedIllness?: string;
    pulse: string;
    bp: string;
    height: string;
    weight: string;
    generalExamination?: string;
    systematicExamination?: string;
    additionalNotes?: string;

    // ✅ Add this to allow entering multiple symptoms
    symptoms?: Symptom[];
}

export default function DoctorsNoteForm() {
    const [formData, setFormData] = useState<DoctorNoteFormData>({
        patientId: '', // to fetch and display only
        reviewId: '',  // to be submitted to link to assignment
        date: new Date().toISOString().split('T')[0],
        historyOfIllness: '',
        presentMedications: '',
        associatedIllness: '',
        pulse: '',
        bp: '',
        height: '',
        weight: '',
        generalExamination: '',
        systematicExamination: '',
        additionalNotes: '',
        symptoms: [] // 👈 initialized empty
    });


    const [assignmentId, setAssignmentId] = useState('');
    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });
    const searchParams = useSearchParams();
    const router = useRouter();

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
        const assignment = searchParams.get("assignmentId");
        if (!assignment) return;

        const fetchDoctorNote = async () => {
            try {
                const res = await API.get(`/api/DoctorsNotes/review/${assignment}`);

                if (res.status === 204 || !res.data) {
                    console.log("🆕 No DoctorNote found — this is a new entry.");
                    return;
                }

                const data = res.data as any;

                const formattedDate = data.date?.split('T')[0] || '';

                setFormData((prev) => ({
                    ...prev,
                    reviewId: data.reviewId,
                    patientId: data.patientId,
                    date: formattedDate,
                    historyOfIllness: data.historyOfIllness || '',
                    presentMedications: data.presentMedications || '',
                    associatedIllness: data.associatedIllness || '',
                    pulse: data.pulse || '',
                    bp: data.bp || '',
                    height: data.height || '',
                    weight: data.weight || '',
                    generalExamination: data.generalExamination || '',
                    systematicExamination: data.systematicExamination || '',
                    additionalNotes: data.additionalNotes || ''
                }));

                if (Array.isArray(data.symptoms)) {
                    const mappedSymptoms = data.symptoms.map((s: any) => ({
                        name: s.name || '',
                        pqrstDescription: s.pqrstDescription || ''
                    }));
                    setSymptoms(mappedSymptoms);
                }
            } catch (err: any) {
                if (err.response?.status === 404) {
                    console.log("🆕 No DoctorNote found — this is a new entry.");
                } else {
                    console.error("❌ Unexpected error fetching DoctorNote:", err.message);
                }
            }
        };

        fetchDoctorNote();
    }, [searchParams]);


    const getTodaysDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };
    const [date, setDate] = useState<string>(getTodaysDate());

    const [symptoms, setSymptoms] = useState<Symptom[]>([
        { name: '', pqrstDescription: '' }
    ]);

    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    const updateSymptom = (
        index: number,
        field: keyof Symptom,
        value: string
    ) => {
        const newSymptoms = [...symptoms];
        newSymptoms[index][field] = value;
        setSymptoms(newSymptoms);
    };

    const addSymptom = () => {
        setSymptoms([...symptoms, { name: '', pqrstDescription: '' }]);
    };

    const removeSymptom = (index: number) => {
        if (symptoms.length > 1) {
            setSymptoms(symptoms.filter((_, i) => i !== index));
        }
    };

    const isEditMode = !!formData.reviewId && symptoms.length > 0;

    const handleSubmit = async () => {
        const reviewId = formData.reviewId;

        const dataToSend = {
            ...formData,
            symptoms: symptoms.map(s => ({
                name: s.name,
                pqrstDescription: s.pqrstDescription
            }))
        };

        try {
            const isEditMode = !!reviewId && symptoms.length > 0;

            const url = isEditMode
                ? `/api/DoctorsNotes/review/${reviewId}`  // Axios uses baseURL
                : `/api/DoctorsNotes`;

            const response = isEditMode
                ? await API.put(url, dataToSend)
                : await API.post(url, dataToSend);

            setSubmitMessage(isEditMode
                ? "Doctor's Note updated successfully!"
                : "Doctor's Note created successfully!");
            setSubmitStatus('success');

            setTimeout(() => {
                console.log("✅ Redirecting to Doctor's Review with ID:", formData.reviewId);
                router.push(`/doctorsreview?assignmentId=${formData.reviewId}`);
            }, 1000);

        } catch (error: any) {
            console.error("❌ Submission error:", error.response?.data || error.message);
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
                <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 text-center rounded-none mb-4">
                    <div className="flex justify-center mb-3">
                        <Stethoscope className="w-10 h-10 sm:w-12 sm:h-12 text-blue-200" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-1">
                        Doctor's Note
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-blue-200">
                        Patient Diagnosis and Medical Assessment
                    </p>
                </div>

                {/* Form */}
                <div className="p-2 sm:p-4 lg:p-6">
                    <div className="space-y-4 sm:space-y-6">
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


                        {/* Section 1: History of the Illness */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    1. History of the Illness
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <textarea
                                    value={formData.historyOfIllness}
                                    onChange={(e) => setFormData({ ...formData, historyOfIllness: e.target.value })}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    rows={3}
                                    placeholder="Please provide detailed history of the patient's illness..."
                                />
                            </div>
                        </div>

                        {/* Section 2: Evaluation of presenting Symptoms */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Activity className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    2. Evaluation of Presenting Symptoms
                                </h3>
                                <span className="text-xs text-blue-600 ml-2 bg-blue-100 px-2 py-1 rounded-full">
                                    Use PQRST Format whenever possible
                                </span>
                            </div>

                            <div className="space-y-4">
                                {symptoms.map((symptom, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-sm font-semibold text-blue-900">
                                                Symptom {index + 1}
                                            </h4>
                                            {symptoms.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeSymptom(index)}
                                                    className="text-red-600 hover:text-red-800 p-1"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            )}

                                        </div>

                                        {/* Flex container for horizontal layout */}
                                        <div className="flex flex-col lg:flex-row gap-4">
                                            {/* Symptom Name (40%) */}
                                            <div className="w-full lg:w-2/5">
                                                <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                                    Symptom Name:
                                                </label>
                                                <input
                                                    type="text"
                                                    value={symptom.name}
                                                    onChange={(e) => updateSymptom(index, 'name', e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                                    placeholder="Enter symptom name"
                                                />
                                            </div>

                                            {/* PQRST Evaluation (60%) */}
                                            <div className="w-full lg:w-3/5">
                                                <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                                    PQRST Evaluation:
                                                </label>
                                                <textarea
                                                    value={symptom.pqrstDescription}
                                                    onChange={(e) =>
                                                        updateSymptom(index, 'pqrstDescription', e.target.value)
                                                    }
                                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 placeholder:text-gray-400 placeholder:text-sm"
                                                    rows={5}
                                                    placeholder={`P - Provocation/Palliation: What makes it better/worse?
Q - Quality: What does it feel like?
R - Region/Radiation: Where is it? Does it spread?
S - Severity: Rate the intensity (1-10)
T - Timing: When did it start? How long does it last?`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <button
                                type="button"
                                onClick={addSymptom}
                                className="mt-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 flex items-center gap-2 text-sm font-medium shadow-md transition-all duration-300"
                            >
                                <Plus size={14} /> Add Symptom
                            </button>
                        </div>

                        {/* Section 3: Present Medications */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Heart className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    3. Present Medications
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <textarea
                                    value={formData.presentMedications}
                                    onChange={(e) => setFormData({ ...formData, presentMedications: e.target.value })}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    rows={4}
                                    placeholder="List current medications with dosages and frequency..."
                                />
                            </div>
                        </div>

                        {/* Section 4: Associated Illness */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    4. Associated Illness (if any)
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <textarea
                                    value={formData.associatedIllness}
                                    onChange={(e) => setFormData({ ...formData, associatedIllness: e.target.value })}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    rows={2}
                                    placeholder="Describe any associated illnesses or comorbidities..."
                                />
                            </div>
                        </div>

                        {/* Section 5: Physical Examination */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Stethoscope className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    5. Physical Examination
                                </h3>
                            </div>

                            {/* Vital Signs - Pulse, BP, Height, Weight in single line */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                                {/* Pulse */}
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        a) Pulse:
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.pulse}
                                        onChange={(e) => setFormData({ ...formData, pulse: e.target.value })}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        placeholder="e.g., 80 bpm, regular"
                                    />
                                </div>

                                {/* BP */}
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        b) Blood Pressure:
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.bp}
                                        onChange={(e) => setFormData({ ...formData, bp: e.target.value })}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        placeholder="e.g., 120/80 mmHg"
                                    />
                                </div>

                                {/* Height */}
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        c) Height:
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.height}
                                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        placeholder="e.g., 170 cm"
                                    />
                                </div>

                                {/* Weight */}
                                <div className="bg-white p-4 rounded-xl shadow-sm">
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        d) Weight:
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.weight}
                                        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        placeholder="e.g., 65 kg"
                                    />
                                </div>
                            </div>


                            {/* General Examination */}
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                    General Examination:
                                </label>
                                <textarea
                                    value={formData.generalExamination}
                                    onChange={(e) => setFormData({ ...formData, generalExamination: e.target.value })}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    rows={2}
                                    placeholder="Describe general appearance, consciousness level, nutritional status, pallor, jaundice, lymphadenopathy, edema, etc."
                                />
                            </div>
                        </div>

                        {/* Section 6: Systematic Examination */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-base lg:text-lg font-semibold text-blue-900">
                                    6. Systematic Examination
                                </h3>
                            </div>

                            <p className="text-base text-blue-800 font-semibold mb-2 ml-1">
                                CVS / RS / GIT / CNS / Others
                            </p>

                            <textarea
                                value={formData.systematicExamination}
                                onChange={(e) =>
                                    setFormData({ ...formData, systematicExamination: e.target.value })
                                }
                                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 placeholder:text-gray-400 placeholder:text-sm"
                                rows={5}
                                placeholder={`CVS (Cardiovascular System)\nRS (Respiratory System)\nGIT (Gastrointestinal System)\nCNS (Central Nervous System)\nOthers`}
                            />
                        </div>



                        {/* Section 7: Additional Notes */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    7. Additional Notes
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <textarea
                                    value={formData.additionalNotes}
                                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    rows={3}
                                    placeholder="Any additional observations, impressions, or recommendations..."
                                />
                            </div>
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

                        {/* Submit Button */}
                        <div className="flex justify-center mt-10">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
                            >
                                <Check className="w-6 h-6" />
                                {isEditMode ? "Update Doctor's Note" : "Submit Doctor's Note"}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}