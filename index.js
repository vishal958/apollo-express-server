const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const connectToDatabase = require('./db');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');
// Example GraphQL schema and resolve

const startServer = async () => {
  const app = express();

  connectToDatabase(); // Invoke the database connection function

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  // ... Additional Express middleware, routes, etc.

  app.listen({ port: 4000 }, () =>
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer().catch((error) => {
  console.error('Failed to start the server:', error);
});
