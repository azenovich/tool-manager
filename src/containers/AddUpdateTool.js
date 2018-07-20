import React, { Component } from 'react'

import Title from 'components/Title'
import AddUpdateToolForm from 'containers/AddUpdateToolForm';

class AddUpdateTool extends Component {
	constructor(props) {
		super(props)

		this.handleSave = this.handleSave.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
	}

	handleSave(values) {
		
	}

	handleCancel(e) {
		e.preventDefault()
	}

	render() {
		const { isUpdated } = this.props

		return (
			<div class="AddUpdateTool">
				<Title className="AddUpdateTool__title">
					{ isUpdated ? 'Edit Tool' : 'Add Tool'}
				</Title>
				<AddUpdateToolForm handleSave={this.handleSave} handleCancel={this.handleCancel}>
				</AddUpdateToolForm>
			</div>
		);
	}
}

AddUpdateTool.defaultProps = {
	isUpdated: false
}

export default AddUpdateTool;