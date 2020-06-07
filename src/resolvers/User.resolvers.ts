export default {
    Query: {
        getUsers: async (parent, args, ctx) => {
            return await ctx.prisma.users.findMany()
        }
    },
    Mutation: {
        createUser: async (parent, { data }, ctx) => {
            console.log('data', data)
            return await ctx.prisma.users.create({
                data: {
                    firstname: data.firstname,
                    lastname: data.lastname,
                    photo_url: data.photo_url ?? ''
                }
            })
        }
    }
}