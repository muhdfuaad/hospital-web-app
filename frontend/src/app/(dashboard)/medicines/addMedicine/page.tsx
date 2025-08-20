'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import API from '@/lib/axios';
import { SearchableSelect } from '@/components/SearchableSelect';

const API_BASE = API.defaults.baseURL;

interface CompanyOption {
  id: number;
  name: string;
}

interface TypeOption {
  id: number;
  name: string;
}

interface MedicineItem {
  itemCode: string;
  medicineName: string;
  companyId: number;  // Change from 'company' to 'companyId'
  company: string;    // Keep this for display
  genericName: string;
  gst: string;
  billCode: string;
  itemShort: string;
  rack: string;
  shelf: string;
  typeId: number;     // Change from 'type' to 'typeId'
  type: string;       // Keep this for display
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

export default function MedicineFormPage() {
  const [activeTab, setActiveTab] = useState('BASIC DETAILS');

  const [formData, setFormData] = useState<MedicineItem>({
    itemCode: '',
    medicineName: '',
    genericName: '',
    gst: '',
    billCode: '',
    itemShort: '',
    rack: '',
    shelf: '',
    companyId: 0,
    company: '',
    typeId: 0,
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

  const [companies, setCompanies] = useState<CompanyOption[]>([]);
  const [types, setTypes] = useState<TypeOption[]>([]);
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [newCompany, setNewCompany] = useState('');
  const [newType, setNewType] = useState('');

  const [medicineSearches, setMedicineSearches] = useState<Record<string, string>>({
    company: '',
  });
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().startsWith(medicineSearches.company.toLowerCase())
  );
  const companyDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCompanyDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    async function fetchDropdownsAndMedicine() {
      try {
        // Fetch dropdowns first
        const [companiesRes, typesRes] = await Promise.all([
          fetch(`${API_BASE}/api/MedicineCompanies`),
          fetch(`${API_BASE}/api/MedicineTypes`)
        ]);

        if (!companiesRes.ok || !typesRes.ok) {
          throw new Error('Failed to fetch dropdowns');
        }

        const companiesData = await companiesRes.json();
        const typesData = await typesRes.json();

        setCompanies(companiesData.map((c: any) => ({ id: c.companyId, name: c.companyName })));
        setTypes(typesData.map((t: any) => ({ id: t.typeId, name: t.typeName })));

        // If editing, fetch medicine
        if (editId) {
          setIsEditMode(true);
          const res = await fetch(`${API_BASE}/api/Medicines/${editId}`);
          if (!res.ok) {
            console.error('Failed to fetch medicine data for edit');
            return;
          }

          const data = await res.json();

          setFormData({
            itemCode: data.itemCode ?? '',
            medicineName: data.medicineName ?? '',
            companyId: Number(data.companyId ?? 0),  // ✅ Ensure this is a number
            typeId: Number(data.typeId ?? 0),        // ✅ Ensure this is a number
            company: data.company ?? '',
            genericName: data.genericName ?? '',
            gst: data.gst ?? '',
            billCode: data.billCode ?? '',
            itemShort: data.itemShort ?? '',
            rack: data.rack ?? '',
            shelf: data.shelf ?? '',
            type: data.type ?? '',
            ingredients: data.ingredients ?? '',
            cess: data.cess ?? '',
            discount: data.discount ?? '',
            rol: data.rol ?? '',
            packItem: data.packItem ?? '',
            hsnCode: data.hsnCode ?? '',
            purchaseRate: data.purchaseRate ?? '',
            salesRate: data.salesRate ?? '',
            lastBill: data.lastBill ? data.lastBill.split('T')[0] : '',
            lastPurchase: data.lastPurchase ? data.lastPurchase.split('T')[0] : '',
            quantity: data.quantity ?? '',
          });
        }
      } catch (error) {
        console.error('Dropdown/Medicine fetch error:', error);
      }
    }

    fetchDropdownsAndMedicine();
  }, [editId]);

