// available choices
let choices = ['R', 'P', 'S'];

// game stats
let wins = 0;
let losses = 0;
let ties = 0;

function playGame() {
// prompts user to make a selection, then stores it in a variable
let userChoice = window.prompt("Enter R, P, or S: ");
userChoice = userChoice.toUpperCase();
window.alert(`You chose ${userChoice}`);

// assign a random choice for the computer
let index = Math.floor(Math.random() * choices.length);
let computerChoice = choices[index];
window.alert(`The computer chose ${computerChoice}`)
console.log(computerChoice);

if (userChoice == computerChoice) {
    ties++;
    window.alert(`It's a tie!`);
}
// check if player wins
else if (
    (userChoice == 'R' && computerChoice == 'S') ||
    (userChoice == 'S' && computerChoice == 'P') ||
    (userChoice == 'P' && computerChoice == 'R')
) {
    wins++;
    window.alert("you win!");
}
// else player lost
else {
    losses++;
    window.alert("You lose!");
}


// print stats to the screen
window.alert(`Stats:
Wins: ${wins}
Losses: ${losses}
Ties: ${ties}
`);
}

playGame();

// ask to play again
let replayChoice = window.prompt("Play again? Enter Y or N");
replayChoice = replayChoice.toUpperCase();

if (replayChoice == 'Y') {
    playGame();
} else {
    window.alert(`Results:
    Wins: ${wins}
    Losses: ${losses}
    Ties: ${ties}
`);
}



