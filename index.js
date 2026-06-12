import { BankAccount } from "./bankAccount.js";

/*
//Creation of first new bank account with corresponding methods
const account1 = new BankAccount("Mattie",100)

//depositing of 150 = Expected: 250
account1.deposit(150)
//Withdrawing of 50, Expected: 200
account1.withdraw(50)
//Checking balance, Expected: 200
account1.checkBalance()
//Test case, should return error
account1.withdraw(0)

//Creation of second bank account
const account2 = new BankAccount("Sally", 1000)

//deposit of 1500, expected 2500
account2.deposit(1500)
//Checking balance, expected: 2500
account2.checkBalance()
//Withdrawing of 2000, expected: 500
account2.withdraw(2000)
//Test case, should throw error
account2.deposit(-1000)
*/



const message = document.getElementById("message")
const balance = document.getElementById("balance")
const amount = document.getElementById("amount")
const depositButton = document.getElementById("deposit-btn")
const withdrawButton = document.getElementById("withdraw-btn")
const checkBalanceBtn = document.getElementById("check-balance-btn")
const historyList = document.getElementById("history-list")
const logoutBtn = document.getElementById("logout-btn")

logoutBtn.addEventListener("click", function() {
    window.location.href = "index.html"
})

const username = localStorage.getItem("username")
const savedBalance = Number(localStorage.getItem(`balance_${username}`)) || 0
console.log(`Saved balance for ${username}: ${savedBalance}`)
const account1 = new BankAccount(username, savedBalance)
balance.textContent = account1.checkBalance()

document.getElementById("account-owner").textContent = `Account Owner: ${username}`

//const account1 = new BankAccount("Mattie", 0)

depositButton.addEventListener("click", function() {
    const result = account1.deposit(Number(amount.value))
    localStorage.setItem(`balance_${username}`, account1.checkBalance())
    message.textContent = result
    balance.textContent = account1.checkBalance()
    updateTransactionHistory()
})

withdrawButton.addEventListener("click", function(){
    const result = account1.withdraw(Number(amount.value))
    localStorage.setItem(`balance_${username}`, account1.checkBalance())
    message.textContent = result
    balance.textContent = account1.checkBalance()
    updateTransactionHistory()
})

checkBalanceBtn.addEventListener("click", function(){
    const result = account1.checkBalance()
    
    balance.textContent = result
})



function updateTransactionHistory() {
    historyList.innerHTML = ""
    if (account1.transactionHistory.length === 0) {
        const listItem = document.createElement("li")
        listItem.textContent = "No transactions yet."
        historyList.appendChild(listItem)
        return
    } else {
    account1.transactionHistory.forEach(transaction => {
        const listItem = document.createElement("li")
        listItem.textContent = transaction
        historyList.appendChild(listItem)
    })}
}

updateTransactionHistory()