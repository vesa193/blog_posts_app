import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';
import Container from '@mui/material/Container/Container';
import PostCard from '../../components/PostCard/PostCard';
import { AppProps, PostsList, UsersList } from '../../interfaces/interfaces';
import Header from '../../components/Header/Header';

const Posts = ({ log }: AppProps) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<PostsList['posts'] | null>(null);
    const [users, setUsers] = useState<UsersList['users'] | null>(null);

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(`${log} Posts`);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json));
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, [setPosts, setUsers, log]);

    const getUser = (userId: number) => users?.find((user) => (user.id === userId ? user : ''));

    return (
        <Container>
            <Header title="Posts" />
            <Grid justifyContent="center" spacing={2}>
                {posts?.map((post) => (
                    <Grid key={post.id} item xs={10} sx={{ paddingBottom: 2 }}>
                        <PostCard
                            title={post.title}
                            body={post.body}
                            author={getUser(post?.userId)?.name}
                            hasButton
                            handleOnClick={() =>
                                navigate(`/post/${post.id}`, {
                                    state: { userId: post.userId },
                                })
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Posts;
