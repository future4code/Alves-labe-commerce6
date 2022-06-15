import React, { Component } from "react";
import Card from "./Card";
import Filtro from "./Filtro";
import Carrinho from "./Carrinho";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>Quantidade de produtos: 6</p>
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        </div>
        <Card
          imagem="https://picsum.photos/200/300"
          nome="Produto 1"
          preco="100"
        />
        <Card
          imagem="https://picsum.photos/200/300"
          nome="Produto 2"
          preco="200"
        />
        <Card
          imagem="https://picsum.photos/200/300"
          nome="Produto 3"
          preco="300"
        />
        <Card
          imagem="https://picsum.photos/200/300"
          nome="Produto 4"
          preco="400"
        />
        <Card
          imagem="https://picsum.photos/200/300"
          nome="Produto 5"
          preco="500"
        />
        <Card
          imagem="https://picsum.photos/200/300"
          nome="Produto 5"
          preco="500"
        />
        <Filtro />
        <Carrinho />
      </div>
    );
  }
}
