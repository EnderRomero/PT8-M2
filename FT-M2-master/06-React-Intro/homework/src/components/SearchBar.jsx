import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return <div className={`${s.continer} ${s.bgColor}`}>
    <input className={`${s.inputBox} ${s.heightComun}`} type="text" placeholder='Ciudad...' />
    <button className={`${s.searchButton} ${s.bgColor} ${s.heightComun}`} onClick={() => props.onSearch('Buscando Ciudad...')}>Agregar</button>
  </div>
};