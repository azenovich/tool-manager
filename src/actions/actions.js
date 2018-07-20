import actionConstants from 'constants/actionConstants'

export const displayToolPage = (pageIndex) => {
	return {
		type: actionConstants.DISPLAY_TOOL_PAGE,
		pageIndex
	}
}

export const addNewTool = ({ name, type: toolType, location }) => {
	return {
		type: actionConstants.ADD_NEW_TOOL,
		name, 
		toolType,
		location
	}
}