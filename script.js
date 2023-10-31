import Countdown from "./countdown.js";

const tempos = document.querySelectorAll(".data-time");

const date = new Date(localStorage.getItem('selected_date'));

const day = date.getDate();
const month = date.toLocaleString('en-US', { month: 'long' });
const year = date.getFullYear();

const tempoParaOWWB = new Countdown(`${day} ${month} ${year} 00:00:00 GMT-0300`);

function showTime() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaOWWB.total[index];
  });
}

showTime();
setInterval(showTime, 1000);
