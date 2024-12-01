'use client';
import React, { useState, useEffect } from 'react';
import styles from './PostDetail.module.css';
import Header from './../../header/page';
import NavBar from './../../navBar/page';
import Comment from '@/components/comment/page';

export default function PostDetail() {
  //          state: 좋아요 아이콘 버튼 클릭 상태          //
  const [likeClick, setLikeClick] = useState<boolean>(false);
  //          state: 댓글 아이콘 버튼 클릭 상태          //
  const [commentClick, setCommentClick] = useState<boolean>(false);
  //          state: 저장 아이콘 버튼 클릭 상태          //
  const [saveClick, setSaveClick] = useState<boolean>(false);
  //          state: 댓글창 팝업 상태          //
  const [showCommentSection, setShowCommentSection] = useState<boolean>(false);

  //          function: 댓글창 팝업 여부 관리 함수          //
  const toggleCommentSection = () => {
    setShowCommentSection((prev) => !prev);
  };

  //          render: 렌더링          //
  return (
    <>
      <Header />
      <div className={styles['post-detail-page-container']}>
        <aside className={styles['navbar']}>
          <NavBar />
        </aside>
        <div className={styles['post-detail-item-container']}>
          <div className={styles['post-detail-top']}>
            <div className={styles['profile-image-box']}>
              <div className={styles['profile-image']}></div>
            </div>
            <div className={styles['user-nickname']}>{'user-nickname'}</div>
            {/* profileimgae-box와 user-nickname 클릭시 해당 유저의 프로필로 이동해야함 */}
          </div>

          <div className={styles['post-detail-main']}>
            <div className={styles['stack-tag-box']}>
              <div className={styles['stack-tag']}>
                {'React, TypeScript, Next.js'}
              </div>
            </div>

            <div className={styles['post-detail-title']}>
              {'Title title Title title Title title Title title'}
            </div>
            <div className={styles['post-detail-content']}>
              {
                '구현하고자 했던 부분네이버 카타르 경기일정 페이지에서 정보 크롤링 해오기발생한 이슈크롤릴해오는 값에 오류가 뜨거나 None값이 나타나는 오류가 발생시도한 방법웹 개발 종합반 강의에서 스파르타피디아 크롤링에 사용하였던 beautifulsoup 라이브러리 select() 함수 사용다양한 웹사이트 시도 - 구글 카타르 경기 일정, FIFA 사이트, Radiokorea.com이 중 Radiokorea 사이트에서 필요한 값이 몇 가지 추출되었지만, 어떤 값들은 역시나 None으로 저장됨해결 방법기술개발자님에게 도움 요청! - 안타깝게도 시도 중 매니저님 노트북 베터리가 사망하면서 중단됨지나가는 능력자 신원님에게 도움요청 - 파이썬으로 select() 함수가 아닌 find() 함수를 이용해서 코드 시현을 해주심보여주신 파이썬 코드를 참고하여 자바스크립트로 find() 함수를 작성하여 구현 성공find()와 select()의 차이find: html tag를 통한 크롤링select: css를 통한 크롤링find() 함수에서 사용하는 태그는 이름(name), 속성(attribut), 값(value)으로 구성되어 있기 때문에 find로 해당 이름이나 속성, 값을 특정하여 태그를 찾을 수 있다.find와 select는 태그 이름, 속성, 속성 값을 특정하는 방식은 같다. 하지만 CSS는 이 외에도 다양한 선택자(selector)를 갖기 때문에 여러 요소를 조합하여 태그를 특정하기 쉽다.그러므로 더 다양한 조건을 이용하여 더 직관적인 방법으로 태그를 찾기 위해서는 find보다는 select를 사용하는 게 적합select 가 문장도 더 간결해 보이고, 속도가 빠르다고 한다., 속성(attribut), 값(value)으로 구성되어 있기 때문에 find로 해당 이름이나 속성, 값을 특정하여 태그를 찾을 수 있다.find와 select는 태그 이름, 속성, 속성 값을 특정하는 방식은 같다.구현하고자 했던 부분네이버 카타르 경기일정 페이지에서 정보 크롤링 해오기발생한 이슈크롤릴해오는 값에 오류가 뜨거나 None값이 나타나는 오류가 발생시도한 방법웹 개발 종합반 강의에서 스파르타피디아 크롤링에 사용하였던 beautifulsoup 라이브러리 select() 함수 사용다양한 웹사이트 시도 - 구글 카타르 경기 일정, FIFA 사이트, Radiokorea.com이 중 Radiokorea 사이트에서 필요한 값이 몇 가지 추출되었지만, 어떤 값들은 역시나 None으로 저장됨해결 방법기술개발자님에게 도움 요청! - 안타깝게도 시도 중 매니저님 노트북 베터리가 사망하면서 중단됨지나가는 능력자 신원님에게 도움요청 - 파이썬으로 select() 함수가 아닌 find() 함수를 이용해서 코드 시현을 해주심보여주신 파이썬 코드를 참고하여 자바스크립트로 find() 함수를 작성하여 구현 성공find()와 select()의 차이find: html tag를 통한 크롤링select: css를 통한 크롤링find() 함수에서 사용하는 태그는 이름(name), 속성(attribut), 값(value)으로 구성되어 있기 때문에 find로 해당 이름이나 속성, 값을 특정하여 태그를 찾을 수 있다.find와 select는 태그 이름, 속성, 속성 값을 특정하는 방식은 같다. 하지만 CSS는 이 외에도 다양한 선택자(selector)를 갖기 때문에 여러 요소를 조합하여 태그를 특정하기 쉽다.그러므로 더 다양한 조건을 이용하여 더 직관적인 방법으로 태그를 찾기 위해서는 find보다는 select를 사용하는 게 적합select 가 문장도 더 간결해 보이고, 속도가 빠르다고 한다., 속성(attribut), 값(value)으로 구성되어 있기 때문에 find로 해당 이름이나 속성, 값을 특정하여 태그를 찾을 수 있다.find와 select는 태그 이름, 속성, 속성 값을 특정하는 방식은 같다.'
              }
            </div>
            <div className={styles['post-detail-image-container']}>
              <div className={styles['post-detail-images']}></div>
            </div>
          </div>

          <div className={styles['post-detail-bottom']}>
            <div className={styles['post-detail-like-box']}>
              {/* 좋아요 아이콘 클릭시 해당 게시글의 좋아요 count 증감 */}
              <div className={styles['post-detail-like-icon']}></div>
              <div className={styles['post-detail-like-count']}>
                {'likeCount'}
              </div>
            </div>

            <div className={styles['post-detail-comment-box']}>
              <div
                className={styles['post-detail-comment-icon']}
                onClick={toggleCommentSection}></div>
              <div className={styles['post-detail-comment-count']}>
                {'commentCount'}
              </div>
            </div>

            <div className={styles['post-detail-save-box']}>
              {/* 저장 아이콘 클릭시 해당 게시글 스크랩 */}
              <div className={styles['post-detail-save-icon']}></div>
              <div className={styles['post-detail-save-count']}>
                {'saveCount'}
              </div>
            </div>

            <div className={styles['post-detail-upload-time']}>{'2h ago'}</div>
          </div>
          {showCommentSection && (
            <div className={styles['comment-section']}>
              <div className={styles['comment-header']}>
                Comment <span>20개</span>
              </div>

              <div className={styles['comment-input-container']}>
                <div className={styles['user-profile-box']}>
                  <div className={styles['user-profile-image']}></div>
                  <div className={styles['user-profile-nickname']}>
                    {'Kgccm'}
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="댓글 추가..."
                  className={styles['comment-input']}
                />
                <div className={styles['comment-Apply-Button']}>Apply</div>
              </div>
              <Comment />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
