import React, { Component } from "react";
import styled from "styled-components";

const Filtros = styled.section`
  border: 1px solid black;
  width: 250px;
  height: 500px;
`;


export default function Filtro(props) {

  {
    return (
        <Filtros>
            <h2>Filtro</h2>

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
