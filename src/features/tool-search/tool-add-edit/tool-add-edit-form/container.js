import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import ToolAddEditFormComponent from './component'
import ToolAddEditFormValidation from './validation'

class ToolAddEditFormContainer extends Component {
	render() {
		return (
			<ToolAddEditFormComponent {...this.props} />
		);
	}
}

ToolAddEditFormContainer = reduxForm({
	form: 'ToolAddEditForm',
	validate: ToolAddEditFormValidation,
	enableReinitialize: true
})(ToolAddEditFormContainer)

export default ToolAddEditFormContainer