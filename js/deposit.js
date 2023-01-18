document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
Function Name: getInputValueById()
    1. get the deposit-field id
    2. get the value from input field
    3. convert string value to a number
*/

  const newDepositAmount = getInputValueById("deposit-field");

  /*
Function Name: getTextElementValueById()
    1. get the deposit-total by id
    2. get the innerText from the deposit-total
    3. convert string value to a number
  */

  const previousDepositTotal = getTextElementValueById("deposit-total");

  /*
    Calculate new deposit total 
  */

  const newDepositTotal = previousDepositTotal + newDepositAmount;

  /*
Function Name: setTextElementValueById()
    1. get the deposit-total by id
    2. set the new Deposit Total
  */

  setTextElementValueById("deposit-total", newDepositTotal);

  /*
Function Name: getTextElementValueById()
    1. get the balance-total by id
    2. get the innerText from the balance-total
    3. convert string value to a number
  */

  const previousBalanceTotal = getTextElementValueById("balance-total");

  /*
    Calculate new balance total 
  */

  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  /*
Function Name: setTextElementValueById()
    1. get the balance-total by id
    2. set the new balance Total
  */

  setTextElementValueById("balance-total", newBalanceTotal);
});
