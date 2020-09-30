import { fromJS } from 'immutable'
import {
	FILTER_BY,
	GET_KEY_WORD_INFORMATION_BOX_SUCCESS,
	GET_KEY_WORD_MODEL_SCORE_SUCCESS,
	LOADING,
	SEARCH_KEY_WORD,
} from './constants'
const initialState = fromJS({
	info: {},
	model: {
		parameters: [],
		scores: [],
	},
	searchVia: '',
	filterBy: 'all',
	loading: false,
})

/* eslint-disable no-fallthrough */
function AppReducer(state = initialState, action) {
	switch (action.type) {
		case GET_KEY_WORD_INFORMATION_BOX_SUCCESS:
			return state.set('info', fromJS(action.result))

		case GET_KEY_WORD_MODEL_SCORE_SUCCESS:
			return state.set('model', fromJS(action.result))

		case SEARCH_KEY_WORD:
			return state.set('searchVia', fromJS(action.keyword))

		case FILTER_BY:
			return state.set('filterBy', fromJS(action.keyword))

		case LOADING:
			return state.set('loading', fromJS(action.status))

		default:
			return state
	}
}
/* eslint-enable no-fallthrough */

export default AppReducer
