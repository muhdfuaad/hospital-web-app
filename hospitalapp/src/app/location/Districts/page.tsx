'use client';

import { useEffect, useState } from 'react';
import { FilePen, Trash2 } from 'lucide-react';
import Link from 'next/link';

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
        const res = await fetch('https://localhost:7112/api/Districts');
        const data = await res.json();
        setDistricts(data);
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

        const method = editingId ? 'PUT' : 'POST';
        const url = editingId
            ? `https://localhost:7112/api/Districts/${editingId}`
            : `https://localhost:7112/api/Districts`;

        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: editingId || 0, name: districtName.trim() }),
        });

        setDistrictName('');
        setEditingId(null);
        setShowModal(false);
        setError('');
        fetchDistricts();
    };

    const handleDelete = async (id: number) => {
        await fetch(`https://localhost:7112/api/Districts/${id}`, { method: 'DELETE' });
        fetchDistricts();
    };

    return (
        <div className="p-6">

            <h2 className="text-xl font-bold mb-4">Districts</h2>

            <table className="w-full border">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {districts.map((d) => (
                        <tr key={d.id} className="border-t">
                            <td className="px-4 py-2 text-left">{d.id}</td>
                            <td className="px-4 py-2 text-left">{d.name}</td>
                            <td className="px-4 py-2 text-left">
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
                                        <FilePen className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(d.id)}
                                        className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                                    >
                                        <Trash2 className="w-5 h-5" />
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
