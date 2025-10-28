<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('../css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('../css/inicio.css') }}">
    <link rel="stylesheet" href="{{ asset('../css/bigcontainer.css') }}">

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
        <div class="banner">
            <h2>Compre sem procupações com Colheita Express, aqui é um lugar seguro
                para todos!</h2>
        </div>

        <div class="wave-container">
            <div class="wave" id="wave1" style="--i:1;"></div>
            <div class="wave" id="wave2" style="--i:2;"></div>
            <div class="wave" id="wave3" style="--i:3;"></div>
            <div class="wave" id="wave4" style="--i:4;"></div>
        </div>


        <script>
            let wave1 = document.getElementById('wave1');
            let wave2 = document.getElementById('wave2');
            let wave3 = document.getElementById('wave3');
            let wave4 = document.getElementById('wave4');

            window.addEventListener('scroll', function () {
                let value = window.scrollY;

                wave1.style.backgroundPositionX = 500 + value * 4 + 'px';
                wave2.style.backgroundPositionX = 380 + value * -4 + 'px';
                wave3.style.backgroundPositionX = 250 + value * 2 + 'px';
                wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
            })
        </script>
        <div class="bigcontainer">
            <section> <!--Divisão do site em seções-->
                <h2>Sobre o site</h2>
                <p>Com os problemas da perda de pedidos, pagamentos sem controle,
                    vários whatsapps simultâneos, foi necessário pensar em um jeito de
                    organizar isso de forma controlada, com isso, surgindo a ideia da <strong>Colheita Express, </strong>
                    uma plataforma digital pensada em cada usuário e vendedor. </p>
                <br>
                <h2>Nosso objetivo</h2>
                <p>A plataforma tem o objetivo de ajudar os produtores com os cadastros
                    e atualizações de seus produtos de forma <strong>organizada, estruturada e flexível,</strong>
                    podendo também ajudar com o lucro e despesas de suas vendas.</p>
                <p>Além dos clientes a melhor encontrar os produtos que desejam,
                    encomendá-los com preços variáveis e acessíveis, sem confusão e dentro
                    dos parâmetros. </p>
                <br>
                <hr>
            </section> <!--Introdução-->

            <section> <!--Produtos-->
                <div class="container">
                    <div class="card__container">

                    </div>
                </div>
            </section>
        </div>
    </main>
    <footer>footer</footer> <!--Rodapé do site-->

    <script src="../products.js"></script>
    <script src="../script.js"></script>

</body>

</html>