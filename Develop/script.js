// Set possible values to be used in the password
// Lowercase letters
var lowercaseCharacers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase letters
var uppercaseCharacers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Numbers
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Special Characters
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "{", "|", "}", "~", "]"];

// Add a variable for the textbox where the new password will be displayed
var passwordEl = document.querySelector("#password");

// Add event when the button is clicked to create a series of prompts/confirms for password criteria
var generateBtn = document.querySelector("#generate");

// Add event listener for when the generate button is clicked
generateBtn.addEventListener("click", function () {
  // Prompt the user for a password length
  var passwordLength = prompt("How long would you like the password to be? (8-128 characters)");
  // If a number between 8-128 isn't chosen, alert the user to re select a number
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
  };

  // Select prompted amount of characters at random from the lowercaseEl array


  // If multiple arrays chosen then concatinate them together to create new arrays



  // Use a randomizer to select random characters from the chosen arrays

  // Display new password to the textbox
});


