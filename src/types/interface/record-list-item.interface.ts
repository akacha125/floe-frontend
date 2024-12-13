export default interface RecordListItem {
    recordId: number;
    user: {
        nickname: string;
        profileImage: string | null;
    };
    title: string;
    content: string;
    medias: { mediaId: number; mediaUrl: string }[];
    tagNames: string[];
    createdAt: string;
    likeCount : number;
    commentCount: number;
    saveCount : number;
}
