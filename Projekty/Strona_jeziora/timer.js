window.onload = function() {
    odliczanie();
    zmienslajd();
   
}

function odliczanie() 
{
    var dzisiaj = new Date();

    var dzien = dzisiaj.getDate();
    
    var miesiac = dzisiaj.getMonth()+1;

    var rok = dzisiaj.getFullYear();


    var godzina = dzisiaj.getHours();
    if (godzina<10) godzina = "0"+godzina;

    var minuta = dzisiaj.getMinutes();
    if (minuta<10) minuta = "0"+minuta; 

    var sekunda = dzisiaj.getSeconds();
    if (sekunda<10) sekunda = "0"+sekunda; 

    document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+sekunda;
    
    setTimeout("odliczanie()",1000)
    

}





var numer = Math.floor(Math.random()*5)+1;
        
var timer1 = 0;
var timer2 = 0;

function ustawslajd(nrslajdu)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu -1;

    schowaj()
    setTimeout("zmienslajd()",500)
}
  
function schowaj()
{
    $("#slider").fadeOut(700);
}

function zmienslajd()
{
    numer++; if(numer>3) numer=1;

    var plik = "<img src=\"img/kamp/kamper" + numer + ".jpg\" />";

    document.getElementById("slider").innerHTML = plik;
    $('#slider').fadeIn(500);


    timer1 = setTimeout("zmienslajd()",4000);
    timer2 = setTimeout("schowaj()",3300);
}



