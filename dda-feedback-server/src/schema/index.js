import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import Query from './operations/Query';
import Mutation from './operations/Mutation';
import Subscription from './operations/Subscription';
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
