import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Td = styled.td` {
border: 1px solid;
background-color: #3a4d44;
width: 25vh;
color:white;
}`;


export default function Coin(props) {
    
  const  handleClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.tickerId);
    };

return (
    <tr>
        <Td>{props.name}</Td>
        <Td>{props.ticker}</Td>
        <Td>${parseFloat(Number(props.price.toFixed(4)))}</Td>
        {props.showBalance ? <Td>{props.balance}</Td> : null }
        <Td><form action="#" method="POST"><button onClick={handleClick}>Refresh</button></form></Td>
    </tr>
);
    }

Coin.propTypes = {
    name: PropTypes.string.isRequired, 
    ticker: PropTypes.string,
    price: PropTypes.number

}