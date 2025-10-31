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
        // Objeto para armazenar TODOS os dados coletados
        const dadosParaEnviar = {};

        // === 1. COLETA DE DADOS DA ABA GERAL (Localização) ===
        const endereco = document.getElementById("endereco")?.value.trim() || "";
        const cep = document.getElementById("cep")?.value.trim() || "";
        
        // Só adiciona se tiver valor
        if (endereco) dadosParaEnviar.endereco = endereco;
        if (cep) dadosParaEnviar.cep = cep;

        // === 2. COLETA DE DADOS DA ABA CONTA (Alteração de Senha) ===
        const senhaAtual = document.getElementById("senha_atual")?.value.trim() || "";
        const novaSenha = document.getElementById("nova_senha")?.value.trim() || "";
        const confirmarNovaSenha = document.getElementById("confirmar_nova_senha")?.value.trim() || "";
        
        if (senhaAtual || novaSenha || confirmarNovaSenha) {
            // Validação básica de senhas no frontend
            if (novaSenha !== confirmarNovaSenha) {
                alert("Erro: A nova senha e a confirmação não coincidem.");
                return;
            }
            if (!senhaAtual || !novaSenha) {
                alert("Erro: Para mudar a senha, você deve preencher a senha atual e a nova senha.");
                return;
            }
            dadosParaEnviar.senha_atual = senhaAtual;
            dadosParaEnviar.nova_senha = novaSenha;
        }

        // === 3. COLETA DE DADOS DE NOTIFICAÇÕES/PRIVACIDADE (Toggles) ===
        // Para simplificar, vamos coletar o estado de todos os toggles ativos
        const togglesAtivos = Array.from(document.querySelectorAll(".toggle-btn.active"))
                                   .map(btn => btn.textContent.trim());
                                   
        // O Laravel pode processar essa lista para atualizar as configurações de preferência
        dadosParaEnviar.preferencias = togglesAtivos;
        
        // --- ENVIO DA REQUISIÇÃO ---
        console.log("Dados prontos para envio:", dadosParaEnviar);

        if (Object.keys(dadosParaEnviar).length === 0) {
            alert("Nenhuma alteração detectada para salvar.");
            return;
        }

        try {
            const response = await fetch("/perfil/atualizar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Garantir que o CSRF Token esteja correto
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content 
                },
                body: JSON.stringify(dadosParaEnviar)
            });

            const data = await response.json();

            if(data.success) {
                alert(data.message || "Perfil atualizado com sucesso!");
                // Limpa campos de senha após sucesso para segurança
                if (dadosParaEnviar.nova_senha) {
                    document.getElementById("senha_atual").value = "";
                    document.getElementById("nova_senha").value = "";
                    document.getElementById("confirmar_nova_senha").value = "";
                }
            } else {
                // Exibir mensagens de erro específicas do Laravel (ex: "A senha atual está incorreta")
                alert("Erro ao salvar: " + (data.message || "Verifique o console para detalhes."));
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Ocorreu um erro na comunicação com o servidor.");
        }
    });
}

    // ------------------ GRÁFICO DE VENDAS (SÓ PRODUTOR) ------------------
const grafico = document.getElementById("graficoVendas");

if(grafico) {
    // 1. Obtém o contexto 2D do Canvas
    const ctx = grafico.getContext("2d");
    
    // 2. Dados Fictícios de Exemplo
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    // Valores de venda em Reais (R$) para cada mês
    const vendas = [1200, 800, 950, 1100, 1300, 1250, 1400, 1500, 1350, 1600, 1700, 1800];

    // 3. Cria o novo Gráfico de Linhas
    new Chart(ctx, {
        type: "line", // Tipo de gráfico: Linha
        data: {
            labels: meses,
            datasets: [{
                label: "Total ganho por mês (R$)",
                data: vendas,
                // Estilos do gráfico (cores baseadas no seu tema roxo)
                backgroundColor: "rgba(81, 45, 168, 0.3)", // Preenchimento abaixo da linha
                borderColor: "rgba(81, 45, 168, 1)",      // Cor da Linha
                borderWidth: 3,
                tension: 0.4, // Suaviza as curvas da linha
                fill: true,   // Ativa o preenchimento abaixo da linha
            }]
        },
        options: {
            responsive: true,
            // Configurações dos Eixos
            scales: {
                y: { 
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Valor (R$)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Mês'
                    }
                }
            },
            // Configurações de Plugin
            plugins: {
                legend: { 
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Evolução de Ganhos Mensais'
                }
            }
        }
    });
}

// ------------------ ESCONDER ABA DE ESTATÍSTICAS PARA CONSUMIDORES ------------------
const estatisticasTabBtn = document.querySelector('.tab-btn[data-tab="estatisticas"]');
const estatisticasContent = document.getElementById('estatisticas');

if(estatisticasTabBtn && estatisticasContent) {
    // Agora, document.body.dataset.usertipo virá do seu Blade
    const usuarioTipo = document.body.dataset.usertipo; 
    
    // Se o tipo NÃO for 'produtor', esconde a aba.
    if(usuarioTipo !== "produtor") {
        estatisticasTabBtn.style.display = "none";
        estatisticasContent.style.display = "none";
    }
}
});
