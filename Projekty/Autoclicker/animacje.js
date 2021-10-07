function sprawdzstatus(sprawdz) {
    let zlap_status_mb = document.querySelector("#s1");
    let zlap_status_sb = document.querySelector("#s2");
    let zlap_status_db = document.querySelector("#s3");
    let zlap_status_rb = document.querySelector("#s4");
    let zlap_status_ssb = document.querySelector("#s5");
    let zlap_status_wsb = document.querySelector("#s6");
    let zlap_status_stb = document.querySelector("#s7");
    let zlap_status_ab = document.querySelector("#s8");
    let zlap_status_fb = document.querySelector("#s9");
    let zlap_status_ob = document.querySelector("#s10");
  
    
    // MAŁY BAŁWAN ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= mbCena) {
        zlap_status_mb.style.background = "url('img/green.jpg')";

       

    }
    else if (sniezki <= mbCena) {
        zlap_status_mb.style.background = "url('img/gray.jpg')";
    }


    // ŚREDNI BAŁWAN ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= sbCena) {
        zlap_status_sb.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= sbCena) {
        zlap_status_sb.style.background = "url('img/gray.jpg')";
    }


    // DUŻY BAŁWAN ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= dbCena) {
        zlap_status_db.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= dbCena) {
        zlap_status_db.style.background = "url('img/gray.jpg')";
    }


    // RYCERZ BAŁWAN ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= rbCena) {
        zlap_status_rb.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= rbCena) {
        zlap_status_rb.style.background = "url('img/gray.jpg')";
    }



    // WŚCIEKŁY BAŁWAN ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= wsbCena) {
        zlap_status_wsb.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= wsbCena) {
        zlap_status_wsb.style.background = "url('img/gray.jpg')";
    }




    // STRASZNY BAŁWAN ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= stbCena) {
        zlap_status_stb.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= stbCena) {
        zlap_status_stb.style.background = "url('img/gray.jpg')";
    }



    // ARMATKA ŚNIEŻNA ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= abCena) {
        zlap_status_ab.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= abCena) {
        zlap_status_ab.style.background = "url('img/gray.jpg')";
    }






    // FABRYKA ŚNIEŻEK ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= fbCena) {
        zlap_status_fb.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= fbCena) {
        zlap_status_fb.style.background = "url('img/gray.jpg')";
    }






    // OLAF BAŁWAN ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= obCena) {
        zlap_status_ob.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= obCena) {
        zlap_status_ob.style.background = "url('img/gray.jpg')";
    }

    // ŚNIEŻKA ANIMACJA ZNACZĄCA ŻE MASZ WYSTARCZAJĄCO ŚNIEŻEK NA ZAKUP////////////////////////////////////////////////////////////////
    if(sniezki >= add_priceS) {
        zlap_status_ssb.style.background = "url('img/green.jpg')";
    }
    else if ( sniezki <= add_priceS) {
        zlap_status_ssb.style.background = "url('img/gray.jpg')";
    }







    console.log(33);
    setTimeout("sprawdzstatus()",2);
}





// ANIMACJA KLIKNIĘCIA ///////////////////////////////////////////////////////////////////////////////////////////////////////////


/* jQuery('#s1').click(function() {
    $(this).data('clicked', true);
});
*/



//////////////////////////////////////////////////////////////////// Przejście na Upgrad'y ///////////////////////////////////////////


function upgrade() {
    

    let zlap_sniezke = document.querySelector(".sniezz");
    let zlap_diva_sniezki = document.querySelector(".pojemnik_animacja");

    zlap_sniezke.parentNode.removeChild(zlap_sniezke);

     zlap_diva_sniezki = document.createElement("'div'");
    a.classlist = "siema";


}
