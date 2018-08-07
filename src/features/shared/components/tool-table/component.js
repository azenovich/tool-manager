import React from 'react'

import { ToolItemComponent } from '../index'

import './component.scss'

const ToolTableComponent = (props) => {
	const { pageIndex, pageSize, handleShowAddEditTool } = props
	let { items } = props
	const shift = pageIndex * pageSize
	items = items.slice(shift, shift + pageSize)

	return (
		<div className="ToolTable" >
			<table className="ToolTable__table">
				<thead className="ToolTable__table-head">
					<ToolItemComponent name="Name" type="Type" location="Location" isHead={true} />
				</thead>
				<tbody className="ToolTable__table-body">
					{
						items.map(tool => {
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