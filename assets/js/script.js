//section:query selector variables go here 👇
let playGameButton = document.getElementById('playGame');

//section:global variables go here 👇

//section:event listeners go here 👇
playGameButton.addEventListener('click', playGame);

//section:functions and event handlers go here 👇
function playGame() {
  console.log('Ready to play');
}