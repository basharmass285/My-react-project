const baseCurrency = "ILS"
const currencies = [
  "CAD",
  "EUR",
  "GBP",
  "ILS",
  "USD"
];

const timestamp = new Date().getTime();

export const API = `
https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_nggkZp8KQiLa3BGY2FbukrFGe5QH4GZiQin53aTB&currencies=EUR%2CUSD%2CCAD%2CILS%2CGBP&symbols=${currencies}&base=${baseCurrency}&_=${timestamp}
`;
