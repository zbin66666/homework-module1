/*RANDOM CODES*/
//function to generate combination of characters

function generateCode() {
//creat variables
var code = ' '; //initailize to null value
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz0123456789@#$';

for (i = 1; i<= 8; i++) {
var char = Math.random()*str.length; //random select a char from str
code += str.charAt(char)
}
return code; 

}

// Get HTML element to disyplay 

document.getElementById("codes").innerHTML = generateCode();

//Disable button

function disableButton () {
    document.getElementById("submit").disabled = true;

}

//Active fuctnion 

disableButton();