'use client';

import React, { useState, useEffect } from 'react';
import styles from './Splash.module.css';

export default function Splash() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 750);
    const redirectTimer = setTimeout(() => setShowSplash(false), 1200);
    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div className={`${styles.splash} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.onboardImage}></div>
      <div className={styles.onboardText}>
        Develop flow
        <br />
        <br />A place to make your only develop Floor
        <br />
        <br />
      </div>
    </div>
  );
}
