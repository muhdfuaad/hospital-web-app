'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { Printer, Share2, Heart, Activity, FileText, User, Stethoscope, Eye, Pill, Target } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface NursesNoteData {
    patientId: string;
    reviewId: string;
    date: string;
    diagnosis: string;
    situation: string;
    consciousness: 'normal' | 'different';
    consciousnesGenderPlain: string;
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

const NursesNoteView = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [assignmentId, setAssignmentId] = useState<string | null>(null);
    const [patientId, setPatientId] = useState('');
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        age: '',
        gender: '',
    });

    const [nursesNoteData, setNursesNoteData] = useState<NursesNoteData | null>(null);
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

    // Fetch nurses note data
    useEffect(() => {
        const assignment = searchParams.get("assignmentId");

        if (!assignment) return;

        const fetchNursesNote = async () => {
            try {
                setLoading(true);
                const res = await API.get(`/api/NursesNotes/review/${assignment}`);

                if (res.status === 204 || !res.data) {
                    console.log("No NursesNote found");
                    setLoading(false);
                    return;
                }

                const data = res.data as any;

                const formattedDate = data.date
                    ? new Date(data.date).toISOString().split('T')[0]
                    : '';

                setNursesNoteData({
                    patientId: data.patientId || '',
                    reviewId: data.reviewId || '',
                    date: formattedDate,
                    diagnosis: data.diagnosis || '',
                    situation: data.situation || '',
                    consciousness: data.consciousness || (data.consciousnesGenderPlain ? 'different' : 'normal'),
                    consciousnesGenderPlain: data.consciousnesGenderPlain || '',
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
                });

                setLoading(false);
            } catch (error: any) {
                if (error.response?.status === 404) {
                    console.log("No existing NursesNote found.");
                } else {
                    console.error("Error fetching NursesNote:", error.message);
                }
                setLoading(false);
            }
        };

        fetchNursesNote();
    }, [searchParams]);

    const handlePrint = () => {
        window.print();
    };

    const handleShare = async () => {
        const shareData = {
            title: `Nurses Note - ${patientInfo.name}`,
            text: `Nurses Note for ${patientInfo.name} dated ${nursesNoteData ? new Date(nursesNoteData.date).toLocaleDateString() : ''}`,
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
            line-height: 1.3 !important; 
           }
            h1, h2, h3 {
            font-size: 12pt !important; 
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
          
          .print\\:p-2 {
            padding: 8pt !important;
          }
          
          .print\\:p-4 {
            padding: 16pt !important;
          }
          
          .print\\:space-y-2 > * + * {
            margin-top: 8pt !important;
          }
          
          .print\\:space-y-4 > * + * {
            margin-top: 16pt !important;
          }
          
          .print\\:bg-blue-50 {
            background-color: #eff6ff !important;
          }
          
          .print\\:bg-blue-100 {
            background-color: #dbeafe !important;
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
                    <h1 className="text-xl font-semibold text-blue-900">Nurses Note</h1>
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
                    <div className="text-blue-900">Loading nurses note data...</div>
                </div>
            ) : !nursesNoteData ? (
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="text-red-600">No nurses note found for this assignment.</div>
                </div>
            ) : (
                <div className="note-content max-w-4xl mx-auto p-6 print:p-0 print:max-w-none print:mx-0">
                    <div className="bg-white rounded-lg print:rounded-none shadow-lg print:shadow-none print:text-xs">

                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 print:p-2 rounded-t-lg print:rounded-none">
                            <div className="text-center">
                                <div className="flex justify-center items-center gap-3 mb-2">
                                    <h1 className="text-2xl print:text-base font-light">Nurses Note</h1>
                                    <Heart className="w-6 h-6 print:w-4 print:h-4 text-blue-200" />
                                </div>
                                <p className="text-blue-200 text-sm print:text-xs">
                                    Things to Look Out for in Homecare
                                </p>
                            </div>
                        </div>

                        <div className="p-4 print:p-3 space-y-4 print:space-y-2">
                            {/* Patient Info Header */}
                            <div className="flex flex-wrap justify-between items-start gap-4 mb-4 print:mb-2">
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg print:px-2 print:py-1">
                                        <span className="font-semibold text-sm print:text-xs">Patient ID:</span>
                                        <span className="text-sm print:text-xs">{nursesNoteData.patientId || '-'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg border border-gray-200 whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span className="font-semibold print:text-xs">Name:</span>
                                        <span className="text-sm print:text-xs text-blue-600">
                                            {patientInfo.name + " / " + patientInfo.age + " / " + patientInfo.gender}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-blue-50 text-blue-900 px-3 py-1.5 print:px-2 print:py-1 rounded-lg">
                                    <span className="font-semibold print:text-xs">Date:</span>
                                    <span className="text-sm print:text-xs">{formatDate(nursesNoteData.date)}</span>
                                </div>
                            </div>

                            {/* Diagnosis and Condition */}
                            <div className="bg-blue-50 print:bg-blue-50 p-3 print:p-2 rounded-lg">
                                <h3 className="text-base print:text-xs font-bold text-blue-900 mb-2 print:mb-1 flex items-center gap-2 uppercase">
                                    1. Diagnosis and Condition
                                </h3>

                                {/* Subheadings slightly indented */}
                                <div className="space-y-2 print:space-y-1 text-sm print:text-xs ml-4">
                                    <div className="flex">
                                        <span className="font-semibold text-blue-900 w-40">Diagnosis:</span>
                                        <p>{nursesNoteData.diagnosis}</p>
                                    </div>

                                    <div className="flex">
                                        <span className="font-semibold text-blue-900 w-40">Situation:</span>
                                        <p>{nursesNoteData.situation}</p>
                                    </div>

                                    <div className="flex">
                                        <span className="font-semibold text-blue-900 w-40">Consciousness:</span>
                                        <span>
                                            {nursesNoteData.consciousness === 'normal'
                                                ? 'Normal'
                                                : `Different: ${nursesNoteData.consciousnesGenderPlain}`}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <span className="font-semibold text-blue-900 w-40">Assistance Required:</span>
                                        <span>
                                            {nursesNoteData.assistance === 'no' ? 'No' : 'Yes'}
                                            {nursesNoteData.assistance === 'yes' && nursesNoteData.assistanceDetails && (
                                                <span className="ml-2">- {nursesNoteData.assistanceDetails}</span>
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Physical Condition */}
                            <div className="bg-blue-50 print:bg-blue-50 p-3 print:p-2 rounded-lg">
                                <h3 className="text-base print:text-xs font-bold text-blue-900 mb-2 print:mb-1 uppercase">
                                    2. Physical Difficulties
                                </h3>
                                <p className="text-sm print:text-xs ml-6">
                                    {nursesNoteData.physicalDifficulties || '-'}
                                </p>
                            </div>


                            {/* Basic Information */}
                            <div className="bg-blue-50 print:bg-blue-50 p-3 print:p-2 rounded-lg">
                                <h3 className="text-base print:text-xs font-bold text-blue-900 mb-2 print:mb-1 uppercase">
                                    3. Basic Information
                                </h3>

                                {/* Subheadings slightly indented */}
                                <div className="grid grid-cols-2 gap-2 print:gap-1 text-sm print:text-xs ml-4">
                                    <div className="flex">
                                        <span className="font-semibold text-blue-900 w-36">Food:</span>
                                        <span>
                                            {nursesNoteData.food === 'normal' ? 'Normal' : `Different: ${nursesNoteData.foodDetails}`}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <span className="font-semibold text-blue-900 w-36">Sleep:</span>
                                        <span>
                                            {nursesNoteData.sleep === 'normal' ? 'Normal' : `Different: ${nursesNoteData.sleepDetails}`}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <span className="font-semibold text-blue-900 w-36">Bowel Movements:</span>
                                        <span>
                                            {nursesNoteData.bowelMovements === 'normal' ? 'Normal' : `Different: ${nursesNoteData.bowelDetails}`}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <span className="font-semibold text-blue-900 w-36">Urination:</span>
                                        <span>
                                            {nursesNoteData.urination === 'normal' ? 'Normal' : `Different: ${nursesNoteData.urinationDetails}`}
                                        </span>
                                    </div>
                                </div>
                            </div>


                            {/* Emotional Factors */}
                            {nursesNoteData.emotionalFactors && (
                                <div className="bg-blue-50 print:bg-blue-50 p-3 print:p-2 rounded-lg">
                                    <h3 className="text-base print:text-xs font-bold text-blue-900 mb-2 print:mb-1 flex items-center gap-2 uppercase">
                                        4. Emotional & Family Factors
                                    </h3>
                                    <p className="text-sm print:text-xs ml-2">{nursesNoteData.emotionalFactors}</p>
                                </div>
                            )}

                            {/* Examination */}
                            <div className="bg-blue-50 print:bg-blue-50 p-3 print:p-2 rounded-lg">
                                <h3 className="text-base print:text-xs font-bold text-blue-900 mb-2 print:mb-1 flex items-center gap-2 uppercase">
                                    5. Examination
                                </h3>
                                <div className="grid grid-cols-5 gap-2 print:gap-1 text-sm print:text-xs mb-3">
                                    {nursesNoteData.bp && (
                                        <div>
                                            <span className="font-semibold text-blue-900">BP:</span>
                                            <p>{nursesNoteData.bp}</p>
                                        </div>
                                    )}
                                    {nursesNoteData.pulse && (
                                        <div>
                                            <span className="font-semibold text-blue-900">Pulse:</span>
                                            <p>{nursesNoteData.pulse}</p>
                                        </div>
                                    )}
                                    {nursesNoteData.temperature && (
                                        <div>
                                            <span className="font-semibold text-blue-900">Temp:</span>
                                            <p>{nursesNoteData.temperature}</p>
                                        </div>
                                    )}
                                    {nursesNoteData.height && (
                                        <div>
                                            <span className="font-semibold text-blue-900">Height:</span>
                                            <p>{nursesNoteData.height}</p>
                                        </div>
                                    )}
                                    {nursesNoteData.weight && (
                                        <div>
                                            <span className="font-semibold text-blue-900">Weight:</span>
                                            <p>{nursesNoteData.weight}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Hygiene Inspection */}
                                <div className="text-sm print:text-xs">
                                    <span className="font-semibold text-blue-900">Hygiene Inspection:</span>
                                    <div className="ml-2 space-y-1">
                                        {[
                                            { key: 'generalHygiene', label: 'General', desc: 'generalHygieneDesc' },
                                            { key: 'personalHygiene', label: 'Personal', desc: 'personalHygieneDesc' },
                                            { key: 'oralHygiene', label: 'Oral & Dental', desc: 'oralHygieneDesc' },
                                            { key: 'skinHygiene', label: 'Skin', desc: 'skinHygieneDesc' },
                                            { key: 'perinealHygiene', label: 'Perineal', desc: 'perinealHygieneDesc' },
                                            { key: 'otherHygiene', label: 'Other', desc: 'otherHygieneDesc' }
                                        ].map(item => {
                                            const value = nursesNoteData[item.key as keyof NursesNoteData] as string;
                                            const desc = nursesNoteData[item.desc as keyof NursesNoteData] as string;
                                            if (value === 'different' && desc) {
                                                return (
                                                    <div key={item.key}>
                                                        <span className="font-medium">{item.label}:</span> {desc}
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Special Conditions */}
                            {nursesNoteData.specialConditions && (
                                <div className="bg-blue-50 print:bg-blue-50 p-3 print:p-2 rounded-lg">
                                    <h3 className="text-base print:text-xs font-bold text-blue-900 mb-2 print:mb-1 flex items-center gap-2 uppercase">
                                        6. Special Conditions
                                    </h3>
                                    <p className="text-sm print:text-xs ml-6">{nursesNoteData.specialConditions}</p>
                                </div>
                            )}

                            {/* Treatments and Medications */}
                            <div className="bg-blue-50 print:bg-blue-50 p-3 print:p-2 rounded-lg">
                                <h3 className="text-base print:text-xs font-bold text-blue-900 mb-2 print:mb-1 uppercase">
                                    7. Treatments and Medications
                                </h3>
                                <div className="space-y-2 print:space-y-1 text-sm print:text-xs ml-4">
                                    {nursesNoteData.otherTreatments && (
                                        <div className="flex">
                                            <span className="font-semibold text-blue-900 w-44">Other Treatments:</span>
                                            <p>{nursesNoteData.otherTreatments}</p>
                                        </div>
                                    )}
                                    {nursesNoteData.medications && (
                                        <div className="flex">
                                            <span className="font-semibold text-blue-900 w-44">Available Medications:</span>
                                            <p>{nursesNoteData.medications}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Plan & Assistance */}
                            <div className="bg-blue-50 print:bg-blue-50 p-3 print:p-2 rounded-lg">
                                <h3 className="text-base print:text-xs font-bold text-blue-900 mb-2 print:mb-1 uppercase">
                                    8. Plan & Assistance
                                </h3>
                                <div className="space-y-2 print:space-y-1 text-sm print:text-xs ml-4">
                                    {nursesNoteData.planSuggestions && (
                                        <div>
                                            <span className="font-semibold text-blue-900 w-44">Plans & Suggestions:</span>
                                            <p className="ml-2">{nursesNoteData.planSuggestions}</p>
                                        </div>
                                    )}
                                    {nursesNoteData.rehabilitationDetails && (
                                        <div>
                                            <span className="font-semibold text-blue-900 w-44">Rehabilitation Details:</span>
                                            <p className="ml-2">{nursesNoteData.rehabilitationDetails}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Nurse Signature Section - Only in print */}
                            <div className="print:block hidden mt-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-gray-600 mb-2">Nurse's Signature</p>
                                        <div className="border-b border-gray-400 w-48 h-12"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer - Only in print */}
                            <div className="print:block hidden mt-4 pt-2 border-t border-gray-300">
                                <div className="text-center text-xs text-gray-600">
                                    <p>This nurses note is a comprehensive assessment of the patient's condition during homecare visit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NursesNoteView;