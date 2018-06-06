import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'
import { operations, types } from './';


describe('operations', () => {

  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk])
  })

  describe('toggleExchange', () => {
    const state = {
      combinedOrderBook: {
        activeExchanges: {
          binance: false,
        }
      }
    }

    it('should toggle dispatch toggleExchange action', () => {
      const store = mockStore(state);
      store.dispatch(operations.toggleExchange('binance'));
      const actions = store.getActions();
      const expectedType = types.TOGGLE_EXCHANGE;
      expect(actions[0].type).to.equal(expectedType);
    })

    it('should pass the exchange as a payload', () => {
      const store = mockStore(state);
      const exchange = 'binance';
      store.dispatch(operations.toggleExchange(exchange));
      const actions = store.getActions();
      expect(actions[0].payload).to.equal(exchange);
    })
  })

  describe('fetchSupportedExchanges', () => {

    let store
    let mock

    const data = ['binance', 'bittrex', 'poloniex']

    beforeEach(() => {
      const state = {
        combinedOrderBook: {
          exchanges: [],
          activeExchanges: {},
        }
      }

      store = mockStore(state);
      mock = new MockAdapter(axios);

      mock
        .onGet('/api/get-supported-exchanges')
        .reply(200, data)
    })

    afterEach(() => {
      mock.reset();
      mock.restore();
    });

    it('should dispatch GET_SUPPORTED_EXCHANGES first', async () => {
      await store.dispatch(operations.fetchSupportedExchanges());
      const actions = store.getActions();
      const expectedAction = types.GET_SUPPORTED_EXCHANGES;
      expect(actions[0].type).to.equal(expectedAction);
    })

    it('should dispatch success action second with payload if 200', async () => {
      await store.dispatch(operations.fetchSupportedExchanges());
      const actions = store.getActions();
      const expectedAction = types.GET_SUPPORTED_EXCHANGES_SUCCESS;
      expect(actions[1].type).to.equal(expectedAction);
      expect(actions[1].payload).to.equal(data);
    })

  })
})
