import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'
import reducer, { operations, types } from './';


describe('operations', () => {

  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk])
  })

  describe('toggleExchange', () => {
    const state = {
      activeExchanges: {
        binance: false,
        bittrex: true,
      }
    }

    it('should set the target exchange to active if it wasnt', () => {
      const newState = reducer(state, operations.toggleExchange('binance'));
      expect(newState.activeExchanges.binance)
        .to.equal(true);
    })

    it('should set the target exchange to inactive if it was', () => {
      const newState = reducer(state, operations.toggleExchange('bittrex'));
      expect(newState.activeExchanges.binance)
        .to.equal(false);
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
    })
  })

  describe('setMarketPair', () => {
    it('should set the market pair correctly', () => {

    })
  })
})
