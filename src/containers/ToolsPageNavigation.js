import React, { Component } from 'react';

import PageItem from 'components/PageItem'

class ToolsPageNavigation extends Component {
	constructor(props) {
		super(props)

		this.handlePreviousClick = this.handleNextClick.bind(this)
		this.handleNextClick = this.handleNextClick.bind(this)
	}

	handlePreviousClick(e) {
		e.preventDefault()
		this._changePage(-1)
	}

	handleCurrentClick(e) {
		e.preventDefault()
		this._changePage(0)
	}

	handleNextClick(e) {
		e.preventDefault()
		this._changePage(1)
	}

	_changePage(pageShift) {
		const { currentPage, displayToolPage, pageSize } = this.props
		const pageIndex = currentPage + pageShift

		displayToolPage(pageSize, pageIndex)
	}

	render() {
		const { currentPage, totalNumberOfPage } = this.props
		const isPreviousDisabled = currentPage === 0 ? true : false
		const isNextDisabled = currentPage === totalNumberOfPage ? true : false

		return (
			<ul class="ToolsPageNavigation">
				<PageItem isDisabled={isPreviousDisabled} 
					handleClick={this.handlePreviousClick} >
					Previous
				</PageItem>
				<PageItem isCurrentPage={true}>
					{currentPage}
				</PageItem>
				<PageItem isDisabled={isNextDisabled} 
					handleClick={this.handleNextClick} >
					Next
				</PageItem>
			</ul>
		);
	}
}

export default ToolsPageNavigation;