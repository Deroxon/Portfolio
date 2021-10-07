
var jest_czy_nie = false;
window.onload = zegar;

function zegar() {

    
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    if (dzien < 10) dzien = "0"+dzien;
    var miesiac = dzisiaj.getMonth()+1;
    if (miesiac <10 ) miesiac = "0"+miesiac;

    var rok = dzisiaj.getFullYear();


    var godzina = dzisiaj.getHours();
    if (godzina <10) godzina = "0" + godzina;

    var minuta = dzisiaj.getHours();
    if (minuta <10) minuta = "0"+minuta;

    var sekunda = dzisiaj.getSeconds();
    if (sekunda < 10) sekunda = "0"+sekunda;

    setTimeout("zegar()",1000);   

    document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+ godzina+":"+minuta+":"+sekunda;
}

var k0 = document.getElementById("p1");
var k1 = document.getElementById("p2");
var k2 = document.getElementById("p3");
var k3 = document.getElementById("p4");
var k4 = document.getElementById("p5");
var k5 = document.getElementById("p6");

k0.addEventListener("click", function() {rozwin1(); } );
k1.addEventListener("click", function() {rozwin2(); } );
k2.addEventListener("click", function() {rozwin3(); } );
k3.addEventListener("click", function() {rozwin4(); } );
k4.addEventListener("click", function() {rozwin5(); } );
k5.addEventListener("click", function() {rozwin6(); } );


var o0 = document.getElementById("o1");
var o1 = document.getElementById("o2");
var o2 = document.getElementById("o3");
var o3 = document.getElementById("o4");
var o4 = document.getElementById("o5");
var o5 = document.getElementById("o6");

o0.addEventListener("click", function() {rozwin1(); } );
o1.addEventListener("click", function() {rozwin2(); } );
o2.addEventListener("click", function() {rozwin3(); } );
o3.addEventListener("click", function() {rozwin4(); } );
o4.addEventListener("click", function() {rozwin5(); } );
o5.addEventListener("click", function() {rozwin6(); } );





// funkcja do Pomocy technicznej
function rozwin1() {
   

    if (jest_czy_nie == false) {

  
    
     var rozwinięte = document.querySelector("#p1").style.height = "300px";

    var ukryte = document.querySelector("#o1").style.visibility = "visible";

        jest_czy_nie = true;
    }

    else 
    {
        var rozwinięte = document.querySelector("#p1").style.height = "70px";
        jest_czy_nie = false;
        var ukryte = document.querySelector("#o1").style.visibility = "hidden";
    }
    
  
}

function rozwin2() {
   

    if (jest_czy_nie == false) {

  
    
     var rozwinięte = document.querySelector("#p2").style.height = "300px";

    var ukryte = document.querySelector("#o2").style.visibility = "visible";

        jest_czy_nie = true;
    }

    else 
    {
        var rozwinięte = document.querySelector("#p2").style.height = "70px";
        jest_czy_nie = false;
        var ukryte = document.querySelector("#o2").style.visibility = "hidden";
    }
    
  
}

function rozwin3() {
   

    if (jest_czy_nie == false) {

  
    
     var rozwinięte = document.querySelector("#p3").style.height = "300px";

    var ukryte = document.querySelector("#o3").style.visibility = "visible";

        jest_czy_nie = true;
    }

    else 
    {
        var rozwinięte = document.querySelector("#p3").style.height = "70px";
        jest_czy_nie = false;
        var ukryte = document.querySelector("#o3").style.visibility = "hidden";
    }
    
  
}

function rozwin4() {
   

    if (jest_czy_nie == false) {

  
    
     var rozwinięte = document.querySelector("#p4").style.height = "300px";

    var ukryte = document.querySelector("#o4").style.visibility = "visible";

        jest_czy_nie = true;
    }

    else 
    {
        var rozwinięte = document.querySelector("#p4").style.height = "70px";
        jest_czy_nie = false;
        var ukryte = document.querySelector("#o4").style.visibility = "hidden";
    }
    
  
}

function rozwin5() {
   

    if (jest_czy_nie == false) {

  
    
     var rozwinięte = document.querySelector("#p5").style.height = "300px";

    var ukryte = document.querySelector("#o5").style.visibility = "visible";

        jest_czy_nie = true;
    }

    else 
    {
        var rozwinięte = document.querySelector("#p5").style.height = "70px";
        jest_czy_nie = false;
        var ukryte = document.querySelector("#o5").style.visibility = "hidden";
    }
    
  
}


function rozwin6() {
   

    if (jest_czy_nie == false) {

  
    
     var rozwinięte = document.querySelector("#p6").style.height = "300px";

    var ukryte = document.querySelector("#o6").style.visibility = "visible";

        jest_czy_nie = true;
    }

    else 
    {
        var rozwinięte = document.querySelector("#p6").style.height = "70px";
        jest_czy_nie = false;
        var ukryte = document.querySelector("#o6").style.visibility = "hidden";
    }
    
  
}