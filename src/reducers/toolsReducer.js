import actionConstants from 'constants/actionConstants'
import storage from 'utils/storage'

const initState = {
	items: [],
	total: 0
};

const toolsReducer = (state = initState, action) => {
	console.log(action)

	switch (action.type) {
		case actionConstants.DISPLAY_TOOL_PAGE: {
			const { pageSize, pageIndex } = action
			const tools = storage.getItem();
			const count = tools.count;
			let shift = pageSize * pageIndex

			shift = (shift > count) ? count : shift

			return {
				...state,
				items: tools.slice(shift, shift + pageSize)
			}
		}

		default: {
			return state
		}
	}
}

export default toolsReducer