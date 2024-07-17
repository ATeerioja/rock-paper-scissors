
function getComputerChoice() {
  //Get a number between 0 and 1
  let randomNum = Math.random();

  //The odds are divided into thirds and checked
  if(randomNum < 0.33) {
    return("rock");
  } else if(randomNum < 0.66) {
    return("scissors");
  }

  //Function always returns paper if nothing else gets returned
  return("paper");

}

function playGame() {
  
  let humanScore = 0
  let computerScore = 0
  const computerSelection = getComputerChoice();

  const rock = document.querySelector("#rock");
  rock.addEventListener("click", () => playRound("rock", computerSelection));

  const paper = document.querySelector("#paper");
  paper.addEventListener("click", () => playRound("paper", computerSelection));

  const scissors = document.querySelector("#scissors");
  scissors.addEventListener("click", () => playRound("scissors", computerSelection));
  

  function playRound(humanChoice, computerChoice) {
    //First check is for draws
    if(humanChoice === computerChoice) {
      console.log(`Draw ${humanChoice} is the same as ${computerChoice}`);
  
    } else if(humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"){
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore ++;
  
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore ++;
  
    }
  }

  if(humanScore > computerScore) {
    console.log("You Win the Game !!");
  } else {
    console.log("You Lose the Game !!");
  }

}

playGame();

