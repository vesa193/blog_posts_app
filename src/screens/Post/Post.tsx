import React from 'react';
import Grid from '@mui/material/Grid/Grid';
import PostCard from '../../components/PostCard/PostCard';
import { useLocation } from 'react-router-dom';
import { AppProps } from '../../interfaces/interfaces';

const Post = ({ log }: AppProps) => {
    const location = useLocation();

    console.log(`${log} Post`);

    return (
        <p>Post {location.pathname}</p>
        // <Grid container justifyContent="center" spacing={2}>
        //     {posts?.map(post => {
        //         return (
        //             <Grid key={post.id} item xs={10}>
        //                 <PostCard
        //                     title={post.title}
        //                     body={post.body}
        //                     author={getUser(post?.userId)?.name}
        //                     handleOnClick={() => navigate(`/post/${post.id}`)}
        //                 />
        //             </Grid>
        //         );
        //     })}
        // </Grid>
    );
}

export default Post;