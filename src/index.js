import React from 'react'
import { render } from 'react-dom'
import { setConfig } from 'react-hot-loader'

import App from 'containers/App'

setConfig({ logLevel: 'debug' })

render (
	<App />,
	document.querySelector('#mount_place')
)