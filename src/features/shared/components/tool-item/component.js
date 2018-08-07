import React from 'react'

const ToolItemHeadComponent = (props) => {
	const { name, type, location } = props

	return (
		<tr>
			<th>{name}</th>
			<th>{type}</th>
			<th>{location}</th>
		</tr>
	)
}

const ToolItemBodyComponent = (props) => {
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