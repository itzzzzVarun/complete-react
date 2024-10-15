import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
// import Loading from "./Loading";

import { useLoaderData } from 'react-router-dom'

const PostList = () => {
//  const { postList, /*fetching*/ }  = useContext(PostListData);

const postList = useLoaderData();
  return (
    <>
    {/* {fetching && <Loading />} */}
    {/*!fetching &&*/ postList.length === 0 && <WelcomeMsg />}
    {/*!fetching &&*/ postList.map((post) => (<Post key={post.id} post={post} Post />))}
    </>
  )
}

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts', /*signal*/)
  .then(res => res.json())
  .then(obj => {
    return obj.posts;
  });
}

export default PostList