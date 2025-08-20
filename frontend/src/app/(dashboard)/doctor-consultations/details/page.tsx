'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { User, Calendar, VenetianMask, Heart, Plus, FileText, Clipboard, AlertCircle, Edit, FilePen,Printer } from 'lucide-react';
import API from '@/lib/axios';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface PatientData {
    name: string;
    age: string;
    gender: string;
    [key: string]: any;
}

interface Doctor {
    docName?: string;
}

interface PatientAssignment {
    assignmentId: string;
    patientId: string;
    date: string;
    time: string;
    doctorName: string;
    description: string;
    status?: string;
    hasReview?: boolean;
    hasNote?: boolean;
    [key: string]: any;
}

interface DoctorNote {
    id: number;
    assignmentId: string;
    symptoms: string;
    diagnosis: string;
    date: string;
    doctorName?: string;
    historyOfIllness?: string;
}

interface Investigation {
    investigationName: string;
    findings: string;
}

interface Medication {
    medicine: string;
    prescription: string;
}

interface DoctorReview {
    id: number;
    assignmentId: string;
    investigations: Investigation[];
    medications: Medication[];
    date: string;
}

interface AssignmentWithData {
    assignment: PatientAssignment;
    notes: DoctorNote[];
    reviews: DoctorReview[];
}

