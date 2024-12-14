'use client';
import { useRouter } from 'next/navigation'; // Next.js 라우터
import React from 'react';
import styles from './Post.Card.module.css';
import { RecordListItem } from '@/types/interface';
interface PostItemCardTypeProps {
  recordListItem: RecordListItem; // 게시물 데이터
}

export default function PostItemCardType({
  recordListItem
}: PostItemCardTypeProps) {
  const {
    recordId,
    user,
    title,
    content,
    medias,
    tagNames,
    createdAt,
    likeCount,
    commentCount,
    saveCount,
  } = recordListItem;

  const router = useRouter(); // Next.js 라우터 훅

  const handleCardClick = () => {
    // recordId를 기반으로 게시글 상세 페이지로 이동
    router.push(`/post/${recordId}`);
  };
  //          render: 게시물 카드형 렌더링          //
  return (
    <div className={styles['card-container']} onClick={handleCardClick}>
      <div className={styles['card-top']}>
        <div className={styles['profile-image-box']}>
          {user.profileImage ? (
            <div
              className={styles['profile-image']}
              style={{
                backgroundImage: `url(${user.profileImage})`,
              }}></div>
          ) : (
            <div
              className={`${styles['profile-image']} ${styles['default-profile-image']}`}></div>
          )}
        </div>
        <div className={styles['user-nickname']}>{user.nickname}</div>
        <div className={styles['create-at']}>{createdAt}</div>
        {/* profileimgae-box와 user-nickname 클릭시 해당 유저의 프로필로 이동해야함 */}
      </div>

      <div className={styles['card-main']}>
        {/* 게시글 내용 전체 클릭시 해당 게시글 디테일페이지로 이동 */}
        <div className={styles['stack-tag-box']}>
          <div className={styles['stack-tag']}>
            {tagNames.map((tag, index) => (
              <span key={index} className={styles['stack-tag']}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles['card-title']}>{title}</div>
        <div className={styles['card-content']}>{content}</div>
        {medias.length > 0 && (
          <div className={styles['card-image']}>
            <img
              src={medias[0].mediaUrl}
              alt="Media"
              className={styles['title-image']}
            />
          </div>
        )}
      </div>

      <div className={styles['card-bottom']}>
        <div className={styles['card-like-box']}>
          {/* 좋아요 아이콘 클릭시 해당 게시글의 좋아요 count 증감 */}
          <div className={styles['card-like-icon']}></div>
          <div className={styles['card-like-count']}>{likeCount}</div>
        </div>

        <div className={styles['card-comment-box']}>
          {/* 댓글 아이콘 클릭시 해당 게시글 디테일 페이지로 이동 */}
          <div className={styles['card-comment-icon']}></div>
          <div className={styles['card-comment-count']}>{commentCount}</div>
        </div>

        <div className={styles['card-save-box']}>
          {/* 저장 아이콘 클릭시 해당 게시글 스크랩 */}
          <div className={styles['card-save-icon']}></div>
          <div className={styles['card-save-count']}>{saveCount}</div>
        </div>
      </div>
    </div>
  );
}
