'use client';
import React from 'react';
import styles from './Post.List.module.css';

export default function PostItemListType() {
  //          render: 게시물 카드형 렌더링          //
  return (
    <div className={styles['list-container']}>
      <div className={styles['list-top']}>
        <div className={styles['profile-image-box']}>
          <div className={styles['profile-image']}></div>
        </div>
        <div className={styles['user-nickname']}>{'user-nickname'}</div>
        <div className={styles['stack-tag-box']}>
          <div className={styles['stack-tag']}>
            {'React, TypeScript, Next.js'}
          </div>
        </div>
      </div>

      <div className={styles['list-main']}>
        <div className={styles['text-container']}>
          <div className={styles['list-title']}>{'title'}</div>
          <div className={styles['list-content']}>{'content'}</div>
        </div>
        <div className={styles['list-image']}>{'image'}</div>
      </div>

      <div className={styles['list-bottom']}>
        <div className={styles['list-like-box']}>
          <div className={styles['list-like-icon']}></div>
          <div className={styles['list-like-count']}>{'likeCount'}</div>
        </div>

        <div className={styles['list-comment-box']}>
          <div className={styles['list-comment-icon']}></div>
          <div className={styles['list-comment-count']}>{'commentCount'}</div>
        </div>

        <div className={styles['list-save-box']}>
          <div className={styles['list-save-icon']}></div>
          <div className={styles['list-save-count']}>{'saveCount'}</div>
        </div>
      </div>
    </div>
  );
}
