import { takeLatest, call, put } from 'redux-saga/effects'

import { getKeywordBoxSuccess, getKeyWordModalSuccess, searchKeyWord, setLoading } from './actions'

import { GET_KEY_WORD_INFORMATION_BOX, GET_KEY_WORD_MODEL_SCORE } from './constants'

import { getKeywordInformationBox, getKeywordModelScore } from '../../utils/service/adService'

function* fetchKeywordInfo({ payload }) {
	try {
		yield put(setLoading(true))
		yield put(searchKeyWord(payload.keyWord))
		const result = yield call(getKeywordInformationBox, payload.keyWord)
		yield put(getKeywordBoxSuccess(result))
		yield put(setLoading(false))
	} catch (error) {
		// todo
	}
}

function* fetchKeywordModelScore({ payload }) {
	try {
		yield put(setLoading(true))
		const result = yield call(getKeywordModelScore, payload.keyWord)
		yield put(getKeyWordModalSuccess(result))
		yield put(setLoading(false))
	} catch (error) {
		yield put(setLoading(false))
		// todo
	}
}

function* fetchKeywordModelScoreSaga() {
	yield takeLatest(GET_KEY_WORD_MODEL_SCORE, fetchKeywordModelScore)
}

function* fetchKeywordInfoSaga() {
	yield takeLatest(GET_KEY_WORD_INFORMATION_BOX, fetchKeywordInfo)
}

export default [fetchKeywordInfoSaga, fetchKeywordModelScoreSaga]
