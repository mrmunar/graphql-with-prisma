export default {
    Query: {
        getPosts: async (parent, args, ctx) => {
            return await ctx.prisma.posts.findMany()
        }
    },
    Mutation: {
        createPost: async (parent, { data }, ctx) => {
            return await ctx.prisma.posts.create({
                data: {
                    title: data.title,
                    content: data.content
                }
            })
        },
    }
}