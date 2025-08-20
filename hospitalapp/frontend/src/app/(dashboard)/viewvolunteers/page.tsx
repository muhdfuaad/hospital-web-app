"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { FilePen, Trash2 } from 'lucide-react';
import API from '@/lib/axios';
import "./viewVolunteer.css";

// const API_BASE = "https://localhost:7112";
const API_BASE = API.defaults.baseURL;

interface VolunteerDataType {
  id: number;
  vol_Id: string;
  district: string;
  panchayath: string;
  ward_no: string;
  volName: string;
  address: string;
  gender: string;
  dob: string;
  age: string;
  bloodGroup: string;
  phone: string;
  email: string;
  type: string;
  job: string;
  status: string;
  photo: string;
  description: string;
}

export default function VolunteerViewPage() {
  const router = useRouter();
  const [volunteers, setVolunteers] = useState<VolunteerDataType[]>([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState<VolunteerDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const recordsPerPage = 10;

  useEffect(() => {
    async function fetchVolunteers() {
      try {
        const res = await fetch(`${API_BASE}/api/Volunteers`);
        if (!res.ok) throw new Error("Failed to fetch volunteer data");
        const data = await res.json();
        setVolunteers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchVolunteers();
  }, []);

  const handleDelete = async (id: number, volunteerName: string) => {
    if (!confirm(`Are you sure you want to delete ${volunteerName}'s record? This action cannot be undone.`)) return;
    try {
      const res = await fetch(`${API_BASE}/api/Volunteers/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      setVolunteers(volunteers.filter((volunteer) => volunteer.id !== id));
      alert("Volunteer record deleted successfully");
    } catch (err) {
      alert("Error deleting volunteer record. Please try again.");
    }
  };

  const handleEdit = (volunteer: VolunteerDataType) => {
    try {
      // Navigate to the volunteer registration form page with volunteer ID as parameter
      router.push(`/viewvolunteers/volunteer?edit=true&id=${volunteer.id}`);
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

  const getTypeDisplay = (type: string) => {
    return type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const getStatusDisplay = (status: string) => {
    return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
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
  const filteredVolunteers = volunteers.filter(volunteer =>
    volunteer.volName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.vol_Id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
    volunteer.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVolunteers.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = filteredVolunteers.slice(startIndex, startIndex + recordsPerPage);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading volunteer records...</p>
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
        <h1 className="text-3xl font-light mb-1">Volunteer Registry</h1>
        <p className="text-sm text-blue-100 font-normal">Manage and view volunteer records</p>
      </div>

      <div className="p-5">
        {/* Header Actions Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          {/* Left: New Registration Button */}
          <button
            onClick={() => router.push("/viewvolunteers/volunteer")}
            className="group relative w-fit px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-sm font-medium rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden mx-auto sm:mx-0"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0 rounded-md"></span>

            <span className="relative flex items-center z-10">
              <span className="text-base mr-1">➕</span>
              New Registration
            </span>
          </button>

          {/* Right Side: Search and Info */}
          <div className="flex flex-col items-center sm:items-end w-full sm:w-auto gap-2">
            {/* Search Input */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xl">🔍</span>
              <input
                type="text"
                placeholder="Search by name, volunteer ID, type, phone or degree..."
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
              Showing {currentRecords.length} of {filteredVolunteers.length} volunteers
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full border border-gray-300 border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Volunteer ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Volunteer Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Job/Occupation</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Status</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Phone Number</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.length === 0 ? (
                <tr>
                  <td colSpan={7} className="no-records">
                    {searchTerm ? "No volunteers found matching your search" : "No volunteer records available"}
                  </td>
                </tr>
              ) : (
                currentRecords.map((volunteer) => (
                  <tr key={volunteer.id} className="table-row">
                    <td className="px-4 py-2 text-sm border border-gray-300">{volunteer.vol_Id}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">
                      <button
                        className="patient-name-btn"
                        onClick={() => setSelectedVolunteer(volunteer)}
                      >
                        {volunteer.volName}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{getTypeDisplay(volunteer.type)}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{volunteer.job}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">
                      <span className={`status-badge ${volunteer.status.toLowerCase()}`}>
                        {getStatusDisplay(volunteer.status)}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{volunteer.phone}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">
                      <button
                        className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                        onClick={() => handleEdit(volunteer)}
                        title="Edit volunteer record"
                      >
                        <FilePen className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                        onClick={() => handleDelete(volunteer.id, volunteer.volName)}
                        title="Delete volunteer record"
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

      {/* Volunteer Details Modal */}
      {selectedVolunteer && (
        <div className="modal-overlay" onClick={() => setSelectedVolunteer(null)}>
          <div className="patient-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Volunteer Details</h2>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedVolunteer(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="patient-photo-section">
                <img
                  src={getImageSrc(selectedVolunteer.photo)}
                  alt={`${selectedVolunteer.volName}'s photo`}
                  className="patient-photo"
                  onError={() => handleImageError(selectedVolunteer.photo)}
                />
              </div>

              <div className="patient-info-grid">
                <div className="info-section">
                  <h3>Personal Information</h3>
                  <div className="info-row">
                    <span className="label">Full Name:</span>
                    <span className="value">{selectedVolunteer.volName}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Volunteer ID:</span>
                    <span className="value">{selectedVolunteer.vol_Id}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Gender:</span>
                    <span className="value">{selectedVolunteer.gender}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Date of Birth:</span>
                    <span className="value">{formatDate(selectedVolunteer.dob)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Age:</span>
                    <span className="value">{selectedVolunteer.age}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Blood Group:</span>
                    <span className="value">{selectedVolunteer.bloodGroup || 'N/A'}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Contact Information</h3>
                  <div className="info-row">
                    <span className="label">Phone Number:</span>
                    <span className="value">{selectedVolunteer.phone}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email Address:</span>
                    <span className="value">{selectedVolunteer.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Address:</span>
                    <span className="value">{selectedVolunteer.address}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Location Details</h3>
                  <div className="info-row">
                    <span className="label">District:</span>
                    <span className="value">{selectedVolunteer.district}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Panchayath:</span>
                    <span className="value">{selectedVolunteer.panchayath}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Ward Number:</span>
                    <span className="value">{selectedVolunteer.ward_no}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Volunteer Information</h3>
                  <div className="info-row">
                    <span className="label">Volunteer Type:</span>
                    <span className="value diagnosis-highlight">{getTypeDisplay(selectedVolunteer.type)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Job/Occupation:</span>
                    <span className="value">{selectedVolunteer.job}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Status:</span>
                    <span className={`value status-badge ${selectedVolunteer.status.toLowerCase()}`}>
                      {getStatusDisplay(selectedVolunteer.status)}
                    </span>
                  </div>
                </div>

                {selectedVolunteer.description && (
                  <div className="info-section">
                    <h3>Additional Information</h3>
                    <div className="info-row">
                      <span className="value">{selectedVolunteer.description}</span>
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