import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import ToolsList from 'containers/ToolsList'
import store from 'store/toolsManagerStore'

import 'styles/style.scss'

class App extends Component {
	render() {
		return (
			<Provider key={ module.hot ? Date.now() : store } store={store} >
				<ToolsList />
			</Provider>
		);
	}
}

export default hot(module)(App);