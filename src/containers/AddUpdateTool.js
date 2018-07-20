import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Title from 'components/Title'
import AddUpdateToolForm from 'containers/AddUpdateToolForm'
import { addNewTool } from 'actions/actions'

class AddUpdateTool extends Component {
	static propTypes = {
		history: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.handleSave = this.handleSave.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
	}

	handleSave(values) {
		const { addNewTool, history } = this.props

		addNewTool(values)
		history.replace('/');
	}

	handleCancel(e) {
		e.preventDefault()
		const { history } = this.props
		
		history.push('/');
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

const mapStateToProps = () => {
	return { 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewTool: bindActionCreators(addNewTool, dispatch)
	}
}


export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(AddUpdateTool)
)