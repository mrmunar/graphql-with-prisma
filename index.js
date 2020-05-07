const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const typeDefs = `
  type Query {
    testCreateUser: String
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
        await prisma.users.create({
            data: {
                firstname: 'Alice',
                lastname: 'Cooper',
                photo_url: ''
            }
        })
        
        console.log('user created')
        return 'user created'
    },
    testGetUsers: async () => {
        const allUsers = await prisma.users.findMany()

        return allUsers
    }
  }
}

const server = new GraphQLServer({ 
    typeDefs, 
    resolvers
})

server.start(() => console.log('Server started on port 4000'))