const expect = require('chai').expect;
const request = require('supertest');
const createServer = require('../server.js');
const api = require('../routes/api');

describe('API Routes', () => {
  var app;

  before(done => {
    app = createServer();
    app.listen((err) => {
      if (err) return done(err);
      return done();
    });
  });


  describe('get-order-books', () => {
    it('should return 400 if exchanges not included with request', function(done) {
      this.timeout(4000);
      request(app)
        .get('/api/get-order-books')
        .expect(400)
        .end(() => done());
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
