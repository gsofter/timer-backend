import { ApolloServer } from 'apollo-server';
import { schema } from './schema/timeentry-schema';
import { resolvers } from './resolvers/timeentry-resolver';
import mongoose from 'mongoose';
const server = new ApolloServer({ typeDefs: schema, resolvers });
async function start() {
  try {
    await mongoose.connect('mongodb+srv://steve:eUjy%25YKP2k-TvdJ@cluster0.i8mtr.mongodb.net/himama-timer', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  } catch (e) {
    console.log(e.message);
  }
}

start();
