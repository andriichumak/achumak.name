/**
 * Created by andy on 12-Jul-16.
 */
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Mock data
import employment from './dataMocks'

export default class Experience extends Component {
	state = {
		active: 'mineus'
	};

	handleClick(item) {
		this.setState({
			active: item === this.state.active ? '' : item
		});
	}

	render() {
		return <div className="page experience">
			<h1>My experience</h1>
			<div className="ui styled fluid accordion">
				{employment.map(job => (
					<div key={job.id}>
						<div className={`${this.state.active === job.id ? 'active' : ''} title`} onClick={this.handleClick.bind(this, job.id)}>
							<i className="dropdown icon"/>
							<b>{job.title}</b> [{job.dates[0].format('MMMM YYYY')} - {job.dates[1] ? job.dates[1].format('MMMM YYYY') : 'current'}] {job.role}
						</div>
						<ReactCSSTransitionGroup component="div"
						                         transitionName="accordion"
						                         transitionEnterTimeout={300}
						                         transitionLeaveTimeout={300}>
							{this.state.active === job.id ?
								<div key={`content${job.id}`} className="active content">
									<div className="ui horizontal bulleted list">
										{job.links.map(link => <a className="item" key={link} href={link} target="_blank">{link}</a>)}
									</div>
									<ul>
										{job.obligations.map(obl => <li key={obl}>{obl}</li>)}
									</ul>
								</div>
							: null }
						</ReactCSSTransitionGroup>
					</div>
				))}
			</div>
		</div>
	}
}
