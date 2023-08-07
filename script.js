// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {

//prompt("How many characters would you like your password?");//

var length=prompt("How many characters would you like your password?");

if (length < 8 || length > 128) {
  alert("please enter a number between 8 and 128") && (length= prompt("How many characters would you like your password?"));
}

//confirm("would you like to include lowercase letters in password?");//
let LC = 'abcdefghijklmnopqrstuvwxyz';
let UP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let NUM = '0123456789';
let SP = '!@#$%^&*';
let allowedCharacters = '';
let generatedPassword = "";

var lowercase =confirm("would you like to include lowercase letters in password?");
if (lowercase === true) {
allowedCharacters += LC;
}
console.log ("allowedCharacters = ", allowedCharacters);

var uppercase =confirm("would you like to include uppercase letters in password?");
if (uppercase === true) {
allowedCharacters += UP;
}
console.log ("allowedCharacters = ", allowedCharacters);

var num =confirm("would you like to include numbers letters in password?");
if (num === true) {
allowedCharacters += NUM;
}
console.log ("allowedCharacters = ", allowedCharacters);

var Special =confirm("would you like to include special characters in password?");
if (Special === true) {
allowedCharacters += SP;
}
console.log ("allowedCharacters = ", allowedCharacters);

if (lowercase === false && 
    uppercase === false &&
    Special === false &&
    num === false
 ) {
alert ("at least character type should be chosen to generate password.");
}
else {
  for(let i=0; i<length; i++) {
    let randomNum = Math.floor(Math.random())
  }
}
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
