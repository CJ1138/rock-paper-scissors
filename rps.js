const dialogueDiv = document.getElementById("dialogue");

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {button.addEventListener('click', game)});

let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById("resultDiv");
resultDiv.textContent = "First to 5 points wins:"

const pscoreDiv = document.getElementById('playerScore');
pscoreDiv.textContent = "Your Score: " + playerScore;

const cscoreDiv = document.getElementById('computerScore');
cscoreDiv.textContent = "Computer Score: " + computerScore;

function capitalise(text){
  let outputText = text.charAt(0).toUpperCase() + text.slice(1);
  return outputText;
}

//Rndomly selects the computer choice of rock paper or scissors:

function computerPlay(){
  let result = Math.floor(Math.random() * 3);
  if (result == 0){
    return "rock"
  }
  else if (result == 1) {
      return "paper" 
    } else {
      return "scissors"
    }
  }


//Plays a round of the game   
function gameRound(computerSelection, playerSelection){    
  let gameState = playerSelection.concat(computerSelection); 
  let playerResult = "lose"
  let resultMessage = "Computer picked " + computerSelection + ". </br> You picked " + playerSelection + ". </br> " 
  + capitalise(playerSelection) + " beats " + playerSelection + ". You lost this round!";
  
  if (gameState == "rockrock" || gameState ==  "paperpaper" || gameState ==  "scissorsscissors") {
    playerResult = "draw";
    resultMessage = "You both picked " + computerSelection + ". </br> It's a draw!";
  
  } else if (gameState == "rockscissors" || gameState ==  "paperrock" || gameState ==  "scissorspaper"){
    playerResult = "win";
    resultMessage = "Computer picked " + computerSelection + ". </br> You picked " + playerSelection + ". </br> " 
    + capitalise(playerSelection) + " beats " + computerSelection + ". You won this round!";
  }
  dialogueDiv.innerHTML = resultMessage;
  return playerResult;
}

function game(e){

  if (playerScore == 5 || computerScore == 5) {
    resultDiv.textContent = "First to 5 points wins:"
    playerScore = 0;
    computerScore = 0;
  }

  roundResult = gameRound(computerPlay(), e.target.id);
  if (roundResult == "win"){
    playerScore++;
  } else if (roundResult == "lose"){
    computerScore++;
  } else {
    playerScore++;
    computerScore++
  }

  let fresultMessage;
  if (playerScore == 5) {
    resultDiv.textContent = "You Won! :) Press a button to play again."
  } else if (computerScore == 5) {
    resultDiv.textContent = "You Lost :( Press a button to play again.";
  }
  pscoreDiv.textContent = "Your Score: " + playerScore;
  cscoreDiv.textContent = "Computer Score: " + computerScore;
}

  //When someone clicks a button, play one round of the game
  //
