<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    public function contents()
    {
        return $this->hasMany(Servicecontents::class);
    }


}
