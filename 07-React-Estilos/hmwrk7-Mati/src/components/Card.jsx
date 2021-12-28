import React from 'react';
import CardStyle from './Card.module.css'
export default function Card(props) {
  // acá va tu código
  const {
    max,
    min,
    name,
    img,
    onClose
  } = props

  return( 
    <div className={CardStyle.cardContainer} >
      <button className={CardStyle.closeButton} onClick={onClose}>X</button>
      <h4 className={CardStyle.title}>{name}</h4>
      <div className={CardStyle.temperatureContainer}>
        <div className={CardStyle.temperatureElement}>
          <div>Min</div>
          <div>{min}</div>
        </div>
        <div className={CardStyle.temperatureElement}>
        <div >Max</div>
          <div>{max}</div>
        </div>
        <div className={CardStyle.temperatureElement}>
          <img src={ `http://openweathermap.org/img/wn/${img}@2x.png` } alt="" />
        </div>
      </div>
    </div>
    )
};