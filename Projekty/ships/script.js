'use stricts'
let view = {
    displayMessage: function(msg) {
        var message = document.getElementById('messageArea');
        message.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");

    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

let model = {

    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk:0,

    ships: [ 
            {locations: ['0', '0', '0'], hits: ["", "", ""], status: true },
            {locations: ['0', '0', '0'], hits: ["", "", ""], status: true },
            {locations: ['0', '0', '0'], hits: ["", "", ""], status: true }
           ],
    
    fire: function(guess) {
        for(let i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            let index = ship.locations.indexOf(guess);

            if (index >= 0 && ship.status ) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("TRAFIONY!");
                console.log("trafiony");
               
                //Mamy trafienie!
                if(this.isSunk(ship) ) {
                    this.shipsSunk++;
                    ship.status = false;
                    view.displayMessage("Zatopiłeś okręt!");
                }
                return true;
            }
            // Jeśli trafimy w już zatopiony statek
            else if (index >= 0 && ship.status === false) {
                view.displayMessage("Ten okręt został już zatopiony!");
                //tak aby nie zliczało nam dodatkowych prób w kontrolerze
                controller.guesses--;
                return true;
            }


        }
        view.displayMiss(guess);
        view.displayMessage("PUDŁO!");
        return false;
    },

    isSunk: function(ship) {

        // sprawdzamy wszystkie statki
       

           

            // jeśli statek nie jest zatopiony to sprawdzamy czy w którymś z tych nie jest równe hit, jeśli jest to zwracamy false co oznacza że statek nie został zatopiony
            if (ship.status) {

                for (let i=0; i < this.shipLength; i++ ) {
                    if (ship.hits[i] !== "hit") {
                        return false;
                    }
                    
        
                }
               
                
                   // zwraca true jeśli wszystkie pzycje w tabeli hits mają wartość "hit"
                   console.log('udało się')
                   return true;
               
            }
            else  {
                return false;
            }
          


            

        
        
    },

    generateShipLocations: function() {
        let locations;

        for (let i=0; i < this.numShips; i++) {
            do {
                // generujemy statki za pomocą metody generateShip tak dług dopóki collision nie będzie false;
                locations= this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },

    generateShip: function() {
        let direction = Math.floor(Math.random()*2 );

        let row, col;

            // poziomo
            if (direction === 1) {
                
                row = Math.floor(Math.random() * this.boardSize);
                // poziomo nie możemy wygenerować liczby więcej niż 4 bo potem się nie zmieści na planszy
                col = Math.floor(Math.random()* (this.boardSize - this.shipLength));

            }
            // pionowo
            else {
                // tu tak samo nie może być większa niż 4 bo jeśli będzie 5, to zajmie pole 6 i pole 7 nie zajmie bo takiego pola nie ma
                row = Math.floor(Math.random()* (this.boardSize - this.shipLength ));
                col = Math.floor(Math.random() * this.boardSize);
            }
            let newShipLocations = [];
            for(let i = 0; i< this.shipLength; i++) {
                if (direction === 1 ){
                    newShipLocations.push(row + "" + (col + i) );
                }
                else {
                    newShipLocations.push((row + i) + "" + col);
                }
            }
        
        return newShipLocations;


    },
    collision: function(locations) {
        for (let i = 0; i < this.numShips; i++ ) {
            let ship = this.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }



}

let controller = {
    guesses: 0,
    // parametr click jest tylko po to abyśmy wiedzieli czy zostało kliknięte jeśli klikneliśmy to dostaniemy argument true przez co odbędzie się tylko komunikat w konsoli zamiast pełnej transformacji
    parseGuess: function(guess, click) {
        


        let alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess === null || guess.length !==2 ) {
            alert("Prosze wpisać literę oraz cyfrę!");
        }
        // click samo w sobie ma nie konwertować więc tu jest obrona przeciw konwertowaniu
        else if ( click) {
            console.log("został naciśnięty click");
        }
        else {
            let firstChar = guess.charAt(0);
            let row = alphabet.indexOf(firstChar);
            let column = guess.charAt(1);
            // isNan sprawdza jeśli w alfabecie ta liczba nie jest zdefiniowana 
            if (isNaN(row) || isNaN(column)) {
                alert("Ups, to nie są współrzędne!");
            }
            // jeśli liczba wpisana jest mniejsza niż 0 lub większa bądź równa 7 to wyświetl komunikat!
            else if ( row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert('Ups, pole jest poza planszą!');
            }
            else {
                return row + column;
            }
            return null;
        }

    },

    processGuess: function(guess, click) {
       

        let location = this.parseGuess(guess, click);

        if(click) {
            location = guess;
        }

        // sprawdzenie czy funkcja parseGuess zwróci nam true, czyli że dane zostały prawidłowo dodane, zostaną one skonwersowane na np A1 w funckji paresGuess , i odpalona zostanie funckja fire która sprawdza czy dana liczba została zgadza się w którymś z tych przypadków, jeśli tak i statki które zatoneły zgadzają się liczbie ogólnej statków to następuję koniec gry
        if (location) {
            this.guesses++;
            
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("Zatopiłeś wszystkie moje okręty, w "+this.guesses+" próbach.");
                setTimeout("alert('Chcesz zagrać jeszcze raz?, kliknij ok')", 1000);
                setTimeout('location.reload()', 1100);
            }
        }
    },






}



// pobieramy dane z przycisku i gdy klikniemy enter odpali się wcześniej w init przycsik firebutton
function handleKeyPress(e) {
    let fireButton = document.querySelector("#fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

function handleFireButton() {
    //pobieramy dane z formularza i przekazujemy je do kontrolera
    let guessInput = document.querySelector("#guessInput");
    let guess = guessInput.value;
    controller.processGuess(guess,);

    guessInput.value = '';
}

function clicked(id) {

    let pola = document.getElementsByTagName('td');
    let kliknij = event.target.id;

    controller.processGuess(kliknij, true);

}
function touched(id) {

    let pola = document.getElementsByTagName('td');

    let kliknij = Touch.target.id;
    controller.processGuess(kliknij, true);

}



window.onload = init;

// dodajemy onclicka do opcji ognia oraz przypisujemy przypisujemy zdarzenie kliknięcia przecisku do miejsca na tekst
function init() {
    var fireButton = document.querySelector('#fireButton');
    fireButton.onclick = handleFireButton;
    let guessInput = document.querySelector("#guessInput");
    guessInput.onkeypress = handleKeyPress;

    let pola = document.getElementsByTagName('td');

    for(i=0; i< pola.length; i++) {
        let id = pola[i].getAttribute('id');        
        pola[i].addEventListener('click', clicked );
        pola[i].addEventListener('touchstart', touched);
    }



    
 
    // generowanie losowych miejsc statków
    model.generateShipLocations();
}