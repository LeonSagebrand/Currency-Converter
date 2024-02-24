import { Link } from "react-router-dom";

export default function CurrencyTable(props) {
console.log(props.currencyList);

    return (
        <div className="text-center">
            <h1 className="font-semibold text-3xl text-purple-700 font-serif">Our first 10 currencies</h1>
            <h2 className="font-semibold font-serif mt-2 text-purple-700 text-xl">Click on the currency for more information</h2>
            <table className="m-auto text-xl mt-10 text-left" style={{ borderSpacing: '0 10px' }}>
              <tr>
                <th style={{ padding: '10px' }}>Name</th>
                <th style={{ padding: '10px' }}>1 USD</th>
                <th style={{ padding: '10px' }}>Amount x 100</th>
              </tr>

  {props.currencyList.length > 0 && 
    props.currencyList.slice(0, 10).map((currency) => (
      <tr key={currency.name}>
        <td className="text-purple-700" style={{ padding: '10px' }}><Link to={currency.name}>{currency.name}</Link></td>
        <td style={{ padding: '10px' }}>{currency.rate}</td>
        <td style={{ padding: '10px' }}>{currency.rate * 100}</td>
      </tr>
    ))
  }
</table>

        </div>
    )

}