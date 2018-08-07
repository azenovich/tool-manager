import React from 'react'

import { TitleComponent, ButtonComponent, 
	ToolTableComponent, ToolPageNavigationComponent } from '../../shared/components/index'

import './component.scss'

const ToolListComponent = (props) => {	
	const { items, pageIndex, pageSize, displayToolPage, 
		totalNumberOfPage, handleAdd, handlePreviousClick, 
		handleNextClick, handleShowAddEditTool } = props

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

			<ToolTableComponent items={items} pageIndex={pageIndex} pageSize={pageSize} 
				handleShowAddEditTool={handleShowAddEditTool} displayToolPage={displayToolPage} />

			<ToolPageNavigationComponent handlePreviousClick={pageIndex > 0 ? handlePreviousClick : null} 
				handleNextClick={totalNumberOfPage > pageIndex ? handleNextClick : null} pageIndex={pageIndex} />
		</div>
	)
}

export default ToolListComponent