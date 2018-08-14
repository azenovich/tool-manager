import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { render } from 'react-dom'
import { setConfig } from 'react-hot-loader'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import { Client, Store } from './core'
import { ToolListContainer, ToolAddEditContainer, NotFoundPageContainer } from './features'

import '../public/images/react.png'
import '../public/styles/base.scss'
import '../public/styles/index.scss'

setConfig({ logLevel: 'debug' })

// TODO: ask about local styles.
// TODO: ask about redirect...
// TODO: ask about difference between react-router & react-router-dom

let App = () => {
	return (
		<ApolloProvider client={Client} >
			<Provider key={ module.hot ? Date.now() : Store } store={Store} >
				<BrowserRouter>
					<Switch>
						<Route exact={true} path="/" component={ToolListContainer} />
						<Route exact={true} path="/new" component={ToolAddEditContainer} />
						<Route exact={true} path="/notfound" component={NotFoundPageContainer} />
						<Route exact={true} path="/:toolId" component={ToolAddEditContainer} />
						<Redirect to="/notfound" />
					</Switch>
				</BrowserRouter>
			</Provider>
		</ApolloProvider>
	)
}

App = hot(module)(App)

render (
	<App />,
	document.querySelector('#mount_place')
)