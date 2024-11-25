'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Code from '@tiptap/extension-code';
import Placeholder from '@tiptap/extension-placeholder';
import Header from '../header/page';
import styles from './Post.module.css';
import NavBar from '../navBar/page';

export default function Post() {
  const [tag, setTag] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const handleContentChange = (value: string) => {
    setContent(value);
  };

  //          function: Tip-Tap Editor 함수          //
  const editor = useEditor({
    extensions: [
      StarterKit,
      Text,
      Bold,
      Italic,
      Code,
      Placeholder.configure({
        // 에디터가 완전히 비어 있을 때만 placeholder를 표시
        emptyEditorClass: 'is-empty', // 커스텀 클래스를 추가
        placeholder: '내용을 입력해주세요...', // 표시할 placeholder 내용
      }),
    ],
    content: content || '',
    autofocus: true,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });
  return (
    <>
      <Header />
      <div className={styles['post-Container']}>
        <aside className={styles['navbar']}>
          <NavBar />
        </aside>
        {/* Posting 영역 */}
        <div className={styles['post-Section']}>
          <div className={styles['top-Section']}>
            <div className={styles['stack-Section']}>
              <div className={styles['stack-Title-Box']}>
                <div className={styles['stack-Title-Text']}>{'📌Stack'}</div>
                <div className={styles['stack-Title-Intro-Text']}>
                  {'관련된 스택을 표시해주세요'}
                </div>
              </div>

              <div className={styles['stack-Search-Box']}>
                <input
                  className={styles['stack-Search']}
                  placeholder="Search..."
                />
                <div className={styles['stack-Add-Complete']}></div>
              </div>
            </div>
            {/* Category 영역 */}
            <div className={styles['category-Section']}>
              <div className={styles['category-Title-Box']}>
                <div className={styles['category-Title-Text']}>
                  {'🏷️Category'}
                </div>
                <div className={styles['category-Title-Intro-Text']}>
                  {'️글의 유형을 선택해주세요'}
                </div>
              </div>
              <div className={styles['category-Select-Box']}>
                <select
                  name="post-Category"
                  className={styles['post-Category']}>
                  <option value="Floe">{'Floe'}</option>
                  <option value="Issue">{'Issue'}</option>
                </select>
              </div>
            </div>
          </div>
          {/* Title 영역 */}
          <div className={styles['title-Section']}>
            <div className={styles['title-Title-Box']}>
              <div className={styles['title-Title-Text']}>{'Title'}</div>
              <div className={styles['title-Title-Intro-Text']}>
                {'제목을 입력해주세요'}
              </div>
            </div>
            <div className={styles['title-Input-Box']}>
              <input
                className={styles['title-Input']}
                placeholder="Enter your Title..."
              />
            </div>
          </div>

          <div className={styles['content-Section']}>
            <div className={styles['content-Title-Box']}>
              <div className={styles['content-Title-Text']}>{'Content'}</div>
              <div className={styles['content-Title-Intro-Text']}>
                {'제목을 입력해주세요'}
              </div>
            </div>
            <div className={styles['content-Input-Box']}>
              <div className={styles.editorContainer}>
                <div className={styles.toolbar}>
                  <button
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    className={styles.toolbarButton}>
                    <b>B</b>
                  </button>
                  <button
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    className={styles.toolbarButton}>
                    <i>I</i>
                  </button>
                  <button
                    onClick={() => editor?.chain().focus().toggleCode().run()}
                    className={styles.toolbarButton}>
                    {'<>'}
                  </button>
                </div>
                <div className={styles['divider']}></div>
                {editor && (
                  <EditorContent editor={editor} className={styles.editor} />
                )}
              </div>
            </div>
          </div>

          <div className={styles['image-Section']}>
            <div className={styles['image-Title-Box']}>
              <div className={styles['image-Title-Text']}>{'Image'}</div>
              <div className={styles['image-Title-Intro-Text']}>
                {'이미지를 첨부하세요'}
              </div>
            </div>

            <div className={styles['image-Input-Box']}>
              <div className={styles['image-Input-button-box']}>
                <div className={styles['image-Input-button']}></div>
              </div>{' '}
              <div className={styles['image-section-divider']}></div>
              <div className={styles['image-upload-section']}>
                <img
                  className={styles['image']}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft6qLEtpNiHixidJCHNYERc2cOH-AHLKFfA&s"
                />
                <div className={styles['image-close-button']}></div>
              </div>
              <div className={styles['image-upload-section']}>
                <img
                  className={styles['image']}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft6qLEtpNiHixidJCHNYERc2cOH-AHLKFfA&s"
                />
                <div className={styles['image-close-button']}></div>
              </div>
              <div className={styles['image-upload-section']}>
                <img
                  className={styles['image']}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft6qLEtpNiHixidJCHNYERc2cOH-AHLKFfA&s"
                />
                <div className={styles['image-close-button']}></div>
              </div>
              <div className={styles['image-upload-section']}>
                <img
                  className={styles['image']}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft6qLEtpNiHixidJCHNYERc2cOH-AHLKFfA&s"
                />
                <div className={styles['image-close-button']}></div>
              </div>
              <div className={styles['image-upload-section']}>
                <img
                  className={styles['image']}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft6qLEtpNiHixidJCHNYERc2cOH-AHLKFfA&s"
                />
                <div className={styles['image-close-button']}></div>
              </div>
              <div className={styles['image-upload-section']}>
                <img
                  className={styles['image']}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft6qLEtpNiHixidJCHNYERc2cOH-AHLKFfA&s"
                />
                <div className={styles['image-close-button']}></div>
              </div>
              <div className={styles['image-upload-section']}>
                <img
                  className={styles['image']}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRft6qLEtpNiHixidJCHNYERc2cOH-AHLKFfA&s"
                />
                <div className={styles['image-close-button']}></div>
              </div>
            </div>
          </div>

          <div className={styles['upload-Section']}>
            <button className={styles['upload-Button']}>Upload</button>
          </div>
        </div>
      </div>
    </>
  );
}
