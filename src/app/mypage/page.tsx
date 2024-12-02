'use client';

import React, { useState, useRef } from 'react';
import styles from './MyPage.module.css';

import Header from '../header/page';
import NavBar from '../navBar/page';

import TabNavigation from '@/components/tabNavigation/page';

export default function MyPage() {
  // Image 변경 변수
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Tab Navigation 선택 변수
  const [activeTab, setActivetab] = useState('POSTS');

  // 현재 이미지를 클릭했을때
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Iamge 변경 함수
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        document.documentElement.style.setProperty(
          '--mypage-image-userInitialImage',
          `url(${reader.result})`,
        );
      };
      reader.readAsDataURL(file);
    }
  };

  // Tab 선택했을 때
  const handleTabClick = (tab: string) => {
    setActivetab(tab);
  };

  const TabContent = () => {
    switch (activeTab) {
      case 'POSTS':
        return <div> POSTS Contents </div>;
      case 'LIKE':
        return <div> LIKE Contents </div>;
      case 'SAVE':
        return <div> SAVE Contents </div>;
      default:
        return <div> Default Contents </div>;
    }
  };

  // HTML
  return (
    <>
      <Header />
      <div className={styles['mypage-Container']}>
        <aside className={styles['navbar']}>
          <NavBar />
        </aside>
        {/* 
          - Profile 영역 
            1. Image ✅
            2. posts ✅
            3. followers ✅
            4. following ✅
            5. Setting ✅
            6. Edit Profile ✅
            7. User Name ✅
        */}
        <div className={styles['user-Contents']}>
        <div className={styles['user-Info']}>
          <div
            className={styles['user-Image']}
            onClick={handleImageClick}></div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <div className={styles['user-Data-Wrapper']}>
            <div className={styles['user-Data']}>
              <div className={styles['user-Posts']}>
                <div className={styles['data-Number']}>10</div>
                <div>posts</div>
              </div>

              <div className={styles['user-Followers']}>
                <div className={styles['data-Number']}>10</div>
                <div>followers</div>
              </div>

              <div className={styles['user-Following']}>
                <div className={styles['data-Number']}>10</div>
                <div>following</div>
              </div>
            </div>

            <div className={styles['user-Edit']}>
              <button className={styles['user-setting']} />
              <button className={styles['edit-Button']}>Edit profile</button>
              <div className={styles['user-Name']}>GANG JAEHUN</div>
            </div>
          </div>
        </div>

        {/* 
          - Tab Bar 영역
            1. POSTS
            2. LIKE
            3. SAVE
        */}
        <div className={styles['tab-Content']}>
          <TabNavigation activeTab={activeTab} onTabClick={handleTabClick} />
          <div>{TabContent()}</div>
        </div>

        {/*
          - Tab Bar에 따른 Show Components 영역
            1. 올린 게시물
            2. 좋아요 누른 게시물
            3. 저장한 게시물
        */}
        </div>
        
      </div>
    </>
  );
}
