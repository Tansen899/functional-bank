// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const depositAmountText = inputField.value;
    const amountValue = parseFloat(depositAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalTtext = totalElement.innerText;
    const previousTotal = parseFloat(totalTtext)
    totalElement.innerText = amount + previousTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal + amount;
    const previousbalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousbalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousbalanceTotal - amount;
    }
}

// nested function
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    return previousbalanceTotal;
}

document.getElementById('deposit-btn').addEventListener('click', function () {


    // get current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousdepositTotalAmount = parseFloat(depositTotalText)
    // depositTotal.innerText = depositAmount + previousdepositTotalAmount;

    // get and update Balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal + depositAmount;

    // // clear input field
    // depositInput.value = '';
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});

// handle withdraw Button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // update Withdraw Amount
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawAmount = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;


    // update Balance Withdraw 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal - withdrawAmount;
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('you can not withdraw more than what you have in your accout');
    }
});
