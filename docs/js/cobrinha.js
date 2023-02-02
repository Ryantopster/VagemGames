function jogarCobrinha() {
    let xCobrinha, yCobrinha, wCobrinha, hCobrinha, xComida, yComida, wComida, hComida, teclaJogador;
    wCobrinha = 25;
    hCobrinha = 25;
    xCobrinha = 100;
    yCobrinha = hCanvas / 2 - hCobrinha / 2;
    wComida = 15;
    hComida = 15;
    xComida = parseInt(Math.random() * (wCanvas));
    yComida =  parseInt(Math.random() * (hCanvas));

    setInterval(loop,1000/60);

    document.addEventListener('keydown', (ev) => {
        if (ev.code == 'KeyW') {
            teclaJogador = ev.code;
        }
        if (ev.code == 'KeyS') {
            teclaJogador = ev.code;
        }
        if (ev.code == 'KeyA') {
            teclaJogador = ev.code;
        }
        if (ev.code == 'KeyD') {
            teclaJogador = ev.code;
        }
    });

    function loop() {
        draw();
    }

    function draw() {
        desenhaRetangulo(0, 0, wCanvas, hCanvas, 0, 0, 0);
        comidaCobrinha();
        cobrinha();
        movimentaCobrinha();
        detectaColisao();
    }

    function cobrinha() {
        desenhaRetangulo(xCobrinha, yCobrinha, wCobrinha, hCobrinha, 255, 255, 255);
        if (teclaJogador == 'KeyW' || botaoDirecao == 'botao-cima') {
            desenhaRetangulo(xCobrinha, yCobrinha + 26, wCobrinha, hCobrinha, 255, 255, 255);
        }
        if (teclaJogador == 'KeyS' || botaoDirecao == 'botao-baixo') {
            desenhaRetangulo(xCobrinha, yCobrinha - 26, wCobrinha, hCobrinha, 255, 255, 255);
        }
        if (teclaJogador == 'KeyA' || botaoDirecao == 'botao-esquerdo') {
            desenhaRetangulo(xCobrinha + 26, yCobrinha, wCobrinha, hCobrinha, 255, 255, 255);
        }
        if (teclaJogador == 'KeyD' || botaoDirecao == 'botao-direito') {
            desenhaRetangulo(xCobrinha - 26, yCobrinha, wCobrinha, hCobrinha, 255, 255, 255);
        }
    }

    function movimentaCobrinha() {
        if (teclaJogador == 'KeyW' || botaoDirecao == 'botao-cima') {
            yCobrinha -= 4;
        }
        if (teclaJogador == 'KeyS' || botaoDirecao == 'botao-baixo') {
            yCobrinha += 4;
        }
        if (teclaJogador == 'KeyA' || botaoDirecao == 'botao-esquerdo') {
            xCobrinha -= 4;
        }
        if (teclaJogador == 'KeyD' || botaoDirecao == 'botao-direito') {
            xCobrinha += 4;
        }
    }

    function detectaColisao() {
        if (yCobrinha <= 0) {
            vocePerdeu();
        }
        if (yCobrinha >= hCanvas - hCobrinha) {
            vocePerdeu();
        }
        if (xCobrinha <= 0 ) {
            vocePerdeu();
        }
        if (xCobrinha >= wCanvas - wCobrinha) {
            vocePerdeu();
        }
        if (xComida + wComida / 2 >= xCobrinha && xComida + wComida / 2 <= xCobrinha + wCobrinha && yComida + hComida / 2 >= yCobrinha && yComida + hComida / 2 <= yCobrinha + hCobrinha) {
            xComida = parseInt(Math.random() * wCanvas);
            yComida = parseInt(Math.random() * hCanvas);
        }
    }

    function comidaCobrinha() {
        desenhaRetangulo(xComida, yComida, wComida, hComida, 255, 0, 0)
    }

    function desenhaRetangulo(x, y, w, h, r, g, b) {
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, w, h);
    }

    function vocePerdeu() {
        document.location.reload(true);
    }
}