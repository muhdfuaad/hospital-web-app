'use client';

import { useEffect, useState } from 'react';
import { FilePen, Trash2 } from 'lucide-react';
import API from '@/lib/axios';

interface District {
  id: number;
  name: string;
}

interface Panchayath {
  panchayathId: number;
  panchayathName: string;
  dstName: string;
  dstId: number;
}

export default function PanchayathsPage() {
  const [districts, setDistricts] = useState<District[]>([]);
  const [panchayaths, setPanchayaths] = useState<Panchayath[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [panchayathName, setPanchayathName] = useState('');
  const [selectedDistrictId, setSelectedDistrictId] = useState<number | ''>('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState('');

  // ✅ Fetch both districts and panchayaths
  const fetchData = async () => {
    try {
      const districtRes = await API.get<District[]>('/api/Districts');
      setDistricts(districtRes.data);

      const panchayathRes = await API.get<Panchayath[]>('/api/Panchayaths');
      setPanchayaths(panchayathRes.data);
    } catch (err) {
      console.error('Failed fetching data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Delete Panchayath
  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure to delete this panchayath?')) return;
    try {
      await API.delete(`/api/Panchayaths/${id}`);
      await fetchData();
    } catch (err) {
      console.error(err);
      alert('Failed deleting panchayath, see console.');
    }
  };

  // ✅ Save/Add/Edit Panchayath
  const handleSave = async () => {
    setError('');

    if (!panchayathName.trim()) {
      setError('Enter Panchayath name');
      return;
    }

    if (!selectedDistrictId) {
      setError('Select a district');
      return;
    }

    const normalized = panchayathName.trim().toLowerCase();
    const duplicate = panchayaths.some(
      (p) =>
        p.panchayathName.trim().toLowerCase() === normalized &&
        p.panchayathId !== editingId
    );

    if (duplicate) {
      setError('Panchayath name already exists');
      return;
    }

    const method = editingId ? 'put' : 'post';
    const url = editingId
      ? `/api/Panchayaths/${editingId}`
      : '/api/Panchayaths';

    const bodyData = {
      id: editingId || 0,
      name: panchayathName.trim(),
      dstId: selectedDistrictId,
      status: 1,
    };

    try {
      await API[method](url, bodyData);

      setPanchayathName('');
      setSelectedDistrictId('');
      setEditingId(null);
      setShowModal(false);
      setError('');
      await fetchData();
    } catch (err) {
      console.error(err);
      setError('Failed saving panchayath, check console');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-blue-900 mb-4 uppercase tracking-wide text-center">Panchayaths</h2>
      <div className="flex justify-center mt-10 mb-6">
        <button
          onClick={() => {
            setShowModal(true);
            setEditingId(null);
            setPanchayathName('');
            setSelectedDistrictId('');
            setError('');
          }}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition"
        >
          ➕ Add Panchayath
        </button>
      </div>


      <table className="w-full border border-collapse border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left border border-gray-300">ID</th>
            <th className="px-4 py-2 text-left border border-gray-300">Name</th>
            <th className="px-4 py-2 text-left border border-gray-300">District</th>
            <th className="px-4 py-2 text-left border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {panchayaths.length > 0 ? (
            panchayaths.map((p) => (
              <tr key={p.panchayathId} className="border-t border-gray-300">
                <td className="px-4 py-2 text-left border border-gray-300">{p.panchayathId}</td>
                <td className="px-4 py-2 text-left border border-gray-300">{p.panchayathName}</td>
                <td className="px-4 py-2 text-left border border-gray-300">{p.dstName}</td>
                <td className="px-4 py-2 text-left border border-gray-300">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingId(p.panchayathId);
                        setPanchayathName(p.panchayathName);
                        setSelectedDistrictId(p.dstId);
                        setShowModal(true);
                        setError('');
                      }}
                      className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                    >
                      <FilePen className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(p.panchayathId)}
                      className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                No panchayaths found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg">
            <h3 className="text-lg font-semibold mb-4">{editingId ? '✏️ Edit' : '➕ Add'} Panchayath</h3>
            <input
              value={panchayathName}
              onChange={(e) => setPanchayathName(e.target.value)}
              className="w-full border px-3 py-2 mb-2 rounded"
              placeholder="Panchayath Name"
            />
            <select
              value={selectedDistrictId}
              onChange={(e) => setSelectedDistrictId(Number(e.target.value))}
              className="w-full border px-3 py-2 mb-2 rounded"
            >
              <option value="">Select District</option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
            {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => setShowModal(false)} className="border px-4 py-2 rounded">Cancel</button>
              <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
