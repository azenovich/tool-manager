import actionType from '../../shared/constants/actionType'

export const showAddEditToolForm = (toolId) => {
	return {
		type: actionType.SHOW_ADD_EDIT_TOOL_FORM,
		toolId
	}
}