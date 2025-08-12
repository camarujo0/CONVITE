// Pega os elementos da primeira etapa
const etapa1 = document.getElementById('etapa1');
const btnSim = document.getElementById('btnSim');
const btnNao = document.getElementById('btnNao');

// Pega os elementos da segunda etapa
const etapa2 = document.getElementById('etapa2');
const p1parte1 = document.getElementById('p1-parte1');
const p1parte2 = document.getElementById('p1-parte2');
const p2pergunta = document.getElementById('p2-pergunta');
const p3pergunta = document.getElementById('p3-pergunta');
const alternativasDiv = document.querySelector('.alternativas');
const alt1 = document.getElementById('alt1');
const alt2 = document.getElementById('alt2');
const alt3 = document.getElementById('alt3');

// Pega os elementos da terceira etapa
const etapa3 = document.getElementById('etapa3');
const tituloFinal = document.getElementById('titulo-final');
const dataFinal = document.getElementById('data-final');
const mapaLocal = document.getElementById('mapa-local');
const confirmacaoFinal = document.getElementById('confirmacao-final');

// Função para iniciar a animação da segunda etapa
function iniciarAnimacaoEtapa2() {
    setTimeout(() => {
        p1parte1.classList.remove('escondido-texto');
    }, 1000);

    setTimeout(() => {
        p1parte2.classList.remove('escondido-texto');
    }, 2500);

    setTimeout(() => {
        p2pergunta.classList.remove('escondido-texto');
    }, 4000);

    setTimeout(() => {
        p3pergunta.classList.remove('escondido-texto');
    }, 5000);

    setTimeout(() => {
        alternativasDiv.classList.remove('escondido-texto');
    }, 6000);
}

// Função para iniciar a animação da terceira etapa E DOS CONFETES
function iniciarAnimacaoEtapa3() {
    setTimeout(() => {
        tituloFinal.classList.remove('escondido-texto');
        // AQUI VOCÊ CHAMA A FUNÇÃO DE CONFETES DA OPÇÃO 1
        const confettiContainer = document.getElementById('confetti-container');
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animationDelay = `${Math.random() * 5}s`;
            confettiContainer.appendChild(confetti);
        }
    }, 500);

    setTimeout(() => {
        dataFinal.classList.remove('escondido-texto');
    }, 2000);

    // ADICIONAMOS O TEMPO DE ANIMAÇÃO PARA O MAPA
    setTimeout(() => {
        mapaLocal.classList.remove('escondido-texto');
    }, 3500);

    setTimeout(() => {
        confirmacaoFinal.classList.remove('escondido-texto');
    }, 5000);
}

// Quando o botão "Sim" ou "Não" for clicado (da etapa 1)
function avancarParaEtapa2() {
    etapa1.classList.add('escondido');
    etapa2.classList.remove('escondido');
    iniciarAnimacaoEtapa2();
}

btnSim.addEventListener('click', avancarParaEtapa2);
btnNao.addEventListener('click', avancarParaEtapa2);

// Quando qualquer botão de sorvete for clicado (da etapa 2)
function avancarParaEtapa3() {
    etapa2.classList.add('escondido');
    etapa3.classList.remove('escondido');
    iniciarAnimacaoEtapa3();
    // Confetes:
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) { // Cria 100 confetes
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confettiContainer.appendChild(confetti);
    }
}

alt1.addEventListener('click', avancarParaEtapa3);
alt2.addEventListener('click', avancarParaEtapa3);
alt3.addEventListener('click', avancarParaEtapa3);

