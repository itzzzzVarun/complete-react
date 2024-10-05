import { useContext, useEffect, useState} from "react"
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Loading from "./Loading";

const PostList = () => {
 const { postList, addInitialPosts }  = useContext(PostListData);
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(obj => {
      addInitialPosts(obj.posts);
      setFetching(false);
    });
  }, [])

  return (
    <>
    {fetching && <Loading />}
    {!fetching && postList.length === 0 && <WelcomeMsg />}
    {!fetching && postList.map((post) => (<Post key={post.id} post={post} Post />))}
    </>
  )
}

export default PostList