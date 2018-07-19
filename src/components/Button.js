import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { children, handleClick, className } = this.props

		return (
			<button class={className} onClick={handleClick}>
				{children}
			</button>
		);
	}
}

export default Button