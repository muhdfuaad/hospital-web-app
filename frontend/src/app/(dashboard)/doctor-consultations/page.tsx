'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { format } from 'date-fns';
import { NotebookPen, FilePen, Trash2 } from 'lucide-react';

interface AssignedPatient {
    assignmentId: string;
    patientId: number;
    name: string;
    age: number;
    gender: string;
    diagnosis: string;
    phoneNumber1: string;
    hasReview: boolean;
    hasNote: boolean;
    status?: string;
}

const DoctorConsultationsPage = () => {
    const [patients, setPatients] = useState<AssignedPatient[]>([]);
    const [selectedDate, setSelectedDate] = useState(() => format(new Date(), 'yyyy-MM-dd'));
    const [userRole, setUserRole] = useState<'doctor' | 'nurse'>('doctor'); // You may want to get this from auth context

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;

    const searchParams = useSearchParams();
    const router = useRouter();

    const filteredPatients = patients.filter(patient =>
        patient.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.patientId?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.diagnosis?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phoneNumber1?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredPatients.length / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;
    const currentRecords = filteredPatients.slice(startIndex, startIndex + recordsPerPage);

    const fetchData = async (date: string) => {
        try {
            const res = await API.get<AssignedPatient[]>('/api/PatientAssignments/AssignedPatients', {
                params: { date }
            });

            // Process the data to add status based on hasReview/hasNote flags
            const processedPatients = res.data.map(patient => {
                let status = 'Scheduled';

                // Determine status based on user role
                if (userRole === 'doctor') {
                    status = patient.hasReview ? 'Completed' : 'Scheduled';
                } else if (userRole === 'nurse') {
                    status = patient.hasNote ? 'Completed' : 'Scheduled';
                }

                return {
                    ...patient,
                    hasReview: Boolean(patient.hasReview),
                    hasNote: Boolean(patient.hasNote),
                    status
                };
            });

            setPatients(processedPatients);
        } catch (err) {
            console.error('Error fetching assigned patients', err);
        }
    };

    const handleEditButton = (assignmentId: string, patientId: string) => {
        router.push(`/doctor-consultations/details?assignmentId=${assignmentId}&patientId=${patientId}`);
    };

    const getStatusBadge = (status: string) => {
        if (status === 'Completed') {
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Completed
                </span>
            );
        } else {
            return (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    Scheduled
                </span>
            );
        }
    };

    useEffect(() => {
        fetchData(selectedDate);
    }, [selectedDate, userRole]);

    // You might want to add a role selector or get this from your auth context
    const handleRoleChange = (role: 'doctor' | 'nurse') => {
        setUserRole(role);
    };

    return (
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0 grid-background">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 px-4 text-center shadow-md">
                <h1 className="text-3xl font-light mb-1">Daily Consultations</h1>
                <p className="text-sm text-blue-100 font-normal">Manage and view patient consultations</p>
            </div>

            <div className="p-5">
                {/* Header Actions Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    {/* Left: Current Date and Role Selector */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                            <label htmlFor="date" className="text-sm font-medium text-gray-700">
                                Select Date:
                            </label>
                            <div className="relative w-full sm:w-[200px]">
                                <input
                                    id="date"
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    className="w-full sm:w-[200px] appearance-none border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 transition-all"
                                    style={{
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'none',
                                        appearance: 'none',
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Search and Info */}
                    <div className="flex flex-col items-center sm:items-end w-full sm:w-auto gap-2">
                        {/* Search Input */}
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <span className="text-xl">🔍</span>
                            <input
                                type="text"
                                placeholder="Search by name, reg no, mobile no or diagnosis..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
                            />
                        </div>

                        {/* Records Info */}
                        <div className="text-sm text-gray-600 mt-1 text-center sm:text-right py-4">
                            Showing {currentRecords.length} of {filteredPatients.length} patients
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                {/* ✅ Desktop Table View */}
                <div className="hidden md:block bg-white rounded-lg shadow overflow-x-auto">
                    <table className="min-w-full border border-gray-300 border-collapse">
                        <thead className="bg-gradient-to-r from-blue-600 to-blue-600 text-white">
                            <tr>
                                <th className="w-10 px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">ID</th>
                                <th className="w-35 px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Name</th>
                                <th className="w-5 px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Age</th>
                                <th className="w-5 px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Gender</th>
                                <th className="w-35 px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Diagnosis</th>
                                <th className="w-35 px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Mobile</th>
                                <th className="w-20 px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Status</th>
                                <th className="w-35 px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPatients.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="text-center text-gray-500 py-4">
                                        {searchTerm ? "No patients found matching your search" : "No patient records available"}
                                    </td>
                                </tr>
                            ) : (
                                filteredPatients.map((p, idx) => (
                                    <tr key={p.patientId} className="hover:bg-cyan-100">
                                        <td className="px-4 py-2 text-sm border border-gray-300">{p.assignmentId}</td>
                                        <td className="px-4 py-2 text-sm border border-gray-300">{p.name}</td>
                                        <td className="px-4 py-2 text-sm border border-gray-300">{p.age}</td>
                                        <td className="px-4 py-2 text-sm border border-gray-300">{p.gender}</td>
                                        <td className="px-4 py-2 text-sm border border-gray-300">{p.diagnosis}</td>
                                        <td className="px-4 py-2 text-sm border border-gray-300">{p.phoneNumber1}</td>
                                        <td className="px-4 py-2 text-sm border border-gray-300">
                                            {getStatusBadge(p.status || 'Scheduled')}
                                        </td>
                                        <td className="px-4 py-2 text-sm border border-gray-300">
                                            <button
                                                onClick={() => { handleEditButton(p.assignmentId, p.patientId.toString()) }}
                                                className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-800 hover:bg-green-100 px-3 py-1 rounded transition-all"
                                            >
                                                <NotebookPen className="w-4 h-4" />
                                                <span>Consultations</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                {/* ✅ Mobile Card View */}
                <div className="block md:hidden space-y-4 p-2 bg-[#F2F3F2] rounded-lg">
                    {filteredPatients.length === 0 ? (
                        <div className="text-center text-gray-500 py-4">
                            {searchTerm ? "No patients found matching your search" : "No patient records available"}
                        </div>
                    ) : (
                        filteredPatients.map((p, idx) => (
                            <div key={p.patientId}  className=" rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.25)] p-4 transition-transform hover:scale-[1.01]">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-800">{p.name}</h3>
                                        <span className="text-sm text-gray-500">#{p.patientId}</span>
                                    </div>
                                    {getStatusBadge(p.status || 'Scheduled')}
                                </div>
                                <div className="text-sm text-gray-700 mb-1">🧾 Diagnosis: {p.diagnosis}</div>
                                <div className="text-sm text-gray-700 mb-1">👤 Age: {p.age} | {p.gender}</div>
                                <div className="text-sm text-gray-700 mb-1">📞 {p.phoneNumber1}</div>
                                <div className="text-right">
                                    <button
                                        onClick={() => { handleEditButton(p.assignmentId, p.patientId.toString()) }}
                                        className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-800 hover:bg-green-100 px-3 py-1 rounded transition-all"
                                    >
                                        <NotebookPen className="w-4 h-4" />
                                        <span>Consultations</span>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="pagination-info">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="pagination-btn"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default DoctorConsultationsPage;