import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid/Grid';
import PostCard from '../../components/PostCard/PostCard';
import { AppProps, PostsList, UsersList } from '../../interfaces/interfaces';

const Posts = ({ log }: AppProps) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<PostsList['posts'] | null>(null);
    const [users, setUsers] = useState<UsersList['users'] | null>(null);

    
    useEffect(() => {
        console.log(`${log} Posts`);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json));
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json));
    }, [setPosts, setUsers, log]);

    const getUser = (userId: number) => users?.find(user => user.id === userId ? user : ''); 

    return (
        <Grid container justifyContent="center" spacing={2}>
            {posts?.map(post => {
                return (
                    <Grid key={post.id} item xs={10}>
                        <PostCard
                            title={post.title}
                            body={post.body}
                            author={getUser(post?.userId)?.name}
                            handleOnClick={() => navigate(`/post/${post.id}`)}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Posts;