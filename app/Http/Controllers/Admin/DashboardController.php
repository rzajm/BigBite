<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use App\Models\MenuItem;
use App\Models\Reservation;
use App\Models\Review;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalUsers' => User::count(),
                'totalMenuItems' => MenuItem::count(),
                'pendingReservations' => Reservation::where('status', 'pending')->count(),
                'pendingReviews' => Review::where('is_approved', false)->count(),
                'unreadMessages' => ContactMessage::where('is_read', false)->count(),
                'todayReservations' => Reservation::whereDate('date', today())
                    ->where('status', '!=', 'cancelled')
                    ->count(),
            ],
        ]);
    }
}
