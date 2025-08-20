'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import API from '@/lib/axios';
import { Search, FilePen, Trash2, PlusCircle } from 'lucide-react';

interface PurchaseBill {
    purchaseId: number;
    invoiceNo: string;
    supplierId: number;
    supplierName: string;
    date: string;
    paymentType: string;
    finalTotal: number;
    isCancelled?: boolean;
}

export default function PurchaseBillsPage() {
    const router = useRouter();
    const [bills, setBills] = useState<PurchaseBill[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBills = async () => {
            try {
                const { data } = await API.get<PurchaseBill[]>("/api/PurchaseBills");
                setBills(data);
            } catch (err: any) {
                setError(err?.message || "Failed to fetch bills");
            }
        };
        fetchBills();
    }, []);

    const handleNewClick = () => {
        router.push("/Purchasebill/addPurchasebill");
    };

    const handleEdit = (bill: PurchaseBill) => {
        router.push(`/Purchasebill/addPurchasebill?edit=${bill.purchaseId}`);
    };

    const filteredBills = bills.filter(bill =>
        bill.invoiceNo.toLowerCase().split(' ').some(word =>
            word.startsWith(searchTerm.toLowerCase())
        ) ||
        bill.supplierName?.toLowerCase().split(' ').some(word =>
            word.startsWith(searchTerm.toLowerCase())
        )
    );

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const totalPages = Math.ceil(filteredBills.length / recordsPerPage);
    const startIndex = (currentPage - 1) * recordsPerPage;

    const currentRecords = filteredBills.slice(startIndex, startIndex + recordsPerPage);

    return (
        <div className="min-h-screen w-full max-w-screen bg-gradient-to-br from-blue-50 to-blue-100 px-0 sm:px-0 py-0">

            {/* Title Header Centered */}
            <div className="text-center mb-8  justify-between items-center bg-cyan-100 shadow-sm p-4 mb-4 gap-4">
                <h1 className="text-3xl font-bold text-blue-900 tracking-tight">PURCHASE BILLS</h1>
                <p className="text-sm text-gray-500">Track and manage all your purchase bills.</p>
            </div>

            <div className="px-5">

                {/* New + Search Bar - Left and Right Aligned */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <button
                        onClick={handleNewClick}
                        className="flex items-center gap-2 bg-cyan-300 hover:bg-cyan-400 text-gray-700 px-4 py-2 rounded shadow text-sm font-semibold border border-gray-300"
                    >
                        <PlusCircle className="w-4 h-4" />
                        Add Purchase Bill
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
                                placeholder="Search invoice or supplier..."
                                className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-sm w-64"
                            />
                        </div>
                        {/* Records Info */}
                        <div className="text-sm text-gray-600 mt-1 text-center sm:text-right py-1">
                            Showing {currentRecords.length} of {filteredBills.length} Purchase Bills
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="min-w-full border border-gray-300 border-collapse">
                        <thead className="bg-cyan-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Purchase ID</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Invoice No</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Supplier</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Date</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border border-gray-300">Payment Type</th>
                                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700 border border-gray-300">Final Total</th>
                                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBills.map(bill => (
                                <tr
                                    key={bill.purchaseId}
                                    className={`transition-colors ${bill.isCancelled ? 'bg-red-100 text-red-600 italic' : 'hover:bg-blue-50'}`}
                                >
                                    <td className="w-27 px-4 py-2 text-sm border border-gray-300">{bill.purchaseId}</td>
                                    <td className="px-4 py-2 text-sm border border-gray-300">{bill.invoiceNo}</td>

                                    <td className="px-4 py-2 text-sm border border-gray-300">
                                        {bill.supplierName || bill.supplierId}
                                        {bill.isCancelled && (
                                            <span className="ml-2 text-xs font-semibold text-red-600 bg-red-200 px-2 py-1 rounded">
                                                [CANCELLED]
                                            </span>
                                        )}
                                    </td>

                                    <td className="px-4 py-2 text-sm border border-gray-300">{bill.date?.split('T')[0]}</td>
                                    <td className="w-31 px-4 py-2 text-sm border border-gray-300">{bill.paymentType}</td>
                                    <td className="px-4 py-2 text-sm border border-gray-300 text-right">₹{bill.finalTotal?.toFixed(2)}</td>

                                    <td className="px-4 py-2 text-sm border border-gray-300 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => handleEdit(bill)}
                                                className="p-2 rounded text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-all"
                                            >
                                                <FilePen className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredBills.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="text-center py-6 text-gray-500 border border-gray-300">
                                        No PurchaseBill found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {
                error && (
                    <div className="mt-4 text-sm text-red-600 font-medium">
                        Error: {error}
                    </div>
                )
            }
        </div >
    );
}
