<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicecontents extends Model
{
    public function service(){
        return $this->belongsTo(Services::class);
    }
}
