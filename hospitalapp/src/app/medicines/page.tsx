'use client';

import { useState } from 'react';

interface MedicineItem {
  id: string;
  itemCode: string;
  medicineName: string;
  company: string;
  genericName : string;
  brand: string;
  gst: string;
  currentStock: string;
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
  const [medicines, setMedicines] = useState<MedicineItem[]>([]);
  const [selectedMedicine, setSelectedMedicine] = useState<MedicineItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('BASIC DETAILS');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewExpiredItems, setViewExpiredItems] = useState(false);
  const [formData, setFormData] = useState<MedicineItem>({
    id: '',
    itemCode: '',
    medicineName: '',
    company: '',
    genericName:'',
    brand: '',
    gst: '',
    currentStock: '',
    billCode: '',
    itemShort: '',
    rack: '',
    shelf: '',
    type: '',
    ingredients: '',
    cess: '',
    discount: '',
    rol: '',
    packItem: '',
    hsnCode: '',
    purchaseRate: '',
    salesRate: '',
    lastBill: '',
    lastPurchase: '',
    quantity: ''
  });

  const handleNewClick = () => {
    setFormData({
      id: '',
      itemCode: '',
      medicineName: '',
      company: '',
      genericName:'',
      brand: '',
      gst: '',
      currentStock: '',
      billCode: '',
      itemShort: '',
      rack: '',
      shelf: '',
      type: '',
      ingredients: '',
      cess: '',
      discount: '',
      rol: '',
      packItem: '',
      hsnCode: '',
      purchaseRate: '',
      salesRate: '',
      lastBill: '',
      lastPurchase: '',
      quantity: ''
    });
    setIsModalOpen(true);
  };

  const handleEditClick = () => {
    if (selectedMedicine) {
      setFormData(selectedMedicine);
      setIsModalOpen(true);
    }
  };

  const handleRowClick = (medicine: MedicineItem) => {
    setSelectedMedicine(medicine);
  };

  const handleUpdate = () => {
    if (formData.id) {
      // Update existing medicine
      setMedicines(medicines.map(med => 
        med.id === formData.id ? formData : med
      ));
    } else {
      // Add new medicine
      const newMedicine = {
        ...formData,
        id: Date.now().toString()
      };
      setMedicines([...medicines, newMedicine]);
    }
    setIsModalOpen(false);
    setSelectedMedicine(null);
  };

  const handleDelete = () => {
    if (formData.id) {
      setMedicines(medicines.filter(med => med.id !== formData.id));
    }
    setIsModalOpen(false);
    setSelectedMedicine(null);
  };

  const handleInputChange = (field: keyof MedicineItem, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredMedicines = medicines.filter(medicine =>
    medicine.medicineName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Navigation */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <button
              onClick={handleNewClick}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium"
            >
              New
            </button>
            <button
              onClick={handleEditClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium"
            >
              Edit
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Search By</span>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Medicine Name</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm w-48"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={viewExpiredItems}
                onChange={(e) => setViewExpiredItems(e.target.checked)}
                className="w-4 h-4"
              />
              <label className="text-sm text-gray-600">View Expired Items</label>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-cyan-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">Item Code</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">Medicine Name</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">Company</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">Brand</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">GST</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">Current Stock</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.map((medicine) => (
              <tr
                key={medicine.id}
                onClick={() => handleRowClick(medicine)}
                className={`cursor-pointer hover:bg-gray-50 ${
                  selectedMedicine?.id === medicine.id ? 'bg-blue-100' : ''
                }`}
              >
                <td className="border border-gray-300 px-4 py-3 text-sm">{medicine.itemCode}</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{medicine.medicineName}</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{medicine.company}</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{medicine.brand}</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{medicine.gst}</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">{medicine.currentStock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-gray-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
              <h2 className="text-lg font-medium">Product Details</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-gray-300 text-xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('BASIC DETAILS')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'BASIC DETAILS'
                    ? 'bg-gray-200 text-gray-700 border-b-2 border-gray-400'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                BASIC DETAILS
              </button>
              <button
                onClick={() => setActiveTab('BATCH')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'BATCH'
                    ? 'bg-gray-200 text-gray-700 border-b-2 border-gray-400'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                BATCH
              </button>
            </div>

            {/* Form Content */}
            {activeTab === 'BASIC DETAILS' && (
              <div className="p-6">
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Code */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Code</label>
                      <input
                        type="text"
                        value={formData.itemCode}
                        onChange={(e) => handleInputChange('itemCode', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Bill Code */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Bill Code</label>
                      <input
                        type="text"
                        value={formData.billCode}
                        onChange={(e) => handleInputChange('billCode', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Item Short */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Item Short</label>
                      <input
                        type="text"
                        value={formData.itemShort}
                        onChange={(e) => handleInputChange('itemShort', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Name */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Name</label>
                      <input
                        type="text"
                        value={formData.medicineName}
                        onChange={(e) => handleInputChange('medicineName', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Generic Name */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Generic Name</label>
                      <input
                        type="text"
                        value={formData.genericName || ''}
                        onChange={(e) => handleInputChange('genericName', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* R.O.L */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">R.O.L</label>
                      <input
                        type="text"
                        value={formData.rol}
                        onChange={(e) => handleInputChange('rol', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Pack Item */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Pack Item</label>
                      <input
                        type="text"
                        value={formData.packItem}
                        onChange={(e) => handleInputChange('packItem', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* HSN Code */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">HSN Code</label>
                      <input
                        type="text"
                        value={formData.hsnCode}
                        onChange={(e) => handleInputChange('hsnCode', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Purchase Rate & Sales Rate */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Purchase Rate</label>
                      <input
                        type="text"
                        value={formData.purchaseRate}
                        onChange={(e) => handleInputChange('purchaseRate', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm mr-2"
                      />
                      <label className="text-sm font-medium text-gray-700 w-20 text-left">Sales Rate</label>
                      <input
                        type="text"
                        value={formData.salesRate}
                        onChange={(e) => handleInputChange('salesRate', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Last Bill & Last Purchase */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Last Bill</label>
                      <input
                        type="text"
                        value={formData.lastBill}
                        onChange={(e) => handleInputChange('lastBill', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm mr-2"
                      />
                      <label className="text-sm font-medium text-gray-700 w-20 text-left">Last Purchase</label>
                      <input
                        type="text"
                        value={formData.lastPurchase}
                        onChange={(e) => handleInputChange('lastPurchase', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Quantity</label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Rack & Shelf */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Rack</label>
                      <input
                        type="text"
                        value={formData.rack}
                        onChange={(e) => handleInputChange('rack', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm mr-2"
                      />
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Shelf</label>
                      <input
                        type="text"
                        value={formData.shelf}
                        onChange={(e) => handleInputChange('shelf', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Type */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Type</label>
                      <select
                        value={formData.type}
                        onChange={(e) => handleInputChange('type', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      >
                        <option value="">Select Type</option>
                        <option value="AMPOULE">AMPOULE</option>
                        <option value="TABLET">TABLET</option>
                        <option value="CAPSULE">CAPSULE</option>
                        <option value="SYRUP">SYRUP</option>
                        <option value="POWDER">POWDER</option>
                      </select>
                    </div>

                    {/* Ingredients */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Ingredients</label>
                      <input
                        type="text"
                        value={formData.ingredients}
                        onChange={(e) => handleInputChange('ingredients', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* GST% & Cess */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">GST %</label>
                      <input
                        type="text"
                        value={formData.gst}
                        onChange={(e) => handleInputChange('gst', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm mr-2"
                      />
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Cess</label>
                      <input
                        type="text"
                        value={formData.cess}
                        onChange={(e) => handleInputChange('cess', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Disc% */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Disc %</label>
                      <input
                        type="text"
                        value={formData.discount}
                        onChange={(e) => handleInputChange('discount', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Brand */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Brand</label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => handleInputChange('brand', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>

                    {/* Current Stock */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Current Stock</label>
                      <input
                        type="text"
                        value={formData.currentStock}
                        onChange={(e) => handleInputChange('currentStock', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'BATCH' && (
              <div className="p-6">
                <div className="text-gray-500 text-center py-8">
                  Batch details will be implemented here
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
              <button
                onClick={handleUpdate}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium"
              >
                Update
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}