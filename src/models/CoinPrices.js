class CoinPrices {
  constructor(props) {
    this.prices = props.prices;
    this.currency = props.currency;
    this.coinId = props.coinId,
    this.period = props.period;
  }

  static fromApiResponse({ data, currency, coinId, period }) {
    const prices = [];
    data.prices.forEach(p => {
      prices.push({ unixTimestamp: p[0], price: p[1] });
    });
    return new CoinPrices({
      currency,
      coinId,
      period,
      prices,
    });
  }
}

export default CoinPrices;