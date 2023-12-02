import "../index.css"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/action/actions';

function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((error) => { console.log("Error:" ,error)})
    dispatch(setProducts(response.data));
    console.log(response.data);
  } 

  useEffect( () => { fetchProducts()} , [])

  console.log("Products: ", products);
  return (
    <div className='ui grid container'>
      <h1> Product Listing </h1>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing;

