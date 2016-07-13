/**
 * Created by andy on 12-Jul-16.
 */
import React, {Component} from 'react';

export default class Home extends Component {
	render() {
		return <div className="page home">
			<div className="ui container">
				<div className="ui three column grid">
					<div className="column">
						<img src={require('./avatar.jpg')} className="avatar"/>
					</div>
					<div className="column">
						<h1>Who am I</h1>
						<p>
							<b>Software Engineer</b> with over 6 years of commercial experiance in web programming.
						</p>
						<p>
							I specialize in <b>ECMAScript</b> (aka <b>JavaScript</b>)
							development of rich media content driven application
							for all sorts of platforms.
						</p>
						<a className="ui teal button" href="http://achumak.name/cv.pdf">
							<i className="file pdf outline icon"/> Download CV in PDF
						</a>
					</div>
					<div className="column">
						<h1>How to contact me</h1>
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
			</div>
		</div>
	}
}
