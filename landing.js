let input = document.getElementById('username');
let createAccountBtn = document.getElementById('createAccountBtn');
let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

createAccountBtn.addEventListener('click', function() {
    let username = input.value.trim();
    localStorage.setItem("username", username);
    if (username) {
        if (!accounts.includes(username)) {
            accounts.push(username);
            localStorage.setItem("accounts", JSON.stringify(accounts));
            alert(`Account for ${username} created successfully!`);
            window.location.href = "account.html";
        } else {
            alert(`Account for ${username} already exists!`);
        }
    } else {
        alert("Please enter a valid username.");
    }
});

