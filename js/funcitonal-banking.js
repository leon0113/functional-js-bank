// ! common function for both deposite & withdraw

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';

    return inputAmount;
}
// ! handle input field with a comon function
function updateTotalfield(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

// ! uPDATE balance from a common function
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}

// ! Deposite button function 
document.getElementById('deposite-btn').addEventListener('click', function () {

    const depositeAmountt = getInputValue('deposite');
    if (depositeAmountt > 0) {
        // ! get current deposite
        updateTotalfield('deposite-Amount', depositeAmountt);
        // Update balance 
        updateBalance(depositeAmountt, true);
    }


});

// ! Withdraw button function 
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInputAmount = getInputValue('withdraw');
    if (withdrawInputAmount > 0) {
        // ! get current withdraw  
        updateTotalfield('withdraw-Amount', withdrawInputAmount);
        //update balance  
        updateBalance(withdrawInputAmount, false);
    }

})














