import React, { Component } from 'react';

import 'images/notfound.gif'

class NotFound extends Component {
	
	render() {
		return (
			<div class="NotFound">
				<div class="NotFound__header">
					<img class="NotFound__header-image" 
						src="assets/images/notfound.gif" 
						alt="Sad computer" />
					<h1 class="NotFound__title">Page Not Found</h1>
				</div>
				<p class="NotFound__message">
					The page you are looking for could not be found.
				</p>
			</div>
		);
	}
}

export default NotFound;