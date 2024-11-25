'use client';
import React from 'react';

export default function Onboard() {
  const authlink = 'http://localhost:3000/auth';
  const onboardlink = 'http://localhost:3000/onboard';
  const headerlink = 'http://localhost:3000';
  return (
    <div>
      <a href={authlink}>Auth 링크 임시로 연결해놓은거</a>
      <br />
      <a href={onboardlink}>onboard 링크 임시로 연결해놓은거</a>
      <br />
      <a href={headerlink}>header 링크 임시로 연결해놓은거</a>
    </div>
  );
}
