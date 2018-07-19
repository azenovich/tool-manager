import React, { Component } from 'react';

import ToolItem from 'components/ToolItem'

class ToolsTable extends Component {
	render() {
		const { tools } = this.props

		return (
			<div class="ToolsTable" >
				<table class="ToolsTable__table">
					<thead class="ToolsTable__table-head">
						<ToolItem name="Name" type="Type" location="Location" isHead={true} />
					</thead>
					<tbody class="ToolsTable__table-body">
						{
							tools.map(tool => {
								const { id, name, type, location } = tool

								return (
									<ToolItem key={id} name={name} 
										type={type} location={location} />
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