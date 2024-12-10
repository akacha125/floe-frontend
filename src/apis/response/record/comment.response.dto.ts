import ResponseDto from '../Response.dto';
import CommentItem from './../../../types/interface/comment-item.interface';


//          interface: 댓글 조회 DTO     <완>     //
export default interface GetCommentResponseDto extends ResponseDto {
    comment: CommentItem[];
}

//          interface: 댓글 수정 DTO          //
export default interface PutCommentResponseDto extends ResponseDto {
    comment: CommentItem[];
}
//          interface: 댓글 삭제 DTO          //
export default interface DeleteCommentResponseDto extends ResponseDto {
}
