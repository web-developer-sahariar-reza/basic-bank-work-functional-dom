document.getElementById("btn-withdraw").addEventListener("click", function () {
  /* 
  Function Name: getInputValueById()
      1. get the withdraw-field id
      2. get the value from input field
      3. convert string value to a number
  */

  const newwithdrawAmount = getInputValueById("withdraw-field");

  /*
  Function Name: getTextElementValueById()
      1. get the balance-total by id
      2. get the innerText from the balance-total
      3. convert string value to a number
    */

  const previousBalanceTotal = getTextElementValueById("balance-total");

  if (newwithdrawAmount > previousBalanceTotal) {
    alert("You don't have sufficient balance");
    return;
  } else {
    /*
  Function Name: getTextElementValueById()
      1. get the withdraw-total by id
      2. get the innerText from the withdraw-total
      3. convert string value to a number
    */

    const previouswithdrawTotal = getTextElementValueById("withdraw-total");

    /*
          Calculate new withdraw total 
        */

    const newwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;

    /*
      Function Name: setTextElementValueById()
          1. get the withdraw-total by id
          2. set the new withdraw Total
        */

    setTextElementValueById("withdraw-total", newwithdrawTotal);

    /*
          Calculate new balance total 
        */

    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;

    /*
      Function Name: setTextElementValueById()
          1. get the balance-total by id
          2. set the new balance Total
        */

    setTextElementValueById("balance-total", newBalanceTotal);
  }
});
