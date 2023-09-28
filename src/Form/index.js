import { useState } from "react";
import Result from "./Result";
import Rate from "./Rate";
import Failure from "./Failure";
import Header from "./Header";
import Clock from "./Clock";
import { useAPIRates } from "./useAPIRates";
import { currencyLabels } from "./currencyLabels";

const styleFieldset = {
  background: "white",
  border: "solid white",
  borderRadius: "10px",
  padding: "16px 13% 10px",
};

const styleContainer = {
  padding: "24px 0 24px",
  display: "grid",
  gridTemplateColumns: "80px 1fr",
  gridGap: "34px",
};

const styleCurrenciesContainer = {
  padding: "8px 0",
};

const styleLabelText = {
  fontSize: "15px",
  fontWeight: 500,
  color: "scorpion",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const styleInput = {
  color: "dodgerBlue",
  background: "white",
  border: "0",
  borderBottom: "2px solid dodgerBlue",
  padding: "13px",
  width: "100%",
  fontSize: "18px",
  fontWeight: 600,
  outline: "none",
  textAlign: "center",
};

const styleSelect = {
  border: "1.5px solid silver",
  borderRadius: "6px",
  width: "100%",
  padding: "10px",
  fontSize: "13px",
  fontWeight: 600,
  color: "tundora",
  background: "white",
  outline: "dodgerBlue",
  textAlign: "center",
};

const styleButtonsContainer = {
  padding: "0 0 18px",
};

const styleButton = {
  display: "block",
  cursor: "pointer",
  width: "90%",
  height: "55px",
  color: "white",
  border: "1.5px solid blue",
  borderRadius: "50px",
  background: "blue",
  fontWeight: 600,
  fontSize: "13px",
  margin: "12px auto",
};

const styleResetButton = {
  color: "blue",
  borderRadius: "50px",
  border: "1.5px solid blue",
  background: "white",
  fontWeight: 700,
  transition: "all 0.5s ease",
};

const Form = () => {
  const { APIRates, error } = useAPIRates();

  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("ILS");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const calculateRate = (currencyFrom, currencyTo) => {
    if (!APIRates.rates) {
      return 0;
    }

    const rateFrom = 1 / APIRates.rates[currencyFrom];
    const rateTo = 1 / APIRates.rates[currencyTo];

    return rateFrom / rateTo;
  };

  const calculateResult = (currencyFrom, currencyTo, amount) => {
    const rate = calculateRate(currencyFrom, currencyTo);

    setResult({
      sourceAmount: +amount,
      calculatedAmount: rate * amount,
      currencyFrom,
      currencyTo,
    });
  };

  const rate = calculateRate(currencyFrom, currencyTo);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyFrom, currencyTo, amount);
  };

  const onReset = () => {
    setCurrencyFrom("EUR");
    setCurrencyTo("ILS");
    setAmount("");
  };

  if (error) {
    return <Failure />;
  }

  return (
    <>
      <Header />
      <Clock />
      <form onSubmit={onSubmit}>
        <fieldset style={styleFieldset}>
          <label>
            <div style={styleContainer}>
              <span style={styleLabelText}>Amount</span>
              <input
                style={styleInput}
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                type="number"
                name="amount"
                step="0.01"
                min="0"
                placeholder="0.00"
              />
            </div>
          </label>
          <label>
            <div style={styleCurrenciesContainer}>
              <span style={styleLabelText}>From</span>
              <select
                style={styleSelect}
                name="currencyFrom"
                value={currencyFrom}
                onChange={({ target }) => setCurrencyFrom(target.value)}
              >
                {!!APIRates.rates &&
                  Object.keys(APIRates.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currencyLabels[currency]}
                    </option>
                  ))}
              </select>
            </div>
          </label>
          <label>
            <div style={styleCurrenciesContainer}>
              <span style={styleLabelText}>To</span>
              <select
                style={styleSelect}
                name="currencyTo"
                value={currencyTo}
                onChange={({ target }) => setCurrencyTo(target.value)}
              >
                {!!APIRates.rates &&
                  Object.keys(APIRates.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currencyLabels[currency]}
                    </option>
                  ))}
              </select>
            </div>
          </label>
          <Rate currencyFrom={currencyFrom} currencyTo={currencyTo} rate={rate} />
          <Result result={result} />
          <div style={styleButtonsContainer}>
            <button style={styleButton} type="submit">
              Convert
            </button>
            <button style={styleResetButton} onClick={onReset}>
              Reset
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
