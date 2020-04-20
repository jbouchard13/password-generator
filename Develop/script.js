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


// Connect criteria selectors to the checkboxes on the page
var addLowercaseEl = document.querySelector("#addLowercase");
var addUppercaseEl = document.querySelector("#addUppercase");
var addNumbersEl = document.querySelector("#addNumbers");
var addSpecialCharactersEl = document.querySelector("#addSpecialCharacters");

// Add a variable for the textbox where the new password will be displayed
var passwordEl = document.querySelector("#password");

// Add variable for the generate button that will generate the password
var generateBtn = document.querySelector("#generate");

// Add event listener for when the generate button is clicked
generateBtn.addEventListener("click", function () {
  // Prompt the user for a password length
  var passwordLength = prompt("How long would you like the password to be? (8-128 characters)");
  // If a number between 8-128 isn't chosen, alert the user to re select a number
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.")
    return
  };

  // Check to see which variables are clicked from the checkboxes
  var addLowercase = addLowercaseEl.checked;
  var addUppercase = addUppercaseEl.checked;
  var addNumbers = addNumbersEl.checked;
  var addSpecialCharacters = addSpecialCharactersEl.checked;
  // Set the password variable to the value from the generate function
  var password = generatePassword(passwordLength, addLowercase, addUppercase, addNumbers, addSpecialCharacters);
  passwordEl.textContent = password;
  console.log(password);


});

// Function to create the password
function generatePassword(passwordLength, addLowercase, addUppercase, addNumbers, addSpecialCharacters) {
  // Use if statements to concat the character arrays together if the boxes are checked
  var passwordCodes = [];
  if (addLowercase) passwordCodes = passwordCodes.concat(lowercaseCharacers);
  if (addUppercase) passwordCodes = passwordCodes.concat(uppercaseCharacers);
  if (addNumbers) passwordCodes = passwordCodes.concat(numberCharacters);
  if (addSpecialCharacters) passwordCodes = passwordCodes.concat(specialCharacters);


  // Use a for loop to loop over the arrays and select random numbers the chosen amount of times

  var passwordChars = [];
  console.log(passwordChars);
  var i = 0
  while (i < passwordLength) {
    console.log(passwordLength);
    var characterCode = passwordCodes[Math.floor(Math.random() * passwordCodes.length)]
    passwordChars.push(String.fromCharCode(characterCode));
    i++;
    console.log(passwordCodes.length);
  } return passwordChars.join("");


};

// Function to loop through the character code arrays
function arrayLoop(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
    array.push(i)
  };
  return array;
};
