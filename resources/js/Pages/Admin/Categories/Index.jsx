import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Index({ categories = [] }) {
    const { flash } = usePage().props;

    const handleDelete = (id) => {
        if (confirm('Delete this category? Items in it will become uncategorized.')) {
            router.delete(route('admin.categories.destroy', id));
        }
    };

    return (
        <AdminLayout title="Categories">
            <Head title="Admin - Categories" />

            <div className="flex justify-end mb-6">
                <Link href={route('admin.categories.create')} className="bg-bb-red hover:bg-bb-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md">
                    + Add Category
                </Link>
            </div>

            {flash?.success && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-800 text-sm">✅ {flash.success}</div>
            )}

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Category</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Slug</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Items</th>
                            <th className="text-left px-6 py-4 font-semibold text-gray-600">Status</th>
                            <th className="text-right px-6 py-4 font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {categories.map((cat) => (
                            <tr key={cat.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="mr-2">{cat.emoji || '📂'}</span>
                                    <span className="font-semibold text-bb-dark">{cat.name}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-500 font-mono text-xs">{cat.slug}</td>
                                <td className="px-6 py-4 text-gray-600">{cat.menu_items_count ?? 0}</td>
                                <td className="px-6 py-4">
                                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${cat.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {cat.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link href={route('admin.categories.edit', cat.id)} className="text-bb-red hover:text-bb-red-600 font-medium mr-3 transition-colors">Edit</Link>
                                    <button onClick={() => handleDelete(cat.id)} className="text-red-500 hover:text-red-700 font-medium transition-colors">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {categories.length === 0 && (
                    <div className="text-center py-12 text-gray-500">No categories yet.</div>
                )}
            </div>
        </AdminLayout>
    );
}
