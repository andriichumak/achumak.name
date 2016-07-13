/**
 * Created by andy on 13-Jul-16.
 */

import {
	LOAD_SKILLS, LOAD_SKILLS_SUCCESS, LOAD_SKILLS_ERROR,
	CLEAR_SKILLS,
	FILTER_SKILLS, PASS_SEARCH_SKILLS, SEARCH_SKILLS, SORT_SKILLS, PAGE_SKILLS
} from '../constants'

const actionMap = {
	[LOAD_SKILLS]: function(state, action) {
		return {
			...state,
			loading: true
		};
	},
	[LOAD_SKILLS_SUCCESS]: function(state, action) {
		return {
			...state,
			loading: false,
			loaded: true,
			error: false
		};
	},
	[LOAD_SKILLS_ERROR]: function(state, action) {
		return {
			...state,
			loading: false,
			error: true
		};
	},
	[CLEAR_SKILLS]: function(state, action) {
		return {
			loading: false,
			loaded: false,
			error: true,
			sortBy: 'exp',
			sortAsc: false,
			searching: '',
			search: '',
			excludeCats: [],
			skip: 0,
			limit: 10
		};
	},
	[FILTER_SKILLS]: function(state, action) {
		return {
			...state,
			skip: 0,
			limit: 10,
			excludeCats: ((newCats) => {
				let ind = newCats.indexOf(action.cat);

				if (ind === -1) {
					newCats.push(action.cat);
				} else {
					newCats.splice(ind, 1);
				}

				return newCats;
			})(state.excludeCats.slice(0))
		};
	},
	[PASS_SEARCH_SKILLS]: function(state, action) {
		return {
			...state,
			searching: action.search
		};
	},
	[SEARCH_SKILLS]: function (state, action) {
		return {
			...state,
			skip: 0,
			limit: 10,
			search: action.search,
			searching: action.search
		}
	},
	[PAGE_SKILLS]: function(state, action) {
		return {
			...state,
			skip: action.skip,
			limit: action.limit
		};
	},
	[SORT_SKILLS]: function(state, action) {
		return {
			...state,
			skip: 0,
			limit: 10,
			sortBy: action.prop,
			sortAsc: action.asc
		};
	}
};

export default function(state, action) {
	if (!state) {
		state = actionMap[CLEAR_SKILLS]();
	}

	if (action && (action.type in actionMap)) {
		state = actionMap[action.type](state, action);
	}

	return state;
}
