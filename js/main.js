//variables
let userScore = 0;
let enemyScore = 0;
let isPlaying = false

const userScoreDisplay = document.getElementById("playerScore");
const enemyScoreDisplay = document.getElementById("botScore");
const displayPick = document.getElementById("choose");
const displayOutcome = document.getElementById("result");
const displayEnd = document.getElementById("endResult");

const playerRock = document.getElementById("rock1");
const playerPaper = document.getElementById("paper1");
const playerScissors = document.getElementById("scissors1");

const enemyRock = document.getElementById("rock2");
const enemyPaper = document.getElementById("paper2");
const enemyScissors = document.getElementById("scissors2");

//functions
function chooseRandom() {
    let randomNum = Math.floor(1 +(Math.random() * 3));
    console.log(randomNum);
    if (randomNum === 3) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* function userChoose() {
    userChoice = prompt("Rock, Paper, Scissors");
    return userChoice;
} */

function fight(choice1, choice2) {
    choice1 = choice1.toLowerCase();
    choice2 = choice2.toLowerCase();

    enemyRock.style.visibility = "hidden";
    enemyPaper.style.visibility = "hidden";
    enemyScissors.style.visibility = "hidden";

    playerRock.style.visibility = "hidden";
    playerPaper.style.visibility = "hidden";
    playerScissors.style.visibility = "hidden";

    if (choice1 === "rock") {
        playerRock.style.visibility = "visible";
        if (choice2 === "paper") {
            enemyPaper.style.visibility = "visible";
            return "You lost!";
        } else if (choice2 === "scissors") {
            enemyScissors.style.visibility = "visible";
            return "You won!";
        } else if (choice2 === "rock") {
            enemyRock.style.visibility = "visible";
            return "It's a tie!";
        } else {
            console.warn("Second choice invalid");
        }
    } else if (choice1 === "paper") {
        playerPaper.style.visibility = "visible";
        if (choice2 === "paper") {
            enemyPaper.style.visibility = "visible";
            return "It's a tie!";
        } else if (choice2 === "scissors") {
            enemyScissors.style.visibility = "visible";
            return "You lost!";
        } else if (choice2 === "rock") {
            enemyRock.style.visibility = "visible";
            return "You won!";
        } else {
            console.warn("Second choice invalid");
        }
    } else if (choice1 === "scissors") {
        playerScissors.style.visibility = "visible";
        if (choice2 === "paper") {
            enemyPaper.style.visibility = "visible";
            return "You won!";
        } else if (choice2 === "scissors") {
            enemyScissors.style.visibility = "visible";
            return "It's a tie!";
        } else if (choice2 === "rock") {
            enemyRock.style.visibility = "visible";
            return "You lost!";
        } else {
            console.warn("Second choice invalid");
        }
    } else {
        console.warn("First choice invalid");
    }
}

function playGame(weapon) {
    if (isPlaying === false) {
        isPlaying = true;
        let player1 = weapon;
        let player2 = chooseRandom();

        document.getElementById("handDisplay").classList.add("up");
        displayPick.style.animation = "fadeout .3s forwards";
        displayOutcome.style.animation = "fadeout .3s forwards";

        setTimeout(clear, 600);

        function clear() {
            document.getElementById("handDisplay").classList.remove("up");

            let result = fight(player1, player2);

            displayPick.innerHTML = `You chose: ${player1}. Player 2 chose: ${player2}.`;
            displayOutcome.innerHTML = result;

            if (result === "You lost!") {
                enemyScore = enemyScore + 1;
            } else if (result === "You won!") {
                userScore = userScore + 1;
            }

            userScoreDisplay.innerHTML = `Your score: ${userScore}`;
            enemyScoreDisplay.innerHTML = `Opponent score: ${enemyScore}`;

            if (userScore === 5) {
                displayEnd.innerHTML = "Congratulations! You won!";
                document.body.classList.add("displayEndScreen");
            } else if (enemyScore === 5) {
                displayEnd.innerHTML = "Oh no... You lost...";
                document.body.classList.add("displayEndScreen");
            }
            displayPick.style.animation = "fadein .3s";
            displayOutcome.style.animation = "fadein .3s";

            isPlaying = false;
            return enemyScore, userScore, isPlaying;
        }//clear function
    }//if isPlaying
}

function restartGame() {
    document.body.classList.remove("displayEndScreen");

    userScore = 0;
    enemyScore = 0;
    userScoreDisplay.innerHTML = `Your score: ${userScore}`;
    enemyScoreDisplay.innerHTML = `Opponent score: ${enemyScore}`;

    enemyRock.style.visibility = "visible";
    enemyPaper.style.visibility = "hidden";
    enemyScissors.style.visibility = "hidden";

    playerRock.style.visibility = "visible";
    playerPaper.style.visibility = "hidden";
    playerScissors.style.visibility = "hidden";

    displayOutcome.innerHTML = "Pick Your Weapon";
    displayPick.innerHTML = "";

    return enemyScore, userScore;
}