import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// 쿠키 저장
export const setCookie = (name: string, value: string) => {
  cookies.set(name, value);
};

// 쿠키 불러오기
export const getCookie = (name: string) => {
  cookies.get(name);
};

// 쿠키 삭제하기
export const removeCookie = (name: string) => {
  cookies.remove(name);
};
