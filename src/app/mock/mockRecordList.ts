import RecordListItem from '../../types/interface/record-list-item.interface';
const mockRecordList: RecordListItem[] = [
  {
    recordId: 1,
    user: {
      nickname: 'John Doe',
      profileImage: '',
    },
    title: 'How to Fix a Bug in React',
    content: 'This post explains how to debug common React issues.',
    medias: [
      { mediaId: 1, mediaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ux6b26C7E5tu4xKPTtRD9k6BIWWocpRlYw&s' },
    ],
    tagNames: ['React', 'JavaScript', 'Debugging'],
    createdAt: '2024-12-13',
    likeCount: 1,
    commentCount: 3,
    saveCount: 3,
  },
  {
    recordId: 2,
    user: {
      nickname: 'Jane Smith',
      profileImage: '',
    },
    title: 'Understanding TypeScript Generics',
    content: 'A deep dive into generics in TypeScript and their use cases.',
    medias: [

    ],
    tagNames: ['TypeScript', 'Generics', 'Programming'],
    createdAt: '2024-12-12',
    likeCount: 1,
    commentCount: 3,
    saveCount: 3,
  },
  {
    recordId: 3,
    user: {
      nickname: 'Chris Lee',
      profileImage:'',
    },
    title: 'CSS Grid vs Flexbox',
    content: 'Comparing CSS Grid and Flexbox for responsive layouts.',
    medias: [],
    tagNames: ['CSS', 'Grid', 'Flexbox'],
    createdAt: '2024-12-11',
    likeCount: 1,
    commentCount: 3,
    saveCount: 3,
  },
  {
    recordId: 4,
    user: {
      nickname: 'Alex Kim',
      profileImage: '',
    },
    title: 'Next.js API Routes',
    content: 'Learn how to create server-side API routes in Next.js.',
    medias: [],
    tagNames: ['Next.js', 'API', 'Backend'],
    createdAt: '2024-12-10',
    likeCount: 1,
    commentCount: 3,
    saveCount: 3,
  },
];

export default mockRecordList;
