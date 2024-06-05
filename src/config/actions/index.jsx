export const addNovel = (novel) => {
  return { type: "addNovel", payload: novel };
};
export const updateNovel = (newNovel) => {
  return { type: "updateNovel", payload: newNovel };
};
export const deleteNovel = (id) => {
  return { type: "deleteNovel", payload: id };
};
export const addComment = (data) => {
  return { type: "addComment", payload: data };
};
// export const addComment = (data) => {
//   return { type: "addComment", payload: data };
// };
export const editComment = (data) => {
  return { type: "editComment", payload: data };
};
export const deleteComment = (data) => {
  return { type: "deleteComment", payload: data };
};
