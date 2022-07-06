//section:query selector variables go here 👇
let playGameButton = document.getElementById('playGame');
let timerInfo = document.getElementById('timer-readout')

//section:global variables go here 👇

//section:event listeners go here 👇
playGameButton.addEventListener('click', playGame);

//section:functions and event handlers go here 👇
function playGame() {
  console.log('Ready to play');
  gameTimer();
}

function gameTimer() {
  let count = 10;
  let timeInGame = setInterval(() => {
      if (count > 0) {
        console.log(count);
        count--;
        timerInfo.innerText = "Time Remaining = " + count;
      } else {
        console.log(count)
        clearInterval(timeInGame);
        console.log('Game over');
      }
    }, 1000);
}