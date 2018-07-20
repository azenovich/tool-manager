import actionConstants from 'constants/actionConstants'
import storage from 'utils/storage'

const items = storage.getItems()
const pageSize = 5;

const getTotalNumberOfPage = (count, pageSize) => {
	return Math.ceil(count / pageSize) - 1
}

const initState = {
	items: items,
	totalNumberOfPage: getTotalNumberOfPage(items.length, pageSize),
	pageIndex: 0,
	pageSize: pageSize
};

const toolsReducer = (state = initState, action) => {
	console.log(state)
	
	switch (action.type) {
		case actionConstants.DISPLAY_TOOL_PAGE: {
			const { pageIndex } = action
			
			console.log({
				...state,
				pageIndex: pageIndex
			})

			return {
				...state,
				pageIndex: pageIndex
			}
		}

		case actionConstants.ADD_NEW_TOOL: {
			const { name, toolType, location } = action
			const { items, pageSize } = state
			
			items.concat({
				name,
				type: toolType,
				location
			})

			const totalNumberOfPage = getTotalNumberOfPage(items.length, pageSize)

			return {
				...state,
				totalNumberOfPage: totalNumberOfPage,
				pageIndex: totalNumberOfPage
			}
		}

		default: {
			return state
		}
	}
}

export default toolsReducer