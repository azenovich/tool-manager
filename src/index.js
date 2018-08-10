import React from 'react'
import { render } from 'react-dom'
import { setConfig } from 'react-hot-loader'

import App from './features/app'

import '../public/images/react.png'

setConfig({ logLevel: 'debug' })

// TODO: ask about local styles.

// TODO: https://launchpad.graphql.com/0vm581j9x5 <- My IMPLEMENTATION!!!
render (
	<App />,
	document.querySelector('#mount_place')
)