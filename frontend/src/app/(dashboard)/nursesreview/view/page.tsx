'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { Printer, Share2, Calendar, User, Heart, Check, X } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface NursesReviewData {
    id: number;
    patientId: string;
    reviewId: string;
    date: string;
    cells: { [key: string]: boolean };
    descriptions: { [key: string]: string };
    customProcedures: string[];
}

const NursesReviewView = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [assignmentId, setAssignmentId] = useState<string | null>(null);
    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

    const [reviewData, setReviewData] = useState<NursesReviewData>({
        id: 0,
        patientId: '',
        reviewId: '',
        date: '',
        cells: {},
        descriptions: {},
        customProcedures: []
    });

    type Procedure = { id: number; name: string };
    const [allProcedures, setAllProcedures] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    // ✅ Fetch all available procedures from backend
    useEffect(() => {
        const fetchProcedures = async () => {
            try {
                const { data } = await API.get<Procedure[]>("/api/NursesReviews/procedures");
                const names = data.map(proc => proc.name);
                setAllProcedures(names);
            } catch (err) {
                console.error("Failed to fetch procedures", err);
            }
        };

        fetchProcedures();
    }, []);

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

    // ✅ Fetch nurses review data
    useEffect(() => {
        const assignmentId = searchParams.get("assignmentId");

        if (!assignmentId) return;

        const fetchReview = async () => {
            try {
                setLoading(true);
                const res = await API.get<NursesReviewData>(`/api/NursesReviews/review/${assignmentId}`);

                if (
                    res.status === 204 ||
                    !res.data ||
                    (Array.isArray(res.data) && res.data.length === 0)
                ) {
                    console.log("No NursesReview found");
                    setLoading(false);
                    return;
                }

                const review = res.data;
                const formattedDate = review?.date?.split?.('T')?.[0] || new Date().toISOString().split('T')[0];

                setReviewData({
                    id: review?.id ?? 0,
                    patientId: review?.patientId ?? '',
                    reviewId: review?.reviewId ?? '',
                    date: formattedDate,
                    cells: review?.cells || {},
                    descriptions: review?.descriptions || {},
                    customProcedures: review?.customProcedures || [],
                });

                setLoading(false);
            } catch (err: any) {
                if (err.response?.status === 404) {
                    console.log("No NursesReview found");
                } else {
                    console.error("Error loading review data:", err);
                }
                setLoading(false);
            }
        };

        fetchReview();
    }, [searchParams]);

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        const shareData = {
            title: `Nurse's Review - ${patientInfo.name}`,
            text: `Nurse's daily homecare procedure report for ${patientInfo.name} dated ${new Date(reviewData.date).toLocaleDateString()}`,
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

    // Get all procedures that were performed (checked = true)
    const getPerformedProcedures = () => {
        const performedProcedures: Array<{ name: string; description: string }> = [];

        // Check standard procedures
        allProcedures.forEach(proc => {
            if (reviewData.cells[proc]) {
                performedProcedures.push({
                    name: proc,
                    description: reviewData.descriptions[proc] || ''
                });
            }
        });

        // Check custom procedures
        reviewData.customProcedures.forEach(proc => {
            if (reviewData.cells[proc]) {
                performedProcedures.push({
                    name: proc,
                    description: reviewData.descriptions[proc] || ''
                });
            }
        });

        return performedProcedures;
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
            font-size: 11pt !important;
            line-height: 1.4 !important;
          }
          h1 {
            font-size: 18pt !important;
          }
          h2 {
            font-size: 14pt !important;
          }
          h3 {
            font-size: 12pt !important;
          }
        }
      `}
            </style>

            {/* Action Buttons - Hidden in print */}
            <div className="print:hidden bg-white shadow-sm border-b border-gray-200 p-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-blue-900">Nurse's Review Report</h1>
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
                    <div className="text-blue-900">Loading nurse's review data...</div>
                </div>
            ) : (
                <div className="prescription-content max-w-4xl mx-auto p-6 print:p-4 print:max-w-none print:mx-0">
                    <div className="bg-white rounded-lg print:rounded-none shadow-lg print:shadow-none min-h-[297mm] print:min-h-0">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 print:p-3 rounded-t-lg print:rounded-none print:bg-blue-900">
                            <div className="text-center">
                                <div className="flex justify-center items-center gap-3 mb-2">
                                    <h1 className="text-2xl print:text-xl font-light">Nurse's Review</h1>
                                    <Heart className="w-6 h-6 text-blue-200" />
                                </div>
                                <p className="text-blue-200 text-base print:text-sm">
                                    Daily Homecare Procedure Report
                                </p>
                            </div>
                        </div>

                        <div className="p-4 print:p-3 space-y-4 print:space-y-3">
                            {/* Patient Information Header */}
                            <div className="flex justify-between items-start gap-4 print:gap-2">
                                {/* Left Section: Patient ID + Name */}
                                <div className="flex flex-col gap-2 print:gap-1">
                                    {/* Patient ID */}
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg print:bg-blue-50 print:border-blue-200">
                                        <span className="font-semibold">Patient ID:</span>
                                        <span className="text-sm">{reviewData.patientId || '-'}</span>
                                    </div>

                                    {/* Name / Age / Gender */}
                                    <div className="flex items-center gap-2 bg-white text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg border border-gray-200">
                                        <span className="font-semibold">Patient:</span>
                                        <span className="text-sm text-blue-600">
                                            {patientInfo.name + " / " + patientInfo.age + " / " + patientInfo.gender}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Section: Review ID + Date */}
                                <div className="flex flex-col gap-2 print:gap-1 items-end">
                                    {/* Review ID */}
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg print:bg-blue-50 print:border-blue-200">
                                        <span className="font-semibold">Review ID:</span>
                                        <span className="text-sm">{reviewData.reviewId || '-'}</span>
                                    </div>

                                    {/* Date */}
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg print:bg-blue-50 print:border-blue-200">
                                        <span className="font-semibold">Date:</span>
                                        <span className="text-sm">{formatDate(reviewData.date)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Procedures Performed */}
                            <div className="bg-white print:border-blue-200">
                                <div className="bg-blue-100 p-3 print:p-2 print:bg-blue-100 rounded-t-lg print:rounded-t">
                                    <h3 className="text-lg print:text-base font-bold text-blue-900 uppercase tracking-wide">
                                        PROCEDURES PERFORMED
                                    </h3>
                                </div>
                                <div className="p-4 print:p-2">
                                    {getPerformedProcedures().length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse text-sm print:text-xs">
                                                <thead>
                                                    <tr className="bg-blue-50 print:bg-blue-50">
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[8%]">
                                                            SI.No
                                                        </th>
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-center font-semibold text-blue-900 w-[8%]">
                                                            Status
                                                        </th>
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[35%]">
                                                            Care Procedure
                                                        </th>
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[49%]">
                                                            Description
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {getPerformedProcedures().map((item, index) => (
                                                        <tr key={index} className="hover:bg-gray-50 print:hover:bg-transparent">
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-center">
                                                                {index + 1}
                                                            </td>
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-center">
                                                                <Check className="w-4 h-4 text-green-600 mx-auto" />
                                                            </td>
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 font-medium">
                                                                {item.name}
                                                            </td>
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1">
                                                                {item.description || 'Completed successfully'}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <p className="text-gray-600 text-center py-4">No procedures were performed</p>
                                    )}
                                </div>
                            </div>

                            {/* All Procedures Summary (for reference) */}
                            <div className="bg-white print:border-blue-200">
                                <div className="bg-gray-100 p-3 print:p-2 print:bg-gray-100 rounded-t-lg print:rounded-t">
                                    <h3 className="text-lg print:text-base font-bold text-gray-700 uppercase tracking-wide">
                                        ALL PROCEDURES CHECKLIST
                                    </h3>
                                </div>
                                <div className="p-4 print:p-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 print:grid-cols-3 print:gap-1">
                                        {[...allProcedures, ...reviewData.customProcedures].map((proc, index) => (
                                            <div key={index} className="flex items-center gap-2 p-2 print:p-1 border border-gray-200 rounded print:border-gray-300">
                                                {reviewData.cells[proc] ? (
                                                    <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                                                ) : (
                                                    <X className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                                )}
                                                <span className={`text-sm print:text-xs ${reviewData.cells[proc] ? 'text-green-800 font-medium' : 'text-gray-500'}`}>
                                                    {proc}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Nurse Signature Section - Only in print */}
                            <div className="print:block hidden mt-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2">Nurse's Signature</p>
                                        <div className="border-b border-gray-400 w-48 h-8"></div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-600">Review Completed</p>
                                        <p className="text-sm text-gray-600">Date: {formatDate(reviewData.date)}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer - Only in print */}
                            <div className="print:block hidden mt-4 pt-3 border-t border-gray-300">
                                <div className="text-center text-xs text-gray-600">
                                    <p>This report documents the daily homecare procedures performed for the patient.</p>
                                    <p className="mt-1">For any queries, please contact the healthcare provider.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NursesReviewView;