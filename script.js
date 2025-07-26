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
    switch (humanChoice + computerChoice) {
        case "rockrock":
            console.log("Tie!");
            break;
        case "rockpaper":
            console.log("You lose!");
            computerScore++;
            break;
        case "rockscissors":
            console.log("You win!");
            humanScore++;
            break;
        case "paperrock":
            console.log("You win!");
            humanScore++;
            break;
        case "paperpaper":
            console.log("Tie!");
            break;
        case "paperscissors":
            console.log("You lose!");
            computerScore++;
            break;
        case "scissorsrock":
            console.log("You lose!");
            computerScore++;
            break;
        case "scissorspaper":
            console.log("You win!");
            humanScore++;
            break;
        case "scissorsscissors":
            console.log("Tie!");
            break;
        default:
            console.log("Invalid input");
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