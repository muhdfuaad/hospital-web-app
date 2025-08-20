"use client"

import React, { useState, useEffect, useRef } from 'react';
import { User, Calendar, Clock, Users, UserCheck, Heart, FileText, Search, ExternalLink } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import API from '@/lib/axios';

interface FormErrors {
  [key: string]: string;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  phone: string;
}

interface Doctor {
  id: string;
  name: string;
  phone: string;
}

interface Volunteer {
  id: string;
  name: string;
  phone: string;
}

interface Nurse {
  id: string;
  name: string;
  phone: string;
}
interface FormData {
  assignmentId: string;
  date: string;
  time: string;
  patientId: string;
  doctorId: string;
  volunteerId: string;
  nurseId: string;
  description: string;
}

interface SearchableSelectProps<T> {
  label: string;
  value: string;
  searchValue: string;
  setSearchValue: (value: string) => void;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  items: T[];
  onSelect: (id: string) => void;
  renderItem: (item: T) => React.ReactNode;
  editUrl?: string;
  error?: string;
}

const AssignmentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    assignmentId: '',
    date: '',
    time: '',
    patientId: '',
    doctorId: '',
    volunteerId: '',
    nurseId: '',
    description: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Search states
  const [patientSearch, setPatientSearch] = useState('');
  const [doctorSearch, setDoctorSearch] = useState('');
  const [volunteerSearch, setVolunteerSearch] = useState('');
  const [nurseSearch, setNurseSearch] = useState('');

  // Dropdown visibility states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  // Counter for PT ID generation
  const [assignmentCounter, setAssignmentCounter] = useState(1);

  const router = useRouter();
  const searchParams = useSearchParams();
  const isEdit = searchParams.get("edit")?.toLowerCase() === "true";
  const editId = searchParams.get("id");

  // Data states
  const [patients, setPatients] = useState<Patient[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [nurses, setNurses] = useState<Nurse[]>([]);

  // API functions
  const fetchPatients = async () => {
    try {
      const { data } = await API.get<Patient[]>('/api/Hpforms/all-patients');
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error);
      setPatients([]);
    }
  };

  const fetchDoctors = async () => {
    try {
      const { data } = await API.get<Doctor[]>('/api/Doctors/all-doctors');
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setDoctors([]);
    }
  };

  const fetchVolunteers = async () => {
    try {
      const { data } = await API.get<Volunteer[]>('/api/Volunteers/all-volunteers');
      setVolunteers(data);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
      setVolunteers([]);
    }
  };

  const fetchNurses = async () => {
    try {
      const { data } = await API.get<Nurse[]>('/api/Nurses/all-nurses');
      setNurses(data);
    } catch (error) {
      console.error('Error fetching nurses:', error);
      setNurses([]);
    }
  };

  useEffect(() => {
    const fetchAssignmentForEdit = async () => {
      if (isEdit && editId) {
        try {
          const { data }: { data: Record<string, any> } = await API.get(`/api/PatientAssignments/byAssignmentId/${editId}`);

          // Get current time in HH:MM format
          const now = new Date();
          const currentTime = now.toTimeString().slice(0, 5);

          setFormData({
            assignmentId: data.assignmentId || "",
            date: data.date?.slice(0, 10) || "",
            time: currentTime,
            patientId: data.patientId || "",
            doctorId: data.doctorId || "",
            volunteerId: data.volunteerId || "",
            nurseId: data.nurseId || "",
            description: data.description || "",
          });

          // Pre-fill SearchableSelect display strings
          const selectedPatient = patients.find(p => p.id === data.patientId);
          if (selectedPatient) setPatientSearch(`${selectedPatient.id} | ${selectedPatient.name} | ${selectedPatient.phone || ""}`);

          const selectedDoctor = doctors.find(d => d.id === data.doctorId);
          if (selectedDoctor) setDoctorSearch(`${selectedDoctor.id} | ${selectedDoctor.name} | ${selectedDoctor.phone || ""}`);

          const selectedVolunteer = volunteers.find(v => v.id === data.volunteerId);
          if (selectedVolunteer) setVolunteerSearch(`${selectedVolunteer.id} | ${selectedVolunteer.name} | ${selectedVolunteer.phone || ""}`);

          const selectedNurse = nurses.find(n => n.id === data.nurseId);
          if (selectedNurse) setNurseSearch(`${selectedNurse.id} | ${selectedNurse.name} | ${selectedNurse.phone || ""}`);
        } catch (err) {
          console.error("Error fetching assignment for edit:", err);
          alert("Failed to load assignment for editing.");
        }
      }
    };

    if (patients.length && doctors.length && volunteers.length && nurses.length) {
      fetchAssignmentForEdit();
    }
  }, [isEdit, editId, patients, doctors, volunteers, nurses]);

  // Generate PT ID function
  const generateAssignmentId = () => {
    const paddedNumber = assignmentCounter.toString().padStart(3, '0');
    return `PT-${paddedNumber}`;
  };

  //to fetch last assignment Id
  useEffect(() => {
    const fetchLastAssignmentId = async () => {
      try {
        const res = await API.get<string>('/api/PatientAssignments/getid'); // response is plain text
        const lastId = res.data;

        const lastNumber = parseInt(lastId.replace('PT-', '')) || 0;
        const newCounter = lastNumber + 1;

        setAssignmentCounter(newCounter);
        setFormData(prev => ({
          ...prev,
          assignmentId: `PT-${newCounter.toString().padStart(3, '0')}`
        }));
      } catch (error) {
        console.error('Failed to fetch last assignment ID:', error);
      }
    };

    fetchLastAssignmentId();
  }, []);


  // Initialize form data and fetch API data
  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();
      const date = now.toISOString().split('T')[0];
      const time = now.toTimeString().slice(0, 5);
      return { date, time };
    };
    const { date, time } = getCurrentDateTime();
    setFormData(prev => ({
      ...prev,
      assignmentId: generateAssignmentId(),
      date: date,
      time: time
    }));
    // Fetch data from APIs
    fetchPatients();
    fetchDoctors();
    fetchVolunteers();
    fetchNurses();
  }, []);

  //closing searchboxes when mouse clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest('.searchable-select')) {
        // Close dropdown
        setActiveDropdown(null);

        // Clear the appropriate search field
        if (activeDropdown === 'patient') setPatientSearch('');
        else if (activeDropdown === 'doctor') setDoctorSearch('');
        else if (activeDropdown === 'volunteer') setVolunteerSearch('');
        else if (activeDropdown === 'nurse') setNurseSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);


  // Filter functions
  function filterBySearch<T extends { id: string; name: string; phone?: string }>(
    items: T[],
    searchText: string
  ): T[] {
    if (!searchText.trim()) return items;

    const query = searchText.toLowerCase();

    return items.filter(item => {
      const nameParts = item.name.toLowerCase().split(' ');
      const matchesNameStart = nameParts.some(part => part.startsWith(query));
      const matchesId = item.id.toLowerCase().startsWith(query);
      const matchesPhone = item.phone?.startsWith(query);

      return matchesNameStart || matchesId || matchesPhone;
    });
  }

  const filteredPatients = filterBySearch(patients, patientSearch);
  const filteredDoctors = filterBySearch(doctors, doctorSearch);
  const filteredVolunteers = filterBySearch(volunteers, volunteerSearch);
  const filteredNurses = filterBySearch(nurses, nurseSearch);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.patientId) newErrors.patientId = 'Please select a patient';
    if (!formData.doctorId) newErrors.doctorId = 'Please select a doctor';
    if (!formData.volunteerId) newErrors.volunteerId = 'Please select a volunteer';
    if (!formData.nurseId) newErrors.nurseId = 'Please select a nurse';
    if (!formData.description.trim()) newErrors.description = 'Please provide a description';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const currentTime = new Date().toTimeString().slice(0, 5);
    const submissionData = {
      ...formData,
      time: currentTime,
    };

    if (validateForm()) {
      try {
        const apiData = {
          assignmentId: submissionData.assignmentId,
          date: submissionData.date,
          time: submissionData.time,
          patientId: submissionData.patientId,
          doctorId: submissionData.doctorId,
          volunteerId: submissionData.volunteerId,
          nurseId: submissionData.nurseId,
          description: submissionData.description,
        };

        if (isEdit && editId) {
          await API.put(`/api/PatientAssignments/updateByAssignmentId/${editId}`, apiData);
          setSubmitMessage("Assignment updated successfully!");
        } else {
          await API.post("/api/PatientAssignments", apiData);
          setSubmitMessage("Assignment created successfully!");
        }

        setSubmitStatus("success");

        setTimeout(() => {
          router.push("/viewAssignments");
        }, 1000);
      } catch (error: any) {
        console.error("Error submitting assignment:", error);
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "An unknown error occurred";

        setSubmitMessage(`Failed to ${isEdit ? "update" : "create"} assignment: ${errorMessage}`);
        setSubmitStatus("error");
      }
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 text-center sm:p-6 shadow-lg">
        <h1 className="text-3xl font-light mb-3">
          {isEdit ? 'Edit Patient Assignment' : 'HealthCare Assignment Form'}
        </h1>
        <p className="text-2l text-blue-200">
          Assign patients to healthcare professionals
        </p>
      </div>

      {/* Form */}
      <div className="bg-white p-4 rounded-b-lg shadow-lg">
        <div className="space-y-4">

          {/* Assignment Details Section */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <FileText className="w-5 h-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Assignment Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Assignment ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="assignmentId"
                  value={formData.assignmentId}
                  className="w-full p-2 border-2 border-gray-300 rounded-lg text-gray-800 font-medium bg-gray-100 cursor-not-allowed text-sm"
                  placeholder="Auto-generated ID"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-2 pl-10 border-2 border-gray-300 rounded-lg text-gray-800 font-medium focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full p-2 pl-10 border-2 border-gray-300 rounded-lg text-gray-800 font-medium focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Patient and Doctor Selection - Horizontal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Patient Selection */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 searchable-select">
              <div className="flex items-center mb-4">
                <User className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Patient Assignment</h3>
              </div>

              <SearchableSelect
                label="Select Patient"
                value={formData.patientId}
                searchValue={patientSearch}
                setSearchValue={setPatientSearch}
                showDropdown={activeDropdown === 'patient'}
                setShowDropdown={(open) => setActiveDropdown(open ? 'patient' : null)}
                items={filteredPatients}
                onSelect={(id: string) => setFormData(prev => ({ ...prev, patientId: id }))}
                renderItem={(patient: Patient) => (
                  <div>
                    <div className="font-semibold text-gray-800">{patient.id} | {patient.name}</div>
                    <div className="text-sm text-gray-600">Age: {patient.age} | Ph: {patient.phone}</div>
                  </div>
                )}
                editUrl={formData.patientId ? `/viewpatients/patient_reg?edit=true&id=${formData.patientId}` : undefined}
                error={errors.patientId}
              />
            </div>

            {/* Doctor Selection */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 searchable-select">
              <div className="flex items-center mb-4">
                <UserCheck className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Doctor Assignment</h3>
              </div>

              <SearchableSelect
                label="Select Doctor"
                value={formData.doctorId}
                searchValue={doctorSearch}
                setSearchValue={setDoctorSearch}
                showDropdown={activeDropdown === 'doctor'}
                setShowDropdown={(open) => setActiveDropdown(open ? 'doctor' : null)}
                items={filteredDoctors}
                onSelect={(id) => setFormData(prev => ({ ...prev, doctorId: id }))}
                renderItem={(doctor) => (
                  <div>
                    <div className="font-semibold text-gray-800">{doctor.id} | Dr. {doctor.name}</div>
                    <div className="text-sm text-gray-600">Ph: {doctor.phone}</div>
                  </div>
                )}
                editUrl={formData.doctorId ? `/viewdoctor/doctor?edit=true&id=${formData.doctorId}` : undefined}
                error={errors.doctorId}
              />
            </div>
          </div>


          {/* Volunteer and Nurse Selection - Horizontal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Volunteer Selection */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 searchable-select">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Volunteer Assignment</h3>
              </div>

              <SearchableSelect
                label="Select Volunteer"
                value={formData.volunteerId}
                searchValue={volunteerSearch}
                setSearchValue={setVolunteerSearch}
                showDropdown={activeDropdown === 'volunteer'}
                setShowDropdown={(open) => setActiveDropdown(open ? 'volunteer' : null)}
                items={filteredVolunteers}
                onSelect={(id: string) => setFormData(prev => ({ ...prev, volunteerId: id }))}
                renderItem={(volunteer: Volunteer) => (
                  <div>
                    <div className="font-semibold text-gray-800">{volunteer.id} | {volunteer.name}</div>
                    <div className="text-sm text-gray-600">Ph: {volunteer.phone}</div>
                  </div>
                )}
                editUrl={formData.volunteerId ? `/viewvolunteers/volunteer?edit=true&id=${formData.volunteerId}` : undefined}
                error={errors.volunteerId}
              />
            </div>

            {/* Nurse Selection */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 searchable-select">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Nurse Assignment</h3>
              </div>

              <SearchableSelect
                label="Select Nurse"
                value={formData.nurseId}
                searchValue={nurseSearch}
                setSearchValue={setNurseSearch}
                showDropdown={activeDropdown === 'nurse'}
                setShowDropdown={(open) => setActiveDropdown(open ? 'nurse' : null)}
                items={filteredNurses}
                onSelect={(id: string) => setFormData(prev => ({ ...prev, nurseId: id }))}
                renderItem={(nurse: Nurse) => (
                  <div>
                    <div className="font-semibold text-gray-800">{nurse.id} | {nurse.name}</div>
                    <div className="text-sm text-gray-600">Ph: {nurse.phone}</div>
                  </div>
                )}
                editUrl={formData.nurseId ? `/viewnurses/nurse?edit=true&id=${formData.nurseId}` : undefined}
                error={errors.nurseId}
              />
            </div>
          </div>


          {/* Description */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <FileText className="w-5 h-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">Assignment Description</h3>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className={`w-full p-2 border-2 rounded-lg text-gray-800 font-medium transition-all duration-300 text-sm resize-none
                    ${errors.description
                    ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 bg-white focus:border-gray-500 focus:ring-gray-200'
                  }
                    focus:outline-none focus:ring-2`}
                placeholder="Provide detailed information about this assignment, including care instructions, special requirements, or any relevant notes..."
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
          </div>

          {/* Submit Button */}
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
          
          <div className="flex justify-center pt-6">
            <button
              onClick={handleSubmit}
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-lg text-base
             transform transition-all duration-300 hover:scale-105 hover:shadow-lg
             focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              {isEdit ? "Update Assignment" : "Create Assignment"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AssignmentForm;

const SearchableSelect = <T extends { id: string; name: string; phone?: string }>({
  label,
  value,
  searchValue,
  setSearchValue,
  showDropdown,
  setShowDropdown,
  items,
  onSelect,
  renderItem,
  editUrl,
  error,
}: SearchableSelectProps<T>) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={dropdownRef} className="relative searchable-select">
      <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
        {label} <span className="text-red-500">*</span>
      </label>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          className={`w-full p-2 pl-10 pr-10 border-2 rounded-lg text-gray-800 font-medium transition-all duration-300 text-sm
            ${error
              ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-200'
              : 'border-gray-300 bg-white focus:border-gray-500 focus:ring-gray-200'
            }
            focus:outline-none focus:ring-2`}
          placeholder={`Search and select ${label.toLowerCase()}...`}
        />

        {value && editUrl && (
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {showDropdown && (
        <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onSelect(item.id);
                  setSearchValue(`${item.id} | ${item.name} | ${item.phone ?? ''}`);
                  setShowDropdown(false);
                }}
                className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 transition-colors"
              >
                {renderItem(item)}
              </div>
            ))
          ) : (
            <div className="p-3 text-gray-500 text-center">
              {searchValue ? 'No results found' : 'No data available'}
            </div>
          )}
        </div>
      )}

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};