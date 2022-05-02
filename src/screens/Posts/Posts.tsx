import RotateRightIcon from '@mui/icons-material/RotateRight';
import Button from '@mui/material/Button/Button';
import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import TextField from '@mui/material/TextField/TextField';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { serverURL } from '../../api/api';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import { AppProps, PostsList, UsersList } from '../../interfaces/interfaces';

const Posts = ({ log }: AppProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { search } = location;
    const params = new URLSearchParams(search);
    const userNameQueryParam = params.get('userName');
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

        navigate({ pathname: '/posts', search });
    }, [setPosts, setUsers, navigate, apiURL, log, search]);

    const handleOnChange = (value: string) => {
        if (value?.length > 3) {
            navigate({ pathname: '/posts', search: `?userName=${value}` });
            return;
        }

        navigate({ pathname: '/posts', search: '' });
    };

    const handleReset = () => {
        navigate({ pathname: '/posts', search: '' });
    };

    const getUser = (userId: number) => users?.find((user) => (user.id === userId ? user : ''));
    const getUserId = (name: string) =>
        users?.find((user) => (user.name.toLowerCase().includes(name.toLowerCase()) ? user : null));

    return (
        <Container>
            <Header title="Posts" />
            <TextField
                id="outlined-basic"
                autoComplete="off"
                label="Filter posts per name of user"
                variant="outlined"
                onChange={(e) => handleOnChange(e.target.value)}
            />
            <Button variant="outlined" startIcon={<RotateRightIcon />} onClick={handleReset}>
                Reset
            </Button>
            <Grid justifyContent="center">
                {!userNameQueryParam &&
                    posts?.map((post) => (
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
                {userNameQueryParam &&
                    posts
                        ?.filter((post) => post.userId === getUserId(userNameQueryParam)?.id)
                        ?.map((post) => (
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

                {userNameQueryParam &&
                    posts?.filter((post) => post.userId === getUserId(userNameQueryParam)?.id)?.length === 0 && (
                        <Grid item xs={10} sx={{ paddingBottom: 2 }}>
                            <p>No result</p>
                        </Grid>
                    )}
            </Grid>
        </Container>
    );
};

export default Posts;
