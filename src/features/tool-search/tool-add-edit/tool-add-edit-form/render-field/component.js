import React from 'react'

import { RenderInputComponent } from './render-input'
import { RenderSelectorComponent } from './render-selector'

import './component.scss'

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
			const { label } = props

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