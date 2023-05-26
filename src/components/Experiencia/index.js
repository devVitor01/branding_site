import React from "react";
import './style.css';

import CardItem from "../CardItem";
    let dark = 'dark-card-item';
    let light = 'light-card-item'


export default function Experiencia(props){
    return(
        <section className="experiencias-container" id={props.tema ? light : dark}>
            <div className="experiencias-box  global-padding">
                <h1>Experiências De Trabalho</h1>

                <div className="linha"></div>

                <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>

                <div className="card-item-container">
                    <CardItem className='exp-card' 
                    dataInicio='JUNHO 2012'
                    dataFim='2016'
                    titulo='Web Designer'
                    empresa='Pied Piper StartUp.'
                    texto='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores.'/>

                    <CardItem 
                    dataInicio='AGOSTO 2016'
                    dataFim='2019'
                    titulo='Product Designer'
                    empresa='E Corp.'
                    texto='Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra.'/>

                    <CardItem 
                    dataInicio='FEVEREIRO 2019'
                    dataFim='2021'
                    titulo='Digital Consulting'
                    empresa='Arasaka Inc.'
                    texto='Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução.'/>   
                </div>
            </div>
        </section>
    )
}