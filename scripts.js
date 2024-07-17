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
  
  const computerSelection = getComputerChoice();
  const rock = document.querySelector("#rock");
  rock.addEventListener("click", () => playRound("rock", computerSelection));
  
  const paper = document.querySelector("#paper");
  paper.addEventListener("click", () => playRound("paper", computerSelection));
  
  const scissors = document.querySelector("#scissors");
  scissors.addEventListener("click", () => playRound("scissors", computerSelection));

  const score = document.createElement("p");
  const sBanner = document.querySelector(".score-banner")
  score.textContent = `player ${humanScore} - ${computerScore} computer`;
  sBanner.appendChild(score);
  
  function playRound(humanChoice, computerChoice) {
    //First check is for draws
    if(humanChoice === computerChoice) {
      displayEvent(`Draw ${humanChoice} is the same as ${computerChoice}`);
  
    //Second check is for the player to win
    } else if(humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper"){
      displayEvent(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore ++;
      scoreChange();
  
    //if the player didn't win, it has to lose
    } else {
      displayEvent(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore ++;
      scoreChange();
  
    }
  }

  function displayEvent(text) {
    const box = document.querySelector(".event-banner");
    const result = document.createElement("p");
    result.textContent = text;

    box.appendChild(result);
  }

  function scoreChange() {
    sBanner.removeChild(score);
    score.textContent = `player ${humanScore} - ${computerScore} computer`;
    sBanner.appendChild(score);

  }

}

playGame();

