import { rickMortyApi } from './rick-morty.api'

const getEpisodes = async (filter = '1') => {
	try {
		return await rickMortyApi.getAllEpisodes(filter)
	} catch (error) {
		console.log("couldn't get all episodes", error)
		throw error
	}
}

const getEpisode = async (episodes, episodeId) => {
	try {
		var currEpisode = episodes?.find(episode => episode.id == episodeId)
		if (!currEpisode) currEpisode = await rickMortyApi.getEpisode(episodeId)
		currEpisode.charactersList = await _setCharacters(currEpisode)
		return currEpisode
	} catch (error) {
		console.log("couldn't get the episode", error)

		throw error
	}
}

const getCharacter = (characters, characterId) => {
	try {
		var currCharacter = characters.find(character => character.id == characterId)
		debugger
		currCharacter.episodeList = currCharacter.episode.map(episode => {
			return episode.split('/').at(-1)
		})
		return currCharacter
	} catch (error) {
		console.error('couldnt find character:', error)
		throw error
	}
}

const _setCharacters = async episode => {
	try {
		debugger
		const characterIDList = episode.characters.map(episode => {
			return episode.split('/').at(-1)
		})
		const characters = await rickMortyApi.getCharacters(characterIDList)
		characters.forEach((character, index) => {
			if (characters.length !== index + 1) {
				character.nextCharacter = characters[index + 1]
			}
			if (index !== 0) {
				character.prevCharacter = characters[index - 1]
			}
		})
		return characters
	} catch (error) {
		console.log("couldn't get characters", error)
		throw error
	}
}

export const rickAndMortyService = {
	getEpisodes,
	getEpisode,
	getCharacter,
}
