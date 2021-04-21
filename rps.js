const dialogueDiv = document.getElementById("dialogue");

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {button.addEventListener('click', game)});

let playerScore = 0;
let computerScore = 0;

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
  let resultMessage = "Computer picked " + computerSelection + " which beats " + playerSelection + ". You lost!"
  
  if (gameState == "rockrock" || gameState ==  "paperpaper" || gameState ==  "scissorsscissors") {
    playerResult = "draw";
    resultMessage = "Computer picked " + computerSelection + " too. It's a draw!";
  
  } else if (gameState == "rockscissors" || gameState ==  "paperrock" || gameState ==  "scissorspaper"){
    playerResult = "win";
    resultMessage = "Computer picked " + computerSelection + ". Because " + playerSelection + " beats " + computerSelection + ", you won!";
  }
  dialogueDiv.textContent = resultMessage;
  return playerResult;
}

function reportResult(){
  console.log("Some cunt won.");
  playerScore = 0;
  computerScore = 0;
}

function game(e){

  let playerSelection = e.target.id;
  roundResult = gameRound(computerPlay(), playerSelection);
  if (roundResult == "win"){
    playerScore++;
  } else if (roundResult == "lose"){
    computerScore++;
  } else {
    playerScore++;
    computerScore++
  }

  if (playerScore == 5 || computerScore == 5){
    console.log("Look, some cunt won:");
  }
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + computerScore);
}

  //When someone clicks a button, play one round of the game
  //
