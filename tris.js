/* Turno */
let giocatore = "X";
let giocata = 1;

/* Valore caselle */
const campo = [];

/* Identifica le caselle */
const casella = document.querySelectorAll(".casella");

/* Identifica il div del turno */
const turnoX = document.querySelector(".turno-x");
const turnoO = document.querySelector(".turno-o");

/* Identifica la modalle di fine partita */
const modale = document.querySelector(".modale-fine-partita"); 
const risultato = document.querySelector(".risultato");

casella.forEach((element) => {
  element.addEventListener("click", segnaMossa);

  /* Stampa il segno e blocca il click */
  function segnaMossa() {
    element.innerHTML += giocatore;
    element.className += " no-click";

    campo[element.id] = giocatore;

    turno();
    controllaVincitore();
    cambiaGiocatore();

    ++giocata;
  }
});

/* Cambia turno */
function cambiaGiocatore() {
  if (giocatore == "X") {
    giocatore = "O";
    return;
  }
  if (giocatore == "O") {
    giocatore = "X";
    return;
  }
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
  if (
    (campo[0] == campo[1] && campo[0] == campo[2] && campo[0] == giocatore) ||
    (campo[3] == campo[4] && campo[3] == campo[5] && campo[3] == giocatore) ||
    (campo[6] == campo[7] && campo[6] == campo[8] && campo[6] == giocatore) ||
    (campo[0] == campo[3] && campo[0] == campo[6] && campo[0] == giocatore) ||
    (campo[1] == campo[4] && campo[1] == campo[7] && campo[1] == giocatore) ||
    (campo[2] == campo[5] && campo[2] == campo[8] && campo[2] == giocatore) ||
    (campo[0] == campo[4] && campo[0] == campo[8] && campo[0] == giocatore) ||
    (campo[2] == campo[4] && campo[2] == campo[6] && campo[2] == giocatore)
  ) {
    modale.classList.remove("display-none");
    risultato.innerHTML += "Ha vinto " + "<b>" + giocatore + "</b>";
  } else if (giocata == 9) {
    modale.classList.remove("display-none");
    risultato.innerHTML += "Pareggio";
  }
}