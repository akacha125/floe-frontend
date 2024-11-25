'use client';

import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  //          state: See More 버튼 팝업 상태          //
  const [showSeeMorePopup, setShowSeeMorePopup] = useState<boolean>(false);

  //          state: 다크모드 상태 관리          //
  const [isDarkMode, setIsDarkMode] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  //          function: See More 팝업 토글 함수          //
  const toggleSeeMorePopup = () => {
    setShowSeeMorePopup(!showSeeMorePopup);
  };

  // 페이지 로드 시 다크모드 여부를 로컬 스토리지에서 확인
  useEffect(() => {
    const savedMode = localStorage.getItem('theme') === 'dark';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  //          render: NavBar 렌더링          //
  return (
    <div className={styles['navBar-container']}>
      <Link href="/" passHref style={{ textDecoration: 'none' }}>
        <button
          className={`${styles['Home-Button']} ${
            isActive('/') ? styles['active'] : ''
          }`}>
          <div
            className={`${styles['Home-Icon']} ${
              isActive('/') ? styles['active-icon'] : ''
            }`}></div>
          Home
        </button>
      </Link>
      <Link href="/alarm" passHref style={{ textDecoration: 'none' }}>
        <button
          className={`${styles['Alarm-Button']} ${
            isActive('/alarm') ? styles['active'] : ''
          }`}>
          <div
            className={`${styles['Heart-Icon']} ${
              isActive('/alarm') ? styles['active-icon'] : ''
            }`}></div>
          Alarm
        </button>
      </Link>
      <Link href="/post" passHref style={{ textDecoration: 'none' }}>
        <button
          className={`${styles['Post-Button']} ${
            isActive('/post') ? styles['active'] : ''
          }`}>
          <div
            className={`${styles['Add-Icon']} ${
              isActive('/post') ? styles['active-icon'] : ''
            }`}></div>
          Post
        </button>
      </Link>
      {/* /mypage/save -> /mypage 로 임시변경 */}
      <Link href="/mypage" passHref style={{ textDecoration: 'none' }}>
        <button
          className={`${styles['Save-Button']} ${
            isActive('/mypage') ? styles['active'] : ''
          }`}>
          <div
            className={`${styles['Save-Icon']} ${
              isActive('/mypage') ? styles['active-icon'] : ''
            }`}></div>
          Save
        </button>
      </Link>
      <Link href="/issue" passHref style={{ textDecoration: 'none' }}>
        <button
          className={`${styles['Issue-Button']} ${
            isActive('/issue') ? styles['active'] : ''
          }`}>
          <div
            className={`${styles['Issue-Icon']} ${
              isActive('/issue') ? styles['active-icon'] : ''
            }`}></div>
          Issue
        </button>
      </Link>
      <div className={styles['spacer']}></div>
      <button
        className={styles['See-More-Button']}
        onClick={toggleSeeMorePopup}>
        <div className={styles['More-Icon']}></div>
        More
      </button>

      {showSeeMorePopup && (
        <div className={styles['popup-container']}>
          <button className={styles['option-button']}>
            <div className={styles['Option-Icon']}></div> Option
          </button>
          <button className={styles['mode-button']} onClick={toggleDarkMode}>
            <div
              className={
                isDarkMode ? styles['Sun-Icon'] : styles['Moon-Icon']
              }></div>
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
      <Link href="/auth" passHref style={{ textDecoration: 'none' }}>
        <button className={styles['Profile-Button']}>
          <div className={styles['Guest-Icon']}></div>
          Guest
        </button>
      </Link>
    </div>
  );
}
