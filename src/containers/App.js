import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { HashRouter, Switch, Route } from 'react-router-dom'

import ToolsList from 'containers/ToolsList'
import AddUpdateTool from 'containers/AddUpdateTool'
import store from 'store/toolsManagerStore'
import NotFound from '../components/NotFound'

import 'images/react.png'
import 'styles/style.scss'

class App extends Component {
	
	render() {
		return (
			<Provider key={ module.hot ? Date.now() : store } store={store} >
				<HashRouter>
					<Switch>
						<Route exact={true} path="/" component={ToolsList} />
						<Route exact={true} path="/new" component={AddUpdateTool} />
						<Route path="/notfound" component={NotFound} />
						<Route path="/:toolId" render={(props) => (
							<AddUpdateTool key={props.match.params.toolId} />
						)} />
					</Switch>
				</HashRouter>
			</Provider>
		);
	}
}

export default hot(module)(App);