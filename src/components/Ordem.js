  import React, { Component } from "react";
  import styled from "styled-components";

  const Ordens = styled.section`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0em 4em 0em 4em;
    align-items: center;
    flex-direction: row;
    height: 7vh;
    background-color: #D7D4DC;
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
      display: block;
      text-align: center;
      padding: 0;
      width: 100%
    }
  `;




  export default function Ordem(props) {

    {
      return (
          <Ordens>
                <p>Quantidade de produtos: 6</p>
                <select value={props.ordem} onChange={props.atualizaOrdem}>
                    <option value = {1}>Crescente</option>
                    <option value = {-1}>Decrescente</option>
                </select>
          </Ordens>
      );
    }
  }
