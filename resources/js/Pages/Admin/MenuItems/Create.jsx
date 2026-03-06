import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create({ categories = [], allergens = [] }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        category_id: '',
        description: '',
        price: '',
        emoji: '',
        calories: '',
        preparation_time: '',
        is_featured: false,
        is_available: true,
        status: 'active',
        sort_order: 0,
        allergens: [],
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.menu-items.store'));
    };

    const toggleAllergen = (id) => {
        setData('allergens', data.allergens.includes(id)
            ? data.allergens.filter((a) => a !== id)
            : [...data.allergens, id]
        );
    };

    return (
        <AdminLayout title="Add Menu Item">
            <Head title="Admin - Add Menu Item" />

            <div className="max-w-3xl">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                            <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} required className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                            <select value={data.category_id} onChange={(e) => setData('category_id', e.target.value)} required className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5">
                                <option value="">Select category...</option>
                                {categories.map((c) => (<option key={c.id} value={c.id}>{c.name}</option>))}
                            </select>
                            {errors.category_id && <p className="text-red-500 text-xs mt-1">{errors.category_id}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} required rows={3} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20" />
                        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price (Ft) *</label>
                            <input type="number" value={data.price} onChange={(e) => setData('price', e.target.value)} required min="0" className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                            {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Emoji</label>
                            <input type="text" value={data.emoji} onChange={(e) => setData('emoji', e.target.value)} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" placeholder="🍔" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
                            <input type="number" value={data.calories} onChange={(e) => setData('calories', e.target.value)} min="0" className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Prep Time (min)</label>
                            <input type="number" value={data.preparation_time} onChange={(e) => setData('preparation_time', e.target.value)} min="0" className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
                            <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', e.target.value)} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select value={data.status} onChange={(e) => setData('status', e.target.value)} className="w-full rounded-xl border-gray-200 focus:border-bb-red focus:ring-bb-red/20 py-2.5">
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="seasonal">Seasonal</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-bb-red/10 file:text-bb-red hover:file:bg-bb-red/20" />
                    </div>

                    <div className="flex items-center space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" checked={data.is_featured} onChange={(e) => setData('is_featured', e.target.checked)} className="rounded border-gray-300 text-bb-red focus:ring-bb-red" />
                            <span className="text-sm text-gray-700">Featured</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" checked={data.is_available} onChange={(e) => setData('is_available', e.target.checked)} className="rounded border-gray-300 text-bb-red focus:ring-bb-red" />
                            <span className="text-sm text-gray-700">Available</span>
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Allergens</label>
                        <div className="flex flex-wrap gap-2">
                            {allergens.map((a) => (
                                <button key={a.id} type="button" onClick={() => toggleAllergen(a.id)}
                                    className={`inline-flex items-center text-xs px-3 py-1.5 rounded-full transition-all ${
                                        data.allergens.includes(a.id) ? 'bg-bb-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}>
                                    <span className="font-semibold mr-1">{a.number}</span>{a.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 pt-4 border-t">
                        <button type="submit" disabled={processing} className="bg-bb-red hover:bg-bb-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-all disabled:opacity-50">
                            {processing ? 'Creating...' : 'Create Menu Item'}
                        </button>
                        <Link href={route('admin.menu-items.index')} className="text-gray-500 hover:text-gray-700 font-medium transition-colors">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
