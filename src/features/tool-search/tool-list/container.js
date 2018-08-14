import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import PropTypes from 'prop-types'

import ToolListComponent from './component'
import { GET_TOOLS_PAGINATION } from './query'
import { displayToolPage } from './action'

const pageSize = 5

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
		this._changePage(-1)
	}

	handleNextClick(e) {
		e.preventDefault()
		this._changePage(1)
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
		const { pageIndex } = this.props

		return (
			<Query query={GET_TOOLS_PAGINATION} variables={{ pageIndex: pageIndex, pageSize: pageSize }} >
				{
					(response) => {
						const { loading, error, data } = response

						if (loading) {
							return (
								<p> Loading... </p>
							)
						}

						if (error) {
							return (
								<p>  Error: {error.message} </p>
							)
						}

						const { tools, totalCount } = data.toolsPagination
						return (
							
							<ToolListComponent
								totalCount={totalCount}
								pageIndex={pageIndex}
								pageSize={pageSize}
								tools={tools}
								handleAdd={this.handleAdd} 
								handlePreviousClick={this.handlePreviousClick} 
								handleNextClick={this.handleNextClick} 
								handleShowAddEditTool={this.handleShowAddEditTool} />
						)
					}
				}
			</Query>
		)
	}
}

const mapStateToProps = (state) => {
	return state.Reducer.ToolListReducer
}

const mapDispatchToProps = (dispatch) => {
	return {
		displayToolPage: bindActionCreators(displayToolPage, dispatch),
	}
}

ToolListContainer = withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ToolListContainer)
)

export default ToolListContainer