function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return null
    }
}

function getHumanChoice() {
    const choice = prompt("Choose your option (Rock, Paper, Scissors): ");
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    console.log(`You chose ${humanChoice}, the computer chose ${computerChoice}!`);
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (((humanChoice == "rock") && (computerChoice == "scissors")) ||
                ((humanChoice == "paper") && (computerChoice == "rock")) ||
                ((humanChoice == "scissors") && (computerChoice == "paper"))) {
        console.log("You win!");
        humanScore++;
    } else {
        console.log("You lose!");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
        if (i !== 4) {
            console.log(`Score is You: ${humanScore} Chomputer: ${computerScore}`);
        }
    }
    console.log(`Final Score is You: ${humanScore} Computer: ${computerScore}!`);
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("You tie!");
    }
}

playGame();