module.exports = (booksObj) => {
  const exchanges = Object.keys(booksObj)

  // return booksObj

  const combinedBook = {
    asksByPrice: {},
    bidsByPrice: {},
  }

  exchanges.forEach(exchange => {
    booksObj[exchange].bids.forEach(bid => {
      const volume = parseFloat(bid.Quantity, 10);
      const rate = bid.Rate
      if (!combinedBook.bidsByPrice[rate]) {
        combinedBook.bidsByPrice[rate] = {
          [exchange]: volume,
          combinedVolume: volume,
        };
      } else {
        combinedBook.bidsByPrice[rate][exchange] = volume;
        combinedBook.bidsByPrice[rate].combinedVolume += volume
      }
    });
    booksObj[exchange].asks.forEach(ask => {
      const volume = parseFloat(ask.Quantity, 10);
      const rate = ask.Rate
      if (!combinedBook.asksByPrice[rate]) {
        combinedBook.asksByPrice[rate] = {
          [exchange]: volume,
          combinedVolume: volume,
        };
      } else {
        combinedBook.asksByPrice[rate][exchange] = volume;
        combinedBook.asksByPrice[rate].combinedVolume += volume
      }
    });
  });

  combinedBook.bidPrices = Object.keys(combinedBook.bidsByPrice).sort((a, b) => {
    return parseFloat(a) < parseFloat(b);
  })
  combinedBook.askPrices = Object.keys(combinedBook.asksByPrice).sort((a, b) => {
    return parseFloat(a) > parseFloat(b);
  })

  return combinedBook
}
