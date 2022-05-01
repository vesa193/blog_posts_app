import React from 'react';
import { Navigate } from 'react-router-dom';

const NotFound = () => (
    <>
        <p>Not Found</p>
        <Navigate to="posts" replace />
    </>
);

export default NotFound;
