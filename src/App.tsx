import React from 'react';
import { BrowserRouter ,Route, Routes, Navigate } from 'react-router-dom';
import { useGetAllPostsQuery } from './api/postsApi';
import './App.css';
import Post from './pages/Post/Post';
import PostList from './pages/PostsList/PostList';
import Layout from './layout/Layout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/posts"/>}/>
        <Route path="/posts" element={<PostList />}/>
        <Route path="/posts/:id" element={<Post />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
