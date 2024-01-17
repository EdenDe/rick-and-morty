export const SET_EPISODES = 'SET_EPISODES'
export const SET_FILTER = 'SET_FILTER'

const INITIAL_STATE = {
	episodes: [],
	filterBy: 's01',
}

export function episodeReducer(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case SET_EPISODES:
			return {
				...state,
				episodes: action.episodes,
			}
		case SET_FILTER:
			return { ...state, filterBy: action.filterBy }
		default:
			return { ...state }
	}
}
