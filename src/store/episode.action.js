import { episodeApi } from '../helpers/episodeApi'
import { SET_EPISODES, SET_FILTER } from './episode.reducer'

export function loadEpisodes() {
	return async (dispatch, getState) => {
		try {
			const episodes = await episodeApi.getAllEpisodes(getState().filterBy)
			const action = {
				type: SET_EPISODES,
				episodes,
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
