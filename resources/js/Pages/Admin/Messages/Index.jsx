import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, usePage, router } from '@inertiajs/react';

export default function Index({ messages }) {
    const { flash } = usePage().props;

    const handleDelete = (id) => {
        if (confirm('Biztosan törölni szeretnéd ezt az üzenetet?')) {
            router.delete(route('admin.messages.destroy', id));
        }
    };

    const statusColor = (msg) => msg.is_read ? 'bg-gray-100 text-gray-500' : 'bg-bb-red/10 text-bb-red font-semibold';

    return (
        <AdminLayout title="Messages">
            <Head title="Admin - Messages" />

            {flash?.success && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">{flash.success}</div>
            )}

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {messages.length === 0 ? (
                            <tr><td colSpan={6} className="px-6 py-12 text-center text-gray-400">Nincsenek üzenetek.</td></tr>
                        ) : messages.map((msg) => (
                            <tr key={msg.id} className={`hover:bg-gray-50 transition-colors ${!msg.is_read ? 'bg-bb-red/5' : ''}`}>
                                <td className="px-6 py-4">
                                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs ${statusColor(msg)}`}>
                                        {msg.is_read ? 'Olvasott' : 'Új'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{msg.name}</td>
                                <td className="px-6 py-4 text-gray-500 text-sm">{msg.email}</td>
                                <td className="px-6 py-4 text-gray-700 text-sm max-w-xs truncate">{msg.subject}</td>
                                <td className="px-6 py-4 text-gray-400 text-sm">{new Date(msg.created_at).toLocaleDateString('hu-HU')}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <Link href={route('admin.messages.show', msg.id)} className="text-bb-red hover:text-bb-red-600 text-sm font-medium">
                                            Megtekintés
                                        </Link>
                                        <button onClick={() => handleDelete(msg.id)} className="text-red-400 hover:text-red-600 text-sm">
                                            Törlés
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
