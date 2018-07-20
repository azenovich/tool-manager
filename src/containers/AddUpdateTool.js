import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Title from 'components/Title'
import AddUpdateToolForm from 'containers/AddUpdateToolForm'
import { addNewTool, editTool } from 'actions/actions'

class AddUpdateTool extends Component {
	static propTypes = {
		history: PropTypes.object.isRequired,
		match: PropTypes.object.isRequired
	}

	_findItem() {
		let { toolId } = this.props.match.params
		toolId = +toolId

		if (toolId) {
			const { items } = this.props.tools

			if (items) {
				return items.find((tool) => {
					if (tool.id === toolId) {
						return true
					}

					return false
				})
			}
		}

		return null
	}

	render() {
		const { history, addNewTool, editTool } = this.props
		let item = this._findItem()

		return (
			<div class="AddUpdateTool">
				<Title className="AddUpdateTool__title">
					{ item ? 'Edit Tool' : 'Add Tool' }
				</Title>
				<AddUpdateToolForm item={item} history={history} 
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
		editTool: bindActionCreators(editTool, dispatch)
	}
}


export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(AddUpdateTool)
)