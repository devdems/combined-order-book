import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../rootReducer'

export default (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools({})(applyMiddleware(ReduxThunk)),
  )
