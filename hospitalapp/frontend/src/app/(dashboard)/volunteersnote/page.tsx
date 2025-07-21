'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { User, Heart, Pencil, Trash2, Plus, Check, VenetianMask, Calendar, Users } from 'lucide-react';

interface PatientInfo {
    name: string;
    age: string;
    gender: string;
}

interface CellData {
    [key: string]: boolean;
}

interface FormData {
    id?: number; // ✅ Add this
    patientId: string;
    reviewId: string;
    date: string;
    cells: CellData;
    descriptions: { [key: string]: string };
    customProcedures: string[];
}

interface Procedure {
    name: string;
}

const VolunteersReviewForm: React.FC = () => {

    const handleAddCustomProcedure = async () => {
        if (newProcedureName.trim()) {
            const trimmedName = newProcedureName.trim();

            // ✅ Update local state
            setFormData((prev) => ({
                ...prev,
                customProcedures: [...prev.customProcedures, trimmedName],
                cells: { ...prev.cells, [trimmedName]: false },
                descriptions: { ...prev.descriptions, [trimmedName]: '' },
            }));

            setAllProcedures((prev) => [...prev, trimmedName]);
            setNewProcedureName('');
            setShowAddInput(false);

            // ✅ Send to backend using Axios
            try {
                await API.post('/api/VolunteersNotes/procedures', {
                    name: trimmedName,
                });
            } catch (err: any) {
                if (err?.response?.status !== 409) {
                    console.error('❌ Failed to add procedure to backend:', err?.response?.data || err.message);
                } else {
                    console.warn('⚠️ Procedure already exists.');
                }
            }
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddCustomProcedure();
        }
    };

    const [allProcedures, setAllProcedures] = useState<string[]>([]);


    const handleEditProcedure = async (column: string) => {
        const newName = prompt("Edit procedure name:", column);
        if (!newName || newName.trim() === '' || newName === column) return;

        const trimmedName = newName.trim();

        // ✅ Update local state
        setFormData(prev => {
            const updatedCells = { ...prev.cells };
            const updatedDescriptions = { ...prev.descriptions };
            const updatedProcedures = prev.customProcedures.map(p =>
                p === column ? trimmedName : p
            );

            updatedCells[trimmedName] = updatedCells[column];
            updatedDescriptions[trimmedName] = updatedDescriptions[column];
            delete updatedCells[column];
            delete updatedDescriptions[column];

            return {
                ...prev,
                cells: updatedCells,
                descriptions: updatedDescriptions,
                customProcedures: updatedProcedures,
            };
        });

        setAllProcedures(prev =>
            prev.map(proc => (proc === column ? trimmedName : proc))
        );

        // ✅ Correct Axios PUT request with raw string payload
        try {
            await API.put(
                `/api/VolunteersNotes/procedures/${encodeURIComponent(column)}`,
                JSON.stringify(trimmedName), // send as raw string
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (err: any) {
            console.error('❌ Failed to rename procedure:', err?.response?.data || err.message);
        }
    };


    const handleDeleteProcedure = async (column: string) => {
        if (!confirm(`Are you sure you want to delete "${column}"?`)) return;

        // ✅ Update local state
        setFormData(prev => {
            const updatedCells = { ...prev.cells };
            const updatedDescriptions = { ...prev.descriptions };

            delete updatedCells[column];
            delete updatedDescriptions[column];

            return {
                ...prev,
                customProcedures: prev.customProcedures.filter(p => p !== column),
                cells: updatedCells,
                descriptions: updatedDescriptions,
            };
        });

        setAllProcedures(prev => prev.filter(proc => proc !== column));

        // ✅ Axios DELETE call
        try {
            await API.delete(`/api/VolunteersNotes/procedures/${encodeURIComponent(column)}`);
        } catch (err: any) {
            if (err?.response?.status !== 404) {
                console.error('❌ Failed to delete procedure from backend:', err?.response?.data || err.message);
            }
        }
    };

    // 🔁 Fetch all available procedures from backend
    useEffect(() => {
        const fetchProcedures = async () => {
            try {
                const { data } = await API.get<Procedure[]>("/api/VolunteersNotes/procedures");
                const names = data.map(proc => proc.name);
                setAllProcedures(names);
            } catch (err) {
                console.error("Failed to fetch procedures", err);
            }
        };

        fetchProcedures();
    }, []);

    const [formData, setFormData] = useState<FormData>({
        patientId: '',
        reviewId: '',
        date: new Date().toISOString().split('T')[0],
        cells: allProcedures.reduce((acc: CellData, col) => ({ ...acc, [col]: false }), {}),
        descriptions: allProcedures.reduce((acc, col) => ({ ...acc, [col]: '' }), {}),
        customProcedures: []
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
    const isEditMode = !!formData.reviewId

    // Get today's date in YYYY-MM-DD format
    const getTodaysDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    const [date, setDate] = useState<string>(getTodaysDate());
    const [team, setTeam] = useState<string>('');

    const [newProcedureName, setNewProcedureName] = useState<string>('');
    const [showAddInput, setShowAddInput] = useState<boolean>(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    const handleCellToggle = (column: string) => {
        setFormData(prev => ({
            ...prev,
            cells: { ...prev.cells, [column]: !prev.cells[column] }
        }));
    };

    const handleDescriptionChange = (column: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            descriptions: { ...prev.descriptions, [column]: value }
        }));
    };



    useEffect(() => {
        setFormData(prev => {
            const updatedCells: CellData = { ...prev.cells };
            const updatedDescriptions: { [key: string]: string } = { ...prev.descriptions };

            allProcedures.forEach(proc => {
                if (!(proc in updatedCells)) updatedCells[proc] = false;
                if (!(proc in updatedDescriptions)) updatedDescriptions[proc] = '';
            });

            return {
                ...prev,
                cells: updatedCells,
                descriptions: updatedDescriptions
            };
        });
    }, [allProcedures]);

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
        const assignmentId = searchParams.get('assignmentId');
        if (!assignmentId) return;

        const fetchData = async () => {
            try {
                const res = await API.get(`/api/VolunteersNotes/review/${assignmentId}`);
                const data: Record<string, any> = res?.data || {};

                const formattedDate = data?.date?.split?.('T')?.[0] || new Date().toISOString().split('T')[0];

                setFormData(prev => ({
                    ...prev,
                    id: data?.id ?? null,
                    patientId: data?.patientId ?? null,
                    reviewId: data?.reviewId ?? null,
                    date: formattedDate,
                    cells: data?.cells || {},
                    descriptions: data?.descriptions || {},
                    customProcedures: data?.customProcedures || [],
                }));
            } catch (err: any) {
                if (err?.response?.status === 404) {
                    console.log('No review found. Prefill skipped.');
                } else {
                    console.error('Error fetching review:', err?.message || err);
                }
            }
        };

        fetchData();
    }, [searchParams]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            id: formData.id,
            patientId: formData.patientId,
            reviewId: formData.reviewId,
            date: formData.date,
            cellsJson: JSON.stringify(formData.cells),
            descriptionsJson: JSON.stringify(formData.descriptions),
            customProceduresJson: JSON.stringify(formData.customProcedures),
        };

        try {
            if (formData.id) {
                // PUT for edit mode
                await API.put(`/api/VolunteersNotes/${formData.id}`, payload);
            } else {
                // POST for create mode
                await API.post("/api/VolunteersNotes", payload);
            }

            setSubmitStatus("success");
            setSubmitMessage("Volunteer’s note submitted successfully.");

            setTimeout(() => {
                router.push("/viewAssignments");
            }, 1000);
        } catch (error: any) {
            console.error("❌ Submission error:", error?.response?.data || error.message);
            setSubmitStatus("error");
            setSubmitMessage("Failed to submit the volunteer’s note. Please try again.");
        }
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
                                Volunteer's Note
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg text-blue-200">
                                Daily Homecare Procedure Report
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


                {/* Table */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 border-collapse table-auto">
                            <thead className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ width: '30%' }}>
                                        Care Procedure
                                    </th>
                                    <th className="border border-gray-300 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider" style={{ width: '20%' }}>
                                        Performed?
                                    </th>
                                    <th className="border border-gray-300 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider" style={{ width: '50%' }}>
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {allProcedures.map((column, colIndex) => (
                                    <tr key={colIndex} className="hover:bg-blue-50 transition-colors duration-200 group">
                                        <td className="border border-gray-300 px-4 py-3 text-blue-900 font-medium flex items-center justify-between">
                                            {column}
                                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
                                                <button
                                                    type="button"
                                                    onClick={() => handleEditProcedure(column)}
                                                    title="Edit"
                                                    className="text-yellow-600 hover:text-yellow-800"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteProcedure(column)}
                                                    title="Delete"
                                                    className="text-red-600 hover:text-red-800"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3 text-center">
                                            <div
                                                className="w-8 h-8 mx-auto border-2 border-gray-300 rounded cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center"
                                                onClick={() => handleCellToggle(column)}
                                            >
                                                {formData.cells[column] && (
                                                    <svg
                                                        className="w-5 h-5 text-green-600 font-bold"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-3">
                                            {formData.cells[column] && (
                                                <input
                                                    type="text"
                                                    value={formData.descriptions[column]}
                                                    onChange={(e) => handleDescriptionChange(column, e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                                    placeholder="Add description..."
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}


                                {/* Custom Procedure Add Row */}
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-3">
                                        {!showAddInput ? (
                                            <button
                                                type="button"
                                                onClick={() => setShowAddInput(true)}
                                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                                            >
                                                <Plus className="w-4 h-4" />
                                                Add Other Procedure
                                            </button>
                                        ) : (
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    value={newProcedureName}
                                                    onChange={(e) => setNewProcedureName(e.target.value)}
                                                    onKeyPress={handleKeyPress}
                                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                                    placeholder="Enter procedure name..."
                                                    autoFocus
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleAddCustomProcedure}
                                                    className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 text-sm"
                                                >
                                                    Add
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setShowAddInput(false);
                                                        setNewProcedureName('');
                                                    }}
                                                    className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors duration-200 text-sm"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-3"></td>
                                    <td className="border border-gray-300 px-4 py-3"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-3"
                    >
                        <Check className="w-6 h-6" />
                        {isEditMode ? "Update Volunteer's Note" : "Submit Volunteer's Note"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VolunteersReviewForm;