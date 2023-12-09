function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3) + 1;
    let choice = "";
    if(randomNum == 1){
        choice = "rock";
    }else if(randomNum == 2){
        choice = "paper";
    }else if(randomNum == 3){
        choice = "scissors";
    }
    return choice;
}

function capitaliseStr(string){
    return string[0].toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        let newPlayerSelection = prompt("It's a tie! choose rock, paper, or scissors again:");
        let newComputerSelection = getComputerChoice();
        return playRound(newPlayerSelection, newComputerSelection);
    }else if((playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper")){
        console.log("You Win! " + capitaliseStr(playerSelection) + "  beats " + capitaliseStr(computerSelection));
        return 1;  
    }else{
        console.log("You Lose! " + capitaliseStr(computerSelection) + " beats " + capitaliseStr(playerSelection)); 
        return 0;
    }  
}

function game(){
    let playerSelection = ""
    playerScore = 0;
    computerScore = 0;
    for(let i = 1; i<6; i++){
        console.log(`Round ${i}`)
        playerSelection = prompt("choose rock paper or scissors");
        playRound(playerSelection,getComputerChoice()) ? playerScore++ :  computerScore++;
    }
    finalScore = ` You won ${playerScore} rounds and computer won ${computerScore} rounds.`;
    let result = (playerScore > computerScore) ? "You Win!"  + finalScore: "You Lose!" + finalScore;
    console.log(result);
}

game()
   
