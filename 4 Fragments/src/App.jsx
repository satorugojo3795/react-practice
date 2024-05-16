import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  let foodItems = ['dal','roti','sabzi'];
  return (
    <React.Fragment>
      <h1>List Items</h1>
      <ErrorMessage items={foodItems}/>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  )
}

export default App;
