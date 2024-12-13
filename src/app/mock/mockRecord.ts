import RecordItem from '../../types/interface/record-item.interface';

const mockRecord: RecordItem[] = [
    {
        recordId: 1,
        user: {
            nickname: 'John Doe',
            email: 'user1@email.com',
            profileImage: '',
        },
        title: 'How to Fix a Bug in React',
        content: 'This post explains how to debug common React issues.',
        medias: [
            { mediaId: 1, mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ux6b26C7E5tu4xKPTtRD9k6BIWWocpRlYw&s' },
        ],
        tagNames: ['React', 'JavaScript', 'Debugging'],
        createdAt: '2024-12-13',
    },
    {
        recordId: 2,
        user: {
            nickname: 'Jane Smith',
            email: 'user2@email.com',
            profileImage: '',
        },
        title: 'Understanding TypeScript Generics',
        content: 'A deep dive into generics in TypeScript and their use cases.',
        medias: [

        ],
        tagNames: ['TypeScript', 'Generics', 'Programming'],
        createdAt: '2024-12-12',
    },
    {
        recordId: 3,
        user: {
            nickname: 'Chris Lee',
            email: 'user3@email.com',
            profileImage: '',
        },
        title: 'CSS Grid vs Flexbox',
        content: 'Comparing CSS Grid and Flexbox for responsive layouts.',
        medias: [],
        tagNames: ['CSS', 'Grid', 'Flexbox'],
        createdAt: '2024-12-11',
    },
    {
        recordId: 4,
        user: {
            nickname: 'Alex Kim',
            email: 'user4@email.com',
            profileImage: '',
        },
        title: 'Next.js API Routes',
        content: 'Learn how to create server-side API routes in Next.js.',
        medias: [],
        tagNames: ['Next.js', 'API', 'Backend'],
        createdAt: '2024-12-10',
    },
];

export default mockRecord;
