import React, { Component } from 'react';

import ToolItem from 'containers/ToolItem'

class ToolsTable extends Component {
	
	render() {
		const { pageIndex, pageSize, history } = this.props
		const shift = pageIndex * pageSize
		const items = this.props.items.slice(shift, shift + pageSize)

		return (
			<div class="ToolsTable" >
				<table class="ToolsTable__table">
					<thead class="ToolsTable__table-head">
						<ToolItem name="Name" type="Type" location="Location" isHead={true} />
					</thead>
					<tbody class="ToolsTable__table-body">
						{
							items.map(tool => {
								const { id, name, type, location } = tool

								return (
									<ToolItem key={id} id={id} name={name} 
										type={type} location={location} history={history} />
								)
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}

export default ToolsTable