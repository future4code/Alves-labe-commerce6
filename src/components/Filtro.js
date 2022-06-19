import React, { Component } from "react";
import styled from "styled-components";

const Filtros = styled.section`
  text-align: center;
  width: 17vw;
  margin-left: 5vw;
  margin-bottom: 10vh;
  background-color: #D7D4DC;
  height: 95vh;
  opacity: 0.6;
  align-items: center;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
    padding-top: 10vh;
    width: 100%;
    margin: 0;
    max-height: 100%;
  }
  `;


  

export default function Filtro(props) {

  {
    return (
        <Filtros>
            <h2>Filtrar por:</h2>

            <p>Valor mínimo:</p>
            <input type="number" placeholder="100" value={props.precoMin} onChange={props.atualizaPrecoMin} />

            <p>Valor máximo:</p>
            <input type="number" placeholder="10000" value={props.precoMax} onChange={props.atualizaPrecoMax} />

            <p>Busca por nome:</p>  
            <input value={props.busca} placeholder="Pesquisa" onChange={props.atualizarBusca}/>
        </Filtros>
    );
  }
}
