// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  
  // declare variables
  var lengthMinimum = 8;
  var lengthMaximum = 128;
  var charactersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var charactersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var charactersNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charactersSpecial = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var arrayEmpty = [];
  var passwordString = "";

  // add characters to selected array
  // SPACE CHARACTER IS CAUSING A LINE BREAK???
  var charactersSelected = arrayEmpty.concat(charactersLowercase, charactersUppercase, charactersNumeric, charactersSpecial);

  // add characters to password string
  for (var j = 0; j < charactersSelected.length; j++) {
    passwordString = passwordString + charactersSelected[j];
  }
  
  return passwordString;
}