'use client';

import React from 'react';
import styles from './Github.Login.module.css';

interface GithubLoginButtonProps {
  buttonText: string;
}

export default function GithubLoginButton({
  buttonText,
}: GithubLoginButtonProps) {
  const handleGithubLogin = () => {
    try {
      const githubAuthUrl = `${process.env.NEXT_PUBLIC_GITHUB_AUTH_BASE_URL}?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}&scope=read:user,user:email`;

      // Github 로그인 페이지로 이동
      window.location.href = githubAuthUrl;
    } catch (error) {
      alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요');
      console.log('깃헙 로그인 요청 중 오류: ', error);
    }
  };

  return (
    <button
      className={styles['github-login-button']}
      onClick={handleGithubLogin}>
      <div className={styles['github-icon']} />
      {buttonText}
    </button>
  );
}
