const initialPrice = document.querySelector("#initial-price");
const numberOfStocks = document.querySelector("#number-of-stocks");
const currentPrice = document.querySelector("#current-price");
const btnCalculate = document.querySelector("#btn-calculate");
const output = document.querySelector("#output");
const body = document.querySelector("body");

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

function changeStyleLoss() {
  body.style.backgroundColor = "#F87171";
  initialPrice.style.border = "2px solid #DC2626";
  numberOfStocks.style.border = "2px solid #DC2626";
  currentPrice.style.border = "2px solid #DC2626";
  btnCalculate.style.backgroundColor = "#F87171";
  btnCalculate.style.border = "2px solid #DC2626";
}

function changeStyleProfit() {
  body.style.backgroundColor = "#6EE7B7";
  initialPrice.style.border = "2px solid green";
  numberOfStocks.style.border = "2px solid green";
  currentPrice.style.border = "2px solid green";
  btnCalculate.style.backgroundColor = "background-color: #34d399";
  btnCalculate.style.border = "none";
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
    changeStyleLoss();
  } else {
    const profitAmount = currentAmount - totalInvestment;
    const profitPercentage = (profitAmount / totalInvestment) * 100;

    output.innerText = `Yay!! The profit is of Rs. ${profitAmount.toFixed(
      3
    )} and the profit percentage is ${profitPercentage.toFixed(3)}%`;
    changeStyleProfit();
  }
}

btnCalculate.addEventListener("click", calculateProfitLoss);
