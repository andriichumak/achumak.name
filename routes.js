/**
 * Created by andy on 12-Jul-16.
 */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/App'
import Index from './components/Home'
import Skills from './components/Skills'
import Experience from './components/Experience'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Index}/>
		<Route path="/skills" component={Skills}/>
		<Route path="/experience" component={Experience}/>
	</Route>
);
