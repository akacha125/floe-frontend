import { ResponseCode } from './../../types/enum';

export default interface ResponseDto<T = any> {
    code: ResponseCode;
    message: string;
    data?: T; // 데이터를 제네릭 타입으로 정의
}
