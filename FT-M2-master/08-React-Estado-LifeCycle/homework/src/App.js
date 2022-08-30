import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";

export default function App() {
  
  const [cities, setCities] = useState([]);

  function onSearch (city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`).then(r => r.json()).then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            name: recurso.name,
            key: recurso.id
          };
          setCities(oldCities => [...cities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });  
  }
  
  function onClose (id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      {/* Tu código acá: */}
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}
