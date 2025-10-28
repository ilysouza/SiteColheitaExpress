document.addEventListener("DOMContentLoaded", () => {
    // ------------------ TROCA DE ABAS ------------------
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;

            // ativa aba clicada
            contents.forEach(c => c.style.display = "none");
            const activeContent = document.getElementById(target);
            if(activeContent) activeContent.style.display = "block";

            // ativa botão
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });

    // mostra primeira aba por padrão
    if(contents.length > 0) contents[0].style.display = "block";
    if(tabs.length > 0) tabs[0].classList.add("active");

    // ------------------ TOGGLES ------------------
    const toggles = document.querySelectorAll(".toggle-btn");
    toggles.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
        });
    });

    // ------------------ SALVAR PERFIL ------------------
    const salvarPerfilBtn = document.getElementById("salvarPerfilBtn");
    if(salvarPerfilBtn) {
        salvarPerfilBtn.addEventListener("click", async () => {
            const endereco = document.getElementById("endereco")?.value || "";
            const cep = document.getElementById("cep")?.value || "";

            const response = await fetch("/perfil/atualizar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
                },
                body: JSON.stringify({ endereco, cep })
            });

            const data = await response.json();
            if(data.success) alert(data.message);
        });
    }

    // ------------------ GRÁFICO DE VENDAS (SÓ PRODUTOR) ------------------
    const grafico = document.getElementById("graficoVendas");
    if(grafico) {
        const ctx = grafico.getContext("2d");
        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        const vendas = [1200, 800, 950, 1100, 1300, 1250, 1400, 1500, 1350, 1600, 1700, 1800];

        new Chart(ctx, {
            type: "line",
            data: {
                labels: meses,
                datasets: [{
                    label: "Total ganho por mês (R$)",
                    data: vendas,
                    backgroundColor: "rgba(81, 45, 168, 0.2)",
                    borderColor: "rgba(81, 45, 168, 1)",
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    // ------------------ ESCONDER ABA DE ESTATÍSTICAS PARA CONSUMIDORES ------------------
    const estatisticasTabBtn = document.querySelector('.tab-btn[data-tab="estatisticas"]');
    const estatisticasContent = document.getElementById('estatisticas');

    if(estatisticasTabBtn && estatisticasContent) {
        const usuarioTipo = document.body.dataset.usertipo; // vamos setar no Blade
        if(usuarioTipo !== "produtor") {
            estatisticasTabBtn.style.display = "none";
            estatisticasContent.style.display = "none";
        }
    }
});
