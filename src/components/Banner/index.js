import React from "react";
import './style.css';

export default function Banner(){
    let bannerImage = 'assets/banner.png'

    return(
        <section className="banner-container">
            <div className="banner-box">
                <div className="box-bnr banner-img">
                    <img src={bannerImage} alt="banner-img"/>
                </div>

                <div className="box-bnr banner-text global-padding">
                    <span>BRANDING /  UI /  UX /  TECNOLOGIA</span>
                    <h1>Agência de Branding</h1>
                    <h1>e design digital</h1>
                </div>
            </div>
        </section>
    )
}