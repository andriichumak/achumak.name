/**
 * Created by andy on 14-Jul-16.
 */
import { createSelector } from 'reselect'

// Compose re-select
const filters = state => state.skill || {};
const items = state => state.entity.skill || {};

export default createSelector([filters, items], (filters, items) => {
	const itemsArr = Object.entries(items)
		.map(entry => entry[1]);

	const cats = [];
	itemsArr.forEach(item => {
		if (cats.indexOf(item.cat) === -1) {
			cats.push(item.cat);
		}
	});
	cats.sort();

	const itemsFiltered = itemsArr
		.filter(skill => {
			// Filtered by category
			if (filters.excludeCats.indexOf(skill.cat) !== -1)
				return false;

			// Filtered by text search
			if (filters.search !== '' && skill.title.toLowerCase().indexOf(filters.search.toLowerCase()) === -1)
				return false;

			return true;
		})
		.sort((a, b) => {
			const mult = filters.sortAsc ? 1 : -1;

			a = a[filters.sortBy];
			b = b[filters.sortBy];

			if (typeof a === 'string') {
				a = a.toLowerCase();
				b = b.toLowerCase();
			}

			return mult * (a > b ? 1 : -1);
		});

	return {
		filters: {
			...filters
		},
		total: itemsFiltered.length,
		items: itemsFiltered.slice(filters.skip, +filters.skip + +filters.limit),
		pages: (() => {
			const pagesCount = Math.ceil(itemsFiltered.length / filters.limit),
				currentPageIndex = filters.skip / filters.limit,
				pages = [];

			for (let i = 0; i < pagesCount; i++) {
				pages.push({
					page: i + 1,
					active: i === currentPageIndex
				});
			}

			if (!pages.length) {
				pages.push({
					page: 1,
					active: true
				});
			}

			return pages;
		})(),
		cats
	};
});
