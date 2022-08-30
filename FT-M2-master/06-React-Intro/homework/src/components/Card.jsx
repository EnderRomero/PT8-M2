import React from "react";
import s from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={`${s.cardBorder}`}>
      <div className={`${s.buttonContiner}`}>
        <button className={`${s.closeButton}`} onClick={props.onClose}>
          X
        </button>
      </div>

      <h2>{props.name}</h2>

      <div className={`${s.info}`}>
        <div>
          <h3>Min</h3>
          <h3>{Math.floor(props.min)}°</h3>
        </div>

        <div>
          <h3>Max</h3>
          <h3>{Math.floor(props.max)}°</h3>
        </div>

        <img className={`${s.imageSize}`}
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt=""
        />
      </div>
    </div>
  );
}
