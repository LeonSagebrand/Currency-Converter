import { useState } from "react";

export default function Converter(props) {
  let [fromCurrencyRate, setFromCurrencyRate] = useState(0);
  let [toCurrencyRate, setToCurrencyRate] = useState(0);
  let [amount, setAmount] = useState(0);
  let [result, setResult] = useState(0);

  function convertCurrencies() {
    let calculatedResult = (amount * toCurrencyRate) / fromCurrencyRate;

    setResult(calculatedResult);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-purple-700 m-auto p-10 w-[40%] gap-4 rounded-lg">
      <div className="flex items-end justify-between w-[100%]">
        <div className="flex flex-col items-start">
          <label className="text-yellow-400">From</label>
          {props.currencyList.length > 0 && (
            <select
              onChange={(e) => setFromCurrencyRate(e.target.value)}
              className="bg-yellow-400 text-purple-950"
            >
              <option selected disabled>
                Select currency
              </option>
              {props.currencyList.map((currency) => (
                <option key={currency.name} value={currency.rate}>
                  {currency.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <input
          className="py-1 px-2 cursor-pointer rounded-lg bg-yellow-400 text-purple-950"
          type="button"
          value={"Convert"}
          onClick={convertCurrencies}
        />
        <div className="flex flex-col items-start">
          <label className="text-yellow-400">To</label>
          {props.currencyList.length > 0 && (
            <select
              onChange={(e) => setToCurrencyRate(e.target.value)}
              className="bg-yellow-400 text-purple-950"
            >
              <option selected disabled>
                Select currency
              </option>
              {props.currencyList.map((currency) => (
                <option key={currency.name} value={currency.rate}>
                  {currency.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="flex items-end justify-between w-[100%]">
        <div className="flex flex-col items-start">
          <label className="text-yellow-400">Amount</label>
          <input
            className="w-60 border-0 bg-yellow-400 text-purple-700"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label className="text-yellow-400">Result: {result}</label>
        </div>
      </div>
    </div>
  );
}
