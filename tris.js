/* Turno */
let giocatore = "X";

/* Valore caselle */
const campo = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const casella = document.querySelectorAll(".casella");
casella.forEach((element) => {
  element.addEventListener("click", segnaMossa);

  function segnaMossa() {
    element.innerHTML += giocatore;
    element.className += " no-click";

    campo[element.id] = giocatore;

    turno();
    controllaVincitore();
    cambiaGiocatore();
  }
});

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

const turnoX = document.querySelector(".turno-x");
const turnoO = document.querySelector(".turno-o");

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

const risultato = document.querySelector(".risultato");

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
    risultato.innerHTML += "ha vinto " + giocatore;
  }
}
