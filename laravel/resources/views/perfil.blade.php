<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil - Colheita Express</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- FontAwesome -->
    <script src="https://kit.fontawesome.com/d8f5b3aec3.js" crossorigin="anonymous"></script>
    
    <!-- CSS Geral -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/perfil.css') }}">
</head>
<body data-usertipo="{{ $usuario->tipo }}">

<!-- Navbar -->
<header>
<nav>
    <a class="logo"><h1>Colheita Express</h1></a>
    <ul class="nav-list">
        <li><a href="{{ url('/index') }}">Inicio</a></li>
        <li><a href="{{ url('/produtores') }}">Produtores</a></li>
        <li><a href="{{ url('/contato') }}">Contato</a></li>
        <li><a href="{{ url('/perfil') }}">Perfil</a></li>

        @if($usuario->tipo == 'produtor')
            <li><a href="{{ url('/meus-produtos') }}">Meus Produtos</a></li>
        @endif

        <li><a href="{{ url('/cart') }}" class="carrinho-icon">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="carrinho-item-count"></span></a></li>
        <li><a href="{{ url('/configuracoes') }}"><i class="fa-solid fa-gear"></i></a></li>
    </ul>
</nav>
</header>


<div class="perfil-container">
    <h1>Olá, {{ $usuario->nome }}</h1>

    <!-- Abas -->
    <div class="tabs">
        <button class="tab-btn active" data-tab="geral">Geral</button>
        <button class="tab-btn" data-tab="notificacoes">Notificações</button>
        <button class="tab-btn" data-tab="privacidade">Privacidade</button>
        <button class="tab-btn" data-tab="pagamento">Pagamento</button>
        <button class="tab-btn" data-tab="conta">Conta</button>
        @if($usuario->tipo == 'produtor')
            <button class="tab-btn" data-tab="estatisticas">Estatísticas</button>
        @endif
    </div>

    <!-- Conteúdo das abas -->
    <div class="tab-content" id="geral">
        <h2>Localização</h2>
        <label>Endereço principal</label>
        <input type="text" placeholder="Digite seu endereço">
        <label>CEP</label>
        <input type="text" placeholder="Digite seu CEP">
    </div>

    <div class="tab-content" id="notificacoes">
        <h2>Notificações</h2>
        <button class="toggle-btn active">Atualizações de pedidos</button>
        <button class="toggle-btn active">Novos pedidos</button>
        <button class="toggle-btn">Promoções e ofertas</button>
    </div>

    <div class="tab-content" id="privacidade">
        <h2>Privacidade e Dados</h2>
        <button class="toggle-btn active">Perfil público</button>
        <button class="toggle-btn active">Compartilhar dados de uso</button>
        <button class="toggle-btn">Marketing personalizado</button>

        <h2>Controle de Dados</h2>
        <button>Baixar Meus Dados</button>
        <button>Excluir Histórico de navegação</button>
    </div>

    <div class="tab-content" id="pagamento">
        <h2>Métodos de Pagamento</h2>
        <button>Adicionar novo método</button>
        <h2>Configurações de Cobrança</h2>
        <button class="toggle-btn active">Salvar métodos de pagamento</button>
        <button class="toggle-btn">Cobranças automáticas</button>
    </div>

    <div class="tab-content" id="conta">
        <h2>Alterar Senha</h2>
        <input type="password" placeholder="Senha atual">
        <input type="password" placeholder="Nova senha">
        <input type="password" placeholder="Confirmar nova senha">

        <h2>Autenticação em Duas Etapas</h2>
        <button>Configurar autenticação</button>

        <h2>Zona de Perigo</h2>
        <button class="danger-btn">Desativar Conta</button>
        <button class="danger-btn">Excluir Conta Permanentemente</button>
    </div>

    <!-- Aba de estatísticas só para produtores -->
    @if($usuario->tipo == 'produtor')
    <div class="tab-content" id="estatisticas">
        <h2>Estatísticas de Vendas</h2>
        <canvas id="graficoVendas"></canvas>
        <h3>Produtos vendidos por mês</h3>
        <table>
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Janeiro</td><td>Produto A</td><td>12</td></tr>
                <tr><td>Fevereiro</td><td>Produto B</td><td>8</td></tr>
                <tr><td>Março</td><td>Produto C</td><td>15</td></tr>
            </tbody>
        </table>
    </div>
    @endif

    <button id="salvarPerfilBtn">Salvar Perfil</button>
</div>

<script src="{{ asset('perfil.js') }}"></script>
</body>
</html>
