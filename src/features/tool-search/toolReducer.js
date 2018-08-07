import actionType from '../shared/constants/actionType'
import storage from '../shared/utils/storage'

const items = storage.getItems()
const pageSize = 5;

const getTotalNumberOfPage = (count, pageSize) => {
	return Math.ceil(count / pageSize) - 1
}

const initState = {
	items: items,
	totalNumberOfPage: getTotalNumberOfPage(items.length, pageSize),
	pageIndex: 0,
	pageSize: pageSize,
	toolItem: null
};

const toolReducer = (state = initState, action) => {
	
	switch (action.type) {
		case actionType.DISPLAY_TOOL_PAGE: {
			const { pageIndex } = action

			return {
				...state,
				pageIndex: pageIndex
			}
		}

		case actionType.ADD_NEW_TOOL: {
			const { name, toolType, location } = action
			const { pageSize } = state
			let items = state.items
			
			items = items.concat({
				id: items.length + 1,
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

		case actionType.EDIT_TOOL: {
			const { id, name, toolType, location } = action
			const { pageSize, items } = state

			let indexItem = -1;
			const item = items.find((item, index) => {
				if (item.id === id) {
					indexItem = index
					return true
				}	

				return false
			})

			let pageIndex = 0
			if (item && indexItem !== -1) {
				item.id = id
				item.name = name
				item.type = toolType
				item.location = location

				pageIndex = Math.floor(indexItem  / pageSize)
				storage.saveItems(items)
			} 		

			return {
				...state,
				items: items,
				pageIndex: pageIndex
			}
		}

		case actionType.SHOW_ADD_EDIT_TOOL_FORM: {
			const { toolId } = action
			const { items } = state
			let item = null

			if (toolId) {
				item = items.find((item) => {
					if (item.id === toolId) {
						return true
					}	
	
					return false
				})
			}

			return {
				...state,
				toolItem: item
			}
		}

		default: {
			return state
		}
	}
}

export default toolReducer