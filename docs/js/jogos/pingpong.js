function jogarPingPong() {
    //tamanho das raquetes
    const wRaquete = 15, hRaquete = 200;
    //variavel dos pontos
    let pontosJogador, pontosOponente;
    let teclaJogador, teclaOponente;

    let xRaqueteJogador = 10;
    let yRaqueteJogador = 200;

    let xRaqueteOponente = wCanvas - wRaquete - xRaqueteJogador;
    let yRaqueteOponente = 200;

    let xBolinha, yBolinha, xBolinhaOrientacao, yBolinhaOrientacao;

    document.addEventListener('keydown', function(ev) {
        if (ev.code == "KeyW" || ev.code == "KeyS") {
            teclaJogador = ev.code;
        }
        if (ev.code == "KeyI" || ev.code == "KeyK") {
            teclaOponente = ev.code;
        }
    });

    pontosJogador = 0;
    pontosOponente = 0;
    //define um intervalo de 60 fps para o loop
    setInterval(loop,1000/60);
    movimentaBolinha();

    function loop() {
        if (xBolinha >= xRaqueteJogador && xBolinha <= xRaqueteJogador + 10 && yBolinha >= yRaqueteJogador && yBolinha <= yRaqueteJogador + hRaquete) {
            xBolinhaOrientacao = 1;
        } else if (xBolinha >= xRaqueteOponente && xBolinha <= xRaqueteOponente + 10 && yBolinha >= yRaqueteOponente && yBolinha <= yRaqueteOponente + hRaquete) {
            xBolinhaOrientacao = -1;
        }
        if (yBolinha + 20 >= hCanvas || yBolinha <= 0) {
            yBolinhaOrientacao *= -1;
        }
        
        xBolinha += 5 * xBolinhaOrientacao;
        yBolinha += 5 * yBolinhaOrientacao;
    
        if (xBolinha + 20 > wCanvas) {
            pontosJogador++
            movimentaBolinha();
        } else if (xBolinha < 0) {
            pontosOponente++
            movimentaBolinha();
        }

        if(teclaJogador == "KeyW" && yRaqueteJogador > 0 || botaoDirecao == "botao-cima" && yRaqueteJogador > 0) {
            yRaqueteJogador -= 10;
        } else if (teclaJogador == "KeyS" && yRaqueteJogador + hRaquete < hCanvas || botaoDirecao == "botao-baixo" && yRaqueteJogador + hRaquete < hCanvas) {
            yRaqueteJogador += 10;
        }
    
        if(teclaOponente == "KeyI" && yRaqueteOponente > 0 || botaoAcao == "botao-triangulo" && yRaqueteOponente > 0) {
            yRaqueteOponente -= 10;
        } else if (teclaOponente == "KeyK" && yRaqueteOponente + hRaquete < hCanvas || botaoAcao == "botao-x" && yRaqueteOponente + hRaquete < hCanvas) {
            yRaqueteOponente += 10;
        }

        
    
        draw();
    }
    
    function movimentaBolinha() {
        yBolinhaOrientacao = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3;
        xBolinhaOrientacao = Math.pow(2, Math.floor(Math.random() * 2) + 1) - 3;
        xBolinha = wCanvas / 2 - 20;
        yBolinha = hCanvas / 2 - 20;
    }
    
    function draw() {
        desenhaRetangulo(0, 0, wCanvas, hCanvas, 0, 0, 0);
        desenhaRetangulo(wCanvas / 2 - 1, 0, 2, hCanvas, 255, 255, 255);
        desenhaRetangulo(xRaqueteJogador, yRaqueteJogador, wRaquete, hRaquete, 255, 255, 255);
        desenhaRetangulo(xRaqueteOponente, yRaqueteOponente, wRaquete, hRaquete, 255, 255, 255);
        desenhaRetangulo(xBolinha, yBolinha, 20, 20, 255, 255, 255);
        desenhaPontos();
    }
    
    function desenhaRetangulo(x, y, w, h, r, g, b) {
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(x, y, w, h);
    }
    
    function desenhaPontos() {
        ctx.fillStyle = "white";
        ctx.font = "48px monospace";
        ctx.fillText(pontosJogador, wCanvas * 1/4, 50);
        ctx.fillText(pontosOponente, wCanvas * 3/4 - 48, 50);
    }
}