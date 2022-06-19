import React, { Component } from "react";
import Home from "./components/Home";
import Carrinho from "./components/Carrinho";
import Filtro from "./components/Filtro";
import styled from "styled-components";

const AppContainer = styled.div`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
  }

`


export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Home />
      </AppContainer>
    );
  }
}
