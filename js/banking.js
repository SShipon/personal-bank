function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const inputTextValue = input.value;
  const amountValue = parseFloat(inputTextValue);
  // clear input text this remove rest
  input.value = "";
  return amountValue;
}

function updateTotalField(totalFiledId  ,amount) {
 // debugger;
  const totalElement = document.getElementById(totalFiledId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  // console.log(depositTotalText);
  totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
  
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
  if (isAdd == true) {
       balanceTotal.innerText = balanceTotalAmount + amount;
  }
  else {
     balanceTotal.innerText = balanceTotalAmount - amount;
  }
}
//deposit balance
document.getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
      updateTotalField("deposit-total", depositAmount);
      updateBalance(depositAmount, true);
    }
     
   
  });

//caseOut withdraw
document.getElementById("withdraw-button")
  .addEventListener("click", function () {
    
    const withdrawAmount = getInputValue("withdraw-input");
    if (withdrawAmount > 0) {
      updateTotalField("withdraw-total", withdrawAmount);
    updateBalance(withdrawAmount, false)
    }
  
  });
