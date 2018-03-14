<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clients extends Model
{
    public function contents()
    {
        return $this->hasMany(Clientcontents::class);
    }

    public function presentation(){
        return $this->belongsTo(ClientWrapper::class);
    }
}
