function unixTimestampToFormattedDate({ unixTimestamp, period }) {
  const periodsWithYear = [ 'year', 'all' ];
  const includeYearInDate = periodsWithYear.includes(period);
  const formatter = new Intl.DateTimeFormat('en-us', {
    month: 'short',
    day: 'numeric',
    year: includeYearInDate ? 'numeric' : undefined,
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC'
  });
  return formatter.format(unixTimestamp);
}

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

  toGraphData() {
    const graphData = this.prices.map(p => {
      const formattedDate = unixTimestampToFormattedDate({ unixTimestamp: p.unixTimestamp, period: this.period });
      return { x: formattedDate, y: p.price };
    });
    return graphData;
  }
}

export default CoinPrices;
