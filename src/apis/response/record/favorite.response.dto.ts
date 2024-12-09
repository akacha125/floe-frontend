import ResponseDto from '../Response.dto';
import FavoriteItem from './../../../types/interface/favorite-item.interface';

//          interface: 좋아요 조회 DTO          //
export default interface GetFavoriteResponseDto extends ResponseDto {
    favoriteItem: FavoriteItem[];
}
//          interface: 좋아요 추가 DTO          //
export default interface PutFavoriteResponseDto extends ResponseDto {
}
