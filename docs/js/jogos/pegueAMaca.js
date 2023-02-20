function jogarPegueAMaca() {
    const imgMaca = new Image();
    const imgCesto = new Image();
    const imgBG = new Image();
    imgMaca.src = "/img/img-pegue-a-maçã/apple.png";
    imgCesto.src = "/img/img-pegue-a-maçã/cesto.png";
    imgBG.src = "/img/img-pegue-a-maçã/bg-pegue-a-maca.png";

    let xCesto = wCanvas / 2 - 100 / 2;
    let yCesto = hCanvas - 90;
    let wCesto = 90;
    let hCesto = 45;

    let xMaca = Math.floor(Math.random() * 15) * 50;
    let yMaca = -50;

    let pontos = 0;

    setInterval(loop,1000/60);

    document.addEventListener('keydown', (ev) => {
        if (ev.code == 'KeyA') {
            xCesto -= 10;
        }
        if (ev.code == 'KeyD') {
            xCesto += 10;
        }
    });

    function loop() {
        draw();
    }

    function draw() {
        background();
        colisao();
        maca();
        cesto();
        pontuação();
        proximoNivel();
    }

    function background() {
        ctx.drawImage(imgBG, 0, 0);
    }

    function cesto() {
        ctx.drawImage(imgCesto, xCesto, yCesto, wCesto, hCesto);
    }

    function colisao() {
        if (xCesto < xMaca + 50 && xCesto + wCesto > xMaca && yCesto < yMaca + 50 && yCesto + hCesto > yMaca) {
            yMaca = -50;
            xMaca = Math.floor(Math.random() * 15) * 50;
            pontos++;
        }

        if (xCesto + wCesto > wCanvas) {
            xCesto -= 10;
        }
        if (xCesto <= -10) {
            xCesto += 10;
        }
    }

    function maca() {
        ctx.drawImage(imgMaca, xMaca, yMaca, 50, 50);
        
        yMaca += 3;
        if (yMaca >= hCanvas) {
            yMaca = -50;
            xMaca = Math.floor(Math.random() * 15) * 50;
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
    
    function proximoNivel() {
        if (pontos > 4) {

        }
    }
}