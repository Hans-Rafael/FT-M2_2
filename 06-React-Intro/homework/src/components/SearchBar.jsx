import React from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return <div >
    <input
      
      placeholder="Busca tu ciudad..."
      type="text"
    />
    <button  onClick={(evento) => {
      console.log(evento)
      onSearch('algun dia te pondre el valor')
    }}>
      Buscar
    </button>
  </div>
};