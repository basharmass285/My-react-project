import React from "react";

const StyledResult = {
  padding: "10px 0 15px",
  textAlign: "center",
  fontSize: "22px",
  fontWeight: 700,
  color: "dodgerBlue",
  margin: "22px auto 28px",
  lineHeight: 1.4
};

const ResultFrom = {
  fontWeight: 300,
  color: "scorpion"
};

const BreakingCaption = {
  wordBreak: "break-word"
};

const Result = ({ result }) => (
  <>
    {!result ? (
      <div style={StyledResult}>
        <span style={ResultFrom}>
          <span style={BreakingCaption}>
            0.00
          </span>
          &nbsp;EUR = {""}
        </span>
        <span style={BreakingCaption}>
          0.00
        </span>
        &nbsp;ILS
      </div>
    ) : (
      <div style={StyledResult}>
        <span style={ResultFrom}>
          <span style={BreakingCaption}>
            {result.sourceAmount.toFixed(2)}
          </span>
          &nbsp;{result.currencyFrom}&nbsp;= {""}
        </span>
        <span style={BreakingCaption}>
          {result.calculatedAmount.toFixed(2)}
        </span>
        &nbsp;{result.currencyTo}
      </div>
    )}
  </>
);

export default Result;
