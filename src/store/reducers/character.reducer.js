export const SET_CHARACTERS = 'SET_CHARACTERS'
export const SET_CURR_CHARACTER = 'SET_CURR_CHARACTER'

const INITIAL_STATE = {
	characters: [],
	currCharacter: null,
}

export function characterReducer(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case SET_CHARACTERS:
			return {
				...state,
				characters: action.characters,
			}
		case SET_CURR_CHARACTER:
			return { ...state, currCharacter: action.currCharacter }
		default:
			return { ...state }
	}
}
