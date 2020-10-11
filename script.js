// creates an array of characters that require to be within the password
var upperCaseCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","","x","y","z"];
var numericalCharacters =["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters =["!","%","^","&","*","(","~","+","=","-","?","_"];

// Generate a random number between 8 and 128
function generatePassword() {

  // function runs a prompt asking users the length they wish their password to be 
    var numberOfCharacters = prompt( "How many characters would you like your password to contain?" );
    if( numberOfCharacters < 8 ){
        alert( "Password must be greater than 8 characters");
        return 
    } 
    if( numberOfCharacters > 128 ) {
        alert("Password must contain less than 128 characters")
        return
    } 

    // confirmCharacters allows user to confirm the values and implementing them into an array
    var confirmCharacters = [];

    if ( confirm( "click ok to confirm including special characters" ) ) {
        confirmCharacters = confirmCharacters.concat(specialCharacters);
    }
      
    if ( confirm( "click ok to confirm including uppercase characters" ) ) {
        confirmCharacters = confirmCharacters.concat(upperCaseCharacters);
    }
      
    if ( confirm( "click ok to confirm including lowercase characters" ) ) {
        confirmCharacters = confirmCharacters.concat(lowerCaseCharacters);
    }
      
    if ( confirm( "click ok to confirm including numerical characters" ) ) {
        confirmCharacters = confirmCharacters.concat(numericalCharacters);
    }
  // for loop cycles through confirm characters
    var password = ""
    for (var i = 0; i < numberOfCharacters; i++) {
      password += confirmCharacters[ parseInt(Math.random() * confirmCharacters.length) ]
    }
    // Display in console
    console.log('password generated: ', password);
    return password;
}
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

// when the generate button is triggered and the user inputs their desired password length a password is generated
function writePassword() {
  password = generatePassword();
  if( password ){
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
  }
}
generateBtn.addEventListener("click", writePassword);

