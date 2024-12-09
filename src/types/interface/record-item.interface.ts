import User from '../../types/interface/user.interface'; // 기존 User 인터페이스 활용

export default interface RecordItem {
    recordId: number; // 게시물 ID
    title: string; // 게시물 제목
    content: string; // 게시물 내용
    recordType: string; // 게시물 유형 (e.g., "FLOE", "ISSUE")
    medias: { mediaId: number; mediaUrl: string }[]; // 게시물 이미지 리스트
    tags: string[]; // 태그 리스트
    createdAt: string; // 생성 일자
    user: User; // email, nickname, profileImage
}
