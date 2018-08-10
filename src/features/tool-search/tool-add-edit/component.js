import React from 'react'

import './component.scss'
import { TitleComponent, ToolAddEditFormComponent } from '../../shared/components/index';

const ToolAddEditComponent = (props) => {
	const { addNewTool, editTool, isEditForm } = props

	return (
		<div className="AddUpdateTool">
			<TitleComponent className="AddUpdateTool__title">
				{ isEditForm ? 'Edit Tool' : 'Add Tool' }
			</TitleComponent>
			<ToolAddEditFormComponent {...props}
				addNewTool={addNewTool} editTool={editTool}>
			</ToolAddEditFormComponent>
		</div>
	)
}

export default ToolAddEditComponent