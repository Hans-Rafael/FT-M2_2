import React from 'react';
import Style from './SearchBar.css';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return <div className={Style.input}>
    <input className={Style.color} type="text" placeholder="City..." />
      <button className={Style.button} onClick={(evento) => {
        console.log(evento)
        onSearch('algun dia te pondre el valor')
      }
    }    >
        Buscar
      </button>
    
  </div>
};