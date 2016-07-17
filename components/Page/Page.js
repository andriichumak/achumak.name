/**
 * Created by andy on 17-Jul-16.
 */
import React, { Component } from 'react';

export default class Page extends Component {
	static contextTypes = {
		viewPort: React.PropTypes.any
	};

	render() {
		const style = {
			top: this.context.viewPort.headerHeight,
			minHeight: this.context.viewPort.viewPortHeight
		};
		
		return <div className="page" style={style}>
			{this.props.children}
			<footer>
				See source code for this page on <i className="ui github icon" />
				<a href="https://github.com/andreychumak/achumak.name" target="_blank">GitHub</a>
			</footer>
		</div>
	}
}
