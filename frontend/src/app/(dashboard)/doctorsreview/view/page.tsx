'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { Printer, Share2, Download, Calendar, User, Heart, Stethoscope } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface Investigation {
    id: number;
    investigation: string;
    findings: string;
}

interface Medication {
    id: number;
    medicine: string;
    prescription: string;
    remarks: string;
}

interface ReviewData {
    patientId: string;
    reviewId: string;
    date: string;
    patientInfo: PatientInfo;
    investigations: Investigation[];
    medications: Medication[];
}

const DoctorsPrescriptionView = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [assignmentId, setAssignmentId] = useState<string | null>(null);
    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

    const [formData, setFormData] = useState({
        patientId: '',
        reviewId: '',
        date: '',
    });

    const [investigations, setInvestigations] = useState<Investigation[]>([]);
    const [medications, setMedications] = useState<Medication[]>([]);
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

    // ✅ Fetch review data
    useEffect(() => {
        const assignmentId = searchParams.get("assignmentId");

        if (!assignmentId) return;

        const fetchReview = async () => {
            try {
                setLoading(true);
                const res = await API.get(`/api/DoctorsReviews/review/${assignmentId}`);

                if (
                    res.status === 204 ||
                    !res.data ||
                    (Array.isArray(res.data) && res.data.length === 0)
                ) {
                    console.log("No DoctorReview found");
                    setLoading(false);
                    return;
                }

                const review = Array.isArray(res.data) ? res.data[0] : res.data;

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

                setLoading(false);
            } catch (err: any) {
                if (err.response?.status === 404) {
                    console.log("No DoctorReview found");
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
            title: `Medical Prescription - ${patientInfo.name}`,
            text: `Medical prescription for ${patientInfo.name} dated ${new Date(formData.date).toLocaleDateString()}`,
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
                margin: 0;
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
            font-size: 12pt !important;
            line-height: 1.5 !important;
          }
        }
      `}
            </style>

            {/* Action Buttons - Hidden in print */}
            <div className="print:hidden bg-white shadow-sm border-b border-gray-200 p-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-blue-900">Medical Prescription</h1>
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
                    <div className="text-blue-900">Loading prescription data...</div>
                </div>
            ) : (
                <div className="prescription-content max-w-4xl mx-auto p-6 print:p-8 print:max-w-none print:mx-0">
                    <div className="bg-white rounded-lg print:rounded-none shadow-lg print:shadow-none min-h-[297mm] print:min-h-0 print:text-xs print:leading-tight">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 print:p-4 rounded-t-lg print:rounded-none print:bg-blue-900">
                            <div className="text-center">
                                <div className="flex justify-center items-center gap-3 mb-2">
                                    {/* <Stethoscope className="w-8 h-8 text-blue-200" /> */}
                                    <h1 className="text-3xl print:text-2xl font-light">Medical Prescription</h1>
                                    {/* <Heart className="w-8 h-8 text-blue-200" /> */}
                                </div>
                                <p className="text-blue-200 text-lg print:text-base">
                                    Patient Medical Review & Treatment Plan
                                </p>
                            </div>
                        </div>

                         <div className="p-4 print:p-3 space-y-4 print:space-y-2">
                            {/* Patient Info Header */}
                           <div className="flex flex-wrap justify-between items-start gap-4 mb-4 print:mb-2">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg print:px-2 print:py-1">
                                        <span className="font-semibold text-sm print:text-xs">Patient ID:</span>
                                            <span className="text-sm">{formData.patientId || '-'}</span>
                                        </div>

                                        {/* Name / Age / Gender */}
                                        <div className="flex items-center gap-2 bg-white text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg border border-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                                            <span className="font-semibold print:text-xs">Name:</span>
                                            <span className="text-sm print:text-xs text-blue-600">
                                                {patientInfo.name + " / " + patientInfo.age + " / " + patientInfo.gender}
                                            </span>
                                        </div>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg print:px-2 print:py-1">
                                    <span className="font-semibold text-sm print:text-xs">Date:</span>
                                        <span className="text-sm">{formatDate(formData.date)}</span>
                                    </div>
                                </div>

                            {/* Investigations */}
                            <div className="bg-white print:rounded print:border-blue-200">
                                <div className="bg-blue-100 p-3 print:p-2 print:bg-blue-100 rounded-t-lg print:rounded-t">
                                    <h3 className="text-lg print:text-base font-bold text-blue-900 uppercase tracking-wide">
                                        INVESTIGATIONS
                                    </h3>
                                </div>
                                <div className="p-4 print:p-2">
                                    {investigations.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse text-sm print:text-xs">
                                                <thead>
                                                    <tr className="bg-blue-50 print:bg-blue-50">
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[10%]">
                                                            SI.No
                                                        </th>
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[40%]">
                                                            Investigation
                                                        </th>
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[50%]">
                                                            Findings
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {investigations.map((item, index) => (
                                                        <tr key={item.id} className="hover:bg-gray-50 print:hover:bg-transparent">
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-center">
                                                                {index + 1}
                                                            </td>
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1">
                                                                {item.investigation}
                                                            </td>
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1">
                                                                {item.findings}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <p className="text-gray-600 text-center py-4">No investigations recorded</p>
                                    )}
                                </div>
                            </div>

                            {/* Medications */}
                            <div className="bg-white  print:border-blue-200">
                                <div className="bg-blue-100 p-3 print:p-2 print:bg-blue-100 rounded-t-lg print:rounded-t">
                                    <h3 className="text-lg print:text-base font-bold text-blue-900 uppercase tracking-wide">
                                        MEDICATIONS
                                    </h3>
                                </div>
                                <div className="p-4 print:p-2">
                                    {medications.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse text-sm print:text-xs">
                                                <thead>
                                                    <tr className="bg-blue-50 print:bg-blue-50">
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[8%]">
                                                            SI.No
                                                        </th>
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[35%]">
                                                            Medicine
                                                        </th>
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[20%]">
                                                            Prescription
                                                        </th>
                                                        <th className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-left font-semibold text-blue-900 w-[37%]">
                                                            Remarks
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {medications.map((item, index) => (
                                                        <tr key={item.id} className="hover:bg-gray-50 print:hover:bg-transparent">
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-center">
                                                                {index + 1}
                                                            </td>
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 font-medium">
                                                                {item.medicine}
                                                            </td>
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1 text-center font-mono">
                                                                {item.prescription}
                                                            </td>
                                                            <td className="border border-gray-300 print:border-gray-300 px-3 py-2 print:px-2 print:py-1">
                                                                {item.remarks}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <p className="text-gray-600 text-center py-4">No medications prescribed</p>
                                    )}
                                </div>
                            </div>

                            {/* Doctor Signature Section - Only in print */}
                            <div className="print:block hidden mt-8">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-2">Doctor's Signature</p>
                                        <div className="border-b border-gray-400 w-48 h-12"></div>
                                    </div>
                                    {/* <div className="text-right">
                                        <p className="text-sm text-gray-600">Date: {formatDate(formData.date)}</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* Footer - Only in print */}
                            <div className="print:block hidden mt-6 pt-4 border-t border-gray-300">
                                <div className="text-center text-xs text-gray-600">
                                    <p>This prescription is valid for 30 days from the date of issue.</p>
                                    {/* <p className="mt-1">For any queries, please contact your healthcare provider.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DoctorsPrescriptionView;
