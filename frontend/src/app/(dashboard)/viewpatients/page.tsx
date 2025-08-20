"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FilePen, Trash2 } from 'lucide-react';
import API from '@/lib/axios';
import "./viewPage.css";

// const API_BASE = "https://localhost:7112";
const API_BASE = API.defaults.baseURL;

interface FormDataType {
  id: number;
  patientId: string;
  districtId: number; // updated
  panchayathId: number; // updated
  categoryId: number; // updated
  ward: string;
  area: string;
  date: string;
  diagnosis: string;
  name: string;
  age: number;
  gender: string;
  spouseName: string;
  fatherName: string;
  motherName: string;
  adhaarAddress: string;
  currentAddress: string;
  phoneNumber1: string;
  phoneNumber2: string;
  adhaarNumber: string;
  contactPerson: string;
  relation: string;
  contactPhone: string;
  neighbourResidence: string;
  neighbourPhone: string;
  communityVolunteer: string;
  communityVolunteerPhone: string;
  wardMember: string;
  wardMemberPhone: string;
  aashaVolunteer: string;
  aashaVolunteerPhone: string;
  otherPerson: string;
  otherPersonPhone: string;
  houseRoute: string;
  photograph: string;
  aadharDoc: string;
}

export default function ViewPage() {
  const router = useRouter();
  const [forms, setForms] = useState<FormDataType[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<FormDataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const [districts, setDistricts] = useState<{ id: number; districtName: string }[]>([]);
  const [panchayaths, setPanchayaths] = useState<{ id: number; panchayathName: string }[]>([]);
  const [categories, setCategories] = useState<{ id: number; categoryName: string }[]>([]);


  const getDistrictName = (id: number | null | undefined) => {
    if (id == null || districts.length === 0) return '-';
    const d = districts.find((dist) => dist.id === id);
    return d?.districtName ?? `Unknown (id: ${id})`; // helpful during debugging
  };

  const getPanchayathName = (id: number | null | undefined) => {
    if (id == null || panchayaths.length === 0) return '-';
    const p = panchayaths.find((pan) => pan.id === id);
    return p?.panchayathName ?? `Unknown (id: ${id})`; // debugging
  };


  const getCategoryName = (id: number | null) => {
    const category = categories.find((c) => c.id === id);
    return category ? category.categoryName : '';
  };


  useEffect(() => {
    async function fetchForms() {
      try {
        const res = await API.get<FormDataType[]>(`/api/Hpforms`);
        if (!res.data) throw new Error("Failed to fetch patient data");
        const data = await res.data;
        setForms(res.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    async function fetchLookupData() {
      try {
        const [districtRes, panchayathRes, categoryRes] = await Promise.all([
          fetch(`${API_BASE}/api/Districts`),
          fetch(`${API_BASE}/api/Panchayaths`),
          fetch(`${API_BASE}/api/PatientCategories`),
        ]);

        if (!districtRes.ok || !panchayathRes.ok || !categoryRes.ok)
          throw new Error("Failed to fetch lookup data");

        const [districtData, panchayathData, categoryData] = await Promise.all([
          districtRes.json(),
          panchayathRes.json(),
          categoryRes.json(),
        ]);

        // ✅ Normalize district data
        setDistricts(
          districtData.map((d: any) => ({
            id: d.id,
            districtName: d.name, // Use correct API field
          }))
        );

        // ✅ Normalize panchayath data
        setPanchayaths(
          panchayathData.map((p: any) => ({
            id: p.panchayathId, // Correct ID field
            panchayathName: p.panchayathName,
          }))
        );

        // ✅ Normalize category data
        setCategories(
          categoryData.map((c: any) => ({
            id: c.id,
            categoryName: c.categoryName,
          }))
        );
      } catch (err) {
        console.error("Lookup fetch error:", err);
      }
    }

    fetchForms();
    fetchLookupData();
  }, []);



  const handleDelete = async (id: number, patientName: string) => {
    if (!confirm(`Are you sure you want to delete ${patientName}'s record? This action cannot be undone.`)) return;
    try {
      const res = await API.delete(`/api/Hpforms/${id}`);
      if (!res.data) throw new Error("Delete failed");
      setForms(forms.filter((form) => form.id !== id));
      alert("Patient record deleted successfully");
    } catch (err) {
      alert("Error deleting patient record. Please try again.");
    }
  };

  const handleEdit = (form: FormDataType) => {
    try {
      // Navigate to the patient registration form page with form ID as parameter
      router.push(`/viewpatients/patient_reg?edit=true&id=${form.patientId}`);
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

  const filteredForms = forms.filter(form =>
    form.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.patientId?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.diagnosis?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    form.phoneNumber1?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const totalPages = Math.ceil(filteredForms.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = filteredForms.slice(startIndex, startIndex + recordsPerPage);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading patient records...</p>
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
    <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0 grid-background">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-3 px-4 text-center shadow-md">
        <h1 className="text-3xl font-light mb-1">Patient Registry</h1>
        <p className="text-sm text-blue-100 font-normal">Manage and view patient records</p>
      </div>

      <div className="p-5">
        {/* Header Actions Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          {/* Left: New Registration Button */}
          <button
            onClick={() => router.push("/viewpatients/patient_reg")}
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
              Showing {currentRecords.length} of {filteredForms.length} patients
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full border border-gray-300 border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Patient Id.</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Patient Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Age</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Gender</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Diagnosis</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Mobile No.</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-white-700 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.length === 0 ? (
                <tr>
                  <td colSpan={8} className="no-records">
                    {searchTerm ? "No patients found matching your search" : "No patient records available"}
                  </td>
                </tr>
              ) : (
                currentRecords.map((patient) => (
                  <tr key={patient.id} className="table-row">
                    <td className="px-4 py-2 text-sm border border-gray-300">
                      {patient.patientId}/{new Date().getFullYear()}
                    </td>

                    <td className="px-4 py-2 text-sm border border-gray-300">
                      <button
                        className="patient-name-btn"
                        onClick={() => setSelectedPatient(patient)}
                      >
                        {patient.name}
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{patient.age}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">
                      <span className={`gender-badge ${patient.gender.toLowerCase()}`}>
                        {patient.gender}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{patient.diagnosis}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{patient.phoneNumber1}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">{formatDate(patient.date)}</td>
                    <td className="px-4 py-2 text-sm border border-gray-300">
                      <button
                        className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                        onClick={() => handleEdit(patient)}
                        title="Edit patient record"
                      >
                        <FilePen className="w-5 h-5" />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                        onClick={() => handleDelete(patient.id, patient.name)}
                        title="Delete patient record"
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

      {/* Patient Details Modal */}
      {selectedPatient && districts.length > 0 && panchayaths.length > 0 && categories.length > 0 && (
        <div className="modal-overlay" onClick={() => setSelectedPatient(null)}>
          <div className="patient-details-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Patient Details</h2>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedPatient(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-content">
              <div className="patient-photo-section">
                <img
                  src={`${API_BASE}/uploads/photographs/${selectedPatient.photograph}`}
                  alt={`${selectedPatient.name}'s photo`}
                  className="patient-photo"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder-avatar.png';
                  }}
                />
              </div>

              <div className="patient-info-grid">
                <div className="info-section">
                  <h3>Personal Information</h3>
                  <div className="info-row">
                    <span className="label">Full Name:</span>
                    <span className="value">{selectedPatient.name}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Registration No:</span>
                    <span className="value">{selectedPatient.patientId}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Age / Gender:</span>
                    <span className="value">{selectedPatient.age} / {selectedPatient.gender}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Aadhaar Number:</span>
                    <span className="value">{selectedPatient.adhaarNumber}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Family Details</h3>
                  <div className="info-row">
                    <span className="label">Father's Name:</span>
                    <span className="value">{selectedPatient.fatherName}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Mother's Name:</span>
                    <span className="value">{selectedPatient.motherName}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Spouse Name:</span>
                    <span className="value">{selectedPatient.spouseName || 'N/A'}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Contact Information</h3>
                  <div className="info-row">
                    <span className="label">Primary Phone:</span>
                    <span className="value">{selectedPatient.phoneNumber1}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Secondary Phone:</span>
                    <span className="value">{selectedPatient.phoneNumber2 || 'N/A'}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Current Address:</span>
                    <span className="value">{selectedPatient.currentAddress}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Location Details</h3>
                  <div className="info-row">
                    <span className="label">District:</span>
                    <span className="value">{getDistrictName(selectedPatient.districtId)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Panchayath:</span>
                    <span className="value">{getPanchayathName(selectedPatient.panchayathId)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Ward:</span>
                    <span className="value">{selectedPatient.ward}</span>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Medical Information</h3>
                  <div className="info-row">
                    <span className="label">Diagnosis:</span>
                    <span className="value diagnosis-highlight">{selectedPatient.diagnosis}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Category:</span>
                    <span className="value">{getCategoryName(selectedPatient.categoryId)}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Registration Date:</span>
                    <span className="value">{formatDate(selectedPatient.date)}</span>
                  </div>
                </div>



                <div className="info-section">
                  <h3>Emergency Contact</h3>
                  <div className="info-row">
                    <span className="label">Contact Person:</span>
                    <span className="value">{selectedPatient.contactPerson}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Relation:</span>
                    <span className="value">{selectedPatient.relation}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Contact Phone:</span>
                    <span className="value">{selectedPatient.contactPhone}</span>
                  </div>
                </div>
                <div className="info-section">
                  <h3>Other Emergency Contact</h3>
                  <div className="info-row">
                    <span className="label">Neighbour Residence :</span>
                    <span className="value">{selectedPatient.neighbourResidence}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Neighbour Ph No :</span>
                    <span className="value">{selectedPatient.neighbourPhone}</span>
                  </div><br />
                  <div className="info-row">
                    <span className="label">Community Volunteer :</span>
                    <span className="value">{selectedPatient.communityVolunteer}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Volunteer Ph No :</span>
                    <span className="value">{selectedPatient.communityVolunteerPhone}</span>
                  </div><br />
                  <div className="info-row">
                    <span className="label">Ward Member :</span>
                    <span className="value">{selectedPatient.wardMember}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Ward Member Ph No :</span>
                    <span className="value">{selectedPatient.wardMemberPhone}</span>
                  </div><br />
                </div>
                <div><br /><br /><br />
                  <div className="info-row">
                    <span className="label">Aasha Volunteer :</span>
                    <span className="value">{selectedPatient.aashaVolunteer}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Aasha Volunteer Ph No :</span>
                    <span className="value">{selectedPatient.aashaVolunteerPhone}</span>
                  </div><br />
                  <div className="info-row">
                    <span className="label">Others :</span>
                    <span className="value">{selectedPatient.otherPerson}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Other Person's Ph No :</span>
                    <span className="value">{selectedPatient.otherPersonPhone}</span>
                  </div>
                </div>
              </div>

              <div className="documents-section">
                <h3>Documents</h3>
                <div className="document-item">
                  <span className="document-label">Aadhaar Document:</span>
                  {selectedPatient.aadharDoc ? (
                    <a
                      href={`${API_BASE}/uploads/AadharDocs/${selectedPatient.aadharDoc}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="document-link text-blue-600 underline"
                    >
                      📄 View Aadhaar Document
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500 ml-2">Not uploaded</span>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}