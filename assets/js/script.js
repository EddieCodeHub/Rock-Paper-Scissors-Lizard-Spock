
// Creating variables and connecting them to html elements


const winnerDisplay = document.getElementsByClassName("winner-display");

var playerChoice;
var cpuChoice;
var result;

// Takes players choice, creates variable and displays choice
function getPlayerChoice(value) {

    playerChoice = value;
    alert("you clicked button " + playerChoice);
    let choiceDisplay = document.getElementById("player-choice");
    choiceDisplay.textContent = playerChoice;
    getCpuChoice();
}

// Randomly generates cpuChoice
function getCpuChoice() {
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (randomNumber === 1) {
        cpuChoice = "Rock";
    }
    if (randomNumber === 2) {
        cpuChoice = "Paper";
    }
    if (randomNumber === 3) {
        cpuChoice = "Scissors";
    }
    if (randomNumber === 4) {
        cpuChoice = "Lizard";
    }
    if (randomNumber === 5) {
        cpuChoice = "Spock";
    }
    
    document.getElementById("cpu-choice").innerHTML = cpuChoice
    decideWinner();
}


function decideWinner() {

}


function displayWinner() {

}


function playerScoreUp() {

}


function cpuScoreUp() {

}