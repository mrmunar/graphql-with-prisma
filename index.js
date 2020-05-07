const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const typeDefs = `
  type Query {
    testCreateUser: User!
    testGetUsers: [User!]!
    testCreatePost: Post!
    testGetPosts: [Post!]!
  }

  type User {
    firstname: String
    id: ID
    lastname: String
    photo_url: String
  }

  type Post {
    id: ID
    title: String
    content: String
  }
`;

const resolvers = {
    Query: {
        testCreateUser: async (parent, args, ctx) => {
            return await ctx.prisma.users.create({
                data: {
                    firstname: 'Alice',
                    lastname: 'Cooper',
                    photo_url: ''
                }
            })
        },
        testGetUsers: async (parent, args, ctx, info) => {
            return await ctx.prisma.users.findMany()
        },
        testCreatePost: async (parent, args, ctx) => {
            return await ctx.prisma.posts.create({
                data: {
                    title: 'title134',
                    content: 'content134',
                }
            })
        },
        testGetPosts: async (parent, args, ctx, info) => {
            return await ctx.prisma.posts.findMany()
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {
        prisma
    }
})

server.start(() => console.log('Server started on port 4000'))