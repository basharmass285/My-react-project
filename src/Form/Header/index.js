import React from "react";

const StyledHeader = {
  maxWidth: "300px",
  fontSize: "36px",
  textAlign: "center",
  fontWeight: 600,
  color: "white",
  margin: "8px auto",
  padding: "32px 0 0",
  lineHeight: "0.88",
};

const Header = () => (
  <div style={StyledHeader}>
    Currency Converter
  </div>
);

export default Header;
