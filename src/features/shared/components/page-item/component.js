import React from 'react'

import './component.scss'

const PageItemComponent = (props) => {
	const { children, isCurrentPage, isDisabled, handleClick } = props
	const itemClassName = isDisabled ? 'PageItem__disabled' : ''
	const linkClassName = isCurrentPage ? 'PageItem__link-current' : ''

	return (
		<li className={ ['PageItem', itemClassName].join(' ') }>
			<a className={ ['PageItem__link', linkClassName].join(' ') } 
				onClick={handleClick} href="#" >
				{children}
			</a>
		</li>
	)
}

PageItemComponent.defaultProps = {
	isCurrentPage: false,
	isDisabled: false
}

export default PageItemComponent;