  useEffect(() => {
  if (editId) {
    API.get(`/api/Medicines/${editId}`).then((res) => {
      const data = res.data as Record<string, any>;

      setFormData({
        ...formData,
        companyId: data.companyId,
        company: data.company, // if your backend sends this field
      });

      // Fetch the company name if only companyId is sent
      if (!data.company) {
        API.get(`/api/Companies/${data.companyId}`).then((res2) => {
          const company = res2.data as Record<string, any>;

          setMedicineSearches((prev) => ({
            ...prev,
            company: `${company.id} - ${company.name}`,
          }));
        });
      } else {
        setMedicineSearches((prev) => ({
          ...prev,
          company: `${data.companyId} - ${data.company}`,
        }));
      }
    });
  }
}, [editId]);


  useEffect(() => {
    async function fetchDropdowns() {
      try {
        const [companiesRes, typesRes] = await Promise.all([
          fetch(`${API_BASE}/api/MedicineCompanies`),
          fetch(`${API_BASE}/api/MedicineTypes`)
        ]);

        if (!companiesRes.ok || !typesRes.ok) {
          throw new Error('Failed to fetch companies or types');
        }

        const companiesRaw = await companiesRes.json();
        const typesRaw = await typesRes.json();

        const mappedCompanies = companiesRaw.map((c: any) => ({
          id: c.companyId,
          name: c.companyName
        }));

        const mappedTypes = typesRaw.map((t: any) => ({
          id: t.typeId,
          name: t.typeName
        }));

        setCompanies(mappedCompanies);
        setTypes(mappedTypes);
      } catch (error) {
        console.error('Dropdown fetch error:', error);
      }
    }

    fetchDropdowns();
  }, []);



  const handleInputChange = (field: keyof MedicineItem, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = async () => {
    try {
      const safeDateToISOString = (dateStr: string | null | undefined): string | null => {
        if (!dateStr) return null;
        const parsed = Date.parse(dateStr);
        return !isNaN(parsed) ? new Date(parsed).toISOString() : null;
      };

      const payload = {
        itemCode: formData.itemCode,
        medicineName: formData.medicineName,
        companyId: Number(formData.companyId),
        genericName: formData.genericName,
        gst: formData.gst,
        billCode: formData.billCode,
        itemShort: formData.itemShort,
        rack: formData.rack,
        shelf: formData.shelf,
        typeId: Number(formData.typeId),
        ingredients: formData.ingredients,
        cess: formData.cess,
        discount: formData.discount,
        rol: formData.rol,
        packItem: formData.packItem,
        hsnCode: formData.hsnCode,
        purchaseRate: formData.purchaseRate ? parseFloat(formData.purchaseRate) : null,
        salesRate: formData.salesRate ? parseFloat(formData.salesRate) : null,
        lastBill: safeDateToISOString(formData.lastBill),
        lastPurchase: safeDateToISOString(formData.lastPurchase),
        quantity: formData.quantity ? parseInt(formData.quantity) : 0,
      };

      const url = editId
        ? `${API_BASE}/api/Medicines/${editId}`
        : `${API_BASE}/api/Medicines`;

      const method = editId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // ❌ Log but do NOT display error to user
        const errorText = await response.text();
        console.error('❌ API Save Error:', errorText);
        return;
      }

      // ✅ Success: show only success message
      setSuccessMessage(editId ? '✅ Medicine updated successfully!' : '✅ Medicine added successfully!');
      setTimeout(() => setSuccessMessage(''), 5000);

      handleReset();
      setTimeout(() => router.push('/medicines'), 600);

    } catch (error: any) {
      // ❌ Log unexpected error (e.g. network/server) silently
      console.error('❌ handleSave exception:', error);
    }
  };

