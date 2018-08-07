import actionType from '../../shared/constants/actionType'

export const addNewTool = ({ name, type: toolType, location }) => {
	return {
		type: actionType.ADD_NEW_TOOL,
		name, 
		toolType,
		location
	}
}

export const editTool = ({ id, name, type: toolType, location }) => {
	return {
		type: actionType.EDIT_TOOL,
		id,
		name, 
		toolType,
		location
	}
}

export const showAddEditToolForm = (toolId) => {
	return {
		type: actionType.SHOW_ADD_EDIT_TOOL_FORM,
		toolId
	}
}