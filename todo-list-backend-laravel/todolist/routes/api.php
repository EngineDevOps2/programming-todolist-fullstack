<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;  

Route::get('/api/todos', [TodoController::class, 'index']);  
Route::post('/api/todos', [TodoController::class, 'store']);  
Route::get('/api/todos/{id}', [TodoController::class, 'show']);  
Route::put('/api/todos/{id}', [TodoController::class, 'update']);  
Route::delete('/api/todos/{id}', [TodoController::class, 'destroy']);
