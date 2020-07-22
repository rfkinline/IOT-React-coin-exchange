import React from 'react';
import styled from 'styled-components'
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance'

const div = styled.div`
  text-align: center;
  background-color: #3a4d74;
  background-color: darkblue;
  color: #cccccc
`;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      balance: 10000,
      coinData: [
        { name: 'Bitcoin', ticker: 'BTC', price: 9999.99 },
        { name: 'Tethern', ticker: 'USDT', price: 939.99 },
        { name: 'Ethereumn', ticker: 'ETH', price: 1.00 },
        { name: 'Ripple', ticker: 'XRP', price: 0.20 },
      ]
    }

  }
  render() {
    return (
      <div>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </div>
    );
  }
}

export default App;
