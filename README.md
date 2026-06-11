# bank-account-ITOL
A fully interactive browser-based banking application built as part of a JavaScript course. The project demonstrates core ES6 concepts through a real-world use case.

Netlify link: https://bank-account-itol.netlify.app/

Features

- Create an account with a username and PIN
- Secure login with PIN validation
- Deposit and withdraw funds with real-time balance updates
- Transaction history displayed in a side panel
- Error handling with user-friendly messages in the UI
- Data persisted across sessions using localStorage

JavaScript Concepts Demonstrated

- ES6 Classes — BankAccount class with a constructor and methods
- Encapsulation — private #balance field inaccessible outside the class
- ES6 Modules — import / export across multiple files
- DOM Manipulation — document.getElementById, textContent, createElement, appendChild
- Event Listeners — addEventListener wiring buttons to class methods
- localStorage — storing and retrieving account data across sessions
- JSON — JSON.stringify and JSON.parse for storing arrays of objects
- Conditionals — input validation and insufficient funds checks
- Array methods — find, push, unshift, forEach
- Template literals — dynamic strings in console logs and UI messages

Technologies used:

- Vanilla JavaScript (ES6+)
- HTML5
- CSS3 with custom properties (CSS variables)
- Google Fonts — Inter

Future Updates:

- Account management — more robust account creation flow, including input validation and confirmation screens
- Transaction history — entries sorted with the most recent at the top, with date and time stamps on every transaction
- Balance display — balance updates passively without requiring a dedicated button press, reflecting real banking UX
- Processing simulation — setTimeout delays on deposits and withdrawals to simulate ATM-style transaction processing, with loading feedback in the UI