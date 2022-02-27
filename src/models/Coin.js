class Coin {
  constructor(props) {
    this.id = props.id;
    this.symbol = props.symbol;
    this.name = props.name;
    this.imageUrl = props.imageUrl;
    this.currentPrice = props.currentPrice;
    this.priceChangePercentage24Hr = props.priceChangePercentage24Hr;
    this.priceChangePercentage7D = props.priceChangePercentage7D;
    this.priceChangePercentage30D = props.priceChangePercentage30D;
    this.priceChangePercentage1Y = props.priceChangePercentage1Y;
    this.marketCap = props.marketCap;
    this.currency = props.currency;
  }

  static fromApiResponse({ data, currency }) {
    return new Coin({
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      imageUrl: data.image,
      currentPrice: data.current_price,
      priceChangePercentage24Hr: data.price_change_percentage_24h_in_currency,
      priceChangePercentage7D: data.price_change_percentage_7d_in_currency,
      priceChangePercentage30D: data.price_change_percentage_30d_in_currency,
      priceChangePercentage1Y: data.price_change_percentage_1y_in_currency,
      marketCap: data.market_cap,
      currency,
    });
  }

}

export default Coin;