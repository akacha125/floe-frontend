import React, { useState } from 'react';
import styles from './Signup.module.css';
import Link from 'next/link';

export default function SignUp() {
  //          render: 회원가입 페이지 렌더링          //
  return (
    <div className={styles['signUp-wrapper']}>
      <div className={styles['signUp-container']}>
        <div className={styles['signUp-top']}>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <div className={styles['signUp-logo']}>{'FLOE'}</div>
          </Link>
          <div className={styles['signUp-signUp']}>{'SignUp'}</div>
        </div>
        <div className={styles['signUp-input-section']}>
          <div className={styles['signUp-email-section']}>
            <div className={styles['E-MAIL']}>{'E-Mail *'}</div>
            <input
              type="text"
              placeholder="Enter your Email"
              className={styles['email-input']}
            />
          </div>
          <div className={styles['signUp-pw-section']}>
            <div className={styles['PW']}>{'PW *'}</div>
            <input
              type="text"
              placeholder="Enter your Password"
              className={styles['pw-input']}
            />
          </div>
          <div className={styles['signUp-pw-confirm-section']}>
            <div className={styles['Confirm-PW']}>{'Confirm PW *'}</div>
            <input
              type="text"
              placeholder="Enter your Password"
              className={styles['confirm-pw-input']}
            />
          </div>

          <div className={styles['divider']}></div>
          {/* Nickname Field */}
          <div className={styles['signUp-nickname-input-section']}>
            <div className={styles['Nickname']}>{'Nickname *'}</div>
            <input
              type="text"
              placeholder="Enter your Nickname"
              className={styles['nickname-input']}
            />
          </div>

          <div className={styles['signUp-birth-input-section']}>
            <div className={styles['Birth-Date']}>{'Birth Date *'}</div>
            {/* 연도 */}
            <input
              type="text"
              placeholder="연(4자리)"
              className={styles['birth-year-input']}
            />
            {/* 월 */}
            <select className={styles['birth-month-input']} defaultValue="">
              <option value="" disabled>
                월
              </option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}월
                </option>
              ))}
            </select>
            {/* 일 */}
            <input
              type="text"
              placeholder="일"
              className={styles['birth-day-input']}
            />
          </div>

          {/* 휴대폰 번호  */}
          <div className={styles['signUp-phone-number-section']}>
            <div className={styles['Phone-Number']}>{'Phone Number *'}</div>
            <input
              type="tel"
              placeholder="휴대폰 번호( - 제외)"
              className={styles['phone-number-input']}
            />
          </div>

          {/* 개인정보 수집 동의 */}

          <div className={styles['signUp-agree-personal-section']}>
            <div className={styles['agree-personal']}>
              {'개인정보 수집 동의 '}
            </div>
            <input type="checkbox" className={styles['agree-personal-box']} />
          </div>
        </div>

        <div className={styles['signUp-signUp-button']}>{'Sign Up'}</div> 
        <div className={styles['signUp-bottom']}>
          <Link href="/auth" passHref style={{ textDecoration: 'none' }}>
            <div className={styles['return-button']}></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
