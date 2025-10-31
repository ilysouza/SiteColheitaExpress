<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('../css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('../css/contato.css') }}">
    <link rel="stylesheet" href="{{ asset('../css/bigcontainer.css') }}">

    <title>Colheita Express</title>
    <meta name="description" content="Um site para ajudar agrícultores locais 
        com problemas das vendas e ajuda aos consumidores que necessitavam de praticidade!">

    <script src="https://kit.fontawesome.com/d8f5b3aec3.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>

<body 
    @auth 
        data-usertipo="{{ auth()->user()->tipo }}"
    @endauth
>
    <header>
<nav>
    <a class="logo"><h1>Colheita Express</h1></a>
    <ul class="nav-list">
        <li><a href="{{ url('/index') }}">Inicio</a></li>
        <li><a href="{{ url('/produtores') }}">Produtores</a></li>
        <li><a href="{{ url('/contato') }}">Contato</a></li>
        
        @auth 
            <li><a href="{{ url('/perfil') }}">Perfil</a></li>
            
            @if(auth()->user()->tipo == 'produtor')
                <li><a href="{{ url('/meus-produtos') }}">Meus Produtos</a></li>
            @endif

            <li><a href="{{ url('/cart') }}" class="carrinho-icon">
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="carrinho-item-count"></span></a>
            </li>
            <li><a href="{{ url('/configuracoes') }}"><i class="fa-solid fa-gear"></i></a></li>
        @endauth
    </ul>
</nav>
</header>

<div class="bigcontainer">
<div class="container contato-page">
    <h1 class="titulo-principal">Fale Conosco</h1>
    <p class="subtitulo-contato">Nossa equipe está pronta para tirar suas dúvidas e receber sugestões.</p>

    <div class="contato-grid">
        
        <div class="contato-form">
            <form action="{{ route('contato.enviar') }}" method="POST">
                @csrf 
                
                <div class="form-group">
                    <label for="nome">Seu Nome</label>
                    <input type="text" id="nome" name="nome" required>
                </div>

                <div class="form-group">
                    <label for="email">Seu Email</label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                    <label for="assunto">Assunto</label>
                    <input type="text" id="assunto" name="assunto" required>
                </div>

                <div class="form-group">
                    <label for="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" rows="6" required></textarea>
                </div>

                <button type="submit" class="btn-enviar">Enviar Mensagem</button>
            </form>
        </div>

        <div class="contato-info">
            <h2>Informações de Suporte</h2>
            
            <div class="info-item">
                <i class="fas fa-envelope"></i> 
                <div>
                    <h3>Email de Suporte</h3>
                    <p>suporte@colheitaexpress.com.br</p>
                </div>
            </div>

            <div class="info-item">
                <i class="fas fa-phone-alt"></i> 
                <div>
                    <h3>Telefone</h3>
                    <p>+55 (XX) XXXX-XXXX</p>
                    <p class="horario">Atendimento: Seg - Sex, 9h às 18h</p>
                </div>
            </div>

            <div class="info-item">
                <i class="fas fa-map-marker-alt"></i> 
                <div>
                    <h3>Endereço Sede</h3>
                    <p>Rua XXXXXX, 123 - Centro</p>
                    <p>Cidade XXXX - Estado XX, <br>CEP 00000-000</p>
                </div>
            </div>

            <div class="redes-sociais">
                <h3>Siga-nos</h3>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
            </div>
        </div>

    </div>
</div>
</div>

<script src="../script.js"></script>
<script src="../login.js"></script>

</body>
</html>