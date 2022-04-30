import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound/NotFound';
import Posts from './screens/Posts/Posts';
import Post from './screens/Post/Post';
import { Container } from '@mui/material';

function App() {
  const logMessage: string = 'Hello from';

  return (
    <Container maxWidth="lg">
      <Routes>
        <Route path="posts" element={<Posts log={logMessage} />} />
        <Route path="/post/:postId" element={<Post log={logMessage} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
