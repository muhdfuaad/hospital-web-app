"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { NotebookPen, FilePen, Trash2 } from 'lucide-react';
import Link from 'next/link';
import "./viewAssign.css";

const API_BASE = "https://localhost:7112";

interface PatientAssignmentDataType {
    id: number;
    assignmentId: string;
    date: string;
    time: string;
    patientId: string;
    doctorId: string;
    volunteerId: string;
    nurseId: string;
    description: string;
}

interface PersonDetails {
    id: string;
    name: string;
    phone: string;
    email?: string;
    photo?: string;
    age?: number;
    gender?: string;
    address?: string;
}

export default function PatientAssignmentsViewPage() {
    const router = useRouter();
    const [assignments, setAssignments] = useState<PatientAssignmentDataType[]>([]);
    const [selectedAssignment, setSelectedAssignment] = useState<PatientAssignmentDataType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [personDetails, setPersonDetails] = useState<{ [key: string]: PersonDetails }>({});
    const recordsPerPage = 10;

    const fetchAllPersonsData = async (): Promise<{ [key: string]: PersonDetails }> => {
        const endpoints = [
            { key: "patient", url: `${API_BASE}/api/Hpforms/all-patients` },
            { key: "doctor", url: `${API_BASE}/api/Doctors/all-doctors` },
            { key: "volunteer", url: `${API_BASE}/api/Volunteers/all-volunteers` },
            { key: "nurse", url: `${API_BASE}/api/Nurses/all-nurses` },
        ];

        const allPersons: { [key: string]: PersonDetails } = {};

        await Promise.all(
            endpoints.map(async ({ key, url }) => {
                try {
                    const res = await fetch(url);
                    if (!res.ok) return;

                    const data = await res.json();
                    data.forEach((item: any) => {
                        const id = item.id || item[`${key}Id`] || item[`${key}_Id`];
                        if (!id) return;

                        allPersons[`${key}_${id}`] = {
                            id: String(id),
                            name: item.name || item.fullName || item[`${key}Name`] || item.firstName + " " + item.lastName || `${key} ${id}`,
                            phone: item.phone || item.phoneNumber || "",
                            email: item.email || item.emailAddress || "",
                            photo: item.photo || item.profilePhoto || item.image || "",
                            age: item.age,
                            gender: item.gender || item.sex || "",
                            address: item.address || item.homeAddress || item.clinicAddress || item.workAddress || ""
                        };
                    });
                } catch {
                    // Silent fail, continue other fetches
                }
            })
        );

        return allPersons;
    };

    const showAssignmentDetails = (assignment: PatientAssignmentDataType) => {
        setSelectedAssignment(assignment);
    };


    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_BASE}/api/PatientAssignments`);
                if (!res.ok) throw new Error("Failed to fetch assignment data");

                const data = await res.json();
                const allPersons = await fetchAllPersonsData();

                setAssignments(data);
                setPersonDetails(allPersons);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAssignments();
    }, []);

    const handleDelete = async (id: number, assignmentId: string) => {
        if (!confirm(`Delete assignment ${assignmentId}?`)) return;
        try {
            const res = await fetch(`${API_BASE}/api/PatientAssignments/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Delete failed");

            setAssignments(prev => prev.filter(a => a.id !== id));
            alert("Assignment deleted.");
        } catch {
            alert("Failed to delete assignment.");
        }
    };

    const handleEdit = (assignment: PatientAssignmentDataType) => {
        router.push(`/viewAssignments/assignpatient?edit=true&id=${assignment.assignmentId}`);
    };

    const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-GB');
    const formatTime = (timeString: string) =>
        new Date(`1970-01-01T${timeString}`).toLocaleTimeString('en-US', {
            hour: 'numeric', minute: '2-digit', hour12: true,
        });

    const getPersonName = useCallback((id: string, type: string) => {
        return personDetails[`${type}_${id}`]?.name?.trim() || "Not Found";
    }, [personDetails]);

    const getPersonDetails = useCallback((id: string, type: string) => {
        return personDetails[`${type}_${id}`] || null;
    }, [personDetails]);

    const filteredAssignments = assignments.filter((assignment) => {
        const query = searchTerm.toLowerCase();
        const fields = [
            assignment.assignmentId,
            assignment.patientId,
            assignment.doctorId,
            assignment.volunteerId,
            assignment.nurseId,
            assignment.description,
            getPersonName(assignment.patientId, "patient"),
            getPersonName(assignment.doctorId, "doctor"),
            getPersonName(assignment.volunteerId, "volunteer"),
            getPersonName(assignment.nurseId, "nurse"),
        ];
        return fields.some(field => (field || "").toLowerCase().includes(query));
    });

    const totalPages = Math.ceil(filteredAssignments.length / recordsPerPage);
    const currentRecords = filteredAssignments.slice(
        (currentPage - 1) * recordsPerPage,
        currentPage * recordsPerPage
    );

    return (
        <div className="hospital-dashboard">
            {/* Header Section */}
            <div className="dashboard-header full-width">
                <div className="header-content">
                    <div className="title-section">
                        <h1>Patient Assignments Registry</h1>
                        <p className="subtitle">Manage and view patient assignment records</p>
                    </div>
                    <button
                        className="new-registration-btn"
                        onClick={() => router.push("/viewAssignments/assignpatient")}
                    >
                        <span className="btn-icon">+</span>
                        New Assignment
                    </button>
                </div>
            </div>

            {/* Controls Section */}
            <div className="controls-section">
                <div className="search-container flex items-center gap-2">
                    <span className="text-xl">🔍</span>
                    <input
                        type="text"
                        placeholder="Search by assignment ID, patient, doctor, volunteer, or nurse..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="search-input py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
                    />
                </div>
                <div className="records-info">
                    Showing {currentRecords.length} of {filteredAssignments.length} assignments
                </div>
            </div>


            {/* Table Section */}
            <div className="table-container">
                <table className="patients-table">
                    <thead>
                        <tr>
                            <th>Assignment ID</th>
                            <th>Date & Time</th>
                            <th>Patient</th>
                            <th>Doctor</th>
                            <th>Volunteer</th>
                            <th>Nurse</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="no-records">
                                    {searchTerm ? "No assignments found matching your search" : "No assignment records available"}
                                </td>
                            </tr>
                        ) : (
                            currentRecords.map((assignment) => (
                                <tr key={assignment.id} className="table-row">
                                    <td className="id-cell">
                                        {assignment.assignmentId}
                                    </td>
                                    <td className="date-cell">
                                        <div>{formatDate(assignment.date)}</div>
                                        <div className="text-sm text-gray-600">{formatTime(assignment.time)}</div>
                                    </td>
                                    <td className="name-cell">
                                        <button
                                            className="patient-name-btn"
                                            onClick={() => showAssignmentDetails(assignment)}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: '#007bff',
                                                cursor: 'pointer',
                                                textDecoration: 'underline',
                                                padding: 0,
                                                fontSize: 'inherit'
                                            }}
                                        >
                                            {getPersonName(String(assignment.patientId || ''), 'patient')}
                                        </button>
                                        <div className="text-sm text-gray-600">ID: {assignment.patientId}</div>
                                    </td>
                                    <td className="name-cell">
                                        <div>{getPersonName(String(assignment.doctorId || ''), 'doctor')}</div>
                                        <div className="text-sm text-gray-600">ID: {assignment.doctorId}</div>
                                    </td>
                                    <td className="name-cell">
                                        <div>{getPersonName(String(assignment.volunteerId || ''), 'volunteer')}</div>
                                        <div className="text-sm text-gray-600">ID: {assignment.volunteerId}</div>
                                    </td>
                                    <td className="name-cell">
                                        <div>{getPersonName(String(assignment.nurseId || ''), 'nurse')}</div>
                                        <div className="text-sm text-gray-600">ID: {assignment.nurseId}</div>
                                    </td>
                                    <td className="actions-cell flex gap-2 items-center">
                                        {/* Doctor's Note button */}
                                        <Link
                                            href={`/doctorsnote?assignmentId=${assignment.assignmentId}`}
                                            title="Add Doctor's Note"
                                            className="text-green-600 hover:text-green-800 p-2 rounded hover:bg-green-100 transition-all"
                                        >
                                            <NotebookPen className="w-5 h-5" />
                                        </Link>

                                        {/* Nurse's Note button */}
                                        <Link
                                            href={`/nursesnote?assignmentId=${assignment.assignmentId}`}
                                            title="Add Nurse's Note"
                                            className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                                        >
                                            <NotebookPen className="w-5 h-5" />
                                        </Link>

                                        {/* Volunteer's Note button */}
                                        <Link
                                            href={`/volunteersnote?assignmentId=${assignment.assignmentId}`}
                                            title="Add Volunteer's Note"
                                            className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                                        >
                                            <NotebookPen className="w-5 h-5" />
                                        </Link>

                                        {/* Vertical divider */}
                                        <div className="h-6 w-px bg-gray-400 opacity-30 mx-1"></div>

                                        {/* Edit button */}
                                        <button
                                            className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                                            onClick={() => handleEdit(assignment)}
                                            title="Edit assignment record"
                                        >
                                            <FilePen className="w-5 h-5" />
                                        </button>

                                        {/* Delete button */}
                                        <button
                                            onClick={() => handleDelete(assignment.id, assignment.assignmentId)}
                                            title="Delete assignment record"
                                            className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </td>


                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
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

            {/* Assignment Details Modal */}
            {selectedAssignment && (
                <div className="modal-overlay" onClick={() => setSelectedAssignment(null)}>
                    <div className="patient-details-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Assignment Details</h2>
                            <button
                                className="modal-close-btn"
                                onClick={() => setSelectedAssignment(null)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="modal-content">
                            <div className="patient-info-grid">
                                <div className="info-section border-4 border-black rounded-2xl p-6 shadow-lg bg-white mb-8">
                                    <h3>Assignment Information</h3>
                                    <div className="info-row">
                                        <span className="label">Assignment ID:</span>
                                        <span className="value">{selectedAssignment.assignmentId}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">Date:</span>
                                        <span className="value">{formatDate(selectedAssignment.date)}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">Time:</span>
                                        <span className="value">{formatTime(selectedAssignment.time)}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">Description:</span>
                                        <span className="value">{selectedAssignment.description}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* Patient Details */}
                                <div className="info-section border-4 border-black rounded-2xl p-6 shadow-lg bg-white mb-8">
                                    <h3>Patient Details</h3>
                                    {(() => {
                                        const patientDetails = getPersonDetails(String(selectedAssignment.patientId), 'patient');
                                        return patientDetails ? (
                                            <>
                                                <div className="info-row">
                                                    <span className="label">Name:</span>
                                                    <span className="value">{patientDetails.name}</span>
                                                </div>
                                                <div className="info-row">
                                                    <span className="label">Patient ID:</span>
                                                    <span className="value">{selectedAssignment.patientId}</span>
                                                </div>

                                                {patientDetails.age && (
                                                    <div className="info-row">
                                                        <span className="label">Age:</span>
                                                        <span className="value">{patientDetails.age}</span>
                                                    </div>
                                                )}
                                                {patientDetails.gender && (
                                                    <div className="info-row">
                                                        <span className="label">Gender:</span>
                                                        <span className="value">{patientDetails.gender}</span>
                                                    </div>
                                                )}
                                                <div className="info-row">
                                                    <span className="label">Phone:</span>
                                                    <span className="value">{patientDetails.phone || 'Not provided'}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="info-row">
                                                <span className="value">Patient details not available</span>
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Doctor Details */}
                                <div className="info-section border-4 border-black rounded-2xl p-6 shadow-lg bg-white mb-8">
                                    <h3>Doctor Details</h3>
                                    {(() => {
                                        const doctorDetails = getPersonDetails(String(selectedAssignment.doctorId), 'doctor');
                                        return doctorDetails ? (
                                            <>
                                                <div className="info-row">
                                                    <span className="label">Name:</span>
                                                    <span className="value">{doctorDetails.name}</span>
                                                </div>
                                                <div className="info-row">
                                                    <span className="label">Doctor ID:</span>
                                                    <span className="value">{selectedAssignment.doctorId}</span>
                                                </div>
                                                <div className="info-row">
                                                    <span className="label">Phone:</span>
                                                    <span className="value">{doctorDetails.phone || 'Not provided'}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="info-row">
                                                <span className="value">Doctor details not available</span>
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Volunteer Details */}
                                <div className="info-section border-4 border-black rounded-2xl p-6 shadow-lg bg-white mb-8">
                                    <h3>Volunteer Details</h3>
                                    {(() => {
                                        const volunteerDetails = getPersonDetails(String(selectedAssignment.volunteerId), 'volunteer');
                                        return volunteerDetails ? (
                                            <>
                                                <div className="info-row">
                                                    <span className="label">Name:</span>
                                                    <span className="value">{volunteerDetails.name}</span>
                                                </div>
                                                <div className="info-row">
                                                    <span className="label">Volunteer ID:</span>
                                                    <span className="value">{selectedAssignment.volunteerId}</span>
                                                </div>
                                                <div className="info-row">
                                                    <span className="label">Phone:</span>
                                                    <span className="value">{volunteerDetails.phone || 'Not provided'}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="info-row">
                                                <span className="value">Volunteer details not available</span>
                                            </div>
                                        );
                                    })()}
                                </div>

                                {/* Nurse Details */}
                                <div className="info-section border-4 border-black rounded-2xl p-6 shadow-lg bg-white mb-8">


                                    <h3>Nurse Details</h3>
                                    {(() => {
                                        const nurseDetails = getPersonDetails(String(selectedAssignment.nurseId), 'nurse');
                                        return nurseDetails ? (
                                            <>
                                                <div className="info-row">
                                                    <span className="label">Name:</span>

                                                    <span className="value">{nurseDetails.name}</span>
                                                </div>
                                                <div className="info-row">
                                                    <span className="label">Nurse ID:</span>
                                                    <span className="value">{selectedAssignment.nurseId}</span>
                                                </div>
                                                <div className="info-row">
                                                    <span className="label">Phone:</span>
                                                    <span className="value">{nurseDetails.phone || 'Not provided'}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="info-row">
                                                <span className="value">Nurse details not available</span>
                                            </div>
                                        );
                                    })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}