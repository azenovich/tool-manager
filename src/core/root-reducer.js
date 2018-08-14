import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import { Reducer } from '../features'

const RootReducer = combineReducers({
	form,
	Reducer
})

export default RootReducer