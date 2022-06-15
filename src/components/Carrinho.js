import React, { Component } from "react";
import styled from "styled-components";

const Carrinhos = styled.section`
  border: 1px solid black;
  width: 250px;
  height: 500px;
`;

export default class Carrinho extends Component {
  render() {
    return (
      <div>
        <Carrinhos>
          <h2>Carrinho</h2>
          <p>2x</p>
          <p>Produto</p>
        </Carrinhos>
      </div>
    );
  }
}
