// combines the response books from different exchanges
// into the single array format used by the table component
// in the client

module.exports = (booksObj) => {
  const exchanges = Object.keys(booksObj);

  const combinedBook = {
    asksByPrice: {},
    bidsByPrice: {},
  };

  exchanges.forEach(exchange => {

    booksObj[exchange].bids.forEach(bid => {
      const volume = Number(bid.Quantity);
      const rate = bid.Rate;
      if (!combinedBook.bidsByPrice[rate]) {
        combinedBook.bidsByPrice[rate] = {
          [exchange]: volume,
        };
      } else {
        combinedBook.bidsByPrice[rate][exchange] = volume;
      }
    });

    booksObj[exchange].asks.forEach(ask => {
      const volume = Number(ask.Quantity);
      const rate = ask.Rate;
      if (!combinedBook.asksByPrice[rate]) {
        combinedBook.asksByPrice[rate] = {
          [exchange]: volume,
        };
      } else {
        combinedBook.asksByPrice[rate][exchange] = volume;
      }
    });

  });

  combinedBook.bidPrices = Object.keys(combinedBook.bidsByPrice).sort((a, b) => {
    return Number(b) - Number(a);
  }).slice(0, 99);

  combinedBook.askPrices = Object.keys(combinedBook.asksByPrice).sort((a, b) => {
    return Number(a) - Number(b);
  }).slice(0, 99);

  outputBook = [];

  for (let i = 0; i < 100; i += 1) {

    const bidPrice = combinedBook.bidPrices[i];
    const askPrice = combinedBook.askPrices[i];

    const row = {
      bidPrice,
      askPrice,
      match: Number(bidPrice) === Number(askPrice),
      bids: {
        totalVolume: 0,
      },
      asks: {
        totalVolume: 0,
      },
    };

    Object.keys(combinedBook.bidsByPrice[bidPrice] || {}).forEach(ex => {
      const volume = combinedBook.bidsByPrice[bidPrice][ex]
      row.bids[ex] = volume;
      row.bids.totalVolume += volume;
    })

    Object.keys(combinedBook.asksByPrice[askPrice] || {}).forEach(ex => {
      const volume = combinedBook.asksByPrice[askPrice][ex]
      row.asks[ex] = volume;
      row.asks.totalVolume += volume;
    })

    outputBook.push(row);

  }

  return outputBook
}
