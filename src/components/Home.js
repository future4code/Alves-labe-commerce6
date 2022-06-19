import React, { Component } from "react";
import Card from "./Card";
import Filtro from "./Filtro";
import Carrinho from "./Carrinho";
import listaProdutos from "../data/produtos.json"
import Ordem from "./Ordem";
import styled from "styled-components";
import "../App.css";
import backgroundimage from "../imgProdutos/purplegalaxy.jpg"

const MainContainer = styled.div`
  display: grid;
  justify-items: stretch;
  align-items: center;
  height: 120vh;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 1fr 10fr;
  background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.3)),url(${backgroundimage});
  background-position: center;
  background-size: cover;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
  }
`
const PageName = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 8vh;
  font-family: 'Amatic SC', cursive;
  color: white;
  align-items: center;
  margin-right: 5vw;
  margin-left: 5vw;
  border-radius: 5px 5px 0px 0px;
  justify-items: flex-end;
  justify-content: center;
  margin-top: 5vh;
  height: 10vh;
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(168,143,215,0.48783263305322133) 100%);
  opacity: 0.6;

}
`

const CenterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 95vh;
  margin-bottom: 10vh
`

const ProductsContainer = styled.div`
  display: flex;
  gap: 0.5vw;
  height: 88vh;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  background-color: #D7D4DC;
  justify-content: space-evenly;
  overflow: auto

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
    width: 100%
  }

`

export default class Home extends React.Component {
  state={
    produtos: listaProdutos,
    busca: "",
    precoMin: "",
    precoMax: "",
    ordem: 1,

    carrinho:[]
  }

  atualizaOrdem = (event) =>{
    this.setState({ordem: event.target.value})
  }

  atualizarBusca =(event) =>{
    this.setState({busca: event.target.value})
  }

  atualizaPrecoMin = (event) =>{
    this.setState({precoMin: event.target.value})
  }

  atualizaPrecoMax = (event) =>{
    this.setState({precoMax: event.target.value})
  }
  
  selecionaProduto =(id) => {
   const novaList = this.state.produtos.map((produto)=>{
    if(id === produto.id){
      const novoProduto ={... produto, };
}

      this.setState({listDeCarrinho : novaList})
    
   }
   )}

  render() {
    return (
      <MainContainer>

        <PageName>SUPERNOVA CAMISETAS</PageName>

        <Filtro
          busca={this.state.busca}
          atualizarBusca={this.atualizarBusca}

          precoMin={this.state.precoMin}
          atualizaPrecoMin={this.atualizaPrecoMin}

          precoMax={this.state.precoMax}
          atualizaPrecoMax={this.atualizaPrecoMax}
        />

        <CenterContainer>
          <Ordem 
            ordem={this.state.ordem}
            atualizaOrdem={this.atualizaOrdem}
            
          />

          <ProductsContainer>
            {this.state.produtos
              .filter(elemento =>{
                return this.state.precoMin === "" || elemento.preco >= this.state.precoMin
              })

              .filter(elemento =>{
                return this.state.precoMax === "" || elemento.preco <= this.state.precoMax
              })

              .filter(elemento =>{
                return elemento.nome.toLowerCase().includes(this.state.busca.toLowerCase())
              })
              
              .sort((produto1, produto2)=>{
                return this.state.ordem * (produto1.preco - produto2.preco)
              })

              .map(elemento =>{
              return <Card 
                key={elemento.id}
                elemento={elemento}/>
              })          
            }
          </ProductsContainer>
        </CenterContainer>
    
        <Carrinho />

      </MainContainer>
    );
  }
}
