import axios from 'axios'

const getAllEpisodes = async (filter = 'S01') => {
	try {
		const episodes = await axios.get(`https://rickandmortyapi.com/api/episode/?episode=${filter}`)
		if (!episodes.data.results.length) return []
		return episodes.data.results
	} catch (error) {}
}

const getCharacters = async charactersArr => {
	try {
		const filter = charactersArr.join(',')
		const characters = await axios.get(`https://rickandmortyapi.com/api/character/${filter}`)

		if (!characters.data.length) return []
		return characters.data
	} catch (error) {}
}

export const rickMortyApi = {
	getAllEpisodes,
	getCharacters,
}
