console.log("Hello World!");

function getComputerChoice() {
    let items = ['rock' , 'paper' , 'scissor'];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

