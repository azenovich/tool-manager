import React from 'react'

import './component.scss'

const RenderInputComponent = (props) => {
	const { input, label, type, className } = props

	return (
		<input {...input} placeholder={label}
			type={type} class={className} />
	)
}

const RenderSelectorComponent = (props) => {
	const { input, children, className } = props

	return (
		<select {...input} className={className} >
			{children}
		</select>
	)
}

const choiceRender = (props) => {
	const { type, input } = props

	switch (type) {
		case 'selector': {
			const { children } = props

			return (
				<RenderSelectorComponent input={input} className="RenderField__input">
					{children}
				</RenderSelectorComponent>
			)
		}
		default: {
			const { label } = this.props

			return (
				<RenderInputComponent input={input} label={label} 
					type={type} className="RenderField__input">
				</RenderInputComponent>
			)
		}
	}
}

const RenderFieldComponent = (props) => {
	const { label } = props
	const { touched, error, warning } = props.meta

	return (
		<div className="RenderField">
			<label className="RenderField__label">
				{label}
			</label>
			<div>
				{ choiceRender(props) }
				{	
					touched &&
						((error && <span className="RenderField__error">{error}</span>) ||
						(warning && <span>{warning}</span>))
				}
			</div>
		</div>
	)
}

export default RenderFieldComponent