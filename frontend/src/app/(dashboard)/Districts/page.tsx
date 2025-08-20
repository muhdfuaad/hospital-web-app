'use client';

import { useEffect, useState } from 'react';
import { FilePen, Trash2 } from 'lucide-react';
import Link from 'next/link';
import API from '@/lib/axios';

interface District {
    id: number;
    name: string;
}

export default function DistrictPage() {
    const [districts, setDistricts] = useState<District[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [districtName, setDistrictName] = useState('');
    const [editingId, setEditingId] = useState<number | null>(null);
    const [error, setError] = useState('');

    const fetchDistricts = async () => {
        try {
            const res = await API.get<District[]>('/api/Districts');
            setDistricts(res.data);
        } catch (error) {
            console.error('Failed to fetch districts:', error);
        }
    };

    useEffect(() => {
        fetchDistricts();
    }, []);

    const handleSave = async () => {
        if (!districtName.trim()) {
            setError('District name is required');
            return;
        }

        const normalizedInput = districtName.trim().toLowerCase();

        const duplicate = districts.some(d =>
            d.name.trim().toLowerCase() === normalizedInput &&
            d.id !== editingId
        );

        if (duplicate) {
            setError('District already exists');
            return;
        }


        const districtData = {
            id: editingId || 0,
            name: districtName.trim()
        };

        try {
            if (editingId) {
                await API.put(`/api/Districts/${editingId}`, districtData);
            } else {
                await API.post('/api/Districts', districtData);
            }

            // Reset state after success
            setDistrictName('');
            setEditingId(null);
            setShowModal(false);
            setError('');
            fetchDistricts();

        } catch (error) {
            console.error('Failed to save district:', error);
            setError('Failed to save district. Please try again.');
        }
    };

    const handleDelete = async (id: number) => {
        const confirmed = confirm('Are you sure you want to delete this district? This action cannot be undone.');
        if (!confirmed) return;

        try {
            await API.delete(`/api/Districts/${id}`);
            fetchDistricts(); // Refresh the list
        } catch (error) {
            console.error('Failed to delete district:', error);
            alert('Error deleting district. Please try again.');
        }
    };

    return (
        <div className="overflow-x-auto w-full max-w-md mx-auto p-2">

            <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide text-center">Districts</h2>

            <table className="min-w-full border border-collapse border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left border border-gray-300">ID</th>
                        <th className="px-4 py-2 text-left border border-gray-300">Name</th>
                        <th className="px-4 py-2 text-left border border-gray-300">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {districts.map((d) => (
                        <tr key={d.id} className="border-t border-gray-300">
                            <td className="px-4 py-2 text-left border border-gray-300">{d.id}</td>
                            <td className="px-4 py-2 text-left border border-gray-300">{d.name}</td>
                            <td className="px-4 py-2 text-left border border-gray-300">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => {
                                            setEditingId(d.id);
                                            setDistrictName(d.name);
                                            setError('');
                                            setShowModal(true);
                                        }}
                                        className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                                    >
                                        <FilePen className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(d.id)}
                                        className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button
                onClick={() => {
                    setShowModal(true);
                    setEditingId(null);
                    setDistrictName('');
                    setError('');
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
                ➕ Add District
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            {editingId ? '✏️ Edit' : '➕ Add'} District
                        </h3>
                        <input
                            value={districtName}
                            onChange={(e) => setDistrictName(e.target.value)}
                            className="w-full border px-3 py-2 mb-2 rounded"
                            placeholder="Enter district name"
                        />
                        {error && (
                            <p className="text-red-600 text-sm mb-2">{error}</p>
                        )}
                        <div className="flex justify-end gap-2">
                            <button onClick={() => setShowModal(false)} className="border px-4 py-2 rounded">Cancel</button>
                            <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
