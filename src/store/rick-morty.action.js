import { rickMortyApi } from '../helpers/rick-morty.api'
import {
	SET_EPISODES,
	SET_FILTER,
	SET_CURR_EPISODE,
	SET_CHARACTERS,
	SET_CURR_CHARACTER,
} from './rick-morty.reducer'

export function loadEpisodes() {
	return async (dispatch, getState) => {
		try {
			const episodes = await rickMortyApi.getAllEpisodes(getState().filterBy)
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

export function setEpisode(episodeId) {
	return (dispatch, getState) => {
		try {
			const episodes = getState().episodes
			const currEpisode = episodes.find(episode => episode.id == episodeId)
			const action = {
				type: SET_CURR_EPISODE,
				currEpisode,
			}
			dispatch(action)
		} catch (error) {
			console.log('error:', error)
		}
	}
}

export function setCharacters(episodeNum) {
	return async (dispatch, getState) => {
		try {
			const episode = getState().currEpisode
			episode.characterList = episode.characters.map(episode => {
				return episode.split('/').at(-1)
			})

			const characters = await rickMortyApi.getCharacters(episode.characterList)
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

export function setCharacter(characterId) {
	return async (dispatch, getState) => {
		try {
			const characters = getState().characters
			var currCharacter = characters.find(character => character.id == characterId)

			currCharacter.episodeList = currCharacter.episode.map(episode => {
				return episode.split('/').at(-1)
			})

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
