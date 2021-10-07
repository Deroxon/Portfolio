var tablica_z_haslami = [
    "Polska",
    "Finlandia",
    "Urugwaj",
    "Pakistan",
    "Niemcy",
    "Ukraina",
    "Wielka Brytania",
    "Arabia Saudyjska",
    "Bangladesz",
    "Bośnia i Hercegowina",
    "Demokratyczna Republika Konga",
    "Gwinea Równikowa",
    "Honduras",
    "Kambodża",
    "Lesotho",
    "Liechtenstein",
    "Macedonia Północna",
    "Nowa Zelandia",
    "Republika Zielonego Przylądka",
    "San Marino",
    "Sudan Południowy"


];

var x = Math.floor( (Math.random() * tablica_z_haslami.length));

var haslo = tablica_z_haslami[x];


var blokuj_gnoja = false;

haslo = haslo.toUpperCase();
//uppercase to jest funkcja //

var dlugosc = haslo.length;
//length to jest cecha nie Funkcja! //
var ile_skuch = 0;
// zmienna ile skuch i wartość 0 //~

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
// i= 0 dopkóki i jest mniejsze od długości to zwiększaj go czyli i++ //
{
    if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    //jeśli hasło postać w liczbie jest równa spacji to hasło równa się hasło + odstęp //
    else haslo1 = haslo1 + "-";

}

function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
}


window.onload = start;




var litery = new Array(35);
// zmienna litery równa się nowa tablica i rozmiar //
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";






function start()
{
    var tresc_diva = "";

    for (i=0; i<=34; i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';

        if((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
        // jeśli i jest równe 7 bo liczymy od 0 to zmienna jest równa zmiennej i zacznij od nowej linii  a jakby było (i==6 || i==13 || i==20) te znaczki oznaczają "lub"//
        // teraz z tym procentem % - modulo czyli reszta z dzielenia czyli i+1 dzielimy przez 7 //
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;




    wypisz_haslo();
}






String.prototype.ustawZnak = function(miejsce, znak)
//klasa string funkcja ustawZnak równa się funkcji miejsce i znak //
{
    if(miejsce > this.length - 1) return this.toString();
    // jeśli miejsce jest większe niż obiekt to. długość tego|| zwróć ten łańcuch toString - zapewnia że to jest łańcuch  //
    else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
    // Linia która sprawi że zamiane konkretnego znaku na pozycji miejsce // 
    // w przeciwnym wypadku zwróc ten podłańcuch //
}







function sprawdz(nr)
{
    var trafiona = false;



    for(i=0; i<dlugosc; i++)
    {
        if (haslo.charAt(i) == litery[nr])
        // jeśli znak hasła czyli i jest równy o nr ze zmiennej litery //
        {
             haslo1 = haslo1.ustawZnak(i,litery[nr]);
             trafiona = true;
        }
    }

    if (trafiona == true)
    {
        yes.play();
        // aktywuj funkcję yes //
        var element = "lit" + nr;

        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = " 3px solid #00C000";
        document.getElementById(element).style.cursor = "default";


        wypisz_haslo();
    }


    else
    {
       no.play();

        // aktywuj funkcję no //

        var element = "lit" + nr;

        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = " 3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
        // lapać diva i ustaw atrybut onclicka na wartość średnika to wykona pustą instrukcję //

        //Skucha//
        ile_skuch++;
        var obraz = "img/s"+ ile_skuch+ ".jpg";
        document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" />';

    }

    
    //wygrana
    if(haslo ==haslo1)
    document.getElementById("alfabet").innerHTML = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
    // jeśli haslo=haslo1 to zamien div o nazwie alfabet na napis że podano właściwe hasło i pokaż to hasło oraz zrób przycisk o klasie reset który reloaduje całą stronę //

    //przegrana
    if (ile_skuch>=9)
    document.getElementById("alfabet").innerHTML = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
}


// TA FUNKCJA DO POPRAWIENIA //
function losuj()
{
        location.reload();
}

    