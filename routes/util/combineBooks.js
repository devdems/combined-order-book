// combines the response books from different exchanges
// into the single array format used by the table component
// in the client

module.exports = (booksObj) => {

  // get list of exchanges that were requested and filter out no-response exchanges
  const exchanges = Object.keys(booksObj).filter(ex => !booksObj[ex].err);

  const combinedBook = {
    asksByPrice: {},
    bidsByPrice: {},
  };

  // Here we combine the different exchange's order books with at
  // bid and ask price on an object for fast lookup
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


  // Below, we extract the list of prices and order them with bids descending
  // and asks ascending

  const bidPrices = Object.keys(combinedBook.bidsByPrice).sort((a, b) =>
    Number(b) - Number(a)
  );
  const askPrices = Object.keys(combinedBook.asksByPrice).sort((a, b) =>
    Number(a) - Number(b)
  );


  // Next we iterate through each ascending bid and descending ask and build
  // the objects that will become the rows of the table in the client while
  // checking to see if there are any overlaps (matches) between exchanges
  // and calculating the total volumes at each bid and ask price

  const outputBook = [];

  for (let i = 0; i < 100; i += 1) {

    if (bidPrices[i] && askPrices[i]) {

      const bidPrice = bidPrices[i];
      const askPrice = askPrices[i];

      const row = {
        bidPrice,
        askPrice,
        match: bidPrice === askPrice,
        bids: {
          totalVolume: 0,
        },
        asks: {
          totalVolume: 0,
        },
      };

      // Below we attach the individual exchange's volumes and
      // add to the total volume by iterating through each key
      // on the current bid and ask price keys on the combinedBook object
      // created above

      Object.keys(combinedBook.bidsByPrice[bidPrice] || {}).forEach(ex => {
        const volume = Number(combinedBook.bidsByPrice[bidPrice][ex]);
        row.bids[ex] = volume;
        row.bids.totalVolume += volume;
      });

      Object.keys(combinedBook.asksByPrice[askPrice] || {}).forEach(ex => {
        const volume = Number(combinedBook.asksByPrice[askPrice][ex]);
        row.asks[ex] = volume;
        row.asks.totalVolume += volume;
      });

      outputBook.push(row);
    }

  }

  return outputBook
}
