import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList: any, action: any) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((p) => p.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.post;
  }

  return newPostList;
};

const PostListProvider = ({ children }: any) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post: any) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (post: []) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        post,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
