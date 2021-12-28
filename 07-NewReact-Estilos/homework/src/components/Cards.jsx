import React from 'react';
import Card from './Card';

import styleCard from './cards.css'
//import styleSB from './SearchBar.module.css'
//recive {cities} stead of props
export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map  
  return (
    <div className={styleCard.cards}>{//recorre el array de cities y devuelve una lista de cards
      cities.map((city) => {
        return (
            <Card
              max={city.main.temp_max}
              min={city.main.temp_min}
              name={city.name}
              img={city.weather[0].icon}
              onClose={() => alert(city.name)}
            />
            )
        })
    }
    </div>
  )
};