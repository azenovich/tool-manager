import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import ToolAddEditComponent from './component'
import toolAddEditValidation from './validation'
import { addNewTool, editTool, showAddEditToolForm } from './action'

class ToolAddEditContainer extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		match: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.handleSave = this.handleSave.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
	}

	componentDidMount() {
		this._showAddEditToolForm()	
	}

	_showAddEditToolForm() {
		const { showAddEditToolForm, match } = this.props
		let { toolId } = match.params
		toolId = +toolId
	
		showAddEditToolForm(toolId)
	}

	handleSave(values) {
		const { addNewTool, editTool, history, toolItem } = this.props

		if (toolItem) {
			editTool({
				...values,
				id: toolItem.id
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
		return (
			<ToolAddEditComponent {...this.props} 
				handleSave={this.handleSave} 
				handleCancel={this.handleCancel} />	
		)
	}
}

// TODO: ask about the sequence of functions: redux, connect, withRoute.

ToolAddEditContainer = reduxForm({
	form: 'addUpdateToolForm',
	validate: toolAddEditValidation,
	enableReinitialize: true
})(ToolAddEditContainer)

ToolAddEditContainer = withRouter(ToolAddEditContainer)

const mapStateToProps = (state) => {
	return {
		...state.toolReducer,
		initialValues: state.toolReducer.toolItem
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewTool: bindActionCreators(addNewTool, dispatch),
		editTool: bindActionCreators(editTool, dispatch),
		showAddEditToolForm: bindActionCreators(showAddEditToolForm, dispatch)
	}
}

ToolAddEditContainer = connect(mapStateToProps, mapDispatchToProps)(ToolAddEditContainer)

export default ToolAddEditContainer