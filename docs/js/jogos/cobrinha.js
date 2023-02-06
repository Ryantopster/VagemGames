function jogarCobrinha() {
    let direcao = "direita";
    let caixa = 25;
    let pontosCobrinha = 0;

    let cobrinha = []
    cobrinha[0] = {
        x: 100,
        y: hCanvas / 2
    }
    let comida = {
        x: getRandomInt(0, wCanvas - caixa),
        y: getRandomInt(0, hCanvas - caixa)
    }

    document.addEventListener('keydown', (ev) => {
        if (ev.code == 'KeyW') {
            direcao = "cima";
        }
        if (ev.code == 'KeyS') {
            direcao = "baixo";
        }
        if (ev.code == 'KeyA') {
            direcao = "esquerda";
        }
        if (ev.code == 'KeyD') {
            direcao = "direita";
        }
    });

    function desenhaRetangulo(x, y, w, h, r, g, b) {
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, w, h);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    function loop() {
        draw();
    }

    function draw() {
        if (cobrinha[0].x > wCanvas && direcao == "direita") cobrinha[0].x = 0;
        if (cobrinha[0].x < 0 && direcao == "esquerda") cobrinha[0].x = wCanvas;
        if (cobrinha[0].y > hCanvas && direcao == "baixo") cobrinha[0].y = 0;
        if (cobrinha[0].y < 0 && direcao == "cima") cobrinha[0].y = hCanvas;

        for (let i = 1; i < cobrinha.length; i++) {
            if (cobrinha[0].x == cobrinha[i].x && cobrinha[0].y == cobrinha[i].y) {
                clearInterval(jogo);
                alert("Você perdeu!");
            }
        }

        if (botaoDirecao == 'botao-cima') {
            direcao = "cima";
        }
        if (botaoDirecao == 'botao-baixo') {
            direcao = "baixo";
        }
        if (botaoDirecao == 'botao-direito') {
            direcao = "direita";
        }
        if (botaoDirecao == 'botao-esquerdo') {
            direcao = "esquerda";
        }

        desenhaRetangulo(0, 0, wCanvas, hCanvas, 0, 0, 0);
        criaComida();
        criaCobrinha();

        let xCobrinha = cobrinha[0].x;
        let yCobrinha = cobrinha[0].y;

        if (direcao == "cima") yCobrinha -= caixa;
        if (direcao == "baixo") yCobrinha += caixa;
        if (direcao == "esquerda") xCobrinha -= caixa;
        if (direcao == "direita") xCobrinha += caixa;

        if (xCobrinha < comida.x + caixa && xCobrinha + caixa > comida.x && yCobrinha < comida.y + caixa && yCobrinha + caixa > comida.y) {
            comida.x = getRandomInt(0, wCanvas - caixa);
            comida.y = getRandomInt(0, hCanvas - caixa);
            pontosCobrinha++;
        } else {
            cobrinha.pop();
        }

        let aumentaRabo = {
            x: xCobrinha,
            y: yCobrinha
        }

        cobrinha.unshift(aumentaRabo);
        proximoNivel()
    }

    function criaCobrinha() {
        for (let i = 0; i < cobrinha.length; i++) {
            desenhaRetangulo(cobrinha[i].x, cobrinha[i].y, caixa, caixa, 255, 255, 0);
        }
    }

    function criaComida() {
        desenhaRetangulo(comida.x, comida.y, caixa, caixa, 255, 0, 0);
    }

    function proximoNivel() {
        if (pontosCobrinha >= 10) {
            alert("Você venceu!");
        }
    }

    let jogo = setInterval(loop,100);
}