import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {
	connectRouter,
	ConnectedRouter,
	routerMiddleware as router
} from 'connected-react-router/immutable'
import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// Import the index reducer and sagas
import IndexReducer from './utils/IndexReducer'
import IndexSagas from './utils/IndexSagas'

// Import all of our components
import App from './components/App'
import NoMatch from './components/NoMatch'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import app names

// Other Imports
import * as registerServiceWorker from './serviceWorker';


// Create browser history
const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const routerMiddleware = router(history)

// Build the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware()

/*eslint-disable */
const composeSetup =
	process.env.NODE_ENV !== 'production' &&
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose
/* eslint-enable */
// Setup Store
const store = createStore(
	connectRouter(history)(IndexReducer(history)),
	composeSetup(
		applyMiddleware(
			routerMiddleware,
			sagaMiddleware,
		)
	) // allows redux devtools to watch sagas
)

// Begin our Index Saga
sagaMiddleware.run(IndexSagas)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route path="/" component={App} />
				<Route component={NoMatch} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker.register()
