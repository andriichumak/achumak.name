/**
 * Created by andy on 12-Jul-16.
 */
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import saga from '../sagas';

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	);

	sagaMiddleware.run(saga);

	return store;
}
