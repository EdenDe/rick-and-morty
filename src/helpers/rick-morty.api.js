import axios from 'axios'

const getAllEpisodes = async (filter = '1') => {
	try {
		const episodes = await axios.get(`https://rickandmortyapi.com/api/episode/?episode=s0${filter}`)
		if (!episodes.data.results.length) return []
		return episodes.data.results
	} catch (error) {
		console.log("couldn't get all episodes from API", error)
	}
}

const getEpisode = async (filter = '1') => {
	try {
		const episode = await axios.get(`https://rickandmortyapi.com/api/episode/${filter}`)
		if (!episode.data) return []
		return episode.data
	} catch (error) {
		console.log("couldn't get the episode from API", error)
	}
}

const getCharacters = async charactersArr => {
	try {
		const filter = charactersArr.join(',')
		const { data: characters } = await axios.get(
			`https://rickandmortyapi.com/api/character/${filter}`
		)

		if (!characters.length) return []
		return characters
	} catch (error) {
		console.log("couldn't get characters from API", error)
	}
}

export const rickMortyApi = {
	getAllEpisodes,
	getCharacters,
	getEpisode,
}
