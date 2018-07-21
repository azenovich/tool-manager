import React, { Component } from 'react';

class PageItem extends Component {
	
	render() {
		const { children, isCurrentPage, isDisabled, handleClick } = this.props

		return (
			<li class={ isDisabled ? 'PageItem__disabled' : 'PageItem' }>
				<a class={ isCurrentPage ? 'PageItem__link-current' : 'PageItem__link' } 
					onClick={handleClick} href="#" >
					{children}
				</a>
			</li>
		);
	}
}

PageItem.defaultProps = {
	isCurrentPage: false,
	isDisabled: false
}

export default PageItem;