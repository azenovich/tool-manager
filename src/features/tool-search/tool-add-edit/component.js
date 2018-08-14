import React from 'react'

import { TitleComponent } from '../shared/title'

import './component.scss'

const ToolAddEditComponent = (props) => {
	const { title, children } = props

	return (
		<div className="ToolAddEdit">
			<TitleComponent className="ToolAddEdit__title">
				{title}
			</TitleComponent>
			{children}
		</div>
	)
}

export default ToolAddEditComponent