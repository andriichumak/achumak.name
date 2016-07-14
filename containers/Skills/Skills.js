/**
 * Created by andy on 12-Jul-16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSkills, applySkillFilter, applySkillSearch, applySkillPaging, applySkillSort } from '../../actions'
import selector from './skillsSelector'

import Skill from '../../components/Skill';

@connect(selector, { loadSkills, applySkillFilter, applySkillSearch, applySkillPaging, applySkillSort })
export default class Skills extends Component {
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
				title: 'experience',
				prop: 'exp'
			}, {
				title: 'name',
				prop: 'title'
			}, {
				title: 'category',
				prop: 'cat'
			}
		];

		if (this.state.loading || loading)
			return <div className="page skills"></div>;

		return <div className="page skills">
			<h1>Skill matrix</h1>
			<div className="ui two column stackable grid">
				<div className="six wide column">
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
				</div>
				<div className="ten wide column">
					<div className="ui raised segment form" style={{height:'800px'}}>
						<h4>Search {filters.searching !== filters.search ? <span className="ui active inline mini loader"/> : null}</h4>
						<div className="field">
							<input type="text" value={filters.searching} onChange={this.handleSearch.bind(this)} placeholder="Search" />
						</div>
						<h4>Showing {filters.skip} - {filters.skip + items.length} of {total} entries</h4>
						{items.map(skill => <Skill key={skill.id} skill={skill} />)}
						<div className="paging">
							<div className="ui buttons center">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	}
}
