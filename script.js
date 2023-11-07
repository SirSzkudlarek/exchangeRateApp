const amountOne = document.querySelector('.amount-one');
const amountTwo = document.querySelector('.amount-two');
const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const money = document.querySelector('.amount-one');
const moneyConv = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');

const API_LINK = 'https://v6.exchangerate-api.com/v6';
const API_KEY = '/e35b6329ed6081fb619db5c3';
const pair = '/pair'

const getCurrencyRate = () => {
  const from = `/${currencyOne.value}`;
  const to = `/${currencyTwo.value}`;
  const amount = `/${money.value}`
  const URL = API_LINK + API_KEY + pair + from + to + amount;
  axios.get(URL)
  .then(res => {
    const convRate = res.data.conversion_rate;
    const convResult = Math.round(res.data.conversion_result * 100) / 100;
    moneyConv.value = convResult;
  })
}

const swapCurrency = () => {
  const placeholderValue = currencyOne.options[currencyOne.selectedIndex].value;
  currencyOne.value = currencyTwo.options[currencyTwo.selectedIndex].value;
  currencyTwo.value = placeholderValue;
  getCurrencyRate();
}

getCurrencyRate();

money.addEventListener('change', getCurrencyRate);
currencyOne.addEventListener('change', getCurrencyRate);
currencyTwo.addEventListener('change', getCurrencyRate);
swapBtn.addEventListener('click', swapCurrency); 