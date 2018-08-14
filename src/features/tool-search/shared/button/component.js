import React from 'react'

import './component.scss'

const ButtonComponent = (props) => {
	const { children, handleClick, isDisabled, classNames } = props

	return (
		<button className={ ['Button', ...classNames].join(' ') } onClick={handleClick} disabled={isDisabled} >
			{children}
		</button>
	);
}

ButtonComponent.defaultProps = {
	isDisabled: false
}

export default ButtonComponent