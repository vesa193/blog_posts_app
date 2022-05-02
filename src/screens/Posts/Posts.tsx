import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid/Grid';
import Container from '@mui/material/Container/Container';
import PostCard from '../../components/PostCard/PostCard';
import { AppProps, PostsList, UsersList } from '../../interfaces/interfaces';
import Header from '../../components/Header/Header';
import { serverURL } from '../../api/api';

const Posts = ({ log }: AppProps) => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<PostsList['posts'] | null>(null);
    const [users, setUsers] = useState<UsersList['users'] | null>(null);
    const apiURL = serverURL || '';

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(`${log} Posts`);

        fetch(`${apiURL}/posts`)
            .then((response) => response.json())
            .then((json) => setPosts(json));

        fetch(`${apiURL}/users`)
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, [setPosts, setUsers, apiURL, log]);

    const getUser = (userId: number) => users?.find((user) => (user.id === userId ? user : ''));

    return (
        <Container>
            <Header title="Posts" />
            <Grid justifyContent="center">
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