  const handleReset = () => {
    setFormData({
      itemCode: '',
      medicineName: '',
      genericName: '',
      gst: '',
      billCode: '',
      itemShort: '',
      rack: '',
      shelf: '',
      companyId: 0,
      company: '',
      typeId: 0,
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
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this medicine?')) {
      handleReset();
      setSuccessMessage('Medicine deleted successfully!');
      setTimeout(() => {
        router.push('/medicines');
      }, 1000);
    }
  };

  // Add these functions to handle API calls
  const fetchCompanies = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/MedicineCompanies`);
      const data: { companyId: number; companyName: string }[] = await response.json();

      setCompanies(data.map(c => ({
        id: c.companyId,
        name: c.companyName
      })));
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  const fetchTypes = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/MedicineTypes`);
      const data: { typeId: number; typeName: string }[] = await response.json();

      setTypes(data.map(t => ({
        id: t.typeId,
        name: t.typeName
      })));
    } catch (error) {
      console.error('Error fetching types:', error);
    }
  };


  const handleAddCompany = async () => {
    if (newCompany.trim()) {
      try {
        const response = await fetch(`${API_BASE}/api/MedicineCompanies`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ companyName: newCompany.trim() })
        });

        if (response.ok) {
          const newCompanyData = await response.json();

          const newEntry = {
            id: newCompanyData.companyId,
            name: newCompanyData.companyName
          };

          await fetchCompanies(); // ✅ Refresh company list

          setFormData(prev => ({
            ...prev,
            companyId: newEntry.id,
            company: newEntry.name
          }));

          setNewCompany('');
          setShowCompanyModal(false);
        } else {
          const errText = await response.text();
          console.error('Failed to add company:', errText);
        }
      } catch (error) {
        console.error('Error adding company:', error);
      }
    }
  };

  const handleAddType = async () => {
    if (newType.trim()) {
      try {
        const response = await fetch(`${API_BASE}/api/MedicineTypes`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ typeName: newType.trim() })
        });

        if (response.ok) {
          const newTypeData = await response.json();

          const newEntry = {
            id: newTypeData.typeId,
            name: newTypeData.typeName
          };

          await fetchTypes(); // ✅ Refresh type list

          setFormData(prev => ({
            ...prev,
            typeId: newEntry.id,
            type: newEntry.name
          }));

          setNewType('');
          setShowTypeModal(false);
        } else {
          const errText = await response.text();
          console.error('Failed to add type:', errText);
        }
      } catch (error) {
        console.error('Error adding type:', error);
      }
    }
  };

  return (
    <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-4 text-center sm:p-6 shadow-lgrounded-t-lg">
            <h1 className="text-xl font-medium">Medicine Details</h1>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('BASIC DETAILS')}
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'BASIC DETAILS'
                ? 'bg-gray-200 text-gray-700 border-b-2 border-gray-400'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              BASIC DETAILS
            </button>
            <button
              onClick={() => setActiveTab('BATCH')}
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'BATCH'
                ? 'bg-gray-200 text-gray-700 border-b-2 border-gray-400'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              BATCH
            </button>
          </div>

          {errorMessage && (
            <div className="mb-4 text-sm text-red-600 font-semibold bg-red-100 border border-red-300 p-2 rounded">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="bg-green-100 text-green-800 p-2 rounded mb-4 shadow text-sm font-medium">
              {successMessage}
            </div>
          )}

          {/* Form Content */}
          {activeTab === 'BASIC DETAILS' && (
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Code */}
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 w-24 text-left">Code</label>
                    <input
                      type="text"
                      value={formData.itemCode}
                      onChange={(e) => handleInputChange('itemCode', e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Bill Code */}
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 w-24 text-left">Bill Code</label>
                    <input
                      type="text"
                      value={formData.billCode}
                      onChange={(e) => handleInputChange('billCode', e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Item Short */}
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 w-24 text-left">Item Short</label>
                    <input
                      type="text"
                      value={formData.itemShort}
                      onChange={(e) => handleInputChange('itemShort', e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Name */}
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 w-24 text-left">Name</label>
                    <input
                      required
                      type="text"
                      value={formData.medicineName}
                      onChange={(e) => handleInputChange('medicineName', e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 w-24 text-left">Company</label>

                    {/* Dropdown Wrapper */}
                    <div className="flex-1 relative" ref={companyDropdownRef}>
                      <input
                        type="text"
                        placeholder="Search Company"
                        value={medicineSearches.company}
                        onChange={(e) =>
                          setMedicineSearches((prev) => ({ ...prev, company: e.target.value }))
                        }
                        onFocus={() => setShowCompanyDropdown(true)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && filteredCompanies.length > 0) {
                            const topCompany = filteredCompanies[0];
                            setFormData((prev) => ({
                              ...prev,
                              companyId: topCompany.id,
                              company: topCompany.name,
                            }));
                            setMedicineSearches((prev) => ({
                              ...prev,
                              company: `${topCompany.id} - ${topCompany.name}`,
                            }));
                            setShowCompanyDropdown(false);
                            e.preventDefault();
                          }
                        }}
                        className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      {showCompanyDropdown && (
                        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow max-h-48 overflow-y-auto">
                          {filteredCompanies.length > 0 ? (
                            filteredCompanies.map((company) => (
                              <div
                                key={company.id}
                                className="px-3 py-2 hover:bg-blue-100 text-sm cursor-pointer"
                                onClick={() => {
                                  setFormData((prev) => ({
                                    ...prev,
                                    companyId: company.id,
                                    company: company.name,
                                  }));
                                  setMedicineSearches((prev) => ({
                                    ...prev,
                                    company: `${company.id} - ${company.name}`,
                                  }));
                                  setShowCompanyDropdown(false);
                                }}
                              >
                                {company.id} - {company.name}
                              </div>
                            ))
                          ) : (
                            <div className="px-3 py-2 text-sm text-gray-500">No results found</div>
                          )}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => setShowCompanyModal(true)}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md font-medium transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Generic Name */}
                  <div className="flex items-center gap-4">
                    <label className="text-sm font-medium text-gray-700 w-24 text-left">Generic Name</label>
                    <input
                      type="text"
                      value={formData.genericName}
                      onChange={(e) => handleInputChange('genericName', e.target.value)}
                      className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* R.O.L, Pack Item, HSN Code in one row */}
                  <div className="flex items-center gap-4">
                    {/* R.O.L */}
                    <div className="flex flex-col w-1/4">
                      <label className="text-sm font-medium text-gray-700 mb-1">R.O.L</label>
                      <input
                        type="text"
                        value={formData.rol}
                        onChange={(e) => handleInputChange('rol', e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Pack Item */}
                    <div className="flex flex-col w-1/4">
                      <label className="text-sm font-medium text-gray-700 mb-1">Pack Item</label>
                      <input
                        type="text"
                        value={formData.packItem}
                        onChange={(e) => handleInputChange('packItem', e.target.value)}
                        className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* HSN Code (wider) */}
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm font-medium text-gray-700 mb-1">HSN Code</label>
                      <input
                        type="text"
                        value={formData.hsnCode}
                        onChange={(e) => handleInputChange('hsnCode', e.target.value)}
                        className="w-32 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full">
                    {/* Purchase Rate */}
                    <div className="flex items-center flex-1">
                      <label className="text-sm font-medium text-gray-700 w-28">Purchase Rate</label>
                      <input
                        type="text"
                        value={formData.purchaseRate}
                        onChange={(e) => handleInputChange('purchaseRate', e.target.value)}
                        className="w-28 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    {/* Sales Rate */}
                    <div className="flex items-center flex-1">
                      <label className="text-sm font-medium text-gray-700 w-28">Sales Rate</label>
                      <input
                        type="text"
                        value={formData.salesRate}
                        onChange={(e) => handleInputChange('salesRate', e.target.value)}
                        className="w-28 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Rack & Shelf */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-3">Storage Location</p>
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full">
                      {/* Rack */}
                      <div className="flex flex-col w-1/4">
                        <label className="text-sm font-medium text-gray-700 w-20">Rack</label>
                        <input
                          type="text"
                          value={formData.rack}
                          onChange={(e) => handleInputChange('rack', e.target.value)}
                          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>

                      {/* Shelf */}
                      <div className="flex flex-col w-1/4">
                        <label className="text-sm font-medium text-gray-700 w-20">Shelf</label>
                        <input
                          type="text"
                          value={formData.shelf}
                          onChange={(e) => handleInputChange('shelf', e.target.value)}
                          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Type */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-3">Medicine Information</p>
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Type</label>
                      <select
                        value={formData.typeId}
                        onChange={(e) => {
                          const selectedId = parseInt(e.target.value);
                          const selectedType = types.find(t => t.id === selectedId);
                          setFormData(prev => ({
                            ...prev,
                            typeId: selectedId,
                            type: selectedType ? selectedType.name : ''
                          }));
                        }}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value={0}>Select Type</option>
                        {types
                          .filter(type => type?.id != null && type?.name)
                          .map(type => (
                            <option key={type.id} value={type.id}>
                              {type.name}
                            </option>
                          ))}
                      </select>
                      <button
                        onClick={() => setShowTypeModal(true)}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md font-medium transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>


                  {/* Ingredients */}
                  <div>
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-16 text-left">Ingredients</label>
                      <input
                        type="text"
                        value={formData.ingredients}
                        onChange={(e) => handleInputChange('ingredients', e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Tax Information */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-3">Tax Information</p>
                    <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full">
                      {/* GST % */}
                      <div className="flex flex-col ">
                        <label className="text-sm font-medium text-gray-700 mb-1">GST %</label>
                        <input
                          type="number"
                          min="0"
                          value={formData.gst}
                          onChange={(e) => handleInputChange('gst', e.target.value)}
                          className="w-24 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>

                      {/* Cess */}
                      <div className="flex flex-col w-1/4">
                        <label className="text-sm font-medium text-gray-700 mb-1">Cess</label>
                        <input
                          type="text"
                          value={formData.cess}
                          onChange={(e) => handleInputChange('cess', e.target.value)}
                          className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Discount % */}
                      <div className="flex flex-col w-1/4">
                        <label className="text-sm font-medium text-gray-700 mb-1">Disc %</label>
                        <input
                          type="text"
                          value={formData.discount}
                          onChange={(e) => handleInputChange('discount', e.target.value)}
                          className="w-24 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Separated section for Last Bill, Last Purchase, and Quantity */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-3">Stock Info</p>

                    {/* Last Bill & Last Purchase */}
                   <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full mb-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Last Bill</label>
                      <input
                        type="text"
                        value={formData.lastBill}
                        onChange={(e) => handleInputChange('lastBill', e.target.value)}
                        className="w-28 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Last Purchase</label>
                      <input
                        type="text"
                        value={formData.lastPurchase}
                        onChange={(e) => handleInputChange('lastPurchase', e.target.value)}
                        className="w-28 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4">
                      <label className="text-sm font-medium text-gray-700 w-24 text-left">Quantity</label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                        className="w-24 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
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

          {/* Action Buttons */}
          <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              {isEditMode ? 'Update' : 'Save'}
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              Delete
            </button>
          </div>

        </div>
      </div>

      {/* Company Modal */}
      {showCompanyModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="bg-gray-600 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
              <h2 className="text-lg font-medium">Add New Company</h2>
              <button
                onClick={() => setShowCompanyModal(false)}
                className="text-white hover:text-gray-300 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={newCompany}
                onChange={(e) => setNewCompany(e.target.value)}
                placeholder="Enter company name"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && handleAddCompany()}
              />
            </div>
            <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
              <button
                onClick={() => setShowCompanyModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCompany}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

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
}