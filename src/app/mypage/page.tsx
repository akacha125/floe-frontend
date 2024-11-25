'use client';

import React, { useState } from 'react';
import styles from './MyPage.module.css';

import Header from '../header/page';
import NavBar from '../navBar/page';

export default function MyPage() {
  return (
    <>
      <Header />
      <div className={styles['mypage-Container']}>
        <aside className={styles['navbar']}>
          <NavBar />
        </aside>
      </div>
    </>
  );
}
