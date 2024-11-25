'use client';

import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
export default function Header() {
  return (
    <div id={styles['Header-Wrapper']}>
      <div className={styles['Header-Container']}>
        <Link href="/" passHref>
          <div className={styles['Header-Logo']}>
            <div className={styles['Header-Logo-Image']}></div>
          </div>
          <div className={styles['Header-Logo-Text']}>FLOE</div>
        </Link>
        <div className={styles['searchBar-wrapper']}>
          <div className={styles['searchBar-container']}>
            <div className={styles['searchBar-icon']}></div>
            <input
              className={styles['searchBar-input']}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
