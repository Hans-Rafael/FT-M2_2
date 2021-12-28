import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({ cities, onClose }) {
  return cities ? (
    <div className='cards'>
      {cities.map(c => <Card
        max={c.max}
        feels_like={c.feels_like}
        min={c.min}
        name={c.name}
        img={c.img}
        weatherText={c.weatherText}
        onClose={() => onClose(c.id)}
        id={c.id}
      />)}
    </div>
  ) : (
    <div>Sin ciudades</div>
  )
}
