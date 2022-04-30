import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound/NotFound';
import Posts from './screens/Posts/Posts';
import Post from './screens/Post/Post';

function App() {
  return (
    <div>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
