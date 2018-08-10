import ApolloClient from 'apollo-boost'

import config from './config.json'

// TODO: https://launchpad.graphql.com/0vm581j9x5 <- My IMPLEMENTATION!!!
const client = new ApolloClient({
	uri: config.graphQLServiceUri,
});

export default client