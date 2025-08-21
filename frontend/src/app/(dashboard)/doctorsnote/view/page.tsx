'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { Printer, Share2, Download, Calendar, User, Heart, Stethoscope, FileText, Activity, Eye } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface Symptom {
    name: string;
    pqrstDescription: string;
}

interface DoctorNoteData {
    patientId: string;
    reviewId: string;
    date: string;
    historyOfIllness: string;
    presentMedications: string;
    associatedIllness: string;
    pulse: string;
    bp: string;
    height: string;
    weight: string;
    generalExamination: string;
    systematicExamination: string;
    additionalNotes: string;
    symptoms: Symptom[];
}

const DoctorsNoteView = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [assignmentId, setAssignmentId] = useState<string | null>(null);
    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

    const [noteData, setNoteData] = useState<DoctorNoteData>({
        patientId: '',
        reviewId: '',
        date: '',
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
        symptoms: []
    });

    const [loading, setLoading] = useState(true);

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

    // ✅ Fetch doctor's note data
    useEffect(() => {
        const assignmentId = searchParams.get("assignmentId");

        if (!assignmentId) return;

        const fetchDoctorNote = async () => {
            try {
                setLoading(true);
                const res = await API.get(`/api/DoctorsNotes/review/${assignmentId}`);

                if (res.status === 204 || !res.data) {
                    console.log("No DoctorNote found");
                    setLoading(false);
                    return;
                }

                const data = res.data as any;
                const formattedDate = data.date?.split('T')[0] || '';

                setNoteData({
                    patientId: data.patientId || '',
                    reviewId: data.reviewId || '',
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
                    additionalNotes: data.additionalNotes || '',
                    symptoms: Array.isArray(data.symptoms) ? data.symptoms.map((s: any) => ({
                        name: s.name || '',
                        pqrstDescription: s.pqrstDescription || ''
                    })) : []
                });

                setLoading(false);
            } catch (err: any) {
                if (err.response?.status === 404) {
                    console.log("No DoctorNote found");
                } else {
                    console.error("Error loading doctor note data:", err);
                }
                setLoading(false);
            }
        };

        fetchDoctorNote();
    }, [searchParams]);

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        const shareData = {
            title: `Doctor's Note - ${patientInfo.name}`,
            text: `Doctor's note for ${patientInfo.name} dated ${new Date(noteData.date).toLocaleDateString()}`,
            url: window.location.href
        };

        if (navigator.share && navigator.canShare(shareData)) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Share cancelled or failed');
            }
        } else {
            // Fallback to copying URL
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            {/* === INLINE PRINT CLEANUP === */}
            <style>
                {`
                @media print {
                   @page {
                        margin: 0.5in;
                        size: A4;
                    }
                  body {
                    margin: 0;
                    padding: 0;
                }
                 
                  nav, header, footer,
                  .no-print,
                  .menu-icon,
                  .user-icon {
                    display: none !important;
                    visibility: hidden !important;
                  }
                  body {
                    background: #fff !important;
                    color: #000 !important;
                    font-family: 'Times New Roman', serif !important;
                  }
                  * {
                    font-size: 10pt !important;
                    line-height: 1.3 !important;
                  }
                  h1, h2, h3 {
                    font-size: 12pt !important;
                    font-weight: bold !important;
                  }
                }
                `}
            </style>

            {/* Action Buttons - Hidden in print */}
            <div className="print:hidden bg-white shadow-sm border-b border-gray-200 p-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-blue-900">Doctor's Note</h1>
                    <div className="flex gap-3">
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <Printer className="w-4 h-4" />
                            Print
                        </button>
                        <button
                            onClick={handleShare}
                            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="text-blue-900">Loading doctor's note...</div>
                </div>
            ) : (
                <div className="note-content max-w-4xl mx-auto p-6 print:p-0 print:max-w-none print:mx-0">
                    <div className="bg-white rounded-lg print:rounded-none shadow-lg print:shadow-none min-h-[297mm] print:min-h-0">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 print:p-3 rounded-t-lg print:rounded-none print:bg-blue-900">
                            <div className="text-center">
                                <div className="flex justify-center items-center gap-3 mb-2">
                                    <h1 className="text-2xl print:text-lg font-light">Doctor's Note</h1>
                                </div>
                                <p className="text-blue-200 text-base print:text-sm">
                                    Patient Diagnosis and Medical Assessment
                                </p>
                            </div>
                        </div>

                        <div className="p-4 print:p-3 space-y-4 print:space-y-2">
                            {/* Patient Info Header */}
                           <div className="flex flex-wrap justify-between items-start gap-4 mb-4 print:mb-2">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg print:px-2 print:py-1">
                                        <span className="font-semibold text-sm print:text-xs">Patient ID:</span>
                                        <span className="text-sm print:text-xs">{noteData.patientId || '-'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg border border-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                                            <span className="font-semibold print:text-xs">Name:</span>
                                            <span className="text-sm print:text-xs text-blue-600">
                                                {patientInfo.name + " / " + patientInfo.age + " / " + patientInfo.gender}
                                            </span>
                                        </div>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg print:px-2 print:py-1">
                                    <span className="font-semibold text-sm print:text-xs">Date:</span>
                                    <span className="text-sm print:text-xs">{formatDate(noteData.date)}</span>
                                </div>
                            </div>

                            {/* History of Illness */}
                            {noteData.historyOfIllness && (
                                <div className="bg-gray-50 p-3 print:p-2 rounded-lg  border-blue-600">
                                    <div className="flex items-center mb-2 print:mb-1">
                                        <h3 className="text-sm print:text-xs font-semibold text-blue-900 uppercase">
                                            1. History of the Illness
                                        </h3>
                                    </div>
                                    <div className="bg-white p-2 print:p-1 rounded">
                                        <p className="text-sm print:text-xs text-gray-800">{noteData.historyOfIllness}</p>
                                    </div>
                                </div>
                            )}

                            {/* Symptoms */}
                            {noteData.symptoms && noteData.symptoms.length > 0 && (
                                <div className="bg-gray-50 p-3 print:p-2 rounded-lg border-blue-600">
                                    <div className="flex items-center mb-2 print:mb-1">
                                        <h3 className="text-sm print:text-xs font-semibold text-blue-900 uppercase">
                                            2. Evaluation of Presenting Symptoms
                                        </h3>
                                    </div>
                                    <div className="space-y-2 print:space-y-1">
                                        {noteData.symptoms.map((symptom, index) => (
                                            <div key={index} className="bg-white p-2 print:p-1 rounded-lg border-blue-600">
                                                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 print:grid-cols-5 print:gap-1">
                                                    <div className="md:col-span-2 print:col-span-2">
                                                        <span className="font-semibold text-xs print:text-xs text-blue-900">Symptom {index + 1}:</span>
                                                        <p className="text-sm print:text-xs text-gray-800">{symptom.name}</p>
                                                    </div>
                                                    <div className="md:col-span-3 print:col-span-3">
                                                        <span className="font-semibold text-xs print:text-xs text-blue-900">Remarks:</span>
                                                        <p className="text-sm print:text-xs text-gray-800">{symptom.pqrstDescription}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Present Medications */}
                            {noteData.presentMedications && (
                                <div className="bg-gray-50 p-3 print:p-2 rounded-lg border-blue-600">
                                    <div className="flex items-center mb-2 print:mb-1">
                                        <h3 className="text-sm print:text-xs font-semibold text-blue-900 uppercase">
                                            3. Present Medications
                                        </h3>
                                    </div>
                                    <div className="bg-white p-2 print:p-1 rounded">
                                        <p className="text-sm print:text-xs text-gray-800">{noteData.presentMedications}</p>
                                    </div>
                                </div>
                            )}

                            {/* Associated Illness */}
                            {noteData.associatedIllness && (
                                <div className="bg-gray-50 p-3 print:p-2 rounded-lg border-blue-600">
                                    <div className="flex items-center mb-2 print:mb-1">
                                        <h3 className="text-sm print:text-xs font-semibold text-blue-900 uppercase">
                                            4. Associated Illness
                                        </h3>
                                    </div>
                                    <div className="bg-white p-2 print:p-1 rounded">
                                        <p className="text-sm print:text-xs text-gray-800">{noteData.associatedIllness}</p>
                                    </div>
                                </div>
                            )}

                            {/* Physical Examination */}
                            <div className="bg-gray-50 p-3 print:p-2 rounded-lg border-blue-600">
                                <div className="flex items-center mb-2 print:mb-1">
                                    <h3 className="text-sm print:text-xs font-semibold text-blue-900 uppercase">
                                        5. Physical Examination
                                    </h3>
                                </div>

                                {/* Vital Signs */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 print:grid-cols-4 print:gap-1 mb-2">
                                    {noteData.pulse && (
                                        <div className="bg-white p-2 print:p-1 rounded">
                                            <span className="font-semibold text-xs print:text-xs text-blue-900">Pulse:</span>
                                            <p className="text-sm print:text-xs text-gray-800">{noteData.pulse}</p>
                                        </div>
                                    )}
                                    {noteData.bp && (
                                        <div className="bg-white p-2 print:p-1 rounded">
                                            <span className="font-semibold text-xs print:text-xs text-blue-900">BP:</span>
                                            <p className="text-sm print:text-xs text-gray-800">{noteData.bp}</p>
                                        </div>
                                    )}
                                    {noteData.height && (
                                        <div className="bg-white p-2 print:p-1 rounded">
                                            <span className="font-semibold text-xs print:text-xs text-blue-900">Height:</span>
                                            <p className="text-sm print:text-xs text-gray-800">{noteData.height}</p>
                                        </div>
                                    )}
                                    {noteData.weight && (
                                        <div className="bg-white p-2 print:p-1 rounded">
                                            <span className="font-semibold text-xs print:text-xs text-blue-900">Weight:</span>
                                            <p className="text-sm print:text-xs text-gray-800">{noteData.weight}</p>
                                        </div>
                                    )}
                                </div>

                                {/* General Examination */}
                                {noteData.generalExamination && (
                                    <div className="bg-white p-2 print:p-1 rounded mb-2 print:mb-1">
                                        <span className="font-semibold text-xs print:text-xs text-blue-900">General Examination:</span>
                                        <p className="text-sm print:text-xs text-gray-800">{noteData.generalExamination}</p>
                                    </div>
                                )}
                            </div>

                            {/* Systematic Examination */}
                            {noteData.systematicExamination && (
                                <div className="bg-gray-50 p-3 print:p-2 rounded-lg border-l-4 border-blue-600">
                                    <div className="flex items-center mb-2 print:mb-1">
                                        <h3 className="text-sm print:text-xs font-semibold text-blue-900 uppercase">
                                            6. Systematic Examination
                                        </h3>
                                    </div>
                                    <div className="bg-white p-2 print:p-1 rounded">
                                        <p className="text-sm print:text-xs text-gray-800 whitespace-pre-line">{noteData.systematicExamination}</p>
                                    </div>
                                </div>
                            )}

                            {/* Additional Notes */}
                            {noteData.additionalNotes && (
                                <div className="bg-gray-50 p-3 print:p-2 rounded-lg border-blue-600">
                                    <div className="flex items-center mb-2 print:mb-1">
                                        <h3 className="text-sm print:text-xs font-semibold text-blue-900 uppercase">
                                            7. Additional Notes
                                        </h3>
                                    </div>
                                    <div className="bg-white p-2 print:p-1 rounded">
                                        <p className="text-sm print:text-xs text-gray-800">{noteData.additionalNotes}</p>
                                    </div>
                                </div>
                            )}

                            {/* Doctor Signature Section - Only in print */}
                            <div className="print:block hidden mt-6 print:mt-4">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-gray-600 mb-2">Doctor's Signature</p>
                                        <div className="border-b border-gray-400 w-32 h-8"></div>
                                    </div>
                                    {/* <div className="text-right">
                                        <p className="text-xs text-gray-600">Date: {formatDate(noteData.date)}</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* Footer - Only in print */}
                            <div className="print:block hidden mt-4 pt-2 border-t border-gray-300">
                                <div className="text-center text-xs text-gray-600">
                                    <p>This medical assessment is confidential and intended for medical use only.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorsNoteView;