"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import API from '@/lib/axios';
import { FilePen, Trash2 } from 'lucide-react';
import "./viewNurse.css";

// const API_BASE = "https://localhost:7112";
const API_BASE = API.defaults.baseURL;

interface NurseDataType {
  id: number;
  nurse_Id: string;
  district: string;
  panchayath: string;
  ward_no: string;
  nurseName: string;
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

export default function NurseViewPage() {
  const router = useRouter();
  const [nurses, setNurses] = useState<NurseDataType[]>([]);
  const [selectedNurse, setSelectedNurse] = useState<NurseDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const recordsPerPage = 10;

  useEffect(() => {
    async function fetchNurses() {
      try {
        const res = await fetch(`${API_BASE}/api/Nurses`);
        if (!res.ok) throw new Error("Failed to fetch nurse data");
        const data = await res.json();
        setNurses(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchNurses();
  }, []);

  const handleDelete = async (id: number, nurseName: string) => {
    if (!confirm(`Are you sure you want to delete ${nurseName}'s record? This action cannot be undone.`)) return;
    try {
      const res = await fetch(`${API_BASE}/api/Nurses/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      setNurses(nurses.filter((nurse) => nurse.id !== id));
      alert("Nurse record deleted successfully");
    } catch (err) {
      alert("Error deleting nurse record. Please try again.");
    }
  };

  const handleEdit = (nurse: NurseDataType) => {
    try {
      // Navigate to the nurse registration form page with nurse ID as parameter
      router.push(`/viewnurses/nurse?edit=true&id=${nurse.id}`);
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

  const getDepartmentDisplay = (department: string) => {
    return department.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
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
  const filteredNurses = nurses.filter(nurse =>
    nurse.nurseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nurse.nurse_Id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nurse.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nurse.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nurse.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nurse.licenseNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNurses.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = filteredNurses.slice(startIndex, startIndex + recordsPerPage);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading nurse records...</p>
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
<div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">
{/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 px-4 text-center shadow-md">
        <h1 className="text-3xl font-light mb-1">Nurse Registry</h1>
        <p className="text-sm text-blue-100 font-normal">Manage and view Nurse records</p>
      </div>

      <div className="p-5">
        {/* Header Actions Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          {/* Left: New Registration Button */}
          <button
            onClick={() => router.push("/viewnurses/nurse")}
            className="group relative w-fit px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden mx-auto sm:mx-0"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0 rounded-md"></span>

            <span className="relative flex items-center z-10">
              <span className="text-base mr-1">➕</span>
              New Nurse Registration
            </span>
          </button>

          {/* Right Side: Search and Info */}
          <div className="flex flex-col items-center sm:items-end w-full sm:w-auto gap-2">
            {/* Search Input */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xl">🔍</span>
              <input
                type="text"
                placeholder="Search by name, Nurse ID, phone..."
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
              Showing {currentRecords.length} of {filteredNurses.length} nurses
            </div>
          </div>
        </div>

        {/* Table Section */}
 <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full border border-gray-300 border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Nurse ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Nurse Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Specialization</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Department</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">License Number</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Phone Number</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.length === 0 ? (
                <tr>
                  <td colSpan={7} className="no-records">
                    {searchTerm ? "No nurses found matching your search" : "No nurse records available"}
                  </td>
                </tr>
              ) : (
                currentRecords.map((nurse) => (
                  <tr key={nurse.id} className="table-row">
                   <td className="px-4 py-2 text-sm border border-gray-300">{nurse.nurse_Id}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">
                      <button
                        className="patient-name-btn"
                        onClick={() => setSelectedNurse(nurse)}
                      >
                        {nurse.nurseName}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{getSpecializationDisplay(nurse.specialization)}</td>
                   <td className="px-4 py-2 text-sm border border-gray-300">{getDepartmentDisplay(nurse.department)}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{nurse.licenseNumber}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{nurse.phone}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">
                      <button
                        className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                        onClick={() => handleEdit(nurse)}
                        title="Edit nurse record"
                      >
                        <FilePen className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                        onClick={() => handleDelete(nurse.id, nurse.nurseName)}
                        title="Delete nurse record"
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

      {/* Nurse Details Modal */}
      {selectedNurse && (
        <div className="modal-overlay" onClick={() => setSelectedNurse(null)}>
          <div className="patient-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Nurse Details</h2>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedNurse(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="patient-photo-section">
                <img
                  src={getImageSrc(selectedNurse.photo)}
                  alt={`${selectedNurse.nurseName}'s photo`}
                  className="patient-photo"
                  onError={() => handleImageError(selectedNurse.photo)}
                />
              </div>

              <div className="patient-info-grid">
                <div className="info-section">
                  <h3>Personal Information</h3>
                  <div className="info-row">
                    <span className="label">Full Name:</span>
                    <span className="value">{selectedNurse.nurseName}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Nurse ID:</span>
                    <span className="value">{selectedNurse.nurse_Id}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Gender:</span>
                    <span className="value">{selectedNurse.gender}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Date of Birth:</span>
                    <span className="value">{formatDate(selectedNurse.dob)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Age:</span>
                    <span className="value">{selectedNurse.age}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Blood Group:</span>
                    <span className="value">{selectedNurse.bloodGroup || 'N/A'}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Contact Information</h3>
                  <div className="info-row">
                    <span className="label">Phone Number:</span>
                    <span className="value">{selectedNurse.phone}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email Address:</span>
                    <span className="value">{selectedNurse.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Address:</span>
                    <span className="value">{selectedNurse.address}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Location Details</h3>
                  <div className="info-row">
                    <span className="label">District:</span>
                    <span className="value">{selectedNurse.district}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Panchayath:</span>
                    <span className="value">{selectedNurse.panchayath}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Ward Number:</span>
                    <span className="value">{selectedNurse.ward_no}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Professional Information</h3>
                  <div className="info-row">
                    <span className="label">Specialization:</span>
                    <span className="value diagnosis-highlight">{getSpecializationDisplay(selectedNurse.specialization)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Department:</span>
                    <span className="value">{getDepartmentDisplay(selectedNurse.department)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Degree:</span>
                    <span className="value">{selectedNurse.degree}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Experience:</span>
                    <span className="value">{selectedNurse.experience}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">License Number:</span>
                    <span className="value">{selectedNurse.licenseNumber}</span>
                  </div>
                </div>

                {selectedNurse.description && (
                  <div className="info-section">
                    <h3>Additional Information</h3>
                    <div className="info-row">
                      <span className="value">{selectedNurse.description}</span>
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