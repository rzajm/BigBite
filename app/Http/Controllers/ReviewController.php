<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $reviews = $request->user()
            ->reviews()
            ->latest()
            ->get();

        return Inertia::render('Reviews/Index', [
            'reviews' => $reviews,
        ]);
    }

    public function create()
    {
        return Inertia::render('Reviews/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string|max:2000',
        ]);

        $request->user()->reviews()->create($validated);

        return redirect()->route('reviews.index')
            ->with('success', 'Review submitted! It will appear after moderation.');
    }

    public function edit(Request $request, Review $review)
    {
        if ($review->user_id !== $request->user()->id) {
            abort(403);
        }

        return Inertia::render('Reviews/Edit', [
            'review' => $review,
        ]);
    }

    public function update(Request $request, Review $review)
    {
        if ($review->user_id !== $request->user()->id) {
            abort(403);
        }

        $validated = $request->validate([
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'required|string|max:2000',
        ]);

        $review->update(array_merge($validated, ['is_approved' => false]));

        return redirect()->route('reviews.index')
            ->with('success', 'Review updated! It will be re-reviewed.');
    }

    public function destroy(Request $request, Review $review)
    {
        if ($review->user_id !== $request->user()->id) {
            abort(403);
        }

        $review->delete();

        return redirect()->route('reviews.index')
            ->with('success', 'Review deleted.');
    }
}
