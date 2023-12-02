import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

const App = () => {
    return (
        <>
        <Router>
        <Header/>
        <Routes>
        <Route path="/" element={<ProductListing/>}  > </Route>
        <Route path="/product/:productId" element={<ProductDetails />}  > </Route>
        <Route> 404 Not Found! </Route>
        </Routes>
        </Router>
        </>
    )
}
export default App;

