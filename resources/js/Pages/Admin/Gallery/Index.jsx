import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router, usePage } from '@inertiajs/react';

export default function Index({ images = [] }) {
    const { flash } = usePage().props;

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this gallery image?')) {
            router.delete(route('admin.gallery.destroy', id));
        }
    };

    return (
        <AdminLayout title="Gallery">
            <Head title="Admin - Gallery" />

            <div className="flex justify-end mb-6">
                <Link href={route('admin.gallery.create')} className="bg-bb-red hover:bg-bb-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md">
                    + Add Image
                </Link>
            </div>

            {flash?.success && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-800 text-sm">✅ {flash.success}</div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img) => (
                    <div key={img.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <span className="text-4xl">🖼️</span>
                        </div>
                        <div className="p-4">
                            <p className="font-semibold text-bb-dark text-sm mb-1">{img.title}</p>
                            <p className="text-gray-400 text-xs capitalize mb-3">{img.category}</p>
                            <div className="flex items-center justify-between">
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${img.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {img.is_active ? 'Active' : 'Inactive'}
                                </span>
                                <div className="flex items-center space-x-2">
                                    <Link href={route('admin.gallery.edit', img.id)} className="text-xs text-bb-red hover:text-bb-red-600 font-medium">Edit</Link>
                                    <button onClick={() => handleDelete(img.id)} className="text-xs text-red-500 hover:text-red-700 font-medium">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {images.length === 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-12 text-center text-gray-500">No gallery images yet.</div>
            )}
        </AdminLayout>
    );
}
