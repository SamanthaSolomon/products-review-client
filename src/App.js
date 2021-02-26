import './App.css';
import Products from "./Components/Products"
import React from 'react'
import { Route } from 'react-router-dom'


function App() {

  return (
    <div>
      <h1>Products & Reviews</h1>
      <Route render={(rp) => 
      <Products {...rp}/>}/>
    </div>
  );
}

export default App;
