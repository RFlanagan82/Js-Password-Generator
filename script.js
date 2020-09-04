

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//I need to create arrays that will hold all possible elements available to be used should a user select that option for their password.
var lower = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E","F","G","H","I", "J", "K", "L", "M", "N", "O", "P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "{", "}",];

//I need to create a new array that will be used to take in the chosen array groups of the user.
var mergedValues = [];

function generatePassword()
{

//Test the console
console.log("Congratulations! I'm working.");

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
var passwordLength = +(prompt("Choose a desired number of password characters between 8 and 128."));

//If user provides a valid number that meets all the criteria below alert them that we have recieved it and log it to the console.
//Here I show that passwordLength must be greater or equal to 8 AND less than or equal to 128 AND passwordLength is not empty AND passwordLength is not 'Not a Number'.
    if (passwordLength >= 8 && passwordLength <= 128 && passwordLength !== null && passwordLength !== NaN) 
     {
    alert("Thanks. You have chosen " + passwordLength);
    console.log(passwordLength);
     } 
    else {
    alert("Your response must be a number between 8 and 128!");
    return; //return ends this function.
    };

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//I need to create confirmation variables for each of the confirms.
var confirmLower = confirm("Do you want to include lowercase letters?"); 
var confirmUpper = confirm("Do you want to include uppercase letters?"); 
var confirmNum = confirm("Do you want to include numbers?");
var confirmSpecial = confirm("Do you want to include special characters?"); 

//Only need to see if the user confirms for a desired option: lowercase, uppercase, number or special character - so then I don't need else statements.
//The functions inside each 'if' statement bring in the respective array only 'if' the user has selected that specific option for their password through the confirm prompts.
//Otherwise it moves to the next variable and either enters that into the mergedValues array or not.
    if (confirmLower) {
        mergedValues = mergedValues.concat(lower);
        console.log(mergedValues);
    }
    if (confirmUpper) {
        mergedValues = mergedValues.concat(upper);
            console.log(mergedValues);
    }
    if (confirmNum) {
        mergedValues = mergedValues.concat(numbers);
                console.log(mergedValues);
    }
    if (confirmSpecial); {
        mergedValues = mergedValues.concat(specialCharacters);
                    console.log(mergedValues);
    };

//I need to ensure that at least one of the preceding selections was met so that a password can be produced. 
    if (!confirmSpecial && !confirmNum && !confirmUpper && !confirmLower){
            alert("You must select a type of character to use in your password")
            return;
    }

//Needed to create a empty variable called 'passwordGenerated' where the function in the for loop returns the randomized items at the 'mergedValues' character length.
    var passwordGenerated = [];

//Now I need to run a for loop that starts at 0 and continues to run only until it hits the passwordLength variable I created earlier.
    for (i=0;i<passwordLength;i++){
        passwordGenerated.push(mergedValues[Math.floor(Math.random() * mergedValues.length)])
    }

//Stop the function and returns a joined sting value.
    return passwordGenerated.join("");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
