//rolls random number between 0 and 2 and returns rock/paper/scissors depending on result
function computerPlay(){
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0){
        return computerChoice = "rock";
    } else if (computerChoice === 1){
        return computerChoice = "paper";
    }
    return computerChoice = "scissors";
}

//Checks player vs computer choices and returns true/false in case of player winning/losing, or string "draw" in case of a draw

function playRound(playerSelection, computerSelection){
const results = document.querySelector("#results");
switch(true){
case ((playerSelection == "rock") && (computerSelection == "paper")):
    results.textContent = "You lose! Paper beats rock";
    results.dataset.lastState = "false";
    break;     

case ((playerSelection == "rock") && (computerSelection == "scissors")):
    results.textContent = "You win! Rock beats scissors";
    results.dataset.lastState = "true";
    break;

case ((playerSelection == "paper")&&(computerSelection=="scissors")):
    results.textContent = "You lose! Scissors beats paper";
    results.dataset.lastState = "false";
    break;

case ((playerSelection == "paper")&&(computerSelection == "rock")):
    results.textContent = "You win! Paper beats rock";
    results.dataset.lastState = "true";
    break;

case ((playerSelection == "scissors")&&(computerSelection == "rock")):
    results.textContent = "You lose! Rock beats scissors";
    results.dataset.lastState = "false";
    break;

case ((playerSelection == "scissors")&&(computerSelection == "paper")):
    results.textContent = "You win! Scissors beats paper";
    results.dataset.lastState = "true";
    break;

    default:
    results.textContent = `Draw: You both chosen ${playerSelection}`;
    results.dataset.lastState = "draw";
    break;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        playRound(button.id, computerPlay());
        game();
    })
});


let wins = 0;
let loses = 0;
let draws = 0;
const results = document.querySelector("#results")
let score = document.createElement("p");
    score.textContent = `wins: ${wins}  loses: ${loses}  draws: ${draws}`;
    results.appendChild(score);


function game(){
    const results = document.querySelector("#results");
    let lastState = results.dataset.lastState;
    console.log(lastState);
    if(lastState == "true"){
        wins++;
    } else if(lastState == "false"){
        loses++;
    } else {
        draws++;
    }
    let score = document.createElement("p");
    score.textContent = `wins: ${wins}  loses: ${loses}  draws: ${draws}`;
    results.appendChild(score);
    checkWin();
}

function checkWin(){
    if (wins == 5){
        gameMessage("Yon won!");
    } else if (loses == 5){
        gameMessage("You lost!");
    } else if (draws == 5){
        gameMessage("It's a draw!")
    }
}

function gameMessage(messageText){
    const appendto = document.querySelector("#results");
    const message = document.createElement("p");
    message.textContent = `${messageText}`;
    appendto.appendChild(message);
    wins = 0;
    loses = 0;
    draws = 0;
}