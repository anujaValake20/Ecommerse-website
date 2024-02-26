import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Productlist from "./components/Productlist";
// import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/Searchbar";
import React, { Suspense } from "react";
import { Provider } from 'react-redux';
import Store from './store/Store';
import Checkout from "./components/Checkout";

function App() {
  const Productlist=React.lazy(()=>import ("./components/Productlist"));
  const ProductDetails=React.lazy(()=>import ("./components/ProductDetails"));

  return (
    <>
     <Provider store={Store}>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Productlist />}></Route>

          <Route
            path="/ProductDetails/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/SearchBar" element={<SearchBar />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
  
    </Provider>
    </>
  );
}

export default App;
