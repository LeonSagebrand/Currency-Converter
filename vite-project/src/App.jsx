import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import CurrencySingle from "./pages/CurrencySingle/CurrencySingle";

// REACT

import React, { useEffect, useState } from "react";

// API

import { fetchApi } from "./api/api";


function App() {
  const [currencyData, setCurrencyData] = useState({})
  let [currencyList, setCurrencyList] = useState([])

  
  useEffect(() => {
    fetchApi(setCurrencyData)  
  }, []);  


  useEffect(() => {
    setCurrencyList([]);
    for (const currency in currencyData.rates) {
      setCurrencyList(prevList => [
        ...prevList,
        { name: currency, rate: currencyData.rates[currency] }
      ]);
    }
  }, [currencyData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home currencyList={currencyList}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/:name" element={<CurrencySingle currencyList={currencyList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;