import { Container, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid/Grid';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { serverURL } from '../../api/api';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import PostComment from '../../components/PostComment/PostComment';
import { AppProps, CommentsList, Post, User } from '../../interfaces/interfaces';

interface CustomizedState {
    userId: number;
}

const SinglePost = ({ log }: AppProps) => {
    const location = useLocation();
    const apiURL = serverURL || '';
    const [post, setPost] = useState<Post | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [comments, setComments] = useState<CommentsList['comments'] | null>(null);
    const postId: string | undefined = location.pathname.split('/').at(-1);
    const state = location.state as CustomizedState;
    const { userId } = state;

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(`${log} SinglePost`);

        fetch(`${apiURL}/posts/${postId || ''}`)
            .then((response) => response.json())
            .then((json) => setPost(json));

        fetch(`${apiURL}/users/${userId}`)
            .then((response) => response.json())
            .then((json) => setUser(json));

        fetch(`${apiURL}/posts/${postId || ''}/comments`)
            .then((response) => response.json())
            .then((json) => setComments(json));
    }, [setPost, setUser, setComments, apiURL, postId, userId, log]);

    return (
        <Container>
            <Header title="Post" />
            <Grid item xs={10}>
                <PostCard
                    title={post?.title || 'No title'}
                    body={post?.body || 'No body'}
                    author={user?.name}
                    hasButton={false}
                />
            </Grid>
            <Divider sx={{ margin: '40px 0' }} />
            <Typography variant="h6">Comments</Typography>
            <br />
            <br />
            {comments?.length ? (
                <Grid item xs={10} sx={{ backgroundColor: '#ccc', padding: 4 }}>
                    {comments?.map((comment) => (
                        <PostComment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
                    ))}
                </Grid>
            ) : null}
        </Container>
    );
};

export default SinglePost;
