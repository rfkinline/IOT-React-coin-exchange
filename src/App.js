import React from 'react';
import styled from 'styled-components'
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';

const Div = styled.div`
  text-align: center;
  background-color: #553d74;
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
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map(function({ticker, name, price}) {
      let newPrice = price;
      if (valueChangeTicker === ticker) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;

      }
      return{
        ticker, name, price: newPrice
      }

    });
    // console.log(coin);
    this.setState({coinData: newCoinData})
  }
  render() {
    return (
      <Div>
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh = {this.handleRefresh}/>
      </Div>
    );
  }
}

export default App;
