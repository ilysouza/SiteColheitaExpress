// ------------------ FUNÇÃO TROCAR ENTRE LOGIN / CADASTRO ------------------
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if (registerBtn && loginBtn && container) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

// ------------------ FUNÇÃO CADASTRAR ------------------
document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.querySelector(".sign-up form");

    if (signUpForm) {
        signUpForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = signUpForm.querySelector("input[placeholder='Nome']").value.trim();
            const email = signUpForm.querySelector("input[placeholder='Email']").value.trim();
            const senha = signUpForm.querySelector("input[placeholder='Senha']").value.trim();
            const tipoInput = signUpForm.querySelector("input[name='tipo']:checked");
            const tipo = tipoInput ? tipoInput.value : "";

            if (!nome || !email || !senha || !tipo) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            // salva os dados no localStorage (pode ser backend futuramente)
            const userData = { nome, email, tipo };
            localStorage.setItem("user", JSON.stringify(userData));

            // redireciona de acordo com o tipo
            if (tipo === "produtor") {
                window.location.href = "pagina-produtor.html";
            } else if (tipo === "consumidor") {
                window.location.href = "index.html";
            }
        });
    }
});
