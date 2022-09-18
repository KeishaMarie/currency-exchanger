import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {CurrencyExchangerService} from './currency-exchanger-service.js';

// Business Logic 
function currencyExchanger() {
  CurrencyExchangerService.currencyExchanger()
    .then(function(response) {
      if (response.conversion_rates) {
        printElements(response);
      } else {
        printError(response);
      }
    });
}


// UI Logic