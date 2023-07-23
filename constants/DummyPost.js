import { dummyStories } from "./DummyStories"

export const posts = [
    {
        imageUrl: require('../assets/images/post-1.jpeg'),
        user: dummyStories[0].user,
        likes: 5343,
        caption: 'Triain Ride to Hogwarts',
        profileImage:  require('../assets/avatar/aden.jpg'),
        comments: [
            {
                user: dummyStories[2].user,
                comment: 'Wow! this build looks fire, super excited'
            },
            {
                user: dummyStories[3].user,
                comment: 'Once I wake up, and finally be ready to code this up'
            },
            {
                user: dummyStories[4].user,
                comment: 'Wish I could be there right now'
            }
        ]
    },
    {
        imageUrl: require('../assets/images/post-2.jpeg'),
        user: dummyStories[1].user,
        likes: 782,
        caption: 'Enjoying the scenic view',
        profileImage: require('../assets/avatar/edbert.jpg'),
        comments: [
            {
                user: dummyStories[0].user,
                comment: 'Amazing view! Where is this?'
            }
        ]
    },
    {
        imageUrl: require('../assets/images/post-3.jpeg'),
        user: dummyStories[2].user,
        likes: 234,
        caption: 'Greetings,',
        profileImage: require('../assets/avatar/raymond.jpg'),
        comments: [
            {
                user: dummyStories[4].user,
                comment: 'I want the recipe!'
            }
        ]
    },
    {
        imageUrl: require('../assets/images/post-4.jpeg'),
        user: dummyStories[3].user,
        likes: 978,
        caption: 'Meet my adorable pets',
        profileImage: require('../assets/avatar/ripat.jpg'),
        comments: [
            {
                user: dummyStories[2].user,
                comment: 'Cuteness overload!'
            }
        ]
    },
    {
        imageUrl: require('../assets/images/post-5.jpeg'),
        user: dummyStories[4].user,
        likes: 1111,
        caption: 'Creating art all day',
        profileImage: require('../assets/avatar/dino.jpg'),
        comments: [
            {
                user: dummyStories[3].user,
                comment: 'Your artwork is inspiring!'
            },
            {
                user: dummyStories[1].user,
                comment: 'Can I buy this masterpiece?'
            },
            {
                user: dummyStories[0].user,
                comment: 'I wish I had pets like these'
            }
        ]
    },
    {
        imageUrl: require('../assets/images/post-6.jpeg'),
        user: dummyStories[2].user,
        likes: 876,
        caption: 'Chasing sunsets at the beach',
        profileImage: require('../assets/avatar/iqbal.jpg'),
        comments: [
            {
                user: dummyStories[1].user,
                comment: 'I love beach sunsets!'
            }
        ]
    }
]
