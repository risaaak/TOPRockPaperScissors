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

const buttons = document.querySelectorAll('button');

let player = 0;
let computer = 0;
let round = 0;

buttons.forEach((button) => {

button.addEventListener('click', function() {
    let winner = playRound(button.id,getComputerChoice());
    round++;
    if(winner == 'player')
    {
        player++;
    }
    else if (winner=='computer')
    {
        computer++;
    }
    showRunningScore(player,computer,round,winner);

    if(round == 5)
    {
        determineWinner(player,computer);
        player = 0;
        computer = 0;
    }
});
});

function showRunningScore(player,computer,round,winner)
{
    console.log(`In 5 rounds the player won: ${player} times`);
    const container = document.querySelector('.container');
    const result = document.createElement('div');
    result.textContent = `In round ${round} the winner is ${winner} the current score is 
                            player: ${player} computer: ${computer}`;
    container.appendChild(result);
    result.className = 'round';
}
function determineWinner(player,computer) {
    let winner;
    if(player>computer)
        {
            winner = 'player';
        }
        else if(player<computer)
        {
            winner = 'computer';
        }
        else
        {
            winner = 'tie';
        }
        round = 0;
        computer = 0;
        player = 0;
        showWinner(winner);
}

function showWinner(winner) {
    if(winner == 'player')
    {
        console.log(`In 5 rounds the player won: ${player} times`);
        const container = document.querySelector('.container');
        const result = document.createElement('div');
        result.textContent = 'The winner is player';
        container.appendChild(result);
    }
    else if(winner == 'computer')
    {
        console.log(`In 5 rounds the computer won: ${computer} times`);
        const container = document.querySelector('.container');
        const result = document.createElement('div');
        result.textContent = 'The winner is computer';
        container.appendChild(result);
    }
    else
    {
        console.log(`It's a tie`);
        const container = document.querySelector('.container');
        const result = document.createElement('div');
        result.textContent = `It's a tie!`;
        container.appendChild(result);
    }
}

/*
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
*/
