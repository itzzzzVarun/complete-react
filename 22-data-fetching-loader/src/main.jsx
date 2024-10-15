import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreatePost, { submitAction } from './components/CreatePost.jsx'
import PostList, { postLoader } from './components/PostList.jsx'

const router = createBrowserRouter([
    {path: "/", element: <App />, children:[
    {path: "/", element: <PostList />, loader: postLoader},
    {path: "/create-post", element: <CreatePost />, action: submitAction}
  ]},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)