// Passo 1 - Mensagem no Console (F12)
console.log("Portfólio de Fernando Massarotti carregado!");

// Passo 2 - Botão 'Quem sou eu?'
function apresentacao() {
    alert("Olá! Meu nome é Fernando Massarotti, estudante de ADS e ex-químico/cientista em transição para Desenvolvedor!");
}

// Passo 3 - Botão para personalizar o título
function alterarTitulo() {
    let novoNome = prompt("Digite o seu nome para personalizar o título:");
    if (novoNome) {
        document.getElementById("titulo-principal").innerHTML = "Portfólio de " + novoNome;
    }
}

// Passo 4 - Botão para destacar / remover destaque da seção Sobre
function destacarSobre() {
    let secaoSobre = document.getElementById("sobre");
    
    // Verifica se a seção já está destacada checando a borda
    if (secaoSobre.style.border === "2px solid rgb(129, 199, 132)") {
        // Se já está destacada, REMOVE o destaque (volta ao normal)
        secaoSobre.style.border = "1px solid var(--borda)";
        secaoSobre.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
    } else {
        // Se não está destacada, APLICA o destaque verde brilhante
        secaoSobre.style.border = "2px solid #81c784";
        secaoSobre.style.boxShadow = "0 0 15px rgba(129, 199, 132, 0.4)";
    }
}

// Passo 5 - Contador de cliques
let clique = 0;
function contarClique() {
    clique = clique + 1;
    document.getElementById("contador").innerHTML = clique;
}

// Passo Extra - Função para alternar o Modo Escuro (Liga / Desliga)
function modoEscuro() {
    let corpo = document.body;
    let cards = document.querySelectorAll(".card");

    // Verifica se o modo escuro extra já está ativado
    if (corpo.style.backgroundColor === "rgb(15, 23, 42)") {
        // Se estiver ativado, VOLTA ao tema padrão Dark Forest
        corpo.style.backgroundColor = "var(--bg-principal)";
        corpo.style.color = "var(--texto-principal)";

        cards.forEach(function(card) {
            card.style.backgroundColor = "var(--bg-card)";
            card.style.color = "var(--texto-principal)";
            card.style.borderColor = "var(--borda)";
        });
    } else {
        // Se não estiver ativado, APLICA o Modo Escuro Profundo
        corpo.style.backgroundColor = "#0f172a";
        corpo.style.color = "#f8fafc";

        cards.forEach(function(card) {
            card.style.backgroundColor = "#1e293b";
            card.style.color = "#f8fafc";
            card.style.borderColor = "#334155";
        });
    }
}

// Função cômica para apagar as luzes
function apagarLuzes() {
    let overlay = document.getElementById("overlay-apagao");
    overlay.style.display = "flex"; // Mostra a tela preta com o botão de socorro
}

// Função para reacender as luzes e voltar ao normal
function acenderLuzes() {
    let overlay = document.getElementById("overlay-apagao");
    overlay.style.display = "none"; // Esconde a tela preta
}