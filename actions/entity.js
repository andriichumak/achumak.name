/**
 * Created by andy on 13-Jul-16.
 */

import  { APPEND_ENTITIES, CLEAR_ENTITIES } from '../constants'

export function appendEntities(entities) {
	return {
		type: APPEND_ENTITIES,
		entities
	};
}

export function clearEntities(entityType = null) {
	return {
		type: CLEAR_ENTITIES,
		entityType
	}
}
