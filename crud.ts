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
    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: 'this is a bio',
    //         userId: 2
    //     }
    // });

    // console.log(createProfile);

    // retrieve all users
    // const users = await prisma.user.findMany({
    //     // include: {
    //     //     posts: true,
    //     //     profile: true
    //     // }
    //     select: {
    //         id: true,
    //         name: true,
    //         email: true,
    //         role: true,
    //         posts: true,
    //         profile: true
    //     }
    // });
    // console.dir(users, {depth: Infinity});

    // update user data
    // const updateProfile = await prisma.profile.update({
    //     where: {
    //         userId: 2
    //     },
    //     data: {
    //         bio: 'Next Level Web Dev'
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select: {
    //                 name: true,
    //                 email: true
    //             }
    //         }

    //     }
    // });

    // console.log(updateProfile)

    // delete user data
    // const deleteUser = await prisma.user.delete({
    //     where: {
    //         id: 2
    //     }
    // })

    // console.log(deleteUser);

    // get single user data
    const getUserData = await prisma.user.findUnique({
        where: {
            id: 3
        },
        select: {
            id: true,
            posts: true,
            profile: true
        }
    })

    console.log(getUserData);
}

run();