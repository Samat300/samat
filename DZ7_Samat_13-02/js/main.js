
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d")


var wing = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();


wing.src = "img/wing.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var gap = 90;

//При нажатии на какую-либо кнопку
document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 25;// прыжок
}

//Создание блоков

var pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0,
}
var score = 0;
//Позиция птички

var xPos = 10;
var yPos = 150;
var grav = 1.5; // скрость


function draw() {
    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x --;

        if (pipe[i].x == 125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random()* pipeUp.height) - pipeUp.height
            });
        }
        //Отслеж
        if(xPos + wing.width >= pipe[i].x
        && xPos <= pipe[i].x + pipeUp.width
        && (yPos <= pipe[i].y + pipeUp.height
            || yPos + wing.height >= pipe[i].y + pipeUp.height +
                gap) || yPos + wing.height >= cvs.height - fg.height) {
            location.reload();// перезагрузка страницы
        }
        if (pipe[i].x == 5){
            score ++;
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(wing, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = "#000";
    ctx.font = "25px Verdana";
    ctx.fillText("Счет:" + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}

pipeBottom.onload = draw;
