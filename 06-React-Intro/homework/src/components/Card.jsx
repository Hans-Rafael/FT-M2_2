import React from 'react';
import { primaryColor } from '../constants';

let divStyle = {
  backgroundColor: "lightblue",
  width: "100%"
}

let otroStyle = {
  ...divStyle,
  height: "500px"
}

function selectColor(booleano) {
  if (booleano) {
    return {
      backgroundColor: primaryColor
    }
  }
  return {
    backgroundColor: "brown"
  }
}
export default function Card(props) {
  // acá va tu código
  const {
    max,
    min,
    name,
    img,
    onClose
  } = props
  return (
    <div >
      <button onClick={onClose}>X</button>
      <h3 style={divStyle}>{name}</h3>
      <div>
        <div style={selectColor(true)}>
          <div>Min</div>
          <div>{min}</div>
        </div>
        <div>
          <div style={selectColor(false)}>Max</div>
          <div>{max}</div>
        </div>
        <div style={otroStyle}>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        </div>
      </div>
    </div>
  )
};