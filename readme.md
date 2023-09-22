# Your Account Manager

This project showcases the implementation of a bank account using JavaScript. I have incorporated classes, switch statements, and try-catch statements to achieve the desired functionality.

## Classes
The code starts by defining a BankAccount class, which encapsulates the behavior and properties of a bank account. Here's an overview of the class:

## Methods

> add_money(amount)
The add_money method is responsible for adding money to the account. It first checks if the provided amount is valid (not negative, not empty, and a number) using try-catch statements. If the amount is valid, it adds it to the account balance, creates a transaction object with a unique ID, timestamp, and description, and appends it to the transactions array.

> withdraw_money(amount)
The withdraw_money method handles the withdrawal of money from the account. It also checks if the withdrew amount is valid (not negative, not empty, and a number) using try-catch statements and also checks if the account has sufficient balance. If the withdrawal is allowed, it subtracts the amount from the balance, creates a transaction, and appends it to the transactions array.

> get_last_five_transactions()
This method retrieves the last five transactions from the transactions array and returns them as an array which will be displayed as a table on main screen.

> get_total_deposits()
The get_total_deposits method calculates and returns the total of all deposit transactions from the transactions array.

> get_total_withdrawals()
Similar to get_total_deposits, the get_total_withdrawals method calculates and returns the total of all withdrawal transactions from the transactions array.

> get_average_deposits()
This method calculates and returns the average deposit amount based on entries in the transactions array.

> get_average_withdrawals()
Similar to get_average_deposits, the get_average_withdrawals method calculates and returns the average withdrawal amount based on entries in the transactions array.


## Switch Statements
Switch statements are utilized in the code to handle different user operations based on a selected option. It allows different actions to be performed based on the selected value of the operator variable, giving the user control over the operations to be executed on the bank account.

* If operator is 'add', add_money is called and result displayed in outputBlock, along with current balance in totalBlock.
* If operator is 'withdraw', withdraw_money is called and result displayed in outputBlock, with current balance in totalBlock.
* If operator is 'last-five', table with last five transactions from get_last_five_transactions method is displayed in outputBlock.
* If operator is 'total-deposits', total deposits from get_total_deposits method displayed in outputBlock.
* If operator is 'total-withdrawals', total withdrawals from get_total_withdrawals method shown in outputBlock.
* If operator is 'average-deposits', average deposits from get_average_deposits method displayed in outputBlock.
* If operator is 'average-withdrawals', average withdrawals from get_average_withdrawals method shown in outputBlock.
* If none match, 'Invalid Operation' message displayed in outputBlock.

## try-catch-finally Statements
try-catch-finally statements are used to handle potential errors that may occur during the execution of the add_money and withdraw_money functions.

* In add_money function, It checks if the amount is negative, empty, or not a number. If any of these conditions are met, an error is thrown. If the amount is valid, it adds the amount to the account balance, generates a transaction ID and timestamp, and stores the transaction details in an array. Finally, a success message with the transaction details is returned.

* In withdraw_money function, It checks if the amount is negative, empty, or not a number. If any of these conditions are met, an error is thrown. If the amount is valid, it checks if the account has sufficient balance for the withdrawal. If there is enough balance, it subtracts the amount from the account balance, generates a transaction ID and timestamp, and stores the transaction details. If there is insufficient balance, an error is thrown. Finally, a success message with the transaction details is returned.

