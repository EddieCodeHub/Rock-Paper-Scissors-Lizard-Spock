// Wait for the DOM to finish loading before running the game
//  Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
})

// Creating variables and connecting them to html elements

const playerArea = document.getElementsByClassName("player-area");
const cpuArea = document.getElementsByClassName("cpu-area");
const winnerDisplay = document.getElementsByClassName("winner-display");

var playerChoice;
var cpuChoice;
var result;

// Takes players choice and creates variable
function getPlayerChoice() {

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
    
}


function decideWinner() {

}


function displayWinner() {

}


function playerScoreUp() {

}


function cpuScoreUp() {

}