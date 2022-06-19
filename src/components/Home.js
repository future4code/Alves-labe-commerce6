import React, { Component } from "react";
import Card from "./Card";
import Filtro from "./Filtro";
import Carrinho from "./Carrinho";
import listaProdutos from "../data/produtos.json"
import Ordem from "./Ordem";
import styled from "styled-components";
import backgroundimage from "../imgProdutos/purplegalaxy.jpg"

const MainContainer = styled.div`
  display: grid;
  justify-items: stretch;
  align-items: center;
  height: 100vh;
  grid-template-columns: 1fr 3fr 1fr;
  background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.3)),url(${backgroundimage});
  background-position: center;
  background-size: cover;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
  }
`

const CenterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 95vh;
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
    listDeCarrinho:[]
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
