// IMPORTS

// COMPONENTS

import Header from "../../components/Header";
import Converter from "./components/Converter";
import CurrencyTable from "./components/CurrencyTable";
import Footer from "../../components/Footer";


export default function Home(props) {


  return (
    <>
      <Header />
      <main className="flex flex-col justify-center gap-12 bg-yellow-400">
        <div className="mt-10 flex justify-center">
          <h1 className="text-3xl font-serif text-purple-700 font-semibold">Currency Converter</h1>
        </div>
        <Converter currencyList={props.currencyList} />
        <CurrencyTable currencyList={props.currencyList}/>
      </main>
      <Footer />
    </>
  );
}
