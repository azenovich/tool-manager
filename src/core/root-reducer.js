import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import { ToolListReducer } from '../features/reducer'

const rootReducer = combineReducers({
	form,
	ToolListReducer
})

export default rootReducer