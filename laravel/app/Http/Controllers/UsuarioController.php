<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UsuarioController extends Controller
{
    // ---------------- CADASTRO ----------------
    public function registrar(Request $request)
    {
        $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|string|email|unique:usuarios,email',
            'senha' => 'required|string|min:6',
            'tipo' => 'required|in:produtor,consumidor'
        ]);

        $usuario = Usuario::create([
            'nome' => $request->nome,
            'email' => $request->email,
            'senha' => Hash::make($request->senha),
            'tipo' => $request->tipo
        ]);

        return response()->json([
            'success' => true,
            'usuario' => $usuario
        ]);
    }

    // ---------------- LOGIN ----------------
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'senha' => 'required'
        ]);

        $usuario = Usuario::where('email', $request->email)->first();

        // Verifica se o usuário existe e se a senha está correta
        if (!$usuario || !Hash::check($request->senha, $usuario->senha)) {
            return response()->json([
                'success' => false,
                'message' => 'Email ou senha inválidos.'
            ]);
        }

        // Faz login manualmente
        Auth::login($usuario);

        return response()->json([
    'success' => true,
    'usuario' => $usuario,
    'redirect' => '/index'
]);
    }

    // ---------------- PERFIL ----------------
    public function perfil()
    {
        $usuario = auth()->user(); // pega o usuário logado
        return view('perfil', compact('usuario'));
    }

    // ---------------- ATUALIZAR PERFIL ----------------
    public function atualizarPerfil(Request $request)
    {
        $usuario = auth()->user();

        $request->validate([
            'endereco' => 'nullable|string|max:255',
            'cep' => 'nullable|string|max:20',
        ]);

        $usuario->update([
            'endereco' => $request->endereco,
            'cep' => $request->cep,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Perfil atualizado com sucesso!'
        ]);
    }
}
