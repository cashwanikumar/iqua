import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router'
import AppReducer from '../containers/AppContainer/reducers'

const IndexReducer = history => combineReducers({
	router: connectRouter(history),
	AppReducer
})

export default IndexReducer
