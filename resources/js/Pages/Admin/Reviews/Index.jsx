import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router, usePage } from '@inertiajs/react';

export default function Index({ reviews = [] }) {
    const { flash } = usePage().props;

    const handleApprove = (id, isApproved) => {
        router.put(route('admin.reviews.update', id), { is_approved: !isApproved }, { preserveScroll: true });
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this review?')) {
            router.delete(route('admin.reviews.destroy', id));
        }
    };

    return (
        <AdminLayout title="Reviews">
            <Head title="Admin - Reviews" />

            {flash?.success && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-green-800 text-sm">✅ {flash.success}</div>
            )}

            <div className="space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-2xl shadow-sm p-6">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <div className="flex items-center space-x-1 text-bb-orange mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <span key={s} className={s <= review.rating ? '' : 'opacity-30'}>★</span>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-600">
                                    by <span className="font-semibold">{review.user?.name || 'Unknown'}</span>
                                    <span className="text-gray-400 ml-2">
                                        {new Date(review.created_at).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </span>
                                </p>
                            </div>
                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                review.is_approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                                {review.is_approved ? '✅ Published' : '⏳ Pending'}
                            </span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.comment}</p>
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => handleApprove(review.id, review.is_approved)}
                                className={`text-sm font-medium transition-colors ${
                                    review.is_approved ? 'text-yellow-600 hover:text-yellow-800' : 'text-green-600 hover:text-green-800'
                                }`}
                            >
                                {review.is_approved ? 'Unpublish' : 'Approve'}
                            </button>
                            <button onClick={() => handleDelete(review.id)} className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
                {reviews.length === 0 && (
                    <div className="bg-white rounded-2xl shadow-sm p-12 text-center text-gray-500">No reviews yet.</div>
                )}
            </div>
        </AdminLayout>
    );
}
