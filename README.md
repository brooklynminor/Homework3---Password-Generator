Brooklyn Minor

#Homework3 – Password Generator

The purpose of this project was to modify the files that were given to generate a random password.
In previous weeks leading up to this assignment we learned various concepts. Webpages are developed further by modifying BootStrap and CSS elements, by implementing JavaScript we are able to make the webpage accessible through a variety of different functions. 
Required characters are to be generated into the password, this occurs by creating arrays inside variables. Variables act as containers for storing data, in this case the data are the characters. These variables are added within the script.js file.  
```
var upperCaseCharacters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseCharacters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","","x","y","z"];
var numericalCharacters =["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters =["!","%","^","&","*","(","~","+","=","-","?","_"];

```
JavaScript is used to calculate and validate data and manipulate HTML and CSS content. If the HTML file is separate JavaScript file a link to that .js file is inserted through the script tag. For functions to be linked to the HTML’s content, ID’s and Class’s are inserted in to tags. In this case, generate and passwords are ID’s that link the function to HTML.

![Image of Password and Generate code in HTML]( C:\Users\Brooklyn Minor\OneDrive\Desktop\Bootcamp\Homework\Homework3\Homework3-Password-Generate.jpg)
The function begins once the generate button is clicked. An event listener is attached to a button element for a click event to occur.     

```
generateBtn.addEventListener("click", writePassword);

```
This function prompts the user to input the length of their password, which must contain 8-128 characters. An alert is displayed if the length of the characters range outside of 8-128, this occurs through the if statements. 
```
var numberOfCharacters = prompt( "How many characters would you like your password to contain?" );
    if( numberOfCharacters < 8 ){
        alert( "Password must be greater than 8 characters");
        return 
    } 
    if( numberOfCharacters > 128 ) {
        alert("Password must contain less than 128 characters")
        return
    } 
```
If the user inputs a value that is valid, they are prompt with a confirmation statement which will ask if they’d like to use an array of characters. Once the user agrees, the array of variables specified are joined using the concat function, returning a new array.A for loop is added to cycle through the array of variables while keeping within the number of characters assigned by the user. The password is generated as a string.

```
    var password = ""
    for (var i = 0; i < numberOfCharacters; i++) {
      password += confirmCharacters[ parseInt(Math.random() * confirmCharacters.length) ]
    }
    // Display in console
    console.log('password generated: ', password);
    return password;

```

