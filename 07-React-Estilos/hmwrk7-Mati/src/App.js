import React, { useState } from 'react';
import AppStyle from './App.module.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import Contador from './components/Contador'
import ContadorFuncional from './components/ContadorFuncional';
import ContadorDataFlow from './components/ContadorDataFlow';
import Personajes from './components/Personajes';

function App() {
  const [personajes, setPersonajes] = useState([])

  function traerPersonajes() {
    fetch('https://rickandmortyapi.com/api/character')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      setPersonajes(json.results)
    })

  }
  return (
    
    <div>
      <ContadorDataFlow />
      {/* Contador de clase:
      <Contador initialValue={5}/>
      Contador Funcional:
      <ContadorFuncional  initialValue={5}/> */}
      <button onClick={traerPersonajes}>traer personajes</button>
      <Personajes personajes={personajes} />
    </div>
    // <section className={AppStyle.App}>
    //   <header className={AppStyle.header}>
    //     <SearchBar
    //       onSearch={(ciudad) => alert(ciudad)}
    //     />
    //   </header>
    //   <Cards
    //     cities={data}
    //   />
    // </section>
  );
}

export default App;
