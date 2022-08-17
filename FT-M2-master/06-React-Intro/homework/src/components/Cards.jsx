import React from 'react';
import Card from './Card';
import cities from '../data';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <div>
    {
    cities.map((city, i) => <Card name={city.name} min={city.main.temp_min} max={city.main.temp_max} img={city.weather[0].icon} onClick={city.onClick} key={i} />)
    }
  </div>
};