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
        {/* profileimgae-box와 user-nickname 클릭시 해당 유저의 프로필로 이동해야함 */}
      </div>

      <div className={styles['card-main']}>
        {/* 게시글 내용 전체 클릭시 해당 게시글 디테일페이지로 이동 */}
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
          {/* 좋아요 아이콘 클릭시 해당 게시글의 좋아요 count 증감 */}
          <div className={styles['card-like-icon']}></div>
          <div className={styles['card-like-count']}>{'likeCount'}</div>
        </div>

        <div className={styles['card-comment-box']}>
          {/* 댓글 아이콘 클릭시 해당 게시글 디테일 페이지로 이동 */}
          <div className={styles['card-comment-icon']}></div>
          <div className={styles['card-comment-count']}>{'commentCount'}</div>
        </div>

        <div className={styles['card-save-box']}>
          {/* 저장 아이콘 클릭시 해당 게시글 스크랩 */}
          <div className={styles['card-save-icon']}></div>
          <div className={styles['card-save-count']}>{'saveCount'}</div>
        </div>
      </div>
    </div>
  );
}
