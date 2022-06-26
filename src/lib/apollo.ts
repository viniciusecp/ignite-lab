import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rquzav1h6001yyfe6q8e7a/master',
  cache: new InMemoryCache()
});