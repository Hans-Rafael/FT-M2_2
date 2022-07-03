import React from 'react';
import { Card, button } from './css/Card.module.css';


function selectColor(booleano) {
  if (booleano) {
    return {
      backgroundColor: "black",
    }
  }
  return {
    backgroundColor: "lightgray",
  }
}

export default function Card(props) {
  // acá va tu código
    const { max, min, name, img, onClose } = props;//por destructuring


  return <div style={selectColor(true)}>
    <button onClick={onClose} style={button}> X </button>
    <h2>{name}</h2>
    <div>
      <>Min</>
      <h3>{min}°</h3>
      <>Max</>
      <h3>{max}°</h3>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img for weather" />
    </div>
  </div>
};