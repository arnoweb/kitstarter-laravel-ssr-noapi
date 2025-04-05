<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class CategoryController extends BaseController
{
    public function pageArchi()
    {
        return Inertia::render('Archi', ['title' => 'Schéma technique','description' => '','menuItems' => $this->getMenuItems()]);
    }

    public function pageCredit()
    {
        return Inertia::render('Credits', ['title' => 'Crédits','description' => 'Arnaud BRETON 2025','menuItems' => $this->getMenuItems()]);
    }
}
