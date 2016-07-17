/**
 * Created by andy on 15-Jul-16.
 */
export default {
	viewPort(width, height) {
		const out = {};

		out.menuStacked = width < 520;
		out.headerHeight = out.menuStacked ? 151 : 51;
		out.viewPortHeight = height - out.headerHeight;

		return out;
	}
};
