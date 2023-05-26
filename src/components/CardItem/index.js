import React from "react";
import './style.css';

export default function CardItem(props){
    return(
        <div className="card-item">
            <span>{props.dataInicio} - {props.dataFim}</span>

            <h2>{props.titulo}</h2>

            <span>{props.empresa}</span>

            <p>{props.texto}</p>
        </div>
    )
}