<?php
namespace App\Http\Controllers;  // Ensure the namespace matches the directory structure  

use Illuminate\Http\Request;  
use App\Models\Todo; // Adjust as necessary  

class TodoController extends Controller  
Route::apiResource('todos', TodoController::class);
