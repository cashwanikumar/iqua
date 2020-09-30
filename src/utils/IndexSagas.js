import { all } from 'redux-saga/effects'
import AppSagas from '../containers/AppContainer/sagas'

export default function* IndexSaga() {
	yield all([
		...AppSagas.map(saga => saga()),
	])
}
