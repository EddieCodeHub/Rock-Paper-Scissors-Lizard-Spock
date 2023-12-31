// Creating variables and connecting them to html elements
let playerChoice;
let cpuChoice;
let result;
let winner;
let rulesButton = document.getElementById("rules-btn");
let closeRulesButton = document.getElementById("btn-close-rules");
let modal = document.getElementById("modal");

// Event listeners for rules modal
rulesButton.addEventListener("click", ()=> {
    modal.showModal();
}); 

closeRulesButton.addEventListener("click", ()=> {
    modal.close();
});

/**
 * Takes players choice, creates variable and displays choice 
 */
function getPlayerChoice(value) {
    playerChoice = value;
    let ChoiceDisplay = document.getElementById("player-choice");
    ChoiceDisplay.innerHTML = playerChoice;
    getCpuChoice();
}

/**
 * Randomly generates cpuChoice  
 */
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
    document.getElementById("cpu-choice").innerHTML = cpuChoice;
    decideWinner();
}

/**
 * decides winner and triggers appropriate function (code credited in READEME.md)
 */

function decideWinner() {
var outcomes = playerChoice + cpuChoice;

switch(outcomes) {

    // cases for player winning
    case "RockScissors":
    case "RockLizard":
    case "PaperRock":
    case "PaperSpock":
    case "ScissorsPaper":
    case "ScissorsLizard":
    case "SpockRock":
    case "SpockScissors":
    case "LizardPaper":
    case "LizardSpock":
        result = "player-point";

        break;
    // cases for cpu winning
    case "RockPaper":
    case "RockSpock":
    case "PaperScissors":
    case "PaperLizard":
    case "ScissorsRock":
    case "ScissorSpock":
    case "SpockPaper":
    case "SpockLizard":
    case "LizardRock":
    case "LizardScissors":
        result = "cpu-point";

        break;
    // cases for a draw 
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
    case "SpockSpock":
    case "LizardLizard":
        result = "draw";
        break;
}

if (result === "player-point") {
    playerScoreUp();
}
if (result === "cpu-point") {
    cpuScoreUp();
}
}

/** 
 * increments player score 
 */ 
function playerScoreUp() {
    let playerScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerScore;

    if (playerScore === 3) {
        winner = "player-wins";
        playerWins();
    }
}

/** 
 * increments cpu score 
 */
function cpuScoreUp() {
    let cpuScore = parseInt(document.getElementById("cpu-score").innerText);
    document.getElementById("cpu-score").innerText = ++cpuScore;

    if (cpuScore === 3) {
        winner = "cpu-wins";
        cpuWins();
    }
}

/** 
 * triggers player winning screen 
 */
function playerWins() {
    let playerWinDiv = document.createElement("div");
    playerWinDiv.id = "player-win-box";
    let html = `
    <h2>Player Wins!</h2>
    <div id="win-img-div"><i id="win-img"></div>
    <button onclick="resetPage()" id="replay-btn">Replay!</button>
    `;
    playerWinDiv.innerHTML = html;
    document.body.appendChild(playerWinDiv);
    
}

/**
 * triggers cpu winning screen 
 */
function cpuWins() {
    let cpuWinDiv = document.createElement("div");
    cpuWinDiv.id = "cpu-win-box";
    let html = `
    <h2>CPU Wins!</h2>
    <div id="lost-img-div"><i id="lost-img"></div>
    <button onclick="resetPage()" id="replay-btn">Replay!</button>
    `;
    cpuWinDiv.innerHTML = html;
    document.body.appendChild(cpuWinDiv);
}


/**
 *  resets scores to restart game 
 */
function resetPage() {
    location.reload();
}

