import React, { useState } from 'react';
import styles from './Comment.module.css';
import Reply from '../reply/page';

export default function Comment() {
  //          state: reply button 클릭 상태          //
  const [clickReply, setClickReply] = useState<boolean>(false);
  const commentId = 1; // 댓글 ID(예시)
  const handleToggleReply = () => {
    setClickReply((prev) => !prev);
  };
  return (
    <div>
      <div className={styles['comment-item-list-container']}>
        <div className={styles['comment-item-list']}>
          <div className={styles['comment-item']}>
            <div className={styles['comment-item-top']}>
              <div className={styles['comment-user-profile-image']}></div>
              <div className={styles['comment-user-nickname']}>{'Kgccm'}</div>
              <div className={styles['comment-text']}>{'댓글입니다'}</div>
            </div>

            <div className={styles['comment-item-bottom']}>
              <div className={styles['comment-write-time']}>{'3분전'}</div>
              <div className={styles['comment-reply-container']}>
                <div
                  className={styles['comment-reply-button']}
                  onClick={handleToggleReply}>
                  {'reply'}
                </div>
              </div>
            </div>
            {clickReply && <Reply />}
          </div>
        </div>
      </div>
    </div>
  );
}
