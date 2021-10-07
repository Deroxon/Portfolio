//ilośc śnieżek 'Waluta'
var sniezki = Math.floor(0);


//Globalne zmienne, ceny i Info /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var globalne_sniezki_na_sekunde = 0;
//cena i info na sekundę, level śnieżki 
var poziom_sniez = 0;
var add_priceS = 50;
var lvls = 0;
//cena i info na sekundę, level  Małego bałwana
var mbCena = 20;
var mbA = 0;
var lvlmb = 0;
//cena i info na sekundę, level średniego bałwana
var sbCena = 40;
var sbA = 0;
var lvlsb = 0;
// cena i info na sekundę, level dużego bałwana
var dbCena = 120;
var dbA = 0;
var lvldb = 0;
// cena i info na sekundę, level rycerz bałwan
var rbCena = 250;
var rbA = 0;
var lvlrb = 0;
//cena i info wściekłego bałwana
var wsbCena = 1000;
var wsbA = 0;
var lvlwsb = 0;
//cena i info strasznego bałwana
var stbCena = 4000;
var stbA = 0;
var lvlstb = 0;
// cena i info armatki śnieżnej
var abCena = 15000;
var abA = 0;
var lvlab = 0;
// cena i info fabryki śnieżek
var fbCena = 60000;
var fbA = 0;
var lvlfb = 0;
// cena i info olafa 
var obCena = 200000;
var obA = 0;
var lvlob = 0;
// Zmienna sprawdzająca status
var stac = false;




// klikanie śnieżki
function kliknij(animate_sniezka) {
    
        sniezki = sniezki + poziom_sniez+ 1;
    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);


    // ANIMACJA KLIKNIĘCIA ///////////////////////////////////////////////////////////////////////////////
    if (animate_sniezka = 1) {
       let poj_anima = document.querySelector(".pojemnik_animacja");

       
       
    }

}




////////////////////////////////////////////////////////////////////////////////
// zwiększanie poziomu śnieżki aby więcej szło z kliknięciem
function zwieksz_poziom() {
    
// jeśli śnieżki są większe niż cena to wykonaj
    if (sniezki >= add_priceS) {
        

            // odejmij od śnieżek cenę
        sniezki = sniezki - add_priceS;
        //zwiększ cenę za następny zakup
                add_priceS = Math.floor(add_priceS * 1.7);
        //zwiększ poziom bałwana
        lvls = lvls +1;
                document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
        // dodaj info oraz wyświetl go w html
                poziom_sniez = poziom_sniez + 1;
                document.querySelector(".cenak").innerHTML = "Poziom: "+lvls+ "<br />Cena: "+add_priceS+" śnieżek <br /> Aktualnie za kliknięcie: "+poziom_sniez;

        
        

        

    }

    

    return poziom_sniez, sniezki  ;
}

////////////////////////////////////////////////////////////////////////////////




//funkcja która będzie sprawdzała które ulepszenie wybieramy i w zależności od wyboru będzie generować śnieżki na minutę


// Parametr "taki" sprawdza która funkcja została użyta
// taki == 1 MAŁY BAŁWAN || taki == 2 Średni BAŁWAN
function AutoSnow(taki) {
    
    
// MAŁY BAŁWAN ///////////////////////////////////////
   if (taki == 1) {

        if (sniezki >= mbCena) {
        

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - mbCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);

        
        // zwiększ poziom bałwana
            lvlmb =lvlmb + 1;

        // mały bałwan info na sekundę
        mbA = mbA + 2;
        //zwiększamy cene i pokazujemy ją
        mbCena = mbCena * 1.1;
        mbCena = mbCena.toFixed(2);
        document.querySelector("#c1").innerHTML = "Poziom: "+lvlmb+ "<br />Cena: "+ mbCena+" śnieżek <br />"+"Śnieżki na sekundę: +2 <br />"+"Aktualnie na sekundę: "+mbA ;

        
        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +2;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"
        
        
        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(99);
        }
   }



   // ŚREDNI BAŁWAN ////////////////////////////////////////
   else if ( taki == 2) {
    
        if (sniezki >= sbCena) {
            

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - sbCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);

        
        // zwiększ poziom bałwana
        lvlsb = lvlsb +1;

        // średni bałwan info na sekundę
        sbA = sbA + 5;
        //zwiększamy cene i pokazujemy ją
        sbCena = sbCena * 1.25;
        sbCena = sbCena.toFixed(2);
        document.querySelector("#c2").innerHTML = "Poziom: "+lvlsb+ "<br />Cena: "+ sbCena+" śnieżek <br />"+"Śnieżki na sekundę: +5 <br />"+"Aktualnie na sekundę: "+sbA ;
        
        
        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +5;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"

        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(100);
        }
   }

   // Duży Bałwan //////////////////////////////////////////
   else if ( taki == 3) {
    
    if (sniezki >= dbCena) {
        

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - dbCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);

        
        // zwiększ poziom bałwana
        lvldb =lvldb +1;

        // duży bałwan info na sekundę
        dbA = dbA + 12;
        //zwiększamy cene i pokazujemy ją
        dbCena = dbCena * 1.3;
        dbCena = dbCena.toFixed(2);
        document.querySelector("#c3").innerHTML = "Poziom: "+lvldb+ "<br />Cena: "+ dbCena+" śnieżek <br />"+"Śnieżki na sekundę: +12 <br />"+"Aktualnie na sekundę: "+dbA ;

        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +12;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"
        
        
        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(101);
    }
}


