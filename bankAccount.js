//Exporting class so it can be used in various other files
export class BankAccount {
    //private field - cannot be accessed outside of the class
    #balance

// Constructor to create the class passing in 2 parameters for the account name and starting balance
constructor (accountOwner, startingBalance) {
    this.accountOwner = accountOwner
    this.#balance = startingBalance
}
 // Deposit Method for class takes in the amount parameter and uses IF statment to check whether the amount is greater than zero, and then adding the amount deposited to this.#balance
 deposit(amount) {
    if (amount <= 0) {
        return ("error");
    } else {
        this.#balance += amount;
        //console used for testing purposes
        console.log (`You have deposited: ${amount} and your new balance is: ${this.#balance}`);
    }}
    
    //withdraw method for class, takes the amount as a parameter and then does 2 checks, if the amount is less than or equal to zero and then checks wther the amount is greater than this.#balance. Once checks are complete it takes away the amount for this.#balance
    withdraw(amount) {
        if (amount <= 0 || amount > this.#balance) {
            return("error");
        } else {
            this.#balance -= amount;
            //console used for testing
            console.log(`You have withdrawn ${amount} and your new balance is: ${this.#balance}`);
        }
    }

    //Simple method for checking the balance, just returns the balance contained within this.#balance
    checkBalance() {
        console.log(`Your balance is: ${this.#balance}`)
        return this.#balance;
    }
}


