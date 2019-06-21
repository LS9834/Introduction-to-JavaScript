var myName = 'Bob';
document.write(myName+"<br>");
// Using +"<br>" to break nito a new line of output.

var simpleAddition = 2 + 2;
document.write(simpleAddition+"<br>");

var size = 100;
var doubleSize = size * 2;
document.write(doubleSize+"<br>");

var size = 100;
var doubleSize = size * 2;
var minSize = (doubleSize * 2) - (size / 2);
document.write(minSize+"<br>");

var randomNumber = Math.random();
document.write(randomNumber+"<br>");

var randomNumber = Math.random() * 6;
document.write(randomNumber+"<br>");

var randomNumber = (Math.random() * 6) + 1;
document.write(randomNumber+"<br>");

var randomNumber = (Math.random() * 6) + 1;
var diceRoll = Math.floor(randomNumber);
document.write(diceRoll+"<br>");

//Primitive Data Types

//Strings
var text1 = 'This is a text!';
var text2 = "This uses double quotes.";
document.write(text1+"<br>");
document.write(text2+"<br>");

//escape , single quotes, double quotes
var escapedText = "He said: \"Yes!\", that's for sure.";
var escapedText2 = 'He said: "Yes!", that\'s for sure.';
document.write(escapedText+"<br>");
document.write(escapedText2+"<br>");

//Combining Strings
var name = 'John';
document.write('My name is ' + name + ' and I am ready to start!'+"<br>");

var name = 'John';
var age = 42;
document.write('My name is ' + name + ' and I\'m ' + age + ' years old!'+"<br>");

//Numbers
var integer = 10;
var negativeInteger = -7;
var float = 10.15;

//Booleans
var boolean1 = true;
var boolean2 = false;
var notABoolean = 'true'; // This is the string 'true'—it’s not a boolean!

//null and undefined
console.log(notDefinedVariable); // Will output undefined
var thisIsEmpty = null;
var thisIsUndefined = undefined;
var thisIsAlsoUndefined;

//Variable Typing in JavaScript
var myVariable = 'Hello world!';
console.log(typeof myVariable);