// RYCERZ BAŁWAN ///////////////////////////////////////////
else if ( taki == 4) {
    
    if (sniezki >= rbCena) {
        

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - rbCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);

        
        // zwiększ poziom bałwana
        lvlrb = lvlrb+1;

        // rycerz bałwan info na sekundę
        rbA = rbA + 30;
        //zwiększamy cene i pokazujemy ją
        rbCena = rbCena * 1.18;
        rbCena = rbCena.toFixed(2);
        document.querySelector("#c4").innerHTML = "Poziom: "+lvlrb+ "<br />Cena: "+ rbCena+" śnieżek <br />"+"Śnieżki na sekundę: +30 <br />"+"Aktualnie na sekundę: "+rbA ;

        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +30;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"
        
        
        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(102);
    }
}


// WŚCIEKŁY BAŁWAN ///////////////////////////////////////////
else if ( taki == 5) {
    
    if (sniezki >= wsbCena) {
        

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - wsbCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);

        
        // zwiększ poziom bałwana
        lvlwsb = lvlwsb+1;

        // Wściekły bałwan info na sekundę
        wsbA = wsbA + 300;
        //zwiększamy cene i pokazujemy ją
        wsbCena = wsbCena * 1.3;
        wsbCena = wsbCena.toFixed(2);
        document.querySelector("#c5").innerHTML = "Poziom: "+lvlwsb+ "<br />Cena: "+ wsbCena+" śnieżek <br />"+"Śnieżki na sekundę: +300 <br />"+"Aktualnie na sekundę: "+wsbA ;

        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +300;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"
        
        
        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(103);
    }
}


// STRASZNY BAŁWAN ///////////////////////////////////////////
else if ( taki == 6) {
    
    if (sniezki >= stbCena) {
        

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - stbCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);

        
        // zwiększ poziom bałwana
        lvlstb = lvlstb+1;

        // Straszny bałwan info na sekundę
        stbA = stbA + 450;
        //zwiększamy cene i pokazujemy ją
        stbCena = stbCena * 1.05;
        stbCena = stbCena.toFixed(2);
        document.querySelector("#c6").innerHTML = "Poziom: "+lvlstb+ "<br />Cena: "+ stbCena+" śnieżek <br />"+"Śnieżki na sekundę: +450 <br />"+"Aktualnie na sekundę: "+stbA ;

        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +450;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"
        
        
        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(104);
    }
}





// ARMATA ŚNIEŻNA ///////////////////////////////////////////
else if ( taki == 7) {
    
    if (sniezki >= abCena) {
        

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - abCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);

        
        // zwiększ poziom Armaty
        lvlab = lvlab+1;

        // Armata śnieżna info na sekundę
        abA = abA + 1200;
        //zwiększamy cene i pokazujemy ją
        abCena = abCena * 1.2;
        abCena = abCena.toFixed(2);
        document.querySelector("#c7").innerHTML = "Poziom: "+lvlab+ "<br />Cena: "+ abCena+" śnieżek <br />"+"Śnieżki na sekundę: +1200 <br />"+"Aktualnie na sekundę: "+abA ;

        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +1200;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"
        
        
        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(105);
    }
}





// FABRYKA ŚNIEŻEK ///////////////////////////////////////////
else if ( taki == 8) {
    
    if (sniezki >= fbCena) {
        

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - fbCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);

        
        // zwiększ poziom fabryki
        lvlfb = lvlfb+1;

        // fabryka śnieżek info na sekundę
        fbA = fbA + 3000;
        //zwiększamy cene i pokazujemy ją
        fbCena = fbCena * 1.1;
        fbCena = fbCena.toFixed(2);
        document.querySelector("#c8").innerHTML = "Poziom: "+lvlfb+ "<br />Cena: "+ fbCena+" śnieżek <br />"+"Śnieżki na sekundę: +3000 <br />"+"Aktualnie na sekundę: "+fbA ;

        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +3000;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"
        
        
        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(106);
    }
}




