import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

export const PostList = createContext({
  postList: [],
  fetchData: false,
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
  const [fetchData, setFetchData] = useState(false);

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

  useEffect(() => {
    setFetchData(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetchData(false);
      });

    return () => {
      //controller.abort();
    };
  }, []);

  const arr = [2, 5, 3, 1, 0];
  const sortedArray = useMemo(() => arr.sort(), [arr]);

  return (
    <PostList.Provider
      value={{
        postList,
        fetchData,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
