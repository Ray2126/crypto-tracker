import CoinPrices from '../CoinPrices';

describe('CoinPrices', () => {
  describe('fromApiResponse', () => {
    it('should return a coinPrices object when passed the correct arguments', () => {
      const data = {
        prices: [
          [ 1645741232359, 38416.50449423911 ],
          [ 1645741422061, 38418.36653705965 ],
          [ 1645741763190, 38388.964104474915 ],
          [ 1645742109025, 38263.49512668027 ],
          [ 1645742345254, 38130.58450097274 ],
          [ 1645742673136, 37981.3135935002 ],
        ],
        market_caps: [
          [ 1645741232359, 728772086838.3748 ],
          [ 1645741422061, 728772086838.3748 ],
          [ 1645741763190, 728772086838.3748 ],
          [ 1645742109025, 727381451310.5952 ],
          [ 1645742345254, 727381451310.5952 ],
        ],
        total_volumes: [
          [ 1645741232359, 40873553336.14723 ],
          [ 1645741422061, 40861201572.4817 ],
          [ 1645741763190, 40638136749.63769 ],
          [ 1645742109025, 40715358977.56504 ],
          [ 1645742345254, 40641129757.10588 ],
          [ 1645742673136, 40572675016.076385 ],
        ],
      };
      const coinPrices = CoinPrices.fromApiResponse({ data, currency: 'USD', coinId: 'bitcoin', period: 'day' });
      expect(coinPrices).toEqual({
        currency: 'USD',
        coinId: 'bitcoin',
        period: 'day',
        prices: [
          { unixTimestamp: 1645741232359, price: 38416.50449423911 },
          { unixTimestamp: 1645741422061, price: 38418.36653705965 },
          { unixTimestamp: 1645741763190, price: 38388.964104474915 },
          { unixTimestamp: 1645742109025, price: 38263.49512668027 },
          { unixTimestamp: 1645742345254, price: 38130.58450097274 },
          { unixTimestamp: 1645742673136, price: 37981.3135935002 },
        ],
      });
    });
  });

  describe('toGraphData', () => {
    it('should return the day, month and time when period is month', () => {
      const coinPrices = new CoinPrices({
        currency: 'USD',
        coinId: 'bitcoin',
        period: 'month',
        prices: [
          { unixTimestamp: 1645741232359, price: 38416.50449423911 },
          { unixTimestamp: 1645741422061, price: 38418.36653705965 },
          { unixTimestamp: 1645741763190, price: 38388.964104474915 },
          { unixTimestamp: 1645742109025, price: 38263.49512668027 },
          { unixTimestamp: 1645742345254, price: 38130.58450097274 },
          { unixTimestamp: 1645742673136, price: 37981.3135935002 },
        ],
      });
      expect(coinPrices.toGraphData()).toEqual([
        { x: 'Feb 24, 10:20 PM', y: 38416.50449423911 },
        { x: 'Feb 24, 10:23 PM', y: 38418.36653705965 },
        { x: 'Feb 24, 10:29 PM', y: 38388.964104474915 },
        { x: 'Feb 24, 10:35 PM', y: 38263.49512668027 },
        { x: 'Feb 24, 10:39 PM', y: 38130.58450097274 },
        { x: 'Feb 24, 10:44 PM', y: 37981.3135935002 },
      ]);
    });

    it('should return the day, month, year and time when period is year', () => {
      const coinPrices = new CoinPrices({
        currency: 'USD',
        coinId: 'bitcoin',
        period: 'year',
        prices: [
          { unixTimestamp: 1645741232359, price: 38416.50449423911 },
          { unixTimestamp: 1645741422061, price: 38418.36653705965 },
          { unixTimestamp: 1645741763190, price: 38388.964104474915 },
          { unixTimestamp: 1645742109025, price: 38263.49512668027 },
          { unixTimestamp: 1645742345254, price: 38130.58450097274 },
          { unixTimestamp: 1645742673136, price: 37981.3135935002 },
        ],
      });
      expect(coinPrices.toGraphData()).toEqual([
        { x: 'Feb 24, 2022, 10:20 PM', y: 38416.50449423911 },
        { x: 'Feb 24, 2022, 10:23 PM', y: 38418.36653705965 },
        { x: 'Feb 24, 2022, 10:29 PM', y: 38388.964104474915 },
        { x: 'Feb 24, 2022, 10:35 PM', y: 38263.49512668027 },
        { x: 'Feb 24, 2022, 10:39 PM', y: 38130.58450097274 },
        { x: 'Feb 24, 2022, 10:44 PM', y: 37981.3135935002 },
      ]);
    });
  });
});