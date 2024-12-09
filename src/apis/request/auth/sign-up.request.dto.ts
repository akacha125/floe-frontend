export default interface SignUpRequestDto {
    email: string;
    password: string;
    nickname: string;
    experience: number; //연차
    age: number; //나이
    field: string;  // 분야(ex, 프론트엔드)
    agreedPersonal: boolean; //개인정보 수집 동의
}