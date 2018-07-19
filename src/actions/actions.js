import actionConstants from 'constants/actionConstants'

export const displayToolPage = (pageSize, pageIndex) => {
	return {
		type: actionConstants.DISPLAY_TOOL_PAGE,
		pageSize, pageIndex
	}
}