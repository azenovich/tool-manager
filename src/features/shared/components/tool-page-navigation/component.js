import React from 'react'

import { PageItemComponent } from '../index'

import './component.scss'

const ToolPageNavigationComponent = (props) => {
	const { pageIndex, handlePreviousClick, handleNextClick } = props

	return (
		<ul className="ToolPageNavigation">
			<PageItemComponent handleClick={handlePreviousClick} >
					Previous
			</PageItemComponent>
			<PageItemComponent isCurrentPage={true}>
				{pageIndex}
			</PageItemComponent>
			<PageItemComponent handleClick={handleNextClick} >
					Next
			</PageItemComponent>
		</ul>
	)
}

export default ToolPageNavigationComponent