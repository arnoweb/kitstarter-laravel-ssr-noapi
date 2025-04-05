<?php

namespace App\Http\Controllers;

use App\Http\Controllers\MenuController;

class BaseController extends Controller
{
    protected function getMenuItems(): array
    {
        $menuController = new MenuController();
        return $menuController->getMenuItems();
    }
}
