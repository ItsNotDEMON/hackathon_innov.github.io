document.addEventListener('DOMContentLoaded', function () {
    const transactionForm = document.getElementById('transactionForm');
    const transactionList = document.getElementById('transactionList');
    const totalBalance = document.getElementById('totalBalance');

    let balance = 0;

    transactionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const type = document.getElementById('type').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        const transaction = {
            type,
            amount
        };

        if (type === 'expense') {
            balance -= amount;
        } else {
            balance += amount;
        }

        updateBalance();
        addTransactionToList(transaction);
        transactionForm.reset();
    });

    function updateBalance() {
        totalBalance.textContent = `$${balance.toFixed(2)}`;
        if (balance < 0) {
            totalBalance.style.color = '#dc3545'; // Red color for negative balance
        } else {
            totalBalance.style.color = '#28a745'; // Green color for positive balance
        }
    }

    function addTransactionToList(transaction) {
        const listItem = document.createElement('li');
        listItem.textContent = `${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}: $${transaction.amount.toFixed(2)}`;
        listItem.classList.add(transaction.type);
        transactionList.appendChild(listItem);
    }
});
