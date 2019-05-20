import React from "react";
import withCurrency from "./CurrencyConverter";

function CurrencyDisplay(props) {
  console.log(props);
  return (
    <p>
      US Dollar ${props.amount.toFixed(2)} - {props.currency.name}
      <br />
      {props.currency.symbol}
      {(props.amount * props.currency.rate).toFixed(2)}
    </p>
  );
}

export default withCurrency(CurrencyDisplay);
