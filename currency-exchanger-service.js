export default class CurrencyExchangerService {
  static currencyExchanger() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          return response.json()
          .then(function(apiErrorMessage) {
            const errorMessage = `${response.status} ${response.statusText} ${apiErrorMessage["error-type"]}`;
            throw new Error(errorMessage);
          });
        } else {
          return response.json();
        }
       })
       .catch(function(error) {
          return error;
      });
  }
}
