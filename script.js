const initialPrice = document.querySelector("#initial-price");
const numberOfStocks = document.querySelector("#number-of-stocks");
const currentPrice = document.querySelector("#current-price");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");

function validateInput() {
  if (
    isNaN(Number(initialPrice.value)) ||
    initialPrice.value === "" ||
    isNaN(Number(numberOfStocks.value)) ||
    numberOfStocks.value === "" ||
    isNaN(Number(currentPrice.value)) ||
    currentPrice.value === ""
  ) {
    output.innerText = "Please enter a valid number!";
    return false;
  }

  if (numberOfStocks.value <= 0) {
    output.innerText = "The stocks qty should be atleast 1";
    return false;
  }
  return true;
}

function calculateProfitLoss() {
  if (!validateInput()) {
    return;
  }

  const totalInvestment = initialPrice.value * numberOfStocks.value;
  const currentAmount = currentPrice.value * numberOfStocks.value;

  if (currentAmount < totalInvestment) {
    const lossAmount = totalInvestment - currentAmount;
    const lossPercentage = (lossAmount / totalInvestment) * 100;

    output.innerText = `The loss is of Rs. ${lossAmount.toFixed(
      3
    )} and the loss percentage is ${lossPercentage.toFixed(3)}%`;
  } else {
    const profitAmount = currentAmount - totalInvestment;
    const profitPercentage = (profitAmount / totalInvestment) * 100;

    output.innerText = `Yay!! The profit is of Rs. ${profitAmount.toFixed(
      3
    )} and the profit percentage is ${profitPercentage.toFixed(3)}%`;
  }
}

btnCalculate.addEventListener("click", calculateProfitLoss);
