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

export const editTool = ({ id, name, type: toolType, location }) => {
	return {
		type: actionConstants.EDIT_TOOL,
		id,
		name, 
		toolType,
		location
	}
}

export const showAddUpdateToolForm = (toolId) => {
	return {
		type: actionConstants.SHOW_ADD_UPDATE_TOOL_FORM,
		toolId
	}
}