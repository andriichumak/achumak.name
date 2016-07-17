/**
 * Created by andy on 12-Jul-16.
 */
import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from '../routes'
import ResponsiveContext from './ResponsiveContext';

export default class Root extends Component {
	render() {
		const { store, history } = this.props;
		return (
			<Provider store={store}>
				<ResponsiveContext>
					<Router history={history} routes={routes} />
				</ResponsiveContext>
			</Provider>
		)
	}
}

Root.propTypes = {
	store: PropTypes.object.isRequired
};
