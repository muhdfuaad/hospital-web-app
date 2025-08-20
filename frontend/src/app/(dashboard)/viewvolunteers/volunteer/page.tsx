"use client"

import React, { useState, useCallback, useEffect } from 'react';
import { Camera, User, MapPin, Briefcase, Calendar, Phone, Mail, Shield, Lock, CheckCircle } from 'lucide-react';
import API from '@/lib/axios';
import { useRouter, useSearchParams } from 'next/navigation';

const API_BASE = API.defaults.baseURL;

interface District {
    id: number;
    name: string;
}

interface Panchayath {
    panchayathId: number;
    panchayathName: string;
    dstId: number;
    dstName: string;
}
interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
}

interface VolunteerData {
    Vol_Id: string;
    district: string;
    panchayath: string;
    ward_no: string;
    VolName: string;
    address: string;
    gender: string;
    dob: string;
    age: string;
    BloodGroop: string;
    phone: string;
    email: string;
    type: string;
    job: string;
    Photo: File | null;
    status: string;
    description: string;
}

const VolunteerRegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<VolunteerData>({
        Vol_Id: '',
        district: '',
        panchayath: '',
        ward_no: '',
        VolName: '',
        address: '',
        gender: '',
        dob: '',
        age: '',
        BloodGroop: '',
        phone: '',
        email: '',
        type: '',
        job: '',
        Photo: null,
        status: '',
        description: ''
    });

    const router = useRouter();
    const searchParams = useSearchParams();
    const isEditMode = searchParams.get('edit') === 'true';
    const volunteerId = searchParams.get('id');
    const [isLoading, setIsLoading] = useState(false);

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [photoFileName, setPhotoFileName] = useState<string>('');
    const [districts, setDistricts] = useState<District[]>([]);
    const [panchayaths, setPanchayaths] = useState<Panchayath[]>([]);
    const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string>('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');

    // // Fetch Vol_Id from API (only for new registrations)
    useEffect(() => {
        if (!isEditMode) {
            const fetchVolId = async () => {
                try {
                    const response = await API.get<string>('/api/Volunteers/get-id'); // Assuming it returns a plain string
                    const volId = response.data;

                    setFormData(prev => ({
                        ...prev,
                        Vol_Id: volId,
                    }));
                } catch (err) {
                    console.error('Failed to fetch Vol_Id', err);
                }
            };

            fetchVolId();
        }
    }, [isEditMode]);

    // Fetch districts and panchayaths from API
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const [dRes, pRes] = await Promise.all([
                    API.get<District[]>('/api/Districts'),
                    API.get<Panchayath[]>('/api/Panchayaths'),
                ]);

                setDistricts(dRes.data);
                setPanchayaths(pRes.data);
            } catch (error) {
                console.error('Failed to fetch districts/panchayaths', error);
            }
        };

        fetchLocations();
    }, []);

    useEffect(() => {
        if (isEditMode && volunteerId) {
            const fetchVolunteerData = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(`${API_BASE}/api/Volunteers/${volunteerId}`);
                    if (response.ok) {
                        const volunteerData = await response.json();

                        // Format the date for the input field
                        const formattedDob = volunteerData.dob ? new Date(volunteerData.dob).toISOString().split('T')[0] : '';

                        setFormData({
                            Vol_Id: volunteerData.vol_Id || '',
                            district: volunteerData.district || '',
                            panchayath: volunteerData.panchayath || '',
                            ward_no: volunteerData.ward_no || '',
                            VolName: volunteerData.volName || '',
                            address: volunteerData.address || '',
                            gender: volunteerData.gender || '',
                            dob: formattedDob,
                            age: volunteerData.age || '',
                            BloodGroop: volunteerData.bloodGroup || '',
                            phone: volunteerData.phone || '',
                            email: volunteerData.email || '',
                            type: volunteerData.type || '',
                            job: volunteerData.job || '',
                            Photo: null, // File will be handled separately
                            status: volunteerData.status || '',
                            description: volunteerData.description || ''
                        });

                        // Set existing photo URL if available
                        if (volunteerData.photo) {
                            setPhotoFileName(volunteerData.photo);
                        }

                        // Set selected district for panchayath filtering
                        const selectedDistrict = districts.find(d => d.name === volunteerData.district);
                        if (selectedDistrict) {
                            setSelectedDistrictId(selectedDistrict.id);
                        }
                    } else {
                        console.error('Failed to fetch volunteer data');
                        setSubmitStatus('error');
                        setSubmitMessage('Failed to load volunteer data for editing');
                    }
                } catch (err) {
                    console.error('Error fetching volunteer data:', err);
                    setSubmitStatus('error');
                    setSubmitMessage('Error loading volunteer data');
                } finally {
                    setIsLoading(false);
                }
            };

            fetchVolunteerData();
        }
    }, [isEditMode, volunteerId, districts]);

    const calculateAge = useCallback((dateOfBirth: string): string => {
        if (!dateOfBirth) return '';

        const dob = new Date(dateOfBirth);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        return age >= 0 ? `${age} years old` : 'Invalid date';
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prev => {
            const updated = { ...prev, [name]: value };

            // Auto-calculate age when DOB changes
            if (name === 'dob') {
                updated.age = calculateAge(value);
            }

            return updated;
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedName = e.target.value;
        const selectedDistrict = districts.find(d => d.name === selectedName);
        setSelectedDistrictId(selectedDistrict?.id || null);

        setFormData(prev => ({
            ...prev,
            district: selectedName,
            panchayath: '', // Clear Panchayath when District changes
        }));

        // Clear district error if it exists
        if (errors.district) {
            setErrors(prev => ({ ...prev, district: '' }));
        }
    };

    const handlePanchayathChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedName = e.target.value;

        setFormData(prev => ({
            ...prev,
            panchayath: selectedName,
        }));

        // Clear panchayath error if it exists
        if (errors.panchayath) {
            setErrors(prev => ({ ...prev, panchayath: '' }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, Photo: file }));
        setPhotoFileName(file ? file.name : '');
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        const requiredFields = ['Vol_Id', 'VolName', 'address', 'district', 'panchayath', 'ward_no', 'gender', 'dob', 'phone', 'email', 'type'];

        requiredFields.forEach(field => {
            if (!formData[field as keyof VolunteerData]) {
                newErrors[field] = 'This field is required';
            }
        });

        // Email validation
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitMessage('');
        setSubmitStatus('');

        try {
            // Create FormData for file upload
            const formDataToSend = new FormData();

            // Append all form fields
            formDataToSend.append('Vol_Id', formData.Vol_Id);
            formDataToSend.append('district', formData.district);
            formDataToSend.append('panchayath', formData.panchayath);
            formDataToSend.append('ward_no', formData.ward_no);
            formDataToSend.append('VolName', formData.VolName);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('gender', formData.gender);

            // Convert date string to proper format if needed
            const dobDate = new Date(formData.dob);
            formDataToSend.append('dob', dobDate.toISOString());

            formDataToSend.append('age', formData.age.toString());
            formDataToSend.append('bloodGroup', formData.BloodGroop);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('type', formData.type);
            formDataToSend.append('job', formData.job);
            formDataToSend.append('status', formData.status || 'Active');
            formDataToSend.append('description', formData.description);

            // Append photo file if exists
            // Append photo file only if it's an actual File object
            if (formData.Photo instanceof File) {
                formDataToSend.append('Photo', formData.Photo);
            }


            // Determine API endpoint and method based on mode
            const apiUrl = isEditMode
                ? `${API_BASE}/api/Volunteers/${volunteerId}`
                : `${API_BASE}/api/Volunteers`;

            const method = isEditMode ? 'PUT' : 'POST';

            // API call
            const response = await fetch(apiUrl, {
                method: method,
                body: formDataToSend,
            });

            if (response.ok) {
                setSubmitStatus('success');
                setSubmitMessage(isEditMode
                    ? 'Volunteer information updated successfully!'
                    : 'Volunteer registration submitted successfully!');

                if (!isEditMode) {
                    // Reset form after successful submission (only for new registrations)
                    setFormData({
                        Vol_Id: '',
                        district: '',
                        panchayath: '',
                        ward_no: '',
                        VolName: '',
                        address: '',
                        gender: '',
                        dob: '',
                        age: '',
                        BloodGroop: '',
                        phone: '',
                        email: '',
                        type: '',
                        job: '',
                        Photo: null,
                        status: 'Active',
                        description: ''
                    });

                    // Fetch new Vol_Id after successful submission
                    try {
                        const volIdResponse = await fetch(`${API_BASE}/api/Volunteers/get-id`);
                        if (volIdResponse.ok) {
                            const newVolId = await volIdResponse.text();
                            setFormData(prev => ({ ...prev, Vol_Id: newVolId }));
                        }
                    } catch (err) {
                        console.error('Failed to fetch new Vol_Id after reset', err);
                    }
                }

                // Redirect to view page after successful update
                if (isEditMode) {
                    setTimeout(() => {
                        router.push('/viewvolunteers');
                    }, 2000);
                }

            } else {
                // Handle HTTP error responses
                const errorResult = await response.text();
                setSubmitStatus('error');
                setSubmitMessage(`Failed to ${isEditMode ? 'update' : 'submit'} registration: ${response.status} ${response.statusText}`);
                console.error('HTTP Error:', response.status, errorResult);
            }

        } catch (error) {
            // Handle network or other errors
            setSubmitStatus('error');
            setSubmitMessage('Network error occurred. Please check your connection and try again.');
            console.error('Network Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Add loading screen (place this before your main return statement)
    if (isLoading) {
        return (
            <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-blue-600 text-lg font-semibold">Loading volunteer data...</p>
                </div>
            </div>
        );
    }

    const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 border-2 rounded-xl text-base transition-all duration-300 bg-gray-50
    focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-lg focus:-translate-y-0.5
    ${errors[fieldName] ? 'border-red-500' : 'border-gray-200'}
  `;

    return (
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">

            {/* Header */}
            <div className="bg-gradient-to-r from-red-900 to-red-700 text-white p-4 text-center sm:p-6 shadow-lg ">
                <div className="flex justify-center items-center gap-3 mb-3">
                    <h1 className="text-3xl font-light mb-3">
                        {isEditMode ? 'Edit Volunteer Information' : 'Volunteer Registration'}
                    </h1>
                    <User className="w-7 h-7 text-red-200" />
                </div>
                <p className="text-sm text-red-200">
                    {isEditMode ? 'Update volunteer details' : 'Join our team of healthcare volunteers'}
                </p>

            </div>
            <div className="p-5">
                {/* Form */}
                <div className="bg-white rounded-b-2xl shadow-2xl">
                    <div className="space-y-8">
                        {/* Personal Information Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-red-600">
                            <div className="flex items-center mb-6">
                                <User className="w-6 h-6 text-red-600 mr-3" />
                                <h3 className="text-6l font-semibold text-red-900">Personal Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Volunteer ID <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="Vol_Id"
                                        value={formData.Vol_Id}
                                        onChange={handleInputChange}
                                        className={inputClasses('Vol_Id')}
                                        placeholder="Auto-generated ID"
                                        readOnly
                                        style={{ backgroundColor: '#f0f4f8', cursor: 'not-allowed' }}
                                    />
                                    {errors.Vol_Id && <p className="text-red-500 text-sm mt-1">{errors.Vol_Id}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Volunteer Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="VolName"
                                        value={formData.VolName}
                                        onChange={handleInputChange}
                                        className={inputClasses('VolName')}
                                        placeholder="Enter full name"
                                    />
                                    {errors.VolName && <p className="text-red-500 text-sm mt-1">{errors.VolName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Gender <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className={inputClasses('gender')}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Date of Birth <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                            className={`${inputClasses('dob')} pl-12`}
                                        />
                                    </div>
                                    {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Age
                                    </label>
                                    <div className={`
                    bg-gradient-to-r from-red-50 to-red-100 text-red-900 p-4 rounded-xl 
                    font-semibold text-center border-2 border-red-300
                    ${formData.age ? 'from-green-50 to-green-100 text-green-900 border-green-300' : ''}
                    ${formData.age && formData.age.includes('Invalid') ? 'from-red-50 to-red-100 text-red-900 border-red-300' : ''}
                  `}>
                                        {formData.age || 'Age will be calculated automatically'}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Blood Group
                                    </label>
                                    <select
                                        name="BloodGroop"
                                        value={formData.BloodGroop}
                                        onChange={handleInputChange}
                                        className={inputClasses('BloodGroop')}
                                    >
                                        <option value="">Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-red-600">
                            <div className="flex items-center mb-6">
                                <MapPin className="w-6 h-6 text-red-600 mr-3" />
                                <h3 className="text-xl font-semibold text-red-900">Contact Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={inputClasses('address')}
                                        placeholder="Enter your complete address"
                                    />
                                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        District <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="district"
                                        value={formData.district}
                                        onChange={handleDistrictChange}
                                        className={inputClasses('district')}
                                    >
                                        <option value="">Select District</option>
                                        {districts.map(d => (
                                            <option key={d.id} value={d.name}>
                                                {d.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Panchayath <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="panchayath"
                                        value={formData.panchayath}
                                        onChange={handlePanchayathChange}
                                        className={inputClasses('panchayath')}
                                        disabled={!selectedDistrictId}
                                    >
                                        <option value="">
                                            {selectedDistrictId ? "Select Panchayath" : "Select District First"}
                                        </option>
                                        {panchayaths
                                            .filter(p => p.dstId === selectedDistrictId)
                                            .map(p => (
                                                <option key={p.panchayathId} value={p.panchayathName}>
                                                    {p.panchayathName}
                                                </option>
                                            ))}
                                    </select>
                                    {errors.panchayath && <p className="text-red-500 text-sm mt-1">{errors.panchayath}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Ward Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="ward_no"
                                        value={formData.ward_no}
                                        onChange={handleInputChange}
                                        className={inputClasses('ward_no')}
                                        placeholder="Enter ward number"
                                    />
                                    {errors.ward_no && <p className="text-red-500 text-sm mt-1">{errors.ward_no}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`${inputClasses('phone')} pl-12`}
                                            placeholder="Enter phone number"
                                            maxLength={10}
                                            onInput={(e) => {
                                                const input = e.target as HTMLInputElement;
                                                input.value = input.value.replace(/\D/g, '').slice(0, 10);
                                            }}
                                        />
                                    </div>
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`${inputClasses('email')} pl-12`}
                                            placeholder="Enter email address"
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Professional Information Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-red-600">
                            <div className="flex items-center mb-6">
                                <Briefcase className="w-6 h-6 text-red-600 mr-3" />
                                <h3 className="text-xl font-semibold text-red-900">Professional Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Volunteer Type <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        className={inputClasses('type')}
                                    >
                                        <option value="">Select Type</option>
                                        <option value="community">Community Service</option>
                                        <option value="education">Education</option>
                                        <option value="healthcare">Healthcare</option>
                                        <option value="environment">Environment</option>
                                        <option value="emergency">Emergency Response</option>
                                        <option value="youth">Youth Development</option>
                                        <option value="elderly">Elderly Care</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Current Job/Occupation
                                    </label>
                                    <input
                                        type="text"
                                        name="job"
                                        value={formData.job}
                                        onChange={handleInputChange}
                                        className={inputClasses('job')}
                                        placeholder="Enter your occupation"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Status
                                    </label>
                                    <select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className={inputClasses('status')}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                        <option value="pending">Pending</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
                                        Description/Additional Information
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={inputClasses('description')}
                                        placeholder="Tell us about your interests, skills, and why you want to volunteer..."
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Volunteer Photo Upload Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-red-600">
                            <div className="flex items-center mb-6">
                                <Camera className="w-6 h-6 text-red-600 mr-3" />
                                <h3 className="text-xl font-semibold text-red-900">Profile Photo</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">
                                        Upload Photo
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="volunteer-photo"
                                            name="Photo"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="volunteer-photo"
                                            className="w-full px-4 py-3 border-2 border-dashed border-red-600 rounded-xl 
                        text-center cursor-pointer hover:border-red-600 hover:bg-pink-50 
                        transition-all duration-300 bg-white flex flex-col items-center justify-center min-h-[120px]"
                                        >
                                            <Camera className="w-8 h-8 text-red-600 mb-2" />
                                            <span className="text-red-600 font-medium">
                                                {photoFileName || "Click to upload profile photo"}
                                            </span>
                                            <span className="text-sm text-gray-500 mt-1">
                                                Supported formats: JPG, PNG, GIF (Max 5MB)
                                            </span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Volunteer Submit Button */}
                        <div className="flex justify-center pt-8 ">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`
            px-12 py-4 rounded-2xl text-lg font-semibold text-white
            transform transition-all duration-300 shadow-xl
            ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-pink-700 hover:to-pink-800 hover:scale-105 hover:shadow-2xl active:scale-95'
                                    }
        `}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                        {isEditMode ? 'Updating...' : 'Registering...'}
                                    </div>
                                ) : (
                                    isEditMode ? 'Update Volunteer' : 'Register Volunteer'
                                )}
                            </button>
                        </div>

                        <div className="mt-6 text-center text-gray-600">
                            <p className="text-sm">
                                All required fields marked with <span className="text-red-500">*</span> must be completed
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-8 text-center">
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <div className="flex items-center justify-center mb-4">
                                    <Shield className="w-8 h-8 text-red-600 mr-3" />
                                    <span className="text-lg font-semibold text-red-900">Secure Registration System</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Your information is securely processed and stored in compliance with healthcare data protection standards.
                                </p>
                                <div className="flex justify-center items-center mt-4 space-x-6 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Lock className="w-4 h-4 mr-1" />
                                        Encrypted
                                    </div>
                                    <div className="flex items-center">
                                        <Shield className="w-4 h-4 mr-1" />
                                        HIPAA Compliant
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="w-4 h-4 mr-1" />
                                        Verified
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRegistrationForm;