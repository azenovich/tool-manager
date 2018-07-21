import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Title from 'components/Title'
import AddUpdateToolForm from 'containers/AddUpdateToolForm'
import { addNewTool, editTool, showAddUpdateToolForm } from 'actions/actions'

class AddUpdateTool extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		match: PropTypes.object.isRequired
	}

	componentWillMount() {
		this._showAddUpdateToolForm()	
	}

	_showAddUpdateToolForm() {
		const { showAddUpdateToolForm } = this.props
		let { toolId } = this.props.match.params
		toolId = +toolId
	
		showAddUpdateToolForm(toolId)
	}

	componentDidUpdate() {
		const { match, history } = this.props
		const { toolItem } = this.props.tools

		if (!toolItem && match.path === '/:toolId') {
			history.replace('/notfound')
		}
	}
	
	render() {
		const { addNewTool, editTool, showAddUpdateToolForm, history } = this.props
		const { toolItem } = this.props.tools

		return (
			<div class="AddUpdateTool">
				<Title className="AddUpdateTool__title">
					{ toolItem ? 'Edit Tool' : 'Add Tool' }
				</Title>
				<AddUpdateToolForm key={ toolItem ? toolItem.id : toolItem } item={toolItem} 
					history={history}
					showAddUpdateToolForm={showAddUpdateToolForm}
					addNewTool={addNewTool} editTool={editTool}>
				</AddUpdateToolForm>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		tools: state.toolsReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewTool: bindActionCreators(addNewTool, dispatch),
		editTool: bindActionCreators(editTool, dispatch),
		showAddUpdateToolForm: bindActionCreators(showAddUpdateToolForm, dispatch)
	}
}


export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(AddUpdateTool)
)