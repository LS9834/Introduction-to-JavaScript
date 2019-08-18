// Generate the pc random number
var pcRandomNumber = Math.random() * 9 + 1;
var pcDiceRoll = Math.round(pcRandomNumber);
var pcResult = "The computer's result is: " + pcDiceRoll + "!";
// Output computer results:
document.write(pcResult + "<br>");

// Generate the player's game results:
var playerRandomNumber = Math.random() * 9 + 1;
var playerDiceRoll = Math.round(playerRandomNumber);
var playerResult = "Your result is: " + playerDiceRoll + "!";
// Output player results:
// console.log(playerResult);
document.write(playerResult + "<br>");

//Determine which one is the winner.
if (pcDiceRoll > playerDiceRoll) {
  document.write("The computer is the winner!");
} else if (playerDiceRoll > pcDiceRoll) {
  document.write("You are the winner!");
}
