import { episodeApi } from '../../helpers/episodeApi'
import { SET_CHARACTERS, SET_CURR_CHARACTER } from '../reducers/character.reducer'

export function getCharacters(episodeNum) {
	return async dispatch => {
		try {
			const characters = await episodeApi.getCharacters(episodeNum)
			const action = {
				type: SET_CHARACTERS,
				characters,
			}
			dispatch(action)
		} catch (error) {
			console.log('error:', error)
		}
	}
}
