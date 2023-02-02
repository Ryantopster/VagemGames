function jogarCobrinha() {
    let xCobrinha = wCanvas / 2;
    let yCobrinha = hCanvas / 2;
    let wCobrinha = 25;
    let hCobrinha = 25;
    let teclaJogador;

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
        desenhaRetangulo(xCobrinha, yCobrinha, wCobrinha, hCobrinha, 255, 255, 255);  
        movimentaCobrinha();
        detectaColisao();
    }

    function movimentaCobrinha() {
        if (teclaJogador == 'KeyW' || botaoDirecao == 'botao-cima') {
            yCobrinha -= 10;
        }
        if (teclaJogador == 'KeyS' || botaoDirecao == 'botao-baixo') {
            yCobrinha += 10;
        }
        if (teclaJogador == 'KeyA' || botaoDirecao == 'botao-esquerdo') {
            xCobrinha -= 10;
        }
        if (teclaJogador == 'KeyD' || botaoDirecao == 'botao-direito') {
            xCobrinha += 10;
        }
    }

    function detectaColisao() {
        if (yCobrinha <= 0) {
            yCobrinha = 0;
        }
        if (yCobrinha >= hCanvas - hCobrinha) {
            yCobrinha = hCanvas - hCobrinha;
        }
        if (xCobrinha <= 0 ) {
            xCobrinha = 0;
        }
        if (xCobrinha >= wCanvas - wCobrinha) {
            xCobrinha = wCanvas - wCobrinha;
        }
    }

    function desenhaRetangulo(x, y, w, h, r, g, b) {
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, w, h);
    }

}