import React, { Component } from "react";
import styled from "styled-components";

const Cards = styled.section`
  border: 1px solid black;
  width: 250px;
  height: 500px;
`;

const Imagem = styled.img`
  width: 100%;
`;

export default class Card extends React.Component {
  render() {
    return (
      <div>
        <Cards>
          <section>
            <Imagem src={this.props.imagem} />
            <p>{this.props.titulo}</p>
            <p>{this.props.preco}</p>
            <button>Adicionar ao Carrinho</button>
          </section>
        </Cards>
      </div>
    );
  }
}
