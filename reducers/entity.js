/**
 * Created by andy on 13-Jul-16.
 */
import {
	APPEND_ENTITIES,
	CLEAR_ENTITIES
} from '../constants'

const actionMap = {
	[APPEND_ENTITIES]: function(state, action) {
		state = {
			...state
		};

		Object.keys(action.entities).forEach(entityName => {
			const entities = action.entities[entityName];

			if (entityName in state) {
				state[entityName] = {
					...state[entityName],
					...entities
				};
			} else {
				state[entityName] = entities;
			}
		});

		return state;
	},
	[CLEAR_ENTITIES]: function(state, action) {
		if (!action || !action.entityType)
			return {};

		state = { ...state };
		delete state[action.entityType];

		return state;
	}
};

export default function(state, action) {
	if (!state) {
		state = actionMap[CLEAR_ENTITIES](state, action);
	}

	if (action && (action.type in actionMap)) {
		state = actionMap[action.type](state, action);
	}

	return state;
}
