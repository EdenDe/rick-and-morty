import { thunk } from 'redux-thunk'
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { episodeReducer } from './reducers/episode.reducer'
import { characterReducer } from './reducers/character.reducer'
import { rickMortyReducer } from './rick-morty.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const rootReducer = combineReducers({
// 	episodeModule: episodeReducer,
// 	characterModule: characterReducer,
// })

export const store = createStore(rickMortyReducer, composeEnhancers(applyMiddleware(thunk)))
