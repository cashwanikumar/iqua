import {
	GET_KEY_WORD_INFORMATION_BOX,
	GET_KEY_WORD_INFORMATION_BOX_SUCCESS,
	GET_KEY_WORD_MODEL_SCORE,
	GET_KEY_WORD_MODEL_SCORE_SUCCESS,
	SEARCH_KEY_WORD,
	FILTER_BY,
	LOADING,
} from './constants'

export const getKeywordBox = payload => ({
	type: GET_KEY_WORD_INFORMATION_BOX,
	payload,
})

export const getKeywordBoxSuccess = result => ({
	type: GET_KEY_WORD_INFORMATION_BOX_SUCCESS,
	result,
})

export const getKeyWordModal = payload => ({
	type: GET_KEY_WORD_MODEL_SCORE,
	payload,
})

export const getKeyWordModalSuccess = result => ({
	type: GET_KEY_WORD_MODEL_SCORE_SUCCESS,
	result,
})

export const searchKeyWord = keyword => ({
	type: SEARCH_KEY_WORD,
	keyword,
})

export const setFilterBy = keyword => ({
	type: FILTER_BY,
	keyword,
})

export const setLoading = status => ({
	type: LOADING,
	status,
})
