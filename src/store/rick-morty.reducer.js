export const SET_EPISODES = 'SET_EPISODES'
export const SET_FILTER = 'SET_FILTER'
export const SET_CURR_EPISODE = 'SET_CURR_EPISODE'
export const SET_CHARACTERS = 'SET_CHARACTERS'
export const SET_CURR_CHARACTER = 'SET_CURR_CHARACTER'

const INITIAL_STATE = {
	episodes: [],
	filterBy: 's01',
	currEpisode: '',
	characters: [],
	currCharacter: '',
}

export function rickMortyReducer(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case SET_EPISODES:
			return {
				...state,
				episodes: action.episodes,
			}
		case SET_FILTER:
			return { ...state, filterBy: action.filterBy }
		case SET_CURR_EPISODE:
			return { ...state, currEpisode: action.currEpisode }
		case SET_CHARACTERS:
			return { ...state, characters: action.characters }
		case SET_CURR_CHARACTER:
			return { ...state, currCharacter: action.currCharacter }
		default:
			return { ...state }
	}
}
