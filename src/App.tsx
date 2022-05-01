import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import NotFound from './screens/NotFound/NotFound';
import Posts from './screens/Posts/Posts';
import SinglePost from './screens/SinglePost/SinglePost';

function App() {
    const logMessage = 'Hello from';

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
