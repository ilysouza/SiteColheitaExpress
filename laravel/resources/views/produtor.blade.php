<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bigcontainer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/product-detail.css') }}">

    <title>Colheita Express</title>
    <meta name="description" content="Um site para ajudar agrícultores locais 
        com problemas das vendas e ajuda aos consumidores que necessitavam de praticidade!">

    <script src="https://kit.fontawesome.com/d8f5b3aec3.js" crossorigin="anonymous"></script>
</head>

<body>

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


    <main> <!--Conteúdo principal do site-->
   
        <div class="bigcontainer">
            <div class="producer-detail-container">
        <div class="producer-image">
            <img class="producer-photo" src="" alt="Foto do Produtor">
        </div>

        <div class="producer-info">
            <h1 class="producer-person-name"></h1> 

            <h2 class="producer-store-name"></h2>

            <p class="producer-location"></p>
            <p class="producer-phone"></p>

            <hr>

            <h3>Produtos de <span class="producer-store-name-repeat"></span></h3>
            <div class="producer-product-list">
                </div>
        </div>
    </div>
        </div>

    </main>
    <script src="{{ asset('products.js') }}"></script>
    <script src="{{ asset('script.js') }}"></script>
</body>

</html>