var slider = {


    tab_slow: ["Jesteś spragniony? a może głodny? <br /> nic tak cię w takim razie nie ucieszy jak kufel dobrego piwa i tradycyjne potrawy rybne. które staramy się przygotowywać tak aby smakowały jak najlepiej i abyś zapamiętał ten smak na całe życie!",

    "Ciesz się smakiem najlepszego wina sprowadzanego wprost z Grecji oraz Włoch. <br /> Nasze alkohole szycą się najwyższą klasą. Ale mamy też coś klasycznego jak zwykłe piwo! ;)",

    "Codziennie świeże owoce morza, sprowadzane z naszego pięknego Polskiego morza. <br/ > Przyrządzane przez najlepszego kucharza w Mieście! Nie tylko szczycimy się owocami morza lecz pizza u nas też jest niezła",


    "Nasz lokal jest wystarczająco duży aby pomieścić przynajmniej 50 osób siedzących plus ludzi przy barze. Jesteśmy dyspozycyjni do późnych godzin oraz oferujemy różnorakie imprezy tematyczne!",

    "Mamy również strefę dla palących oraz Taras z widokiem na nasze Morze. Checie poczuć morską bryzę? Może namówi was to i weźmiecie wiatr w żagle i wryuszycie z nami w niezapomniane wieczory!"

    ], 

    tab_nag: ["Drzwi szeroko otwarte!", "Greckie i Włoskie wina", "Wyśmienite posiłki", "Nasz lokal", "Coś dla wszystkich"],


    tak: 0,
    licz: 0,
    blok: true,

    schowaj: function() {
        $('.slajd').fadeOut(700);
        
    },

    zacznij: function() {
        zlapT = document.querySelector(".krotkiO");

        if (this.licz <= 4 ) {
            
            var plik = "<img src=\"img/r"+this.licz+".jpg\" />";

        zlapNaglowek = document.querySelector('.naglowek').innerHTML = this.tab_nag[this.licz];
        zlapSlajd = document.querySelector(".slajd").innerHTML= plik;
        zlapT.innerHTML = this.tab_slow[this.licz];

        z0 = document.querySelector(".y0");
        z1 = document.querySelector(".y1");
        z2 = document.querySelector(".y2");
        z3 = document.querySelector(".y3");
        z4 = document.querySelector(".y4");

        

            
            // kropki //
            if (this.tak === 0) {

                z0.style.color = "white";
                z1.style.color = "rgb(46, 45, 45)";
                z2.style.color = "rgb(46, 45, 45)";
                z3.style.color = "rgb(46, 45, 45)";
                z4.style.color = "rgb(46, 45, 45)";

            
            }
            else if ( this.tak === 1) {

                z0.style.color = "rgb(46, 45, 45)";
                z1.style.color = "white";
                z2.style.color = "rgb(46, 45, 45)";
                z3.style.color = "rgb(46, 45, 45)";
                z4.style.color = "rgb(46, 45, 45)";

            }
            else if ( this.tak === 2) {

                z0.style.color = "rgb(46, 45, 45)";
                z1.style.color = "rgb(46, 45, 45)";
                z2.style.color = "white";
                z3.style.color = "rgb(46, 45, 45)";
                z4.style.color = "rgb(46, 45, 45)";

            }
            else if ( this.tak === 3) {

                z0.style.color = "rgb(46, 45, 45)";
                z1.style.color = "rgb(46, 45, 45)";
                z2.style.color = "rgb(46, 45, 45)";
                z3.style.color = "white";
                z4.style.color = "rgb(46, 45, 45)";

            }
            else if ( this.tak === 4) {

                z0.style.color = "rgb(46, 45, 45)";
                z1.style.color = "rgb(46, 45, 45)";
                z2.style.color = "rgb(46, 45, 45)";
                z3.style.color = "rgb(46, 45, 45)";
                z4.style.color = "white";

                this.tak =-1;
            }
            this.tak++;
            
            
        
            this.licz++;

            if(this.licz == 5) {
                this.licz = 0;
            }
            
        }


        
        $(".slajd").fadeIn(500);
        
       setTimeout("slider.zacznij()", 5200);
       setTimeout("slider.schowaj()", 4500);
        



        console.log(this.licz)
    },
    
    
};




// zegar

function zegar() {
  
   var dzisiaj = new Date();

   var dzien = dzisiaj.getDate();
   if (dzien <10) { dzien = "0" +dzien;};

   var miesiac = dzisiaj.getMonth()+1;
   if (miesiac <10) { miesiac = "0" +miesiac;};

   var rok = dzisiaj.getFullYear();

   var sekunda = dzisiaj.getSeconds();
   if (sekunda <10) { sekunda = "0" +sekunda;};

   var minuta = dzisiaj.getMinutes();
   if (minuta <10) { minuta = "0" +minuta;};

    var godzina = dzisiaj.getHours();

    if (godzina <10) { godzina = "0" +godzina;};

    document.querySelector("#clock").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda ;


    setTimeout("zegar()",1000);

}





window.onload = function() {
    zegar();
    slider.zacznij();
    
}


