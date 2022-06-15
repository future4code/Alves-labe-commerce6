import React, { Component } from "react";
import styled from "styled-components";

const Filtros = styled.section`
  border: 1px solid black;
  width: 250px;
  height: 500px;
`;

export default class Filtro extends Component {
  render() {
    return (
      <div>
        <Filtros>
          <section>
            <h2>Filtro</h2>
            <p>Valor mínimo:</p>
            <input type="number" />
            <p>Valor máximo:</p>
            <input type="number" />
            <p>Busca por nome:</p>
            <input type="text" />
          </section>
        </Filtros>
      </div>
    );
  }
}
