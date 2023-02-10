function jogarCobrinha() {
    const alteraCanvas = document.getElementById('alteraCanvas');
    alteraCanvas.innerHTML = `
        <canvas class="canvas" id="canvas" width="544" height="544" style="display: block;"></canvas>
        <div id="vocePerdeu" style=""></div>
    `;
    const ctx = document.getElementById("canvas").getContext("2d");
    
    let caixa = 16;
    const wCanvas = 512;
    const hCanvas = 512;
    
    let direcao = "direita";
    let pontosCobrinha = 0;
    let nivel = 1;

    //quanto maior o numeo de elementos na array, maior o tamanho da cobra
    let cobrinha = [1, 2, 3];
    cobrinha[0] = {
        x: caixa,
        y: caixa
    }

    let comida = {
        x: Math.floor(Math.random() * 15 + 1) * caixa,
        y: Math.floor(Math.random() * 15 + 1) * caixa
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

    function loop() {
        draw();
        detectaColisao();
    }

    function draw() {
        ctx.fillStyle = `rgb(50, 130, 50)`;
        ctx.fillRect(0, 0, 544, 544);
        proximoNivel();
        controleMobile();
        background();
        criaComida();
        criaCobrinha();
        mostraNivel();

        let xCobrinha = cobrinha[0].x;
        let yCobrinha = cobrinha[0].y;

        if (direcao == "cima") yCobrinha -= caixa;
        if (direcao == "baixo") yCobrinha += caixa;
        if (direcao == "esquerda") xCobrinha -= caixa;
        if (direcao == "direita") xCobrinha += caixa;

        if (xCobrinha < comida.x + caixa && xCobrinha + caixa > comida.x && yCobrinha < comida.y + caixa && yCobrinha + caixa > comida.y) {
            comida.x = Math.floor(Math.random() * 15 + 1) * caixa;
            comida.y = Math.floor(Math.random() * 15 + 1) * caixa;
            pontosCobrinha++;
        } else {
            cobrinha.pop();
        }

        let aumentaRabo = {
            x: xCobrinha,
            y: yCobrinha
        }

        cobrinha.unshift(aumentaRabo);
    }

    function background() {
        function desenhaQuadradoVerdeClaroVerdeEscuro(x, y) {
            var x = 0;

            while (x < wCanvas) {
            ctx.fillStyle = `rgb(123, 205, 0)`;
            ctx.fillRect((x += caixa), y, caixa, caixa);

            ctx.fillStyle = `rgb(0, 155, 0)`;
            ctx.fillRect((x += caixa), y, caixa, caixa);
            }
        }

        function desenhaQuadradoVerdeEscuroVerdeClaro(x, y) {
            var x = 0;

            while (x < wCanvas) {
                ctx.fillStyle = `rgb(0, 155, 0)`;
                ctx.fillRect((x += caixa), y, caixa, caixa);
                
                ctx.fillStyle = `rgb(123, 205, 0)`;
                ctx.fillRect((x += caixa), y, caixa, caixa);
            }
        }
        var y = 0;
        while (y < hCanvas) {
            desenhaQuadradoVerdeClaroVerdeEscuro(0, (y += caixa));
            desenhaQuadradoVerdeEscuroVerdeClaro(0, (y += caixa));
        }
    }

    function criaCobrinha() {
        for (let i = 0; i < cobrinha.length; i++) {
            ctx.fillStyle = `rgba(232, 183, 69, 1)`;
            ctx.fillRect(cobrinha[i].x, cobrinha[i].y, caixa, caixa);
        }
    }

    function criaComida() {
        ctx.fillStyle = `rgb(255, 0, 0)`;
        ctx.fillRect(comida.x, comida.y, caixa, caixa);
    }

    function mostraNivel() {
        ctx.fillStyle = "black";
        ctx.font = "bold 20px monospace"
        ctx.fillText("Nivel: " + nivel, 16, 15);
    }

    function detectaColisao() {
        if (cobrinha[0].x > wCanvas && direcao == "direita") cobrinha[0].x = caixa;
        if (cobrinha[0].x < caixa && direcao == "esquerda") cobrinha[0].x = wCanvas;
        if (cobrinha[0].y > hCanvas && direcao == "baixo") cobrinha[0].y = caixa;
        if (cobrinha[0].y < caixa && direcao == "cima") cobrinha[0].y = hCanvas;
        
        for (let i = 1; i < cobrinha.length; i++) {
            if (cobrinha[0].x == cobrinha[i].x && cobrinha[0].y == cobrinha[i].y) {
                vocePerdeu();
            }
        }
    }

    function controleMobile() {
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
    }

    function proximoNivel() {
        if (pontosCobrinha >= 10) {
            nivel = 2;
            
            if (cobrinha[0].x > wCanvas && direcao == "direita") {
                cobrinha[0].x = wCanvas - caixa;
            };
            if (cobrinha[0].x < 0 && direcao == "esquerda") {
                cobrinha[0].x = 0;
            };
            if (cobrinha[0].y > hCanvas && direcao == "baixo") {
                cobrinha[0].y = hCanvas - caixa;
            };
            if (cobrinha[0].y < 0 && direcao == "cima") {
                cobrinha[0].y = 0;
            };
        }
        if (pontosCobrinha >= 20) {
            nivel = 3;
            if (cobrinha[0].x > wCanvas && direcao == "direita") {
                clearInterval(jogo);
                ctx.fillStyle = `rgba(255, 255, 255, 1)`;
                ctx.roundRect((wCanvas / 2) - (128 / 2), (hCanvas / 2) - (128 / 2), 128, 128, 20);
                pontosCobrinha = 0;
            };
            if (cobrinha[0].x < 0 && direcao == "esquerda") {
                clearInterval(jogo);
                alert("Você perdeu!");
                pontosCobrinha = 0;
            };
            if (cobrinha[0].y > hCanvas && direcao == "baixo") {
                clearInterval(jogo);
                alert("Você perdeu!");
                pontosCobrinha = 0;
            };
            if (cobrinha[0].y < 0 && direcao == "cima") {
                clearInterval(jogo);
                alert("Você perdeu!");
                pontosCobrinha = 0;
            };
        }
    }

    function vocePerdeu() {
        var vocePerdeu = document.getElementById('vocePerdeu');
        var w = 256;
        var h = 192;

        ctx.fillStyle = 'rgb(50, 130, 50)'
        ctx.roundRect(544 / 2 - (w / 2), 544 / 2 - h / 2, w, h, [20]);
        ctx.fill();
        vocePerdeu.innerHTML = `
            <h3>Você</h3>
            <h3>Perdeu!</h3>
            <input type="button" value="jogar novamente" id="btnJogarNovamente">
        `;
        clearInterval(jogo);

        var jogarNovamente = document.querySelector('#btnJogarNovamente');
        jogarNovamente.addEventListener('click', () => {
            direcao = "direita";
            pontosCobrinha = 0;
            nivel = 1;
            cobrinha = [1, 2, 3];
            cobrinha[0] = {
                x: caixa,
                y: caixa
            }
            comida.x = Math.floor(Math.random() * 15 + 1) * caixa;
            comida.y = Math.floor(Math.random() * 15 + 1) * caixa;
            vocePerdeu.innerHTML = ``;
            jogo = setInterval(loop,100);
        });
    }
    
    let jogo = setInterval(loop,100);
}