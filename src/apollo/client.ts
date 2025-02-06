import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://assilam.us-east-a.ibm.stepzen.net/api/nomadic-cricket/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: `Apikey assilam::local.net+1000::4010ee157c0aca472410c0280fdfa8fd2609566a287f9bcc7df9ea15d7929bb0`
    }
  });

  export default client;