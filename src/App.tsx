import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './screens/NotFound/NotFound';
import Posts from './screens/Posts/Posts';
import SinglePost from './screens/SinglePost/SinglePost';
import { Container } from '@mui/material';

function App() {
  const logMessage: string = 'Hello from';

  return (
    <Container maxWidth="lg" sx={{ padding: '40px 0' }}>
      <Routes>
        <Route path="posts" element={<Posts log={logMessage} />} />
        <Route path="/post/:postId" element={<SinglePost log={logMessage} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
