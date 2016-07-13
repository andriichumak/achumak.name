/**
 * Created by andy on 13-Jul-16.
 */
import React, { Component } from 'react'

export default class Skill extends Component {
	render() {
		const { skill } = this.props;

		return <div className="skill">
			<h4>{skill.title}</h4>
			<span className="ui mini label">{skill.cat}</span>
			<div className="ui tiny blue progress">
				<div className="bar" style={{width: (skill.exp * 100) + '%'}}></div>
			</div>
		</div>;
	}
}
