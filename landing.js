let input = document.getElementById('username');
let pinInput = document.getElementById('pin');
let loginBtn = document.getElementById('loginBtn');
let createAccountBtn = document.getElementById('createAccountBtn');
let message = document.getElementById("message")
let accounts = JSON.parse(localStorage.getItem("accounts")) || [];


createAccountBtn.addEventListener('click', function () {
    let username = input.value.trim();
    let pin = pinInput.value.trim();
    const existingAccount = accounts.find(account => account.username === username);
    if (username === '' || pin === '') {
        message.textContent = "Please enter both username and PIN.";
        return;
    }
    if (existingAccount) {
        message.textContent = "Username already exists. Please choose a different username.";
        return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("pin", pin);
    accounts.push({ username: username, pin: pin });
    localStorage.setItem("accounts", JSON.stringify(accounts));
    message.textContent = "Account created successfully! You can now log in.";
    input.value = '';
    pinInput.value = '';
    window.location.href = "account.html";
});

loginBtn.addEventListener('click', function () {
    let username = input.value.trim();
    let pin = pinInput.value.trim();
    if (username === '' || pin === '') {
        message.textContent = "Please enter both username and PIN.";
        return;
    }
    const account = accounts.find(account => account.username === username && account.pin === pin);

    if (account) {
        localStorage.setItem("username", username);
        localStorage.setItem("pin", pin);
        message.textContent = "Login successful!";
        input.value = '';
        pinInput.value = '';
        window.location.href = "account.html";
    } else {
        message.textContent = "Invalid username or PIN. Please try again.";
        input.value = '';
        pinInput.value = '';
    }
});