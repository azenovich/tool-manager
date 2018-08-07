import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import ToolListComponent from './component'
import { displayToolPage } from './action'

import React, { Component } from 'react';

class ToolListContainer extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this.handleAdd = this.handleAdd.bind(this)
		this.handlePreviousClick = this.handlePreviousClick.bind(this)
		this.handleNextClick = this.handleNextClick.bind(this)
		this.handleShowAddEditTool = this.handleShowAddEditTool.bind(this)
	}

	handleAdd(e) {
		e.preventDefault()
		const { history } = this.props
		
		history.push('/new')
	}

	handlePreviousClick(e) {
		e.preventDefault()
		const { pageIndex } = this.props
		if (pageIndex > 0) {
			this._changePage(-1)
		}
	}

	handleNextClick(e) {
		e.preventDefault()
		const { pageIndex, totalNumberOfPage } = this.props
		if (totalNumberOfPage > pageIndex) {
			this._changePage(1)
		}
	}

	handleShowAddEditTool(id) {
		const { history } = this.props
		history.push(`/${id}`)
	}

	_changePage(pageShift) {
		const { displayToolPage } = this.props
		const pageIndex = this.props.pageIndex + pageShift

		displayToolPage(pageIndex)
	}

	render() {
		return (
			<ToolListComponent {...this.props} 
				handleAdd={this.handleAdd} 
				handlePreviousClick={this.handlePreviousClick} 
				handleNextClick={this.handleNextClick} 
				handleShowAddEditTool={this.handleShowAddEditTool} />
		);
	}
}

const mapStateToProps = (state) => {
	return state.toolReducer
}

const mapDispatchToProps = (dispatch) => {
	return {
		displayToolPage: bindActionCreators(displayToolPage, dispatch)
	}
}

ToolListContainer = withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ToolListContainer)
)

export default ToolListContainer