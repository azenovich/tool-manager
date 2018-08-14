import React from 'react'

import { ToolItemComponent } from './tool-item'

import './component.scss'

const ToolTableComponent = (props) => {
	const { handleShowAddEditTool } = props
	let { tools } = props

	return (
		<div className="ToolTable" >
			<table className="ToolTable__table">
				<thead className="ToolTable__table-head">
					<ToolItemComponent name="Name" type="Type" location="Location" isHead={true} />
				</thead>
				<tbody className="ToolTable__table-body">
					{
						tools.map(tool => {
							const { id, name, type, location } = tool

							return (
								<ToolItemComponent key={id} id={id} name={name} 
									type={type} location={location} handleClick={(e) => {
										e.preventDefault();
										handleShowAddEditTool(id)
									}} />
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default ToolTableComponent