document.querySelector('#btnNavegacao').style.display = 'none';
document.querySelector('#btnNavegacaoVoltar').style.display = 'none';
document.querySelector('#tituloCabecalho').style.display = 'none';
document.querySelector('.sombra-bg').style.display = 'none';
const botaoVoltarNav = document.querySelectorAll('#btnNavegacaoVoltar');

//se a largura maxima da janela for igual a 800px, mostra a barra de navegação mobile, caso contrário não mostra.
function larguraDaTela() {
    if (window.matchMedia("(max-width: 800px)").matches) {
    mostraNavMobile();
    } else {
        escondeNavMobile();
    }
}

//esconde barra de navegação mobile.
function escondeNavMobile() {
    document.querySelector('.caixa').style.display = 'block';
    document.querySelector('.btn-muda-tema').style.display = 'block';
    document.querySelector('#btnNavegacao').style.display = 'none';
    document.querySelector('#btnNavegacaoVoltar').style.display = 'none';
    document.querySelector('.btn-muda-tema-nav').style.display = 'none';
    document.querySelector('#tituloCabecalho').style.display = 'none';

}

//mostra barra de navegação mobile.
function mostraNavMobile() {
    document.querySelector('.caixa').style.display = 'none';
    document.querySelector('.btn-muda-tema').style.display = 'none';
    document.querySelector('#btnNavegacao').style.display = 'inline-block';
    document.querySelector('#btnNavegacaoVoltar').style.display = 'block';
    document.querySelector('.btn-muda-tema-nav').style.display = 'inline-block';
    document.querySelector('#tituloCabecalho').style.display = 'block';
}

//botao de navegação das paginas no mobile.
function botaoNavMobile() {
    const botaoNavMobile = document.getElementById('btnNavegacao');
    botaoNavMobile.addEventListener('click', () => {
        document.querySelector('.caixa').style.display = 'block';
        document.querySelector('.btn-muda-tema-nav').style.display = 'block';
        document.querySelector('#btnNavegacao').style.display = 'none';
        document.querySelector('#tituloCabecalho').style.display = 'none';
        document.querySelector('.sombra-bg').style.display = 'block';
        unloadScrollBars();
    })

    for (let i = 0; i < botaoVoltarNav.length; i++) {
        const btnVoltar = botaoVoltarNav[i];
        btnVoltar.addEventListener('click', () => {
            document.querySelector('.caixa').style.display = 'none';
            document.querySelector('.btn-muda-tema').style.display = 'none';
            document.querySelector('#btnNavegacao').style.display = 'inline-block';
            document.querySelector('#tituloCabecalho').style.display = 'block';
            document.querySelector('.sombra-bg').style.display = 'none';
            reloadScrollBars()
    });
    }
}

//impede a barra de rolagem de funcionar
function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; // IE
}

//faz a barra de rolagem voltar ao seu funcionamento
function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes"; // IE
}

larguraDaTela();
botaoNavMobile();