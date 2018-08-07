import React from 'react'
import { Field } from 'redux-form'

import { Type, Location } from '../../types/index'
import { ButtonComponent, RenderFieldComponent } from '../index'

import './component.scss'

const ToolAddEditFormComponent = (props) => {
	const { handleSubmit, handleSave, valid, submitting, handleCancel } = props

	return (
		<div className="ToolAddEditForm">
			<form onSubmit={handleSubmit(handleSave)}>
				<div className="ToolAddEditForm__form">
					<Field
						name="name"
						component={RenderFieldComponent}
						type="text"
						label="Name"
						placeholder="Name"
					/>
					<Field 
						name="type" 
						component={RenderFieldComponent}
						type="selector"
						label="Type"
					>
						<option />
						<option value={Type.Drill}>Drill</option>
						<option value={Type.Cutter}>Cutter</option>
						<option value={Type.Mill}>Mill</option>
					</Field>
					<Field
						name="location" 
						component={RenderFieldComponent}
						type="selector"
						label="Location"
					>
						<option />
						<option value={Location.BoxA}>Box A</option>
						<option value={Location.BoxB}>Box B</option>
					</Field>
				</div>
				<div className="ToolAddEditForm__buttons">
					<ButtonComponent isDisabled={!valid || submitting } 
						classNames={['Button__success', 'ToolAddEditForm__save']} >
							Save
					</ButtonComponent>
					<ButtonComponent handleClick={handleCancel} 
						classNames={['Button__warning', 'ToolAddEditForm__cancel']}>
							Cancel
					</ButtonComponent>
				</div>
			</form>
		</div>
	)
}

export default ToolAddEditFormComponent