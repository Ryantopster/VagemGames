function jogarPegueAMaca() {
    const imgCesto = new Image();
    imgCesto.src = "/img/img-pegue-a-maçã/cesto.png";
    const imgBG = new Image();
    imgBG.src = "/img/img-pegue-a-maçã/bg-pegue-a-maca.png";
    const imgMacaVermelha = new Image();
    imgMacaVermelha.src = "/img/img-pegue-a-maçã/apple.png";
    const quantidadeMacas = [0, 1, 2];

    let xCesto = wCanvas / 2 - 100 / 2;
    let yCesto = hCanvas - 90;
    let wCesto = 90;
    let hCesto = 45;
    let velocidadeCesto = 15;

    let xMacas = [Math.floor(Math.random() * 15) * 50, Math.floor(Math.random() * 15) * 50, Math.floor(Math.random() * 15) * 50];
    let yMaca = [-50, -50, -50];
    let velocidadeMacas = [1.5, 2, 1];

    let pontos = 0;

    setInterval(loop,1000/60);

    document.addEventListener('keydown', (ev) => {
        if (ev.code == 'KeyA') {
            xCesto -= velocidadeCesto;
        }
        if (ev.code == 'KeyD') {
            xCesto += velocidadeCesto;
        }
    });

    if (botaoDirecao == 'botao-esquerdo down') {
        xCesto -= velocidadeCesto;
    }
    if (botaoDirecao == 'botao-direito down') {
        xCesto += velocidadeCesto;
    }

    function loop() {
        draw();
    }

    function draw() {
        background();
        colisao();
        mostraMaca();
        movimentaMaca();
        cesto();
        pontuação();
    }

    function background() {
        ctx.drawImage(imgBG, 0, 0);
    }

    function cesto() {
        ctx.drawImage(imgCesto, xCesto, yCesto, wCesto, hCesto);

        
    }

    function colisao() {
        for (let i = 0; i < quantidadeMacas.length; i++) {
            if (xCesto < xMacas[i] + 50 && xCesto + wCesto > xMacas[i] && yCesto < yMaca[i] + 50 && yCesto + hCesto > yMaca[i]) {
                yMaca[i] = -50;
                xMacas[i] = Math.floor(Math.random() * 15) * 50;
                pontos++;
            }
        }
        
        if (xCesto > wCanvas) {
            xCesto = 0 - wCesto;
        }
        if (xCesto < 0 - wCesto) {
            xCesto = wCanvas;
        }
    }

    function mostraMaca() {
        for (let i = 0; i < quantidadeMacas.length; i++) {
            ctx.drawImage(imgMacaVermelha, xMacas[i], yMaca[i], 50, 50);
        }
    }

    function movimentaMaca() {
        for (let i = 0; i < quantidadeMacas.length; i++) {
            yMaca[i] += velocidadeMacas[i];
            
            if (yMaca[i] >= hCanvas) {
                yMaca[i] = -50;
                xMacas[i] = Math.floor(Math.random() * 15) * 50;
            } 
        }
    }


    function pontuação() {
        ctx.fillStyle = "white";
        ctx.roundRect(0, 0, 155, 20, [0, 0, 15, 0]);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.font = "bold 20px monospace"
        ctx.fillText("Pontuação: " + pontos, 10, 16);
    }
}