// OLAF ///////////////////////////////////////////
else if ( taki == 9) {
    
    if (sniezki >= obCena) {
        

        // zmniejszamy ilość śnieżek i wykonujemy skrypt
        sniezki = sniezki - obCena;
        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
        // specjalna interakcja zmieniająca zdjęcie zagadowego Bałwana

       


        
        // zwiększ poziom bałwana
        lvlob = lvlob+1;

        // OLAF bałwan info na sekundę
        obA = obA + 15000;
        //zwiększamy cene i pokazujemy ją
        obCena = obCena * 1.7;
        obCena = obCena.toFixed(2);
        document.querySelector("#c9").innerHTML = "Poziom: "+lvlob+ "<br />Cena: "+ obCena+" śnieżek <br />"+"Śnieżki na sekundę: +15000 <br />"+"Aktualnie na sekundę: "+obA ;

        // to będzie pokazywało ile aktualnie masz śnieżek na sekundę
        globalne_sniezki_na_sekunde = globalne_sniezki_na_sekunde +15000;
        document.querySelector(".ss").innerHTML = "Aktualnie: "+globalne_sniezki_na_sekunde+" śnieżek na sekundę"
        
        
        console.log(taki)
        // wywołujemy funkcję która będzie dodawać śnieżki w zależności jaki argument przekazaliśmy
        AB(107);
    }
}



}

// Funkcja która sprawia że w zależności jaki argument zostanie wyżej przekazany to zachowa się tak żeby dodawać śnieżki w zależności co zostanie wybrane
// Argumenty dla Zasobów:
// 99 - Mały Bałwan || 100 - Średni Bałwan || 101 - Duży Bałwan || 102 - Rycerz Bałwan || 103 - Wściekły Bałwan  || 104 - Straszny Bałwan || 105 - Armatka śnieżna || 106 - Fabryka śnieżek || 107 - OLAF

function AB(auto_dodawanie_punktow_balwan) {
   
    //Mały bałwan////////////////////////////
    if ( auto_dodawanie_punktow_balwan == 99) {

    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
    setTimeout("AB(99)", 1000)
    sniezki = sniezki + 2;
    
    

    }
    // Średni Bałwan////////////////////////////
    else if ( auto_dodawanie_punktow_balwan == 100) {
   
    
    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
    setTimeout("AB(100)", 1000)
    sniezki = sniezki + 5;

    }
    // Duży Bałwan////////////////////////////
    else if ( auto_dodawanie_punktow_balwan == 101) {
   

    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
    setTimeout("AB(101)", 1000)
    sniezki = sniezki + 12;

    }

    // Rycerz Bałwan////////////////////////////
    else if ( auto_dodawanie_punktow_balwan == 102) {


    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
    setTimeout("AB(102)", 1000)
    sniezki = sniezki + 30;
    
    }


    // Wściekły Bałwan////////////////////////////
    else if ( auto_dodawanie_punktow_balwan == 103) {


    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
    setTimeout("AB(103)", 1000)
    sniezki = sniezki + 300;
    
    }


    // Straszny Bałwan////////////////////////////
    else if ( auto_dodawanie_punktow_balwan == 104) {


    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
    setTimeout("AB(104)", 1000)
    sniezki = sniezki + 450;
    
    }



    // Armatka Śnieżna ///////////////////////////
    else if ( auto_dodawanie_punktow_balwan == 105) {


    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
    setTimeout("AB(105)", 1000)
    sniezki = sniezki + 1200;
    
    }



    // Fabryka śnieżek ///////////////////////////
    else if ( auto_dodawanie_punktow_balwan == 106) {


        document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
        setTimeout("AB(106)", 1000)
        sniezki = sniezki + 3000;
        
        }


    // OLAF //////////////////////////////////////
    else if ( auto_dodawanie_punktow_balwan == 107) {


    document.querySelector(".Ogol").innerHTML = "Śnieżki: "+sniezki.toFixed(2);
    setTimeout("AB(107)", 1000)
    sniezki = sniezki + 15000;
    
    }
    


   
        
    
}


function restartGry() {

   var naPewno = confirm("Czy napewno chcesz zrestartować grę?  Naciśnij Ok jeśli tak lub Anuluj jeśli nie")
   if (naPewno == true) {
    alert("gra zostanie zrestartowana.");
    location.reload();
   }
   else if (naPewno == false) {
       alert("Nie zrestartowałeś gry.")
   }


}

