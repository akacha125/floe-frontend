// 메인 페이지
export const ROUTES = {
    HOME: '/', // 최신 게시물 조회 페이지
    RECORD: {
        LIST: '/records', // 전체 게시물 리스트 
        DETAIL: (recordId: number | string) => `/records/${recordId}`, // 특정 게시물 상세 페이지
    },
};