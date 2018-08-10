import actionType from '../../shared/constants/actionType'

export const displayToolPage = (pageIndex) => {
	return {
		type: actionType.DISPLAY_TOOL_PAGE,
		pageIndex
	}
}