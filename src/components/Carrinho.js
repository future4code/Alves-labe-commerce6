import React, { Component } from "react";
import styled from "styled-components";

const Carrinhos = styled.section`
  text-align: center;
  width: 17vw;
  margin-right: 5vw;
  background-color: #D7D4DC;
  height: 95vh;
  border-radius: 0px 5px 5px 0px;
  opacity: 0.6;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
    width: 100%;
    margin: 0
  }
  `;

export default class Carrinho extends Component {
  render() {
    return (
        <Carrinhos>
          <h2>Carrinho</h2>
          <span>2x</span> <span>Produto</span>
        </Carrinhos>
    );
  }
}
