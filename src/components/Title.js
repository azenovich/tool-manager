import React, { Component } from 'react';

class Title extends Component {
	
	render() {
		const { children, className } = this.props

		return (
			<div className={`Title ${className}`}>
				{children}
			</div>
		);
	}
}

export default Title