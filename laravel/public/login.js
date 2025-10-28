// ------------------ TROCAR ENTRE LOGIN E CADASTRO ------------------
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if (registerBtn && loginBtn && container) {
    // Mostrar formulário de cadastro
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    // Mostrar formulário de login
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({ email, senha })
            });

            const data = await response.json();
            if (data.success) {
                window.location.href = data.redirect || "/index";
            } else {
                alert(data.message || "Email ou senha incorretos!");
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao tentar fazer login.");
        }
    });
}

// Cadastro (exemplo básico)
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email-register").value.trim();
        const senha = document.getElementById("senha-register").value.trim();
        const tipo = document.getElementById("tipo").value;

        try {
            const response = await fetch("/registrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({ nome, email, senha, tipo })
            });

            const data = await response.json();
            if (data.success) {
                alert("Cadastro realizado! Faça login.");
                container.classList.remove("active"); // volta para login
            } else {
                alert(data.message || "Erro no cadastro!");
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao tentar cadastrar.");
        }
    });
}

