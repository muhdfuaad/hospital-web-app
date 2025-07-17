"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { FilePen, Trash2 } from 'lucide-react';
import "./viewDoc.css";

const API_BASE = "https://localhost:7112";

interface DoctorDataType {
  id: number;
  doc_Id: string;
  district: string;
  panchayath: string;
  ward_no: string;
  docName: string;
  address: string;
  gender: string;
  dob: string;
  age: string;
  bloodGroup: string;
  phone: string;
  email: string;
  specialization: string;
  degree: string;
  experience: string;
  licenseNumber: string;
  department: string;
  photo: string;
  description: string;
}

export default function DoctorViewPage() {
  const router = useRouter();
  const [doctors, setDoctors] = useState<DoctorDataType[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const recordsPerPage = 10;

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const res = await fetch(`${API_BASE}/api/Doctors`);
        if (!res.ok) throw new Error("Failed to fetch doctor data");
        const data = await res.json();
        setDoctors(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchDoctors();
  }, []);

  const handleDelete = async (id: number, doctorName: string) => {
    if (!confirm(`Are you sure you want to delete Dr. ${doctorName}'s record? This action cannot be undone.`)) return;
    try {
      const res = await fetch(`${API_BASE}/api/Doctors/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      setDoctors(doctors.filter((doctor) => doctor.id !== id));
      alert("Doctor record deleted successfully");
    } catch (err) {
      alert("Error deleting doctor record. Please try again.");
    }
  };

  const handleEdit = (doctor: DoctorDataType) => {
    try {
      // Navigate to the doctor registration form page with doctor ID as parameter
      router.push(`/viewdoctor/doctor?edit=true&id=${doctor.id}`);
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

  const getSpecializationDisplay = (specialization: string) => {
    return specialization.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const handleImageError = useCallback((photoFileName: string) => {
    setImageError(prev => ({
      ...prev,
      [photoFileName]: true
    }));
  }, []);

  const getImageSrc = (photoFileName: string) => {
    if (!photoFileName || imageError[photoFileName]) {
      return '/placeholder-avatar.png';
    }
    return `${API_BASE}/uploads/${photoFileName}`;
  };

  // Filter and pagination logic
  const filteredDoctors = doctors.filter(doctor =>
    doctor.docName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.doc_Id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.degree.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDoctors.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = filteredDoctors.slice(startIndex, startIndex + recordsPerPage);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading doctor records...</p>
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
            <h1>Doctor Registry</h1>
            <p className="subtitle">Manage and view doctor records</p>
          </div>
          <button
            className="new-registration-btn"
            onClick={() => router.push("/viewdoctor/doctor")}
          >
            <span className="btn-icon">+</span>
            New Doctor Registration
          </button>
        </div>
      </div>

      {/* Controls Section */}
      <div className="controls-section">
        <div className="search-container flex items-center gap-2">
          <span className="text-xl">🔍</span>
          <input
            type="text"
            placeholder="Search by name, doctor ID, specialization, phone or degree..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="search-input py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
          />
        </div>
        <div className="records-info ">
          Showing {currentRecords.length} of {filteredDoctors.length} doctors
        </div>
      </div>


      {/* Table Section */}
      <div className="table-container">
        <table className="patients-table">
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Doctor Name</th>
              <th>Medical Degree</th>
              <th>Specialization</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.length === 0 ? (
              <tr>
                <td colSpan={6} className="no-records">
                  {searchTerm ? "No doctors found matching your search" : "No doctor records available"}
                </td>
              </tr>
            ) : (
              currentRecords.map((doctor) => (
                <tr key={doctor.id} className="table-row">
                  <td className="id-cell">{doctor.doc_Id}</td>
                  <td className="name-cell">
                    <button
                      className="patient-name-btn"
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      Dr. {doctor.docName}
                    </button>
                  </td>
                  <td className="degree-cell">{doctor.degree}</td>
                  <td className="specialization-cell">{getSpecializationDisplay(doctor.specialization)}</td>
                  <td className="phone-cell">{doctor.phone}</td>
                  <td className="actions-cell">
                    <button
                      className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                      onClick={() => handleEdit(doctor)}
                      title="Edit doctor record"
                    >
                      <FilePen className="w-5 h-5" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                      onClick={() => handleDelete(doctor.id, doctor.docName)}
                      title="Delete doctor record"
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

      {/* Doctor Details Modal */}
      {selectedDoctor && (
        <div className="modal-overlay" onClick={() => setSelectedDoctor(null)}>
          <div className="patient-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Doctor Details</h2>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedDoctor(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="patient-photo-section">
                <img
                  src={getImageSrc(selectedDoctor.photo)}
                  alt={`Dr. ${selectedDoctor.docName}'s photo`}
                  className="patient-photo"
                  onError={() => handleImageError(selectedDoctor.photo)}
                />
              </div>

              <div className="patient-info-grid">
                <div className="info-section">
                  <h3>Personal Information</h3>
                  <div className="info-row">
                    <span className="label">Full Name:</span>
                    <span className="value">Dr. {selectedDoctor.docName}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Doctor ID:</span>
                    <span className="value">{selectedDoctor.doc_Id}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Gender:</span>
                    <span className="value">{selectedDoctor.gender}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Date of Birth:</span>
                    <span className="value">{formatDate(selectedDoctor.dob)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Age:</span>
                    <span className="value">{selectedDoctor.age}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Blood Group:</span>
                    <span className="value">{selectedDoctor.bloodGroup || 'N/A'}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Contact Information</h3>
                  <div className="info-row">
                    <span className="label">Phone Number:</span>
                    <span className="value">{selectedDoctor.phone}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email Address:</span>
                    <span className="value">{selectedDoctor.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Address:</span>
                    <span className="value">{selectedDoctor.address}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Location Details</h3>
                  <div className="info-row">
                    <span className="label">District:</span>
                    <span className="value">{selectedDoctor.district}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Panchayath:</span>
                    <span className="value">{selectedDoctor.panchayath}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Ward Number:</span>
                    <span className="value">{selectedDoctor.ward_no}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Professional Information</h3>
                  <div className="info-row">
                    <span className="label">Medical Degree:</span>
                    <span className="value">{selectedDoctor.degree}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Specialization:</span>
                    <span className="value diagnosis-highlight">{getSpecializationDisplay(selectedDoctor.specialization)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">License Number:</span>
                    <span className="value">{selectedDoctor.licenseNumber}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Years of Experience:</span>
                    <span className="value">{selectedDoctor.experience || 'N/A'}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Department:</span>
                    <span className="value">{selectedDoctor.department || 'N/A'}</span>
                  </div>
                </div>

                {selectedDoctor.description && (
                  <div className="info-section">
                    <h3>Professional Description</h3>
                    <div className="info-row">
                      <span className="value">{selectedDoctor.description}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}