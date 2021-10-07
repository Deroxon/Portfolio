var karty = ["goblinMEM.jpg", "mermaidMEM.jpg", "dwarfMEM.jpg", "fairyMEM.jpg", "orcMEM.jpg", "gryfMEM.jpg", "dragonMEM.jpg", "jednorozecMEM.jpg", ];

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


k0.addEventListener("click", function() {odslonKarte(0); } );
k1.addEventListener("click", function() {odslonKarte(1); } );
k2.addEventListener("click", function() {odslonKarte(2); } );
k3.addEventListener("click", function() {odslonKarte(3); } );

k4.addEventListener("click", function() {odslonKarte(4); } );
k5.addEventListener("click", function() {odslonKarte(5); } );
k6.addEventListener("click", function() {odslonKarte(6); } );
k7.addEventListener("click", function() {odslonKarte(7); } );

k8.addEventListener("click", function() {odslonKarte(8); } );
k9.addEventListener("click", function() {odslonKarte(9); } );
k10.addEventListener("click", function() {odslonKarte(10); } );
k11.addEventListener("click", function() {odslonKarte(11); } );

k12.addEventListener("click", function() {odslonKarte(12); } );
k13.addEventListener("click", function() {odslonKarte(13); } );
k14.addEventListener("click", function() {odslonKarte(14); } );
k15.addEventListener("click", function() {odslonKarte(15); } );

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var ilośćPar = 0;



function odslonKarte(nr) {

  

    var opacityValue = $("#k"+nr).css('opacity');

   // alert('Opacity: '+ opacityValue);

   if (opacityValue != 0 && lock == false ) {

     lock = true;

    var obraz = "url(img/" + karty[nr] + ")";

    $('#k'+nr).css("background-image", obraz);
    $('#k'+nr).addClass("kartaA");
    $('#k'+nr).removeClass("karta");

//pierwsza karta
    if(oneVisible == false) {

        oneVisible = true;
       
        //robi to za pierwszą kartę
        visible_nr = nr;
        lock= false;

    }

//druga karta
    else {
        // jeśli para
        if (karty[visible_nr] == karty[nr]  && visible_nr != nr )  {
            //alert("para");

            setTimeout(function() { hide2Cards(nr, visible_nr) }, 700 );

            

           
        }
        
        
        // jeśli nie
        else {
            //alert("pudło");
           
            setTimeout(function() {restore2Cards(nr, visible_nr) }, 1000 );

        }


        turnCounter++;
        $('.wynik').html("Ilość Tur: "+turnCounter);
        oneVisible = false;
    }

   }

   
}

function hide2Cards(nr1, nr2) {

    $('#k'+nr1).css('opacity', '0');
    $('#k'+nr2).css('opacity', '0');

    lock = false;
    ilośćPar++;


    if ( ilośćPar == 8) {
        $(".board").html("<div class=wygrana>Gratulacje, udało ci się wygrać w: "+turnCounter+" Tur <button class=h7 onclick=location.reload()>Jeszcze raz?</button></div>");
    }
    

    
}

function restore2Cards (nr1, nr2) {

    $('#k'+nr1).css("background-image", 'url(img/karta.jpg');
    $('#k'+nr1).addClass("karta");
    $('#k'+nr1).removeClass("kartaA");

    $('#k'+nr2).css("background-image", 'url(img/karta.jpg');
    $('#k'+nr2).addClass("karta");
    $('#k'+nr2).removeClass("kartaA");

    lock= false;

}






