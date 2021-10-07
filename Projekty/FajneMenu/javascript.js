let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
    // uchwyci wszystkie <a> w nav-sidebar w tablice jakby


    if ( toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "300px";
        getSidebarTitle.style.opacity = "0.5";


        let arrayLength = getSidebarLinks.length;
        for (let i=0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if ( toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "60px";
        getSidebarTitle.style.opacity = "0";


        let arrayLength = getSidebarLinks.length;
        for (let i=0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = false;
    }
}

// Ogólnie jakby tłumaczyć to z góry na dół to definujemy zmienną i określamy jej boolean mogło być nawet true, potem robimy funckje która jest przypisana do zmiennej toggleNav i łapiemy wszystkie te elementy na stronie z rozwijanego menu tak żeby były osobno złapane żeby osobno je wystylizować.

//potem dajemy warunek czyli jeśli toggleNavStatus jest false czyli jest bo tak jest zdefiniowany to zmień text na widoczny, zmień długość na 300 i przeźroczystośc na 0.5, potem pętlaktóra definuje tablice zrobioną w zmienne getSidebarLinks żeby ta pętla zmieniała wszystkim a opacity na 1 i potem zmieniamy toggleNavStatus i tak samo jak wtedy tylko żeby właściwości css wróciły jak były. i nie zapominamy przestawić statusu