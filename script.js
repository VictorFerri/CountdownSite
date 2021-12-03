import Countdown from "./countdown.js";

const tempoParaOWWB = new Countdown("10 March 2023 00:00:00 GMT-0300");
const tempos = document.querySelectorAll(".data-time");
console.log(tempoParaOWWB.total)

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);