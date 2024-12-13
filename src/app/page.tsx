'use client';
import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

import Image from 'next/image';
import Banner from './../assets/Banner.gif';
import Header from './header/page';
import NavBar from './navBar/page';
import SideBar from './sideBar/page';
import PostItemCardType from '@/components/post/postItemCardType/page';
import PostItemListType from '@/components/post/postItemListType/page';
import mockRecordList from './mock/mockRecordList';

export default function Home() {
  //          state: Splash Screen 상태          //
  const [showSplash, setShowSplash] = useState(true);
  //          state: Fade Out 효과 상태          //
  const [fadeOut, setFadeOut] = useState(false);
  //          state: View Mode(카드형 or 리스트형) 상태         //
  const [viewMode, setViewMode] = useState('card');

  //          effect: useEffect          //
  useEffect(() => {
    // 0.75초 후에 페이드아웃 시작
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 750);

    // 페이드아웃 애니메이션 후 리디렉션
    const redirectTimer = setTimeout(() => {
      setShowSplash(false);
    }, 1200); // 1.2초 후에 리디렉션

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, []);

  // 토글 버튼을 클릭할 때 뷰 모드 변경
  const toggleViewCardMode = () => {
    setViewMode('card');
  };
  const toggleViewListMode = () => {
    setViewMode('list');
  };
  //          render: 렌더링          //
  return (
    <>
      {showSplash && (
        //스플래시 화면(온보딩)
        <div
          className={`${styles['splash-screen']} ${
            fadeOut ? styles['fade-out'] : ''
          }`}>
          <div className={styles['onboard-image']}></div>
          <div className={styles['onboard-text']}>
            Develop flow
            <br />
            <br />A place to make your only develop Floor
            <br />
            <br />
          </div>
        </div>
      )}
      {!showSplash && (
        <>
          <Header />
          <div className={styles['page-container']}>
            <aside className={styles['navbar']}>
              <NavBar />
            </aside>
            <main className={styles['main-content']}>
              <div className={styles['main-banner']}>
                <Image src={Banner} alt="banner" className={styles['banner']} />
              </div>
              <div className={styles['toggle-button']}>
                <button
                  className={styles['card-icon']}
                  onClick={toggleViewCardMode}></button>

                <button
                  className={styles['list-icon']}
                  onClick={toggleViewListMode}></button>
              </div>
              {viewMode === 'card' ? (
                // Map을 이용해 목데이터 렌더링
                <div className={styles['card-view']}>
                  {mockRecordList.map((record) => (
                    <PostItemCardType
                      key={record.recordId}
                      recordListItem={record}
                    />
                  ))}
                </div>
              ) : (
                // 리스트 뷰일 경우 다른 컴포넌트를 렌더링
                <div className={styles['list-view']}>
                  {mockRecordList.map((record) => (
                    <PostItemListType
                      key={record.recordId}
                      recordListItem={record}
                    />
                  ))}
                </div>
              )}
            </main>
            <aside className={styles['sidebar']}>
              <SideBar />
            </aside>
          </div>
        </>
      )}
    </>
  );
}
