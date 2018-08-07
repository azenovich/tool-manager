import React from 'react'

import '../../../../public/images/notfound.gif'
import './component.scss'

const NotFoundPageComponent = (props) => {
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

export default NotFoundPageComponent