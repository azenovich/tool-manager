import actionType from '../../shared/constants/actionType'

const initState = {
	pageIndex: 0
};

const ToolListReducer = (state = initState, action) => {

	switch (action.type) {

		case actionType.DISPLAY_TOOL_PAGE: {
			const { pageIndex } = action

			return {
				...state,
				pageIndex: pageIndex
			}
		}

		default: {
			return state
		}
	}
}

export default ToolListReducer