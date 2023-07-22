//import math from "../math";

console.log("Hello World");

// function getComputerCoice randomly return either of the 3 strings
function getComputerChoice(){
    const Choices = ['rock','paper','scissors']
    return Choices[Math.floor(Math.random() * Choices.length)];
}

const computerChoice = getComputerChoice();
//console.log(computerChoice)

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection)
        {
            return("No winner! Play again");   
        }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection ==="paper" && computerSelection ==="rock") || (playerSelection === "scissors" && computerSelection === "paper"))

    {return("You won!");}

    else {return("computer wins");}
    
 
}

const input = prompt("input your choice!");
const playerSelection = input.toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

