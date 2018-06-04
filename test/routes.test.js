const expect = require('chai').expect;
const request = require('supertest');
const createServer = require('../server.js');

describe('API Routes', () => {
  var app;

  beforeEach(done => {
    app = createServer();
    return app.listen((err) => {
      if (err) return done(err);
      done();
    });
  });

  describe('poloniex', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', () => {
        return request(app)
          .get('/api/poloniex/get-order-book')
          .expect(200)
          .expect(res => {
            expect(res.body.asks).to.be.an('array');
            expect(res.body.bids).to.be.an('array');
          });
      });
      it('should respond with custom order book from standardized query params', () => {
        return request(app)
          .get('/api/poloniex/get-order-book?market=BTC-XRP')
          .expect(200)
          .expect(res => {
            expect(res.body.asks).to.be.an('array');
            expect(res.body.bids).to.be.an('array');
          });
      });
    });
  });

  describe('bittrex', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', () => {
        return request(app)
          .get('/api/bittrex/get-order-book')
          .expect(200)
          .expect(res => {
            expect(res.body.asks).to.be.an('array');
            expect(res.body.bids).to.be.an('array');
          });
      });
      it('should respond with custom order book from standardized query params', () => {
        return request(app)
          .get('/api/bittrex/get-order-book?market=BTC-XRP')
          .expect(200)
          .expect(res => {
            expect(res.body.asks).to.be.an('array');
            expect(res.body.bids).to.be.an('array');
          });
      });
    });
  });

  describe('binance', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', () => {
        return request(app)
          .get('/api/binance/get-order-book')
          .expect(200)
          .expect(res => {
            expect(res.body.asks).to.be.an('array');
            expect(res.body.bids).to.be.an('array');
          });
      });
      it('should respond with custom order book from standardized query params', () => {
        return request(app)
          .get('/api/binance/get-order-book?market=BTC-XRP')
          .expect(200)
          .expect(res => {
            expect(res.body.asks).to.be.an('array');
            expect(res.body.bids).to.be.an('array');
          });
      });
    });
  });
});
