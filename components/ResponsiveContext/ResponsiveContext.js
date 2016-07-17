/**
 * Created by andy on 14-Jul-16.
 */
import { Component, PropTypes } from 'react';
import config from '../../config';

export default class ResponsiveContext extends Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = { viewPort: ResponsiveContext.buildViewPort()};
	}

	static childContextTypes = {
		viewPort: PropTypes.any
	};

	getChildContext() {
		return {
			viewPort: this.state.viewPort
		};
	}

	componentWillMount() {
		window.addEventListener('resize', this.update);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.update);
	}
	
	static buildViewPort() {
		return config.viewPort(
			document.documentElement.clientWidth,
			document.documentElement.clientHeight
		);
	}

	/**
	 * Apply throttling to prevent extra renders
	 */
	update() {
		if (this.timeout)
			return;

		this.timeout = setTimeout(() => {
			this.timeout = false;
			this.setState({viewPort: ResponsiveContext.buildViewPort()});
		}, 300);
	}

	render() {
		return this.props.children;
	}
}
