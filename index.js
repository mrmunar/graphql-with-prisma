const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    await prisma.users.create({
        data: {
            firstname: 'Alice',
            lastname: 'Cooper',
        }
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true
        },
    })
    console.dir(allUsers, { depth: null })
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.disconnect()
    })