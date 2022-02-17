//handle deposite

document.getElementById('deposite-btn').addEventListener('click',
    function () {

        // add new deposite 
        const depositInput = document.getElementById('deposite-box');
        const newdepositeAmount = depositInput.value;

        //previous deposite
        const depositeTotal = document.getElementById('current-deposit');
        const currentDepositAmount = depositeTotal.innerText;
        const newDepositeTotal = parseFloat(currentDepositAmount) + parseFloat(newdepositeAmount);
        // console.log(currentDepositAmount);

        depositeTotal.innerText = newDepositeTotal;


        //handle current balance
        const balanceTotal = document.getElementById('current-balance');
        const currentBalanceAmount = balanceTotal.innerText;

        const newBalanceTotal = parseFloat(currentBalanceAmount) + parseFloat(newdepositeAmount);

        balanceTotal.innerText = newBalanceTotal;

        // clear deposite box 
        depositInput.value = '';
    })

//handle deposite

document.getElementById('withdraw-btn').addEventListener('click',
    function () {

        //add new withdraw
        const withdrawInput = document.getElementById('withdraw-box');
        const newWithdrawAmount = withdrawInput.value;

        //previous withdraw
        const withdrawTotal = document.getElementById('current-withdraw');
        const currentWithdrawAmount = withdrawTotal.innerText;

        //set withdraw Total
        const newWithdrawTotal = parseFloat(currentWithdrawAmount) + parseFloat(newWithdrawAmount);

        withdrawTotal.innerText = newWithdrawTotal;

        //update current balance
        const balanceTotal = document.getElementById('current-balance');
        const currentBalanceAmount = balanceTotal.innerText;

        const newBalanceTotal = parseFloat(currentBalanceAmount) - parseFloat(newWithdrawAmount);

        balanceTotal.innerText = newBalanceTotal;

        // clear deposite box 
        withdrawInput.value = '';
    })