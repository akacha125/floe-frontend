'use client';

import React, { useState, useRef } from 'react';
import styles from './MyPage.module.css';

import Header from '../header/page';
import NavBar from '../navBar/page';

export default function MyPage() {
  // Image 변경 변수
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <>
      <Header />
      <div className={styles['mypage-Container']}>
        <aside className={styles['navbar']}>
          <NavBar />
        </aside>
        {/* 
          - Profile 영역 
            1. Image
            2. posts
            3. followers
            4. following
            5. Setting
            6. Edit Profile
            7. User Name
        */}
        <div>
          <div className={styles['user-Image']} onClick={handleImageClick}></div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        {/* 
          - Tab Bar 영역
            1. POSTS
            2. LIKE
            3. SAVE
        */}
        {/*
          - Tab Bar에 따른 Show Components 영역
            1. 올린 게시물
            2. 좋아요 누른 게시물
            3. 저장한 게시물
        */}
      </div>
    </>
  );
}
