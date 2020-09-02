// ## Acceptance Criteria

//```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    //All MY CODE GOES HERE


    // 1. Arrays I'll Need
    // var password = [] * needs to aggregate selections from whether or not the user wants to include any of the various arrays below

    //2. Various Arrays
    // var characterCount = []
    // var assignedLowercase = []
    // var assignedUppercase = []
    // var assignedNum = []
    // var assignedSpecial = []
    // var lowercase = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // var uppercase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    // var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // var specialCharacters = ["!", "#", "$", "%", "*", "&", "+", "@", "?", "~"]

    //3. Prompts and Confirms 
        // Part 1: Character Length
        // var characterCount = prompt(Choose a desired length between 8 and 128 characters for your new password.)
            // -->console.log the user's inputted value [To test]
            // -->provide an alert to show the user that we've logged their entry

        //Part 2: Record Password Preferences usings Confirms and Conditional Statements
            //First create For loop for var lowercase and assign a random letter as a string to var chosenLowercase.
                // for (var = 0; i<lowercase.length; i++) {
                //       var assignedLowercase = Math.floor(Math.random() * lowercase.length)];
                //    console.log(assignedLowercase)
                //    } --> This loops the items in the lowercase array and assigns input as chosen






}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
