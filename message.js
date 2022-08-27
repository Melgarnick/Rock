function computerChoice() {
  let numbers = (Math.floor(Math.random() * 3));
  let choice = '';
  if (numbers === 0) {
    choice = 'rock';
  } else if (numbers === 1) {
    choice = 'paper';
  } else if (numbers === 2) {
    choice = 'scissors';
  }
  return choice;
}

function playerChoice () {
  let ask = prompt('Rock, Paper, or Scissors?').toLowerCase();
  return ask;
}

function playRound(playerSelection = playerChoice(), computerSelection = computerChoice()) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'Player';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'Player';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'Player';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Computer';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Computer';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Computer';
  } else {
    return 'Tie';
  }
}

function game() {
  let player = 0;
  let computer = 0;
  const roundNum = 5;
  for (let i = 0; i < roundNum; i++) {
    const playerSelection = prompt('Choose Rock Paper or Scissors!');
    const computerSelection = computerChoice();
    rounds = playRound(playerSelection, computerSelection)
    if (rounds === 'Player') {
    console.log('Player wins round!');
    player++;
    console.log(`Player ${player}, Computer ${computer}`);
   } else if (rounds === 'Computer') {
    console.log('Computer wins round!');
    computer++;
    console.log(`Player ${player}, Computer ${computer}`);
   } else {
    console.log('Tie');
    console.log(`Player ${player}, Computer ${computer}`);
   }
  }
  if (player > computer) {
    console.log('Player Wins!');
  } else {
    console.log('Computer Wins!');
  }
}

game()