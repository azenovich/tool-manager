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
	
	switch (action.type) {
		case actionConstants.DISPLAY_TOOL_PAGE: {
			const { pageIndex } = action

			return {
				...state,
				pageIndex: pageIndex
			}
		}

		case actionConstants.ADD_NEW_TOOL: {
			const { name, toolType, location } = action
			const { pageSize } = state
			let items = state.items
			
			items = items.concat({
				id: items.length,
				name,
				type: toolType,
				location
			})

			storage.saveItems(items)
			const totalNumberOfPage = getTotalNumberOfPage(items.length, pageSize)
			
			return {
				...state,
				items: items,
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