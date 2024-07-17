let humanScore = 0
let computerScore = 0

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

  
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");
  const sBanner = document.querySelector(".score-banner")
  const box = document.querySelector(".event-banner");
  const score = document.createElement("p");
  scoreChange();

  rock.addEventListener("click", () => playRound("rock"));
  paper.addEventListener("click", () => playRound("paper"));
  scissors.addEventListener("click", () => playRound("scissors"));
  
  function playRound(humanChoice) {
    if(humanScore >= 5 || computerScore >= 5) {
      resetGame()
      playGame()
    }

    const computerChoice = getComputerChoice();

    //First check is for draws
    if(humanChoice === computerChoice) {
      displayEvent(`Draw ${humanChoice} is the same as ${computerChoice}`);
  
    //Second check is for the player to win
    } else if(humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"){
      displayEvent(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore ++;
  
    //if the player didn't win, it has to lose
    } else {
      displayEvent(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore ++;
  
    }

    scoreChange();
    checkGameState();

  }

  function displayEvent(text) {

    const result = document.createElement("p");
    result.textContent = text;

    box.appendChild(result);
  }

  function scoreChange() {
    if(sBanner.childElementCount > 0) {
      sBanner.removeChild(score);
    } 
    
    score.textContent = `player ${humanScore} - ${computerScore} computer`;
    sBanner.appendChild(score);

  }

  function checkGameState() {
    if(humanScore >= 5) {
      displayEvent("Game Over Player Wins !!");
    } else if (computerScore >= 5) {
      displayEvent("Game Over Computer Wins !!"); 
    }
  }

  function resetGame() {
    computerScore = 0;
    humanScore = 0;
    scoreChange();

    for(element of box.querySelectorAll("p")) {
      box.removeChild(element);
    }

  }

}

playGame();

