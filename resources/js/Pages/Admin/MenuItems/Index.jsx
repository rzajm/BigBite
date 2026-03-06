import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Index({ menuItems = [] }) {
    const { flash } = usePage().props;

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this menu item?')) {
            router.delete(route('admin.menu-items.destroy', id));
        }
    };

    return (
        <AdminLayout title="Menu Items">
            <Head title="Admin - Menu Items" />

            <div className="flex justify-end mb-6">
                <Link
                    href={route('admin.menu-items.create')}
                    className="bg-bb-red hover:bg-bb-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md"
                >
                    + Add Menu Item
                </Link>
            </div>

            {flash?.success && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-800 text-sm">
                    ✅ {flash.success}
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Item</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Category</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Price</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Status</th>
                            <th className="text-right px-6 py-4 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {menuItems.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-2xl">{item.emoji || '🍽️'}</span>
                                        <div>
                                            <p className="font-semibold text-bb-dark">{item.name}</p>
                                            <p className="text-gray-400 text-xs truncate max-w-[200px]">{item.description}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{item.category?.name || '-'}</td>
                                <td className="px-6 py-4 font-semibold text-bb-dark">{item.price?.toLocaleString()} Ft</td>
                                <td className="px-6 py-4">
                                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                        item.is_available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {item.is_available ? 'Available' : 'Unavailable'}
                                    </span>
                                    {item.is_featured && (
                                        <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-bb-orange/20 text-bb-orange ml-1">
                                            ⭐ Featured
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link
                                        href={route('admin.menu-items.edit', item.id)}
                                        className="text-bb-red hover:text-bb-red-600 font-medium mr-3 transition-colors"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-500 hover:text-red-700 font-medium transition-colors"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {menuItems.length === 0 && (
                    <div className="text-center py-12 text-gray-500">No menu items yet.</div>
                )}
            </div>
        </AdminLayout>
    );
}
