import React from 'react';
//import ReactDom from 'react-dom'; // no lo use
import style from './card.css';

export default class Card extends React.Component {
  // acá va tu código 
  render() {
    var { min, max, weather, img, onClose } = this.props;//declaracion de variables dentro del render
    return <div>
      <button className={style.btn} onClick={onClose}>X</button>
      {this.props.name}
      <div className={style.card}>
        <div>
          min: {min}
        </div>
        <div>
          max: {max}
        </div>
        <p>{weather}</p>

        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} />

      </div>
    </div>
  }
};