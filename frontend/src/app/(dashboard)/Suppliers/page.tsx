'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { Search, FilePen, Trash2, PlusCircle } from 'lucide-react';

interface SupplierItem {
    id: number;
    name: string;
    supplierTypeName: string;
    location: string;
    phone: string;
}

export default function SuppliersList() {
    const router = useRouter();
    const [suppliers, setSuppliers] = useState<SupplierItem[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSuppliers = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data } = await API.get<Record<string, any>[]>('/api/Suppliers');
                const mapped: SupplierItem[] = data.map(s => ({
                    id: s.id,
                    name: s.name,
                    supplierTypeName: s.supplierTypeName || '—',
                    location: s.location || '',
                    phone: s.phone || '',
                }));
                setSuppliers(mapped);
            } catch (err: any) {
                setError(err.message || 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        fetchSuppliers();
    }, []);

    const handleNewClick = () => {
        router.push('/Suppliers/addSupplier');
    };

    const handleEdit = (supplier: SupplierItem) => {
        router.push(`/Suppliers/addSupplier?edit=${supplier.id}`);
    };

    const handleDelete = async (id: number) => {
        const confirmDelete = confirm('Are you sure you want to delete this supplier?');
        if (!confirmDelete) return;

        try {
            await API.delete(`/api/Suppliers/${id}`);
            setSuppliers(prev => prev.filter(s => s.id !== id));
        } catch (error) {
            alert('Failed to delete supplier');
            console.error(error);
        }
    };

    const filteredSuppliers = suppliers.filter(supplier =>
        supplier.name
            .toLowerCase()
            .split(' ')
            .some(word => word.startsWith(searchTerm.toLowerCase()))
    );

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const totalPages = Math.ceil(filteredSuppliers.length / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;

    const currentRecords = filteredSuppliers.slice(startIndex, startIndex + recordsPerPage);

    return (
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0 grid-background">

            {/* Title Header Centered */}
            <div className="text-center mb-8  justify-between items-center bg-cyan-100 shadow-sm p-4 mb-4 gap-4">
                <h1 className="text-3xl font-bold text-blue-900 tracking-tight">SUPPLIERS</h1>
                <p className="text-sm text-gray-700">View and manage registered suppliers.</p>
            </div>

            <div className="px-5">

                {/* Top Bar: New + Search */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <button
                        onClick={handleNewClick}
                        className="flex items-center gap-2 bg-cyan-300 hover:bg-cyan-400 text-gray-700 px-4 py-2 rounded shadow text-sm font-semibold border border-gray-300"
                    >
                        <PlusCircle className="w-4 h-4" />
                        Add New Supplier
                    </button>

                    {/* Right Side: Search and Info */}
                    <div className="flex flex-col items-center sm:items-end w-full sm:w-auto gap-2">
                        <div className="flex items-center gap-2 w-full sm:w-auto">
                            <Search className="w-4 h-4 text-gray-500" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                    setCurrentPage(1);
                                }}
                                placeholder="Search supplier name..."
                                className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm w-64"
                            />
                        </div>
                        {/* Records Info */}
                        <div className="text-sm text-gray-600 mt-1 text-center sm:text-right py-1">
                            Showing {currentRecords.length} of {filteredSuppliers.length} Purchase Bills
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="min-w-full border border-gray-300 border-collapse">
                        <thead className="bg-cyan-100">
                            <tr>
                                <th className="w-27 px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Supplier ID</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Name</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Type</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Location</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Phone</th>
                                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSuppliers.map((supplier) => (
                                <tr
                                    key={supplier.id}
                                    className="hover:bg-blue-50 transition-colors"
                                >
                                    <td className="px-4 py-2 text-sm border border-gray-300">{supplier.id}</td>
                                    <td className="px-4 py-2 text-sm border border-gray-300">{supplier.name}</td>
                                    <td className="px-4 py-2 text-sm border border-gray-300">{supplier.supplierTypeName}</td>
                                    <td className="px-4 py-2 text-sm border border-gray-300">{supplier.location}</td>
                                    <td className="px-4 py-2 text-sm border border-gray-300">{supplier.phone}</td>
                                    <td className="px-4 py-2 text-sm border border-gray-300 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => handleEdit(supplier)}
                                                title="Edit"
                                                className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                                            >
                                                <FilePen className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(supplier.id)}
                                                title="Delete"
                                                className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredSuppliers.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center py-6 text-gray-500 border border-gray-300">
                                        No suppliers found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Error Display */}
            {error && (
                <div className="mt-4 text-sm text-red-600 font-medium">
                    Error: {error}
                </div>
            )}
        </div>
    );
}
