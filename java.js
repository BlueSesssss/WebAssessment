// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Click Me button functionality
    document.getElementById('clickMeBtn').addEventListener('click', function() {
        alert("Click Me button clicked!");
    });

    // Pick your number button functionality
    document.getElementById('pickNumberBtn').addEventListener('click', function() {
        let number = prompt("Pick a number:");
        if (number !== null) {
            alert("You picked the number: " + number);
        }
    });
});



function number() {
    const userInput = prompt("Please enter a number:");
    const number = parseInt(userInput, 10);


    if (!isNaN(number)) {
        if (number % 2 === 0) {
            alert(number + " is even.");
        } else {
            alert(number + " is odd.");
        }


        for (let i = 1; i <= number; i++) {
            console.log(i);
        }
    } else {
        alert("That's not a valid number!");
    }
}



document.getElementById('myForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();

    let messageDiv = document.getElementById('message');

    messageDiv.innerHTML = "";

    if (name === "" || email === "") {
        messageDiv.style.color = "red";
        messageDiv.innerHTML = "Error: Both Name and Email are required!";
    } else {
        messageDiv.style.color = "green";
        messageDiv.innerHTML = "Success: Form submitted successfully!";
    }
});

