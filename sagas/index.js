/**
 * Created by andy on 12-Jul-16.
 */
import { fork } from 'redux-saga/effects';

import skillsSaga from './skills'

export default function* () {
	yield [
		fork(skillsSaga)
	];
}
