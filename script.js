function getComputerChoice() {
    let items = ['rock' , 'paper' , 'scissor'];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

function playRound(playerSelection , computerSelection) {
    if(playerSelection == 'rock' && computerSelection == 'scissor')
        return 'player';
    else if (playerSelection == 'paper' && computerSelection == 'rock')
        return "player";
    else if (playerSelection == 'scissor' && computerSelection == 'paper')
        return "player";
    else if (playerSelection == 'rock' && computerSelection == 'paper')
        return "computer";
    else if (playerSelection == 'paper' && computerSelection == 'scissor')
        return "computer"
    else if(playerSelection == 'scissor' && computerSelection == 'rock')
        return "computer";
    else if(playerSelection == computerSelection)
        return "tie";
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(i=0 ; i<5 ; i++)
    {
        playerSelection = prompt("enter your choice");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        let winner = playRound(playerSelection , computerSelection);
        let round = i+1;
        console.log("Round: " + round)
        if(winner == 'player')
        {
            //alert("Player wins");
            console.log("Player wins")
            playerScore++;
        }
        else if(winner == 'computer')
        {
            console.log("Computer wins");
            computerScore++;
        }
        else{
            console.log("tie");
        }
    }
    if(playerScore > computerScore)
        return 'Player wins ' + playerScore +' to '+ computerScore;
    else   
            return "Computer wins " + computerScore + " to " + playerScore;
    
}
