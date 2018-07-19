import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Title from 'components/Title'
import Button from 'components/Button';
import ToolsTable from 'containers/ToolsTable'
import ToolsPageNavigation from 'containers/ToolsPageNavigation'
import { displayToolPage } from 'actions/actions'

class ToolsList extends Component {

	componentWillMount() {
		const { displayToolPage, pageSize } = this.props;

		displayToolPage(pageSize, 0);
	}

	render() {
		const { displayToolPage } = this.props
		const { items, pageIndex, totalNumberOfPage, pageSize } = this.props.tools

		return (
			<div className="ToolsList">
				<Title>
					Tool Manager
				</Title>
				<div class="ToolsList__button-wrapper">
					<Button className="Button Button__primary Button__rightShift">
						+ Add
					</Button>
				</div>

				<ToolsTable tools={items} />
				<ToolsPageNavigation currentPage={pageIndex} totalNumberOfPage={totalNumberOfPage} 
					displayToolPage={displayToolPage} pageSize={pageSize} />
			</div>
		)
	}
}

ToolsList.defaultProps = {
	pageSize: 5
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