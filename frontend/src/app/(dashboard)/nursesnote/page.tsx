'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'
import API from '@/lib/axios';
import { Heart, FileText, Activity, User, Calendar, VenetianMask, Stethoscope, Eye, Pill, Target, Check, X, Plus } from 'lucide-react';

interface FormData {
    patientId: string;
    reviewId: string;
    date: string;
    diagnosis: string;
    situation: string;
    consciousness: 'normal' | 'different';
    consciousnesgenderplain: string;
    assistance: 'no' | 'yes';
    assistanceDetails: string;
    physicalDifficulties: string;
    food: 'normal' | 'different';
    foodDetails: string;
    sleep: 'normal' | 'different';
    sleepDetails: string;
    bowelMovements: 'normal' | 'different';
    bowelDetails: string;
    urination: 'normal' | 'different';
    urinationDetails: string;
    emotionalFactors: string;
    bp: string;
    pulse: string;
    temperature: string;
    height: string;
    weight: string;
    generalHygiene: 'normal' | 'different';
    generalHygieneDesc: string;
    personalHygiene: 'normal' | 'different';
    personalHygieneDesc: string;
    oralHygiene: 'normal' | 'different';
    oralHygieneDesc: string;
    skinHygiene: 'normal' | 'different';
    skinHygieneDesc: string;
    perinealHygiene: 'normal' | 'different';
    perinealHygieneDesc: string;
    otherHygiene: 'normal' | 'different';
    otherHygieneDesc: string;
    specialConditions: string;
    otherTreatments: string;
    medications: string;
    planSuggestions: string;
    rehabilitationDetails: string;
}

