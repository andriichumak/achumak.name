/**
 * Created by andy on 13-Jul-16.
 */
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

import './topMenu.less'

export default class TopMenu extends Component {
	static contextTypes = {
		viewPort: React.PropTypes.any
	};

	shouldComponentUpdate(newProps, newState, newContext) {
		return newProps.activeIndex !== this.props.activeIndex
			|| newProps.items !== this.props.items
			|| newContext.viewPort.menuStacked !== this.context.viewPort.menuStacked;
	}

	render() {
		const items = this.props.items,
			itemStyle = {},
			hrStyle = {};

		let itemWidth;

		if (this.context.viewPort.menuStacked) {
			itemWidth = 100;
			itemStyle.width = `${itemWidth}%`;
			itemStyle.display = 'block';
			hrStyle.marginLeft = '50%';
			hrStyle.transform = `translate(-50%, -${10 + (items.length - 1 - this.props.activeIndex) * 50}px)`;
		} else {
			itemWidth = 100 / items.length;
			itemStyle.width = `${itemWidth}%`;
			itemStyle.display = 'inline-block';
			hrStyle.marginLeft = ((itemWidth * this.props.activeIndex) + itemWidth / 2) + '%';
			hrStyle.transform = 'translate(-50%, -10px)';
		}

		return (
			<ul className="topMenu">
				{items.map(item => <li key={item.to} style={itemStyle}>
					<Link to={item.to} activeClassName="active" onlyActiveOnIndex={item.index}>
						{item.title}
					</Link>
				</li>)}
				<hr style={hrStyle} />
			</ul>
		);
	}
};

TopMenu.propTypes = {
	items: PropTypes.array.isRequired,
	activeIndex: PropTypes.number.isRequired
};
