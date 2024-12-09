export default interface CommentItem {
    commentId: number; // 댓글 ID (유니크한 식별자)
    userNickname: string;
    userProfileImage: string | null;
    createdAt: string;
    content: string;
    reply?: CommentItem[]; // 대댓글 (재귀적으로 CommentListItem 배열)
}