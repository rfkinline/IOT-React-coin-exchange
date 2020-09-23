import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

// git add .
// git commit -m "cleaning up"
// git remote add origin https://github.com/rfkinline/coin-exchange.git
// git push -u origin master
// npm start

// Create new project: $ npx create-react-app coin-invest

const Div = styled.div`
  text-align: center;
  background-color: #553d74;
  color: #cccccc;
  `;

const COIN_COUNT = 10;

function App(props) {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);

const componentDidMount = async () => {
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
  setCoinData(coinPriceData);
}

  useEffect(function() {
    if (coinData.length === 0){
      componentDidMount();
    }
  });

  const handleBrrrr = () => {
    setBalance (oldBalance => oldBalance +1200);
  }

  const handleBalanceVisibiltyChange = () => {
    setShowBalance (oldValue => !oldValue)
  };

  const handleTransaction =(isBuy, valueChangeId) => {
    var balanceChange = isBuy ? 1 : -1;
    const newCoinData = coinData.map( function(values){
      let newValues = {...values};
      if (valueChangeId === values.key) {
        newValues.balance += balanceChange;
        setBalance(oldBalance => oldBalance - balanceChange * newValues.price );
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }



  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = response.data.quotes.USD.price;
    const newCoinData = coinData.map(function(values) {
      let newValues = {...values};
      if (valueChangeId === values.key) {
//        const randomPercentage = 0.995 + Math.random() * 0.01;
//        newValues.price *= randomPercentage;
          newValues.price = newPrice;
      }
      return newValues;
    });
    // console.log(coin);
    setCoinData(newCoinData);
    
  }

  return (
    <Div>
      <ExchangeHeader />
      <AccountBalance 
        amount={balance} 
        showBalance={showBalance} 
        handleBrrrr={handleBrrrr}
        handleBalanceVisibiltyChange={handleBalanceVisibiltyChange}/>
      <CoinList 
        coinData={coinData} 
        showBalance={showBalance}
        handleTransaction={handleTransaction}
        handleRefreh={handleRefresh}/>
    </Div>
  );
  
}

export default App;
