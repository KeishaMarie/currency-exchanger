import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchangerService from '../currency-exchanger-service.js';

// Business Logic 
function currencyExchanger(userInput, currencySelected) {
  CurrencyExchangerService.currencyExchanger(userInput, currencySelected)
    .then(function(response) {
      if (response.conversion_rates[currencySelected]) {
        printElements(response, userInput, currencySelected);
      } else {
        printError(response, userInput, currencySelected);
      }
    });
}


// UI Logic
function printElements(response, userInput, currencySelected) {
  document.querySelector('#output').innerText = `The exchange rate for ${userInput} USD is ${(response.conversion_rates[currencySelected] * userInput)} ${currencySelected}.`;
}

function printError(response, userInput) {
  document.querySelector('#output').innerText = `Unable to access currency exchange data for ${userInput} USD. ${response}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  let userInput = document.querySelector('#userInput').value;
  let currencySelected = document.querySelector('#currencySelected').value;
  currencyExchanger(userInput, currencySelected);
}

window.addEventListener("load", function() {
  document.querySelector('form#currencyForm').addEventListener("submit", handleFormSubmission);
});
