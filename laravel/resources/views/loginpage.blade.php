<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de login - CE</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script src="https://kit.fontawesome.com/d8f5b3aec3.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('css/loginpage.css') }}">
</head>
<body>
    <div class="container" id="container">

<!-- FORMULÁRIO DE LOGIN -->
<div class="form-container sign-in">
    <form id="login-form">
        <h1>Faça login</h1>
        <div class="social-icons">
            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <span>ou use seu email e senha para fazer login</span>
        <input type="email" id="email" placeholder="Email" required>
        <input type="password" id="senha" placeholder="Senha" required>
        <a href="#">Esqueceu sua senha?</a>
        <button type="submit">Entre</button>
    </form>
</div>

<!-- FORMULÁRIO DE CADASTRO -->
<div class="form-container sign-up">
    <form id="register-form">
        <h1>Cadastre-se</h1>
        <div class="social-icons">
            <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <span>ou use seu email e senha para se registrar</span>
        <input type="text" id="nome" placeholder="Nome" required>
        <input type="email" id="email-register" placeholder="Email" required>
        <input type="password" id="senha-register" placeholder="Senha" required>
        <select id="tipo">
            <option value="consumidor">Consumidor</option>
            <option value="produtor">Produtor</option>
        </select>
        <button type="submit">Cadastrar</button>
    </form>
</div>


        <!-- TOGGLE LOGIN / CADASTRO -->
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Boas vindas novamente!</h1>
                    <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                    <button class="hidden" id="login">Faça login</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Olá, seja bem-vindo!</h1>
                    <p>Cadastre-se com seus dados pessoais para usar todos os recursos do site</p>
                    <button class="hidden" id="register">Cadastre-se</button>
                </div>
            </div>
        </div>
    </div>

    <script src="{{ asset('login.js') }}"></script>
</body>
</html>
