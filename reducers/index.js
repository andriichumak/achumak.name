/**
 * Created by andy on 12-Jul-16.
 */
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import skill from './skills'
import entity from './entity'

const rootReducer = combineReducers({
	routing,
	skill,
	entity
});

export default rootReducer;
