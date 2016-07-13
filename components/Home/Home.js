/**
 * Created by andy on 12-Jul-16.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadSkills, applySkillFilter, applySkillSearch, applySkillPaging, applySkillSort } from '../../actions'
import selector from './homeSelector'

import Skill from '../Skill';



@connect(selector, { loadSkills, applySkillFilter, applySkillSearch, applySkillPaging, applySkillSort })
export default class Home extends Component {
	state = {
		loading: true
	};

	componentWillMount() {
		this.props.loadSkills();
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({loading: false});
		}, 800);
	}

	handleSort(type, event) {
		event.preventDefault();

		if (type === this.props.filters.sortBy) {
			this.props.applySkillSort(type, !this.props.filters.sortAsc);
		} else {
			this.props.applySkillSort(type, true);
		}
	}

	handleFilter(type, event) {
		this.props.applySkillFilter(type);
	}

	handleSearch(event) {
		const val = event.target.value;

		if (val !== this.props.filters.search) {
			this.props.applySkillSearch(val);
		}
	}

	handlePaging(page) {
		const limit = this.props.filters.limit;

		if (page === 'next')
			page = this.props.pages.find(page => page.active).page + 1;

		if (page === 'prev')
			page = this.props.pages.find(page => page.active).page - 1;

		this.props.applySkillPaging((page - 1) * limit, limit);
	}

	render() {
		const { loading, items, cats, total, filters, pages } = this.props;

		const sorts = [
			{
				title: 'By experience',
				prop: 'exp'
			}, {
				title: 'By Name',
				prop: 'title'
			}, {
				title: 'By Category',
				prop: 'cat'
			}
		];

		if (this.state.loading || loading)
			return <div className="page home"></div>;

		return <div className="page home">
			<div className="ui container">
				<div className="ui three column stackable grid">
					<div className="column">
						<img src={require('./avatar.jpg')} className="avatar"/>
					</div>
					<div className="middle aligned column">
						<h1>Who am I</h1>
						<p>
							<b>Software Engineer</b> with over 6 years of commercial experience in web programming.
						</p>
						<p>
							I specialize in <b>ECMAScript</b> (aka <b>JavaScript</b>)
							development of rich media content driven applications
							for all sorts of platforms.
						</p>
						<a className="ui teal button" href="http://achumak.name/cv.pdf">
							<i className="file pdf outline icon"/> Download CV in PDF
						</a>
					</div>
					<div className="middle aligned column">
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
				<h1>What do I do</h1>
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
				<h1>What do I have experience with</h1>
				<div className="ui two column stackable grid">
					<div className="column">
						<h4>Sort By</h4>
						{sorts.map(sort => (
							<div key={sort.prop}>
								<i className={`long arrow ${filters.sortBy !== sort.prop || !filters.sortAsc ? 'down' : 'up'} icon`}/>
								<a href="#" onClick={this.handleSort.bind(this, sort.prop)} className={filters.sortBy === sort.prop ? 'active' : ''}>{sort.title}</a>
							</div>
						))}
						<h4>Filter By Category</h4>
						<div className="ui form">
							{cats.map(cat => <div className="ui field" key={cat}>
								<div className="ui checkbox">
									<input type="checkbox" id={cat} checked={filters.excludeCats.indexOf(cat) === -1} onChange={this.handleFilter.bind(this, cat)} />
									<label htmlFor={cat}>{cat}</label>
								</div>
							</div>
							)}
						</div>
						<h4>Search</h4>
						<input type="text" value={filters.searching} onChange={this.handleSearch.bind(this)} />
						{filters.searching !== filters.search ? <div className="ui active inline mini loader"></div> : null}
					</div>
					<div className="column">
						<div className="ui raised segment">
						<h4>Showing {filters.skip} - {filters.skip + items.length} of {total} entries</h4>
						<div className="ui buttons">
							<button className="ui labeled icon button" disabled={pages[0].active} onClick={this.handlePaging.bind(this, 'prev')}>
								<i className="left chevron icon"/>
								Prev
							</button>
							{pages.map(page => <button key={page.page} className="ui button" disabled={page.active} onClick={this.handlePaging.bind(this, page.page)}>{page.page}</button>)}
							<button className="ui right labeled icon button" disabled={pages[pages.length - 1].active} onClick={this.handlePaging.bind(this, 'next')}>
								Next
								<i className="right chevron icon"/>
							</button>
						</div>
						{items.map(skill => <Skill key={skill.id} skill={skill} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}
