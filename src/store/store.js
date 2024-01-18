import { thunk } from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { episodeReducer } from './reducers/episode.reducer'
import { characterReducer } from './reducers/character.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
	episodeModule: episodeReducer,
	characterModule: characterReducer,
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
