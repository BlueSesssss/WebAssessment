document.getElementById('clickMeBtn').addEventListener('click', function() {
    alert("Click Me button Alerted!");
});

document.getElementById('pickNumberBtn').addEventListener('click', function() {
    let number = prompt("Enter a number:");
    alert("You picked the number: " + number);
});


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let messageDiv = document.getElementById('message');

    messageDiv.innerHTML = ""; 

    if (name === "" || email === "") {
        messageDiv.style.color = "red";
        messageDiv.innerHTML = "Error: Name and email are required!";
    } else {
        messageDiv.style.color = "green";
        messageDiv.innerHTML = "Success: Form submitted!";
    }
});
