<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('../css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('../css/bigcontainer.css') }}">
    <link rel="stylesheet" href="{{ asset('../css/cart.css') }}">

    <title>Carrinho</title>
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


            <div class="cart">
                <div class="cart-header">
                    <span>Produtos</span>
                    <span>Preço</span>
                    <span>Quantidade</span>
                    <span>Total</span>
                    <span>Remover</span>
                </div>

                <div class="cart-itens">
                    <div class="cart-item">
                        <!-- <div class="product">
                            <img src="../img/abacaxi-perola.jpg">
                            <div class="item-detail">
                                <p>Abacaxi pérola</p>
                            </div>
                        </div>
                        <span class="price">R$ 8,50</span>
                        <div class="quantity"><input type="number" value="1" min="1"></div>
                        <span class="total-price">R$ 8,50</span>
                        <button class="remove"><i class="fa-solid fa-xmark"></i></button> -->
                    </div>
                </div>

                <div class="cart-total">
                    <h3>Total do carrinho</h3>
                    <p>Subtotal <span class="subtotal">R$ 0</span></p>
                    <p>Taxa de Entrega <span>Grátis</span></p>
                    <p>Total a Pagar <span class="grand-total">R$ 0</span></p>
                    <button class="btn">Concluir Compra</button>
                </div>
            </div>

        </div>
    </main>

    <script src="{{ asset('products.js') }}"></script>
    <script src="{{ asset('script.js') }}"></script>
</body>

</html>