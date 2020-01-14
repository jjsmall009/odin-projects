/*
Name:       JJ Small
Date:       Jan/2020
Project:    Rock Paper Scissors
Link:       https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors#introduction
Info:       Game logic for rock paper scissors.
*/

// These arrays help with the state of the game
const choices = ['rock', 'paper', 'scissors'];
let results = [0,0,0] // Wins, losses, ties

/**
 * Prompts the user to input a choice
 * @returns {string} Lowercase version of their input
 */
function playerChoice() {
    let input = prompt('Enter your choice (rock, paper, scissors): ');
    return input.toLowerCase();
}

/**
 * Generates a choice for the computer
 * @returns {number} Returns the matching value from the choices array.
 */
function computerChoice() {
    // Pick a number from 0 to 2
    let r = Math.floor(Math.random() * Math.floor(3));

    return choices[r];
}

/**
 * Creates a "turn" for the game. Based on the choices passed in for the player and computer
 * it will see who wins the turn.
 * @param {string} pc - The players choice
 * @param {string} npc - The computers choice
 * @returns {void} - None
 */
function playRound(pc, npc) {
    result = '';
    switch(pc) {
        case 'rock':
            result = (npc == 'rock') ? 'tie' : ((npc == 'scissors') ? 'win' : 'lose');
            break;
        case 'paper':
            result = (npc == 'paper') ? 'tie' : ((npc == 'rock') ? 'win' : 'lose');
            break;
        case 'scissors':
            result = (npc == 'scissors') ? 'tie' : ((npc == 'paper') ? 'win' : 'lose');
            break;
    }
    
    console.log('You chose: ' + pc);
    console.log('Computer chose: ' + npc);

    // Update the results array based on who won the turn
    if(result == 'win') {
        console.log(`${pc} beats ${npc}! You win!`);
        results[0] += 1;
    } else if(result == 'lose') {
        console.log(`${pc} loses to ${npc}! Nice try!`);
        results[1] += 1;
    } else {
        console.log(`${pc} ties ${npc}!`);
        results[2] += 1;
    }                 
}

/**
 * Starts and finishes a five round game of player vs. computer
 * @returns {void} - None
 */
function game() {
    for(i = 0; i < 5; i++) {
        let pc = playerChoice();
        let npc = computerChoice();

        playRound(pc, npc);
    }

    console.log('Here are your results:');
    console.log('======================');
    console.log(`Wins: ${results[0]}\nLoses: ${results[1]}\nTies: ${results[2]}`);
}
// Run the game
game();