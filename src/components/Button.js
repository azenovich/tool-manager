import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { children, handleClick, className, isDisabled } = this.props

		return (
			<button class={className} onClick={handleClick} disabled={isDisabled} >
				{children}
			</button>
		);
	}
}

Button.defaultProps = {
	isDisabled: false
}

export default Button