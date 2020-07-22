import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background-color: #3a4d74;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 2rem;
    color: rgb(255, 255, 255);
`;
  
const H1 = styled.h1`
    font-size: 4rem;
    `;
  

export default class ExchangeHeader extends Component {
    render() {
        return (
          <Header>  
            <div>
            <H1>
              Coin Exchange.
            </H1>
          </div>
          </Header>
        )
    }
}
