import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form' 

import toolReducer from '../features/tool-search/toolReducer'

const rootReducer = combineReducers({
	form,
	toolReducer
})

export default rootReducer