'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import API from '@/lib/axios';
import { Building2, User, MapPin, Phone, Mail, FileText, Percent, Hash, CreditCard, MessageCircle, Home, Navigation } from 'lucide-react';

interface FormData {
    name: string;
    accNo: string;
    address: string;
    location: string;
    post: string;
    pin: string;
    phone: string;
    whatsapp: string;
    email: string;
    type: string;
    gstNo: string;
    discPercentage: string;
    stopped: string;
    status: string;
}

interface SupplierType {
    supplierTypeId: number;
    typeName: string;
}

interface SupplierData {
    accNo?: string;
    name?: string;
    address?: string;
    location?: string;
    post?: string;
    pin?: string;
    phone?: string;
    whatsapp?: string;
    email?: string;
    supplierTypeId?: number;
    gstNo?: string;
    discPercentage?: number;
    stopped?: string;
    status?: string;
}


interface FormErrors {
    [key: string]: string;
}

interface TypeOption {
    id: number;
    name: string;
}

interface InputFieldProps {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    name: keyof FormData;
    type?: string;
    required?: boolean;
    className?: string;
    maxLength?: number;
    min?: string;
    max?: string;
    step?: string;
    style?: React.CSSProperties;
    inputMode?: 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | 'none'; // ✅ Add this line

    // 👇 Add these:
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}
interface TextAreaFieldProps {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    name: keyof FormData;
    required?: boolean;
    className?: string;
    rows?: number;

    // 👇 Add these:
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
}

// Fixed InputField component - moved outside to prevent recreation
const InputField: React.FC<InputFieldProps & {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}> = ({
    icon: Icon,
    label,
    name,
    type = 'text',
    required = false,
    className = '',
    value,
    onChange,
    error,
    ...props
}) => (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <div className="bg-gray-100 p-1 rounded">
                        <Icon className="h-4 w-4 text-gray-500" />
                    </div>
                </div>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`w-full pl-12 pr-4 py-2 border-2 rounded-md transition-all duration-200 ${error ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-200`}
                    {...props}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );

// Fixed TextAreaField component - moved outside to prevent recreation
const TextAreaField: React.FC<TextAreaFieldProps & {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
}> = ({
    icon: Icon,
    label,
    name,
    required = false,
    className = '',
    rows = 2,
    value,
    onChange,
    error
}) => (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                    <div className="bg-gray-100 p-1 rounded">
                        <Icon className="h-4 w-4 text-gray-500" />
                    </div>
                </div>
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                    className={`w-full pl-12 pr-4 py-2 border-2 rounded-md transition-all duration-200 ${error ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                        } focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none`}
                />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );

const SupplierForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        accNo: '',
        address: '',
        location: '',
        post: '',
        pin: '',
        phone: '',
        whatsapp: '',
        email: '',
        type: '',
        gstNo: '',
        discPercentage: '',
        stopped: 'N',
        status: '1'
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const editId = searchParams.get('edit');
    const router = useRouter();

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [isEditMode, setIsEditMode] = useState(false);

    const [showTypeModal, setShowTypeModal] = useState(false);
    const [newType, setNewType] = useState('');
    const [types, setTypes] = useState<TypeOption[]>([
    ]);

    // Fixed input change handler - no more re-rendering issues
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const fieldName = name as keyof FormData;

        let updatedValue = value;

        // Restrict phone and whatsapp fields to numeric values with max 10 digits
        if (fieldName === 'phone' || fieldName === 'whatsapp') {
            updatedValue = value.replace(/\D/g, '').slice(0, 10); // Only digits, max 10
        }

        setFormData(prev => ({ ...prev, [fieldName]: updatedValue }));

        // Clear error when typing
        setErrors(prev => {
            if (prev[fieldName]) {
                const newErrors = { ...prev };
                delete newErrors[fieldName];
                return newErrors;
            }
            return prev;
        });
    };

    // Fixed select change handler - simplified logic
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setFormData(prev => ({ ...prev, type: value }));

        setErrors(prev => {
            if (prev.type) {
                const newErrors = { ...prev };
                delete newErrors.type;
                return newErrors;
            }
            return prev;
        });
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Supplier name is required';
        if (!formData.accNo.trim()) newErrors.accNo = 'Supplier ID is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        if (!formData.pin.trim()) newErrors.pin = 'PIN code is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.type || formData.type === '') {
            newErrors.type = 'Supplier type is required';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation
        const phoneRegex = /^\d{10}$/;
        if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        // GST validation
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
        if (formData.gstNo && !gstRegex.test(formData.gstNo)) {
            newErrors.gstNo = 'Please enter a valid GST number';
        }

        // PIN validation
        const pinRegex = /^\d{6}$/;
        if (formData.pin && !pinRegex.test(formData.pin)) {
            newErrors.pin = 'Please enter a valid 6-digit PIN code';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        async function fetchSupplierTypesAndSupplierData() {
            try {
                // ✅ Step 1: Fetch supplier types
                const typesRes = await API.get<SupplierType[]>('/api/Suppliers/types');

                const mappedTypes = typesRes.data.map((type) => ({
                    id: type.supplierTypeId,
                    name: type.typeName,
                }));

                setTypes(mappedTypes);

                // ✅ Step 2: Fetch supplier data for editing
                if (editId) {
                    setIsEditMode(true);

                    const res = await API.get<SupplierData>(`/api/Suppliers/${editId}`);
                    const data = res.data;

                    setFormData({
                        accNo: data.accNo ?? '',
                        name: data.name ?? '',
                        address: data.address ?? '',
                        location: data.location ?? '',
                        post: data.post ?? '',
                        pin: data.pin ?? '',
                        phone: data.phone ?? '',
                        whatsapp: data.whatsapp ?? '',
                        email: data.email ?? '',
                        type: data.supplierTypeId?.toString() ?? '',
                        gstNo: data.gstNo ?? '',
                        discPercentage: data.discPercentage?.toString() ?? '',
                        stopped: data.stopped ?? 'N',
                        status: data.status ?? '1',
                    });
                }
            } catch (error) {
                console.error('Supplier types or supplier fetch error:', error);
            }
        }

        fetchSupplierTypesAndSupplierData();
    }, [editId]);

    const handleAddType = async () => {
        const trimmed = newType.trim();

        if (!trimmed) {
            alert('Please enter a valid supplier type.');
            return;
        }

        try {
            const response = await fetch('https://localhost:7112/api/Suppliers/types', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ TypeName: trimmed }) // ✅ use capitalized key matching backend DTO
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error('Failed to add type:', errText);
                alert(`Failed to add type: ${errText}`);
                return;
            }

            const newTypeData = await response.json();

            const newEntry = {
                id: newTypeData.supplierTypeId, // ✅ correct property name from backend response
                name: newTypeData.typeName
            };

            // Add new type to list
            setTypes(prev => [...prev, newEntry]);

            // Set it as selected
            setFormData(prev => ({
                ...prev,
                type: newEntry.id.toString()
            }));

            // Reset modal state
            setNewType('');
            setShowTypeModal(false);

        } catch (error) {
            console.error('Error adding type:', error);
            alert('Something went wrong while adding the type.');
        }
    };

    const handleSubmit = async (): Promise<void> => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        const supplierPayload = {
            accNo: formData.accNo,
            name: formData.name,
            address: formData.address,
            location: formData.location,
            post: formData.post,
            pin: formData.pin,
            phone: formData.phone,
            whatsapp: formData.whatsapp,
            email: formData.email,
            supplierTypeId: formData.type ? parseInt(formData.type) : null, // assuming dropdown gives typeId as string
            gstNo: formData.gstNo,
            discPercentage: formData.discPercentage?.toString() || "0"
        };

        try {
            const endpoint = editId
                ? `https://localhost:7112/api/Suppliers/${editId}`
                : 'https://localhost:7112/api/Suppliers';

            const response = await fetch(endpoint, {
                method: editId ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    editId
                        ? { id: editId, ...supplierPayload } // For PUT, include ID
                        : supplierPayload
                )
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to save supplier.');
            }

            // ✅ Success: show only success message
            setSuccessMessage(editId ? '✅ Medicine updated successfully!' : '✅ Medicine added successfully!');
            setTimeout(() => setSuccessMessage(''), 5000);

            setTimeout(() => router.push('/Suppliers'), 600);

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-8">
                        {/* Optional Decorative Icon */}
                        <div className="absolute top-4 right-4 opacity-20 text-6xl">
                        </div>

                        <div className="text-center">
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide drop-shadow-lg animate-fade-in-up">
                                Supplier Registration
                            </h1>
                            <p className="mt-2 text-sm sm:text-base text-white/80">
                                Fill in the details to register a new supplier!
                            </p>
                        </div>
                    </div>


                    <div className="w-full px-8 py-8">
                        {/* Form Container */}
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 w-full">
                            <div className="p-8 space-y-8">
                                {/* Basic Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                        Basic Information
                                    </h3>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <InputField
                                            icon={Hash}
                                            label="Acc No :"
                                            name="accNo"
                                            required
                                            className="flex-1 sm:flex-none"
                                            style={{ flexBasis: '20%' }}
                                            value={formData.accNo}
                                            onChange={handleInputChange}
                                            error={errors.accNo}
                                        />
                                        <InputField
                                            icon={User}
                                            label="Supplier Name"
                                            name="name"
                                            required
                                            className="flex-1"
                                            style={{ flexBasis: '45%' }}
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            error={errors.name}
                                        />
                                        <div className="flex-1 sm:flex-none" style={{ flexBasis: '35%' }}>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Supplier Type <span className="text-red-500">*</span>
                                            </label>
                                            <div className="flex gap-2">
                                                <div className="relative flex-1">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <div className="bg-gray-100 p-1 rounded">
                                                            <Building2 className="h-4 w-4 text-gray-500" />
                                                        </div>
                                                    </div>
                                                    <select
                                                        name="type"
                                                        value={formData.type}
                                                        onChange={handleSelectChange}
                                                        className={`w-full pl-12 pr-4 py-2 border-2 rounded-md transition-all duration-200 ${errors.type ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-blue-500'
                                                            } focus:outline-none focus:ring-2 focus:ring-blue-200`}
                                                    >
                                                        <option value="">Select Type</option>
                                                        {types.map(type => (
                                                            <option key={type.id} value={type.id}>
                                                                {type.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowTypeModal(true)}
                                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md font-medium transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Related Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                        Related Information
                                    </h3>

                                    <TextAreaField
                                        icon={Home}
                                        label="Address"
                                        name="address"
                                        required
                                        className="w-full"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        error={errors.address}
                                    />

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <InputField
                                            icon={MapPin}
                                            label="Location"
                                            name="location"
                                            required
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            error={errors.location}
                                        />
                                        <InputField
                                            icon={Building2}
                                            label="Post Office"
                                            name="post"
                                            value={formData.post}
                                            onChange={handleInputChange}
                                            error={errors.post}
                                        />
                                        <InputField
                                            icon={Navigation}
                                            label="PIN Code"
                                            name="pin"
                                            required
                                            maxLength={6}
                                            value={formData.pin}
                                            onChange={handleInputChange}
                                            error={errors.pin}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <InputField
                                        icon={Phone}
                                        label="Phone Number"
                                        name="phone"
                                        type="text"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        error={errors.phone}
                                        maxLength={10}
                                        inputMode="numeric"
                                    />

                                    <InputField
                                        icon={MessageCircle}
                                        label="WhatsApp Number"
                                        name="whatsapp"
                                        type="text"
                                        value={formData.whatsapp}
                                        onChange={handleInputChange}
                                        error={errors.whatsapp}
                                        maxLength={10}
                                        inputMode="numeric"
                                    />
                                    <InputField
                                        icon={Mail}
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        error={errors.email}
                                    />
                                </div>


                                {/* Business Information */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                        Business Information
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <InputField
                                            icon={FileText}
                                            label="GST Number"
                                            name="gstNo"
                                            value={formData.gstNo}
                                            onChange={handleInputChange}
                                            error={errors.gstNo}
                                        />
                                        <InputField
                                            icon={Percent}
                                            label="Discount Percentage"
                                            name="discPercentage"
                                            step="0.01"
                                            value={formData.discPercentage}
                                            onChange={handleInputChange}
                                            error={errors.discPercentage}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div className="w-full max-w-md">
                                        {errorMessage && (
                                            <div className="mb-4 text-sm text-red-600 font-semibold bg-red-100 border border-red-300 p-2 rounded text-center">
                                                {errorMessage}
                                            </div>
                                        )}
                                        {successMessage && (
                                            <div className="bg-green-100 text-green-800 p-2 rounded mb-4 shadow text-sm font-medium text-center">
                                                {successMessage}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center pt-6">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                        <span className="relative flex items-center">
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <CreditCard className="mr-2 h-5 w-5" />
                                                    {isEditMode ? 'Update Supplier' : 'Register Supplier'}
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Type Modal */}
            {showTypeModal && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
                        <div className="bg-gray-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
                            <h2 className="text-lg font-medium">Add New Type</h2>
                            <button
                                onClick={() => setShowTypeModal(false)}
                                className="text-white hover:text-gray-300 text-xl font-bold"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Type Name</label>
                            <input
                                type="text"
                                value={newType}
                                onChange={(e) => setNewType(e.target.value)}
                                placeholder="Enter type name"
                                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onKeyPress={(e) => e.key === 'Enter' && handleAddType()}
                            />
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                            <button
                                onClick={() => setShowTypeModal(false)}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddType}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SupplierForm;