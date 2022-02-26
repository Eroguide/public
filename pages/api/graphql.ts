import { ApolloServer } from 'apollo-server-micro'
import { MicroRequest } from 'apollo-server-micro/dist/types'
// import { typeDefs } from '@/graphql/schema'
// import { resolvers } from '@/graphql/resolvers'
import { ServerResponse } from 'http'
import Cors from 'micro-cors'
import { typeDefs } from '@/lib/schema'
// import { resolvers } from '@/lib/resolvers'
const cors = Cors()
const apolloServer = new ApolloServer({ typeDefs })
const startServer = apolloServer.start()

export default cors(async function handler(
  req: MicroRequest,
  res: ServerResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
