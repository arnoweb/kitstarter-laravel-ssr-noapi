<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class MenuController extends Controller
{
    public function getMenuItems(): array
    {
        return [
            [
                'href' => '/',
                'label' => 'POC Web Application - Archi universelle'
            ],
            [
                'href' => '/archi-no-api',
                'label' => 'En savoir plus'
            ],
            [
                'href' => '/credits',
                'label' => 'Crédits'
            ]
        ];
    }
}
