import React, { Component } from 'react';

class ToolItem extends Component {
	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		e.preventDefault()
		const { id, history } = this.props

		history.push(`/${id}`)
	}

	renderTableHead() {
		const { name, type, location } = this.props

		return (
			<tr>
				<th>{name}</th>
				<th>{type}</th>
				<th>{location}</th>
			</tr>
		)
	}

	renderTableData() {
		const { name, type, location } = this.props

		return (
			<tr>
				<td onClick={this.handleClick}>{name}</td>
				<td>{type}</td>
				<td>{location}</td>
			</tr>
		)
	}

	render() {
		const { isHead } = this.props

		return (
			isHead 
				? this.renderTableHead()
				: this.renderTableData()
		);
	}
}

ToolItem.defaultProps = {
	isHead: false
}

export default ToolItem