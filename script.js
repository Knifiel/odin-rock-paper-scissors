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
playerSelection = playerSelection.toLowerCase();
switch(true){
case ((playerSelection === "rock") && (computerSelection === "paper")):
    console.log("You lose! Paper beats rock!");
    return false;     

case ((playerSelection === "rock") && (computerSelection === "scissors")):
    console.log("You win! Rock beats scissors");
    return true;

case ((playerSelection === "paper")&&(computerSelection==="scissors")):
    console.log("You lose! Scissors beats paper");
    return false;

case ((playerSelection === "paper")&&(computerSelection === "rock")):
    console.log("You win! Paper beats rock");
    return true;

case ((playerSelection === "scissors")&&(computerSelection === "rock")):
    console.log("You lose! Rock beats scissors");
    return false;

case ((playerSelection === "scissors")&&(computerSelection === "paper")):
    console.log("You win! Scissors beats paper");
    return true;

    default:
    console.log(`Draw: You both chosen ${playerSelection}`);
    return "draw";
    }
}

//Prompt player to enter a choice between rock/paper/scissors with default choice being rock
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
        console.log("It's a draw!")
    } else if (wins > loses){
        console.log("Player wins!")
    } else {
        console.log("Computer wins!")
    }
}