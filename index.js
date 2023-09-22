class BankAccount {
    constructor(balance) {
        this.balance = balance;
        this.transactions = [];
    }

    generateTransactionId() {
        return Math.random().toString(10).substring(2);
    }

    add_money(amount) {
        try {
            if (amount < 0) {
                throw new Error('Amount cannot be negative.');
            } else if (amount === '') {
                throw new Error('Amount cannot be empty.');
            } else if (isNaN(amount)) {
                throw new Error('Amount must be a number.');
            } else {
                this.balance += amount;
                const timestamp = new Date().toLocaleString();
                const transactionId = this.generateTransactionId();
                this.transactions.push({
                    transaction_id: transactionId,
                    timestamp,
                    transaction: `Added ${amount}$`
                });
                return `Successfully added ${amount}$ to the account at ${timestamp} with an transaction ID of ${transactionId}.
                `;
            }
        } catch (error) {
            return error.message;
        }
    }

    withdraw_money(amount) {
        try {
            if (amount < 0) {
                throw new Error('Amount cannot be negative.');
            } else if (amount === '') {
                throw new Error('Amount cannot be empty.');
            } else if (isNaN(amount)) {
                throw new Error('Amount must be a number.');
            } else {
                if (amount <= this.balance) {
                    this.balance -= amount;
                    const timestamp = new Date().toLocaleString();
                    const transactionId = this.generateTransactionId();
                    this.transactions.push({
                        transaction_id: transactionId,
                        timestamp,
                        transaction: `Withdrew ${amount}$`
                    });
                    return `Withdrawal of ${amount}$ successful at ${timestamp} with an transaction ID of ${transactionId}.`;
                } else {
                    throw new Error("Account don't have sufficient balance.");
                }
            }
        } catch (error) {
            return error.message;
        }
    }

    get_last_five_transactions() {
        return this.transactions.slice(-5);
    }

    get_total_deposits() {
        let totalDeposits = 0;
        for (const { transaction } of this.transactions) {
            if (transaction.includes("Added")) {
                const amount = parseInt(transaction.match(/\d+/)[0]);
                totalDeposits += amount;
            }
        }
        return `The total deposits in your account is ${totalDeposits}$.`;
    }

    get_total_withdrawals() {
        let totalWithdrawals = 0;
        for (const { transaction } of this.transactions) {
            if (transaction.includes("Withdrew")) {
                const amount = parseInt(transaction.match(/\d+/)[0]);
                totalWithdrawals += amount;
            }
        }
        return `The total withdrawls from your account is ${totalWithdrawals}$.`;
    }

    get_average_deposits() {
        let totalDeposits = 0;
        let depositCount = 0;
        for (const { transaction } of this.transactions) {
            if (transaction.includes("Added")) {
                const amount = parseInt(transaction.match(/\d+/)[0]);
                totalDeposits += amount;
                depositCount++;
            }
        }
        return `The average deposits in your account is ${depositCount ? totalDeposits / depositCount : 0}$.`;
    }

    get_average_withdrawals() {
        let totalWithdrawals = 0;
        let withdrawalCount = 0;
        for (const { transaction } of this.transactions) {
            if (transaction.includes("Withdrew")) {
                const amount = parseInt(transaction.match(/\d+/)[0]);
                totalWithdrawals += amount;
                withdrawalCount++;
            }
        }
        return `The average withdrawls from your account is ${withdrawalCount ? totalWithdrawals / withdrawalCount : 0}$.`;
    }


}

const operatorSelect = document.getElementById('operator');
const mainInput = document.getElementById('main-input');
const performButton = document.getElementById('perform');
const outputBlock = document.getElementById('output');
const totalBlock = document.getElementById('total');

operatorSelect.addEventListener('change', function () {
    const selectedOption = operatorSelect.value;
    updateInputPlaceholder(selectedOption);
});

function updateInputPlaceholder(selectedOption) {
    switch (selectedOption) {
        case 'add':
            mainInput.placeholder = "Enter the amount which you want to add";
            break;
        case 'withdraw':
            mainInput.placeholder = "Enter the amount which you want to withdraw";
            break;
        case 'last-five':
            mainInput.placeholder = "";
            break;
        case 'total-deposits':
            mainInput.placeholder = "";
            break;
        case 'total-withdrawls':
            mainInput.placeholder = "";
            break;
        case 'average-deposits':
            mainInput.placeholder = "";
            break;
        case 'average-withdrawls':
            mainInput.placeholder = "";
            break;
        default:
            mainInput.placeholder = "Please select an option";
            break;
    }
}

var account_balance = 0;
const account = new BankAccount(account_balance);


performButton.addEventListener('click', function () {
    var value = mainInput.value;
    value = parseInt(value);

    var operator = operatorSelect.value;

    switch (operator) {
        case 'add':
            outputBlock.innerHTML = account.add_money(value);
            totalBlock.innerHTML = `Total Money: ${account.balance}$`
            break

        case 'withdraw':
            outputBlock.innerHTML = account.withdraw_money(value);
            totalBlock.innerHTML = `Total Money: ${account.balance}$`
            break

        case 'last-five':
            let tableHTML = '<table>';
            tableHTML += '<tr><th>Index</th><th>Transaction ID</th><th>Timestamp</th><th>Status</th></tr>';
            transactions = account.get_last_five_transactions()
            transactions.forEach((transaction, index) => {
                tableHTML += `<tr>
                    <td>${index}</td>
                    <td>${transaction.transaction_id}</td>
                    <td>${transaction.timestamp}</td>
                    <td>${transaction.transaction}</td>
                  </tr>`;
            });
            tableHTML += '</table>';
            outputBlock.innerHTML = transactions.length != 0 ? tableHTML : "No transactions are available."
            break

        case 'total-deposits':
            outputBlock.innerHTML = account.get_total_deposits()
            break

        case 'total-withdrawls':
            outputBlock.innerHTML = account.get_total_withdrawals()
            break

        case 'average-deposits':
            outputBlock.innerHTML = account.get_average_deposits()
            break

        case 'average-withdrawls':
            outputBlock.innerHTML = account.get_average_withdrawals()
            break

        default:
            outputBlock.innerHTML = 'Invalid Operation.';
            break
    }

    mainInput.placeholder = "Please select an option";
    mainInput.value = "";

})
