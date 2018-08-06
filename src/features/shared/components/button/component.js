import React from 'react'

import './component.scss'

const ButtonComponent = (props) => {
	const { children, handleClick, isDisabled, className } = props

	return (
		<button className={ ['Button', className].join(' ') } onClick={handleClick} disabled={isDisabled} >
			{children}
		</button>
	);
}

ButtonComponent.defaultProps = {
	isDisabled: false
}

export default ButtonComponent