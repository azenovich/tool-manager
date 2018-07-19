import actionConstants from 'constants/actionConstants'
import storage from 'utils/storage'

const initState = {
	items: [],
	totalNumberOfPage: 0,
	pageIndex: 0,
	pageSize: 0
};

const toolsReducer = (state = initState, action) => {

	switch (action.type) {
		case actionConstants.DISPLAY_TOOL_PAGE: {
			const { pageSize, pageIndex } = action
			console.log(action)

			const items = storage.getItem();
			const shift = pageSize * pageIndex
			const totalNumberOfPage = Math.ceil(items.length / pageSize) - 1;
			
			return {
				items: items.slice(shift, shift + pageSize),
				pageIndex: pageIndex,
				pageSize: pageSize,
				totalNumberOfPage: totalNumberOfPage
			}
		}

		default: {
			return state
		}
	}
}

export default toolsReducer