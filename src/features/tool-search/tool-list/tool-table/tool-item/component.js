import React from 'react'

import { ToolItemHeadComponent } from './tool-item-head'
import { ToolItemBodyComponent } from './tool-item-body'

const ToolItemComponent = (props) => {
	const { isHead, name, type, location } = props
	if (isHead) {
		return (
			<ToolItemHeadComponent name={name} type={type} 
				location={location}>
			</ToolItemHeadComponent>
		)
	} else {
		const { handleClick } = props
		return (
			<ToolItemBodyComponent name={name} type={type} 
				location={location} handleClick={handleClick}>
			</ToolItemBodyComponent>
		)
	}
}

ToolItemComponent.defaultProps = {
	isHead: false
}

export default ToolItemComponent