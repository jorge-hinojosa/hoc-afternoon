import React from "react";
// import CurrencyDisplay from "./CurrencyDisplay";

const withCurrency = Component => {
  return class Currency extends React.Component {
    constructor() {
      super();
      this.state = {
        currencyChosen: false,
        selectedCurrency: "Select Currency",
        amount: 0
      };
    }
    increment = () => {
      this.setState(prevState => {
        return {
          amount: prevState.amount + 1
        };
      });
    };
    decrement = () => {
      return (
        this.state.amount > 0 &&
        this.setState(prevState => {
          return {
            amount: prevState.amount - 1
          };
        })
      );
    };
    handleOptionSelect = e => {
      const userValue = e.target.value;
      // console.log(userValue);
      this.setState(() => {
        return {
          selectedCurrency: userValue,
          currencyChosen: userValue === "Select Currency" ? false : true
        };
      });
    };
    render() {
      console.log(this.state);
      const currencyData = [
        { name: "Japanese Yen", symbol: "¥", rate: 113.6, id: 0 },
        { name: "British Pound", symbol: "£", rate: 0.77, id: 1 },
        { name: "Canadian Dollar", symbol: "CAD", rate: 1.32, id: 2 },
        { name: "Mexican Peso", symbol: "Mex$", rate: 20.41, id: 3 },
        { name: "Swiss Franc", symbol: "Fr.", rate: 1.01, id: 4 }
      ];
      const currencyOptions = currencyData.map((currency, i) => {
        return (
          <option key={i} value={i}>
            {currency.name}
          </option>
        );
      });

      return (
        <div>
          <select
            value={this.state.selectedCurrency}
            onChange={this.handleOptionSelect}
          >
            <option value={"Select Currency"}>Select Currency</option>
            {currencyOptions}
          </select>
          <div>
            <button onClick={this.increment} className="add">
              +
            </button>
            <button onClick={this.decrement} className="minus">
              -
            </button>
          </div>
          {this.state.currencyChosen ? (
            <Component
              {...this.props}
              currency={currencyData[this.state.selectedCurrency]}
              amount={this.state.amount}
            />
          ) : (
            <p>Please select currency</p>
          )}
        </div>
      );
    }
  };
};

export default withCurrency;
