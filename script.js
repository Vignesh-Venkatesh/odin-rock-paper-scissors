// // Conosle Version

// let items = ['rock', 'paper', 'scissor']
// let player_score = 0
// let comp_score = 0

// function getComputerChoice(){
//     value = Math.floor(Math.random()*(items.length))
//     return items[value]
// }

// function round(playerSelection, computerSelection){
//     if (playerSelection == "rock" && computerSelection == "paper"){
//         comp_score+=1
//         return "You Lose! Paper beats Rock"
//     }

//     else if (playerSelection == "rock" && computerSelection == "scissor"){
//         player_score+=1
//         return "You Win! Rock beats Scissor"
//     }

//     else if (playerSelection == "rock" && computerSelection == "rock"){
//         return "That's a tie!"
//     }

//     else if (playerSelection == "paper" && computerSelection == "rock"){
//         player_score+=1
//         return "You Win! Paper beats Rock"
//     }

//     else if (playerSelection == "paper" && computerSelection == "scissor"){
//         comp_score+=1
//         return "You Lose! Scissor beats Paper"
//     }

//     else if (playerSelection == "paper" && computerSelection == "paper"){
//         return "That's a tie!"
//     }

//     else if (playerSelection == "scissor" && computerSelection == "rock"){
//         comp_score+=1
//         return "You Lose! Rock beats Scissor"
//     }

//     else if (playerSelection == "scissor" && computerSelection == "paper"){
//         player_score+=1
//         return "You Win! Scissor beats Paper"
//     }

//     else if (playerSelection == "scissor" && computerSelection == "scissor"){
//         return "That's a tie!"
//     }
// }

// function getPrompt(){
//     value = prompt("Enter Rock/Paper/Scissors")
//     return value.toLowerCase()
// }

// function game(){
//     let playerSelection = getPrompt()
//     let computerSelection = getComputerChoice();

//     verdict = round(playerSelection, computerSelection)

//     console.log("+=============================================+")
//     console.log("Player Selection: ", playerSelection)
//     console.log("Computer Selection: ", computerSelection)
//     console.log("===============================================")
//     console.log("Verdict: ", verdict)
//     console.log("===============================================")
//     console.log("Player Score: ", player_score)
//     console.log("Computer Score: ", comp_score)
//     console.log("+=============================================+")
//     console.log("\n")

// }

// for (let i=0; i<=5; i++){
//     game()
// }

// if (comp_score>player_score){
//     console.log("You Lose! :(")
// }
// else if (player_score>comp_score){
//     console.log("You Win! :D")
// }
// else{
//     console.log("That's a tie...")
// }


// Webpage version

let items = ['Rock', 'Paper', 'Scissor']
let player_score = 0
let comp_score = 0
let round = 0

// div elements
let gameDiv = document.querySelector(".game")
let resultsDiv = document.querySelector(".results")
resultsDiv.style.display = "none"

// The icons
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")

// Restart Button
let restart = document.querySelector(".restart")

// Player Input / Computer Input
let playerChose = document.querySelector(".player-chose")
let computerChose = document.querySelector(".computer-chose")

// Player Score / Computer Score
let playerScore = document.querySelector(".player-score")
let compScore = document.querySelector(".computer-score")
playerScore.innerHTML = player_score
compScore.innerHTML = comp_score

// Player Score / Computer Score (in the results page)
let playerScore2 = document.querySelector(".player")
let compScore2 = document.querySelector(".computer")

// Number of rounds completed
let roundHTML = document.querySelector(".round-s")
roundHTML.innerHTML = round

// Which object beats which object
let response = document.querySelector(".response")

// Results
let resultsH2 = document.querySelector(".verdict")

// Top Text
let h1 = document.querySelector(".game h1")

// Rock Button function on click
function rockClickHandler() {
    playerChose.innerHTML = 'Rock'
    game("Rock")
}
// Paper Button function on click
function paperClickHandler() {
    playerChose.innerHTML = 'Paper'
    game("Paper")
}
// Scissor Button function on click
function scissorClickHandler() {
    playerChose.innerHTML = 'Scissor'
    game("Scissor")
}

enableButtons()

// Disabling the event listeners
function disableButtons() {
    rock.removeEventListener('click', rockClickHandler)
    paper.removeEventListener('click', paperClickHandler)
    scissor.removeEventListener('click', scissorClickHandler)
}

