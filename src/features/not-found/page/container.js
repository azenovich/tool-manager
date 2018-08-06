import React, { Component } from 'react';

import pageComponent from './component'

class PageContainer extends Component {
	render() {
		return (
			<pageComponent title="Page Not Found" imageSrc="public/images/notfound.gif">
				The page you are looking for could not be found.
			</pageComponent>
		);
	}
}

export default PageContainer