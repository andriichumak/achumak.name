/**
 * Created by andy on 13-Jul-16.
 */
import 'isomorphic-fetch'
import { takeEvery, takeLatest } from 'redux-saga'
import { put, call, select } from 'redux-saga/effects'
import { normalize, Schema, arrayOf } from 'normalizr'

import { LOAD_SKILLS, PASS_SEARCH_SKILLS } from '../constants'
import { loadSkillsSuccess, loadSkillsError, appendEntities, doApplySkillSearch } from '../actions'

const skillScheme = new Schema('skill');
const skillsScheme = arrayOf(skillScheme);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function* doLoadSkills() {
	try {
		const resp = yield call(fetch, '/assets/api/skills.json');

		if (!resp.ok) {
			yield put(loadSkillsError());
		}

		const json = yield resp.json();

		const norm = normalize(json, skillsScheme);

		yield put(appendEntities(norm.entities));
		yield put(loadSkillsSuccess());
	} catch(e) {
		yield put(loadSkillsError());
	}
}

function* throttleSearch(action) {
	yield call(delay, 500);

	const currentSearch = yield select(store => store.skill.search);

	if (currentSearch !== action.search) {
		yield put(doApplySkillSearch(action.search));
	}
}

export default function* () {
	yield [
		takeEvery(LOAD_SKILLS, doLoadSkills),
		takeLatest(PASS_SEARCH_SKILLS, throttleSearch)
	];
}
