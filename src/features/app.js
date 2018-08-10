import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import client from '../core/apolloClient'
import store from '../core/store'
import Router from './router'

import '../features/shared/styles/base.scss'


const App = () => {
	return (
		<ApolloProvider  client={client} >
			<Provider key={ module.hot ? Date.now() : store } store={store} >
				<Router />
			</Provider>
		</ApolloProvider>
	)
}

export default hot(module)(App)