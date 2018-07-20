import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from 'components/Button'
import Location from 'constants/Location'
import Type from 'constants/Type'
import RenderField from 'components/RenderField'
import addUpdateToolValidator from 'validators/addUpdateToolValidator'

class AddUpdateToolForm extends Component {
	constructor(props) {
		super(props)

		this.handleSave = this.handleSave.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
	}

	componentDidMount() {
		this._updateDate()
	}

	_updateDate() {
		if (this.props.item) {
			const { name, type, location } = this.props.item

			this.props.initialize({
				name,
				type,
				location
			})
		} else {
			this.props.initialize({
				name: '',
				type: '',
				location: ''
			})
		}
	}

	handleSave(values) {
		const { addNewTool, editTool, history, item } = this.props

		if (item) {
			editTool({
				...values,
				id: item.id
			})
		} else {
			addNewTool(values)
		}

		history.push('/')
	}

	handleCancel(e) {
		e.preventDefault()
		const { history } = this.props
		
		history.push('/');
	}

	render() {
		const { handleSubmit, valid, submitting } = this.props

		return (
			<div  class="AddUpdateToolForm">
				<form onSubmit={handleSubmit(this.handleSave)}>
					<div className="AddUpdateToolForm__form">
						<Field
							name="name"
							component={RenderField}
							type="text"
							label="Name"
							placeholder="Name"
							value="123"
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
						<Button isDisabled={!valid || submitting } 
							className="Button Button__success AddUpdateToolForm__save" >
							Save
						</Button>
						<Button handleClick={this.handleCancel} 
							className="Button Button__warning AddUpdateToolForm__cancel">
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