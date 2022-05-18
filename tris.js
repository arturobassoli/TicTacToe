/* Turno */
let giocatore = "X";

/* Valore caselle */
const campo = [];

const casella = document.querySelectorAll(".casella");
casella.forEach((element) => {
  element.addEventListener("click", segnaMossa);

  function segnaMossa() {
  element.innerHTML += giocatore;
  element.className += " no-click";

  campo.push(giocatore);
  
  controllaVincitore();

  if (giocatore == "X") {
    giocatore = "O";
    return;
  }
  if (giocatore == "O") {
    giocatore = "X";
    return;
  }
}
})

function controllaVincitore () {
  if (
    campo[0] == campo[1] && campo[1] == campo[2] || 
    campo[3] == campo[4] && campo[4] == campo[5] ||
    campo[6] == campo[7] && campo[7] == campo[8] ||
    campo[0] == campo[3] && campo[3] == campo[6] ||
    campo[0] == campo[1] && campo[1] == campo[2] ||
    campo[0] == campo[1] && campo[1] == campo[2] ||
    campo[0] == campo[1] && campo[1] == campo[2] ||
    campo[0] == campo[1] && campo[1] == campo[2]) {
    
  }
}