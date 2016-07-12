/**
 * Created by andy on 12-Jul-16.
 */
if (process.env.NODE_ENV === 'production') {
	module.exports = require('./configureStore.prod')
} else {
	module.exports = require('./configureStore.dev')
}
