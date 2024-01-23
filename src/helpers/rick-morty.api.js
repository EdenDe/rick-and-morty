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
		const { data: characters } = await axios.get(
			`https://rickandmortyapi.com/api/character/${filter}`
		)

		if (!characters.length) return []

		characters.forEach((character, index) => {
			if (characters.length !== index + 1) {
				character.nextCharacter = characters[index + 1]
			}
			if (index !== 0) {
				character.prevCharacter = characters[index - 1]
			}
		})

		return characters
	} catch (error) {}
}

export const rickMortyApi = {
	getAllEpisodes,
	getCharacters,
}
