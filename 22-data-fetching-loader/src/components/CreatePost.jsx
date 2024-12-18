// import { useContext, useRef } from "react"
// import { PostList }from "../store/post-list-store";
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {

  // const { addPost } = useContext(PostList);
  // const   naviagetTo = useNavigate();


  // const  userIdElement = useRef();
  // const  postTitleElement = useRef();
  // const  postBodyElement = useRef();
  // const  postTagsElement = useRef(); 
  // const  postReactionsElement = useRef(); 

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const userId = userIdElement.current.value;
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const postReactions = postReactionsElement.current.value.split(" ");
  //   const postTags = postTagsElement.current.value.split(" ");

  //   userIdElement.current.value = ""
  //   postTitleElement.current.value = ""
  //   postBodyElement.current.value = ""
  //   postReactionsElement.current.value = ""
  //   postTagsElement.current.value = ""


    // fetch('https://dummyjson.com/posts/add', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     title: postTitle,
    //     body: postBody,
    //     reactions: {likes: postReactions[0], dislikes: postReactions[1]},
    //     userId: userId,
    //     tags: postTags
    //   })
    // })
    // .then(res => res.json())
    // .then(post => {
    //   addPost(post);
    //   naviagetTo("/");
    // });
  
 
  return (
  <Form method="POST" className="create-post">
      <div className="mb-3">
      <label htmlFor="userId" className="form-label">User ID</label>
      <input type="text" 
      name="userId"
      className="form-control" id="userId" placeholder="Enter your userId..." />
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" 
      name="title"
      className="form-control" id="title" placeholder="How are you feeling today..." />
    </div>
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Description</label>
      <textarea type="text"
      name="body"
      rows="4" className="form-control" id="body" placeholder="Tell us more about it" />
    </div>
    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Enter number of likes and dislikes with space.</label>
      <input type="text"
      name="reactions"
      className="form-control" id="reactions" placeholder="Enter reactions..." />
    </div>
    <div className="mb-3">
      <label htmlFor="tags" className="form-label">HashTags</label>
      <input type="text" 
      name="tags"
      className="form-control" id="tags" placeholder="Enter hashtags..." />
    </div>

    <button type="submit" className="btn btn-primary">Post</button>
  </Form>
  )
}

export async function submitAction(data){
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.reactions = {likes: postData.reactions[0], dislikes: postData.reactions[1]}
  console.log(postData);
  
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(post => {
   console.log(post)
  });

  return redirect('/')
}


export default CreatePost