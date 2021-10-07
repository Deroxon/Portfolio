var obiekt = {

    // główne odliczanie czas, punkty i blokada
    odliczanie: 8,
    points: 0,
    blokada: true,


    tablica_motywacja: ["Brawo, oby tak dalej!", "Idzie ci nieźle!","Dobra robota!", "Dobrze sobie radzisz!", "Dobrze!", "Świetnie!", "Wspaniale!", "Extra!", "10/10 dawaj dalej!"],

    


    // Tablice do danych lvl'i
    tablica_latwa: ["lekko", "niebieski", "pies", "różowy", "kot", "słoń", "pisanka", "skarpetka", "stolik", "skrypt", "film", "uwaga", "drukarka", "chusteczka", "szklanka", "kieliszek", "małpa", "proszek", "polska", "gra", "serial", "karta", "lot", "ptak", "pelikan", "opaska", "krew", "szafka", "trawa", "ściana", "szop", "laptop", "telefon", "okno", "torba", "mały wóz"],


    tablica_srednia: ["samochód", "krzesło", "gołąb", "żyrafa", "szlafrok", "drukarka", "parapet", "naszyjnik", "balustrada", "zasłona", "whiskey", "gospodarka państwowa", "migdałek", "muszelki", "spódnica", "kapturek", "ładowarka", "ogrodzenie", "krajobraz", "przyczepa", "żyrandol", "tatuaż", "kontrakt", "żółty", "słodziak", "ścięgno", "ogórek kiszony", "dron bojowy", "statek kosmiczny", "szafka nocna", "koniec świata", "tadżykistan", "ładowarka przewodowa", "kominiarz", "koniuktura", "dżdżownica", "globalne ocieplenie", "filologia", "purpurowy", "morska zieleń", "roleta antywłamaniowa", "kambodża", "statek wycieczkowy", "koloseum", "sałatka owocowa"],

    tablica_trudna: ["sałatka jarzynowa", "astronomia", "projekt kosmiczny", "kickboxing", "mieszane sztuki walki", "gibraltar", "egalitaryzm", "prazeodym", "wolfram", "mendelew", "darmszladt", "oganeson", "maska gazowa", "kombinezon ochronny", "konstantynopolitańczykowianeczka", "rzeżucha łąkowa", "tadż mahal", "zharmonizowany", "chihuahua", "pizza hawajska", "inklementacja", "niepokalany", "niezwyciężony", "kontrabanda", "północnica", "golden retriever", "badmintonistka", "bagatelizowanie", "bajkopisarstwo", "labelistyka", "laktowegetarianizm", "lamborghini", "lapis lazuli", "laryngofon", "jacksonville", "fort lauderdale", "honolulu", "grand prairie", "miami gardens", "north charleston"],
    
    
    // funkcja która startuje grę i pobiera klasy aby je zmienić
    startuj : function() {

        document.querySelector(".wpisz").focus();

        pobierzTekst = document.querySelector(".wpisz");
        pobierzPunkty = document.querySelector(".points");
        pobierzTemat = document.querySelector(".pTekst");
        pobierzCzas = document.querySelector(".time");
        pobierzPoziomT = document.querySelector(".poziomT").value;
        
// instrukcje warunkowe które sprawdzają jaka została wybrana wartośc w html oraz metoda losująca z tablicy słowo w zależności od poziomu i wykonuje metode działaj i sprawdzaj i przekazuje odpowiednie argumenty i informuje jaki poziom został wybrany. blokada musi równać się true abyś mógł wybrać poziom, gdy wybierzesz zmienia się na false abyś nie klikał dwa razy
        if ( pobierzPoziomT ===  "latwy" && this.blokada === true) {

            var l = Math.floor(Math.random()* this.tablica_latwa.length);

            this.blokada = false;
            pobierzTemat.innerHTML = this.tablica_latwa[l];


            this.dzialaj("latwy");
            this.sprawdzaj("latwy");
            
            alert("wybrałeś łatwy poziom");
        }


        else if ( pobierzPoziomT === "sredni" && this.blokada === true) {

            var l = Math.floor(Math.random()* this.tablica_srednia.length);

            this.blokada = false;
            pobierzTemat.innerHTML = this.tablica_srednia[l];


            alert("wybrałeś średni poziom");
            this.dzialaj("sredni");
            this.sprawdzaj("sredni");
        }


        else if ( pobierzPoziomT === "trudny" && this.blokada === true) {


            var l = Math.floor(Math.random()* this.tablica_trudna.length);

            this.blokada = false;
            pobierzTemat.innerHTML = this.tablica_trudna[l];


            alert("wybrałeś trudny poziom");
            this.dzialaj("trudny");
            this.sprawdzaj("trudny");
        }

        // w razie jakbyśmy nic nie wybrali
        else if (  pobierzPoziomT === "nic" && this.blokada === true){
            alert("Wybierz poziom Trudności!");
        }
        

    },
    //////////////////////////////////////////////////////////


    // metoda działaj sprawdza który argumetr został przekazany do parametru poziom 
    dzialaj: function(poziom) {


// instrukcje warunkowe sprawdzają jaki argument został wysłany i zmniejszają odliczanie i wyświetlają czas który się zmniejsza
        if ( poziom == "latwy") {
            this.odliczanie = this.odliczanie - 1;
            pobierzCzas.innerHTML = "Czas:"+this.odliczanie+"s";
            var czas = setTimeout("obiekt.dzialaj('latwy')", 1000);

           
            
// dodatkowa instrukcja if w if która sprawdza, że jeśli zegar dotarł do 0 wtedy przegrywasz i wyświetlane są twoje punkty oraz skrypt który odświeża stronę
            if (this.odliczanie === 0 ) {
                alert("Koniec gry!  Uzyskałeś: "+this.points+ " Punktów. Naciśnij Ok aby zrestartować grę!");
                clearTimeout(czas);
                location.reload();
                
            }
            

        }

        else if ( poziom == "sredni") {
            this.odliczanie = this.odliczanie - 1;
            pobierzCzas.innerHTML = "Czas:"+this.odliczanie+"s";
            var czas = setTimeout("obiekt.dzialaj('sredni')", 1000);

           
            

            if (this.odliczanie === 0 ) {
                alert("Koniec gry!  Uzyskałeś: "+this.points+ " Punktów. Naciśnij Ok aby zrestartować grę!");
                clearTimeout(czas);
                location.reload();
                
            }
            

        }


        else if ( poziom == "trudny") {
            this.odliczanie = this.odliczanie - 1;
            pobierzCzas.innerHTML = "Czas:"+this.odliczanie+"s";
            var czas = setTimeout("obiekt.dzialaj('trudny')", 1000);

           
            

            if (this.odliczanie === 0 ) {
                alert("Koniec gry!  Uzyskałeś: "+this.points+ " Punktów. Naciśnij Ok aby zrestartować grę!");
                clearTimeout(czas);
                location.reload();
                
            }
            

        }






    },
    //////////////////////////////////////////////////////////



    //metoda sprawdzaj sprawdza jaki został przekazany argument do parametru wybranyP
    sprawdzaj: function(wybranyP) {

    
    // instrukcja warunkowa które sprawia że w zależności od poziomu zaczyna się sprawdzać co 5 milisekund aktywuje tą funkcję z argumentem łatwy aby było takie jakby błędne koło


     // jeśli metoda sprawdzania wykryje że słowo które zostało wyświetlone jest takie same które wpisaliśmy to wtedy wyświetla nam się komunikat że udało się, metoda się zatrzymuje, dodaje się punkt, wyświetla punkt oraz zmienia czas odliczania na ten co był i aktywuje metoda losowania z argumentem w zależności od poziomu
        if (wybranyP === "latwy") {

            var sprawdz = setTimeout("obiekt.sprawdzaj('latwy')", 5);

            pobierzTekst = document.querySelector(".wpisz");
            console.log("tak");

   
            if( pobierzTemat.innerHTML === pobierzTekst.value) {
                // teksty motywujące
                los_motywacja = Math.floor(Math.random()* this.tablica_motywacja.length),
                alert(this.tablica_motywacja[los_motywacja]+ "  Naciśnij Enter aby kontynuować");


                clearTimeout(sprawdz);
                this.points++
                pobierzPunkty.innerHTML = "Punkty: "+this.points;
                this.odliczanie = 6;
                pobierzTekst.value = "";
                this.losuj("latwy")
                
            }

        }




        else if (wybranyP === "sredni") {

            var sprawdz = setTimeout("obiekt.sprawdzaj('sredni')", 5);

            pobierzTekst = document.querySelector(".wpisz");
            console.log("tak");

            if( pobierzTemat.innerHTML === pobierzTekst.value) {
                // teksty motywujące
                los_motywacja = Math.floor(Math.random()* this.tablica_motywacja.length),
                alert(this.tablica_motywacja[los_motywacja]+ "  Naciśnij Enter aby kontynuować");


                clearTimeout(sprawdz);
                this.points++
                pobierzPunkty.innerHTML = "Punkty: "+this.points;
                this.odliczanie = 6;
                pobierzTekst.value = "";
                this.losuj("sredni")
                
            }

        }





        else if (wybranyP === "trudny") {

            var sprawdz = setTimeout("obiekt.sprawdzaj('trudny')", 5);

            pobierzTekst = document.querySelector(".wpisz");
            console.log("tak");

            if( pobierzTemat.innerHTML === pobierzTekst.value) {
                // teksty motywujące
                los_motywacja = Math.floor(Math.random()* this.tablica_motywacja.length),
                alert(this.tablica_motywacja[los_motywacja]+ "  Naciśnij Enter aby kontynuować");

                
                clearTimeout(sprawdz);
                this.points++
                pobierzPunkty.innerHTML = "Punkty: "+this.points;
                this.odliczanie = 6;
                pobierzTekst.value = "";
                this.losuj("trudny")
                
            }

        }


        
      


    },

    // do metody losuj trafia argument i jeśli jest on równy jednym z warunków instrukcji warunkowej to łapiemy pole na temat i wyświetlamy je znowu i aktywujemy metode do sprawdzania jeszcze raz :)
    losuj: function(poziomik) {

        if (poziomik == "latwy") {

            pobierzTemat = document.querySelector(".pTekst");

            var l = Math.floor(Math.random()* this.tablica_latwa.length);

                
            pobierzTemat.innerHTML = this.tablica_latwa[l];
            
            this.sprawdzaj("latwy");

        }

        else if (poziomik == "sredni") {

            pobierzTemat = document.querySelector(".pTekst");

            var l = Math.floor(Math.random()* this.tablica_srednia.length);

                
            pobierzTemat.innerHTML = this.tablica_srednia[l];
            
            this.sprawdzaj("sredni");

        }


        else if (poziomik == "trudny") {

            pobierzTemat = document.querySelector(".pTekst");

            var l = Math.floor(Math.random()* this.tablica_trudna.length);

                
            pobierzTemat.innerHTML = this.tablica_trudna[l];
            
            this.sprawdzaj("trudny");

        }

        
    }

}









