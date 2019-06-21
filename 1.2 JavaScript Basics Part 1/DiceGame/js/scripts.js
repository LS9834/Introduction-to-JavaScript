// Define the player's name:
var playerName = 'Sammy'

// Calculate the player's game results:
var randomNumber = (Math.random() * 9) + 1;
var diceRoll = Math.round(randomNumber);
var result = 'Your result is' + diceRoll +'!'
// Output results:
console.log(typeof result)
console.log(typeof randomNumber)
document.write("mine is:"+diceRoll);

