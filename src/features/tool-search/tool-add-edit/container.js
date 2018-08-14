import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Query, Mutation } from 'react-apollo'
import PropTypes from 'prop-types'

import ToolAddEditComponent from './component'
import { GET_TOOL } from './query'
import { ADD_TOOL, UPDATE_TOOL } from './mutation'
import { ToolAddEditFormContainer } from './tool-add-edit-form'

class ToolAddEditContainer extends Component {

	static propTypes = {
		history: PropTypes.object.isRequired,
		match: PropTypes.object.isRequired
	}

	constructor(props) {
		super(props)

		this._submitToolFormBinder = this._submitToolFormBinder.bind(this)
		this.handleCancel = this.handleCancel.bind(this)
	}

	_submitToolFormBinder = (action, id) => {
		return (values) => {
			const { name, type, location } = values
			const tool = {
				name: name,
				type: type,
				location: location
			}
	
			if (id) {
				tool.id = id
			}
	
			action({ variables: tool })
				.then(() => {
					const { history } = this.props
					history.push('/')
				})	// TODO: ask about catching errors.
				.catch((error) => {
					console.log(error);
				})
		}
	}

	handleCancel(e) {
		e.preventDefault()
		const { history } = this.props
		
		history.push('/');
	}

	render() {
		const { match } = this.props
		const { path } = match

		// Add tool
		if (path === '/new') {
			return (
				<Mutation mutation={ADD_TOOL}>
					{
						(addTool) => {

							return (
								<ToolAddEditComponent title="Add Tool">
									<ToolAddEditFormContainer
										initialValues={null}
										handleSave={this._submitToolFormBinder(addTool, null)} 
										handleCancel={this.handleCancel} />	
								</ToolAddEditComponent>
							)
						}
					}
				</Mutation>
			)
		}
		
		let { toolId } = match.params
		toolId = +toolId

		// Update tool
		return (
			<Query query={GET_TOOL} variables={{ id: toolId }}>
				{
					(response) => {
						const { loading, error, data } = response

						if (loading) {
							return (
								<p> Loading... </p>
							)
						}

						if (error) {
							return (
								<p> Error: {error.message} </p>
							)
						}
						const { tool } = data

						if (!tool) {
							return (
								<p> NotFound </p>
							)
						}
						
						return (
							<Mutation mutation={UPDATE_TOOL}>
								{
									(updateTool) => (
										<ToolAddEditComponent title="Edit Tool">
											<ToolAddEditFormContainer
												initialValues={tool}
												handleSave={this._submitToolFormBinder(updateTool, tool.id)} 
												handleCancel={this.handleCancel} />	
										</ToolAddEditComponent>
									)
								}
							</Mutation>
						)
					}
				}
			</Query>
		)
	}
}

// TODO: ask about the sequence of functions: redux, connect, withRoute.

ToolAddEditContainer = withRouter(ToolAddEditContainer)

export default ToolAddEditContainer