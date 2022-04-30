import React from 'react';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea/CardActionArea';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { PostCardProps } from '../../interfaces/interfaces';

const PostCard = ({ title, body, author, handleOnClick }: PostCardProps) => {
    return (
        <Card sx={{ maxWidth: 'auto' }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
                <Typography variant="body1" color="text.primary">
                    {author}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={handleOnClick}>
                    View Post
                </Button>
            </CardActions>
        </Card>
    );
}
 
export default PostCard;