import React from "react";
import './style.css';

export default function Topo(props){
    let logo = 'assets/logo.png';

    return(
        <section className="topo-container">
            <div className="topo-box">
                <img className="topo-logo"  src={logo} alt="logo"/>

                <button className="topo-btn" onClick={props.button}><img src={props.astro} alt="astro"/></button>
            </div>         
        </section>
    )
}