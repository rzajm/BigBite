import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router, usePage } from '@inertiajs/react';

export default function Index({ users = [], roles = [] }) {
    const { flash } = usePage().props;

    const handleRoleChange = (userId, roleId) => {
        router.put(route('admin.users.update', userId), { role_id: roleId }, { preserveScroll: true });
    };

    const handleToggleActive = (userId, isActive) => {
        router.put(route('admin.users.update', userId), { is_active: !isActive }, { preserveScroll: true });
    };

    const handleDelete = (userId) => {
        if (confirm('Are you sure you want to delete this user?')) {
            router.delete(route('admin.users.destroy', userId));
        }
    };

    return (
        <AdminLayout title="Users">
            <Head title="Admin - Users" />

            {flash?.success && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-800 text-sm">✅ {flash.success}</div>
            )}
            {flash?.error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-red-800 text-sm">❌ {flash.error}</div>
            )}

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">User</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Email</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Role</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Status</th>
                            <th className="text-right px-6 py-4 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-bb-dark">{user.name}</td>
                                <td className="px-6 py-4 text-gray-600">{user.email}</td>
                                <td className="px-6 py-4">
                                    <select
                                        value={user.role_id}
                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                        className="rounded-lg border-gray-200 text-xs py-1 px-2 focus:border-bb-red focus:ring-bb-red/20"
                                    >
                                        {roles.map((r) => (<option key={r.id} value={r.id}>{r.name}</option>))}
                                    </select>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleToggleActive(user.id, user.is_active)}
                                        className={`text-xs px-2.5 py-1 rounded-full font-medium transition-colors ${
                                            user.is_active ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-red-100 text-red-800 hover:bg-red-200'
                                        }`}
                                    >
                                        {user.is_active ? 'Active' : 'Inactive'}
                                    </button>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:text-red-700 font-medium transition-colors text-xs">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
