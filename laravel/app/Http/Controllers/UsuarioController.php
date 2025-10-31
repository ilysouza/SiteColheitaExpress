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

        // 1. REGRAS DE VALIDAÇÃO GERAL
        $regras = [
            'endereco' => 'nullable|string|max:255',
            'cep' => 'nullable|string|max:20',
            // Validações para Senha
            'nova_senha' => 'nullable|string|min:6', // Mínimo de 6 caracteres
            'senha_atual' => 'nullable|string',
            // Validações para Preferências (se for um array)
            'preferencias' => 'nullable|array',
        ];

        // Se a nova senha for enviada, a senha atual é exigida
        if ($request->filled('nova_senha')) {
            $regras['senha_atual'] = 'required|string'; 
        }

        // Valida os dados da requisição
        $validatedData = $request->validate($regras);

        // Objeto para armazenar o que será atualizado no banco
        $updates = [];
        $message = "Perfil atualizado com sucesso!";

        // 2. LÓGICA DE ALTERAÇÃO DE SENHA (A MAIS CRÍTICA)
        if ($request->filled('nova_senha')) {
            
            // Verifica se a nova senha e a confirmação do JS são iguais (a validação do Laravel não faz isso com campos separados, precisamos garantir)
            // No seu JS, você já validou que 'nova_senha' == 'confirmar_nova_senha'.
            
            // Verifica se a senha atual fornecida está correta
            if (!Hash::check($request->senha_atual, $usuario->senha)) {
                 return response()->json([
                     'success' => false, 
                     'message' => 'A senha atual fornecida está incorreta.'
                 ], 401); // Retorna 401 Unauthorized
            }
            
            // Se a senha atual estiver correta, hasheia a nova senha para salvar
            $updates['senha'] = Hash::make($validatedData['nova_senha']);
            $message = "Perfil e Senha atualizados com sucesso!";
        }
        
        // 3. ATUALIZAÇÃO DE ENDEREÇO E CEP
        // Adiciona as atualizações de endereço e cep se existirem
        $updates['endereco'] = $validatedData['endereco'] ?? $usuario->endereco;
        $updates['cep'] = $validatedData['cep'] ?? $usuario->cep;


        // 4. ATUALIZAÇÃO DE PREFERÊNCIAS (OPCIONAL, DEPENDE DO SEU MODELO)
        if ($request->has('preferencias') && is_array($request->preferencias)) {
            // Se você tiver uma coluna JSON/Text para preferências:
            // $updates['preferencias_json'] = json_encode($request->preferencias);

            // Se você tiver colunas individuais (ex: 'notificacoes_pedidos', 'perfil_publico'):
            // Você precisará mapear o nome do toggle para o nome da coluna no banco.
            
            // Exemplo MOCK para preferências (sem salvar de fato, apenas para demonstração)
            // Se você não tem um campo no banco, apenas ignore esta seção por enquanto.
        }

        // 5. SALVA NO BANCO (se houver algo para salvar)
        if (!empty($updates)) {
            $usuario->update($updates);
            return response()->json([
                'success' => true, 
                'message' => $message
            ]);
        }

        return response()->json([
            'success' => false, 
            'message' => 'Nenhuma alteração válida detectada.'
        ]);
    }
}
