'use strict';

import axios from 'axios';
import Coin from './Coin.js';
import CoinPrices from './CoinPrices.js';

const axiosInstance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3'
});

// https://www.coingecko.com/en/api/documentation
const coinGeckoClient = {
  async listCoinMarketData({ currency, limit, pageNumber }) {
    const response = await axiosInstance.request({
      method: 'GET',
      url: '/coins/markets',
      params: {
        'vs_currency': currency,
        'order': 'market_cap_desc',
        'per_page': parseInt(limit),
        'page': parseInt(pageNumber),
        'sparkline': false,
        'price_change_percentage': '24h,7d,30d,1y'
      }
    });
    return response.data.map(data => {
      return Coin.fromApiResponse({
        data,
        currency,
      });
    });
  },

  async getHistoricalDataForCoin({ coinId, currency, period }) {
    const periodToDaysParam = {
      'day': '1',
      'week': '7',
      'month': '30',
      'year': '365',
    };
    const response = await axiosInstance.request({
      method: 'GET',
      url: `/coins/${coinId}/market_chart`,
      params: {
        'vs_currency': currency,
        'days': periodToDaysParam[period],
      }
    });
    return CoinPrices.fromApiResponse({
      data: response.data,
      coinId,
      currency,
      period,
    });
  },
};

export default coinGeckoClient;