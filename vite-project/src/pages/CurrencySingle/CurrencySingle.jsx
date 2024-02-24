import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CurrencySingle(props) {
  let params = useParams();

  console.log(params);

  let currentCurrency = props.currencyList.find(
    (currency) => (currency.name === params.name)
  );

  console.log(currentCurrency.name);

  return (
    <>
      <Header />
      <main className="bg-yellow-400 flex">
          <div className="text-center space-y-5">
              <h1 className="text-3xl mt-10 mb-5">{currentCurrency.name}</h1>
              <span className="text-xl">{currentCurrency.rate} = 1 USD</span>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
                tempore voluptatum vel quae nemo libero porro quisquam repellat
                consequatur nostrum esse voluptatem a culpa, provident illo? Reiciendis
                fugiat fuga placeat.
              </p>
          </div>
      </main>
      <Footer />
    </>
  );
}
