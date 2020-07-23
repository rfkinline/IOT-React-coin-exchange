import React from 'react';
import styled from 'styled-components'
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';

const Div = styled.div`
  text-align: center;
  background-color: #553d74;
  color: #cccccc;
  `;

class App extends React.Component {
  state ={
    balance: 10000,
    showBalance: true,
    coinData: [
      { name: 'Bitcoin', ticker: 'BTC', balance: 0.5, price: 9999.99 },
      { name: 'Tethern', ticker: 'USDT',  balance: 1.5, price: 939.99 },
      { name: 'Ethereumn', ticker: 'ETH', balance: 2.5, price: 1.00 },
      { name: 'Ripple', ticker: 'XRP', balance: 3.5, price: 0.20 },
    ]
  }

  handleBalanceVisibiltyChange = () => {
    this.setState (function(oldState) {
      return{
      ...oldState,
      showBalance: !oldState.showBalance
      }
    });
  };

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map(function(values) {
      let newValues = {...values};
      if (valueChangeTicker === values.ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
    // console.log(coin);
    this.setState({coinData: newCoinData});
  }
  render() {
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance} 
          handleBalanceVisibiltyChange={this.handleBalanceVisibiltyChange}/>
        <CoinList 
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh = {this.handleRefresh}/>
      </Div>
    );
  }
}

export default App;
