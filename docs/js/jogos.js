const botaoJogar = document.querySelectorAll('.botao-jogo');
const botaoIniciar = document.querySelector('#btn');
const botaoCSS = document.querySelector(".botao");
botaoIniciar.style.display = 'none';

document.querySelector('.botoes-de-acao').style.display = 'none';
document.querySelector('.botoes-de-direcao').style.display = 'none';

const canvas = document.querySelector('#canvas').style.display = 'none';
const ctx = document.getElementById("canvas").getContext("2d");
let wCanvas = 800, hCanvas = 600;

for (let i = 0; i < botaoJogar.length; i++) {
    const btnJogar = botaoJogar[i];
    const selecionaJogo = botaoJogar[i].classList[1];
    btnJogar.addEventListener('click', () => {
    esconderBotaoJogo('.jogos');
    comecarJogo(selecionaJogo)
});
}

function comecarJogo(selecionaJogo)  {
    botaoIniciar.addEventListener('click', () => {
            var verificaBotao = botaoCSS.attributes.class.value;
            if (verificaBotao == 'botao iniciar') {
                botaoCSS.removeAttribute('class', 'botao iniciar');
                botaoCSS.setAttribute('class', 'botao parar');
                botaoCSS.setAttribute('value', 'Parar');
                setup(selecionaJogo);
            } else {
                botaoCSS.removeAttribute('class', 'botao parar');
                botaoCSS.setAttribute('class', 'botao iniciar');
                botaoCSS.setAttribute('value', 'Iniciar');
                document.location.reload(true);    
            }
    });
} 

function esconderBotaoJogo(el) {
    var display = document.querySelector(el).style.display = 'block';

    if(display == 'block') {
        document.querySelector(el).style.display = 'none';
        criarCanvas();
    }
}

function criarCanvas() {
    document.querySelector('#canvas').style.display = 'block';
    document.querySelector('#btn').style.display = 'block';
    mostraControle();
}

function setup(selecionaJogo) {
    switch (selecionaJogo) {
        case 'ping-pong':
            jogarPingPong();
            break;
        case 'via-expressa':
            alert("Em desenvolvimento");
            document.location.reload(true); 
            break;
        case 'pegue-a-maca':
            alert("Em desenvolvimento");
            document.location.reload(true); 
            break;
        case 'cobrinha':
            jogarCobrinha(); 
            break;
        case 'pac-man':
            alert("Em desenvolvimento");
            document.location.reload(true); 
            break;
        case 'tetris':
            alert("Em desenvolvimento");
            document.location.reload(true); 
            break;  
        case 'space-invaders':
            alert("Em desenvolvimento");
            document.location.reload(true); 
            break;
        default:
            break;
    }
}

