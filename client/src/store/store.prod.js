import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../rootReducer'

export default (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(ReduxThunk))
  )
