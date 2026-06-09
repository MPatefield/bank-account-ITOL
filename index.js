import { BankAccount } from "./bankAccount.js";

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



