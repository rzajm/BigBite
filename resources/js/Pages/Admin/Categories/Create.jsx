import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        emoji: '',
        sort_order: 0,
        is_active: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.categories.store'));
    };

    return (
        <AdminLayout title="Add Category">
            <Head title="Admin - Add Category" />
            <div className="max-w-xl">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} required className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={3} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Emoji</label>
                            <input type="text" value={data.emoji} onChange={(e) => setData('emoji', e.target.value)} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" placeholder="🍔" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                            <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', e.target.value)} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                        </div>
                    </div>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} className="rounded border-gray-300 text-bb-red focus:ring-bb-red" />
                        <span className="text-sm text-gray-700">Active</span>
                    </label>
                    <div className="flex items-center space-x-4 pt-4 border-t">
                        <button type="submit" disabled={processing} className="bg-bb-red hover:bg-bb-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all disabled:opacity-50">
                            {processing ? 'Creating...' : 'Create Category'}
                        </button>
                        <Link href={route('admin.categories.index')} className="text-gray-500 hover:text-gray-700 font-medium">Cancel</Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
