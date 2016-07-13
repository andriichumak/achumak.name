/**
 * Created by andy on 13-Jul-16.
 */
import {
	LOAD_SKILLS, LOAD_SKILLS_SUCCESS, LOAD_SKILLS_ERROR,
	FILTER_SKILLS, PASS_SEARCH_SKILLS, SEARCH_SKILLS, SORT_SKILLS, PAGE_SKILLS
} from '../constants';

export function loadSkills() {
	return {
		type: LOAD_SKILLS
	};
}

export function loadSkillsSuccess() {
	return {
		type: LOAD_SKILLS_SUCCESS
	}
}

export function loadSkillsError() {
	return {
		type: LOAD_SKILLS_ERROR
	}
}

export function applySkillFilter(cat) {
	return {
		type: FILTER_SKILLS,
		cat
	}
}

export function applySkillSearch(search) {
	return {
		type: PASS_SEARCH_SKILLS,
		search
	}
}

export function doApplySkillSearch(search) {
	return {
		type: SEARCH_SKILLS,
		search
	}
}

export function applySkillSort(prop, asc) {
	return {
		type: SORT_SKILLS,
		prop, asc
	}
}

export function applySkillPaging(skip = 0, limit = 10) {
	return {
		type: PAGE_SKILLS,
		skip, limit
	}
}
