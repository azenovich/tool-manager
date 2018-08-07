import React from 'react'

import './component.scss'
import { TitleComponent, ToolAddEditFormComponent } from '../../shared/components/index';

const ToolAddEditComponent = (props) => {
	const { addNewTool, editTool, showAddEditToolForm, toolItem } = props

	return (
		<div className="AddUpdateTool">
			<TitleComponent className="AddUpdateTool__title">
				{ toolItem ? 'Edit Tool' : 'Add Tool' }
			</TitleComponent>
			<ToolAddEditFormComponent {...props}
				item={toolItem} 
				showAddEditToolForm={showAddEditToolForm}
				addNewTool={addNewTool} editTool={editTool}>
			</ToolAddEditFormComponent>
		</div>
	)
}

export default ToolAddEditComponent