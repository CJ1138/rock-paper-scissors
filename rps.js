//Create a function that randomly selects the computer choice of rock paper or scissors:

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
  
  //Declare a function called gameRound that takes 2 parameters: playerSelection and computerSelection
  
  function gameRound(computerSelection){
  
    let playerSelection = prompt("Type Rock, Paper or Scissors!");
  
  //make playerSelection lower case
  
    playerSelection = playerSelection.toLowerCase();
  
  //concatenate playerSelection and computerSelection into a new variable called gameState
  
    let gameState = playerSelection.concat(computerSelection);
  
  //declare 2 variables called playerResult and resultMessage
  
    let playerResult = "lose"
    let resultMessage = "Computer picked " + computerSelection + " which beats " + playerSelection + ". You lost!"
  
  //say that if gameState equals rockrock etc, playerResult = draw and message = a draw message 
  
    if (gameState == "rockrock" || gameState ==  "paperpaper" || gameState ==  "scissorsscissors") {
      playerResult = "draw";
      resultMessage = "Computer picked " + computerSelection + " too. It's a draw!";
  
  //say that if gameState equals rockscissors etc, playerResult = win and message = a win message 
  
    } else if (gameState == "rockscissors" || gameState ==  "paperrock" || gameState ==  "scissorspaper"){
      playerResult = "win";
      resultMessage = "Computer picked " + computerSelection + ". Because " + playerSelection + " beats " + computerSelection + ", you won!";
    }
//Return message

    console.log(resultMessage);
    return playerResult;
  
  }
  
//Declare a function called game

  function game(){

//Declare 2 variables called playerScore and computerScore and set both to zero

      let playerScore = 0;
      let computerScore = 0;
      let roundResult;
//Cycle through 5 loops of the below function, incrementing the relevant score each time

      for (i = 0; i <= 4; i++){

//Assign the value returned by gameRound to the varible roundResult
        roundResult = gameRound(computerPlay());

//If the player won increment the player's score etc
        if (roundResult == "win"){
            playerScore++;
        } else if (roundResult == "lose"){
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
      }
//Report the scores and the outcome
      console.log("Your Score: " + playerScore);
      console.log("Computer's Score: " + computerScore);
      if (playerScore > computerScore){
          console.log("You won the game!")
      } else if (playerScore < computerScore){
          console.log("You lost the game :(")
      } else {
          console.log("It's a draw.")
      }
  }
//Start the game
game();