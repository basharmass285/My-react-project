import React from "react";

const styledRate = {
  fontSize: "14px",
  fontWeight: 600,
  padding: "28px 0 8px",
  margin: "0",
  color: "dodgerBlue",
};

const Rate = ({ currencyFrom, currencyTo, rate }) => (
  <p style={styledRate}>
    1 {currencyFrom} = {rate.toFixed(2)} {currencyTo}
  </p>
);

export default Rate;
