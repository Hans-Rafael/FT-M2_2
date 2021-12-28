import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';

import data, { Londres } from './data.js';
import CardClasses from './classComponentss/CardClasses';
import CardsClasses from './classComponentss/CardsClasses';
import SearchBarClass from './classComponentss/SearchBarClasses';

function App() {
  return (
    <div className="App">
            <div>
        <SearchBarClass
          onSearch={(evento)=>alert('Digo Alerta !!')}
        />
      <hr />
      </div>
      <div>
        <CardClasses
          max={Londres.main.temp_max}
          min={Londres.main.temp_min}
          name={Londres.name}
          weather={Londres.weather[0].description}
          img={Londres.weather[0].icon}
          onClose={() => alert(Londres.name)}     
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
    </div>
  );
}

export default App;