// Adding the event listeners
function enableButtons() {
    rock.addEventListener('click', rockClickHandler)
    paper.addEventListener('click', paperClickHandler)
    scissor.addEventListener('click', scissorClickHandler)
}

// Computer Choice
function getComputerChoice(){
    value = Math.floor(Math.random()*(items.length))
    computerChose.innerHTML = items[value]
    return items[value]
}

// Checking if 5 rounds are completed
function validateRound(){
    
    if (round == 5){
        h1.innerHTML = "Game Over"
        disableButtons()
        setTimeout(results, 2000)
    }
}

// Showing the results page
function results(){
    
    gameDiv.style.display = "none"
    resultsDiv.style.display = "block"
    playerScore2.innerHTML = player_score
    compScore2.innerHTML = comp_score

    if (player_score>comp_score){
        resultsH2.style.color = "#2eb845"
        resultsH2.innerHTML = "You Win! 😄"
    }

    else if (comp_score>player_score){
        resultsH2.style.color = "#f23548"
        resultsH2.innerHTML = "You Lost! ☹️"
    }

    // // If in case we have even rounds
    // else if (comp_score === player_score){
    //     resultsH2.style.color = "#ffc300"
    //     resultsH2.innerHTML = "It's a tie.. 😐"
    // }

    restart.addEventListener('click', ()=>{
        enableButtons()
        h1.innerHTML = "Choose Input"
        gameDiv.style.display = "block"
        resultsDiv.style.display = "none"

        round = 0
        player_score = 0
        comp_score = 0

        playerScore.innerHTML = player_score
        compScore.innerHTML = comp_score
        roundHTML.innerHTML = round
    })
}

// Game
function game(playerSelection){
    computerSelection = getComputerChoice()

    if (playerSelection == "Rock" && computerSelection == "Paper"){
        comp_score+=1
        round+=1

        playerScore.innerHTML = player_score
        compScore.innerHTML = comp_score

        roundHTML.innerHTML = round
        
        response.innerHTML = "You Lose! Paper beats Rock"

        validateRound()
    }

    else if (playerSelection == "Rock" && computerSelection == "Scissor"){
        player_score+=1
        round+=1

        playerScore.innerHTML = player_score
        compScore.innerHTML = comp_score

        roundHTML.innerHTML = round
        
        response.innerHTML = "You Win! Rock beats Scissor"
        
        validateRound()
    }

    else if (playerSelection == "Rock" && computerSelection == "Rock"){
        response.innerHTML = "That's a tie! Restarting Round"

        validateRound()
    }

    else if (playerSelection == "Paper" && computerSelection == "Rock"){
        player_score+=1
        round+=1

        playerScore.innerHTML = player_score
        compScore.innerHTML = comp_score

        roundHTML.innerHTML = round
        
        response.innerHTML = "You Win! Paper beats Rock"

        validateRound()
    }

    else if (playerSelection == "Paper" && computerSelection == "Scissor"){
        comp_score+=1
        round+=1

        playerScore.innerHTML = player_score
        compScore.innerHTML = comp_score

        roundHTML.innerHTML = round
        
        response.innerHTML = "You Lose! Scissor beats Paper"

        validateRound()
    }

    else if (playerSelection == "Paper" && computerSelection == "Paper"){
        response.innerHTML = "That's a tie! Restarting Round"

        validateRound()
    }

    else if (playerSelection == "Scissor" && computerSelection == "Rock"){
        comp_score+=1
        round+=1

        playerScore.innerHTML = player_score
        compScore.innerHTML = comp_score

        roundHTML.innerHTML = round
        
        response.innerHTML = "You Lose! Rock beats Scissor"

        validateRound()
    }

    else if (playerSelection == "Scissor" && computerSelection == "Paper"){
        player_score+=1
        round+=1

        playerScore.innerHTML = player_score
        compScore.innerHTML = comp_score

        roundHTML.innerHTML = round
        
        response.innerHTML = "You Win! Scissor beats Paper"

        validateRound()
    }

    else if (playerSelection == "Scissor" && computerSelection == "Scissor"){
        response.innerHTML = "That's a tie! Restarting Round"

        validateRound()
    }
}

