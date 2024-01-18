import axios from 'axios'

const getAllEpisodes = async (filter = 's01') => {
	try {
		const episodes = await axios.get(`https://rickandmortyapi.com/api/episode/?episode=${filter}`)
		if (!episodes.data.results.length) return []
		return episodes.data.results
	} catch (error) {}
}

const getCharacters = async (filter = '1') => {
	try {
		const characters = await axios.get(
			`https://rickandmortyapi.com/api/character/?episode=${filter}`
		)
		if (!characters.data.results.length) return []
		return characters.data.results
	} catch (error) {}
}

export const episodeApi = {
	getAllEpisodes,
	getCharacters,
}
