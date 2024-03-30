function swapDigits() {
    
    let number = document.getElementById("numberInput").value;

    
    if (!isNaN(number) && number.length >= 3) {
       
        let numberStr = number.toString();

        
        let secondDigit = numberStr[1];
        let lastDigit = numberStr[numberStr.length - 1];
        let newNumberStr = numberStr.substr(0, 1) + lastDigit + numberStr.substr(2, numberStr.length - 3) + secondDigit;

       
        console.log("Original number: " + number);
        console.log("New number after swapping: " + newNumberStr);
    } else {
        alert("Please enter a valid number of at least 3 digits.");
    }
}
