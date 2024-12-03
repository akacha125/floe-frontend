import React from 'react';
import styles from './SignUp.module.css';
import Link from 'next/link';

export default function SignUp() {
  //          render: 회원가입 페이지 렌더링          //
  return (
    <div className={styles['signIn-wrapper']}>
      <div className={styles['signIn-container']}>
        <div className={styles['signIn-top']}>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <div className={styles['signIn-logo']}>{'FLOE'}</div>
          </Link>
          <div className={styles['signIn-signin']}>{'SignIn'}</div>
        </div>
        <div className={styles['signIn-input-section']}>
          <div className={styles['signIn-email-section']}>
            <div className={styles['E-MAIL']}>{'E-Mail'}</div>
            <input
              type="text"
              placeholder="Enter your Email"
              className={styles['email-input']}
            />
          </div>
          <div className={styles['signIn-pw-section']}>
            <div className={styles['PW']}>{'PW'}</div>
            <input
              type="text"
              placeholder="Enter your Password"
              className={styles['pw-input']}
            />
          </div>
        </div>
        <div className={styles['signIn-signIn-button']}>{'Sign In'}</div>
        <div className={styles['other-text-section']}>
          <div className={styles['other-text-left']}>
            {"Don't Have An Account?"}
          </div>
          <Link href="/auth/signup" passHref style={{ textDecoration: 'none' }}>
            <div className={styles['other-text-right']}>{'Sign Up Here'}</div>
          </Link>
        </div>
        <div className={styles['divider']}></div>
        <div className={styles['signIn-bottom']}>
          <button className={styles['google-login-button']}>
            <img
              src={'/signin-assets/Web/svg/light/web_light_sq_na.svg'}
              alt="Google icon"
              className={styles['google-icon']}
            />
            Sign in With Google
          </button>
          <button className={styles['github-login-button']}>
            <div className={styles['github-icon']} />
            Sign in with Github
          </button>
          <Link href="/auth" passHref style={{ textDecoration: 'none' }}>
            <div className={styles['return-button']}></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
