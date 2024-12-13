import { CommentItem } from '@/types/interface';

const mockComments: CommentItem[] = [
    {
        commentId: 1,
        user: { nickname: 'User1', profileImage: null },
        content: 'This is a comment',
        parentId: null,
        createdAt: '2023-12-01',
    },
    {
        commentId: 2,
        user: { nickname: 'User2', profileImage: null },
        content: 'This is another comment',
        parentId: null,
        createdAt: '2023-12-01',
    },
];

export default mockComments;