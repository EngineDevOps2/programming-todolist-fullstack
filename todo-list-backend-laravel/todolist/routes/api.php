<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use AppHttpControllersTodoController;

Route::apiResource('todos', TodoController::class);
