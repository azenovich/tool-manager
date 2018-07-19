import { createStore } from 'redux'

import toolsManagerReducer from 'reducers/toolsManagerReducer'

const toolsManagerStore = createStore(
	toolsManagerReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default toolsManagerStore