function obliczaj() 
{
    var a = parseInt(document.querySelector("#wartość1").value);
    var op = document.querySelector("#operator").value;
    var obliczenie;
    

    if (op == "PLNEURO") {
        
        let taki1;
        taki1 = a / 4.22 ;
        let skrót1 = taki1;
        skrót1 = Math.floor(skrót1 * 100)/100;

        obliczenie = skrót1 + "  Euro";

       

    }
    else if (op == "EUROPLN") {
        
        let taki2;
        taki2 = a * 4.22 ;
        let skrót2 = taki2;
        skrót2 = Math.floor(skrót2 * 100)/100;

        obliczenie = skrót2 + "  PLN";


    }

    else if (op == "PLNUSD") {
        
        let taki3;
        taki3 = a / 4.02 ;
        let skrót3 = taki3;
        skrót3 = Math.floor(skrót3 * 100)/100;

        obliczenie = skrót3 + "  Dolary";


    }


    else if (op == "USDPLN") {
        
        let taki4;
        taki4 = a * 4.22 ;
        let skrót4 = taki4;
        skrót4 = Math.floor(skrót4 * 100)/100;

        obliczenie = skrót4 + "  PLN";


    }


    else if (op == "RUBPLN") {
        
        let taki5;
        taki5 = a * 0.0604 ;
        let skrót5 = taki5;
        skrót5 = Math.floor(skrót5 * 100)/100;

        obliczenie = skrót5 + "  PLN";


    }



    else if (op == "PLNRUB") {
        
        let taki6;
        taki6 = a / 0.0604 ;
        let skrót6 = taki6;
        skrót6 = Math.floor(skrót6 * 100)/100;

        obliczenie = skrót6 + "  Rubli";

    }


    else if (op == "JPYPLN") {
        
        let taki7;
        taki7 = a / 3.6922 ;
        let skrót7 = taki7;
        skrót7 = Math.floor(skrót7 * 100)/100;

        obliczenie = skrót7 + "  PLN";


    }


    else if (op == "PLNJPY") {
        
        let taki8;
        taki8 = a * 3.6922 ;
        let skrót8 = taki8;
        skrót8 = Math.floor(skrót8 * 100)/100;

        obliczenie = skrót8 + "  Jenów";


    }
    


   document.getElementById("wynik").innerHTML = "Wynik: <br /> " + obliczenie ;
}