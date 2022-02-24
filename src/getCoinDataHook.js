import { useState, useEffect } from 'react';
import coinGeckoClient from './models/coinGeckoClient';

const getCoinDataHook = () => {
  const [coins, setCoins] = useState([]);
  useEffect(async () => {
    setCoins(await coinGeckoClient.listCoinMarketData({
      currency: 'usd',
      limit: '10',
      pageNumber: '1',
    }));
  }, []);

  return coins;
};

export default getCoinDataHook;
