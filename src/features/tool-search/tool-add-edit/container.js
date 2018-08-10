import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { Query, Mutation } from 'react-apollo'
import PropTypes from 'prop-types'

// TODO: https://launchpad.graphql.com/0vm581j9x5 <- My IMPLEMENTATION!!!
// TODO: Refactoring. Move to shared folder
import { GET_TOOLS_PAGINATION } from '../tool-list/query'
import { GET_TOOL } from './query'
import { ADD_TOOL, UPDATE_TOOL } from './mutation'
import ToolAddEditComponent from './component'
import toolAddEditValidation from './validation'

// TODO: Refactor. Move to container.
// TODO: Ask about shared folder and related container or component to only one -> feature/subfeature.
const ToolAddEditComponentWrapper = reduxForm({
	form: 'addUpdateToolForm',
	validate: toolAddEditValidation,
	enableReinitialize: true
})(ToolAddEditComponent)


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
		let { toolId } = match.params
		toolId = +toolId
		
		if (!toolId) {
			return (
				<Mutation mutation={ADD_TOOL}
					update={(cache, { data: { addTool } }) => {
						// TODO: pageIndex to query parameters.!!!
						console.log(cache.readQuery({ query: GET_TOOLS_PAGINATION, variables: { pageIndex: 0, pageSize: 5 } }));
					}}
				>
					{
						(addTool) => {

							return (
								<ToolAddEditComponentWrapper
									initialValues={null}
									isEditForm={false}
									handleSave={this._submitToolFormBinder(addTool, null)} 
									handleCancel={this.handleCancel} />	
							)
						}
					}
				</Mutation>
			)
		}

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
										
										<ToolAddEditComponentWrapper
											initialValues={tool}
											isEditForm={tool ? true : false}
											handleSave={this._submitToolFormBinder(updateTool, tool.id)} 
											handleCancel={this.handleCancel} />	
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