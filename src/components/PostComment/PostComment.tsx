import React from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import { Comment } from '../../interfaces/interfaces';
import './PostComment.css';

const PostComment = ({name, email, body}: Comment) => {
  return (
    <Paper className="post-comment">
        <Grid container wrap="nowrap" spacing={2}>
            <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 className="post-comment-name">{name}</h4>
                <p className="post-comment-body">
                    {body}
                </p>
                <Typography sx={{ color: '#616161' }} className="post-comment-email">
                  posted from {email}
                </Typography>
            </Grid>
        </Grid>
    </Paper>
  )
}


export default PostComment;
