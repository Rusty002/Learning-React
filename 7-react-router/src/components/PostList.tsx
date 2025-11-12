import Post from "./Post";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { PostList as PostListData } from "../store/Post-list-store";

const PostList = () => {
  const { postList, fetchData } = useContext(PostListData);

  return (
    <>
      {fetchData && <LoadingSpinner />}
      {!fetchData && postList?.length === 0 && <WelcomeMessage />}
      {!fetchData &&
        postList?.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
