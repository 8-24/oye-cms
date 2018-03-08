<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Argumentcontents extends Model
{
    public function argument(){
        return $this->belongsTo(Argument::class);
    }
}
