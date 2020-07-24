import React from 'react';
import styled from 'styled-components'
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: #553d74;
  color: #cccccc;
  `;

  const COIN_COUNT = 10;

class App extends React.Component {
  state ={
    balance: 10000,
    showBalance: true,
    coinData: [
      /*
      { name: 'Bitcoin', ticker: 'BTC', balance: 0.5, price: 9999.99 },
      { name: 'Tethern', ticker: 'USDT',  balance: 1.5, price: 939.99 },
      { name: 'Ethereumn', ticker: 'ETH', balance: 2.5, price: 1.00 },
      { name: 'Ripple', ticker: 'XRP', balance: 3.5, price: 0.20 },
      */
    ]
  }

  componentDidMount = async () => {
    // Needed to retrieve coins sorted by rank and then retrieve price
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    //Retrieve the prices
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: coin.quotes['USD'].price,
      }
    });
    this.setState({coinData: coinPriceData });
  }

  handleBalanceVisibiltyChange = () => {
    this.setState (function(oldState) {
      return{
      ...oldState,
      showBalance: !oldState.showBalance
      }
    });
  };

  handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = response.data.quotes.USD.price;
    const newCoinData = this.state.coinData.map(function(values) {
      let newValues = {...values};
      if (valueChangeId === values.key) {
//        const randomPercentage = 0.995 + Math.random() * 0.01;
//        newValues.price *= randomPercentage;
          newValues.price = newPrice;
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
