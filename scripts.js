// Project rock paper scissors
const items = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let item = items[Math.floor(Math.random() * items.length)]
  return item
}

function getPlayerChoice() {
  let playerInput = prompt("Type your choice: rock, paper, or scissors?")
  let playerItem = playerInput.toLowerCase()
  return playerItem
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    // computer wins, rock beats scissors
    return 'computer wins, rock beats scissors'
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    // player wins, paper beats rock
    playerScore++
    return 'player wins, paper beats rock'
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    // computer wins, paper beats rock
    computerScore++
    return 'computer wins, paper beats rock'
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    // player wins, scissors beats paper
    playerScore++
    return 'player wins, scissors beats paper'
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    // computer wins, scissors beats paper
    computerScore++
    return 'computer wins, scissors beats paper'
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    // player wins, rock beats scissors
    playerScore++
    return 'player wins, rock beats scissors'
  } else {
    // tie
    return 'it is a tie'
  }
}

function game() {
  // this needs to include player prompt otherwise it's just useing the same values over and over
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice()
    const computerSelection = getComputerChoice()

    console.log(playRound(playerSelection, computerSelection))
    // console.log(playRound('rock', 'scissors'))
    console.log('Computer: %s', computerScore)
    console.log('Player: %s', playerScore)
  }
  declareWinner()
}

game()

function declareWinner() {
  if (computerScore === playerScore) {
    console.log('It\'s a tie game! %s to %d', computerScore, playerScore)
  } else if (computerScore > playerScore) {
    console.log('Computer wins the game! %s to %d', computerScore, playerScore)
  } else {
    console.log('Player wins the game! %s to %d', playerScore, computerScore)
  }
}

// fn playRound could probably use switch statement.

// # Remember that console.log can run a function
// console.log(playRound(playerSelection, computerSelection))

// const test = playRound(playerSelection, computerSelection)
// console.log('test', test)


// # Exercise does not mention what to do if the user inputs something other than the available items. 
// So don't need rn but something like this could be helpful?
// function confirmPlayerChoice() {
//   console.log('playerInput:', playerInput)

//   if (!items.includes(playerInput)) {
//     console.log('%s not a valid choice', playerInput)
//     return '${playerInput} not a valid choice'
//   } else {
//     let playerItem = playerInput
//     console.log('player item:', playerItem)
//     return playerItem
//   }
// }
// confirmPlayerChoice()

// Related, in playRound there's no accounting for undefined values (space) or invalid ("boop"). 
// Rn they will result in tie.