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
    $usuario = auth()->user();
    return view('index', compact('usuario'));
})->middleware('auth');


Route::get('/product-detail', function () {
    return view('product-detail');
});

Route::get('/cart', function () {
    return view('cart');
});

Route::get('/produtores', function () {
    return view('produtores', ['producerId' => null]); 
});

Route::get('/configuracoes', function () {
    return view('perfil');
});

Route::get('/produtores/{id}', function ($id) {
    return view('produtor', ['producerId' => $id]);
});

Route::post('/perfil/atualizar', [PerfilController::class, 'atualizar'])
    ->middleware('auth') // Garante que apenas usuários logados acessem
    ->name('perfil.atualizar');

    Route::get('/contato', function () {
    // Retorna a view 'contato' (que deve ser o arquivo contato.blade.php)
    return view('contato'); 
})->name('contato');

// Rota POST para o formulário. Sem um Controller real, ela pode ser uma rota de fallback.
// Para evitar o erro "Method Not Allowed" ao tentar enviar o formulário, é bom ter um POST definido, 
// mesmo que apenas para direcionar para uma mensagem simples ou usar um serviço externo.
Route::post('/contato/enviar', function () {
    // Aqui é onde você usaria um serviço externo (como Formspree)
    // OU simplesmente retorna uma mensagem de "Formulário não implementado ainda"
    return redirect()->route('contato')->with('success', 'Mensagem recebida! (Envio desativado)');
})->name('contato.enviar');