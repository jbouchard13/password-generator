// Set possible values to be used in the password

//Using integers with a loop function to get characters from character codes
// Lowercase letters
var lowercaseCharacers = arrayLoop(97, 122);
// Uppercase letters
var uppercaseCharacers = arrayLoop(65, 90);
// Numbers
var numberCharacters = arrayLoop(48, 57);
// Special Characters (concatinating arrays together since symbol numbers aren't all together)
var specialCharacters = arrayLoop(33, 47)
  .concat(arrayLoop(58, 64))
  .concat(arrayLoop(91, 96))
  .concat(arrayLoop(123, 126))
  .concat(arrayLoop(145, 148));
console.log(specialCharacters);

// Connect criteria selectors to the checkboxes on the page
var addLowercaseEl = document.querySelector("#addLowercase");
var addUppercaseEl = document.querySelector("#addUppercase");
var addNumbersEl = document.querySelector("#addNumbers");
var addSpecialCharactersEl = document.querySelector("#addSpecialCharacters");



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

  // Check to see which variables are clicked from the checkboxes
  var addLowercase = addLowercaseEl.checked;
  var addUppercase = addUppercaseEl.checked;
  var addNumbers = addNumbersEl.checked;
  var addSpecialCharacters = addSpecialCharactersEl.checked;



  // Set password variable to the criteria checked off by the user.
  var password = generatePassword(passwordLength, addLowercase, addUppercase, addNumbers, addSpecialCharacters)

  // Select prompted amount of characters at random from the lowercaseEl array


  // If multiple arrays chosen then concatinate them together to create new arrays



  // Use a randomizer to select random characters from the chosen arrays

  // Display new password to the textbox
});
// Function to create the password
function generatePassword(passwordLength, addLowercase, addUppercase, addNumbers, addSpecialCharacters) {

};

// Function to loop through the arrays
function arrayLoop(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
    array.push(i)
  };
  return array;
}


