

var i = 0;
var timer1 = 0;

function automatSlide() {
    
    i++;
    var zlapzdj = document.querySelector(".slide");

    zlapzdj.style.backgroundImage = "url('../img/s"+i+".jpg')";

    if (i === 7) {
        i=0;
        zlapzdj.style.backgroundImage = "url('../img/s"+i+".jpg')";
    }


    timer1 = setTimeout("automatSlide()", 4000);
    
    
}






function slajderReczny(ktory) {
    var zlapzdj = document.querySelector(".slide");
    
    clearTimeout(timer1);

    if(ktory ==="tyle") {
        i--;
        zlapzdj.style.backgroundImage = "url('../img/s"+i+".jpg')";
        
        

        if (i === -1) {
            i=6;
            zlapzdj.style.backgroundImage = "url('../img/s"+i+".jpg')";
        }
        
    }
    else if (ktory ==="przod"){
        i++
        zlapzdj.style.backgroundImage = "url('../img/s"+i+".jpg')";
        
        
        if (i === 7) {
            i=0;
            zlapzdj.style.backgroundImage = "url('../img/s"+i+".jpg')";
        }
    }

    automatSlide();
    

}




var liczenie = 0;

function zaladujJedzenie(kierunek) {
    var jedzenie = document.querySelector("ObejrzyMenu2");


    var img0 = document.querySelector(".dImg0");
    var img1 = document.querySelector(".dImg1");
    var img2 = document.querySelector(".dImg2");
    var img3 = document.querySelector(".dImg3");
    var img4 = document.querySelector(".dImg4");
    var img5 = document.querySelector(".dImg5");
    var img6 = document.querySelector(".dImg6");
    var img7 = document.querySelector(".dImg7");

    var nazwa0 = document.querySelector(".dNazwa0");
    var nazwa1 = document.querySelector(".dNazwa1");
    var nazwa2 = document.querySelector(".dNazwa2");
    var nazwa3 = document.querySelector(".dNazwa3");
    var nazwa4 = document.querySelector(".dNazwa4");
    var nazwa5 = document.querySelector(".dNazwa5");
    var nazwa6 = document.querySelector(".dNazwa6");
    var nazwa7 = document.querySelector(".dNazwa7");

    var cena0 = document.querySelector(".dCena0");
    var cena1 = document.querySelector(".dCena1");
    var cena2 = document.querySelector(".dCena2");
    var cena3 = document.querySelector(".dCena3");
    var cena4 = document.querySelector(".dCena4");
    var cena5 = document.querySelector(".dCena5");
    var cena6 = document.querySelector(".dCena6");
    var cena7 = document.querySelector(".dCena7");

    var ocena0 = document.querySelector(".dOcena0");
    var ocena1 = document.querySelector(".dOcena1");
    var ocena2 = document.querySelector(".dOcena2");
    var ocena3 = document.querySelector(".dOcena3");
    var ocena4 = document.querySelector(".dOcena4");
    var ocena5 = document.querySelector(".dOcena5");
    var ocena6 = document.querySelector(".dOcena6");
    var ocena7 = document.querySelector(".dOcena7");

    var tab_zupy0 = ["Zupa fasolowa", "Zupa pomidorowa", "Zupa ogórkowa", "Rosół", "Zupa grzybowa", "Zupa warzywna", "Żurek", "Kapuśniak"];
    var tab_zupy1 = ["5.20", "4.90", "4.20", "5.00", "4.50", "4.00", "5.50", "6.10"];
    var tab_zupy2 = ["7/10", "10/10", "6/10", "10/10", "9/10", "5/10", "8/10", "10/10"];

    var tab_obiady0 = ["Zestaw niedzielny", "Dorsz z frytkami", "Makaron w sosie szpiankowym", "Makrela", "Łosoś w sosie ziołowym", "Karp na ostro", "Filet z Kurczaka", "Ośmiornica w sosie słodko-kwaśnym"];
    var tab_obiady1 = ["20.50", "12.70", "11.20", "6.00", "18.57", "10.50", "16.20", "24.20"];
    var tab_obiady2 = ["9/10", "5/10", "8/10", "10/10", "9/10", "9/10", "8/10", "10/10"];


    var tab_pizza0 = ["Margarita", "4 sery", "Piekielna", "Hawajska", "z Owocami morza", "wiejska", "Marynarska", "Dowolna, 6 składników"];
    var tab_pizza1 = ["16.50", "17.70", "19.20", "18.00", "24.57", "22.50", "19.20", "27.00"];
    var tab_pizza2 = ["9/10", "5/10", "8/10", "10/10", "9/10", "9/10", "8/10", "10/10"];

    

    if(kierunek === "przod") {

        liczenie++;
    }

    else if (kierunek === "tyle") {
        liczenie--;
    }

            if (liczenie === 0) {
                img0.style.backgroundImage = "url(../img/menu/zupy/zupa0.jpg)";
                img1.style.backgroundImage = "url(../img/menu/zupy/zupa1.jpg)";
                img2.style.backgroundImage = "url(../img/menu/zupy/zupa2.jpg)";
                img3.style.backgroundImage = "url(../img/menu/zupy/zupa3.jpg)";
                img4.style.backgroundImage = "url(../img/menu/zupy/zupa4.jpg)";
                img5.style.backgroundImage = "url(../img/menu/zupy/zupa5.jpg)";
                img6.style.backgroundImage = "url(../img/menu/zupy/zupa6.jpg)";
                img7.style.backgroundImage = "url(../img/menu/zupy/zupa7.jpg)";
        
                nazwa0.innerHTML = tab_zupy0[0];
                nazwa1.innerHTML = tab_zupy0[1];
                nazwa2.innerHTML = tab_zupy0[2];
                nazwa3.innerHTML = tab_zupy0[3];
                nazwa4.innerHTML = tab_zupy0[4];
                nazwa5.innerHTML = tab_zupy0[5];
                nazwa6.innerHTML = tab_zupy0[6];
                nazwa7.innerHTML = tab_zupy0[7];
        
                cena0.innerHTML = "Cena: "+tab_zupy1[0]+"zł";
                cena1.innerHTML = "Cena: "+tab_zupy1[1]+"zł";
                cena2.innerHTML = "Cena: "+tab_zupy1[2]+"zł";
                cena3.innerHTML = "Cena: "+tab_zupy1[3]+"zł";
                cena4.innerHTML = "Cena: "+tab_zupy1[4]+"zł";
                cena5.innerHTML = "Cena: "+tab_zupy1[5]+"zł";
                cena6.innerHTML = "Cena: "+tab_zupy1[6]+"zł";
                cena7.innerHTML = "Cena: "+tab_zupy1[7]+"zł";
        
                ocena1.innerHTML = "Ocena klientów: "+tab_zupy2[0];
                ocena0.innerHTML = "Ocena klientów: "+tab_zupy2[1];
                ocena2.innerHTML = "Ocena klientów: "+tab_zupy2[2];
                ocena3.innerHTML = "Ocena klientów: "+tab_zupy2[3];
                ocena4.innerHTML = "Ocena klientów: "+tab_zupy2[4];
                ocena5.innerHTML = "Ocena klientów: "+tab_zupy2[5];
                ocena6.innerHTML = "Ocena klientów: "+tab_zupy2[6];
                ocena7.innerHTML = "Ocena klientów: "+tab_zupy2[7];

            }
            else if (liczenie === 1) {
                img0.style.backgroundImage = "url(../img/menu/zupy/zestaw0.jpg)";
                img1.style.backgroundImage = "url(../img/menu/zupy/zestaw1.jpg)";
                img2.style.backgroundImage = "url(../img/menu/zupy/zestaw2.jpg)";
                img3.style.backgroundImage = "url(../img/menu/zupy/zestaw3.jpg)";
                img4.style.backgroundImage = "url(../img/menu/zupy/zestaw4.jpg)";
                img5.style.backgroundImage = "url(../img/menu/zupy/zestaw5.jpg)";
                img6.style.backgroundImage = "url(../img/menu/zupy/zestaw6.jpg)";
                img7.style.backgroundImage = "url(../img/menu/zupy/zestaw7.jpg)";
        
                nazwa0.innerHTML = tab_obiady0[0];
                nazwa1.innerHTML = tab_obiady0[1];
                nazwa2.innerHTML = tab_obiady0[2];
                nazwa3.innerHTML = tab_obiady0[3];
                nazwa4.innerHTML = tab_obiady0[4];
                nazwa5.innerHTML = tab_obiady0[5];
                nazwa6.innerHTML = tab_obiady0[6];
                nazwa7.innerHTML = tab_obiady0[7];
        
                cena0.innerHTML = "Cena: "+tab_obiady1[0]+"zł";
                cena1.innerHTML = "Cena: "+tab_obiady1[1]+"zł";
                cena2.innerHTML = "Cena: "+tab_obiady1[2]+"zł";
                cena3.innerHTML = "Cena: "+tab_obiady1[3]+"zł";
                cena4.innerHTML = "Cena: "+tab_obiady1[4]+"zł";
                cena5.innerHTML = "Cena: "+tab_obiady1[5]+"zł";
                cena6.innerHTML = "Cena: "+tab_obiady1[6]+"zł";
                cena7.innerHTML = "Cena: "+tab_obiady1[7]+"zł";
        
                ocena1.innerHTML = "Ocena klientów: "+tab_obiady2[0];
                ocena0.innerHTML = "Ocena klientów: "+tab_obiady2[1];
                ocena2.innerHTML = "Ocena klientów: "+tab_obiady2[2];
                ocena3.innerHTML = "Ocena klientów: "+tab_obiady2[3];
                ocena4.innerHTML = "Ocena klientów: "+tab_obiady2[4];
                ocena5.innerHTML = "Ocena klientów: "+tab_obiady2[5];
                ocena6.innerHTML = "Ocena klientów: "+tab_obiady2[6];
                ocena7.innerHTML = "Ocena klientów: "+tab_obiady2[7];

            }
            else if(liczenie === 2) {
                img0.style.backgroundImage = "url(../img/menu/zupy/pizza0.jpg)";
                img1.style.backgroundImage = "url(../img/menu/zupy/pizza1.jpg)";
                img2.style.backgroundImage = "url(../img/menu/zupy/pizza2.jpg)";
                img3.style.backgroundImage = "url(../img/menu/zupy/pizza3.jpg)";
                img4.style.backgroundImage = "url(../img/menu/zupy/pizza4.jpg)";
                img5.style.backgroundImage = "url(../img/menu/zupy/pizza5.jpg)";
                img6.style.backgroundImage = "url(../img/menu/zupy/pizza6.jpg)";
                img7.style.backgroundImage = "url(../img/menu/zupy/pizza7.jpg)";
        
                nazwa0.innerHTML = tab_pizza0[0];
                nazwa1.innerHTML = tab_pizza0[1];
                nazwa2.innerHTML = tab_pizza0[2];
                nazwa3.innerHTML = tab_pizza0[3];
                nazwa4.innerHTML = tab_pizza0[4];
                nazwa5.innerHTML = tab_pizza0[5];
                nazwa6.innerHTML = tab_pizza0[6];
                nazwa7.innerHTML = tab_pizza0[7];
        
                cena0.innerHTML = "Cena: "+tab_pizza1[0]+"zł";
                cena1.innerHTML = "Cena: "+tab_pizza1[1]+"zł";
                cena2.innerHTML = "Cena: "+tab_pizza1[2]+"zł";
                cena3.innerHTML = "Cena: "+tab_pizza1[3]+"zł";
                cena4.innerHTML = "Cena: "+tab_pizza1[4]+"zł";
                cena5.innerHTML = "Cena: "+tab_pizza1[5]+"zł";
                cena6.innerHTML = "Cena: "+tab_pizza1[6]+"zł";
                cena7.innerHTML = "Cena: "+tab_pizza1[7]+"zł";
        
                ocena1.innerHTML = "Ocena klientów: "+tab_pizza2[0];
                ocena0.innerHTML = "Ocena klientów: "+tab_pizza2[1];
                ocena2.innerHTML = "Ocena klientów: "+tab_pizza2[2];
                ocena3.innerHTML = "Ocena klientów: "+tab_pizza2[3];
                ocena4.innerHTML = "Ocena klientów: "+tab_pizza2[4];
                ocena5.innerHTML = "Ocena klientów: "+tab_pizza2[5];
                ocena6.innerHTML = "Ocena klientów: "+tab_pizza2[6];
                ocena7.innerHTML = "Ocena klientów: "+tab_pizza2[7];


            }
            else if (liczenie === 3) {
                liczenie= 0;
                img0.style.backgroundImage = "url(../img/menu/zupy/zupa0.jpg)";
                img1.style.backgroundImage = "url(../img/menu/zupy/zupa1.jpg)";
                img2.style.backgroundImage = "url(../img/menu/zupy/zupa2.jpg)";
                img3.style.backgroundImage = "url(../img/menu/zupy/zupa3.jpg)";
                img4.style.backgroundImage = "url(../img/menu/zupy/zupa4.jpg)";
                img5.style.backgroundImage = "url(../img/menu/zupy/zupa5.jpg)";
                img6.style.backgroundImage = "url(../img/menu/zupy/zupa6.jpg)";
                img7.style.backgroundImage = "url(../img/menu/zupy/zupa7.jpg)";
        
                nazwa0.innerHTML = tab_zupy0[0];
                nazwa1.innerHTML = tab_zupy0[1];
                nazwa2.innerHTML = tab_zupy0[2];
                nazwa3.innerHTML = tab_zupy0[3];
                nazwa4.innerHTML = tab_zupy0[4];
                nazwa5.innerHTML = tab_zupy0[5];
                nazwa6.innerHTML = tab_zupy0[6];
                nazwa7.innerHTML = tab_zupy0[7];
        
                cena0.innerHTML = "Cena: "+tab_zupy1[0]+"zł";
                cena1.innerHTML = "Cena: "+tab_zupy1[1]+"zł";
                cena2.innerHTML = "Cena: "+tab_zupy1[2]+"zł";
                cena3.innerHTML = "Cena: "+tab_zupy1[3]+"zł";
                cena4.innerHTML = "Cena: "+tab_zupy1[4]+"zł";
                cena5.innerHTML = "Cena: "+tab_zupy1[5]+"zł";
                cena6.innerHTML = "Cena: "+tab_zupy1[6]+"zł";
                cena7.innerHTML = "Cena: "+tab_zupy1[7]+"zł";
        
                ocena1.innerHTML = "Ocena klientów: "+tab_zupy2[0];
                ocena0.innerHTML = "Ocena klientów: "+tab_zupy2[1];
                ocena2.innerHTML = "Ocena klientów: "+tab_zupy2[2];
                ocena3.innerHTML = "Ocena klientów: "+tab_zupy2[3];
                ocena4.innerHTML = "Ocena klientów: "+tab_zupy2[4];
                ocena5.innerHTML = "Ocena klientów: "+tab_zupy2[5];
                ocena6.innerHTML = "Ocena klientów: "+tab_zupy2[6];
                ocena7.innerHTML = "Ocena klientów: "+tab_zupy2[7];
            }
            else if (liczenie < 0) {
                liczenie= 2;
                img0.style.backgroundImage = "url(../img/menu/zupy/pizza0.jpg)";
                img1.style.backgroundImage = "url(../img/menu/zupy/pizza1.jpg)";
                img2.style.backgroundImage = "url(../img/menu/zupy/pizza2.jpg)";
                img3.style.backgroundImage = "url(../img/menu/zupy/pizza3.jpg)";
                img4.style.backgroundImage = "url(../img/menu/zupy/pizza4.jpg)";
                img5.style.backgroundImage = "url(../img/menu/zupy/pizza5.jpg)";
                img6.style.backgroundImage = "url(../img/menu/zupy/pizza6.jpg)";
                img7.style.backgroundImage = "url(../img/menu/zupy/pizza7.jpg)";
        
                nazwa0.innerHTML = tab_pizza0[0];
                nazwa1.innerHTML = tab_pizza0[1];
                nazwa2.innerHTML = tab_pizza0[2];
                nazwa3.innerHTML = tab_pizza0[3];
                nazwa4.innerHTML = tab_pizza0[4];
                nazwa5.innerHTML = tab_pizza0[5];
                nazwa6.innerHTML = tab_pizza0[6];
                nazwa7.innerHTML = tab_pizza0[7];
        
                cena0.innerHTML = "Cena: "+tab_pizza1[0]+"zł";
                cena1.innerHTML = "Cena: "+tab_pizza1[1]+"zł";
                cena2.innerHTML = "Cena: "+tab_pizza1[2]+"zł";
                cena3.innerHTML = "Cena: "+tab_pizza1[3]+"zł";
                cena4.innerHTML = "Cena: "+tab_pizza1[4]+"zł";
                cena5.innerHTML = "Cena: "+tab_pizza1[5]+"zł";
                cena6.innerHTML = "Cena: "+tab_pizza1[6]+"zł";
                cena7.innerHTML = "Cena: "+tab_pizza1[7]+"zł";
        
                ocena1.innerHTML = "Ocena klientów: "+tab_pizza2[0];
                ocena0.innerHTML = "Ocena klientów: "+tab_pizza2[1];
                ocena2.innerHTML = "Ocena klientów: "+tab_pizza2[2];
                ocena3.innerHTML = "Ocena klientów: "+tab_pizza2[3];
                ocena4.innerHTML = "Ocena klientów: "+tab_pizza2[4];
                ocena5.innerHTML = "Ocena klientów: "+tab_pizza2[5];
                ocena6.innerHTML = "Ocena klientów: "+tab_pizza2[6];
                ocena7.innerHTML = "Ocena klientów: "+tab_pizza2[7];
            }

    

  
   



}









window.onload = function() {
    automatSlide();
    
}