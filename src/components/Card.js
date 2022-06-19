import React, { Component } from "react";
import styled from "styled-components";


const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap ;
  background-color: white;
  border: 1px solid black;
  width: 15vw;
  height: 100%;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
    text align: center;
    margin: 0px 0px 20px 0px;
    width: 100%;
    border: none
  }
`;

const Imagem = styled.img`
  width: 285px;
  height: 300px;
`;

const Produto = styled.p`
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: center
`
const Preco = styled.p`
  display: block
`

export default function Card(props) {
    return (
      <div>
        <Cards>
            <Imagem src={props.elemento.imagem} />
            <Produto>{props.elemento.nome}</Produto>
            <Preco>R${props.elemento.preco}</Preco>
            {/* <button onClick={()=> props.selecionaProduto(produtos.id)}>Adicionar ao Carrinho</button> */}
            <button>Adicionar ao Carrinho</button>
        </Cards>
      </div>
    );
  }

