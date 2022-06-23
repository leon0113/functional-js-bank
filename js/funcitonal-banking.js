// ! common function for both deposite & withdraw

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';

    return inputAmount;
}
// ! ------------------------------------------------------
function updateTotalfield(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}


document.getElementById('deposite-btn').addEventListener('click', function () {


    const depositeAmountt = getInputValue('deposite');
    // ! get current deposite

    updateTotalfield('deposite-Amount', depositeAmountt);

    // Update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmountt;
});

// ! Withdraw button function 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInputAmount = getInputValue('withdraw');
    // ! get current withdraw  
    updateTotalfield('withdraw-Amount', withdrawInputAmount);
    //update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawInputAmount;
    // clear input field

})














