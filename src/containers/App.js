import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { HashRouter, Switch, Route } from 'react-router-dom'

import ToolsList from 'containers/ToolsList'
import AddUpdateTool from 'containers/AddUpdateTool'
import store from 'store/toolsManagerStore'

import 'styles/style.scss'

class App extends Component {
	render() {
		return (
			<Provider key={ module.hot ? Date.now() : store } store={store} >
				<HashRouter>
					<Switch>
						<Route exact path="/" component={ToolsList} />
						<Route path="/new" component={AddUpdateTool} />
						<Route path="/:toolId" component={AddUpdateTool} />
					</Switch>
				</HashRouter>
			</Provider>
		);
	}
}

export default hot(module)(App);