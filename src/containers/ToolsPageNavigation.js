import React, { Component } from 'react';

import PageItem from 'components/PageItem'

class ToolsPageNavigation extends Component {
	constructor(props) {
		super(props)

		this.handlePreviousClick = this.handlePreviousClick.bind(this)
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
		const { displayToolPage } = this.props
		const pageIndex = this.props.pageIndex + pageShift

		displayToolPage(pageIndex)
	}

	render() {
		const { pageIndex, totalNumberOfPage } = this.props
		const isPreviousDisabled = pageIndex === 0 ? true : false
		const isNextDisabled = pageIndex === totalNumberOfPage ? true : false

		return (
			<ul class="ToolsPageNavigation">
				<PageItem isDisabled={isPreviousDisabled} 
					handleClick={this.handlePreviousClick} >
					Previous
				</PageItem>
				<PageItem isCurrentPage={true}>
					{pageIndex}
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