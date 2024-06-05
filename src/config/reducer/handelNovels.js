const novels = [];

const reducer = (state = novels, action) => {
  switch (action.type) {
    case "addNovel":
      return [...state, action.payload];

    case "updateNovel":
      const updatednovels = state.map((novel) => {
        if (novel.id === action.payload.id) {
          return {
            ...novel,
            title: action.payload.title,
            description: action.payload.description,
            genre: action.payload.genre,
          };
        }
        return novel;
      });
      return updatednovels;

    case "deleteNovel":
      return state.filter((novel) => novel.id !== action.payload.id);

    case "addComment":
      const novels = state.map((novel) => {
        if (novel.id === action.payload.id) {
          return {
            ...novel,
            comments: [
              ...novel.comments,
              { id: crypto.randomUUID(), text: action.payload.text },
            ],
          };
        }
        return novel;
      });
      return novels;

    case "deleteComment":
      return state.map((novel) => {
        if (novel.id === action.payload.novelId) {
          return {
            ...novel,
            comments: novel.comments.filter((comment) => {
              return comment.id !== action.payload.commentId;
            }),
          };
        } else {
          return novel;
        }
      });
    case "editComment":
      return state.map((novel) => {
        if (novel.id === action.payload.novelId) {
          return {
            ...novel,
            comments: novel.comments.map((comment) => {
              if (comment.id === action.payload.commentId) {
                return { ...comment, text: action.payload.newComment };
              } else {
                return comment;
              }
            }),
          };
        } else {
          return novel;
        }
      });

    // case "addComment":
    //   const updatedNovelsAddComment = state.novels.map((novel) => {
    //     if (novel.id === parseInt(action.payload.id)) {
    //       const updatedComments = [
    //         ...novel.comments,
    //         { id: crypto.randomUUID(), comment: action.payload.comment },
    //       ];
    //       return {
    //         ...novel,
    //         comments: updatedComments,
    //       };
    //     }
    //     return novel;
    //   });
    //   return { ...state, novels: updatedNovelsAddComment };

    // case "addComment":
    //   const findNovel = state.novels.find((novel) => novel.id === action.payload.id);
    //         const comments = findNovel.novelData.comment;
    //         comments.push(action.payload.comment)
    //         findNovel.novelData.comments = comments;
    //         state = {...state,
    //           novels: state.novels.map(nvl=>nvl.id=== action.payload.id? findNovel : nvl)}
    //         return state;

    // case "editComment":
    //   const updatedNovelsEditComment = state.novels.map((novel) => {
    //     if (novel.id === parseInt(action.payload.novelId)) {
    //       const updatedComments = novel.comments.map((comment) => {
    //         if (comment.id === action.payload.commentId) {
    //           return {
    //             ...comment,
    //             comment: action.payload.newComment,
    //           };
    //         }
    //         return comment;
    //       });
    //       return {
    //         ...novel,
    //         comments: updatedComments,
    //       };
    //     }
    //     return novel;
    //   });
    //   return { ...state, novels: updatedNovelsEditComment };

    // case "deleteComment":
    //   const updatedNovelsDeleteComment = state.novels.map((novel) => {
    //     if (novel.id === parseInt(action.payload.novelId)) {
    //       const updatedComments = novel.comments.filter(
    //         (comment) => comment.id !== action.payload.commentId
    //       );
    //       return {
    //         ...novel,
    //         comments: updatedComments,
    //       };
    //     }
    //     return novel;
    //   });
    //   return { ...state, novels: updatedNovelsDeleteComment };

    default:
      return state;
  }
};

export default reducer;
