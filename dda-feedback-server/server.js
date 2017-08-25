import express from 'express';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import schema from './src/schema';

const PORT = 9999;
const server = express();

server.use('*', cors());

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema
  })
);

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  })
);

const app = createServer(server);

app.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`);

  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema
    },
    {
      server: app,
      path: '/subscriptions'
    }
  );
});
