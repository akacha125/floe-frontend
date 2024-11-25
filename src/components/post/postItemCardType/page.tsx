'use client';

import React from 'react';
import styles from './Post.Card.module.css';

export default function PostItemCardType() {
  //          render: 게시물 카드형 렌더링          //
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-top']}>
        <div className={styles['profile-image-box']}>
          <div className={styles['profile-image']}></div>
        </div>
        <div className={styles['user-nickname']}>{'user-nickname'}</div>
      </div>

      <div className={styles['card-main']}>
        <div className={styles['stack-tag-box']}>
          <div className={styles['stack-tag']}>
            {'React, TypeScript, Next.js'}
          </div>
        </div>

        <div className={styles['card-title']}>{'title'}</div>
        <div className={styles['card-content']}>{'content'}</div>
        <div className={styles['card-image']}>{'image'}</div>
      </div>

      <div className={styles['card-bottom']}>
        <div className={styles['card-like-box']}>
          <div className={styles['card-like-icon']}></div>
          <div className={styles['card-like-count']}>{'likeCount'}</div>
        </div>

        <div className={styles['card-comment-box']}>
          <div className={styles['card-comment-icon']}></div>
          <div className={styles['card-comment-count']}>{'commentCount'}</div>
        </div>

        <div className={styles['card-save-box']}>
          <div className={styles['card-save-icon']}></div>
          <div className={styles['card-save-count']}>{'saveCount'}</div>
        </div>
      </div>
    </div>
  );
}
