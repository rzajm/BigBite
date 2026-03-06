import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ image }) {
    const { data, setData, post, processing, errors } = useForm({
        title: image.title || '',
        category: image.category || 'food',
        description: image.description || '',
        sort_order: image.sort_order || 0,
        is_active: image.is_active ?? true,
        image: null,
        _method: 'PUT',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.gallery.update', image.id));
    };

    return (
        <AdminLayout title="Edit Gallery Image">
            <Head title="Admin - Edit Gallery Image" />
            <div className="max-w-xl">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} required className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                        <select value={data.category} onChange={(e) => setData('category', e.target.value)} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5">
                            <option value="food">Food</option>
                            <option value="interior">Interior</option>
                            <option value="events">Events</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={3} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Replace Image</label>
                        {image.image && (
                            <p className="text-xs text-gray-400 mb-2">Current: {image.image}</p>
                        )}
                        <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-bb-red/10 file:text-bb-red hover:file:bg-bb-red/20" />
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                            <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', e.target.value)} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                        </div>
                        <div className="flex items-end pb-1">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} className="rounded border-gray-300 text-bb-red focus:ring-bb-red" />
                                <span className="text-sm text-gray-700">Active</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 pt-4 border-t">
                        <button type="submit" disabled={processing} className="bg-bb-red hover:bg-bb-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all disabled:opacity-50">
                            {processing ? 'Saving...' : 'Update Image'}
                        </button>
                        <Link href={route('admin.gallery.index')} className="text-gray-500 hover:text-gray-700 font-medium">Cancel</Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
