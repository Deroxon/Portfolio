'use strict'

// programowanie obiektowe 

let y= 1;


let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

//height and width
let cw = canvas.width;
let ch = canvas.height;

const ballSize = 20; // wielkość piłki ||  aktualnie współrzędne piłki:
let ballX = cw/2 - ballSize / 2; // od 490 do 510px
let ballY = ch/2 - ballSize / 2; // od 240 do 260px
// dzielimy na 2 i odejmujemy pixele aby umieścić idealnie na środku


const paddelHeight = 100; // wysokość rakiet
const paddelWidth = 20; // szerokość rakiet

// na której pozycji zacząć szerokośc paletki player i AI
const playerX = 70;
const aiX = 910; 

// na której wysokości
let playerY = 200;
let aiY = 200;

// szare linie na środku
const lineWidth = 6;
const lineHeight = 16;

// szybkośc przemieszczania się o pixele
let ballSpeedX = 5;
let ballSpeedY = 5; 


function player () {
    // malujemy zieloną paletkę która zaczy na się od współrzędnych X i potem Y i jaką ma szerokość i wysokość
    ctx.fillStyle = 'green';
    ctx.fillRect(playerX, playerY, paddelWidth, paddelHeight);
}
function AI() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);

}
// będzie true aby przeciwnik mógł zacząć pierwsze odbicie, ograniczamy tym możliwośc kilkudziesięciu odbić pod rząd
let blokada_uderzen = true;
let enemyP = 0;
let playerP =0;

function ball() {
    ctx.fillStyle = 'white';
    ctx.fillRect(ballX, ballY, ballSize, ballSize); 
    

    


    // dodajemy wartość aby zwiększyć w celu przemieszczania
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Poniżej warunki IF w momencie zderzenia ze ścianą.

    // jeśli pozycja piłki Y, będzie mniejsza lub równa 0 || lub będzie większa z dodaniem jej rozmiaru niż wysokoś canvasa to odwróć rysowanie Y
    if(ballY <= 0 || ballY + ballSize >= ch) {
        ballSpeedY = -ballSpeedY;
        // przyśpiesz Y
        speedUp();
    }
    // w przeciwnym wypadku gdyby pozycja piłki X była równa bądź mniejsza Niż 0 || lub z dodaniem rozmiaru była większa lub równa cavas Width to odwróć rysowanie X
    else if (ballX <= 0 || ballX + ballSize >= cw) {
        ballSpeedX = -ballSpeedX;
        speedUp();
    }


    // ZDERZENIE Z PALETKĄ GRACZA
    // jeśli pozycja width piłki będzie mniejsza bądź równa 90 to odbij ORAZ jeśli pozycjaY piłki + jej rozmiar/2 będzie mniejsza lub równa pozycji playeraY ORAZ jeśli pozycjaY piłki i jej rozmiar/2 będzie mniejsza lub równa pozycji playera i wysokości paletki
    if (ballX <= playerX + paddelWidth && ballY + ballSize/2 >= playerY && ballY + ballSize / 2 <= playerY + paddelHeight && blokada_uderzen === false) {
        ballX += 5;
        ballSpeedX = -ballSpeedX;
        speedUp();
        blokada_uderzen = true;
    }

    // ZDERZENIE Z PALETKĄ PRZECIWNIKA

    else if (ballX >= aiX  && ballY +ballSize/2 >= aiY && ballY + ballSize/2 <= aiY + paddelHeight && blokada_uderzen === true ) {
        ballX += 5;
        ballSpeedX = -ballSpeedX;
        speedUp();
        blokada_uderzen = false;
    }



    //////////////////////////// WARUNKI ZWYCIĘSTWA ///////////////////
    let grab_playerP = document.querySelector(".gracz");
    let grab_enemyP = document.querySelector('.przeciwnik');

    

    //Przeciwnik
    if (ballX <= 0) {
        ballX = cw/2 - ballSize / 2; // Reset aby była piłka na środku
        ballY = ch/2 - ballSize / 2; 
        ballSpeedX = 5; // ustawiamy prędkość domyślną
        ballSpeedY = 5; 
        blokada_uderzen = true; // dajemy opcję do odbicia przeciwnikowi
        enemyP++;   // dodajemy punkty dla przeciwnik i je wyświetlamy
        grab_enemyP.innerHTML = enemyP;
    } 
    else if (ballX + ballSize >= cw ) {
        ballX = cw/2 - ballSize / 2; // Reset aby była piłka na środku
        ballY = ch/2 - ballSize / 2; 
        ballSpeedX = 5; // ustawiamy prędkość domyślną
        ballSpeedY = 5; 
        blokada_uderzen = true;
        playerP++;
        grab_playerP.innerHTML = playerP;

    }
    
}


