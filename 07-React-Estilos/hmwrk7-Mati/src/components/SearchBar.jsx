import React from 'react';
import Style from './SearchBar.module.css'
export default function SearchBar({onSearch}) {
  // acá va tu código
  return <form>
    <input
    className={Style.searchInput}
      placeholder="Busca tu ciudad..."
      type="text"
      />
    <button className={Style.searchButton} onClick={(evento) =>{ 
      console.log(evento)
      onSearch('algun dia te pondre el valor')
      }}>
      Buscar
    </button>
  </form>
};