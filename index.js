const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const typeDefs = `
  type Query {
    testCreateUser: User!
    testGetUsers: [User!]!
  }

  type User {
    firstname: String
    id: ID
    lastname: String
    photo_url: String
  }
`;

const resolvers = {
  Query: {
    testCreateUser: async () => {
        return await prisma.users.create({
            data: {
                firstname: 'Alice',
                lastname: 'Cooper',
                photo_url: ''
            }
        })
    },
    testGetUsers: async () => {
        return await prisma.users.findMany()
    }
  }
}

const server = new GraphQLServer({ 
    typeDefs, 
    resolvers
})

server.start(() => console.log('Server started on port 4000'))