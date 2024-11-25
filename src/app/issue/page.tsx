'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Banner from './../../assets/Banner.gif';
import styles from './Issue.module.css';
import Header from './../header/page';
import NavBar from './../navBar/page';
import SideBar from './../sideBar/page';
import PostItemListType from '@/components/post/postItemListType/page';

export default function Issue() {
  return (
    <div>
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

            {/* 포스트 리스트 */}

            <PostItemListType />
            <PostItemListType />
            <PostItemListType />
          </main>
          <aside className={styles['sidebar']}>
            <SideBar />
          </aside>
        </div>
      </>
    </div>
  );
}