// wywołujemy tablice czarną
function table() {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0,0, cw, ch);

    //pętla w której deklarujemy zmienną linePosition, i ustalamy jej pozycje 20 bo to bedzie pozycja Y, jeśli jest mniejsza niż nasz wysokośc to wykonujemy i dodajemy do pozycji +30 oraz w pętli ustalamy kolor szary oraz rysujemy ustalając najpierw pozycje x i musimy odjąć jeszcze połowę szerokości, wpisujemy pozycje Y która będzie rosła, oraz deklarujemy szerokość i wysokość tego znaczka
    for(let linePosition = 20; linePosition < ch; linePosition += 30) {
        ctx.fillStyle = "gray";
        ctx.fillRect(cw/2 - lineWidth/2, linePosition, lineWidth, lineHeight);
    }


}

////////////////////////////////////

let topCanvas = canvas.offsetTop;
console.log(topCanvas)

// przez to że event jest dodany mousemove w momencie danie funckji parametru, wyświetli on pewne dane i te dane możemy sobie pobrać za pomocą metod np .clientY w tym przykładzie specjalnie usuwamy topCanvas aby liczyło nam od canvasa wysokość myszki 
function playerPosition(e) {
    //myszka zmienia położenie  w zależności gdzie nakierujemy kursorem
    playerY = (e.clientY - topCanvas)- paddelHeight/2 ;

    if (playerY >= ch - paddelHeight) {
        playerY = ch-paddelHeight
    }
    if (playerY <=0) {
        playerY = 0;
    }

}

// w momencie najechania na canvas odaplimy funckję playerPosition
canvas.addEventListener('mousemove', playerPosition);


// PRZYŚPIESZANIE GRY

function speedUp() {
    
    //prędkosć X

    // jeżeli prędkość jest na + to znaczy że dodajemy prędkość w zależności od ilośc uderzeń i 16 to jest ograniczenie
    if(ballSpeedX > 0 && ballSpeedX <= 16) {
        ballSpeedX = ballSpeedX * 1.05;
    }
    //jeżeli mamy prędkośc minusową to jeszcze musimy odjąć aby to się nam zwiększało a nie zmniejszało
    else if (ballSpeedX < 0 && ballSpeedX >= -16) {
        ballSpeedX = ballSpeedX * 1.05;
    }


    //prędkość Y
    if(ballSpeedY > 0 && ballSpeedY <= 12) {
        ballSpeedY = ballSpeedY * 1.05;
    }

    else if (ballSpeedY < 0 && ballSpeedY >= -12) {
        ballSpeedY = ballSpeedY * 1.05;
    }


}

// SZTUCZNA INTELIGENCJA
let speed = 5;

function aiPosition() {
    // środek rakietki i środek piłki
    const middlePaddel = aiY + paddelHeight/2;
    const middleBall = ballY + ballSize/2;

    let speed = 0;

    if (ballSpeedX < 2 ) {
        speed = 10;
    }
    else if (ballSpeedX > 2 && ballSpeedX  < 3) {
        speed = 15;
    }
    else {
        speed = 20;
    }
    
    // jeśli pozycja piłki w szerokości jest mniejsza niż 500 oraz
    if (ballX > 500) {
        if(middlePaddel - middleBall > 200 ) {
            aiY -= speed;
        }
        else if (middlePaddel - middleBall < -200) {
            aiY += speed;
        }
        else if (middlePaddel - middleBall <-20) {
            aiY += speed;
        }
        else if (middlePaddel - middleBall >20) {
            aiY -= speed;
        }

    }
    else if ( ballX < 500 && ballX > 200) {
        if (middlePaddel - middleBall > 100) {
            aiY -= 2;
        }
        else if (middlePaddel - middleBall > -100) {
            aiY += 2;
        }
    }

    if (aiY >= ch - paddelHeight) {
        aiY = ch - paddelHeight;
    }

    else if (aiY <=0) {
        aiY = 0;
    }

}

canvas.addEventListener("mousemove", aiPosition);

///////////////////////////////////
function game() {
    table()
    player()
    AI()
    ball()
    aiPosition()
}
//obraz jest nadpisywany że jakby pojawia się kolejna czarna tablica oraz piłka umieszczona w nowej pozycji



        setInterval('game()', 1000/60);


    

// wywołujemy te funckje 60razy na sekundę
