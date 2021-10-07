window.onload = function() {
    odliczanie();
    zdjecie();
}
function odliczanie() {

    var czas = new Date;

    var dzien = czas.getDate();
    if(dzien <10){dzien = "0"+dzien}
    var miesiac = czas.getMonth()+1;
    if(miesiac<10){miesiac = "0"+miesiac}
    var rok= czas.getFullYear();

    
    var godzina = czas.getHours();
    if (godzina <10) {godzina = "0"+godzina;}
    var minuta = czas.getMinutes();
    if(minuta <10) {minuta = "0"+minuta;}
    var sekunda = czas.getSeconds();
    if(sekunda <10) {sekunda = "0"+sekunda;}
   


    document.querySelector("#zegar").innerHTML = "Czas: "+ godzina+":"+minuta+":"+sekunda+" | "+dzien+"/"+miesiac+"/"+rok ;

    setTimeout("odliczanie()",20);
}


// zdjęcie


function schowaj() {
    $("#enjoy").fadeOut(1);
}
function wyswietl() {
    let zdjecie = document.querySelector("#enjoy");
    $("#enjoy").fadeIn(1000);

}

function zdjecie() {
    setTimeout("wyswietl()",14000);
    setTimeout("schowaj()",0);
}



