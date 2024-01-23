import { rickAndMortyService } from '../helpers/rock-morty.service'
import {
	SET_EPISODES,
	SET_FILTER,
	SET_CURR_EPISODE,
	SET_CURR_CHARACTER,
} from './rick-morty.reducer'

export function loadEpisodes() {
	return async (dispatch, getState) => {
		try {
			const episodes = await rickAndMortyService.getEpisodes(getState().filterBy)
			const action = { type: SET_EPISODES, episodes }
			dispatch(action)
		} catch (error) {
			console.log('error:', error)
		}
	}
}

export function setEpisode(episodeId) {
	return async (dispatch, getState) => {
		try {
			const currEpisode = await rickAndMortyService.getEpisode(getState().episodes, episodeId)
			const action = { type: SET_CURR_EPISODE, currEpisode }
			dispatch(action)
		} catch (error) {
			console.log('error:', error)
		}
	}
}

export function setCharacter(characterId) {
	return async (dispatch, getState) => {
		try {
			const currCharacter = await rickAndMortyService.getCharacter(
				getState().currEpisode.characters,
				characterId
			)

			const action = {
				type: SET_CURR_CHARACTER,
				currCharacter,
			}
			dispatch(action)
		} catch (error) {
			console.log('error:', error)
		}
	}
}

export function setFilterBy(filter) {
	return dispatch => {
		dispatch({ type: SET_FILTER, filterBy: filter })
	}
}
