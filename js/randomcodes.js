

function generateCode() {
    code = ''; // Reset the code to an empty string
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); // Randomly select a char from str
        code += str.charAt(char);
    }
    return code;
}

// Get HTML element to display the generated code
document.getElementById("codes").innerHTML = generateCode();

// Disable button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue; // Enable or disable button
    if (btnvalue === true) {
        // Set button and label color with transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        // Set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

// Listen to user input code
var codebox = document.getElementById("codeentered"); // Get textbox
codebox.addEventListener("input", evaluateCode); // Listen to code entered in the textbox

// Run function if user has entered a character in the textbox
function evaluateCode() {
    getCode = document.getElementById("codeentered").value; // Get entered code
    var charset1 = getCode.trim(); // Remove any leading or trailing spaces
    var charset2 = code.trim(); // Remove any leading or trailing spaces from the generated code

    // Test if entered code matches the number of generated characters
    if (charset1.length === charset2.length && charset1 === charset2) {
        disableButton(false); // If match, enable the button
    }
}

// Activate the initial function to disable the button
disableButton();


    





    