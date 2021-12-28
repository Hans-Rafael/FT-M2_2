import React from 'react';
import Card from './Card'
import style from './Cards.module.css'
import styleSB from './SearchBar.module.css'
export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map

  //style ES UN OBJETO
  /*
    nombreClaseComoLaDefini: nombreDeLaClaseRealCreadaEnWebpack
  */
  console.log(style)
  console.log(styleSB)
  return <div className={ `${style.gris} ${styleSB.unId}` }>
      {
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
};