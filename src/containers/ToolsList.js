import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Title from 'components/Title'
import Button from 'components/Button';
import ToolsTable from 'containers/ToolsTable'
import { displayToolPage } from 'actions/actions'

class ToolsList extends Component {

	componentWillMount() {
		const { displayToolPage } = this.props;

		displayToolPage(5, 1);
	}

	render() {
		const { tools } = this.props

		return (
			<div className="ToolsList">
				<Title>
					Tool Manager
				</Title>
				<Button text="+ Add" className="Button Button__primary Button__rightShift" />

				<ToolsTable tools={tools.items} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ToolsList)