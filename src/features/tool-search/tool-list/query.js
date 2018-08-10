import gql from 'graphql-tag'

export const GET_TOOLS = gql`
	query GetTools {
		tools {
			id,
			name,
			type,
			location
		}
	}
`

export const GET_TOOLS_PAGINATION = gql`
	query GetToolsPagination($pageIndex: Int!, $pageSize: Int!) {
		toolsPagination(pageIndex: $pageIndex, pageSize: $pageSize) {
			tools {
				id,
				name,
				type,
				location
			},
			pageIndex,
			pageSize,
			totalCount
		}
	}
`