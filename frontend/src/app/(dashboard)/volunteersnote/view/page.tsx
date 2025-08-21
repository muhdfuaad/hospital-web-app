'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { Printer, Share2, HandHeart, Activity, User, Calendar } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface VolunteerNoteData {
    patientId: string;
    reviewId: string;
    date: string;
    volActivitiesDesc: string;
}

const VolunteerNoteView = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [assignmentId, setAssignmentId] = useState<string | null>(null);
    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

    const [volunteerNoteData, setVolunteerNoteData] = useState<VolunteerNoteData | null>(null);
    const [loading, setLoading] = useState(true);

    // Fetch assignmentId + patientId + basic info
    useEffect(() => {
        const assignment = searchParams.get('assignmentId');
        if (!assignment) return;

        if (assignmentId === assignment) return;

        setAssignmentId(assignment);

        const fetchAssignmentAndPatient = async () => {
            try {
                // Fetch assignment info
                const assignmentRes = await API.get(`/api/PatientAssignments/byAssignmentId/${assignment}`);
                const assignmentData = assignmentRes.data as any;

                if (!assignmentData?.patientId) return;

                setPatientId(assignmentData.patientId);

                // Fetch patient info using patientId
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

    // Fetch volunteer note data
    useEffect(() => {
        const assignment = searchParams.get("assignmentId");

        if (!assignment) return;

        const fetchVolunteerNote = async () => {
            try {
                setLoading(true);
                const res = await API.get(`/api/VolunteersNotes/review/${assignment}`);

                if (res.status === 204 || !res.data) {
                    console.log("No VolunteerNote found");
                    setLoading(false);
                    return;
                }

                const data = res.data as any;

                const formattedDate = data.date?.split('T')[0] || '';

                setVolunteerNoteData({
                    patientId: data.patientId || '',
                    reviewId: data.reviewId || '',
                    date: formattedDate,
                    volActivitiesDesc: data.volActivitiesDesc || ''
                });

                setLoading(false);
            } catch (error: any) {
                if (error.response?.status === 404) {
                    console.log("No existing VolunteerNote found.");
                } else {
                    console.error("Error fetching VolunteerNote:", error.message);
                }
                setLoading(false);
            }
        };

        fetchVolunteerNote();
    }, [searchParams]);

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        const shareData = {
            title: `Volunteer's Note - ${patientInfo.name}`,
            text: `Volunteer's Note for ${patientInfo.name} dated ${volunteerNoteData ? new Date(volunteerNoteData.date).toLocaleDateString() : ''}`,
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
            {/* Print Styles */}
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
            background: #fff !important;
            color: #000 !important;
            font-family: 'Times New Roman', serif !important;
            font-size: 12pt !important;
            line-height: 1.4 !important;
          }
         
          nav, header, footer,
          .no-print,
          .menu-icon,
          .user-icon,
          .print\\:hidden {
            display: none !important;
            visibility: hidden !important;
          }
          
          .print\\:block {
            display: block !important;
          }
          
          .print\\:text-xs {
            font-size: 10pt !important;
          }
          
          .print\\:text-sm {
            font-size: 11pt !important;
          }
          
          .print\\:text-base {
            font-size: 12pt !important;
          }
          
          .print\\:text-lg {
            font-size: 14pt !important;
          }
          
          .print\\:p-2 {
            padding: 8pt !important;
          }
          
          .print\\:p-4 {
            padding: 16pt !important;
          }
          
          .print\\:p-6 {
            padding: 24pt !important;
          }
          
          .print\\:space-y-2 > * + * {
            margin-top: 8pt !important;
          }
          
          .print\\:space-y-4 > * + * {
            margin-top: 16pt !important;
          }
          
          .print\\:space-y-6 > * + * {
            margin-top: 24pt !important;
          }
          
          .print\\:bg-blue-50 {
            background-color: #eff6ff !important;
          }
          
          .print\\:bg-blue-100 {
            background-color: #dbeafe !important;
          }
          
          .print\\:bg-blue-900 {
            background-color: #1e3a8a !important;
          }
          
          .print\\:border-blue-200 {
            border-color: #bfdbfe !important;
          }
          
          .print\\:max-w-none {
            max-width: none !important;
          }
          
          .print\\:mx-0 {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
          
          .print\\:shadow-none {
            box-shadow: none !important;
          }
        }
      `}
            </style>

            {/* Action Buttons - Hidden in print */}
            <div className="print:hidden bg-white shadow-sm border-b border-gray-200 p-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-blue-900">Volunteer's Note</h1>
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
                    <div className="text-blue-900">Loading volunteer note data...</div>
                </div>
            ) : !volunteerNoteData ? (
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="text-red-600">No volunteer note found for this assignment.</div>
                </div>
            ) : (
                <div className="volunteer-note-content max-w-4xl mx-auto p-6 print:p-4 print:max-w-none print:mx-0">
                    <div className="bg-white rounded-lg print:rounded-none shadow-lg print:shadow-none min-h-[297mm] print:min-h-0">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 print:p-4 rounded-t-lg print:rounded-none print:bg-blue-900">
                            <div className="text-center">
                                <div className="flex justify-center items-center gap-3 mb-2">
                                    <h1 className="text-3xl print:text-lg font-light">Volunteer's Note</h1>
                                    <HandHeart className="w-8 h-8 print:w-5 print:h-5 text-blue-200" />
                                </div>
                                <p className="text-blue-200 text-lg print:text-sm">
                                    Volunteer Activities and Patient Care Documentation
                                </p>
                            </div>
                        </div>

                        <div className="p-4 print:p-3 space-y-4 print:space-y-2">
                            {/* Patient Info Header */}
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-4 print:mb-2">
                                
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg print:px-2 print:py-1">
                                        <span className="font-semibold text-sm print:text-xs">Patient ID:</span>
                                        <span className="text-sm print:text-xs">{volunteerNoteData.patientId || '-'}</span>
                                    </div>

                                    {/* Name / Age / Gender */}
                                    <div className="flex items-center gap-2 bg-white text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg border border-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span className="font-semibold print:text-xs">Name:</span>
                                        <span className="text-sm print:text-xs text-blue-600">
                                            {patientInfo.name + " / " + patientInfo.age + " / " + patientInfo.gender}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Section: Review ID + Date */}
                                <div className="flex flex-col gap-2 print:gap-1 items-end">
                                    {/* Date */}
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg print:bg-blue-50 print:border-blue-200">
                                        <span className="font-semibold">Date:</span>
                                        <span className="text-sm print:text-xs">{formatDate(volunteerNoteData.date)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content - Volunteer Activities */}
                            <div className="bg-blue-50 print:bg-blue-50 p-6 print:p-4 rounded-xl print:rounded ">
                                <div className="mb-4 print:mb-3">
                                    <h2 className="text-xl print:text-base font-semibold text-blue-900 flex items-center gap-3">
                                        <Activity className="w-6 h-6 print:w-4 print:h-4 text-blue-600" />
                                        Description of Volunteer Activities
                                    </h2>
                                </div>

                                <div className="bg-white p-6 print:p-4 rounded-xl print:rounded shadow-sm">
                                    <div className="prose max-w-none">
                                        <div className="whitespace-pre-wrap text-gray-800 text-base print:text-sm leading-relaxed print:leading-normal">
                                            {volunteerNoteData.volActivitiesDesc || 'No activities documented.'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Section - Only visible in print */}
                            {/* <div className="print:block hidden bg-gray-50 p-4 rounded border">
                                <h3 className="text-sm font-semibold text-blue-900 mb-2">Summary</h3>
                                <div className="text-xs text-gray-700 space-y-1">
                                    <p><strong>Patient:</strong> {patientInfo.name}</p>
                                    <p><strong>Date of Visit:</strong> {formatDate(volunteerNoteData.date)}</p>
                                    <p><strong>Volunteer Activity Documented:</strong> Yes</p>
                                </div>
                            </div> */}

                            {/* Volunteer Signature Section - Only in print */}
                            <div className="print:block hidden mt-8">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2">Volunteer's Signature</p>
                                        <div className="border-b border-gray-400 w-48 h-12"></div>
                                    </div>
                                    {/* <div className="text-right">
                                        <p className="text-sm text-gray-600">Date: {formatDate(volunteerNoteData.date)}</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* Footer - Only in print */}
                            <div className="print:block hidden mt-6 pt-4 border-t border-gray-300">
                                <div className="text-center text-xs text-gray-600">
                                    <p>This volunteer note documents the activities and care provided during the homecare visit.</p>
                                    <p className="mt-1">For any queries regarding volunteer services, please contact the homecare coordination team.</p>
                                </div>
                            </div>

                            {/* Note for screen view only */}
                            <div className="print:hidden mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-start gap-3">
                                    <HandHeart className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 mb-1">About Volunteer Notes</h4>
                                        <p className="text-sm text-blue-800">
                                            Volunteer notes document the non-medical activities and support provided to patients during homecare visits.
                                            These notes help maintain continuity of care and highlight the important role volunteers play in patient wellbeing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VolunteerNoteView;