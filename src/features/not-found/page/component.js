import React from 'react'

import './component.scss'

const PageComponent = (props) => {
	const { title, children, imageSrc } = props;

	return (
		<div className="NotFound">
			<div className="NotFound__header">
				<img className="NotFound__header-image" 
					src={imageSrc} alt={title} />
				<h1 className="NotFound__title">
					{title}
				</h1>
			</div>
			<p className="NotFound__message">
				{children}
			</p>
		</div>
	);
}

export default PageComponent