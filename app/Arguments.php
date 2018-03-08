<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Arguments extends Model
{
    public function contents()
    {
        return $this->hasMany(Argumentcontents::class);
    }
}
