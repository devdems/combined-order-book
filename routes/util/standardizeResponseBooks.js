// Helpers for standardizing the json formats of books from each exchange
// the target output format is:
// {asks: [{Quantity: x, Rate: y},...], bids: [{Quantity: x, Rate: y},...]}

module.exports = {

  binance: response => {
    response.bids = response.bids.map(bid =>
      ({Quantity: bid[1], Rate: bid[0]})
    );
    response.asks = response.asks.map(ask =>
      ({Quantity: ask[1], Rate: ask[0]})
    );
    return response;
  },

  bittrex: response => {
    const { result } = response;
    result.asks = result.sell;
    result.bids = result.buy;
    delete result.sell;
    delete result.buy;
    return result;
  },

  poloniex: response => {
    response.asks = response.asks.map(ask =>
      ({Quantity: ask[1], Rate: ask[0]})
    );
    response.bids = response.bids.map(bid =>
      ({Quantity: bid[1], Rate: bid[0]})
    );
    return response;
  },

}
