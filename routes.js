/**
 * Created by andy on 12-Jul-16.
 */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

export default (
	<Route path="/">
		<IndexRoute component={() => <div>TEST</div>}/>
	</Route>
);
