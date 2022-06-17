import React, { Component } from "react";
import styled from "styled-components";

const Ordens = styled.section`
  border: 1px solid black;
`;


export default function Ordem(props) {

  {
    return (
        <Ordens>
            <div >
                <p>Quantidade de produtos: 6</p>
                <select value={props.ordem} onChange={props.atualizaOrdem}>
                    <option value = {1}>Crescente</option>
                    <option value = {-1}>Decrescente</option>
                </select>
            </div>
        </Ordens>
    );
  }
}
