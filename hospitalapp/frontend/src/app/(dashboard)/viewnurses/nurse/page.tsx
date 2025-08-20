"use client"

import React, { useState, useCallback, useEffect } from 'react';
import { Camera, User, MapPin, Briefcase, Calendar, Phone, Mail, Heart, GraduationCap, Shield, Lock, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { useSearchParams } from 'next/navigation';

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

interface NurseData {
    Nurse_Id: string;
    district: string;
    panchayath: string;
    ward_no: string;
    NurseName: string;
    address: string;
    gender: string;
    dob: string;
    age: string;
    BloodGroup: string;
    phone: string;
    email: string;
    specialization: string;
    degree: string;
    experience: string;
    licenseNumber: string;
    department: string;
    Photo: File | null;
    description: string;
}

const NurseRegistrationForm: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isEditMode = searchParams.get('edit') === 'true';
    const nurseId = searchParams.get('id');

    const [formData, setFormData] = useState<NurseData>({
        Nurse_Id: '',
        district: '',
        panchayath: '',
        ward_no: '',
        NurseName: '',
        address: '',
        gender: '',
        dob: '',
        age: '',
        BloodGroup: '',
        phone: '',
        email: '',
        specialization: '',
        degree: '',
        experience: '',
        licenseNumber: '',
        department: '',
        Photo: null,
        description: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [photoFileName, setPhotoFileName] = useState<string>('');
    const [existingPhotoUrl, setExistingPhotoUrl] = useState<string>('');

    const [districts, setDistricts] = useState<District[]>([]);
    const [panchayaths, setPanchayaths] = useState<Panchayath[]>([]);

    const [selectedDistrictId, setSelectedDistrictId] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string>('');
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
    const [isLoading, setIsLoading] = useState(false);

    // Fetch Nurse_Id from API (only for new registrations)
    useEffect(() => {
        if (!isEditMode) {
            const fetchNurseId = async () => {
                try {
                    const response = await API.get<string>('/api/Nurses/get-id'); // expects plain string
                    const nurseId = response.data;

                    setFormData(prev => ({
                        ...prev,
                        Nurse_Id: nurseId
                    }));
                } catch (err) {
                    console.error('Failed to fetch Nurse_Id', err);
                }
            };

            fetchNurseId();
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

    // Fetch existing nurse data for edit mode
    useEffect(() => {
        if (isEditMode && nurseId) {
            const fetchNurseData = async () => {
                setIsLoading(true);
                try {
                    const { data: nurseData } = await API.get<Record<string, any>>(`/api/Nurses/${nurseId}`);

                    const formattedDob = nurseData.dob
                        ? new Date(nurseData.dob).toISOString().split('T')[0]
                        : '';

                    setFormData({
                        Nurse_Id: nurseData.nurse_Id || '',
                        district: nurseData.district || '',
                        panchayath: nurseData.panchayath || '',
                        ward_no: nurseData.ward_no || '',
                        NurseName: nurseData.nurseName || '',
                        address: nurseData.address || '',
                        gender: nurseData.gender || '',
                        dob: formattedDob,
                        age: nurseData.age || '',
                        BloodGroup: nurseData.bloodGroup || '',
                        phone: nurseData.phone || '',
                        email: nurseData.email || '',
                        specialization: nurseData.specialization || '',
                        degree: nurseData.degree || '',
                        experience: nurseData.experience || '',
                        licenseNumber: nurseData.licenseNumber || '',
                        department: nurseData.department || '',
                        Photo: null, // File will be handled separately
                        description: nurseData.description || '',
                    });

                    if (nurseData.photo) {
                        setExistingPhotoUrl(`${API_BASE}/uploads/${nurseData.photo}`);
                        setPhotoFileName(nurseData.photo);
                    }

                    const selectedDistrict = districts.find(d => d.name === nurseData.district);
                    if (selectedDistrict) {
                        setSelectedDistrictId(selectedDistrict.id);
                    }
                } catch (err) {
                    console.error('Error fetching nurse data:', err);
                    setSubmitStatus('error');
                    setSubmitMessage('Error loading nurse data');
                } finally {
                    setIsLoading(false);
                }
            };

            fetchNurseData();
        }
    }, [isEditMode, nurseId, districts]);

    // Update selected district when district data changes in edit mode
    useEffect(() => {
        if (isEditMode && formData.district && districts.length > 0) {
            const selectedDistrict = districts.find(d => d.name === formData.district);
            if (selectedDistrict) {
                setSelectedDistrictId(selectedDistrict.id);
            }
        }
    }, [formData.district, districts, isEditMode]);

    // Update handleFileChange to clear existing photo URL
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, Photo: file }));
        setPhotoFileName(file ? file.name : '');

        // Clear existing photo URL when new file is selected
        if (file) {
            setExistingPhotoUrl('');
        }
    };

    // Update handleSubmit for edit mode
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
            formDataToSend.append('Nurse_Id', formData.Nurse_Id);
            formDataToSend.append('district', formData.district);
            formDataToSend.append('panchayath', formData.panchayath);
            formDataToSend.append('ward_no', formData.ward_no);
            formDataToSend.append('NurseName', formData.NurseName);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('gender', formData.gender);

            // Convert date string to proper format if needed
            const dobDate = new Date(formData.dob);
            formDataToSend.append('dob', dobDate.toISOString());

            formDataToSend.append('age', formData.age.toString());
            formDataToSend.append('bloodGroup', formData.BloodGroup);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('specialization', formData.specialization);
            formDataToSend.append('degree', formData.degree);
            formDataToSend.append('experience', formData.experience);
            formDataToSend.append('licenseNumber', formData.licenseNumber);
            formDataToSend.append('department', formData.department);
            formDataToSend.append('description', formData.description);

            // Append photo file if exists
            if (formData.Photo) {
                formDataToSend.append('Photo', formData.Photo);
            }

            // Determine API endpoint and method based on mode
            const apiUrl = isEditMode
                ? `${API_BASE}/api/Nurses/${nurseId}`
                : `${API_BASE}/api/Nurses`;

            const method = isEditMode ? 'PUT' : 'POST';

            // API call
            const response = await fetch(apiUrl, {
                method: method,
                body: formDataToSend,
            });

            if (response.ok) {
                setSubmitStatus('success');
                setSubmitMessage(isEditMode
                    ? 'Nurse information updated successfully!'
                    : 'Nurse registration submitted successfully!');

                if (!isEditMode) {
                    // Reset form after successful submission (only for new registrations)
                    setFormData({
                        Nurse_Id: '',
                        district: '',
                        panchayath: '',
                        ward_no: '',
                        NurseName: '',
                        address: '',
                        gender: '',
                        dob: '',
                        age: '',
                        BloodGroup: '',
                        phone: '',
                        email: '',
                        specialization: '',
                        degree: '',
                        experience: '',
                        licenseNumber: '',
                        department: '',
                        Photo: null,
                        description: ''
                    });

                    // Fetch new Nurse_Id after successful submission
                    try {
                        const nurseIdResponse = await fetch(`${API_BASE}/api/Nurses/get-id`);
                        if (nurseIdResponse.ok) {
                            const newNurseId = await nurseIdResponse.text();
                            setFormData(prev => ({ ...prev, Nurse_Id: newNurseId }));
                        }
                    } catch (err) {
                        console.error('Failed to fetch new Nurse_Id after reset', err);
                    }
                }

                // Redirect to view page after successful update
                if (isEditMode) {
                    setTimeout(() => {
                        router.push('/viewnurses');
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

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        const requiredFields = ['Nurse_Id', 'NurseName', 'address', 'district', 'panchayath', 'ward_no', 'gender', 'dob', 'phone', 'email', 'specialization', 'degree', 'licenseNumber'];

        requiredFields.forEach(field => {
            if (!formData[field as keyof NurseData]) {
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

        // License number validation (basic format check)
        if (formData.licenseNumber && formData.licenseNumber.length < 5) {
            newErrors.licenseNumber = 'Please enter a valid license number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const inputClasses = (fieldName: string) => `
        w-full px-4 py-3 border-2 rounded-xl text-base transition-all duration-300 bg-gray-50
        focus:outline-none focus:border-pink-600 focus:bg-white focus:shadow-lg focus:-translate-y-0.5
        ${errors[fieldName] ? 'border-red-500' : 'border-gray-200'}
    `;

    // Add loading state
    if (isLoading) {
        return (
            <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-600 mx-auto mb-4"></div>
                    <p className="text-pink-600 text-lg font-semibold">Loading nurse data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">

            {/* Header */}
            <div className="bg-gradient-to-r from-pink-900 to-pink-700 text-white p-4 text-center">
                <div className="flex justify-center items-center gap-3 mb-3">
                    <h1 className="text-3xl font-light mb-3">
                        {isEditMode ? 'Edit Nurse Information' : 'Nurse Registration'}
                    </h1>
                    <Heart className="w-7 h-7 text-pink-200" />
                </div>
                <p className="text-sm text-pink-200">
                    {isEditMode ? 'Update nurse details' : 'Join our dedicated team of healthcare professionals'}
                </p>
            </div>
            <div className="p-5">
                {/* Submit Status Message */}
                {submitMessage && (
                    <div className={`mb-6 p-4 rounded-xl text-center font-semibold ${submitStatus === 'success'
                        ? 'bg-green-100 text-green-800 border border-green-300'
                        : 'bg-red-100 text-red-800 border border-red-300'
                        }`}>
                        {submitMessage}
                    </div>
                )}

                {/* Form */}
                <div className="bg-white rounded-b-2xl shadow-2xl">
                    <div className="space-y-8">
                        {/* Personal Information Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-pink-600">
                            <div className="flex items-center mb-6">
                                <User className="w-6 h-6 text-pink-600 mr-3" />
                                <h3 className="text-6l font-semibold text-pink-900">Personal Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Nurse ID <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="Nurse_Id"
                                        value={formData.Nurse_Id}
                                        onChange={handleInputChange}
                                        className={inputClasses('Nurse_Id')}
                                        placeholder="Auto-generated ID"
                                        readOnly
                                        style={{ backgroundColor: '#f0f4f8', cursor: 'not-allowed' }}
                                    />
                                    {errors.Nurse_Id && <p className="text-red-500 text-sm mt-1">{errors.Nurse_Id}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Nurse Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="NurseName"
                                        value={formData.NurseName}
                                        onChange={handleInputChange}
                                        className={inputClasses('NurseName')}
                                        placeholder="Enter full name"
                                    />
                                    {errors.NurseName && <p className="text-red-500 text-sm mt-1">{errors.NurseName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Age
                                    </label>
                                    <div className={`
                    bg-gradient-to-r from-pink-50 to-pink-100 text-pink-900 p-4 rounded-xl 
                    font-semibold text-center border-2 border-pink-300
                    ${formData.age ? 'from-green-50 to-green-100 text-green-900 border-green-300' : ''}
                    ${formData.age && formData.age.includes('Invalid') ? 'from-red-50 to-red-100 text-red-900 border-red-300' : ''}
                  `}>
                                        {formData.age || 'Age will be calculated automatically'}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Blood Group
                                    </label>
                                    <select
                                        name="BloodGroup"
                                        value={formData.BloodGroup}
                                        onChange={handleInputChange}
                                        className={inputClasses('BloodGroup')}
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
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-pink-600">
                            <div className="flex items-center mb-6">
                                <MapPin className="w-6 h-6 text-pink-600 mr-3" />
                                <h3 className="text-6l font-semibold text-pink-900">Contact Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
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
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-pink-600">
                            <div className="flex items-center mb-6">
                                <Briefcase className="w-6 h-6 text-pink-600 mr-3" />
                                <h3 className="text-6l font-semibold text-pink-900">Professional Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Nursing Degree <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="degree"
                                            value={formData.degree}
                                            onChange={handleInputChange}
                                            className={`${inputClasses('degree')} pl-12`}
                                            placeholder="e.g., GNM, BSc Nursing, MSc Nursing"
                                        />
                                    </div>
                                    {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Specialization <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="specialization"
                                        value={formData.specialization}
                                        onChange={handleInputChange}
                                        className={inputClasses('specialization')}
                                    >
                                        <option value="">Select Specialization</option>
                                        <option value="general_nursing">General Nursing</option>
                                        <option value="critical_care">Critical Care Nursing</option>
                                        <option value="pediatric_nursing">Pediatric Nursing</option>
                                        <option value="maternity_nursing">Maternity Nursing</option>
                                        <option value="surgical_nursing">Surgical Nursing</option>
                                        <option value="cardiac_nursing">Cardiac Nursing</option>
                                        <option value="oncology_nursing">Oncology Nursing</option>
                                        <option value="emergency_nursing">Emergency Nursing</option>
                                        <option value="psychiatric_nursing">Psychiatric Nursing</option>
                                        <option value="geriatric_nursing">Geriatric Nursing</option>
                                        <option value="community_nursing">Community Nursing</option>
                                        <option value="icu_nursing">ICU Nursing</option>
                                        <option value="operation_theater">Operation Theater</option>
                                        <option value="dialysis_nursing">Dialysis Nursing</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Nursing License Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="licenseNumber"
                                        value={formData.licenseNumber}
                                        onChange={handleInputChange}
                                        className={inputClasses('licenseNumber')}
                                        placeholder="Enter nursing license number"
                                    />
                                    {errors.licenseNumber && <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Years of Experience
                                    </label>
                                    <input
                                        type="number"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className={inputClasses('experience')}
                                        placeholder="Enter years of experience"
                                        min="0"
                                        max="50"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Department
                                    </label>
                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        className={inputClasses('department')}
                                    >
                                        <option value="">Select Department</option>
                                        <option value="emergency">Emergency Department</option>
                                        <option value="icu">Intensive Care Unit</option>
                                        <option value="general_medicine">General Medicine</option>
                                        <option value="surgery">Surgery</option>
                                        <option value="pediatrics">Pediatrics</option>
                                        <option value="maternity">Maternity</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="oncology">Oncology</option>
                                        <option value="orthopedics">Orthopedics</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="psychiatry">Psychiatry</option>
                                        <option value="dialysis">Dialysis Unit</option>
                                        <option value="operation_theater">Operation Theater</option>
                                        <option value="outpatient">Outpatient Department</option>
                                        <option value="community_health">Community Health</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Professional Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={inputClasses('description')}
                                        placeholder="Brief description of your professional background, skills, and career objectives"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Photo Upload Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-pink-600">
                            <div className="flex items-center mb-6">
                                <Camera className="w-6 h-6 text-pink-600 mr-3" />
                                <h3 className="text-6l font-semibold text-pink-900">Profile Photo</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide">
                                        Upload Photo
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            id="photo"
                                            name="Photo"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="photo"
                                            className="w-full px-4 py-3 border-2 border-dashed border-pink-300 rounded-xl 
                                            text-center cursor-pointer hover:border-pink-500 hover:bg-pink-50 
                                            transition-all duration-300 bg-white flex flex-col items-center justify-center min-h-[120px]"
                                        >
                                            <Camera className="w-8 h-8 text-pink-400 mb-2" />
                                            <span className="text-pink-600 font-medium">
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

                        {/* Submit Button */}
                        <div className="flex justify-center pt-8">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={`
                                    px-12 py-4 rounded-2xl text-lg font-semibold text-white
                                    transform transition-all duration-300 shadow-xl
                                    ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 hover:scale-105 hover:shadow-2xl active:scale-95'
                                    }
                                `}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                        {isEditMode ? 'Updating...' : 'Submitting...'}
                                    </div>

                                ) : (

                                    isEditMode ? 'Update Nurse' : 'Register Nurse'
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
                                    <Shield className="w-8 h-8 text-pink-600 mr-3" />
                                    <span className="text-lg font-semibold text-pink-600">Secure Registration System</span>
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

export default NurseRegistrationForm;