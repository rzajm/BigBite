import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router, usePage } from '@inertiajs/react';

const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
};

export default function Index({ reservations = [] }) {
    const { flash } = usePage().props;

    const handleStatusChange = (id, status) => {
        router.put(route('admin.reservations.update', id), { status }, { preserveScroll: true });
    };

    return (
        <AdminLayout title="Reservations">
            <Head title="Admin - Reservations" />

            {flash?.success && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-800 text-sm">✅ {flash.success}</div>
            )}

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Guest</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Date & Time</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Party</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Status</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {reservations.map((res) => (
                            <tr key={res.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <p className="font-semibold text-bb-dark">{res.guest_name}</p>
                                    <p className="text-gray-400 text-xs">{res.guest_email}</p>
                                    {res.user && <p className="text-gray-400 text-xs mt-0.5">User: {res.user.name}</p>}
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-medium text-bb-dark">{res.date}</p>
                                    <p className="text-gray-500 text-xs">{res.time}</p>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{res.party_size}</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={res.status}
                                        onChange={(e) => handleStatusChange(res.id, e.target.value)}
                                        className={`rounded-lg border-0 text-xs py-1 px-2 font-medium ${statusStyles[res.status]}`}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 text-gray-500 text-xs max-w-[200px] truncate">
                                    {res.special_requests || '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {reservations.length === 0 && (
                    <div className="text-center py-12 text-gray-500">No reservations yet.</div>
                )}
            </div>
        </AdminLayout>
    );
}
