const timer = document.querySelector(".timer__title");
const startButton = document.querySelector(".timer__start");
const pauseButton = document.querySelector(".timer__pause");

let timerInterval;
let seconds = 0;

startButton.addEventListener('click', function(event) {
  event.preventDefault();
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
});

pauseButton.addEventListener('click', function(event) {
  event.preventDefault();
  clearInterval(timerInterval);
});

function updateTimer() {
  seconds++;
  document.querySelector('.timer__title').innerText = seconds + ' sec';
}