export default function NursesNote() {
    const [formData, setFormData] = useState<FormData>({
        patientId: '', // to fetch and display only
        reviewId: '',  // to be submitted to link to assignment
        date: new Date().toISOString().split('T')[0],
        diagnosis: '',
        situation: '',
        consciousness: 'normal',
        consciousnesgenderplain: '',
        assistance: 'no',
        assistanceDetails: '',
        physicalDifficulties: '',
        food: 'normal',
        foodDetails: '',
        sleep: 'normal',
        sleepDetails: '',
        bowelMovements: 'normal',
        bowelDetails: '',
        urination: 'normal',
        urinationDetails: '',
        emotionalFactors: '',
        bp: '',
        pulse: '',
        temperature: '',
        height: '',
        weight: '',
        generalHygiene: 'normal',
        generalHygieneDesc: '',
        personalHygiene: 'normal',
        personalHygieneDesc: '',
        oralHygiene: 'normal',
        oralHygieneDesc: '',
        skinHygiene: 'normal',
        skinHygieneDesc: '',
        perinealHygiene: 'normal',
        perinealHygieneDesc: '',
        otherHygiene: 'normal',
        otherHygieneDesc: '',
        specialConditions: '',
        otherTreatments: '',
        medications: '',
        planSuggestions: '',
        rehabilitationDetails: '',
    });

    const [patientId, setPatientId] = useState('');
    const [assignmentId, setAssignmentId] = useState('');
    const [reviewId, setReviewId] = useState('');
    const [patientInfo, setPatientInfo] = useState({ name: '', age: '', gender: '' });

    const router = useRouter();
    const searchParams = useSearchParams();

    const [noteExists, setNoteExists] = useState(false);

    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
    const isEditMode = !!formData.reviewId

    const getTodaysDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };
    const [date, setDate] = useState<string>(getTodaysDate());

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

    // to prefill data in form when Edit mode
    useEffect(() => {
        const assignment = searchParams.get("assignmentId");

        if (!assignment) return;

        const fetchNursesNote = async () => {
            try {
                const res = await API.get(`/api/NursesNotes/review/${assignment}`);

                if (res.status === 204 || !res.data) {
                    console.log("🆕 No DoctorNote found — this is a new entry.");
                    setNoteExists(false);
                    return;
                }

                setNoteExists(true);

                const data = res.data as any;

                const formattedDate = data.date
                    ? new Date(data.date).toISOString().split('T')[0]
                    : '';

                setFormData((prev) => ({
                    ...prev,
                    reviewId: data.reviewId,
                    patientId: data.patientId,
                    date: formattedDate,
                    diagnosis: data.diagnosis || '',
                    situation: data.situation || '',
                    consciousness: data.consciousness || (data.consciousnesGenderPlain ? 'different' : 'normal'),
                    consciousnesgenderplain: data.consciousnesGenderPlain || '',
                    assistance: data.assistance || 'no',
                    assistanceDetails: data.assistanceDetails || '',
                    physicalDifficulties: data.physicalDifficulties || '',
                    food: data.food || 'normal',
                    foodDetails: data.foodDetails || '',
                    sleep: data.sleep || 'normal',
                    sleepDetails: data.sleepDetails || '',
                    bowelMovements: data.bowelMovements || 'normal',
                    bowelDetails: data.bowelDetails || '',
                    urination: data.urination || 'normal',
                    urinationDetails: data.urinationDetails || '',
                    emotionalFactors: data.emotionalFactors || '',
                    bp: data.bp || '',
                    pulse: data.pulse || '',
                    temperature: data.temperature || '',
                    height: data.height || '',
                    weight: data.weight || '',
                    generalHygiene: data.generalHygiene || 'normal',
                    generalHygieneDesc: data.generalHygieneDesc || '',
                    personalHygiene: data.personalHygiene || 'normal',
                    personalHygieneDesc: data.personalHygieneDesc || '',
                    oralHygiene: data.oralHygiene || 'normal',
                    oralHygieneDesc: data.oralHygieneDesc || '',
                    skinHygiene: data.skinHygiene || 'normal',
                    skinHygieneDesc: data.skinHygieneDesc || '',
                    perinealHygiene: data.perinealHygiene || 'normal',
                    perinealHygieneDesc: data.perinealHygieneDesc || '',
                    otherHygiene: data.otherHygiene || 'normal',
                    otherHygieneDesc: data.otherHygieneDesc || '',
                    specialConditions: data.specialConditions || '',
                    otherTreatments: data.otherTreatments || '',
                    medications: data.medications || '',
                    planSuggestions: data.planSuggestions || '',
                    rehabilitationDetails: data.rehabilitationDetails || '',
                }));
            } catch (error: any) {
                if (error.response?.status === 404) {
                    console.log("🆕 No existing NursesNote found. New form.");
                } else {
                    console.error("❌ Error fetching NursesNote:", error.message);
                }
            }
        };

        fetchNursesNote();
    }, [searchParams]);



    const handleInputChange = (field: keyof FormData, value: string | number) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const isEditMode = noteExists;

            const payload = { ...formData };

            const url = isEditMode
                ? `/api/NursesNotes/review/${formData.reviewId}` // now the real reviewId
                : `/api/NursesNotes`;

            if (isEditMode) {
                await API.put(url, payload);
            } else {
                await API.post(url, payload);
            }

            setSubmitMessage(
                isEditMode
                    ? "Nurse's Note updated successfully!"
                    : "Nurse's Note created successfully!"
            );
            setSubmitStatus('success');

            setTimeout(() => {
                router.push(`/nurse-consultations/details?patientId=${patientId}&assignmentId=${assignmentId}&refresh=1`)
            }, 1000);

        } catch (error: any) {
            console.error('❌ Error submitting nurses note:', error);
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
                    <h1 className="text-2xl sm:text-3xl font-light">
                        Nurses Note
                    </h1>
                    <Heart className="w-6 h-6 text-blue-200" />
                </div>

                <p className="text-sm sm:text-lg text-blue-200">
                    Things to Look Out for in Homecare
                </p>
            </div>

            <div className="p-5">
                {/* Form */}
                <div className="p-2 sm:p-4 lg:p-6">
                    <form className="space-y-4 sm:space-y-6">
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

                        {/* Section 1: Diagnosis and Condition */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    1. Diagnosis and Condition
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Diagnosis (including persistent physical problems) *
                                    </label>
                                    <textarea
                                        value={formData.diagnosis}
                                        onChange={(e) => handleInputChange('diagnosis', e.target.value)}
                                        rows={2}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        The situation when the homecare team sees the patient *
                                    </label>
                                    <textarea
                                        value={formData.situation}
                                        onChange={(e) => handleInputChange('situation', e.target.value)}
                                        rows={2}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Consciousness *
                                    </label>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="consciousness"
                                                value="normal"
                                                checked={formData.consciousness === 'normal'}
                                                onChange={(e) => handleInputChange('consciousness', e.target.value as 'normal' | 'different')}
                                                className="mr-2"
                                            />
                                            Normal
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="consciousness"
                                                value="different"
                                                checked={formData.consciousness === 'different'}
                                                onChange={(e) => handleInputChange('consciousness', e.target.value as 'normal' | 'different')}
                                                className="mr-2"
                                            />
                                            Different (explain):
                                        </label>
                                        {formData.consciousness === 'different' && (
                                            <input
                                                type="text"
                                                value={formData.consciousnesgenderplain}
                                                onChange={(e) => handleInputChange('consciousnesgenderplain', e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm ml-6"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Is assistance required? *
                                    </label>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="assistance"
                                                value="no"
                                                checked={formData.assistance === 'no'}
                                                onChange={(e) => handleInputChange('assistance', e.target.value as 'no' | 'yes')}
                                                className="mr-2"
                                            />
                                            No
                                        </label>
                                        <label className="flex items-center">
                                            <input
                                                type="radio"
                                                name="assistance"
                                                value="yes"
                                                checked={formData.assistance === 'yes'}
                                                onChange={(e) => handleInputChange('assistance', e.target.value as 'no' | 'yes')}
                                                className="mr-2"
                                            />
                                            Yes (specify amount for each):
                                        </label>
                                        {formData.assistance === 'yes' && (
                                            <textarea
                                                value={formData.assistanceDetails}
                                                onChange={(e) => handleInputChange('assistanceDetails', e.target.value)}
                                                rows={3}
                                                placeholder="(specify amount for each): Transportation, bathing, toilet use, eating, dressing:"
                                                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 ml-6"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Physical Condition */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Activity className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    2. Physical Condition
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                    List patient's current physical difficulties in order of importance *
                                </label>
                                <textarea
                                    value={formData.physicalDifficulties}
                                    onChange={(e) => handleInputChange('physicalDifficulties', e.target.value)}
                                    rows={3}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>

                        {/* Section 3: Basic Information */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    3. Basic Information
                                </h3>
                                <span className="text-xs text-blue-600 ml-2 bg-blue-100 px-2 py-1 rounded-full">
                                    Explain if different
                                </span>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { key: 'food', label: 'Food' },
                                        { key: 'sleep', label: 'Sleep' },
                                        { key: 'bowelMovements', label: 'Bowel Movements' },
                                        { key: 'urination', label: 'Urination' }
                                    ].map((item) => (
                                        <div key={item.key} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                            <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                                {item.label} *
                                            </label>
                                            <div className="flex items-center space-x-4 mb-2">
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name={item.key}
                                                        value="normal"
                                                        checked={formData[item.key as keyof FormData] === 'normal'}
                                                        onChange={(e) => handleInputChange(item.key as keyof FormData, e.target.value)}
                                                        className="mr-1"
                                                    />
                                                    Normal
                                                </label>
                                                <label className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name={item.key}
                                                        value="different"
                                                        checked={formData[item.key as keyof FormData] === 'different'}
                                                        onChange={(e) => handleInputChange(item.key as keyof FormData, e.target.value)}
                                                        className="mr-1"
                                                    />
                                                    Different
                                                </label>
                                            </div>
                                            {formData[item.key as keyof FormData] === 'different' && (
                                                <input
                                                    type="text"
                                                    value={formData[`${item.key}Details` as keyof FormData] as string}
                                                    onChange={(e) => handleInputChange(`${item.key}Details` as keyof FormData, e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Emotional & Family Factors */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Heart className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    4. Emotional & Family Factors
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <textarea
                                    value={formData.emotionalFactors}
                                    onChange={(e) => handleInputChange('emotionalFactors', e.target.value)}
                                    rows={2}
                                    placeholder="Emotional / Psychological / Social / Financial issues of the patient and family:"
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300 placeholder:text-gray-400 placeholder:text-sm"
                                />
                            </div>
                        </div>

                        {/* Section 5: Examination */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Stethoscope className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    5. Examination Section
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-xl">
                                    <div>
                                        <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            BP
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.bp}
                                            onChange={(e) => handleInputChange('bp', e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                            placeholder="e.g., 120/80 mmHg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Pulse
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.pulse}
                                            onChange={(e) => handleInputChange('pulse', e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                            placeholder="e.g., 80 bpm, regular"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Temperature
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.temperature}
                                            onChange={(e) => handleInputChange('temperature', e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                            placeholder="e.g., 96°F"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Height
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.height}
                                            onChange={(e) => handleInputChange('height', e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                            placeholder="e.g., 170 cm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                            Weight
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.weight}
                                            onChange={(e) => handleInputChange('weight', e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                            placeholder="e.g., 65 kg"
                                        />
                                    </div>
                                </div>

                                {/* Inspection Table */}
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                                        <thead>
                                            <tr className="bg-blue-50">
                                                <th className="border border-gray-300 p-3 text-left text-xs font-semibold text-blue-900 uppercase tracking-wide">
                                                    Inspection
                                                </th>
                                                <th className="border border-gray-300 p-3 text-left text-xs font-semibold text-blue-900 uppercase tracking-wide">
                                                    Condition
                                                </th>
                                                <th className="border border-gray-300 p-3 text-left text-xs font-semibold text-blue-900 uppercase tracking-wide">
                                                    Description
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { key: 'generalHygiene', label: 'General Hygiene' },
                                                { key: 'personalHygiene', label: 'Personal Hygiene' },
                                                { key: 'oralHygiene', label: 'Oral & Dental Hygiene' },
                                                { key: 'skinHygiene', label: 'Skin Hygiene' },
                                                { key: 'perinealHygiene', label: 'Perineal Hygiene' },
                                                { key: 'otherHygiene', label: 'Any other' }
                                            ].map((item) => (
                                                <tr key={item.key} className="hover:bg-gray-50">
                                                    <td className="border border-gray-300 p-3 font-medium text-blue-900">
                                                        {item.label}
                                                    </td>
                                                    <td className="border border-gray-300 p-3">
                                                        <div className="flex space-x-4">
                                                            <label className="flex items-center">
                                                                <input
                                                                    type="radio"
                                                                    name={item.key}
                                                                    value="normal"
                                                                    checked={formData[item.key as keyof FormData] === 'normal'}
                                                                    onChange={(e) => handleInputChange(item.key as keyof FormData, e.target.value)}
                                                                    className="mr-1"
                                                                />
                                                                Normal
                                                            </label>
                                                            <label className="flex items-center">
                                                                <input
                                                                    type="radio"
                                                                    name={item.key}
                                                                    value="different"
                                                                    checked={formData[item.key as keyof FormData] === 'different'}
                                                                    onChange={(e) => handleInputChange(item.key as keyof FormData, e.target.value)}
                                                                    className="mr-1"
                                                                />
                                                                Different
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td className="border border-gray-300 p-3">
                                                        {formData[item.key as keyof FormData] === 'different' && (
                                                            <input
                                                                type="text"
                                                                value={formData[`${item.key}Desc` as keyof FormData] as string}
                                                                onChange={(e) => handleInputChange(`${item.key}Desc` as keyof FormData, e.target.value)}
                                                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                                            />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Section 6: Special Conditions */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    6. Special Conditions
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                    Write down the details related to these: <br />
                                    <span className="text-xs text-gray-600 normal-case font-normal">
                                        (Ulcers/ Ostomies / Catheter / Tubes / Lymphoedema / Physiotherapy / Bed sore etc.)
                                    </span>
                                </label>
                                <textarea
                                    value={formData.specialConditions}
                                    onChange={(e) => handleInputChange('specialConditions', e.target.value)}
                                    rows={2}
                                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Section 7: Treatments and Medications */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Pill className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    7. Treatments and Medications
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        i) Other treatments performed since last OP/Homecare visit
                                    </label>
                                    <textarea
                                        value={formData.otherTreatments}
                                        onChange={(e) => handleInputChange('otherTreatments', e.target.value)}
                                        rows={2}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        ii) What medications are available now?
                                    </label>
                                    <textarea
                                        value={formData.medications}
                                        onChange={(e) => handleInputChange('medications', e.target.value)}
                                        rows={2}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Section 8: Plan & Assistance */}
                        <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-3 sm:mb-4">
                                <Target className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                    8. Plan & Assistance
                                </h3>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm space-y-4">
                                <div>
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        i) Things done/ Suggestions / Future plans
                                    </label>
                                    <textarea
                                        value={formData.planSuggestions}
                                        onChange={(e) => handleInputChange('planSuggestions', e.target.value)}
                                        rows={2}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        ii) Details of rehabilitation activities or other assistance available to the patient
                                    </label>
                                    <textarea
                                        value={formData.rehabilitationDetails}
                                        onChange={(e) => handleInputChange('rehabilitationDetails', e.target.value)}
                                        rows={2}
                                        className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                            <p className="text-sm text-blue-800 italic">
                                <strong>Note:</strong> All information provided must be valid and accurate to the best of your knowledge.
                            </p>
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
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl flex items-center gap-2 sm:gap-3"
                            >
                                <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                                {isEditMode ? "Update Nurse's Note" : "Submit Nurse's Note"}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}


