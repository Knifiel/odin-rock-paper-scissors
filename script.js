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
case ((playerSelection === "rock") && (computerSelection === "paper")):
    results.textContent = "You lose! Paper beats rock";
    return false;     

case ((playerSelection === "rock") && (computerSelection === "scissors")):
    results.textContent = "You win! Rock beats scissors";
    return true;

case ((playerSelection === "paper")&&(computerSelection==="scissors")):
    results.textContent = "You lose! Scissors beats paper";
    return false;

case ((playerSelection === "paper")&&(computerSelection === "rock")):
    results.textContent = "You win! Paper beats rock";
    return true;

case ((playerSelection === "scissors")&&(computerSelection === "rock")):
    results.textContent = "You lose! Rock beats scissors";
    return false;

case ((playerSelection === "scissors")&&(computerSelection === "paper")):
    results.textContent = "You win! Scissors beats paper";
    return true;

    default:
        results.textContent = `Draw: You both chosen ${playerSelection}`;
    return "draw";
    }
}

function game(){
    
    let wins = 0;
    let loses = 0;
    
    for (let i = 0; i<5; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("What's your choice between rock/paper/scissors?", "Rock");
        let gameResult = playRound(playerSelection, computerSelection);
        if (gameResult === "draw"){
        } else if (gameResult){
            wins++;
        } else {
            loses++;
        }
    }
  
//Check whether game result was a draw, or win of either player or computer
    if (wins === loses){
        console.log("It's a draw!");
    } else if (wins > loses){
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        playRound(button.id, computerPlay());
    })
});