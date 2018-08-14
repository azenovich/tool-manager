import React from 'react'

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

export default ToolItemBodyComponent