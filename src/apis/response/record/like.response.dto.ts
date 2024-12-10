import ResponseDto from '../Response.dto';
import LikeItem from '../../../types/interface/like-item.interface';

//          interface: 좋아요 수 조회 응답 DTO         //
export default interface GetRecordLikeCountResponseDto {
    likeCount: number;
}
//          interface: 좋아요한 유저 목록 응답 DTO      //
export default interface GetRecordLikeListResponseDto {
    likeList: {
        userId: number;
        userName: string;
        profileImage: string | null;
    }[];
}