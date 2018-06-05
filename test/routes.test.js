const expect = require('chai').expect;
const request = require('supertest');
const createServer = require('../server.js');
const api = require('../routes/api')

describe('API Routes', () => {
  var app;

  before(done => {
    app = createServer();
    app.listen((err) => {
      if (err) return done(err);
      return done();
    });
  });

  describe('poloniex', () => {
    describe('get-order-book', () => {
      it('should return default order book if missing query params', function(done) {
        this.timeout(4000);
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
      it('should respond with custom order book from standardized query params', function(done) {
        this.timeout(4000);
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
      it('should return default order book if missing query params', function(done) {
        this.timeout(4000);
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
      it('should respond with custom order book from standardized query params', function(done) {
        this.timeout(4000);
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
      it('should return default order book if missing query params', function(done) {
        this.timeout(4000);
        request(app)
          .get('/api/binance/get-order-book')
          .expect(200)
          .then(res => {
            const { body } = res
            expect(body.asks.length).to.be.above(0);
            expect(body.bids.length).to.be.above(0);
            return done();
          })
          .catch(err => done(err));
      });
      it('should respond with custom order book from standardized query params', function(done) {
        this.timeout(4000);
        request(app)
          .get('/api/binance/get-order-book?market=BTC-XRP')
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

  describe('multiple exchanges', () => {
    describe('get-order-books', () => {
      it('should return 400 if exchanges not included with request', function(done) {
        this.timeout(4000);
        request(app)
          .get('/api/get-order-books')
          .expect(400)
          .end(() => done());
      });
      it('should respond with custom order book with keys for each exchange', function(done) {
        this.timeout(4000);
        const exchanges = Object.keys(api);
        request(app)
          .get(`/api/get-order-books?market=BTC-XRP&exchanges=${exchanges.join(',')}`)
          .expect(200)
          .then(res => {
            const { body } = res
            expect(Object.keys(body).length).to.equal(Object.keys(api).length);
            return done();
          })
          .catch(err => done(err));
      });
    });
  });

  describe('get-supported-exchanges', () => {
    it('should respond with custom order book with keys for each exchange', function(done) {
      this.timeout(4000);
      const exchanges = Object.keys(api);
      request(app)
        .get('/api/get-supported-exchanges')
        .expect(200)
        .then(res => {
          const { body } = res
          expect(body.length).to.equal(Object.keys(api).length);
          return done();
        })
        .catch(err => done(err));
    });
  });
});
