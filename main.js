
const txtRock = "Rock crushes Scissors!"
const txtPaper = "Paper covers Rock!"
const txtScissors = "Scissors cuts Paper!"
const txtDraw = "It's a draw!"
let gameResults = document.querySelector("p.gameResults")
let userMove = document.querySelector("p.userMove")
let computerMove = document.querySelector("p.computerMove")
let wins = document.getElementById("results-table").rows[1].cells[0]
let losses = document.getElementById("results-table").rows[1].cells[1]
let draws = document.getElementById("results-table").rows[1].cells[2]

function playGame(objButton){
  let userSelection = objButton.value
  let computerSelection = computerPlay();
  userMove.textContent = 'You have selected ' + userSelection + '.'
  computerMove.textContent = 'The computer went with ' + computerSelection + '.'
  checkScoreReset();
  playRound(computerSelection, userSelection);
  checkGameOver();
};

function computerPlay() {
  let getMove = Math.random();
  if(getMove < .33){
    return 'Paper';
  }else if((getMove >= .33) && (getMove < .66)){
    return 'Rock';
  }else if (getMove >= .66){
    return 'Paper';
  }
};

function playRound(computerSelection, userSelection) {
  switch (checkRoundWinner(computerSelection, userSelection)) {
    case "Winner": wins.textContent = Number(wins.innerHTML) + 1
      break;
    case "Loser":  losses.textContent = Number(losses.innerHTML) + 1
      break;
    case "Draw":  draws.textContent = Number(draws.innerHTML) + 1
    default:
  };
};

function checkRoundWinner(computerSelection, userSelection) {

  if (userSelection == "Rock") {

    if (computerSelection == "Scissors") {
      gameResults.textContent = txtRock;
      return "Winner";
    } else if (computerSelection == "Paper") {
      gameResults.textContent = txtPaper;
      return "Loser";
    } else {
      gameResults.textContent = txtDraw;
      return "Draw";
    }

  } else if (userSelection == "Paper") {

    if (computerSelection == "Rock") {
      gameResults.textContent = txtPaper;
      return "Winner";
    } else if (computerSelection == "Scissors") {
      gameResults.textContent = txtScissors;
      return "Loser";
    } else {
      gameResults.textContent = txtDraw;
      return "Draw";
    }

  } else if (userSelection == "Scissors") {

    if (computerSelection == "Paper") {
      gameResults.textContent = txtScissors
      return "Winner";
    } else if (computerSelection == "Rock") {
      gameResults.textContent = txtRock;
      return "Loser";
    } else {
      gameResults.textContent = txtDraw;
      return "Draw";
    }
  }
};

function checkGameOver() {
  let cntWins = Number(wins.innerHTML);
  let cntLosses = Number(losses.innerHTML);
  let cntDraws = Number(draws.innerHTML);

  if (cntWins == 3){
    alert("The game is over! You won!");
    gameResults.textContent = 'Ready to play again?';
  } else if (cntLosses == 3){
    alert("The game is over! You lost!")
    gameResults.textContent = 'Ready to play again?';
  } else if (cntDraws == 2 && cntWins == 2){
      alert("The game is over! You won!");
      gameResults.textContent = 'Ready to play again?';
  } else if (cntDraws == 2 && cntLosses == 2){
      alert("The game is over! You lost!");
      gameResults.textContent = 'Ready to play again?';
  } else if (cntWins + cntLosses + cntDraws == 5) {
    if (cntWins > cntLosses) {
      alert("The game is over! You won!");
    } else if (cntWins < cntLosses){
      alert("The game is over! You lost!");
    } else {
      alert("The game ends in a draw!")
    }
    gameResults.textContent = 'Ready to play again?';
  }
};

function checkScoreReset() {
  if (gameResults.textContent == "Ready to play again?") {
    wins.textContent = 0;
    losses.textContent = 0;
    draws.textContent = 0;
  }
}
