import {createContext, useReducer } from "react";



export const PostList = createContext(
  {
    postList : [],
    addPost : () => {},
    deletePost : () => {}
  }
)

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList
  if (action.type === 'DELETE_POST') {
    
    newPostList = currPostList.filter((post) => 
      post.id !== action.payload.postId
    )
  } else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList
} 

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(
    postListReducer, 
    DEFAULT_POST_LIST
  )

  const addPost = (userId, postTitle, postBody,postReactions, postTags) => {


    dispatchPostList({
      type : 'ADD_POST',
      payload : {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: userId,
        tags: postTags
      }

    })
  }
  
  const deletePost = (postId) => {

    
    dispatchPostList({
      type: 'DELETE_POST',
      payload : {
        postId
      }})
  }

    return (
      <PostList.Provider value={{postList,  addPost, deletePost}}> 
        {children}  
      </ PostList.Provider>
    )
}

const DEFAULT_POST_LIST = [{
  id: '1',
  title: 'going to mumbai',
  body: 'Hii, Friends i am going to mumbai',
  reactions: 3,
  userId: 'user-9',
  tags: ['vacation', 'mumbai', 'enjoy']
},
{
id: '2',
title: 'kyo hue pass',
body: 'kya ab abhi quiz nhi hogi',
reactions: 0,
userId: 'user-dead',
tags: ['L lg gye', 'not placed', 'sucide']
}]

export default PostListProvider