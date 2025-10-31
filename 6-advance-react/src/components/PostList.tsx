import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useContext, useEffect, useState } from "react";
import { PostList as PostListData } from "../store/Post-list-store";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetchData, setFetchData] = useState(false);

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
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetchData && <LoadingSpinner />}
      {!fetchData && postList?.length === 0 && <WelcomeMessage />}
      {!fetchData && postList?.map((post) => <Post post={post} />)}
    </>
  );
};

export default PostList;
