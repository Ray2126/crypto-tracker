import Coin from '../Coin';

describe('Coin', () => {
  describe('fromApiResponse', () => {
    it('should return coin object when passed data and currency', () => {
      const data = {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        current_price: 38101,
        market_cap: 722374875704,
        market_cap_rank: 1,
        fully_diluted_valuation: 799844078643,
        total_volume: 19404223074,
        high_24h: 38377,
        low_24h: 36762,
        price_change_24h: 1142.78,
        price_change_percentage_24h: 3.09207,
        market_cap_change_24h: 21549813337,
        market_cap_change_percentage_24h: 3.07492,
        circulating_supply: 18966037,
        total_supply: 21000000,
        max_supply: 21000000,
        ath: 69045,
        ath_change_percentage: -44.83606,
        ath_date: '2021-11-10T14:24:11.849Z',
        atl: 67.81,
        atl_change_percentage: 56069.25964,
        atl_date: '2013-07-06T00:00:00.000Z',
        roi: null,
        last_updated: '2022-02-23T06:41:23.667Z',
        price_change_percentage_1y_in_currency: -29.974791225475006,
        price_change_percentage_24h_in_currency: 3.092066367055334,
        price_change_percentage_30d_in_currency: 4.943772472792155,
        price_change_percentage_7d_in_currency: -14.521825059444987
      };
      const coin = Coin.fromApiResponse({ data, currency: 'USD' });
      expect(coin).toEqual({
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        imageUrl: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        currentPrice: 38101,
        priceChangePercentage24Hr: 3.092066367055334,
        priceChangePercentage7D: -14.521825059444987,
        priceChangePercentage30D: 4.943772472792155,
        priceChangePercentage1Y: -29.974791225475006,
        marketCap: 722374875704,
        currency: 'USD'
      });
    });
  });

  describe('formattedPriceChangeFor', () => {
    const coin = new Coin({
      priceChangePercentage24Hr: 3.092066367055334,
      priceChangePercentage7D: -14.521825059444987,
      priceChangePercentage30D: 4.943772472792155,
      priceChangePercentage1Y: -29.974791225475006,
    });
    it('should return formatted 24Hr price change when passed day period', () => {
      expect(coin.formattedPriceChangeFor('day')).toEqual('3.09%');
    });

    it('should return formatted 7D price change when passed week period', () => {
      expect(coin.formattedPriceChangeFor('week')).toEqual('-14.52%');
    });

    it('should return formatted 30D price change when passed month period', () => {
      expect(coin.formattedPriceChangeFor('month')).toEqual('4.94%');
    });

    it('should return formatted 1Y price change when passed year period', () => {
      expect(coin.formattedPriceChangeFor('year')).toEqual('-29.97%');
    });

  });
});