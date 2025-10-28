<?php

use App\Http\Controllers\UsuarioController;

Route::post('/registrar', [UsuarioController::class, 'registrar']);
Route::post('/login', [UsuarioController::class, 'login']);

Route::middleware('auth')->group(function () {
    Route::get('/perfil', [UsuarioController::class, 'perfil']);
    Route::post('/perfil/atualizar', [UsuarioController::class, 'atualizarPerfil']);
});

Route::get('/login', function() {
    return view('loginpage');
});

Route::get('/index', function() {
    $usuario = auth()->user(); // pega o usuário logado
    return view('index', compact('usuario'));
})->middleware('auth'); // protege a rota para usuários logados

