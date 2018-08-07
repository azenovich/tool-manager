import React, { Component } from 'react';

import NotFoundPageComponent from './component'

class NotFoundPageContainer extends Component {
	render() {
		return (
			<NotFoundPageComponent title="Page Not Found" imageSrc="images/notfound.gif">
				The page you are looking for could not be found.
			</NotFoundPageComponent>
		);
	}
}

export default NotFoundPageContainer