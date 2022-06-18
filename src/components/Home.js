import React, { Component } from "react";
import Card from "./Card";
import Filtro from "./Filtro";
import Carrinho from "./Carrinho";
import listaProdutos from "../data/produtos.json"
import Ordem from "./Ordem";
import styled from "styled-components";




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
      <div>
        <Filtro
          busca={this.state.busca}
          atualizarBusca={this.atualizarBusca}

          precoMin={this.state.precoMin}
          atualizaPrecoMin={this.atualizaPrecoMin}

          precoMax={this.state.precoMax}
          atualizaPrecoMax={this.atualizaPrecoMax}
        />

        <Ordem 
          ordem={this.state.ordem}
          atualizaOrdem={this.atualizaOrdem}
        />

        <div>
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
        </div>
    
        <Carrinho />
      </div>
    );
  }
}
