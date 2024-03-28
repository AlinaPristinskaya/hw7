function swapDigits() {
    // Get the input value
    let number = document.getElementById("numberInput").value;

    // Check if the input is a number of at least 3 digits
    if (!isNaN(number) && number.length >= 3) {
        // Convert the number to string for easier manipulation
        let numberStr = number.toString();

        // Swap the second and last digits
        let secondDigit = numberStr[1];
        let lastDigit = numberStr[numberStr.length - 1];
        let newNumberStr = numberStr.substr(0, 1) + lastDigit + numberStr.substr(2, numberStr.length - 3) + secondDigit;

        // Print the original number and the new number
        console.log("Original number: " + number);
        console.log("New number after swapping: " + newNumberStr);
    } else {
        alert("Please enter a valid number of at least 3 digits.");
    }
}
