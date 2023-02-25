const botoesAcao = document.querySelectorAll('.botao-acao');
const botoesDirecao = document.querySelectorAll('.botao-direcao');
document.querySelector('.controle').style.display = 'none';
let botaoAcao, botaoDirecao;

//função que mostra o controle mobile
function mostraControle() {
    if (window.matchMedia("(max-width: 800px)").matches) {
        document.querySelector('.botoes-de-acao').style.display = 'inline-block';
        document.querySelector('.botoes-de-direcao').style.display = 'inline-block';
        document.querySelector('.controle').style.display = 'block';
    }
}

//funcionamento dos botões de ação
for (let i = 0; i < botoesAcao.length; i++) {
    const btnAcao = botoesAcao[i];
    const selecionaBotao = botoesAcao[i].classList[1];
    btnAcao.addEventListener('click', () => {
        botaoAcao = selecionaBotao;
    });
}

//funcionamento dos botões de direção
for (let i = 0; i < botoesDirecao.length; i++) {
    const btnDirecao = botoesDirecao[i];
    const selecionaBotao = botoesDirecao[i].classList[1];
    btnDirecao.addEventListener('click', () => {
        botaoDirecao = selecionaBotao;
    });
    
}

