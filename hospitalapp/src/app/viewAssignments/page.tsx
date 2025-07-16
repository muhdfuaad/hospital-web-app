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

interface FormErrors {
    [key: string]: string;
}

export default function PatientAssignmentsViewPage() {
    const router = useRouter();
    const [assignments, setAssignments] = useState<PatientAssignmentDataType[]>([]);
    const [selectedAssignment, setSelectedAssignment] = useState<PatientAssignmentDataType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
    const [personDetails, setPersonDetails] = useState<{ [key: string]: PersonDetails }>({});
    const recordsPerPage = 10;

    const fetchAllPersonsData = async () => {
        try {
            console.log('Fetching all persons data...');

            // Use the same endpoints as your form
            const [patientsRes, doctorsRes, volunteersRes, nursesRes] = await Promise.all([
                fetch(`${API_BASE}/api/Hpforms/all-patients`),
                fetch(`${API_BASE}/api/Doctors/all-doctors`),
                fetch(`${API_BASE}/api/Volunteers/all-volunteers`),
                fetch(`${API_BASE}/api/Nurses/all-nurses`)
            ]);

            console.log('API Response statuses:', {
                patients: patientsRes.status,
                doctors: doctorsRes.status,
                volunteers: volunteersRes.status,
                nurses: nursesRes.status
            });

            const [patients, doctors, volunteers, nurses] = await Promise.all([
                patientsRes.ok ? patientsRes.json() : [],
                doctorsRes.ok ? doctorsRes.json() : [],
                volunteersRes.ok ? volunteersRes.json() : [],
                nursesRes.ok ? nursesRes.json() : []
            ]);

            console.log('Fetched data:', { patients, doctors, volunteers, nurses });

            const allPersons: { [key: string]: PersonDetails } = {};

            // Process patients - handle multiple possible field names
            patients.forEach((patient: any) => {
                const id = patient.id || patient.pat_Id || patient.patientId;
                if (id) {
                    allPersons[`patient_${id}`] = {
                        id: String(id),
                        name: patient.name || patient.fullName || patient.patName || `Patient ${id}`,
                        phone: patient.phone || patient.phoneNumber || '',
                        email: patient.email || patient.emailAddress || '',
                        photo: patient.photo || patient.profilePhoto || patient.image || '',
                        age: patient.age || patient.patientAge,
                        gender: patient.gender || patient.sex || '',
                        address: patient.address || patient.homeAddress || ''
                    };
                    console.log(`Added patient: ${id} - ${allPersons[`patient_${id}`].name}`);
                }
            });

            // Process doctors - handle multiple possible field names
            doctors.forEach((doctor: any) => {
                const id = doctor.id || doctor.doctorId || doctor.doc_Id;
                if (id) {
                    const fullName = doctor.name || doctor.fullName || doctor.doctorName ||
                        `${doctor.firstName || ''} ${doctor.lastName || ''}`.trim();
                    allPersons[`doctor_${id}`] = {
                        id: String(id),
                        name: fullName || `Doctor ${id}`,
                        phone: doctor.phone || doctor.phoneNumber || '',
                        email: doctor.email || doctor.emailAddress || '',
                        photo: doctor.photo || doctor.profilePhoto || doctor.image || '',
                        age: doctor.age,
                        gender: doctor.gender || doctor.sex || '',
                        address: doctor.address || doctor.clinicAddress || ''
                    };
                    console.log(`Added doctor: ${id} - ${allPersons[`doctor_${id}`].name}`);
                }
            });

            // Process volunteers
            volunteers.forEach((volunteer: any) => {
                const id = volunteer.id || volunteer.vol_Id || volunteer.volunteerId;
                if (id) {
                    allPersons[`volunteer_${id}`] = {
                        id: String(id),
                        name: volunteer.name || volunteer.fullName || volunteer.volName || volunteer.volunteerName || `Volunteer ${id}`,
                        phone: volunteer.phone || volunteer.phoneNumber || '',
                        email: volunteer.email || volunteer.emailAddress || '',
                        photo: volunteer.photo || volunteer.profilePhoto || volunteer.image || '',
                        age: volunteer.age,
                        gender: volunteer.gender || volunteer.sex || '',
                        address: volunteer.address || volunteer.homeAddress || ''
                    };
                    console.log(`Added volunteer: ${id} - ${allPersons[`volunteer_${id}`].name}`);
                }
            });

            // Process nurses
            nurses.forEach((nurse: any) => {
                const id = nurse.id || nurse.nurseId || nurse.nurse_Id;
                if (id) {
                    allPersons[`nurse_${id}`] = {
                        id: String(id),
                        name: nurse.name || nurse.fullName || nurse.nurseName || `Nurse ${id}`,
                        phone: nurse.phone || nurse.phoneNumber || '',
                        email: nurse.email || nurse.emailAddress || '',
                        photo: nurse.photo || nurse.profilePhoto || nurse.image || '',
                        age: nurse.age,
                        gender: nurse.gender || nurse.sex || '',
                        address: nurse.address || nurse.workAddress || ''
                    };
                    console.log(`Added nurse: ${id} - ${allPersons[`nurse_${id}`].name}`);
                }
            });

            console.log('All persons data:', allPersons);
            return allPersons;
        } catch (error) {
            console.error('Error fetching persons data:', error);
            return {};
        }
    };

    useEffect(() => {
        async function fetchAssignments() {
            try {
                setLoading(true);
                console.log('Fetching assignments...');

                const res = await fetch(`${API_BASE}/api/PatientAssignments`);
                if (!res.ok) throw new Error("Failed to fetch assignment data");

                const data = await res.json();
                console.log('Assignments data:', data);
                setAssignments(data);

                console.log('Fetching person details...');
                const allPersons = await fetchAllPersonsData();
                setPersonDetails(allPersons);

            } catch (err: any) {
                console.error('Error in fetchAssignments:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchAssignments();
    }, []);

    const handleDelete = async (id: number, assignmentId: string) => {
        if (!confirm(`Are you sure you want to delete assignment ${assignmentId}? This action cannot be undone.`)) return;
        try {
            const res = await fetch(`${API_BASE}/api/PatientAssignments/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Delete failed");
            setAssignments(assignments.filter((assignment) => assignment.id !== id));
            alert("Assignment deleted successfully");
        } catch (err) {
            alert("Error deleting assignment. Please try again.");
        }
    };

    const handleEdit = (assignment: PatientAssignmentDataType) => {
        try {
            if (assignment.assignmentId) {
                router.push(`/viewAssignments/assignpatient?edit=true&id=${assignment.assignmentId}`);
            } else {
                console.error("assignmentId missing for assignment:", assignment);
            }
        } catch (error) {
            console.error("Failed to navigate to edit page", error);
        }
    };


    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString('en-GB');
        } catch {
            return dateString;
        }
    };

    const formatTime = (timeString: string) => {
        try {
            const date = new Date(`1970-01-01T${timeString}`);
            return date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
            });
        } catch {
            return timeString;
        }
    };

    const getPersonName = (id: string, type: string) => {
        const personKey = `${type}_${id}`;
        const details = personDetails[personKey];
        console.log(`Getting name for ${personKey}:`, details);
        return details?.name?.trim() || 'Not Found';
    };

    const getPersonDetails = (id: string, type: string) => {
        const personKey = `${type}_${id}`;
        return personDetails[personKey] || null;
    };

    const filteredAssignments = assignments.filter(assignment => {
        const searchLower = searchTerm.toLowerCase();
        const assignmentId = String(assignment.assignmentId || '').toLowerCase();
        const patientId = String(assignment.patientId || '').toLowerCase();
        const doctorId = String(assignment.doctorId || '').toLowerCase();
        const volunteerId = String(assignment.volunteerId || '').toLowerCase();
        const nurseId = String(assignment.nurseId || '').toLowerCase();
        const description = String(assignment.description || '').toLowerCase();

        const patientName = getPersonName(String(assignment.patientId || ''), 'patient').toLowerCase();
        const doctorName = getPersonName(String(assignment.doctorId || ''), 'doctor').toLowerCase();
        const volunteerName = getPersonName(String(assignment.volunteerId || ''), 'volunteer').toLowerCase();
        const nurseName = getPersonName(String(assignment.nurseId || ''), 'nurse').toLowerCase();

        return (
            assignmentId.includes(searchLower) ||
            patientId.includes(searchLower) ||
            doctorId.includes(searchLower) ||
            volunteerId.includes(searchLower) ||
            nurseId.includes(searchLower) ||
            description.includes(searchLower) ||
            patientName.includes(searchLower) ||
            doctorName.includes(searchLower) ||
            volunteerName.includes(searchLower) ||
            nurseName.includes(searchLower)
        );
    });

    const totalPages = Math.ceil(filteredAssignments.length / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;
    const currentRecords = filteredAssignments.slice(startIndex, startIndex + recordsPerPage);

    const showAssignmentDetails = (assignment: PatientAssignmentDataType) => {
        setSelectedAssignment(assignment);
    };

    if (loading) return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading assignment records...</p>
        </div>
    );

    if (error) return (
        <div className="error-container">
            <div className="error-message">
                <h3>Error Loading Data</h3>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        </div>
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
                                <div className="info-section">
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
                                <div className="info-section">
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
                                <div className="info-section">
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
                                <div className="info-section">
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
                                <div className="info-section">
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