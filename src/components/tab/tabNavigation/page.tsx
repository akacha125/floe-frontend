'use client';

import React, { useState } from 'react';
import styles from './Tab.Navigation.module.css';

// Tab Navigation Interface
interface TabNavigationProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

// Tab Props를 받음
export default function TabNavigation({
  activeTab,
  onTabClick,
}: TabNavigationProps) {
  const tabs: Array<string> = ['POSTS', 'LIKE', 'SAVE'];

  return (
    <div className={styles['tab-Container']}>
      {tabs.map((tab) => (
        <button
          className={`
            ${styles['tab-Button']}
            ${activeTab === tab ? styles.active: ''}
            `}
          key={tab}
          onClick={() => onTabClick(tab)}>
          {tab}
        </button>
      ))}
    </div>
  );
}
