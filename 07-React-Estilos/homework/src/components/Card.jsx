import React from 'react';
import styles from "./Card.module.css";
import stBut from "./Button.module.css";

export default function Card(props) {
  // acá va tu código o  linea anterior sust prop por { onClose, name, min, max, img } usando desctructuring
  const { onClose, name, min, max, img, weather } = props
  return (
    /*< div className={`${styles.card}${primary ? styles.primary : ""}`}>  */
    < div className={`${styles.card}`}>
      <div>
        <span className={styles.name}>{name}</span>
        < button className={`${stBut.card}`} onClick={onClose} > X </button >
        <div className={styles.temp}>
          <Temp label="Min" temp={min} />
          <Temp label="Max" temp={max} />
        </div>
        <p>{weather}</p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='imagen no encontrada' />
      </div >
    </div>
  );
};

/* malapractica */
function Temp({ label, temp }) {
  return (
    <div>
      <span>{label}</span>
      <span>{temp}°</span>
    </div>

  )
}