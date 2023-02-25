//define variaveis dos botoes dos jogos, iniciar jogo e o estilo do
const botaoJogar = document.querySelectorAll('.botao-jogo');
const botaoIniciarJogo = document.querySelector('#btn');
const estiloBotaoIniciar = document.querySelector(".botao");

//esconde o botão de iniciar o jogo
botaoIniciarJogo.style.display = 'none';

//esconde os botões do controle
document.querySelector('.botoes-de-acao').style.display = 'none';
document.querySelector('.botoes-de-direcao').style.display = 'none';

//define variavéis do canvas
const canvas = document.querySelector('#canvas').style.display = 'none';
const ctx = document.getElementById("canvas").getContext("2d");
const wCanvas = document.getElementById('canvas').width;
const hCanvas = document.getElementById('canvas').height;

//função responsável pela seleção dos jogos
function selecionaJogo() {
    for (let i = 0; i < botaoJogar.length; i++) {
        const btnJogar = botaoJogar[i];
        const selecionaJogo = botaoJogar[i].classList[1];
        btnJogar.addEventListener('click', () => {
        esconderBotaoJogo('.jogos');
        comecarJogo(selecionaJogo);
    });
    }
}

//botao que ao ser clicado, começa o jogo
function comecarJogo(selecionaJogo)  {
    botaoIniciarJogo.addEventListener('click', () => {
            var verificaBotao = estiloBotaoIniciar.attributes.class.value;
            if (verificaBotao == 'botao iniciar') {
                estiloBotaoIniciar.removeAttribute('class', 'botao iniciar');
                estiloBotaoIniciar.setAttribute('class', 'botao parar');
                estiloBotaoIniciar.setAttribute('value', 'Parar');
                setup(selecionaJogo);
            } else {
                estiloBotaoIniciar.removeAttribute('class', 'botao parar');
                estiloBotaoIniciar.setAttribute('class', 'botao iniciar');
                estiloBotaoIniciar.setAttribute('value', 'Iniciar');
                document.location.reload(true);
            }
    });
} 

//esconde os botoes que selecionam os jogos
function esconderBotaoJogo(el) {
    var display = document.querySelector(el).style.display = 'block';

    if(display == 'block') {
        document.querySelector(el).style.display = 'none';
        criarCanvas();
    }
}

//mostra o canvas e o controle caso esteja no mobile
function criarCanvas() {
    document.querySelector('#canvas').style.display = 'block';
    document.querySelector('#btn').style.display = 'block';
    mostraControle();
}

//função responsável por começar os jogos
function setup(selecionaJogo) {
    switch (selecionaJogo) {
        case 'ping-pong':
            jogarPingPong();
            break;
        case 'via-expressa':
            jogarViaExpressa();
            break;
        case 'pegue-a-maca':
            jogarPegueAMaca(); 
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

selecionaJogo();