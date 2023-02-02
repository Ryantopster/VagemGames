const botoesAcao = document.querySelectorAll('.botao-acao');
const botoesDirecao = document.querySelectorAll('.botao-direcao');
let botaoAcao, botaoDirecao;

function mostraControle() {
    if (window.matchMedia("(max-width: 480px)").matches) {
        document.querySelector('.botoes-de-acao').style.display = 'inline-block';
        document.querySelector('.botoes-de-direcao').style.display = 'inline-block';
        document.querySelector('.controle').style.display = 'block';
    }
}

for (let i = 0; i < botoesAcao.length; i++) {
    const btnAcao = botoesAcao[i];
    const selecionaBotao = botoesAcao[i].classList[1];
    btnAcao.addEventListener('click', () => {
        botaoAcao = selecionaBotao;
        console.log(botaoAcao)
    });
}

for (let i = 0; i < botoesDirecao.length; i++) {
    const btnDirecao = botoesDirecao[i];
    const selecionaBotao = botoesDirecao[i].classList[1];
    btnDirecao.addEventListener('click', () => {
        botaoDirecao = selecionaBotao;
    });
}

