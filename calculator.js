window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const val = {amount: 20000, years: 5, rate: 5};
  const defaultAmount = document.getElementById('loan-amount');
  defaultAmount.value = val.amount;
  const defaultYears = document.getElementById('loan-years');
  defaultYears.value = val.years;
  const defaultRate = document.getElementById('loan-rate');
  defaultRate.value = val.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let amount = values.amount;
  let yearsOfPayment = values.years;
  let rate = values.rate;
  const interestRate = (rate / 100) / 12;
  const numOfPayments = yearsOfPayment * 12;
//monthly math
  const top = amount * interestRate;
  const bottom = (1 - Math.pow((1 + interestRate), -numOfPayments));
  return  (top / bottom).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
let payment = document.getElementById('monthly-payment');
let newP = document.createElement('p');
newP.innerText = `$${monthly}`;
payment.appendChild(newP);
}
