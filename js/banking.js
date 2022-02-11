document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-input').value;
    const currentDeposit = document.getElementById('current-deposit');
    const totalDeposit = parseFloat(currentDeposit.innerText) + parseFloat(depositAmount);
    currentDeposit.innerText = totalDeposit;

    document.getElementById('deposit-input').value = '';

    const currentBalance = document.getElementById('current-balance');
    const totalBalance = parseFloat(currentDeposit.innerText) + parseFloat(currentBalance.innerText);
    currentBalance.innerText = totalBalance;
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const currentWithdraw = document.getElementById('withdraw-input');
    const currentWithdrawValue = parseFloat(currentWithdraw.value);
    const totalWithdraw = document.getElementById('withdraw');
    const totalWithdrawValue = parseFloat(totalWithdraw.innerText);
    totalWithdraw.innerText = currentWithdrawValue + totalWithdrawValue;
    
    const currentBalance = document.getElementById('current-balance');
    const updateBalance = parseFloat(currentBalance.innerText) - currentWithdrawValue;
    currentBalance.innerText = updateBalance;
    currentWithdraw.value = '';

})