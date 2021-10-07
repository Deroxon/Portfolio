let toggleNavStatus = false;






let toggleNav = function() {

    let getSidebar = document.querySelector('.nav-sidebar');
    let getSidebarUl = document.querySelector('.nav-sidebar ul');
    let getSidebarTitle = document.querySelector('.nav-sidebar span');
    let getSidebarLinks= document.querySelectorAll('.nav-sidebar a');
    
    let getStatki = document.querySelector("#statki");
    let getWeatherApp = document.querySelector("#weatherApp")
    let getReactShop = document.querySelector("#reactShop")
    let getTenis= document.querySelector("#tenis");
    let getMemory = document.querySelector("#memory");
    let getKalk = document.querySelector("#kalk");
    let getWaluta = document.querySelector("#waluta");
    let getJezioro = document.querySelector("#jezioro");
    let getMeble = document.querySelector("#meble");
    let getSzubienica = document.querySelector("#szubienica");
    let getBaśnio = document.querySelector("#baśniogród");
    let getKsiazki = document.querySelector("#ksiazki");
    let getJezioran = document.querySelector("#jezioran");
    let getAutoclicker = document.querySelector("#autoclicker");
    let getTypingMachine = document.querySelector("#typing_machine");
    let getKnajpaMorze = document.querySelector("#knajpa_morze");


    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "270px";
        getSidebar.style.visibility = "visible";
        getSidebarTitle.style.opacity = "0.5";
       
      
        getStatki.href = "Projekty/ships/ships.html";
        getStatki.target = "_blank";

        getWeatherApp.href="Projekty/weatherApp/index.html";
        getWeatherApp.target="_blank";

        getReactShop.href = "Projekty/reactShop/index.html"
        getReactShop.target = "_blank";
        
        getTenis.href = "Projekty/tenis/index.html";
        getTenis.target = "_blank";


        getMemory.href = "Projekty/MemoryGame/MemoryGame.html";
        getMemory.target = "_blank";

        getKalk.href = "Projekty/Kalkulator/kalk.html";
        getKalk.target = "_blank";

        getWaluta.href = "Projekty/Przeliczanie_walut/Przeliczanie.html";
        getWaluta.target = "_blank";

        getJezioro.href = "Projekty/Strona_jeziora/ind.html";
        getJezioro.target = "_blank";

        getMeble.href = "Projekty/Strona_z_meblami/index.html";
        getMeble.target = "_blank";

        getSzubienica.href = "Projekty/Szubienica/index.html";
        getSzubienica.target = "_blank";

        getBaśnio.href = "Projekty/Basniogrod/index.html";
        getBaśnio.target = "_blank";

        getKsiazki.href = "Projekty/book_online/Wlasny.html";
        getKsiazki.target = "_blank";

        getKsiazki.href = "Projekty/book_online/Wlasny.html";
        getKsiazki.target = "_blank";

        getJezioran.href = "Projekty/fish_website/fish/index.html";
        getJezioran.target = "_blank";

        getAutoclicker.href = "Projekty/Autoclicker/index.html";
        getAutoclicker.target = "_blank";

        getTypingMachine.href = "Projekty/typing_machine/index.html";
        getTypingMachine.target = "_blank";

        getKnajpaMorze.href = "Projekty/knajpa_morze/index.html";
        getKnajpaMorze.target = "_blank";
        
        
        

        let arrayLength = getSidebarLinks.length;
        
        for (let i=0; i<arrayLength; i++ ) {
            getSidebarLinks[i].style.opacity = "1";
           
        }

        toggleNavStatus = true;

    }

    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.visibility = "hidden";
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        


        let arrayLength = getSidebarLinks.length;
        for (let i=0; i<arrayLength; i++ ) {
            getSidebarLinks[i].style.opacity = "0";
        }

        toggleNavStatus = false;
    }
}




// funkcja przyklejana nawigacja

$(document).ready(function() {
    var Navy = $(".nav-main").offset().top;
    
    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();

        if(ScrollY > Navy) {
            $(".nav-main").addClass('sticky');
        }
        else {
            $(".nav-main").removeClass('sticky');
        }
        };

    stickyNav();
    
    $(window).scroll(function() {
        stickyNav();
    });
});

