function zniknij1() {
   var p =  $("#pole1")[0].placeholder = " ";

  
}

function zniknij2() {
    var o =  $("#pole2")[0].placeholder = " ";
 
 }


function oblicz() {
    var a = parseInt(document.querySelector("#pole1").value);
    // jakby nie było parseInt to byłoby w wyniku np a=2 b=3 pierwszy if z dodawnie to by było 23 a nie 5
    var b = parseInt(document.querySelector("#pole2").value);
    var op = (document.querySelector("#operatory").value);
    var obliczaj;

    var c = document.querySelector("#pole1").value;
    var d = document.querySelector("#pole2").value;


    if(op == "dodaj") {
        
        if ( c == "" || d == "") {
            document.querySelector("#wynik").innerHTML = "Proszę podać liczbę";
        }
        else if ( c > 0 || d > 0) {
            obliczaj = a +b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;
        }
        else if ( c < 0 || d < 0) {
            obliczaj = a +b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;
        }
        else if ( c == 0 || d == 0) {
            obliczaj = a +b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;

        }
        else {
            obliczaj = "To nie jest liczba";
            document.querySelector("#wynik").innerHTML = obliczaj;
        }
        
    }





    else if(op == "minus") {
        
        if ( c == "" || d == "") {
            document.querySelector("#wynik").innerHTML = "Proszę podać liczbę";
        }
        else if ( c > 0 || d > 0) {
            obliczaj = a -b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;
        }
        else if ( c < 0 || d < 0) {
            obliczaj = a -b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;
        }
        else if ( c == 0 || d == 0) {
            obliczaj = a -b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;

        }
        else {
            obliczaj = "To nie jest liczba";
            document.querySelector("#wynik").innerHTML = obliczaj;
        }
        
    }




    else if(op == "pomnóż") {
        
        if ( c == "" || d == "") {
            document.querySelector("#wynik").innerHTML = "Proszę podać liczbę";
        }
        else if ( c > 0 || d > 0) {
            obliczaj = a *b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;
        }
        else if ( c < 0 || d < 0) {
            obliczaj = a *b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;
        }
        else if ( c == 0 || d == 0) {
            obliczaj = a *b;
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;

        }
        else {
            obliczaj = "To nie jest liczba";
            document.querySelector("#wynik").innerHTML = obliczaj;
        }
        
    }




    else if(op == "podziel") {
        
        if ( c == "" || d == "") {
            document.querySelector("#wynik").innerHTML = "Proszę podać liczbę";
        }
        else if ( c > 0 || d > 0) {
            obliczaj = a /b;
            obliczaj = obliczaj.toFixed(2);
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;
        }
        else if ( c < 0 || d < 0) {
            obliczaj = a /b;
            obliczaj = obliczaj.toFixed(2);
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;
        }
        else if ( c == 0 || d == 0) {
            obliczaj = a /b;
            obliczaj = obliczaj.toFixed(2);
            document.getElementById("wynik").innerHTML = "Wynik: <br />" + obliczaj;

        }
        else {
            obliczaj = "To nie jest liczba";
            document.querySelector("#wynik").innerHTML = obliczaj;
        }
        
    }
    
    
    

 
    
}



