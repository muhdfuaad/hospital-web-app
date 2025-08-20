'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { User, Heart, Calendar, VenetianMask, FileText, Activity, HandHeart, Eye, Plus, X, Check, Trash2 } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface VolunteerNoteFormData {
    patientId: string;
    reviewId: string;
    date: string;
    volActivitiesDesc: string;
}

export default function VolunteersNoteForm() {
    const [formData, setFormData] = useState<VolunteerNoteFormData>({
        patientId: '', // to fetch and display only
        reviewId: '',  // to be submitted to link to assignment
        date: new Date().toISOString().split('T')[0],
        volActivitiesDesc: ''
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

        const fetchVolunteerNote = async () => {
            try {
                const res = await API.get(`/api/VolunteersNotes/review/${assignment}`);

                if (res.status === 204 || !res.data) {
                    console.log("🆕 No VolunteerNote found — this is a new entry.");
                    setNoteExists(false);
                    return;
                }

                setNoteExists(true);

                const data = res.data as any;

                const formattedDate = data.date?.split('T')[0] || '';

                setFormData((prev) => ({
                    ...prev,
                    reviewId: data.reviewId,
                    patientId: data.patientId,
                    date: formattedDate,
                    volActivitiesDesc: data.volActivitiesDesc || ''
                }));

            } catch (err: any) {
                if (err.response?.status === 404) {
                    console.log("🆕 No VolunteerNote found — this is a new entry.");
                    setNoteExists(false);
                } else {
                    console.error("❌ Unexpected error fetching VolunteerNote:", err.message);
                }
            }
        };

        fetchVolunteerNote();
    }, [searchParams]);

    const getTodaysDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };
    const [date, setDate] = useState<string>(getTodaysDate());

    const [noteExists, setNoteExists] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    const isEditMode = !!formData.reviewId;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const dataToSend = {
            ...formData
        };

        try {
            const isEditMode = noteExists;

            const url = isEditMode
                ? `/api/VolunteersNotes/review/${formData.reviewId}` // now the real reviewId
                : `/api/VolunteersNotes`;

            if (isEditMode) {
                await API.put(url, dataToSend);
            } else {
                await API.post(url, dataToSend);
            }
            setSubmitMessage(isEditMode
                ? "Volunteer's Note updated successfully!"
                : "Volunteer's Note created successfully!");
            setSubmitStatus('success');

            setTimeout(() => {
                router.push(`/volunteer-consultations/details?patientId=${patientId}&assignmentId=${assignmentId}&refresh=1`)
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
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 text-center sm:p-6 shadow-lg">
                <div className="flex justify-center items-center gap-3 mb-3">
                    <h1 className="text-2xl sm:text-3xl font-light">
                        Volunteer's Note
                    </h1>
                    <HandHeart className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-sm sm:text-lg text-blue-200">
                    Volunteer Activities and Patient Care Documentation
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

                            {/* Date Picker */}
                            <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs">
                                <span className="font-semibold">Date :</span>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                                    className="bg-transparent text-sm text-blue-800 focus:outline-none"
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

                    {/* Section: Description of Volunteer Activities */}
                    <div className="bg-gray-50 p-3 sm:p-4 lg:p-5 rounded-xl border-l-4 border-blue-600">
                        <div className="flex items-center mb-3 sm:mb-4">
                            <Activity className="w-6 h-6 text-blue-600 mr-3" />
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-blue-900">
                                Description of Volunteer Activities
                            </h3>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <textarea
                                value={formData.volActivitiesDesc}
                                onChange={(e) => setFormData({ ...formData, volActivitiesDesc: e.target.value })}
                                className="w-full p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                                rows={4}
                                placeholder="Please describe the volunteer activities performed, patient interaction, and any observations..."
                            />
                        </div>
                    </div>

                    {/* Submit Message */}
                    {submitMessage && (
                        <div className={`p-4 rounded-lg text-center font-medium ${submitStatus === 'success'
                            ? 'bg-green-100 text-green-800 border border-green-300'
                            : 'bg-red-100 text-red-800 border border-red-300'
                            }`}>
                            <div className="flex items-center justify-center gap-2">
                                {submitStatus === 'success' ? (
                                    <Check className="w-5 h-5" />
                                ) : (
                                    <X className="w-5 h-5" />
                                )}
                                {submitMessage}
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            onClick={handleSubmit}
                            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="flex items-center gap-2">
                                <HandHeart className="w-5 h-5" />
                                {isEditMode ? 'Update Volunteer Note' : 'Submit Volunteer Note'}
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}