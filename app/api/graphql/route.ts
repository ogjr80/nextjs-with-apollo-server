import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { addMocksToSchema } from '@graphql-tools/mock'
import { makeExecutableSchema } from '@graphql-tools/schema'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'


import { NextRequest } from 'next/server'
import typeDefs from './schema'
import resolvers from './resolvers'

// let plugins = []
// if (process.env.NODE_ENV === 'production') {
//   plugins = [
//     ApolloServerPluginLandingPageProductionDefault({
//       embed: true,
//       graphRef: 'myGraph@prod',
//     }),
//   ]
// } else {
//   plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })]
// }

// const server = new ApolloServer({
//     resolvers,
//     typeDefs,
//     plugins,
//   })
const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs }),
  }),
    plugins: [
      // Install a landing page plugin based on NODE_ENV
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault({
            graphRef: 'my-graph-id@my-graph-variant',
            footer: false,
          })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });

  const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req) => {
      //const user = await getUserFromToken(req.headers.get('authorization') ?? '')
      return {
        req,
       // user,
      }
    },
  })
  
  export async function GET(request:NextRequest) {
    return handler(request)
  }
  
  export async function POST(request : NextRequest) {
    return handler(request)
  }
  


