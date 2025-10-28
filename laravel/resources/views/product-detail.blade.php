<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/bigcontainer.css">
    <link rel="stylesheet" href="../css/product-detail.css">

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


    <main> <!--Conteúdo principal do site-->
        <div class="bigcontainer">

            <span class="voltar"><a href="index.html"><i class="fa-solid fa-arrow-left"></i></a></span>

            <div class="produto-detalhe">
                <div class="produto-img">

                </div>

                <div class="produto-info">
                    <h2 class="title"></h2>

                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <span>(4.8)</span>
                    </div>

                    <span class="price"></span>

                    <p class="description">
                    </p>

                    <div class="compra">
                        <button class="btn" id="add-cartbtn">Adicionar ao carrinho</button>
                    </div>

                    <hr>

                    <div class="detailLoc">
                        <p></p>
                    </div>
                </div>
            </div>

            <span class="line">
                <hr>
            </span>

            <h2 class="titulo">Comentários e avaliações</h2>

            <div class="comcontainer">
                <div class="comment">
                    <h4>Lorena Lima — Consumidor(a)</h4>
                    <div class="rating-comment">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <span>(4.0)</span>
                    </div>
                    <div class="avaliacao">
                        <i class="fa-regular fa-image"></i>
                        <span>Adorei o produto!</span>
                    </div>
                </div>

                <div class="comment">
                    <h4>Pedro Manuel — Consumidor(a)</h4>
                    <div class="rating-comment">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>(5.0)</span>
                    </div>
                    <div class="avaliacao">
                        <i class="fa-regular fa-image"></i>
                        <span>Com certeza comprarei mais! Ótimo produto, sucesso em todas as vendas.</span>
                    </div>
                </div>

                <div class="comment">
                    <h4>Rodinei Ramos — Produtor(a)</h4>
                    <div class="rating-comment">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <span>(5.0)</span>
                    </div>
                    <div class="avaliacao">
                        <i class="fa-regular fa-image"></i>
                        <span>Sucesso! Adorei o produto, venham visitar minhas vendas qualquer dia também:)</span>
                    </div>
                </div>

            </div>

        </div>


    </main>
    <script src="../products.js"></script>
    <script src="../script.js"></script>
</body>

</html>