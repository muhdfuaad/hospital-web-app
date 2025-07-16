'use client';

import { useEffect, useState } from 'react';

interface District {
  id: number;
  name: string;
}

interface Panchayath {
  panchayathId: number;
  panchayathName: string;
  DstId: number;
  dstName : string;
}

export default function Page() {
  const [districts, setDistricts] = useState<District[]>([]);
  const [panchayaths, setPanchayaths] = useState<Panchayath[]>([]);

  const [showDistrictModal, setShowDistrictModal] = useState(false);
  const [showPanchayathModal, setShowPanchayathModal] = useState(false);

  const [districtName, setDistrictName] = useState('');
  const [panchayathName, setPanchayathName] = useState('');
  const [selectedDistrictId, setSelectedDistrictId] = useState<number>(0);

  const [editingDistrictId, setEditingDistrictId] = useState<number | null>(null);
  const [editingPanchayathId, setEditingPanchayathId] = useState<number | null>(null);

  const fetchDistricts = async () => {
    try {
      const res = await fetch('https://localhost:7112/api/Districts');
      const data = await res.json();
      setDistricts(data);
      console.log(data);

      const panchayathRes = await fetch('https://localhost:7112/api/Panchayaths');
      const panchayathData = await panchayathRes.json();
      setPanchayaths(panchayathData);
      console.log(panchayathData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDistricts();
  }, []);

  const handleAddOrUpdateDistrict = async () => {
    if (!districtName.trim()) return alert('Please enter a district name');

    const body = JSON.stringify({ id: editingDistrictId || 0, name: districtName });
    const method = editingDistrictId ? 'PUT' : 'POST';
    const url = editingDistrictId
      ? `https://localhost:7112/api/Districts/${editingDistrictId}`
      : 'https://localhost:7112/api/Districts';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (res.ok) {
      setDistrictName('');
      setEditingDistrictId(null);
      setShowDistrictModal(false);
      fetchDistricts();
    } else {
      alert('Failed to save district.');
    }
  };

  const handleAddOrUpdatePanchayath = async () => {
    if (!panchayathName.trim()) return alert('Please enter a panchayath name');
    if (!selectedDistrictId) return alert('Please select a district');

    const body = JSON.stringify({
      id: editingPanchayathId || 0,
      name: panchayathName,
      DstId: selectedDistrictId,
      status: 1,
    });

    const method = editingPanchayathId ? 'PUT' : 'POST';
    const url = editingPanchayathId
      ? `https://localhost:7112/api/Panchayaths/${editingPanchayathId}`
      : 'https://localhost:7112/api/Panchayaths';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    if (res.ok) {
      setPanchayathName('');
      setSelectedDistrictId(0);
      setEditingPanchayathId(null);
      setShowPanchayathModal(false);
      fetchDistricts();
    } else {
      alert('Failed to save panchayath.');
    }
  };

  const handleDelete = async (type: 'district' | 'panchayath', id: number) => {
    const url =
      type === 'district'
        ? `https://localhost:7112/api/Districts/${id}`
        : `https://localhost:7112/api/Panchayaths/${id}`;
    const res = await fetch(url, { method: 'DELETE' });
    if (res.ok) {
      fetchDistricts();
    }
  };

  return (
    <div className="p-6 space-y-12">
      <section>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Districts</h2>
          <button
            onClick={() => {
              setEditingDistrictId(null);
              setDistrictName('');
              setShowDistrictModal(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            ➕ Add District
          </button>
        </div>
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((d) => (
              <tr key={d.id} className="border-t">
                <td className="p-2">{d.id}</td>
                <td className="p-2">{d.name}</td>
                <td className="p-2 flex gap-2 justify-center">
                  <button
                    className="bg-yellow-400 px-2 py-1 rounded"
                    onClick={() => {
                      setEditingDistrictId(d.id);
                      setDistrictName(d.name);
                      setShowDistrictModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-2 py-1 text-white rounded"
                    onClick={() => handleDelete('district', d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Panchayaths</h2>
          <button
            onClick={() => {
              setEditingPanchayathId(null);
              setPanchayathName('');
              setSelectedDistrictId(0);
              setShowPanchayathModal(true);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            ➕ Add Panchayath
          </button>
        </div>
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">District</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {panchayaths.map((p) => (
              <tr key={p.panchayathId} className="border-t">
                <td className="p-2">{p.panchayathId}</td>
                <td className="p-2">{p.dstName}</td>
                <td className="p-2">{p.panchayathName}</td>
                <td className="p-2 flex gap-2 justify-center">
                  <button
                    className="bg-yellow-400 px-2 py-1 rounded"
                    onClick={() => {
                      setEditingPanchayathId(p.panchayathId);
                      setPanchayathName(p.panchayathName);
                      setSelectedDistrictId(p.DstId);
                      setShowPanchayathModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-2 py-1 text-white rounded"
                    onClick={() => handleDelete('panchayath', p.panchayathId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* District Modal */}
      {showDistrictModal && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">
              {editingDistrictId ? '✏️ Edit' : '➕ Add'} District
            </h3>
            <input
              type="text"
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
              className="w-full border px-3 py-2 mb-4 rounded"
              placeholder="District Name"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDistrictModal(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrUpdateDistrict}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Panchayath Modal */}
      {showPanchayathModal && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">
              {editingPanchayathId ? '✏️ Edit' : '➕ Add'} Panchayath
            </h3>
            <input
              type="text"
              value={panchayathName}
              onChange={(e) => setPanchayathName(e.target.value)}
              className="w-full border px-3 py-2 mb-4 rounded"
              placeholder="Panchayath Name"
            />
            <select
              value={selectedDistrictId}
              onChange={(e) => setSelectedDistrictId(Number(e.target.value))}
              className="w-full border px-3 py-2 mb-4 rounded"
            >
              <option value={0}>Select District</option>
              {districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPanchayathModal(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrUpdatePanchayath}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
