import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import Query from './Query';
import Mutation from './Mutation';
import Subscription from './Subscription';
import Feedback from './types/feedback';
import ResultsMeta from './types/results-meta';
import resolvers from '../resolvers';

const RootQuery = `
  ${Query}
  ${Mutation}
  ${Subscription}
`;

const schema = makeExecutableSchema({
  typeDefs: [RootQuery, Feedback, ResultsMeta],
  resolvers
});

export default schema;
