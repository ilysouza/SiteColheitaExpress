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


Route::get('/product-detail', function () {
    return view('product-detail'); // 'product-detail' é o nome do arquivo em resources/views
});

Route::get('/cart', function () {
    return view('cart'); // O nome da sua view (cart.blade.php) sem o .blade.php
});

Route::get('/produtores', function () {
    return view('produtores'); // Assumindo que sua view se chama produtor.blade.php
});