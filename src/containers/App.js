import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import ToolsList from 'containers/ToolsList'

import 'styles/style.scss'

class App extends Component {
	render() {
		return (
			<div>
				<ToolsList />
			</div>
		);
	}
}

export default hot(module)(App);