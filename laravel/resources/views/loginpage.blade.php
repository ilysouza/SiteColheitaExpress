<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de login - CE</title>

    {{-- Ícones --}}
    <script src="https://kit.fontawesome.com/d8f5b3aec3.js" crossorigin="anonymous"></script>

    {{-- CSS --}}
    <link rel="stylesheet" href="{{ asset('css/loginpage.css') }}">
</head>

<body>
    <div class="container" id="container">
        <div class="form-container sign-up">
            <form>
                <h1>Crie uma conta</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <span>ou use seu email para se registrar</span>
                <input type="text" placeholder="Nome">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Senha">

                <div class="user-type">
                    <label><input type="radio" name="tipo" value="produtor" required> Produtor</label>
                    <label><input type="radio" name="tipo" value="consumidor"> Consumidor</label>
                </div>

                <button>Cadastre-se</button>
            </form>
        </div>

        <div class="form-container sign-in">
            <form>
                <h1>Faça login</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <span>ou use seu email e senha</span>
                <input type="email" placeholder="Email">
                <input type="password" placeholder="Senha">
                <a href="#">Esqueceu sua senha?</a>
                <button>Entre</button>
            </form>
        </div>

        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Boas vindas de volta!</h1>
                    <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                    <button class="hidden" id="login">Faça login</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Olá novamente!</h1>
                    <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                    <button class="hidden" id="register">Cadastre-se</button>
                </div>
            </div>
        </div>
    </div>

    {{-- JS --}}
    <script src="{{ asset('login.js') }}"></script>
</body>

</html>
