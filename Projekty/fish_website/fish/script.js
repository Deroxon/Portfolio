
window.onload = function() {
    zmienslajd();
    
}


let numer = Math.floor(Math.random()*3)+1;

function schowaj() {
    $(".action").fadeOut(500);
}


function zmienslajd() {
    numer++; if (numer>3) numer=1;

    var plik = "<img src=\"img/wedkowanie"+numer+".jpg\" />";

    document.querySelector(".action").innerHTML = plik;
    
    $(".action").fadeIn(500);
    

    setTimeout("zmienslajd()",5000);
    setTimeout("schowaj()", 4500);

}




var Cat1 = document.getElementById("k1");
var Cat2 = document.getElementById("k2");
var Cat3 = document.getElementById("k3");
var Cat4 = document.getElementById("k4");



let blokada = false;

let rybki = ["ryby1", "ryby2", "ryby3", "ryby4", "ryby5", "ryby6", "ryby7"];
let jezioro = ["jezioro1", "jezioro2", "jezioro3", "jezioro4", "jezioro5", "jezioro6", "jezioro7"];

let jedzenie = ["jedzenie1", "jedzenie2", "jedzenie3", "jedzenie4", "jedzenie5", "jedzenie6", "jedzenie7"];

let impreza = ["impreza1", "impreza2", "impreza3", "impreza4", "impreza5", "impreza6", "impreza7"];
let WybranaTablica;

Cat1.onclick = function() {
    
   // alert("Pierwszy");
    WybranaTablica = jedzenie;

    numerek++; if (numerek > 6) numerek = 0;
    let img = "<img src=\"../img/"+WybranaTablica[numerek]+".jpg\" />";

    document.querySelector("#img-con").innerHTML = img;
   
   
}

Cat2.onclick = function() {
    //alert("Drugi");
    WybranaTablica = jezioro;
    numerek++; if (numerek > 6) numerek = 0;
    let img = "<img src=\"../img/"+WybranaTablica[numerek]+".jpg\" />";

    document.querySelector("#img-con").innerHTML = img;
}
Cat3.onclick = function() {
    //alert("Trzeci");
    WybranaTablica = rybki;
    numerek++; if (numerek > 6) numerek = 0;
    let img = "<img src=\"../img/"+WybranaTablica[numerek]+".jpg\" />";

    document.querySelector("#img-con").innerHTML = img;
}

Cat4.onclick = function() {
   // alert("Czwarty");
    WybranaTablica = impreza;
    numerek++; if (numerek > 6) numerek = 0;
    let img = "<img src=\"../img/"+WybranaTablica[numerek]+".jpg\" />";

    document.querySelector("#img-con").innerHTML = img;
}







let numerek = 0;



function zmienPrzod() {
    let GetImage = document.querySelector("#img-con");
    

    numerek++; if (numerek > 6) numerek = 0;

    
    

    let img = "<img src=\"../img/"+WybranaTablica[numerek]+".jpg\" />";

    GetImage.innerHTML = img;
    

}

function zmienTyl() {
    let GetImage = document.querySelector("#img-con");

    numerek--; if (numerek < 0) numerek = 6;

    let img = "<img src=\"../img/"+WybranaTablica[numerek]+".jpg\" />";

    GetImage.innerHTML = img;
}





