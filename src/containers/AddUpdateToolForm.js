import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from 'components/Button'
import Location from 'constants/Location'
import Type from 'constants/Type'
import RenderField from 'components/RenderField'
import addUpdateToolValidator from 'validators/addUpdateToolValidator'

class AddUpdateToolForm extends Component {
	render() {
		const { handleSubmit, handleSave, handleCancel, valid  } = this.props

		return (
			<div class="AddUpdateToolForm">
				<form onSubmit={handleSubmit(handleSave)}>
					<div className="AddUpdateToolForm__form">
						<Field
							name="name"
							component={RenderField}
							type="text"
							label="Name"
							placeholder="Name"
						/>
						<Field 
							name="type" 
							component={RenderField}
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
							component={RenderField}
							type="selector"
							label="Location"
						>
							<option />
							<option value={Location.BoxA}>Box A</option>
							<option value={Location.BoxB}>Box B</option>
						</Field>
					</div>
					<div className="AddUpdateToolForm__buttons">
						<Button isDisabled={!valid} className="Button Button__success AddUpdateToolForm__save" >
							Save
						</Button>
						<Button handleClick={handleCancel} className="Button Button__warning AddUpdateToolForm__cancel">
							Cancel
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

AddUpdateToolForm = reduxForm({
	form: 'addUpdateToolForm',
	validate: addUpdateToolValidator
})(AddUpdateToolForm)

export default AddUpdateToolForm