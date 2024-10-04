import { useContext } from "react"
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
 const { postList, addInitialPosts }  = useContext(PostListData)
 
  const handleOnGetPostsFromServer = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(obj => addInitialPosts(obj.posts));
  }

  return (
    <>
    {postList.length === 0 && <WelcomeMsg  onGetPostsClick={handleOnGetPostsFromServer}/>}
    {postList.map((post) => (<Post key={post.id} post={post} Post />))}
    </>
  )
}

export default PostList