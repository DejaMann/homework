// console.log('Numbers!');

//================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)
// If the player's dice roll is higher than the computer dice roll,
// console.log("PLAYER WINS")
// otherwise, log ("COMPUTER WINS")
// Use a ternary to check for the winner

// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// FINALLY: return all three variables using an array
// return [value1, value2, value3]

const rollDice = () => {
  const player = Math.ceil(Math.random()*6)
  const comp = Math.ceil(Math.random()*6)
//   console.log(player);
//   console.log(comp);

  let winner = ''

  if (player > comp){
      winner = 'PLAYER WINS!!'
  
  } else if (comp > player) {
      winner = 'COMPUTER WINS!!'
      
  } else if (player === comp)
      winner = `IT'S A DRAW!`

return [player, comp, winner]
}

rollDice()




// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)

// Create a new a div displaying:
// Computer Score: , Player Score:  & the Winner:
// so there is a running record of game data.
// Append the new div to the parent div on the HTML.

const displayScore = () => {
    const results = rollDice()
    const div = document.createElement('div')//creates new div showing results
    div.innerHTML =  
    `<p>Player Score: ${results[0]}</p> 
    <p>Computer Score: ${results[1]}</p> 
    <p>Winner: ${results[2]}</p>`;//what we want to print in new div

    const winnerDiv = document.querySelector('#winner')

    winnerDiv.appendChild(div)
    console.log(div);
}
displayScore ()




// Create a Reset Function (resetGame)

const resetGameBtn = document.getElementById('reset')
const playGameBtn = document.getElementById('play-game')

// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)

const resetGame = () => {
    document.querySelector('#winner').firstElementChild.remove()
}


// ==== Final Step =====================
// Create a new function (playGame):
// Call the rollDice and the displayScore function inside this function
playGame = () => {
    rollDice()
    displayScore()
}

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
// Attach the (resetGame) function to the reset button

resetGameBtn.addEventListener('click', resetGame)
playGameBtn.addEventListener('click', displayScore) 

// ===== Now let's host this game in GITHUB PAGES and style it !!