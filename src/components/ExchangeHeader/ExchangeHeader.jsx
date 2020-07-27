import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.header`
    background-color: #282c34;
    min-height: 10vh;
    width: 100%
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: rgb(255, 255, 255);
`;
  
const H1 = styled.h1`
    font-size: 3rem;
    line-heigth: 8rem;
    font-weight: bold;
    min-width: 300px;
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
