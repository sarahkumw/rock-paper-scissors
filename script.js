let playerScore = 0;
let computerScore = 0;

function displayScore() {
  const div = document.getElementById("score");
  div.textContent = `You: ${playerScore} Computer: ${computerScore}`
};

function computerPlay(){
  const plays = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(plays.length * Math.random());
  return plays[randomIndex];
};

function playRound(playerSelection){
  if(playerScore === 5 || computerScore === 5) {return}
  const computerSelection = computerPlay(); 
  const roundResult = document.getElementById("round");
  if(playerSelection === computerSelection){
    roundResult.innerHTML = 
      `<p>You played ${playerSelection} and computer played ${computerSelection}</p>
      <p>This round is a tie.  Try again!</p>`
  }
  else {
    if(playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock") {
      playerScore ++
      displayScore();
      roundResult.innerHTML = 
      `<p>You played ${playerSelection} and computer played ${computerSelection}</p>
      <p>You win! ${playerSelection} beats ${computerSelection}.</p>`
      if(playerScore === 5){
        endGame();
      }
    }
    else {
      computerScore ++;
      displayScore();
      roundResult.innerHTML =
      `<p>You played ${playerSelection} and computer played ${computerSelection}</p>
      <p>You lose! ${computerSelection} beats ${playerSelection}.</p>`;
      if(computerScore === 5){
        endGame();
      }
    }
  }
};

function endGame(){
  if(playerScore === computerScore){
    document.getElementById("result").innerHTML = (
      `<p>Score is ${playerScore} to ${computerScore}.  
      It's a draw! Better luck next time.</p>
      <button onClick="playAgain()">Play again?</button>`
    )
  }
  else if(playerScore > computerScore){
    document.getElementById("result").innerHTML = (
      `<p>Score is ${playerScore} to ${computerScore}.  
      You win!</p>
      <button onClick="playAgain()">Play again?</button>`
    )
  }
  else {
    document.getElementById("result").innerHTML = (
      `<p>Score is ${playerScore} to ${computerScore}.  
      You lose, better luck next time!</p>
      <button onClick="playAgain()">Play again?</button>`
    )
  }
};

function playAgain() {
  playerScore = 0;
  computerScore = 0;
  displayScore();
  document.getElementById("result").innerHTML = ("<p> </p>");
  document.getElementById("round").innerHTML = ("<p> </p>");
};

displayScore()