'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { Search, FilePen, Trash2, PlusCircle } from 'lucide-react';

interface MedicineItem {
  id: string;
  itemCode: string;
  medicineName: string;
  company: string;
  genericName: string;
  gst: string;
  billCode: string;
  itemShort: string;
  rack: string;
  shelf: string;
  type: string;
  ingredients: string;
  cess: string;
  discount: string;
  rol: string;
  packItem: string;
  hsnCode: string;
  purchaseRate: string;
  salesRate: string;
  lastBill: string;
  lastPurchase: string;
  quantity: string;
}

export default function MedicineInventory() {
  const router = useRouter();
  const [medicines, setMedicines] = useState<MedicineItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedicines = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await API.get<MedicineItem[]>("/api/Medicines");
        setMedicines(data);
      } catch (err: any) {
        setError(err?.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  const handleNewClick = () => {
    router.push("/medicines/addMedicine");
  };

  const handleEdit = (medicine: MedicineItem) => {
    router.push(`/medicines/addMedicine?edit=${medicine.id}`);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this medicine?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/api/Medicines/${id}`);
      setMedicines(prev => prev.filter(m => m.id !== id));
    } catch (error) {
      alert("Failed to delete medicine");
      console.error(error);
    }
  };

  const filteredMedicines = medicines.filter(med =>
    med.medicineName.toLowerCase().split(' ').some(word =>
      word.startsWith(searchTerm.toLowerCase())
    )
  );
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const totalPages = Math.ceil(filteredMedicines.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;

  const currentRecords = filteredMedicines.slice(startIndex, startIndex + recordsPerPage);

  return (
    <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">

      {/* Title Header Centered */}
      <div className="text-center mb-8  justify-between items-center bg-cyan-100 shadow-sm p-4 mb-4 gap-4">
        <h1 className="text-3xl font-bold text-blue-900 tracking-tight">MEDICINES</h1>
        <p className="text-sm text-gray-700">Manage and track all available medicines in inventory.</p>
      </div>

      <div className="px-5">

        {/* Top Bar: New + Search */}
        {/* New + Search Bar - Left and Right Aligned */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <button
            onClick={handleNewClick}
            className="flex items-center gap-2 bg-cyan-300 hover:bg-cyan-400 text-gray-700 px-4 py-2 rounded shadow text-sm font-semibold border border-gray-300"
          >
            <PlusCircle className="w-4 h-4" />
            Add New Medicine
          </button>

          {/* Right Side: Search and Info */}
          <div className="flex flex-col items-center sm:items-end w-full sm:w-auto gap-2">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Search className="w-4 h-4 text-gray-600" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1);
                }}
                placeholder="Search by name..."
                className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm w-64"
              />
            </div>
            {/* Records Info */}
            <div className="text-sm text-gray-600 mt-1 text-center sm:text-right py-1">
              Showing {currentRecords.length} of {filteredMedicines.length} medicines
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full border border-gray-300 border-collapse">
            <thead className="bg-cyan-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Item Code</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Medicine Name</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Company</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">GST</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMedicines.map((medicine) => (
                <tr
                  key={medicine.id}
                  className="hover:bg-blue-50 transition-colors"
                >
                  <td className="px-4 py-2 text-sm border border-gray-300">{medicine.itemCode}</td>
                  <td className="px-4 py-2 text-sm border border-gray-300">{medicine.medicineName}</td>
                  <td className="px-4 py-2 text-sm border border-gray-300">{medicine.company}</td>
                  <td className="px-4 py-2 text-sm border border-gray-300">{medicine.type}</td>
                  <td className="px-4 py-2 text-sm border border-gray-300">{medicine.gst}</td>
                  <td className="px-4 py-2 text-sm border border-gray-300 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(medicine)}
                        title="Edit"
                        className="text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-100 transition-all"
                      >
                        <FilePen className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(medicine.id)}
                        title="Delete"
                        className="text-red-600 hover:text-red-800 p-2 rounded hover:bg-red-100 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredMedicines.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500 border border-gray-300">
                    No medicines found.
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
