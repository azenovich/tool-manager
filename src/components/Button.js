import React, { Component } from 'react';

class Button extends Component {
	render() {
		const { text, handleClick, className } = this.props

		return (
			<div class="Wrapper">
				<button class={className} onClick={handleClick}>
					{text}
				</button>
			</div>
		);
	}
}

export default Button