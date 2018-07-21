import React, { Component } from 'react';

class RenderField extends Component {
	
	_renderInput() {
		const { input, label, type } = this.props
		
		return (
			<input {...input} placeholder={label}
				type={type} class="RenderField__input" />
		)
	}

	_renderSelector() {
		const { input, children } = this.props

		return (
			<select {...input} class="RenderField__input" >
				{children}
			</select>
		)
	}

	choiceRender() {
		const { type } = this.props

		switch (type) {
			case 'selector': {
				return this._renderSelector()
			}
			default: {
				return this._renderInput()
			}
		}
	}

	render() {
		const { label } = this.props
		const { touched, error, warning } = this.props.meta

		return (
			<div class="RenderField">
				<label  class="RenderField__label">{label}</label>
				<div>
					{ this.choiceRender() }
					{	
						touched &&
						((error && <span class="RenderField__error">{error}</span>) ||
						(warning && <span>{warning}</span>))
					}
				</div>
			</div>
		);
	}
}

export default RenderField;