<?php

#use Illuminate\Support\Facades\Route;

#Route::get('/', function () {
#    return view('welcome');
#});

use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/archi-no-api', [CategoryController::class, 'pageArchi']);
Route::get('/credits', [CategoryController::class, 'pageCredit']);

Route::get('/test-menu', function () {
    $menuController = new \App\Http\Controllers\MenuController();
    return response()->json($menuController->getMenuItems());
});

Route::get('/admin/pages', [PageController::class, 'index']);
Route::get('/admin/pages/{page}/edit', [PageController::class, 'edit']);
Route::post('/admin/pages', [PageController::class, 'store']);
Route::put('/admin/pages/{page}', [PageController::class, 'update']);
