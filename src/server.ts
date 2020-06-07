import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'

import typeDefs from './typedefs'
import resolvers from './resolvers'

const prisma = new PrismaClient()

const testMiddleware = async (resolver, parent, args, ctx, info) => {
    console.log('middleware: before')
    const result = await resolver(parent, args, ctx, info)
    console.log('middleware: after')
    return result
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        prisma
    },
    middlewares: [{
        Query: testMiddleware
    }]
})

server.start(() => console.log('Server started on port 4000'))