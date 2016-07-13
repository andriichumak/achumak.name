/**
 * Created by andy on 12-Jul-16.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TopMenu from '../TopMenu';

const menuItems = [
	{
		to: '/',
		index: true,
		title: 'Home'
	},
	{
		to: '/skills',
		index: false,
		title: 'Skills'
	},
	{
		to: '/experience',
		index: false,
		title: 'Experience'
	},
	{
		to: '/education',
		index: false,
		title: 'Education'
	}
];

export default class App extends Component {
	state = {
		inverseTransition: false,
		activeIndex: 0
	};

	componentWillReceiveProps(newProps) {
		if (newProps && newProps.location.pathname !== this.props.location.pathname) {
			const newIndex = menuItems.findIndex((item) => item.to === newProps.location.pathname);
			const isInverse = newIndex < this.state.activeIndex;

			this.setState({
				activeIndex: newIndex,
				inverseTransition: isInverse
			});
		}
	}

	componentWillMount() {
		this.setState({
			activeIndex: menuItems.findIndex((item) => item.to === this.props.location.pathname)
		});
	}

	render() {
		const { children, location } = this.props;
		const { activeIndex, inverseTransition } = this.state;

		return <div className="appRoot">
			<TopMenu items={menuItems} activeIndex={activeIndex}/>

			<ReactCSSTransitionGroup
				component="div"
				transitionName={inverseTransition ? 'pageFlipInverse' : 'pageFlip'}
				transitionEnterTimeout={800}
				transitionLeaveTimeout={800}
			    className="pageWrap"
			>
				{React.cloneElement(children, {
					key: location.pathname
				})}
			</ReactCSSTransitionGroup>
		</div>
	}
}
