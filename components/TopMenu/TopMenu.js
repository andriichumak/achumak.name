/**
 * Created by andy on 13-Jul-16.
 */
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

import './topMenu.less'

export default class TopMenu extends Component {
	shouldComponentUpdate(newProps) {
		return newProps.activeIndex !== this.props.activeIndex
			|| newProps.items !== this.props.items;
	}

	render() {
		const items = this.props.items;
		const itemWidth = 100 / items.length;

		return (
			<ul className="topMenu">
				{items.map(item => <li key={item.to} style={{width: itemWidth + '%'}}>
					<Link to={item.to} activeClassName="active" onlyActiveOnIndex={item.index}>
						{item.title}
					</Link>
				</li>)}
				<hr style={{marginLeft: ((itemWidth * this.props.activeIndex) + itemWidth / 2) + '%'}} />
			</ul>
		);
	}
};

TopMenu.propTypes = {
	items: PropTypes.array.isRequired,
	activeIndex: PropTypes.number.isRequired
};
