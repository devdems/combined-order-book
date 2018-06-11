const expect = require('chai').expect;
const combineBooks = require('../routes/util/combineBooks');

describe('combineBooks', () => {
  const books = {
    binance: {
      asks: [
        {Quantity: 1, Rate: 0.0004},
        {Quantity: 1, Rate: 0.0005},
        {Quantity: 1, Rate: 0.0006},
      ],
      bids: [
        {Quantity: 1, Rate: 0.0003},
        {Quantity: 1, Rate: 0.0002},
        {Quantity: 1, Rate: 0.0001},
      ],
    },
    bittrex: {
      asks: [
        {Quantity: 1, Rate: 0.0003},
        {Quantity: 1, Rate: 0.0005},
        {Quantity: 1, Rate: 0.0006},
      ],
      bids: [
        {Quantity: 1, Rate: 0.0003},
        {Quantity: 1, Rate: 0.0002},
        {Quantity: 1, Rate: 0.0001},
      ],
    },
    poloniex: {
      asks: [
        {Quantity: 1, Rate: 0.0004},
        {Quantity: 1, Rate: 0.0005},
        {Quantity: 1, Rate: 0.0006},
      ],
      bids: [
        {Quantity: 1, Rate: 0.0003},
        {Quantity: 1, Rate: 0.0002},
        {Quantity: 1, Rate: 0.0001},
      ],
    },
  };

  const combinedBook = combineBooks(books);
  console.log(combinedBook)

  it('should return an array', () => {
    expect(combinedBook).to.be.a('array');
  });
  it('should catch when different exchanges have overlapping bid/asks', () => {
    expect(combinedBook[0].match).to.equal(true);
    expect(combinedBook[0].bidPrice).to.equal('0.0003');
    expect(combinedBook[0].askPrice).to.equal('0.0003');
    expect(combinedBook[0].bids).to.include({binance: 1, bittrex: 1});
    expect(combinedBook[0].asks).to.include({bittrex: 1});
  });
  it('should order objects according to increasing ask prices', () => {
    expect(combinedBook[0].askPrice).to.equal('0.0003');
    expect(combinedBook[1].askPrice).to.equal('0.0004');
    expect(combinedBook[2].askPrice).to.equal('0.0005');
  });
  it('should order objects according to decreasing bid prices', () => {
    expect(combinedBook[0].bidPrice).to.equal('0.0003');
    expect(combinedBook[1].bidPrice).to.equal('0.0002');
    expect(combinedBook[2].bidPrice).to.equal('0.0001');
  });
});
