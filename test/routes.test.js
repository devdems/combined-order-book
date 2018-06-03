const expect = require('chai').expect
const request = require('supertest')
const createServer = require('../server.js')

describe('API Routes', () => {
  var app;

  before(function(done) {
    app = createServer();
    app.listen(function(err) {
      if (err) { return done(err); }
      done();
    });
  });

  describe('binance', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', () => {
        request(app)
        .get('/api/binance/get-order-book')
        .expect(200, (err, res) => {
          if (err) return done(err);
          const { body } = res;
          expect(body.bids).toExist();
          expect(body.asks).toExist();
        });
      });

      it('should custom order book from standardized query params', () => {
        request(app)
        .get('/api/binance/get-order-book?market=ETH-XRP')
        .expect(200, (err, res) => {
          if (err) return done(err);
          const { body } = res;
          expect(body.bids).toExist();
          expect(body.asks).toExist();
        });
      });
    });
  });

  describe('bittrex', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', () => {
        request(app)
        .get('/api/bittrex/get-order-book')
        .expect(200, (err, res) => {
          if (err) return done(err);
          const { body } = res;
          expect(body.bids).toExist();
          expect(body.asks).toExist();
        });
      });
      it('should custom order book from standardized query params', () => {
        request(app)
        .get('/api/bittrex/get-order-book?market=ETH-XRP')
        .expect(200, (err, res) => {
          if (err) return done(err);
          const { body } = res;
          expect(body.bids).toExist();
          expect(body.asks).toExist();
        });
      });
    });
  });

  describe('poloniex', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', () => {
        request(app)
        .get('/api/poloniex/get-order-book')
        .expect(200, (err, res) => {
          if (err) return done(err);
          const { body } = res;
          expect(body.bids).toExist();
          expect(body.asks).toExist();
        });
      });
      it('should custom order book from standardized query params', () => {
        request(app)
        .get('/api/poloniex/get-order-book?market=ETH-XRP')
        .expect(200, (err, res) => {
          if (err) return done(err);
          const { body } = res;
          expect(body.bids).toExist();
          expect(body.asks).toExist();
        });
      });
    });
  });
});
