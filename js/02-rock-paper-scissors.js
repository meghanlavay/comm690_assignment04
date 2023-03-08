function getUserChoice () {
    let userChoice = (prompt('Choose rock, paper, or scissors')).toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
      return userChoice;
    } else {
      console.log('Enter a valid choice');
    }
  };

function getCompChoice () {
    let compChoice = Math.floor(Math.random()*3) +1;
    if (compChoice === 1) {
        compChoice === 'rock'; 
    } else if (compChoice === 2) {
        compChoice === 'paper';
    } else {
        compChoice === 'scissors'
    }
    return compChoice;
};

function getWinner () {
    if (userChoice === 'rock' && compChoice === 'paper') {
        winner = 'computer';
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        winner = 'computer';
    } else if (userChoice === 'paper' && compChoice === 'scissors') {
        winner = 'computer';
    } else if (userChoice === compChoice) {
        winner === 'tie';
    } else {
    winner === 'user';
    }
    console.log(`You selected $userChoice.`);
    console.log(`The computer selected $compChoice.`)
    alert(`The winner is $winner`)
};