<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bigcontainer.css') }}">
    <link rel="stylesheet" href="{{ asset('css/producer-profile.css') }}"> 

    <title>Perfil do Produtor - Colheita Express</title>
    <meta name="description" content="Página de perfil detalhado do produtor rural, com informações de contato e produtos.">

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
    
    <main>
        <div class="bigcontainer">
            <input type="hidden" id="producer-id" value="{{ $producerId ?? '' }}">

            <div class="producer-detail-container">

            <span class="voltar"><a href="{{ url('/produtores') }}"><i class="fa-solid fa-arrow-left"></i></a></span>

                <section class="producer-header-section">
                    <img class="producer-photo" src="" alt="Foto do Produtor">

                    <div class="producer-info">
                        <h2 class="producer-store-name"></h2>
                        <p class="producer-person-name"></p>
                        
                        <p class="producer-description"></p> 
                        
                        <hr>
                        <p class="producer-location"><i class="fa-solid fa-location-dot"></i> Local:</p>
                        <p class="producer-phone"><i class="fa-solid fa-phone"></i> Contato:</p>
                    </div>
                </section>

                <section> 
        <div class="container"> <h3>Produtos da <span class="producer-store-name-repeat">Fazenda</span></h3>
            
            <div class="producer-product-list card__container">
                </div>
            
        </div>
    </section>
                
            </div> </div>
    </main>

    <script src="{{ asset('products.js') }}"></script>
    <script src="{{ asset('script.js') }}"></script>
</body>

</html>