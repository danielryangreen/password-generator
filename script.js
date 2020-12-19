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

// declare variables
var lengthMinimum = 8;
var lengthMaximum = 128;
var charactersLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charactersNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charactersSpecial = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var charactersSelected = [];
var passwordString = "";

function generatePassword() {

  // get number of characters
  var lengthSelected = parseInt(prompt("Number of characters?"));
  console.log(lengthSelected);

  // validate number of characters
  if (lengthSelected >= lengthMinimum && lengthSelected <= lengthMaximum) {

    // get types of characters
    var includeLowercase = confirm("Include lowercase characters?");
    console.log(includeLowercase);
    var includeUppercase = confirm("Include uppercase characters?");
    console.log(includeUppercase);
    var includeNumeric = confirm("Include numeric characters?");
    console.log(includeNumeric);
    var includeSpecial = confirm("Include special characters?");
    console.log(includeSpecial);

    // validate types of characters
    if (includeLowercase === true || includeUppercase === true || includeNumeric === true || includeSpecial === true) {

      // add characters to selected array
      console.log(charactersSelected);
      
      if (includeLowercase === true) {
        charactersSelected = charactersSelected.concat(charactersLowercase);
      }
      console.log(charactersSelected);
      
      if (includeUppercase === true) {
        charactersSelected = charactersSelected.concat(charactersUppercase);
      }
      console.log(charactersSelected);
      
      if (includeNumeric === true) {
        charactersSelected = charactersSelected.concat(charactersNumeric);
      }
      console.log(charactersSelected);
      
      // ???SPACE CHARACTER IS CAUSING A LINE BREAK???
      if (includeSpecial === true) {
        charactersSelected = charactersSelected.concat(charactersSpecial);
      }
      console.log(charactersSelected);

      // add random characters to password string
      for (var i = 0; i < lengthSelected; i++) {
        var randomNumber = Math.floor(Math.random() * charactersSelected.length);
        passwordString = passwordString + charactersSelected[randomNumber];
        console.log(randomNumber);
        console.log(charactersSelected[randomNumber]);
      }
      return passwordString;
    }
    else {
      alert("At least one type of characters must be included.");
    }
  }
  else {
    alert("Number of characters must be at least 8 and no more than 128.");
  }
}