/**
 * Created by andy on 12-Jul-16.
 */
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import saga from '../sagas';

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware, createLogger())
	);

	sagaMiddleware.run(saga);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}
