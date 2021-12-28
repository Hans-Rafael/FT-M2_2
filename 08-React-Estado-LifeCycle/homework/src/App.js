import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import style from './components/App.module.css';
/**********m9 */
import { Route } from 'react-router-dom';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';

export default function App() {
  const apiKey = '6a082e2ce09eb512e14f9ee388bad26c';

  const [cities, setCities] = useState([]);

  /************ */
  function onSearch(ciudad) {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          console.log("recurso *******", recurso);//////************ */
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            feels_like: recurso.main.feels_like,
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            weatherText: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });

  }
  /**********m9 */


  /************** */
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
   function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  } 


  return (
    <div className={style.app}>
      <div className="App">
        <div className={style.bkg} >
          <div className={style.container}>
            <h2>Weather App with Redux, search a city</h2>
            <Route path={'/'} render={() => <Nav onSearch={onSearch} />} />
            <Route exact path='/'
              render={({ match }) => <Cards cities={cities} onClose={onClose} />}
            />
            <Route path='/about' component={About} />
            {/**pruebo con onclose y filter misma funcion creada distinta */}
            <Route path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />} />
          </div>
        </div>
      </div>
    </div >
  );

}
