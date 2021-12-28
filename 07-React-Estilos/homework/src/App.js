import React from 'react';
//import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

import Styles from "./components/App.module.css";
const apiKey = '6a082e2ce09eb512e14f9ee388bad26c';

export default function App() {

  const [cities, setCities] = useState([]);

  return (

    <div className={Styles.app}>
      <div className={Styles.bkg} />
      <div className={Styles.container}>
        <div> 
          {/******** */}
          <SearchBar
            onSearch={(ciudad) => alert(ciudad)}
          />
          {/************* */}
        </div>
        <div className={Styles.citiesContainer}>
          <Card
            max={Cairns.main.temp_max}
            min={Cairns.main.temp_min}
            name={Cairns.name}
            weather={Cairns.weather[0].description}
            img={Cairns.weather[0].icon}
            onClose={() => alert(Cairns.name)}
          />
        </div>
        <hr />
        <div>
          <Cards cities={data}
          />
        </div>
        <hr />


      </div>
    </div>
  );
}

//export default App;
