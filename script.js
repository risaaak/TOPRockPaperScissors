console.log("Hello World!");

function getComputerChoice() {
    let items = ['rock' , 'paper' , 'scissor'];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

function playRound(playerSelection , computerSelection) {
    if(playerSelection == 'rock' && computerSelection == 'scissor')
        return "You win! rock beats scissor ";
    else if (playerSelection == 'paper' && computerSelection == 'rock')
        return "You win! paper beats rock";
    else if (playerSelection == 'scissor' && computerSelection == 'paper')
        return "You win! scissor beats paper";
    else if (playerSelection == 'rock' && computerSelection == 'paper')
        return "You loose! paper beats rock";
    else if (playerSelection == 'paper' && computerSelection == 'scissor')
        return "You loose! scissor beats paper"
    else if(playerSelection == 'scissor' && computerSelection == 'rock')
        return "You loose! rock beats scissor";
    else if(playerSelection == computerSelection)
        return "Its a tie!";
}

computerSelection = getComputerChoice();
playerSelection = 'rock';

