var karty = ["gray.jpg", "makarov.jpg", "erza.jpg", "laxus.jpg", "natsu.jpg", "wendy.jpg",  "juvia.jpg", "gajeel.jpg", "lucy.jpg", "mira.jpg", ];


let shuffleArray = (array) => $.map(array, (element) => [element, element]).sort(() => 0.5 - Math.random());
 
karty = shuffleArray(karty);


var k0 = document.getElementById("k0");
var k1 = document.getElementById("k1");
var k2 = document.getElementById("k2");
var k3 = document.getElementById("k3");

var k4 = document.getElementById("k4");
var k5 = document.getElementById("k5");
var k6 = document.getElementById("k6");
var k7 = document.getElementById("k7");

var k8 = document.getElementById("k8");
var k9 = document.getElementById("k9");
var k10 = document.getElementById("k10");
var k11 = document.getElementById("k11");

var k12 = document.getElementById("k12");
var k13 = document.getElementById("k13");
var k14 = document.getElementById("k14");
var k15 = document.getElementById("k15");

var k16 = document.getElementById("k16");
var k17 = document.getElementById("k17");
var k18 = document.getElementById("k18");
var k19 = document.getElementById("k19");


k0.addEventListener("click", function() {odslon(0); } );
k1.addEventListener("click", function() {odslon(1); } );
k2.addEventListener("click", function() {odslon(2); } );
k3.addEventListener("click", function() {odslon(3); } );

k4.addEventListener("click", function() {odslon(4); } );
k5.addEventListener("click", function() {odslon(5); } );
k6.addEventListener("click", function() {odslon(6); } );
k7.addEventListener("click", function() {odslon(7); } );

k8.addEventListener("click", function() {odslon(8); } );
k9.addEventListener("click", function() {odslon(9); } );
k10.addEventListener("click", function() {odslon(10); } );
k11.addEventListener("click", function() {odslon(11); } );

k12.addEventListener("click", function() {odslon(12); } );
k13.addEventListener("click", function() {odslon(13); } );
k14.addEventListener("click", function() {odslon(14); } );
k15.addEventListener("click", function() {odslon(15); } );

k16.addEventListener("click", function() {odslon(16); } );
k17.addEventListener("click", function() {odslon(17); } );
k18.addEventListener("click", function() {odslon(18); } );
k19.addEventListener("click", function() {odslon(19); } );




var JednaWidoczna = false;
var licznik = 0;
var widoczna_nr;
var lock = false;
var iloscPar = 10;

function odslon(nr)
{   

    var opacityValue = $("#k"+nr).css("opacity");
    // To jest pobranie wartości opacity
    // alert('opacity: '+opacityValue); żeby sprawdzić czy działa

    if (opacityValue != 0 && lock == false)
    // jeśli opacityValue jest różne od 0 i jeśli lock == false
    {

        lock = true;
        // ZAŁOŻENIE BLOKADY

        var obraz = "url(img/" + karty[nr] + ")";

        $("#k"+nr).css("background-image", obraz);
        // uchwyt który podmienia background img na zmienną obraz
        // zrobiłem to tak że jeśli kliknę na jakieś zdjęcie, to w divie k background image zmieni się na obraz
    
        $("#k"+nr).addClass("kartaA");
        $("#k"+nr).removeClass("karta");
        // to zmieniło to że inny wygląd jest karty poprzez usunięcie jednej klasy i dodanie nowej
    
    
        // Odkrycie pierwszej karty ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (JednaWidoczna == false)
        {
            JednaWidoczna = true;
            
            widoczna_nr = nr;
            // pierwsza karta została kliknięta i to zapisuje która
            lock = false;
            // ZDJĘCIE BLOKADY
            
            
        }
    
        // Odkrycie drugiej karty /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// http://memorygame.cba.pl/gra_w_pamieć_mini.html
        else 
        {
    
            // jeśli odkryje się dwie takie same
            if(karty[widoczna_nr] == karty[nr] && widoczna_nr != nr )
            {
                setTimeout(function() { ukryj2karty(nr, widoczna_nr) },750 );
                
            }
            
         
            // jeśli odkryje się dwie różne
            else
            {
                setTimeout(function() { przywroc2karty(nr, widoczna_nr) },1000 );
                // jeśli się nie uda i odkryje się dwie różne to użyj funkcji przywróć dwie karty która sprawia że podmienia się css background image na suprise.jpg
                

            }
    
    
            
            //zwiększa się licznik
            licznik++;
            $(".tury").html("Ilość wykonanych tur: "+licznik);
            // podmienia ilość tur o 1
            JednaWidoczna = false;
        }


    }

    


    
}

function ukryj2karty(nr1, nr2)
{
    $("#k"+nr1).css("opacity", "0");
    $("#k"+nr2).css("opacity", "0");
    //a to jest zmiana opacity diva k na 0
    
    iloscPar--;

    if(iloscPar == 0)
    {
        $(".plansza").html('<h1>Brawo! <br /> Udało ci się wygrać w '+licznik+' Tur.<br /> <span class="reload" onclick="location.reload()">Kliknij aby zrestartować.</span> </h1>' );
        
       


    }

    lock = false;
    // ZDJĘCIE BLOKADY
}

function przywroc2karty(nr1, nr2)
{
    $("#k"+nr1).css("background-image", "url(img/suprise.jpg) ");
    $("#k"+nr1).addClass("karta");
    $("#k"+nr1).removeClass("kartaA");


    $("#k"+nr2).css("background-image", "url(img/suprise.jpg) ");
    $("#k"+nr2).addClass("karta");
    $("#k"+nr2).removeClass("kartaA");

    lock = false;
    // ZDJĘCIE BLOKADY
}