/**
 * Created by andy on 12-Jul-16.
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';
import Root from './components/Root';
import moment from 'moment';

moment.locale('en-gb');

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const app = document.createElement('div');
document.body.appendChild(app);

render(
	<Root store={store} history={history} />,
	app
);
