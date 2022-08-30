import React from "react";
import Card from "./Card";
import cities from "../data";
import s from "./Cards.module.css"

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if (!props.cities) {
    return <h1>No ha ciudades disponibles</h1>;
  }

  return (
    <div className={s.board}>
      {cities.map(city => (
        <Card
          name={city.name}
          min={city.main.temp_min}
          max={city.main.temp_max}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={city.id}
        />
      ))}
    </div>
  );
}
