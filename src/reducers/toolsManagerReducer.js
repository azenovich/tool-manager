import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form' 

import toolsReducer from 'reducers/toolsReducer'

const toolsManagerReducer = combineReducers({
	form,
	toolsReducer
})

export default toolsManagerReducer