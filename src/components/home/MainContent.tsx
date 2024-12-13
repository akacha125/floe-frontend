// import mockData from './../../app/mock/mock';
// import PostItemCardType from '@/components/post/postItemCardType/page';
// import mockLikes from './../../app/mock/mockLike'; // 좋아요 목 데이터
// import mockComments from './../../app/mock/mockComment'; // 댓글 목 데이터

// export default function MainContent() {
//   return (
//     <div>
//       {mockData.map((record) => {
//         const likes = mockLikes.filter((like) => like.userEmail === record.user.email); // 좋아요 필터링
//         const comments = mockComments.filter(
//           (comment) => comment.recordId === record.recordId // 댓글 필터링
//         );

//         return (
//           <PostItemCardType
//             key={record.recordId}
//             record={record}
//             likes={likes}
//             comments={comments}
//           />
//         );
//       })}
//     </div>
//   );
// }