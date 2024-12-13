import {create} from 'zustand';

interface RecordTypeStore{
    recordType: 'FLOE' | 'ISSUE';
    setRecordType: (recordType: 'FLOE' | 'ISSUE') => void;
}

const useRecordTypeStore = create<RecordTypeStore>((set) => ({
    recordType:'FLOE',
    setRecordType: (recordType) => set({ recordType }), // 상태 업데이트 함수
}));

export default useRecordTypeStore;