import './App.css';
import Products from "./Components/Products"
import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'


function App() {

//api call to get products
useEffect(()=>{
  const getAllProducts = async () => {
      try{
          const res = await fetch('http://localhost:3000/products')
          const json = await res.json()
          console.log('all products - json', json)
      } catch (error){
          console.error(
          );
      }
  }
  getAllProducts()
},[])


  return (
    <div>
      <h1>Products & Reviews</h1>
      <Products />
    </div>
  );
}

export default App;