const PatientVisitHistoryPage = () => {
    const [activeTab, setActiveTab] = useState<'notes' | 'reviews'>('notes');
    const [patientId, setPatientId] = useState<string>('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [todayAssignmentId, setTodayAssignmentId] = useState<string | null>(null);
    const [todayAssignment, setTodayAssignment] = useState<PatientAssignment | null>(null);
    const [refreshKey, setRefreshKey] = useState(0);

    const searchParams = useSearchParams();
    const router = useRouter();

    const [assignmentId, setAssignmentId] = useState<string | null>(null);
    const [assignmentsWithData, setAssignmentsWithData] = useState<AssignmentWithData[]>([]);

    const formatDateLocal = (dateStr: string) => {
        const d = new Date(dateStr);
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    };
    useEffect(() => {
        const patient = searchParams.get('patientId');
        const assignment = searchParams.get('assignmentId');

        if (!patient) {
            setError('Patient ID is missing from the URL');
            setLoading(false);
            return;
        }
        setPatientId(patient);
        setAssignmentId(assignment);
    }, [searchParams]);

    // New effect to watch for ?refresh=1 and trigger reload
    useEffect(() => {
        const refresh = searchParams.get('refresh');
        if (refresh === '1') {
            setRefreshKey(prev => prev + 1);

            const newParams = new URLSearchParams(searchParams);
            newParams.delete('refresh');

            router.replace(`${window.location.pathname}${newParams.toString() ? '?' + newParams.toString() : ''}`);
        }
    }, [searchParams, router]);

    // Fetch patient data and all related consultation data
    useEffect(() => {
        if (!patientId) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError('');

                // 1) Fetch patient info
                const patientRes = await API.get<PatientData>(`/api/Hpforms/patient/${patientId}`);
                const patientData = patientRes.data || {};
                setPatientInfo({
                    name: patientData.name || '',
                    age: patientData.age || '',
                    gender: patientData.gender || ''
                });

                // 2) Fetch all assignments
                const assignmentsRes = await API.get<any[]>(`/api/PatientAssignments/byPatientId/${patientId}`);
                let patientAssignments: PatientAssignment[] = [];

                if (Array.isArray(assignmentsRes.data)) {
                    patientAssignments = assignmentsRes.data.map(a => ({
                        ...a,
                        doctorId: (a.DoctorId ?? a.doctorId ?? '').toString(),
                        assignmentId: a.AssignmentId ?? a.assignmentId,
                    }))
                        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                }

                // 3) Build assignmentsWithData (always fetch notes/reviews)
                const assignmentsWithDataPromises = patientAssignments.map(async (assignment) => {
                    let doctorName = '-';
                    if (assignment.doctorId) {
                        try {
                            const docRes = await API.get<Doctor>(`/api/Doctors/by-doc-id/${assignment.doctorId}`);
                            doctorName = docRes?.data?.docName ?? '-';
                        } catch {
                            doctorName = '-';
                        }
                    }

                    // Always fetch notes
                    let notes: DoctorNote[] = [];
                    try {
                        const notesRes = await API.get<DoctorNote[]>(`/api/DoctorsNotes/by-assignment/${assignment.assignmentId}`);
                        notes = Array.isArray(notesRes.data) ? notesRes.data : [];
                    } catch (err: any) {
                        if (err?.response?.status !== 404) console.error(`[DEBUG] error fetching notes for ${assignment.assignmentId}`, err);
                    }

                    // Always fetch reviews
                    let reviews: DoctorReview[] = [];
                    try {
                        const reviewsRes = await API.get<DoctorReview[]>(`/api/DoctorsReviews/by-assignment/${assignment.assignmentId}`);
                        reviews = Array.isArray(reviewsRes.data) ? reviewsRes.data : [];
                    } catch (err: any) {
                        if (err?.response?.status !== 404) console.error(`[DEBUG] error fetching reviews for ${assignment.assignmentId}`, err);
                    }

                    return {
                        assignment: {
                            ...assignment,
                            doctorName,
                            hasNote: notes.length > 0,
                            hasReview: reviews.length > 0
                        },
                        notes,
                        reviews
                    };
                });

                const assignmentsWithDataResult = await Promise.all(assignmentsWithDataPromises);
                setAssignmentsWithData(assignmentsWithDataResult);

                // 4) Detect separately when finding today's assignment:
                const today = formatDateLocal(new Date().toISOString());
                const todayAssignmentData = assignmentsWithDataResult.find(item =>
                    formatDateLocal(item.assignment.date) === today
                );
                setTodayAssignmentId(todayAssignmentData?.assignment.assignmentId || null);
                setTodayAssignment(todayAssignmentData?.assignment || null);

            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to load patient data and consultation history');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [patientId, refreshKey]);

    // Helper functions to check if new buttons should be enabled
    const canAddNewNote = () => {
        const today = formatDateLocal(new Date().toISOString());
        const todayData = assignmentsWithData.find(item =>
            formatDateLocal(item.assignment.date) === today
        );
        return !!todayData && todayData.notes.length === 0;
    };

    const canAddNewReview = () => {
        const today = formatDateLocal(new Date().toISOString());
        const todayData = assignmentsWithData.find(item =>
            formatDateLocal(item.assignment.date) === today
        );
        return !!todayData && todayData.reviews.length === 0;
    };

    // Filter assignments to only show those with completed forms
    const assignmentsWithNotes = assignmentsWithData.filter(item => item.assignment.hasNote);
    const assignmentsWithReviews = assignmentsWithData.filter(item => item.assignment.hasReview);

    const handleNewNote = () => {
        if (canAddNewNote()) {
            router.push(`/doctorsnote?patientId=${patientId}&assignmentId=${todayAssignmentId}`);
        } else if (!todayAssignmentId) {
            setError('No assignment found for today. Please assign this patient first.');
        } else if (todayAssignment?.hasNote) {
            setError('Note has already been submitted for today\'s assignment.');
        }
    };

    const handleNewReview = () => {
        if (canAddNewReview()) {
            router.push(`/doctorsreview?patientId=${patientId}&assignmentId=${todayAssignmentId}`);
        } else if (!todayAssignmentId) {
            setError('No assignment found for today. Please assign this patient first.');
        } else if (todayAssignment?.hasReview) {
            setError('Review has already been submitted for today\'s assignment.');
        }
    };

    const handleEditNote = (assignmentId: string) => {
        router.push(`/doctorsnote?patientId=${patientId}&assignmentId=${assignmentId}`);
    };

    const handleEditReview = (assignmentId: string) => {
        router.push(`/doctorsreview?patientId=${patientId}&assignmentId=${assignmentId}`);
    };

    const handlePrintNote = (assignmentId: string) => {
        router.push(`/doctorsnote/view?patientId=${patientId}&assignmentId=${assignmentId}`);
    };

    const handlePrintReview = (assignmentId: string) => {
        router.push(`/doctorsreview/view?patientId=${patientId}&assignmentId=${assignmentId}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-blue-600 text-lg">Loading consultation data...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-red-200">
                    <div className="flex items-center gap-3 text-red-600">
                        <AlertCircle className="w-6 h-6" />
                        <span className="text-lg font-medium">{error}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 text-center sm:p-6 shadow-lg">
                <div className="flex justify-center items-center gap-3 mb-3">
                    <h1 className="text-2xl sm:text-3xl font-light">Doctor Consultations</h1>
                    <Heart className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-sm sm:text-lg text-blue-200">
                    Patient Consultation History & Medical Records
                </p>
            </div>

            {/* Form */}
            <div className="p-2 sm:p-4 lg:p-6">
                <div className="space-y-4 sm:space-y-6">
                    {/* Patient ID Display */}
                    <div className="text-sm sm:text-base font-medium text-blue-900 mb-4 px-2 sm:px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Patient ID Display */}
                            <div className="flex justify-start">
                                <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs">
                                    <span className="font-semibold">Patient ID:</span>
                                    <span className="text-sm">{patientId}</span>
                                </div>
                            </div>
                            {/* Total Visits */}
                            <div className="flex justify-start">
                                <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs">
                                    <span className="font-semibold">Total Visits:</span>
                                    <span className="text-sm">
                                        {assignmentsWithData.filter(a => a.notes.length > 0 || a.reviews.length > 0).length}
                                    </span>
                                </div>
                            </div>

                            {/* Current Date Display */}
                            <div className="flex justify-start">
                                <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg shadow-sm border border-blue-200 w-fit max-w-xs">
                                    <span className="font-semibold">Date:</span>
                                    <span className="text-sm">{new Date().toLocaleDateString()}</span>
                                </div>
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

                    {/* Tabs Navigation */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="flex border-b border-gray-200">
                            <button
                                onClick={() => setActiveTab('reviews')}
                                className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${activeTab === 'reviews'
                                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                                    : 'bg-gray-50 text-blue-600 hover:bg-blue-50'
                                    }`}
                            >
                                <Clipboard className="w-4 h-4" />
                                Reviews
                            </button>
                            <button
                                onClick={() => setActiveTab('notes')}
                                className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${activeTab === 'notes'
                                    ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                                    : 'bg-gray-50 text-blue-600 hover:bg-blue-50'
                                    }`}
                            >
                                <FileText className="w-4 h-4" />
                                Notes
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="p-6">
                            {/* Reviews Tab */}
                            {activeTab === 'reviews' && (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wide">
                                            Investigations & Medications by Visit
                                        </h3>
                                        <button
                                            onClick={handleNewReview}
                                            disabled={!canAddNewReview()}
                                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            title={
                                                !todayAssignmentId
                                                    ? "No assignment for today. Please assign this patient first."
                                                    : todayAssignment?.hasReview
                                                        ? "Review has already been submitted for today's assignment"
                                                        : "Add new medical review"
                                            }
                                        >
                                            <Plus className="w-4 h-4" />
                                            New Review
                                        </button>
                                    </div>

                                    {assignmentsWithReviews.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse border border-gray-300">
                                                <thead>
                                                    <tr className="bg-blue-50">
                                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[12%]">
                                                            Assignment ID
                                                        </th>
                                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[12%]">
                                                            Visit Date
                                                        </th>
                                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[20%]">
                                                            Diagnosis
                                                        </th>
                                                        <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-blue-900 w-[18%]">
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {assignmentsWithReviews.map((item) => (
                                                        <tr key={item.assignment.assignmentId} className="hover:bg-gray-50">
                                                            <td className="border border-gray-300 px-3 py-2 text-sm">
                                                                {item.assignment.assignmentId}
                                                            </td>
                                                            <td className="border border-gray-300 px-3 py-2 text-sm">
                                                                {new Date(item.assignment.date).toLocaleDateString()}
                                                            </td>
                                                            <td className="border border-gray-300 px-3 py-2 text-sm">
                                                                {item.notes.length > 0 ? (
                                                                    <div className="space-y-1">
                                                                        {item.notes.map((note, index) => (
                                                                            <div key={index} className="text-xs">
                                                                                {note.historyOfIllness}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <span className="text-gray-400">No diagnosis</span>
                                                                )}
                                                            </td>
                                                            <td className="border border-gray-300 px-3 py-2 text-center">
                                                                {/* Edit Review */}
                                                                <button
                                                                    onClick={() => handleEditReview(item.assignment.assignmentId)}
                                                                    className="text-blue-600 hover:text-blue-800 p-1.5 rounded hover:bg-blue-100 transition-all"
                                                                    title="Edit Review"
                                                                >
                                                                    <FilePen className="w-4 h-4" />
                                                                </button>

                                                                {/* View/Print */}
                                                                <button
                                                                    onClick={() => handlePrintReview(item.assignment.assignmentId)}
                                                                    className="text-green-600 hover:text-green-800 p-1.5 rounded hover:bg-green-100 transition-all ml-2"
                                                                    title="View / Print"
                                                                >
                                                                    <Printer className="w-4 h-4" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="text-center py-8 text-gray-500">
                                            <Clipboard className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                                            <p className="text-lg">No reviews found for this patient.</p>
                                            <p className="text-sm">Complete a review form to see entries here.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                            {/* Notes Tab */}
                            {activeTab === 'notes' && (
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wide">
                                            Medical Notes by Visit
                                        </h3>
                                        <button
                                            onClick={handleNewNote}
                                            disabled={!canAddNewNote()}
                                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            title={
                                                !todayAssignmentId
                                                    ? "No assignment for today. Please assign this patient first."
                                                    : todayAssignment?.hasNote
                                                        ? "Note has already been submitted for today's assignment"
                                                        : "Add new consultation note"
                                            }
                                        >
                                            <Plus className="w-4 h-4" />
                                            New Note
                                        </button>
                                    </div>

                                    {assignmentsWithNotes.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse border border-gray-300">
                                                <thead>
                                                    <tr className="bg-blue-50">
                                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[12%]">
                                                            Assignment ID
                                                        </th>
                                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[12%]">
                                                            Visit Date
                                                        </th>
                                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[20%]">
                                                            Diagnosis
                                                        </th>
                                                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-blue-900 w-[15%]">
                                                            Doctor
                                                        </th>
                                                        <th className="border border-gray-300 px-3 py-2 text-center font-semibold text-blue-900 w-[18%]">
                                                            Actions
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {assignmentsWithNotes.map((item) => (
                                                        <tr key={item.assignment.assignmentId} className="hover:bg-gray-50">
                                                            <td className="border border-gray-300 px-3 py-2 text-sm">
                                                                {item.assignment.assignmentId}
                                                            </td>
                                                            <td className="border border-gray-300 px-3 py-2 text-sm">
                                                                {new Date(item.assignment.date).toLocaleDateString()}
                                                            </td>
                                                            <td className="border border-gray-300 px-3 py-2 text-sm">
                                                                {item.notes.length > 0 ? (
                                                                    <div className="space-y-1">
                                                                        {item.notes.map((note, index) => (
                                                                            <div key={index} className="text-xs">
                                                                                {note.historyOfIllness}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <span className="text-gray-400">No diagnosis</span>
                                                                )}
                                                            </td>
                                                            <td className="border border-gray-300 px-3 py-2 text-sm">
                                                                {item.assignment.doctorName || '-'}
                                                            </td>
                                                            <td className="border border-gray-300 px-3 py-2 text-center">
                                                                <button
                                                                    onClick={() => handleEditNote(item.assignment.assignmentId)}
                                                                    className="text-blue-600 hover:text-blue-800 p-1.5 rounded hover:bg-blue-100 transition-all"
                                                                    title="Edit Note"
                                                                >
                                                                    <FilePen className="w-4 h-4" />
                                                                </button>
                                                                {/* View/Print */}
                                                                <button
                                                                    onClick={() => handlePrintNote(item.assignment.assignmentId)}
                                                                    className="text-green-600 hover:text-green-800 p-1.5 rounded hover:bg-green-100 transition-all ml-2"
                                                                    title="View / Print"
                                                                >
                                                                    <Printer className="w-4 h-4" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                        </div>
                                    ) : (
                                        <div className="text-center py-8 text-gray-500">
                                            <FileText className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                                            <p className="text-lg">No notes found for this patient.</p>
                                            <p className="text-sm">Complete a note form to see entries here.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientVisitHistoryPage;