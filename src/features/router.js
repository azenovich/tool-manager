import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { ToolListContainer, ToolAddEditContainer, NotFoundPageContainer } from './index'

import './shared/styles/index.scss'

// TODO: ask about redirect...

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact={true} path="/" component={ToolListContainer} />
			<Route exact={true} path="/new" component={ToolAddEditContainer} />
			<Route exact={true} path="/notfound" component={NotFoundPageContainer} />
			<Route path="/:toolId" component={ToolAddEditContainer} />
			<Redirect to="/notfound" />
		</Switch>
	</BrowserRouter>
)

export default Router