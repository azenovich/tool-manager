import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Title from 'components/Title'
import Button from 'components/Button'
import ToolsTable from 'containers/ToolsTable'
import ToolsPageNavigation from 'containers/ToolsPageNavigation'
import { displayToolPage } from 'actions/actions'

class ToolsList extends Component {
	
	static propTypes = {
		history: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.handleAdd = this.handleAdd.bind(this)
	}

	handleAdd(e) {
		e.preventDefault()
		const { history } = this.props
		
		history.push('/new')
	}

	render() {
		const { items, pageIndex, totalNumberOfPage, pageSize } = this.props.tools
		const { displayToolPage, history } = this.props

		return (
			<div className="ToolsList">
				<Title>
					Tool Manager
				</Title>
				<div class="ToolsList__button-wrapper">
					<Button handleClick={this.handleAdd} 
						className="Button Button__primary Button__rightShift">
						+ Add
					</Button>
				</div>

				<ToolsTable items={items} history={history} pageIndex={pageIndex} pageSize={pageSize} />
				<ToolsPageNavigation pageIndex={pageIndex} totalNumberOfPage={totalNumberOfPage} 
					displayToolPage={displayToolPage} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		tools: state.toolsReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		displayToolPage: bindActionCreators(displayToolPage, dispatch)
	}
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ToolsList)
)