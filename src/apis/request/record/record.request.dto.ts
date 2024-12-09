//          interface: 게시물 기록 생성 DTO          //
export default interface PostRecordRequestDto {
    title: string;
    content: string;
    recordType: string;
    tagNames: string[];
    files: File[];
}

//          interface: 게시물 수정 DTO          //
export default interface PutRecordRequestDto {
    title: string;
    content: string;
    tagNames: string[];
    files: File[];
}

//          interface: 댓글 생성 DTO          //
export default interface PostCommentRequestDto {
    content: string;
    parentCommentId?: number | null; // 대댓글인 경우 부모 댓글 ID (없으면 null)
}

//          interface: 댓글 수정 DTO          //
export default interface PutCommentRequestDto {
    content: string;
}