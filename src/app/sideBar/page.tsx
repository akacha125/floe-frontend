import React from 'react';
import styles from './SideBar.module.css';
export default function SideBar() {
  return (
    <div className={styles['sidebar-wrapper']}>
      <div className={styles['Intro-Box']}>
        <div className={styles['Intro-Title']}>The FLOE</div>
        <div className={styles['Intro-other']}>
          <br />
          Share your major trouble with other people.
          <br />
          <br />
          Solve the problem and cool your head.
          <br />
          It’s good for your mental care.
        </div>
      </div>
      <div className={styles['Watching-Tag-Box']}>
        <div className={styles['Watching-Tag-Title']}>Watching Tags</div>
      </div>
      <div className={styles['Ignoring-Tag-Box']}>
        <div className={styles['Ignoring-Tag-Title']}>Ignoring Tags</div>
      </div>
      <div className={styles['Chart-Box']}>
        <div className={styles['Chart-Box-Title']}>Tags of this month</div>
      </div>
    </div>
  );
}
