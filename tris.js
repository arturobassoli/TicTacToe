/* Turno */
let giocatore = "X";
let giocata = 1;
let fine = false;

/* Valore caselle */
let campo = [];

/* Condizioni di vittoria */
const vittoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/* Identifica le caselle */
const casella = document.querySelectorAll(".casella");

/* Identifica il div del turno */
const turnoX = document.querySelector(".turno-x");
const turnoO = document.querySelector(".turno-o");

/* Identifica la modalle di fine partita */
const modale = document.querySelector(".modale-fine-partita");
const risultato = modale.querySelector(".risultato");
const ricomincia = modale.querySelector(".ricomincia");

/* Identifica punteggio partite */
let puntiX = document.querySelector(".punti-x");
let puntiO = document.querySelector(".punti-o");
puntiX.innerHTML = 0;
puntiO.innerHTML = 0;

/* Resetta punteggio */
let resettaPunteggio = document.querySelector(".resetta-punteggio");

casella.forEach((element) => {
  element.addEventListener("click", segnaMossa);

  /* Stampa il segno e blocca il click */
  function segnaMossa() {
    element.innerHTML += giocatore;
    element.classList.add("no-click");

    campo[element.id] = giocatore;

    turno();
    if (giocata > 4) {
      controllaVincitore();
    }
    cambiaGiocatore();

    ++giocata;
  }
});

/* Cambia turno */
function cambiaGiocatore() {
  giocatore == "X" ? (giocatore = "O") : (giocatore = "X");
}

/* Stampa a chi tocca */
function turno() {
  if (giocatore == "X") {
    turnoX.classList.add("display-none");
    turnoO.classList.remove("display-none");
  }
  if (giocatore == "O") {
    turnoX.classList.remove("display-none");
    turnoO.classList.add("display-none");
  }
}

/* Controlla se qualcuno ha vinto */
function controllaVincitore() {
  let controllaVittoria;

  vittoria.forEach((condizione) => {
    controllaVittoria = condizione.every((i) => campo[i] == giocatore);

    if (controllaVittoria) {
      modale.classList.remove("display-none");
      risultato.innerHTML += "Ha vinto " + "<b>" + giocatore + "</b>";

      console.log(giocatore);

      giocatore == "X"
        ? ++puntiX.innerHTML + console.log(giocatore)
        : ++puntiO.innerHTML + console.log(giocatore);

      fine = true;
    }
  });

  if (giocata == 9 && !fine) {
    modale.classList.remove("display-none");
    risultato.innerHTML += "Pareggio";
  }
}

/* Resetta tutto al click */
ricomincia.addEventListener("click", ricominciaPartita);

function ricominciaPartita() {
  casella.forEach((element) => {
    element.innerHTML = "";
    element.classList.remove("no-click");
  });

  modale.classList.add("display-none");
  risultato.innerHTML = "";

  turnoX.classList.remove("display-none");
  turnoO.classList.add("display-none");

  giocatore = "X";
  giocata = 1;
  fine = false;
  campo = [];
}

/* Resetta punteggio */
resettaPunteggio.addEventListener("click", resettaPunteggioPartite);

function resettaPunteggioPartite() {
  puntiX.innerHTML = 0;
  puntiO.innerHTML = 0;
}
