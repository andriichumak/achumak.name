/**
 * Created by andy on 12-Jul-16.
 */
import React, {Component} from 'react';
import moment from 'moment';

export default class Home extends Component {
	shouldComponentUpdate(newProps, newState) {
		return false;
	}

	render() {
		return <div className="ui home container">
				<div className="ui doubling stackable grid">
					<div className="four wide column">
						<img src={require('./avatar.jpg')} className="avatar"/>
					</div>
					<div className="middle aligned six wide column">
						<h1 className="ui horizontal divider header">Andrii Chumak</h1>
						<p>
							<b>Software Engineer</b> with over {moment.duration(moment('2010-06-01').diff(moment())).humanize()} of commercial experience in web programming.
						</p>
						<p>
							I specialize in <b>ECMAScript</b> (aka <b>JavaScript</b>)
							development of rich media content driven applications
							for all sorts of platforms.
						</p>
						<a className="ui teal button" target="_blank" href="http://achumak.name/cv.pdf">
							<i className="file pdf outline icon"/> Download CV in PDF
						</a>
					</div>
					<div className="middle aligned six wide column">
						<h1 className="ui horizontal divider header">Contact</h1>
						<div className="ui list">
							<div className="item">
								<i className="marker icon"/>
								<div className="content">
									Prague, Czech Republic
								</div>
							</div>
							<div className="item">
								<i className="phone icon"/>
								<div className="content">
									<a href="tel:+420773131891">+420 773 131 891</a>
								</div>
							</div>
							<div className="item">
								<i className="mail icon"/>
								<div className="content">
									<a href="mailto:me@achumak.name">me@achumak.name</a>
								</div>
							</div>
							<div className="item">
								<i className="linkify icon"/>
								<div className="content">
									<a href="http://achumak.name">achumak.name</a>
								</div>
							</div>
							<div className="item">
								<i className="linkedin square icon"/>
								<div className="content">
									<a href="http://www.linkedin.com/in/andreychumak/en">LinkedIn</a>
								</div>
							</div>
							<div className="item">
								<i className="facebook square icon"/>
								<div className="content">
									<a href="https://www.facebook.com/chumak.andrey">FaceBook</a>
								</div>
							</div>
							<div className="item">
								<i className="instagram square icon"/>
								<div className="content">
									<a href="https://www.instagram.com/andrey_chumak/">Instagram</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<h1 className="ui horizontal divider header">What do I do</h1>
				<div className="ui three column stackable grid what-do-i-do">
					<div className="column">
						<div className="ui list">
							<div className="item">
								<i className="terminal icon"/>
								<div className="content">
									<b>ECMAScript</b> in lots of incarnations: web browsers, node.js, mobile/webview,
									SmartTV,
									HBBTV, Adobe plugins, desktop apps and probably anything that can run ECMAScript
								</div>
							</div>
							<div className="item">
								<i className="sitemap icon"/>
								<div className="content">
									Defining <b>API scheme</b>, designing infrastructure.
								</div>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="ui list">
							<div className="item">
								<i className="object group icon"/>
								<div className="content">
									Designing <b>UX/UI</b> concepts. Prototyping. Defining requirements and acceptance
									criterias, taxonomy and terminology for new projects.
								</div>
							</div>
							<div className="item">
								<i className="comments outline icon"/>
								<div className="content">
									Conducting <b>code reviews</b>, <b>coaching</b>. Interviewing potential team members and
									introducing new ones to company workflow.
								</div>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="ui list">
							<div className="item">
								<i className="fork icon"/>
								<div className="content">
									Organizing collaboration in team. Defining <b>Git workflow</b>, writing Jira stories,
									validating
									estimations.
								</div>
							</div>
							<div className="item">
								<i className="file video outline icon"/>
								<div className="content">
									Managing <b>documentation</b>. Preparing <b>video</b> walk­through tutorials, webcasts.
								</div>
							</div>
							<div className="item">
								<i className="file powerpoint outline icon"/>
								<div className="content">
									Preparing papers for <b>RFQs</b>, patents etc.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	}
}
