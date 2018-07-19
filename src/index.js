import React from 'react'
import { render } from 'react-dom'
import { setConfig } from 'react-hot-loader'

import toolsManagerStore from 'store/toolsManagerStore'

import App from 'containers/App'

window.store = toolsManagerStore

setConfig({ logLevel: 'debug' })

render (
	<App />,
	document.querySelector('#mount_place')
)