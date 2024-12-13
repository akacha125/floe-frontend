'use client';
import { useRouter } from 'next/navigation'; // Next.js 라우터
import React from 'react';
import styles from './Post.List.module.css';
import { RecordListItem } from '@/types/interface';
interface PostItemListTypeProps {
  recordListItem: RecordListItem; // 게시물 데이터
}

export default function PostItemListType({
  recordListItem,
}: PostItemListTypeProps) {
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
    <div className={styles['list-container']} onClick={handleCardClick}>
      <div className={styles['list-top']}>
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
        <div className={styles['stack-tag-box']}>
          <div className={styles['stack-tag']}>
            {tagNames.map((tag, index) => (
              <span key={index} className={styles['stack-tag']}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles['list-main']}>
        <div className={styles['text-container']}>
          <div className={styles['list-title']}>{title}</div>
          <div className={styles['list-content']}>{content}</div>
        </div>
        {medias.length > 0 && (
          <div className={styles['list-image']}>
            <img
              src={medias[0].mediaUrl}
              alt="Media"
              className={styles['title-image']}
            />
          </div>
        )}
      </div>

      <div className={styles['list-bottom']}>
        <div className={styles['list-like-box']}>
          <div className={styles['list-like-icon']}></div>
          <div className={styles['list-like-count']}>{likeCount}</div>
        </div>

        <div className={styles['list-comment-box']}>
          <div className={styles['list-comment-icon']}></div>
          <div className={styles['list-comment-count']}>{commentCount}</div>
        </div>

        <div className={styles['list-save-box']}>
          <div className={styles['list-save-icon']}></div>
          <div className={styles['list-save-count']}>{saveCount}</div>
        </div>
      </div>
    </div>
  );
}
