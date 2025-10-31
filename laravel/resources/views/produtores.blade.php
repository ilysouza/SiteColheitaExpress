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
    <link rel="stylesheet" href="{{ asset('css/produtores.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bigcontainer.css') }}">
</head>
<body>

<!-- Navbar -->
<header>
<nav>
    <a class="logo"><h1>Colheita Express</h1></a>
    <ul class="nav-list">
        <li><a href="{{ url('/index') }}">Inicio</a></li>
        <li><a href="{{ url('/produtores') }}">Produtores</a></li>
        <li><a href="{{ url('/contato') }}">Contato</a></li>
            <li><a href="{{ url('/perfil') }}">Perfil</a></li>
            @if(auth()->user()->tipo == 'produtor')
                <li><a href="{{ url('/meus-produtos') }}">Meus Produtos</a></li>
            @endif
        <li><a href="{{ url('/cart') }}" class="carrinho-icon">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="carrinho-item-count"></span></a></li>
        <li><a href="{{ url('/configuracoes') }}"><i class="fa-solid fa-gear"></i></a></li>
    </ul>
</nav>
</header>

<div class="bigcontainer">
    <input type="hidden" id="producer-id" value="{{ $producerId ?? '' }}"> 
    <div class="comeco">
        <h1>Nossos Produtores Rurais</h1>
    </div>
    
    <section class="producers__list">
    </section>
</div>

<script src="{{ asset('products.js') }}"></script>
    <script src="{{ asset('script.js') }}"></script>
</body>
</html>