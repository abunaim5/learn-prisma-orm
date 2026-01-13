import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: 'Mark Juker',
    //         email: 'mark@juker.com'
    //     }
    // });

    // console.log('User create: ', createUser)

    // create posts
    // const createPost = await prisma.post.create({
    //     data: {
    //         title: 'This is a title',
    //         content: 'This is a content',
    //         authorId: 3,
    //         updatedAt: new Date()
    //     }
    // });

    // console.log(createPost);

    // create profile
    const createProfile = await prisma.profile.create({
        data: {
            bio: 'this is a bio',
            userId: 2
        }
    });

    console.log(createProfile);
}

run();