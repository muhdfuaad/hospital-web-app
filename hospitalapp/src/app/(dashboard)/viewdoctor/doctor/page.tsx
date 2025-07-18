"use client"

import React, { useState, useCallback, useEffect } from 'react';
import { Camera, User, MapPin, Briefcase, Calendar, Phone, Mail, Stethoscope, GraduationCap, Shield, Lock, CheckCircle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

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

interface DoctorData {
    Doc_Id: string;
    district: string;
    panchayath: string;
    ward_no: string;
    DocName: string;
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

const DoctorRegistrationForm: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isEditMode = searchParams.get('edit') === 'true';
    const doctorId = searchParams.get('id');

    const [formData, setFormData] = useState<DoctorData>({
        Doc_Id: '',
        district: '',
        panchayath: '',
        ward_no: '',
        DocName: '',
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


    // Fetch existing doctor data for edit mode
    useEffect(() => {
        if (isEditMode && doctorId) {
            const fetchDoctorData = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(`https://localhost:7112/api/Doctors/${doctorId}`);
                    if (response.ok) {
                        const doctorData = await response.json();

                        // Format the date for the input field
                        const formattedDob = doctorData.dob ? new Date(doctorData.dob).toISOString().split('T')[0] : '';

                        setFormData({
                            Doc_Id: doctorData.doc_Id || '',
                            district: doctorData.district || '',
                            panchayath: doctorData.panchayath || '',
                            ward_no: doctorData.ward_no || '',
                            DocName: doctorData.docName || '',
                            address: doctorData.address || '',
                            gender: doctorData.gender || '',
                            dob: formattedDob,
                            age: doctorData.age || '',
                            BloodGroup: doctorData.bloodGroup || '',
                            phone: doctorData.phone || '',
                            email: doctorData.email || '',
                            specialization: doctorData.specialization || '',
                            degree: doctorData.degree || '',
                            experience: doctorData.experience || '',
                            licenseNumber: doctorData.licenseNumber || '',
                            department: doctorData.department || '',
                            Photo: null, // File will be handled separately
                            description: doctorData.description || ''
                        });

                        // Set existing photo URL if available
                        if (doctorData.photo) {
                            setExistingPhotoUrl(`https://localhost:7112/uploads/${doctorData.photo}`);
                            setPhotoFileName(doctorData.photo);
                        }

                        // Set selected district for panchayath filtering
                        const selectedDistrict = districts.find(d => d.name === doctorData.district);
                        if (selectedDistrict) {
                            setSelectedDistrictId(selectedDistrict.id);
                        }
                    } else {
                        console.error('Failed to fetch doctor data');
                        setSubmitStatus('error');
                        setSubmitMessage('Failed to load doctor data for editing');
                    }
                } catch (err) {
                    console.error('Error fetching doctor data:', err);
                    setSubmitStatus('error');
                    setSubmitMessage('Error loading doctor data');
                } finally {
                    setIsLoading(false);
                }
            };

            fetchDoctorData();
        }
    }, [isEditMode, doctorId, districts]);

    // Fetch Doc_Id from API (only for new registrations)
    useEffect(() => {
        if (!isEditMode) {
            const fetchDocId = async () => {
                try {
                    const response = await fetch('https://localhost:7112/api/Doctors/get-id');
                    if (response.ok) {
                        const docId = await response.text();
                        setFormData(prev => ({ ...prev, Doc_Id: docId }));
                    } else {
                        console.error('Failed to fetch Doc_Id - API response not OK');
                    }
                } catch (err) {
                    console.error('Failed to fetch Doc_Id', err);
                }
            };

            fetchDocId();
        }
    }, [isEditMode]);

    // Fetch districts and panchayaths from API
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const [dRes, pRes] = await Promise.all([
                    fetch('https://localhost:7112/api/Districts'),
                    fetch('https://localhost:7112/api/Panchayaths'),
                ]);

                if (dRes.ok && pRes.ok) {
                    const dData = await dRes.json();
                    const pData = await pRes.json();
                    setDistricts(dData);
                    setPanchayaths(pData);
                } else {
                    console.error('Failed to fetch districts/panchayaths - API response not OK');
                }
            } catch (err) {
                console.error('Failed to fetch districts/panchayaths', err);
            }
        };

        fetchLocations();
    }, []);

    // Update selected district when district data changes in edit mode
    useEffect(() => {
        if (isEditMode && formData.district && districts.length > 0) {
            const selectedDistrict = districts.find(d => d.name === formData.district);
            if (selectedDistrict) {
                setSelectedDistrictId(selectedDistrict.id);
            }
        }
    }, [formData.district, districts, isEditMode]);

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

        // Clear existing photo URL when new file is selected
        if (file) {
            setExistingPhotoUrl('');
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        const requiredFields = ['Doc_Id', 'DocName', 'address', 'district', 'panchayath', 'ward_no', 'gender', 'dob', 'phone', 'email', 'specialization', 'degree', 'licenseNumber'];

        requiredFields.forEach(field => {
            if (!formData[field as keyof DoctorData]) {
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
            formDataToSend.append('Doc_Id', formData.Doc_Id);
            formDataToSend.append('district', formData.district);
            formDataToSend.append('panchayath', formData.panchayath);
            formDataToSend.append('ward_no', formData.ward_no);
            formDataToSend.append('DocName', formData.DocName);
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
                ? `https://localhost:7112/api/Doctors/${doctorId}`
                : 'https://localhost:7112/api/Doctors';

            const method = isEditMode ? 'PUT' : 'POST';

            // API call
            const response = await fetch(apiUrl, {
                method: method,
                body: formDataToSend,
            });

            if (response.ok) {
                setSubmitStatus('success');
                setSubmitMessage(isEditMode
                    ? 'Doctor information updated successfully!'
                    : 'Doctor registration submitted successfully!');

                if (!isEditMode) {
                    // Reset form after successful submission (only for new registrations)
                    setFormData({
                        Doc_Id: '',
                        district: '',
                        panchayath: '',
                        ward_no: '',
                        DocName: '',
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

                    // Fetch new Doc_Id after successful submission
                    try {
                        const docIdResponse = await fetch('https://localhost:7112/api/Doctors/get-id');
                        if (docIdResponse.ok) {
                            const newDocId = await docIdResponse.text();
                            setFormData(prev => ({ ...prev, Doc_Id: newDocId }));
                        }
                    } catch (err) {
                        console.error('Failed to fetch new Doc_Id after reset', err);
                    }
                }

                // Redirect to view page after successful update
                if (isEditMode) {
                    setTimeout(() => {
                        router.push('/viewdoctor');
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

    const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 border-2 rounded-xl text-base transition-all duration-300 bg-gray-50
    focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-lg focus:-translate-y-0.5
    ${errors[fieldName] ? 'border-red-500' : 'border-gray-200'}
  `;

    if (isLoading) {
        return (
            <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-blue-600 text-lg font-semibold">Loading doctor data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 text-center">
                <div className="flex justify-center mb-4">
                    <Stethoscope className="w-16 h-16 text-blue-200" />
                </div>
                <h1 className="text-4xl font-light mb-3">
                    {isEditMode ? 'Edit Doctor Information' : 'Doctor Registration'}
                </h1>
                <p className="text-xl text-blue-200">
                    {isEditMode ? 'Update doctor details' : 'Join our medical team of healthcare professionals'}
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
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <User className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-xl font-semibold text-blue-900">Personal Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Doctor ID <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="Doc_Id"
                                        value={formData.Doc_Id}
                                        onChange={handleInputChange}
                                        className={inputClasses('Doc_Id')}
                                        placeholder="Auto-generated ID"
                                        readOnly
                                        style={{ backgroundColor: '#f0f4f8', cursor: 'not-allowed' }}
                                    />
                                    {errors.Doc_Id && <p className="text-red-500 text-sm mt-1">{errors.Doc_Id}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Doctor Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="DocName"
                                        value={formData.DocName}
                                        onChange={handleInputChange}
                                        className={inputClasses('DocName')}
                                        placeholder="Enter full name"
                                    />
                                    {errors.DocName && <p className="text-red-500 text-sm mt-1">{errors.DocName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Age
                                    </label>
                                    <div className={`
                    bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 p-4 rounded-xl 
                    font-semibold text-center border-2 border-blue-300
                    ${formData.age ? 'from-green-50 to-green-100 text-green-900 border-green-300' : ''}
                    ${formData.age && formData.age.includes('Invalid') ? 'from-red-50 to-red-100 text-red-900 border-red-300' : ''}
                  `}>
                                        {formData.age || 'Age will be calculated automatically'}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-xl font-semibold text-blue-900">Contact Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-xl font-semibold text-blue-900">Professional Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Medical Degree <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="degree"
                                            value={formData.degree}
                                            onChange={handleInputChange}
                                            className={`${inputClasses('degree')} pl-12`}
                                            placeholder="e.g., MBBS, MD, MS"
                                        />
                                    </div>
                                    {errors.degree && <p className="text-red-500 text-sm mt-1">{errors.degree}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Specialization <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="specialization"
                                        value={formData.specialization}
                                        onChange={handleInputChange}
                                        className={inputClasses('specialization')}
                                    >
                                        <option value="">Select Specialization</option>
                                        <option value="general_medicine">General Medicine</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="orthopedics">Orthopedics</option>
                                        <option value="pediatrics">Pediatrics</option>
                                        <option value="gynecology">Gynecology</option>
                                        <option value="dermatology">Dermatology</option>
                                        <option value="psychiatry">Psychiatry</option>
                                        <option value="radiology">Radiology</option>
                                        <option value="anesthesiology">Anesthesiology</option>
                                        <option value="emergency_medicine">Emergency Medicine</option>
                                        <option value="surgery">Surgery</option>
                                        <option value="oncology">Oncology</option>
                                        <option value="ophthalmology">Ophthalmology</option>
                                        <option value="ent">ENT</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Medical License Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="licenseNumber"
                                        value={formData.licenseNumber}
                                        onChange={handleInputChange}
                                        className={inputClasses('licenseNumber')}
                                        placeholder="Enter medical license number"
                                    />
                                    {errors.licenseNumber && <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
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
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Department
                                    </label>
                                    <select
                                        name="department"
                                        value={formData.department}
                                        onChange={handleInputChange}
                                        className={inputClasses('department')}
                                    >
                                        <option value="">Select Department</option>
                                        <option value="outpatient">Outpatient Department (OPD)</option>
                                        <option value="inpatient">Inpatient Department (IPD)</option>
                                        <option value="emergency">Emergency Department</option>
                                        <option value="icu">Intensive Care Unit (ICU)</option>
                                        <option value="surgery">Surgery Department</option>
                                        <option value="laboratory">Laboratory</option>
                                        <option value="radiology">Radiology Department</option>
                                        <option value="pharmacy">Pharmacy</option>
                                        <option value="administration">Administration</option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                        Professional Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className={inputClasses('description')}
                                        placeholder="Brief description of your professional background, achievements, or areas of interest"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Photo Upload Section */}
                        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
                            <div className="flex items-center mb-6">
                                <Camera className="w-6 h-6 text-blue-600 mr-3" />
                                <h3 className="text-xl font-semibold text-blue-900">Profile Photo</h3>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
                                    Upload Photo
                                </label>
                                <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
                                    <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                    <input
                                        type="file"
                                        name="Photo"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        className="hidden"
                                        id="photo-upload"
                                    />
                                    <label
                                        htmlFor="photo-upload"
                                        className="cursor-pointer inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                                    >
                                        Choose Photo
                                    </label>
                                    {photoFileName && (
                                        <p className="mt-3 text-blue-800 font-medium">
                                            Selected: {photoFileName}
                                        </p>
                                    )}
                                    <p className="text-sm text-blue-600 mt-2">
                                        Supported formats: JPG, PNG, GIF (Max: 5MB)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-10 text-center ">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`
        px-12 py-4 rounded-xl font-bold text-lg text-white shadow-lg transform transition-all duration-300
        ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:-translate-y-1 active:translate-y-0'
                                }
    `}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                    {isEditMode ? 'Updating...' : 'Submitting...'}
                                </div>
                            ) : (
                                isEditMode ? 'Update Doctor' : 'Register Doctor'
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
                                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                                <span className="text-lg font-semibold text-blue-900">Secure Registration System</span>
                            </div>
                            <p className="text-gray-600">
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
    );
};

export default DoctorRegistrationForm;