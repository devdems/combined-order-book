const expect = require('chai').expect;
const request = require('supertest');
const createServer = require('../server.js');

describe('API Routes', () => {
  var app;

  before(done => {
    app = createServer();
    app.listen((err) => {
      if (err) return done(err);
      done();
    });
  });

  describe('poloniex', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', done => {
        request(app)
          .get('/api/poloniex/get-order-book')
          .expect(200)
          .then(res => {
            const { body } = res
            expect(body.asks.length).to.be.above(0);
            expect(body.bids.length).to.be.above(0);
            return done();
          })
          .catch(err => done(err));
      });
      it('should respond with custom order book from standardized query params', done => {
        request(app)
          .get('/api/poloniex/get-order-book?market=BTC-XRP')
          .expect(200)
          .then(res => {
            const { body } = res
            expect(body.asks.length).to.be.above(0);
            expect(body.bids.length).to.be.above(0);
            return done();
          })
          .catch(err => done(err));
      });
    });
  });

  describe('bittrex', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', done => {
        request(app)
          .get('/api/bittrex/get-order-book')
          .expect(200)
          .then(res => {
            const { body } = res
            expect(body.asks.length).to.be.above(0);
            expect(body.bids.length).to.be.above(0);
            return done();
          })
          .catch(err => done(err));
      });
      it('should respond with custom order book from standardized query params', done => {
        request(app)
          .get('/api/bittrex/get-order-book?market=BTC-XRP')
          .expect(200)
          .then(res => {
            const { body } = res
            expect(body.asks.length).to.be.above(0);
            expect(body.bids.length).to.be.above(0);
            return done();
          })
          .catch(err => done(err));
      });
    });
  });

  describe('binance', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', done => {
        request(app)
          .get('/api/binance/get-order-book')
          .expect(200)
          .expect(res => {
            const { body } = res
            expect(body.asks.length).to.be.above(0);
            expect(body.bids.length).to.be.above(0);
            return done();
          })
          .catch(err => done(err));
      });
      it('should respond with custom order book from standardized query params', done => {
        request(app)
          .get('/api/binance/get-order-book?market=BTC-XRP')
          .expect(200)
          .expect(res => {
            const { body } = res
            expect(body.asks.length).to.be.above(0);
            expect(body.bids.length).to.be.above(0);
            return done();
          })
          .catch(err => done(err));
      });
    });
  });
});
