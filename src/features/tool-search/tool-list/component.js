import React from 'react'

import { TitleComponent, ButtonComponent, 
	ToolTableComponent, ToolPageNavigationComponent } from '../../shared/components/index'

import './component.scss'

const ToolListComponent = (props) => {	
	const { tools, pageIndex, pageSize, displayToolPage, 
		totalCount ,handleAdd, handlePreviousClick, 
		handleNextClick, handleShowAddEditTool } = props

	const totalNumberOfPage = Math.floor(totalCount / pageSize)

	return (
		<div className="ToolList">
			<TitleComponent>
					Tool Manager
			</TitleComponent>
			<div className="ToolList__button-wrapper">
				<ButtonComponent handleClick={handleAdd}
					classNames={ ['Button__primary', 'ToolList__add'] }>
						+ Add
				</ButtonComponent>
			</div>

			<ToolTableComponent tools={tools} handleShowAddEditTool={handleShowAddEditTool} displayToolPage={displayToolPage} />

			<ToolPageNavigationComponent handlePreviousClick={pageIndex > 0 ? handlePreviousClick : null} 
				handleNextClick={totalNumberOfPage > pageIndex ? handleNextClick : null} pageIndex={pageIndex} />
		</div>
	)
}

export default ToolListComponent