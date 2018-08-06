import React from 'react'

import './component.scss'

const ToolItemHead = (props) => {
	const { name, type, location } = props

	return (
		<tr>
			<th>{name}</th>
			<th>{type}</th>
			<th>{location}</th>
		</tr>
	)
}

const ToolItemBody = (props) => {
	const { name, type, location, handleClick } = props

	return (
		<tr>
			<td onClick={handleClick}>{name}</td>
			<td>{type}</td>
			<td>{location}</td>
		</tr>
	)
}

const ToolItemComponent = (props) => {
	const { isHead, name, type, location } = props
	if (isHead) {
		return (
			<ToolItemHead name={name} type={type} 
				location={location}>
			</ToolItemHead>
		)
	} else {
		const { handleClick } = props
		return (
			<ToolItemBody name={name} type={type} 
				location={location} handleClick={handleClick}>
			</ToolItemBody>
		)
	}
}

ToolItemComponent.defaultProps = {
	isHead: false
}

export default ToolItemComponent