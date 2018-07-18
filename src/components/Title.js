import React, { Component } from 'react';

class Title extends Component {
	render() {
		const { children } = this.props

		return (
			<div className="Title">
				{children}
			</div>
		);
	}
}

export default Title;