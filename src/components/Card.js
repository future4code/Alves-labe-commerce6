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

export default function Card(props) {
    return (
      <div>
        <Cards>
          <section>
            <Imagem src={props.elemento.imagem} />
            <p>{props.elemento.nome}</p>
            <p>{props.elemento.preco}</p>
            <button>Adicionar ao Carrinho</button>
          </section>
        </Cards>
      </div>
    );
  }
