import { actionType } from './constants'

export const displayToolPage = (pageIndex) => {
	return {
		type: actionType.DISPLAY_TOOL_PAGE,
		pageIndex
	}
}