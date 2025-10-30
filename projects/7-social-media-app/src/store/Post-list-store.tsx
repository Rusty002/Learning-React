import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Dubai",
    body: "Hi Friends, I am going to Dubai for my vacations. Hope to enjoy a lot, Peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Dubai", "Enjoying"],
  },
  {
    id: 2,
    title: "Going to Turkey",
    body: "Hi Friends, I am going to Turkey for my vacations. Hope to enjoy a lot, Peace out",
    reactions: 3,
    userId: "user-4",
    tags: ["vacation", "Turkey", "Enjoying"],
  },
  {
    id: 3,
    title: "Going to Bali",
    body: "Hi Friends, I am going to Bali for my vacations. Hope to enjoy a lot, Peace out",
    reactions: 8,
    userId: "user-12",
    tags: ["vacation", "Bali", "Enjoying"],
  },
];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList: any, action: any) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter((p) => p.id !== action.payload.postId);
  }

  return newPostList;
};

const PostListProvider = ({ children }: any) => {
  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
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
