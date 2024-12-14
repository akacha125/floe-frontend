// store/record.store.ts
import { create } from 'zustand';

interface RecordStore {
  title: string;
  content: string;
  tagNames: string[];
  images: File[];
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setTagNames: (tags: string[]) => void;
  setImages: (images: File[]) => void;
  resetRecord: () => void; // 상태 초기화
}

const useRecordStore = create<RecordStore>((set) => ({
  title: '',
  content: '',
  tagNames: [],
  images: [],
  setTitle: (title) => set(() => ({ title })),
  setContent: (content) => set(() => ({ content })),
  setTagNames: (tagNames) => set(() => ({ tagNames })),
  setImages: (images) => set(() => ({ images })),
  resetRecord: () => set(() => ({ title: '', content: '', tags: [], images: [] })),
}));

export default useRecordStore;