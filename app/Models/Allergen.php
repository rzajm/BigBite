<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Allergen extends Model
{
    protected $fillable = ['number', 'name'];

    public function menuItems(): BelongsToMany
    {
        return $this->belongsToMany(MenuItem::class)->withTimestamps();
    }
}
