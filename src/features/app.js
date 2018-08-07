import React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import store from '../core/store'
import Router from './router'

import '../features/shared/styles/base.scss'

const App = () => {
	return (
		<Provider key={ module.hot ? Date.now() : store } store={store} >
			<Router />
		</Provider>
	)
}

export default hot(module)(App)