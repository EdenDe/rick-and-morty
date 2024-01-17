import { thunk } from 'redux-thunk'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import { episodeReducer } from './episode.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(episodeReducer, composeEnhancers(applyMiddleware(thunk)))
